/**
 * FaisabilitePLU — Module de synchronisation base regles
 * Cadence Architectes - Sync localStorage <-> base_regles_plu.js via serveur
 */
(function(){
  'use strict';

  var SYNC_API = '/api/save-regles';
  var BASE_KEY = 'basePLU';
  var SYNC_META_KEY = 'fplu_sync_meta';

  // ── CSS ──
  var css = `
  #sync-widget {
    position: fixed; bottom: 28px; left: 22px; z-index: 8700;
    background: #0f172a; color: #e2e8f0; border-radius: 10px;
    padding: 0; font-family: -apple-system, system-ui, sans-serif;
    box-shadow: 0 4px 20px rgba(0,0,0,.3); font-size: 12px;
    min-width: 52px; transition: all .25s; overflow: hidden;
    border: 1px solid rgba(255,255,255,.08);
  }
  #sync-widget.expanded { min-width: 320px; }

  #sync-toggle {
    padding: 10px 14px; cursor: pointer; display: flex; align-items: center; gap: 8px;
    user-select: none;
  }
  #sync-toggle:hover { background: rgba(255,255,255,.05); }

  .sync-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
  .sync-dot.online { background: #4ade80; box-shadow: 0 0 6px #4ade80; }
  .sync-dot.offline { background: #f59e0b; }
  .sync-dot.error { background: #ef4444; }
  .sync-dot.syncing { background: #3b82f6; animation: sync-pulse .8s infinite; }
  @keyframes sync-pulse { 0%,100%{opacity:1} 50%{opacity:.3} }

  #sync-label { font-weight: 600; font-size: 12px; white-space: nowrap; }
  #sync-count { font-size: 10px; color: #94a3b8; margin-left: auto; }

  #sync-panel {
    display: none; padding: 0 14px 14px; border-top: 1px solid rgba(255,255,255,.06);
  }
  #sync-widget.expanded #sync-panel { display: block; }

  .sync-row { display: flex; justify-content: space-between; padding: 5px 0; font-size: 11px; }
  .sync-row .sr-label { color: #94a3b8; }
  .sync-row .sr-val { color: #e2e8f0; font-weight: 600; }
  .sync-row .sr-val.ok { color: #4ade80; }
  .sync-row .sr-val.warn { color: #f59e0b; }

  #sync-actions { display: flex; gap: 6px; margin-top: 10px; }
  .sync-btn {
    flex: 1; padding: 7px 10px; border: none; border-radius: 6px;
    font-size: 11px; font-weight: 700; cursor: pointer; font-family: inherit;
    transition: background .15s;
  }
  .sync-btn.primary { background: #2563eb; color: #fff; }
  .sync-btn.primary:hover { background: #1d4ed8; }
  .sync-btn.ghost { background: rgba(255,255,255,.08); color: #94a3b8; }
  .sync-btn.ghost:hover { background: rgba(255,255,255,.12); color: #fff; }

  #sync-log {
    margin-top: 8px; font-size: 10px; color: #64748b; max-height: 60px;
    overflow-y: auto; line-height: 1.6;
  }
  #sync-log .log-ok { color: #4ade80; }
  #sync-log .log-err { color: #ef4444; }
  `;

  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── State ──
  var state = {
    online: false,
    syncing: false,
    lastSync: null,
    localCount: 0,
    serverCount: 0,
    lastError: null
  };

  // Load sync meta
  try {
    var meta = JSON.parse(localStorage.getItem(SYNC_META_KEY) || '{}');
    state.lastSync = meta.lastSync || null;
  } catch(e) {}

  // ── Build UI ──
  var widget = document.createElement('div');
  widget.id = 'sync-widget';
  widget.innerHTML = `
    <div id="sync-toggle">
      <span class="sync-dot offline" id="sync-dot"></span>
      <span id="sync-label">Hors ligne</span>
      <span id="sync-count"></span>
    </div>
    <div id="sync-panel">
      <div class="sync-row"><span class="sr-label">Base locale</span><span class="sr-val" id="sp-local">0 regles</span></div>
      <div class="sync-row"><span class="sr-label">Fichier partage</span><span class="sr-val" id="sp-server">—</span></div>
      <div class="sync-row"><span class="sr-label">Derniere sync</span><span class="sr-val" id="sp-last">Jamais</span></div>
      <div class="sync-row"><span class="sr-label">Statut</span><span class="sr-val" id="sp-status">—</span></div>
      <div id="sync-actions">
        <button class="sync-btn primary" onclick="window._syncNow()">&#8635; Synchroniser</button>
        <button class="sync-btn ghost" onclick="window._syncPull()">&#8595; Charger fichier</button>
      </div>
      <div id="sync-log"></div>
    </div>
  `;
  document.body.appendChild(widget);

  // ── Toggle expand ──
  document.getElementById('sync-toggle').addEventListener('click', function() {
    widget.classList.toggle('expanded');
    if (widget.classList.contains('expanded')) refreshPanel();
  });

  // ── Check server ──
  function checkServer() {
    fetch(SYNC_API, { method: 'OPTIONS' })
      .then(function() { setOnline(true); })
      .catch(function() {
        // OPTIONS may fail, try HEAD on base file
        fetch('/base_regles_plu.js', { method: 'HEAD' })
          .then(function(r) { setOnline(r.ok); })
          .catch(function() { setOnline(false); });
      });
  }

  function setOnline(v) {
    state.online = v;
    var dot = document.getElementById('sync-dot');
    var label = document.getElementById('sync-label');
    if (state.syncing) {
      dot.className = 'sync-dot syncing';
      label.textContent = 'Synchronisation...';
    } else if (v) {
      dot.className = 'sync-dot online';
      label.textContent = 'Connecte';
    } else {
      dot.className = 'sync-dot offline';
      label.textContent = 'Hors ligne';
    }
  }

  // ── Count local entries ──
  function countLocal() {
    try {
      var base = JSON.parse(localStorage.getItem(BASE_KEY) || '{}');
      state.localCount = Object.keys(base).length;
    } catch(e) { state.localCount = 0; }
    document.getElementById('sync-count').textContent = state.localCount + ' regles';
    return state.localCount;
  }

  // ── Refresh panel ──
  function refreshPanel() {
    countLocal();
    document.getElementById('sp-local').textContent = state.localCount + ' regles';
    document.getElementById('sp-server').textContent = state.serverCount ? state.serverCount + ' regles' : '—';
    document.getElementById('sp-last').textContent = state.lastSync ? new Date(state.lastSync).toLocaleString('fr-FR') : 'Jamais';
    var statusEl = document.getElementById('sp-status');
    if (state.syncing) { statusEl.textContent = 'En cours...'; statusEl.className = 'sr-val warn'; }
    else if (state.online) { statusEl.textContent = 'Pret'; statusEl.className = 'sr-val ok'; }
    else { statusEl.textContent = 'Serveur non accessible'; statusEl.className = 'sr-val warn'; }
  }

  function addLog(msg, type) {
    var el = document.getElementById('sync-log');
    var cls = type === 'ok' ? 'log-ok' : type === 'err' ? 'log-err' : '';
    el.innerHTML = '<div class="' + cls + '">' + new Date().toLocaleTimeString('fr-FR') + ' ' + msg + '</div>' + el.innerHTML;
  }

  // ── Sync: Push local → server ──
  window._syncNow = function() {
    if (state.syncing) return;
    state.syncing = true;
    setOnline(true);
    addLog('Envoi de la base locale vers le serveur...', '');

    var base;
    try { base = JSON.parse(localStorage.getItem(BASE_KEY) || '{}'); } catch(e) { base = {}; }

    fetch(SYNC_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(base)
    })
    .then(function(r) { return r.json(); })
    .then(function(d) {
      state.syncing = false;
      if (d.ok) {
        state.lastSync = new Date().toISOString();
        state.serverCount = d.count;
        try { localStorage.setItem(SYNC_META_KEY, JSON.stringify({ lastSync: state.lastSync })); } catch(e) {}
        addLog('OK — ' + d.count + ' regles ecrites dans ' + d.file, 'ok');
        setOnline(true);
      } else {
        addLog('Erreur serveur: ' + (d.error || '?'), 'err');
        setOnline(true);
      }
      refreshPanel();
    })
    .catch(function(e) {
      state.syncing = false;
      state.online = false;
      addLog('Echec connexion: ' + e.message, 'err');
      setOnline(false);
      refreshPanel();
    });
  };

  // ── Sync: Pull server → local ──
  window._syncPull = function() {
    addLog('Chargement du fichier partage...', '');
    fetch('/base_regles_plu.js?t=' + Date.now())
      .then(function(r) { return r.text(); })
      .then(function(txt) {
        // Extraire le JSON de "const BASE_REGLES_PLU = {...};"
        var match = txt.match(/const\s+BASE_REGLES_PLU\s*=\s*(\{[\s\S]*\});/);
        if (!match) { addLog('Format fichier non reconnu', 'err'); return; }
        try {
          var serverBase = JSON.parse(match[1]);
          var localBase;
          try { localBase = JSON.parse(localStorage.getItem(BASE_KEY) || '{}'); } catch(e) { localBase = {}; }
          // Merge: server + local (local prend le dessus en cas de conflit)
          var merged = Object.assign({}, serverBase, localBase);
          var added = Object.keys(serverBase).filter(function(k) { return !localBase[k]; }).length;
          localStorage.setItem(BASE_KEY, JSON.stringify(merged));
          // Mettre a jour basePLU en memoire si existe
          if (typeof window.basePLU !== 'undefined') {
            Object.assign(window.basePLU, merged);
          }
          state.serverCount = Object.keys(serverBase).length;
          state.localCount = Object.keys(merged).length;
          addLog('Charge: ' + state.serverCount + ' regles serveur, +' + added + ' nouvelles', 'ok');
          refreshPanel();
        } catch(e) {
          addLog('Erreur parsing: ' + e.message, 'err');
        }
      })
      .catch(function(e) {
        addLog('Echec chargement: ' + e.message, 'err');
      });
  };

  // ── Auto-sync global function (called by other scripts) ──
  window.syncBaseToServer = function() {
    if (!state.online) return;
    var base;
    try { base = JSON.parse(localStorage.getItem(BASE_KEY) || '{}'); } catch(e) { return; }
    fetch(SYNC_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(base)
    })
    .then(function(r) { return r.json(); })
    .then(function(d) {
      if (d.ok) {
        state.lastSync = new Date().toISOString();
        state.serverCount = d.count;
        try { localStorage.setItem(SYNC_META_KEY, JSON.stringify({ lastSync: state.lastSync })); } catch(e) {}
        countLocal();
        console.log('[SYNC] Auto-sync OK — ' + d.count + ' regles');
      }
    })
    .catch(function() { /* silencieux en auto-sync */ });
  };

  // ── Init ──
  countLocal();
  checkServer();
  // Re-check server status every 30s
  setInterval(checkServer, 30000);
  // Auto-pull at startup if server is available
  setTimeout(function() {
    if (state.online) window._syncPull();
  }, 2000);

})();
