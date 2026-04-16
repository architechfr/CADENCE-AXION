/**
 * FaisabilitéPLU — Widget retour utilisateur
 * Cadence Architectes © 2026 — f.clarisse@cadence-architectes.fr
 */
(function () {
  'use strict';

  // Charger html2canvas si pas deja present
  if (!window.html2canvas) {
    var sc = document.createElement('script');
    sc.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
    document.head.appendChild(sc);
  }

  var CONTACT_EMAIL = 'f.clarisse@cadence-architectes.fr';
  var APP_NAME = 'FaisabilitéPLU';

  /* ── CSS ─────────────────────────────────────────── */
  var css = `
  #fb-btn {
    position: fixed; bottom: 22px; right: 22px; z-index: 8800;
    background: #1e3a5f; color: #fff; border: none; border-radius: 50px;
    padding: 9px 16px 9px 13px; cursor: pointer; font-size: 13px; font-weight: 600;
    display: flex; align-items: center; gap: 7px; box-shadow: 0 4px 16px rgba(0,0,0,.28);
    transition: background .18s, transform .15s; font-family: inherit; letter-spacing: .01em;
  }
  #fb-btn:hover { background: #2563eb; transform: translateY(-1px); }
  #fb-btn .fb-dot { width:8px; height:8px; background:#4ade80; border-radius:50%; flex-shrink:0; }

  #fb-overlay {
    display: none; position: fixed; inset: 0; background: rgba(0,0,0,.55);
    z-index: 8900; align-items: flex-end; justify-content: flex-end;
    padding: 22px;
  }
  #fb-overlay.open { display: flex; }

  #fb-modal {
    background: #fff; border-radius: 14px; width: 400px; max-width: calc(100vw - 44px);
    box-shadow: 0 12px 48px rgba(0,0,0,.3); overflow: hidden;
    font-family: 'Inter', system-ui, sans-serif; font-size: 13px;
  }

  #fb-modal .fb-head {
    background: linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%);
    color: #fff; padding: 14px 18px 12px; display: flex; align-items: center; justify-content: space-between;
  }
  #fb-modal .fb-head h3 { margin: 0; font-size: 14px; font-weight: 700; letter-spacing: .01em; }
  #fb-modal .fb-head .fb-close {
    background: rgba(255,255,255,.18); border: none; border-radius: 50%; width: 28px; height: 28px;
    color: #fff; font-size: 16px; cursor: pointer; display: flex; align-items: center; justify-content: center;
  }
  #fb-modal .fb-head .fb-close:hover { background: rgba(255,255,255,.3); }

  #fb-modal .fb-body { padding: 16px 18px; }

  #fb-modal .fb-types {
    display: flex; gap: 6px; margin-bottom: 13px; flex-wrap: wrap;
  }
  #fb-modal .fb-type {
    padding: 5px 12px; border-radius: 99px; border: 1.5px solid #d1d5db;
    background: #f9fafb; cursor: pointer; font-size: 12px; font-weight: 600;
    color: #374151; transition: all .15s;
  }
  #fb-modal .fb-type.active { border-color: #2563eb; background: #eff6ff; color: #1d4ed8; }

  #fb-modal label { display: block; font-weight: 600; color: #374151; margin-bottom: 5px; }
  #fb-modal textarea {
    width: 100%; box-sizing: border-box; border: 1.5px solid #d1d5db; border-radius: 8px;
    padding: 9px 11px; font-size: 13px; font-family: inherit; resize: vertical; min-height: 90px;
    color: #111; outline: none; transition: border-color .15s;
  }
  #fb-modal textarea:focus { border-color: #2563eb; }

  #fb-modal .fb-context {
    margin-top: 10px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 7px;
    padding: 8px 11px; font-size: 11px; color: #64748b; line-height: 1.6;
  }
  #fb-modal .fb-context strong { color: #334155; }

  #fb-modal .fb-disclaimer {
    margin-top: 10px; font-size: 10.5px; color: #9ca3af; line-height: 1.5;
    border-top: 1px solid #f3f4f6; padding-top: 10px;
  }

  #fb-modal .fb-actions { display: flex; gap: 8px; margin-top: 13px; }
  #fb-modal .fb-send {
    flex: 1; background: #2563eb; color: #fff; border: none; border-radius: 8px;
    padding: 10px 14px; font-size: 13px; font-weight: 700; cursor: pointer;
    font-family: inherit; transition: background .15s;
  }
  #fb-modal .fb-send:hover { background: #1d4ed8; }
  #fb-modal .fb-copy {
    background: #f1f5f9; color: #475569; border: none; border-radius: 8px;
    padding: 10px 12px; font-size: 12px; font-weight: 600; cursor: pointer;
    font-family: inherit; transition: background .15s; white-space: nowrap;
  }
  #fb-modal .fb-copy:hover { background: #e2e8f0; }

  #fb-confirm {
    display: none; text-align: center; padding: 24px 18px 20px;
  }
  #fb-confirm .fb-check { font-size: 36px; margin-bottom: 10px; }
  #fb-confirm h4 { margin: 0 0 8px; color: #065f46; font-size: 15px; }
  #fb-confirm p { margin: 0; color: #374151; font-size: 12px; line-height: 1.6; }
  #fb-confirm .fb-close-ok {
    margin-top: 14px; background: #059669; color: #fff; border: none; border-radius: 8px;
    padding: 9px 20px; font-size: 13px; font-weight: 700; cursor: pointer; font-family: inherit;
  }
  `;

  /* ── Inject CSS ──────────────────────────────────── */
  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ── Types de retour ─────────────────────────────── */
  var TYPES = [
    { id: 'suggestion', label: '💡 Suggestion', emoji: '💡' },
    { id: 'correction', label: '✏️ Correction', emoji: '✏️' },
    { id: 'anomalie',   label: '⚠️ Anomalie',   emoji: '⚠️' },
    { id: 'bravo',      label: '👍 Bravo',       emoji: '👍' }
  ];

  var selectedType = 'anomalie';

  /* ── Capture contexte page ───────────────────────── */
  function getPageContext() {
    var ctx = {
      page: document.title || window.location.pathname.split('/').pop(),
      url: window.location.href,
      date: new Date().toLocaleString('fr-FR'),
      navigateur: navigator.userAgent.match(/(Chrome|Firefox|Safari|Edge)[\/\s][\d.]+/)?.[0] || 'Inconnu'
    };
    // Données PLU si disponibles (faisabilite.html)
    try {
      if (window.PLU && window.PLU.zone) {
        ctx.zone = window.PLU.zone;
        ctx.ces = window.PLU.ces;
        ctx.hmax = window.PLU.hmax;
        ctx.rrue = window.PLU.rrue;
        ctx.source = window.PLU.source;
      }
      if (window.ST && window.ST.commune) {
        ctx.commune = window.ST.commune;
        ctx.insee = window.ST.lastInsee;
        ctx.adresse = window.ST.label;
      }
    } catch(e) {}
    return ctx;
  }

  function formatContext(ctx) {
    var lines = ['📋 Contexte automatique :'];
    lines.push('• Page : ' + ctx.page);
    if (ctx.commune) lines.push('• Commune : ' + ctx.commune + (ctx.insee ? ' (' + ctx.insee + ')' : ''));
    if (ctx.zone) lines.push('• Zone PLU : ' + ctx.zone);
    if (ctx.ces !== undefined) lines.push('• CES/Hmax : ' + ctx.ces + '% / ' + ctx.hmax + 'm');
    if (ctx.source) lines.push('• Source données : ' + ctx.source);
    lines.push('• Date : ' + ctx.date);
    lines.push('• Navigateur : ' + ctx.navigateur);
    return lines.join('\n');
  }

  function formatContextHTML(ctx) {
    var parts = ['<strong>Page :</strong> ' + ctx.page];
    if (ctx.commune) parts.push('<strong>Commune :</strong> ' + ctx.commune + (ctx.insee ? ' (' + ctx.insee + ')' : ''));
    if (ctx.zone) parts.push('<strong>Zone :</strong> ' + ctx.zone);
    if (ctx.ces !== undefined) parts.push('<strong>CES / Hmax :</strong> ' + ctx.ces + '% / ' + ctx.hmax + 'm');
    parts.push('<strong>Date :</strong> ' + ctx.date);
    return parts.join('&nbsp;&nbsp;·&nbsp;&nbsp;');
  }

  /* ── Build modal HTML ────────────────────────────── */
  function buildModal() {
    var typesBtns = TYPES.map(function(t) {
      return '<button class="fb-type' + (t.id === selectedType ? ' active' : '') + '" data-type="' + t.id + '">' + t.label + '</button>';
    }).join('');

    return `
      <div class="fb-head">
        <h3>💬 Retour utilisateur</h3>
        <button class="fb-close" id="fb-close-btn" title="Fermer">✕</button>
      </div>
      <div class="fb-body" id="fb-form-body">
        <div class="fb-types" id="fb-types">${typesBtns}</div>
        <label for="fb-msg">Votre message <span style="color:#9ca3af;font-weight:400">(requis)</span></label>
        <textarea id="fb-msg" placeholder="Décrivez votre retour, suggestion ou anomalie constatée…"></textarea>
        <div class="fb-context" id="fb-context-info"></div>
        <div class="fb-disclaimer">
          ⚠️ Ce retour sera envoyé à <strong>Cadence Architectes</strong> par email.
          Aucune donnée personnelle n'est collectée automatiquement.
          Joignez une capture d'écran si utile (touche Impr. écran ou Cmd+Shift+4).
        </div>
        <div id="fb-screenshot-preview" style="display:none;margin-top:10px;border:1px solid #e2e8f0;border-radius:6px;overflow:hidden;position:relative">
          <img id="fb-screenshot-img" style="width:100%;display:block" />
          <button id="fb-screenshot-remove" style="position:absolute;top:4px;right:4px;background:rgba(0,0,0,.6);color:#fff;border:none;border-radius:50%;width:22px;height:22px;cursor:pointer;font-size:12px">\u2715</button>
        </div>
        <div class="fb-actions">
          <button class="fb-send" id="fb-send-btn">\u2709\uFE0F Envoyer par email</button>
          <button class="fb-copy" id="fb-screenshot-btn">\uD83D\uDCF7 Capture d\u2019\u00e9cran</button>
        </div>
      </div>
      <div id="fb-confirm">
        <div class="fb-check">✅</div>
        <h4>Merci pour votre retour !</h4>
        <p>Votre client email va s'ouvrir avec le message pré-rempli.<br>
           Si cela ne se produit pas, copiez le rapport et envoyez-le à :<br>
           <strong>${CONTACT_EMAIL}</strong></p>
        <button class="fb-close-ok" id="fb-ok-btn">Fermer</button>
      </div>
    `;
  }

  /* ── Création des éléments DOM ───────────────────── */
  var btn = document.createElement('button');
  btn.id = 'fb-btn';
  btn.innerHTML = '<span class="fb-dot"></span> Signaler un probl\u00e8me';
  btn.title = 'Signaler un probl\u00e8me ou envoyer une suggestion';

  var overlay = document.createElement('div');
  overlay.id = 'fb-overlay';

  var modal = document.createElement('div');
  modal.id = 'fb-modal';
  modal.innerHTML = buildModal();
  overlay.appendChild(modal);

  document.body.appendChild(btn);
  document.body.appendChild(overlay);

  /* ── Mise à jour contexte ────────────────────────── */
  function refreshContext() {
    var ctx = getPageContext();
    var el = document.getElementById('fb-context-info');
    if (el) el.innerHTML = formatContextHTML(ctx);
  }

  /* ── Open / Close ────────────────────────────────── */
  function openModal() {
    var confirm = document.getElementById('fb-confirm');
    var formBody = document.getElementById('fb-form-body');
    if (confirm) confirm.style.display = 'none';
    if (formBody) formBody.style.display = 'block';
    overlay.classList.add('open');
    refreshContext();
    var ta = document.getElementById('fb-msg');
    if (ta) { ta.value = ''; setTimeout(function(){ ta.focus(); }, 100); }
  }

  function closeModal() {
    overlay.classList.remove('open');
  }

  btn.addEventListener('click', openModal);
  overlay.addEventListener('click', function(e) { if (e.target === overlay) closeModal(); });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
  });

  /* ── Type selection ──────────────────────────────── */
  modal.addEventListener('click', function(e) {
    var t = e.target;
    if (t.classList.contains('fb-type')) {
      selectedType = t.getAttribute('data-type');
      modal.querySelectorAll('.fb-type').forEach(function(b) {
        b.classList.toggle('active', b.getAttribute('data-type') === selectedType);
      });
    }
    if (t.id === 'fb-close-btn') closeModal();
    if (t.id === 'fb-ok-btn') closeModal();
  });

  /* ── Envoi par email ─────────────────────────────── */
  document.getElementById('fb-send-btn').addEventListener('click', function() {
    var msg = (document.getElementById('fb-msg').value || '').trim();
    if (!msg) { document.getElementById('fb-msg').focus(); return; }
    var ctx = getPageContext();
    var typeLabel = TYPES.find(function(t){ return t.id === selectedType; });
    var subject = '[' + APP_NAME + '] ' + (typeLabel ? typeLabel.emoji + ' ' + typeLabel.label.replace(/^.{3}/,'').trim() : 'Retour') + (ctx.commune ? ' — ' + ctx.commune : '');
    var body = [
      'Bonjour,',
      '',
      msg,
      '',
      '---',
      formatContext(ctx),
      '',
      'Envoyé depuis ' + APP_NAME
    ].join('\n');

    // Si capture d'ecran presente, la telecharger automatiquement pour joindre a l'email
    if (screenshotDataUrl) {
      var a = document.createElement('a');
      a.href = screenshotDataUrl;
      a.download = 'capture_' + APP_NAME.replace(/\s/g,'_') + '_' + new Date().toISOString().slice(0,10) + '.png';
      a.click();
      body += '\n\n[Capture d\'ecran telechargee : ' + a.download + ' — joignez-la a votre email]';
    }

    var mailto = 'mailto:' + CONTACT_EMAIL
      + '?subject=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);

    window.open(mailto, '_blank');

    // Afficher confirmation
    document.getElementById('fb-form-body').style.display = 'none';
    document.getElementById('fb-confirm').style.display = 'block';
  });

  /* ── Capture d'ecran ────────────────────────────── */
  var screenshotDataUrl = null;

  document.getElementById('fb-screenshot-btn').addEventListener('click', function() {
    var btn = document.getElementById('fb-screenshot-btn');
    btn.textContent = 'Capture en cours...';
    btn.disabled = true;

    // Masquer l'overlay pour capturer la page proprement
    overlay.style.display = 'none';

    setTimeout(function() {
      if (window.html2canvas) {
        html2canvas(document.body, {
          useCORS: true,
          scale: window.devicePixelRatio > 1 ? 1 : 1,
          logging: false,
          backgroundColor: '#ffffff'
        }).then(function(canvas) {
          screenshotDataUrl = canvas.toDataURL('image/png');
          var img = document.getElementById('fb-screenshot-img');
          img.src = screenshotDataUrl;
          document.getElementById('fb-screenshot-preview').style.display = 'block';
          overlay.style.display = 'flex';
          btn.textContent = '\uD83D\uDCF7 Recapturer';
          btn.disabled = false;
        }).catch(function(err) {
          console.error('Capture echouee:', err);
          overlay.style.display = 'flex';
          btn.textContent = '\uD83D\uDCF7 Capture d\u2019\u00e9cran';
          btn.disabled = false;
        });
      } else {
        // html2canvas pas encore charge — retry
        overlay.style.display = 'flex';
        btn.textContent = '\u23F3 Chargement...';
        btn.disabled = false;
        setTimeout(function() { btn.textContent = '\uD83D\uDCF7 Capture d\u2019\u00e9cran'; }, 1500);
      }
    }, 400);
  });

  // Supprimer la capture
  document.getElementById('fb-screenshot-remove').addEventListener('click', function() {
    screenshotDataUrl = null;
    document.getElementById('fb-screenshot-preview').style.display = 'none';
    document.getElementById('fb-screenshot-btn').textContent = '\uD83D\uDCF7 Capture d\u2019\u00e9cran';
  });

})();
