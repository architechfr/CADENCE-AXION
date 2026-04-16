// =============================================================================
// BASE DE REGLES PLU — FaisabilitePLU (Cadence Architectes)
// Fichier auto-genere et complete manuellement
// =============================================================================
// ATTENTION : Ce PLUi (Grand Paris Grand Est - 200058790) utilise des PLANS
// GRAPHIQUES pour definir les valeurs exactes d'emprise, hauteur et implantation
// par parcelle. Les valeurs ci-dessous sont des valeurs TYPIQUES extraites du
// reglement ecrit. Pour une analyse precise, consulter :
//   - Plan 4.2.6 : Emprises au sol maximales
//   - Plan 4.2.7 : Hauteurs maximales
//   - Plan 4.2.8 : Implantation par rapport aux voies
//   - Annexe 1  : Implantation par rapport aux limites separatives
// =============================================================================

const BASE_REGLES_PLU = {

  // =========================================================================
  // MONTFERMEIL (93047) — PLUi Grand Paris Grand Est
  // Document : 200058790_PLUi_20241217 (approuve 17/12/2024)
  // =========================================================================

  // --- ZONE UA : Centralites urbaines ---
  "93047_UA": {
    "zone": "UA",
    "ces": 0,
    "hmax": 15,
    "hfait": 15,
    "rrue": 0,
    "rfond": 0,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Centralites urbaines - habitat dense, commerces, services",
    "notes": "PLUi GPGE 200058790_reglement_20241217.pdf — ATTENTION valeurs dependant des plans graphiques. Emprise: plan 4.2.6 (LR1=60% bande principale / LR2=45% / LR3=50% bande princ. / LR4=30%). Hauteur: plan 4.2.7 (9m a 35m selon secteur, typiquement 12-18m a Montfermeil). Voie: plan 4.2.8 (alignement ou marge de recul). Limites sep.: Annexe 1 (tome 4.1.2). A Montfermeil, majoree +1m si lisere rouge au plan 4.2.7 (RDC 3.50m oblig.). Pleine terre: plan 4.2.3. Coeff anticipation env.=10%.",
    "source": "gpu-verifie",
    "commune": "Montfermeil",
    "savedAt": "2026-04-02"
  },

  // --- ZONE UAp : Centres anciens ---
  "93047_UAp": {
    "zone": "UAp",
    "ces": 0,
    "hmax": 12,
    "hfait": 12,
    "rrue": 0,
    "rfond": 0,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Centres anciens - tissu historique dense",
    "notes": "PLUi GPGE 200058790_reglement_20241217.pdf — Emprise: plan 4.2.6 (10% a 100%, LR1-LR4 possibles). Hauteur: plan 4.2.7 (4m a 35m selon secteur, typiquement 9-15m). Voie: plan 4.2.8. Limites sep.: Annexe 1 (tome 4.1.2). Pleine terre: plan 4.2.3. Coeff anticipation env.=10%.",
    "source": "gpu-verifie",
    "commune": "Montfermeil",
    "savedAt": "2026-04-02"
  },

  // --- ZONE UB : Zones intermediaires ---
  "93047_UB": {
    "zone": "UB",
    "ces": 0,
    "hmax": 12,
    "hfait": 12,
    "rrue": 0,
    "rfond": 0,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Zones intermediaires - habitat mixte, petit collectif",
    "notes": "PLUi GPGE 200058790_reglement_20241217.pdf — Emprise: plan 4.2.6 (LR1-LR4). Hauteur: plan 4.2.7 (4m a 35m, typiquement 9-15m). Voie: plan 4.2.8. Limites sep.: Annexe 1 (tome 4.1.2). Bande constructibilite principale depuis voies. A Montfermeil: RDC 3.50m si lisere rouge (hauteur majoree +1m). Industrie admise si <=1000m2 SDP. Pleine terre: plan 4.2.3. Coeff anticipation env.=10%.",
    "source": "gpu-verifie",
    "commune": "Montfermeil",
    "savedAt": "2026-04-02"
  },

  // --- ZONE UC : Zones pavillonnaires ---
  "93047_UC": {
    "zone": "UC",
    "ces": 0,
    "hmax": 9,
    "hfait": 9,
    "rrue": 0,
    "rfond": 0,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Zones pavillonnaires - habitat individuel et petit collectif",
    "notes": "PLUi GPGE 200058790_reglement_20241217.pdf — Emprise: plan 4.2.6 (LR1-LR4, typiquement 30-50%). Hauteur: plan 4.2.7 (4m a 12m, typiquement 9m = R+1+combles). Voie: plan 4.2.8 (alignement ou marge). Limites sep.: Annexe 1 (tome 4.1.2). Bande constructibilite principale depuis voies, au-dela: annexes seules (10m2, 2.30m haut). A Montfermeil: dispositions specif. garages/acces. Pleine terre: plan 4.2.3. Coeff anticipation env.=10% (arbre existant=5%).",
    "source": "gpu-verifie",
    "commune": "Montfermeil",
    "savedAt": "2026-04-02"
  },

  // --- ZONE UD : Zones pavillonnaires denses ---
  "93047_UD": {
    "zone": "UD",
    "ces": 0,
    "hmax": 9,
    "hfait": 9,
    "rrue": 0,
    "rfond": 0,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Zones pavillonnaires denses - sous-secteur UC",
    "notes": "PLUi GPGE 200058790_reglement_20241217.pdf — Memes regles que UC avec sectorisation specifique. Verifier plan de zonage. Emprise/Hauteur/Voie: plans graphiques.",
    "source": "gpu-verifie",
    "commune": "Montfermeil",
    "savedAt": "2026-04-02"
  },

  // --- ZONE UG : Grands collectifs ---
  "93047_UG": {
    "zone": "UG",
    "ces": 0,
    "hmax": 18,
    "hfait": 18,
    "rrue": 0,
    "rfond": 0,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Grands collectifs - habitat collectif dense, equipements",
    "notes": "PLUi GPGE 200058790_reglement_20241217.pdf — Emprise: plan 4.2.6 (LR1-LR4). Hauteur: plan 4.2.7 (9m a 35m, typiquement 15-21m). Voie: plan 4.2.8. Limites sep.: Annexe 1 (tome 4.1.2). A Montfermeil: RDC 4m si lisere rouge (hauteur majoree +1m). Balcons admis uniquement a partir du 2e etage. Facades >40m: animation obligatoire. Pleine terre: plan 4.2.3. Coeff anticipation env.=10%.",
    "source": "gpu-verifie",
    "commune": "Montfermeil",
    "savedAt": "2026-04-02"
  },

  // --- ZONE UF : Activites economiques ---
  "93047_UF": {
    "zone": "UF",
    "ces": 0,
    "hmax": 15,
    "hfait": 15,
    "rrue": 0,
    "rfond": 10,
    "rg": 10,
    "rd": 10,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Activites economiques - industrie, bureaux, entrepots",
    "notes": "PLUi GPGE 200058790_reglement_20241217.pdf — Emprise: plan 4.2.6 (10% a 50%). Hauteur: plan 4.2.7 (9m a 35m). Voie: plan 4.2.8. Si jouxtant UA/UAp/UB/UC/UG: retrait limite separative min 10m + filtre vegetal. Pleine terre: plan 4.2.3. Coeff anticipation env.=15%.",
    "source": "gpu-verifie",
    "commune": "Montfermeil",
    "savedAt": "2026-04-02"
  },

  // --- ZONE UP : Zones de projet ---
  "93047_UP": {
    "zone": "UP",
    "ces": 0,
    "hmax": 0,
    "hfait": 0,
    "rrue": 0,
    "rfond": 0,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Zones de projet - regles specifiques par secteur (Annexe 2)",
    "notes": "PLUi GPGE 200058790_reglement_20241217.pdf — Zones de projet: regles definies a l'Annexe 2 du reglement ecrit. Dispositions communes aux zones urbaines applicables sauf dispositions contraires de l'annexe. Verifier Annexe 2 pour chaque secteur UP specifique.",
    "source": "gpu-verifie",
    "commune": "Montfermeil",
    "savedAt": "2026-04-02"
  },

  // --- ZONE UE : Grands equipements ---
  "93047_UE": {
    "zone": "UE",
    "ces": 0,
    "hmax": 0,
    "hfait": 0,
    "rrue": 0,
    "rfond": 0,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Grands equipements publics",
    "notes": "PLUi GPGE 200058790_reglement_20241217.pdf — Art.3: Emprise NON REGLEMENTEE. Hauteur NON REGLEMENTEE. Voie NON REGLEMENTEE. Limites sep.: non reglementee si mur aveugle, sinon recul = hauteur facade min 8m si vue. hmax=0 et ces=-1 signifient 'non reglemente'.",
    "source": "gpu-verifie",
    "commune": "Montfermeil",
    "savedAt": "2026-04-02"
  },

  // --- ZONE UV : Zones urbaines vertes ---
  "93047_UV": {
    "zone": "UV",
    "ces": 0,
    "hmax": 0,
    "hfait": 0,
    "rrue": 0,
    "rfond": 0,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Zones urbaines vertes - parcs, espaces verts",
    "notes": "PLUi GPGE 200058790_reglement_20241217.pdf — Art.3: Emprise NON REGLEMENTEE. Hauteur NON REGLEMENTEE. Voie NON REGLEMENTEE. Limites sep. NON REGLEMENTEE. Constructibilite tres limitee. hmax=0 et ces=-1 signifient 'non reglemente'.",
    "source": "gpu-verifie",
    "commune": "Montfermeil",
    "savedAt": "2026-04-02"
  },

  // --- ZONE N : Zones naturelles ---
  "93047_N": {
    "zone": "N",
    "ces": 0,
    "hmax": 7,
    "hfait": 7,
    "rrue": 4,
    "rfond": 3,
    "rg": 3,
    "rd": 3,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Zones naturelles - foret, espaces naturels proteges",
    "notes": "PLUi GPGE 200058790_reglement_20241217.pdf — Art.3.2: Hauteur max 7m. Art.3.3.1: Recul voie min 4m (sauf Na: alignement possible). Art.3.3.2: Recul limites sep. 3m (7m si vue, sauf Na: sur limite possible). Constructibilite tres limitee: extensions max 20% emprise existante (max 25m2), annexes max 25m2 total (15m2/annexe, max 2). Foret de Bondy classee foret de protection.",
    "source": "gpu-verifie",
    "commune": "Montfermeil",
    "savedAt": "2026-04-02"
  },

  // --- ZONE NI : Zone naturelle inondable ---
  "93047_NI": {
    "zone": "NI",
    "ces": 0,
    "hmax": 7,
    "hfait": 7,
    "rrue": 4,
    "rfond": 3,
    "rg": 3,
    "rd": 3,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Zone naturelle inondable - sous-secteur N",
    "notes": "PLUi GPGE 200058790_reglement_20241217.pdf — Memes regles que N avec contraintes PPRi supplementaires. Hauteur mesuree depuis le niveau des plus hautes eaux connues.",
    "source": "gpu-verifie",
    "commune": "Montfermeil",
    "savedAt": "2026-04-02"
  },

  // =========================================================================
  // VILLENEUVE-SAINT-DENIS (77495) — PLUi Val d'Europe Agglomeration
  // Document : 247700339_PLUi_20260205 (approuve 5/02/2026)
  // =========================================================================

  // --- ZONE UAb : Centres-bourgs ---
  "77495_UAb": {
    "zone": "UAb",
    "ces": 50,
    "hmax": 15,
    "hfait": 15,
    "rrue": 0,
    "rfond": 3,
    "rg": 0,
    "rg_retrait_min": 3,
    "rd": 3,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Centre-bourg, mixte habitat/commerces/services",
    "notes": "PLUi VEA 247700339_reglement_20260205.pdf — Art.UA-3: alignement ou recul en continuite front bati. Art.UA-4: implant. sur 1+ limite lat. ou retrait (4m avec baie, 3m sans). Fond: annexes seules. Art.UA-6: CES 50% (UAb), +25% si RDC commerce. Art.UA-7: 15m faitage max R+3+C. Bande constructible 15m depuis alignement. Pleine terre non specifiee pour VSD.",
    "source": "gpu-verifie",
    "commune": "Villeneuve-Saint-Denis",
    "savedAt": "2026-04-03"
  },

  // --- ZONE UBb : Pavillonnaire diffus ---
  "77495_UBb": {
    "zone": "UBb",
    "ces": 30,
    "hmax": 7,
    "hfait": 10,
    "rrue": 6,
    "rfond": 6,
    "rg": 3,
    "rd": 3,
    "cos": 0,
    "pct_espaces_verts": 50,
    "usages": "Pavillonnaire diffus, formes et parcellaires varies",
    "notes": "PLUi VEA 247700339_reglement_20260205.pdf — Art.UB-3: recul 6m min voie. Bande constructible 30m. Art.UB-4: retrait obligatoire lat. et fond (H avec baie min 6m, H/2 sans baie min 3m). Art.UB-6: CES 30%. Art.UB-7: 10m faitage, 7m egout/acrotere, R+1+C max. Art.UB-11: pleine terre 50%. Annexes sur limites sep. possibles (0.5m retrait min).",
    "source": "gpu-verifie",
    "commune": "Villeneuve-Saint-Denis",
    "savedAt": "2026-04-03"
  },

  // --- ZONE UBb alias GPU "Uj" ---
  // Le GPU detecte parfois "Uj" pour Villeneuve-Saint-Denis mais c'est UBb dans le PLUi
  "77495_Uj": {
    "zone": "Uj",
    "ces": 30,
    "hmax": 7,
    "hfait": 10,
    "rrue": 6,
    "rfond": 6,
    "rg": 3,
    "rd": 3,
    "cos": 0,
    "pct_espaces_verts": 50,
    "usages": "Pavillonnaire diffus (= UBb dans le PLUi VEA)",
    "notes": "PLUi VEA 247700339_reglement_20260205.pdf — Zone Uj du GPU = UBb du PLUi. Art.UB-3: recul 6m voie. Art.UB-4: retrait lat. H/2 min 3m (sans baie), H min 6m (avec baie). Art.UB-6: CES 30%. Art.UB-7: 10m faitage, 7m egout, R+1+C. Art.UB-11: pleine terre 50%.",
    "source": "gpu-verifie",
    "commune": "Villeneuve-Saint-Denis",
    "savedAt": "2026-04-03"
  },

  // --- ZONE UCb : Collectif pres centres-bourgs ---
  "77495_UCb": {
    "zone": "UCb",
    "ces": 40,
    "hmax": 9,
    "hfait": 12,
    "rrue": 0,
    "rfond": 4,
    "rg": 4,
    "rd": 4,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Ensemble residentiel collectif pres centre-bourg",
    "notes": "PLUi VEA 247700339_reglement_20260205.pdf — Art.UC-3: alignement ou recul 6m min. Art.UC-4: sur 1 limite lat. max ou retrait (H/2 min 4m avec baie, 4m sans). 5m si limitrophe zone UB/A/N. Art.UC-6: CES 40%. Art.UC-7: 12m faitage, 9m acrotere, R+2+C ou R+3 max.",
    "source": "gpu-verifie",
    "commune": "Villeneuve-Saint-Denis",
    "savedAt": "2026-04-03"
  },

  // --- ZONE N : Naturelle ---
  "77495_N": {
    "zone": "N",
    "ces": 0,
    "hmax": 4,
    "hfait": 4,
    "rrue": 5,
    "rfond": 3,
    "rg": 3,
    "rd": 3,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Zone naturelle et forestiere",
    "notes": "PLUi VEA 247700339_reglement_20260205.pdf — Art.N-3: recul 5m voie. Art.N-4: non specif., voir disp. gen. Art.N-6: emprise NR hors STECAL. Art.N-7: 4m faitage max. Constructibilite tres limitee.",
    "source": "gpu-verifie",
    "commune": "Villeneuve-Saint-Denis",
    "savedAt": "2026-04-03"
  },

  // --- ZONE A : Agricole ---
  "77495_A": {
    "zone": "A",
    "ces": 0,
    "hmax": 7,
    "hfait": 10,
    "rrue": 10,
    "rfond": 10,
    "rg": 10,
    "rd": 10,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Zone agricole",
    "notes": "PLUi VEA 247700339_reglement_20260205.pdf — Art.A-3: recul 10m voie. Art.A-4: retrait 10m limites. Art.A-6: NR hors STECAL. Art.A-7: habitation 10m faitage (7m acrotere), autres 15m. Constructibilite tres limitee.",
    "source": "gpu-verifie",
    "commune": "Villeneuve-Saint-Denis",
    "savedAt": "2026-04-03"
  },

  // ==========================================================================
  // LIVRY-GARGAN (93046) — PLUi Grand Paris Grand Est 200058790
  // Reglement approuve 17/12/2024
  // NB : ce PLUi utilise des plans graphiques pour emprise, hauteur, voies.
  // Les valeurs ci-dessous sont des TYPIQUES pour zone UC pavillonnaire.
  // Pour valeur exacte parcelle : consulter plans 4.2.6, 4.2.7, 4.2.8 + Annexe 1.
  // ==========================================================================

  // --- ZONE UC (zones pavillonnaires) ---
  "93046_UC": {
    "zone": "UC",
    "ces": 0,
    "hmax": 9,
    "hfait": 11,
    "rrue": 3,
    "rfond": 3,
    "rg": 3,
    "rd": 3,
    "cos": 0,
    "pct_espaces_verts": 30,
    "usages": "Zone pavillonnaire — habitation, petits commerces <100m2 SDP compatibles tissu pavillonnaire",
    "notes": "PLUi GPGE 200058790_reglement_20241217.pdf approuve 17/12/2024 — Emprise: plan 4.2.6 (LR2 typique = 45% terrain <450m², degressif au-dela) — Hauteur: plan 4.2.7 (9m=R+1+combles typique; depassement +2m si pente toit>30° soit hfait=11m) — Voies: plan 4.2.8 (retrait 3m min typique) — Lim.sep: Annexe 1 (H/2 min 3m) — Specifique Livry-Gargan: piscines 4m min (vs 2,5m autres communes), annexes NON autorisees dans marge retrait, toitures-terrasses max 20% emprise (constructions habitation/bureaux) — Stationnement: 1,3 place/logement >500m gares (art.33 tableau UC)",
    "source": "gpu-verifie",
    "commune": "Livry-Gargan",
    "savedAt": "2026-04-03"
  },

  // --- ZONE Uj (mapping GPU → zone UC du PLUi) ---
  // Le GPU retourne le code "Uj" pour Livry-Gargan mais ce code n'existe pas
  // dans le PLUi GPGE. La zone reelle applicable est UC (zones pavillonnaires).
  "93046_Uj": {
    "zone": "Uj",
    "ces": 0,
    "hmax": 9,
    "hfait": 11,
    "rrue": 3,
    "rfond": 3,
    "rg": 3,
    "rd": 3,
    "cos": 0,
    "pct_espaces_verts": 30,
    "usages": "Zone pavillonnaire — habitation, petits commerces <100m2 SDP compatibles tissu pavillonnaire",
    "notes": "MAPPING GPU: code 'Uj' retourne par le GPU = zone UC du PLUi GPGE (zones pavillonnaires). PLUi GPGE 200058790_reglement_20241217.pdf approuve 17/12/2024 — Emprise: plan 4.2.6 (LR2 typique = 45% terrain <450m², degressif au-dela) — Hauteur: plan 4.2.7 (9m=R+1+combles typique; +2m si pente toit>30°) — Voies: plan 4.2.8 (3m min typique) — Lim.sep: Annexe 1 (H/2 min 3m) — Specifique Livry-Gargan: piscines 4m min, annexes NON autorisees dans marge retrait — Stationnement: 1,3 place/logement >500m gares",
    "source": "gpu-verifie",
    "commune": "Livry-Gargan",
    "savedAt": "2026-04-03"
  },

  // --- ZONE A (Montfermeil) ---
  "93047_A": {
    "zone": "A",
    "ces": 0,
    "hmax": 7,
    "hfait": 7,
    "rrue": 4,
    "rfond": 3,
    "rg": 3,
    "rd": 3,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Zone agricole",
    "notes": "PLUi GPGE 200058790_reglement_20241217.pdf — Regles similaires a zone N. Hauteur max 7m. Recul voie min 4m. Recul limites 3m (7m si vue). Constructibilite limitee aux exploitations agricoles et equipements publics.",
    "source": "gpu-verifie",
    "commune": "Montfermeil",
    "savedAt": "2026-04-02"
  },

  // ── Abbeville (80001) — PLU communal, modification 2024 ──────────────────
  "80001_UC": {
    "zone": "UC",
    "ces": 50,
    "hmax": 9,
    "hfait": 13,
    "rrue": 0,
    "rfond": 3,
    "rg": 0,
    "rg_retrait_min": 3,
    "rd": 0,
    "rd_retrait_min": 3,
    "cos": 0,
    "pct_espaces_verts": 20,
    "usages": "Zone résidentielle pavillonnaire — habitat, commerces <1000m² SDP",
    "notes": "80001_reglement_20240412.pdf — UC6: alignement ou retrait ≥1m / UC7: en limite séparative (bande 25m) ou retrait min 3m (ou H si H>3m); au-delà 25m retrait ≥3m / UC9: emprise ≤50% / UC10: égout 9m, faîtage 13m / UC12: 1 place/50m² SDP / UC13: 20% végétalisé obligatoire",
    "source": "gpu-verifie",
    "commune": "Abbeville",
    "savedAt": "2026-04-03"
  },

  "80001_Uj": {
    "zone": "Uj",
    "ces": 50,
    "hmax": 9,
    "hfait": 13,
    "rrue": 0,
    "rfond": 3,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 20,
    "usages": "Zone résidentielle pavillonnaire — habitat, commerces <1000m² SDP",
    "notes": "MAPPING GPU : code 'Uj' renvoyé par GPU non présent dans le PLU d'Abbeville — correspond à zone UC (pavillonnaire). 80001_reglement_20240412.pdf — UC9: emprise ≤50% / UC10: égout 9m, faîtage 13m / UC6: alignement autorisé / UC7: limite séparative (bande 25m) ou ≥3m / UC13: 20% végétalisé",
    "source": "gpu-verifie",
    "commune": "Abbeville",
    "savedAt": "2026-04-03"
  },

  // ── Romainville (93063) — PLUi Est Ensemble 200057875, approuvé 04/02/2020, modif n°3 24/06/2025 ──
  "93063_UC90C13": {
    "zone": "UC90C13",
    "ces": 60,
    "hmax": 13,
    "hfait": 13,
    "rrue": 0,
    "rfond": 0,
    "rfond_retrait_min": 3,
    "rg": 0,
    "rg_retrait_min": 3,
    "rd": 0,
    "rd_retrait_min": 3,
    "cos": 0,
    "pct_espaces_verts": 25,
    "usages": "Zone de centralité — habitat, commerces, équipements, bureaux, mixité fonctionnelle",
    "notes": "PLUi Est Ensemble 200057875_reglement_20260223.pdf — Système d'indices UC[voies][limites][emprise][hauteur] — Indice 9 (voies): pas de règle fixe, harmonisation tissu existant (rrue libre) — Indice 0 (limites): sur limite ou retrait H/2 min 6m (avec vues) / H/4 min 3m (sans vues) — Indice C (emprise): 60% max, pleine terre 25% min + 10% biotope — Indice 13: 13m = R+3 — Gabarit voie Romainville: H ≤ dist.alignement opposé + 3m — Stationnement: arrondi au chiffre entier supérieur (commune non-limitrophe Paris)",
    "source": "gpu-verifie",
    "commune": "Romainville",
    "savedAt": "2026-04-03"
  },

  // ── Amiens (80021) — PLU communal révisé, approuvé 11/12/2025 ─────────────
  "80021_UBa": {
    "zone": "UBa",
    "ces": 80,
    "hmax": 10.5,
    "hfait": 17.5,
    "rrue": 0,
    "rfond": 0,
    "rfond_retrait_min": 3,
    "rg": 0,
    "rg_retrait_min": 3,
    "rd": 0,
    "rd_retrait_min": 3,
    "cos": 0,
    "pct_espaces_verts": 15,
    "usages": "Faubourgs anciens — habitat, commerces, patrimoine architectural homogène",
    "notes": "80021_reglement_20251211.pdf — Bande 22m depuis alignement — 2.1: alignement obligatoire (UBa) — 2.2.1: sur limite latérale obligatoire (bande 0-12m) ou retrait min 3m; fond: sur limite ou retrait min 3m; au-delà 22m: retrait=H min 3m — 2.4: emprise 80% dans bande 22m, non réglementé au-delà — 2.5.2: hmax 10,5m égout / 17,5m faîtage (R+2+combles) dans bande 12m; 3,5m au-delà — 4.1: 15% perméable dans bande 22m, 60% pleine terre au-delà — Gabarit voie: H ≤ dist.alignement opposé (±10%)",
    "source": "gpu-verifie",
    "commune": "Amiens",
    "savedAt": "2026-04-04"
  },

  // =========================================================================
  // LE RAINCY (93062) — PLUi Grand Paris Grand Est
  // Document : 200058790_PLUi_20241217 (approuvé 17/12/2024)
  // ATTENTION : valeurs TYPIQUES — emprise, hauteur et implantation fixées
  // parcel par parcelle via plans graphiques 4.2.6 / 4.2.7 / 4.2.8 / Annexe 1
  // =========================================================================

  // --- ZONE UB : Zone intermédiaire (habitat collectif, commerces) ---
  "93062_UB": {
    "zone": "UB",
    "ces": 0,
    "hmax": 12,
    "hfait": 15,
    "rrue": 0,
    "rfond": 8,
    "rg": 8,
    "rd": 8,
    "cos": 0,
    "pct_espaces_verts": 30,
    "usages": "Zone intermédiaire — habitat collectif, commerces RDC, bureaux, hôtels — industrie interdite au Raincy",
    "notes": "200058790_reglement_20241217.pdf — PLUi GPGE — VALEURS TYPIQUES via plans graphiques — CES: plan 4.2.6, code LR1 typique (60% BP ; bande secondaire dégressif 30/25/20/10%) — Hauteur: plan 4.2.7, typique 12m R+2+combles ; toitures terrasses max 20% emprise ; pente toiture 30-45° (Le Raincy spécifique) ; dépassement hmax limité à +1m — Implantation voies: plan 4.2.8, alignement possible ou marges selon secteur ; façade >30m: fractionnement obligatoire — Limites séparatives: Annexe 1 zones LR1/LR2 selon plan 4.2.9 — LR1: avec vues L=H ; aveugles L≥9m — LR2: avec vues L=H min 8m ; aveugles L≥3-4m ; fond L=H min 8m — Pleine terre: plan 4.2.3, typique 30% — Stationnement art.33: ≤500m gares 1pl/lgt ; >500m UB Le Raincy 1,4pl/lgt ; logements aidés 0,5pl (≤500m)/1pl (>500m) — PV toiture max 20% superficie",
    "source": "gpu-verifie",
    "commune": "Le Raincy",
    "savedAt": "2026-04-04"
  },

  // ── Chaumes-en-Brie (77107) — PLU approuvé 29/06/2022 ────────────────────
  "77107_UAa": {
    "zone": "UAa",
    "ces": 0,
    "hmax": 12,
    "hfait": 15,
    "rrue": 0,
    "rfond": 3,
    "rg": 0,
    "rg_retrait_min": 3,
    "rd": 0,
    "rd_retrait_min": 3,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Centre-bourg — habitat, commerces, activités de service — mixité fonctionnelle (RDC commerciaux protégés)",
    "notes": "77107_reglement_20230906.pdf — Bande 30m depuis alignement — 2.1: alignement voie obligatoire ou prolongement construction existante — 2.1: recul ≥8m des murs de remparts (rue des Barres, rue A.Briand, bd P.Quiton, bd Paulat) — 2.2: implantation sur ≥1 limite latérale ; si non en limite: ≥3m mur aveugle / ≥5m si vues — CES non réglementé (sauf zone inondable: 20%) — 2.4: 2 places/logement ; 2.3 places/lgt collectif ; 1 place/55m² bureaux ; 1 place/50m² commerce ≥50m² — UAa: façade ≥R+1 face voie obligatoire ; changement destination RDC commerciaux interdit",
    "source": "gpu-verifie",
    "commune": "Chaumes-en-Brie",
    "savedAt": "2026-04-04"
  },

  // =========================================================================
  // JOINVILLE-LE-PONT (94042) — PLUi Paris Est Marne & Bois (EPT 10)
  // Document : 200057941_reglement_20251014.pdf
  // PLUi approuve 12/12/2023, modif simplifiee n°1 06/05/2025, DPemC n°1 14/10/2025
  // =========================================================================

  // --- ZONE UB2 : Zone urbaine mixte intermediaire ---
  "94042_UB2": {
    "zone": "UB2",
    "ces": 40,
    "hmax": 12,
    "hfait": 15,
    "rrue": 0,
    "rfond": 6,
    "rg": 6,
    "rd": 3,
    "cos": 0,
    "pct_espaces_verts": 35,
    "usages": "Habitat collectif, commerces ≤2500m² SDP, services, bureaux — industrie ≤300m²",
    "notes": "200057941_reglement_20251014.pdf — PLUi Paris Est Marne & Bois — Art UB.9: CES 40% (UB2 hors UB2a) / 80% si EICSP mixte — Art UB.10: hmax 12m egout + 15m faitage (hors bande 30m Bd Marechal Leclerc / rue de Paris / rue H. Barbusse ou 15m egout + 18m faitage) — Prospect H=L+2 — Art UB.6: alignement ou retrait min 2.50m — Art UB.7: sur limite ou retrait H/2 min 6m (baies) / H/3 min 3m (aveugles) ; fond de parcelle 6m si limite zone UP1 — Art UB.14: 35% pleine terre, biotope min 0.40 — Bande constructibilite 20m depuis alignement — Au-dela 15m depuis alignement: hmax 12m faitage/acrotere",
    "source": "gpu-verifie",
    "commune": "Joinville-le-Pont",
    "savedAt": "2026-04-05"
  },

  // --- ZONE UB1a : Zone urbaine mixte - centralite Av. Gallieni ---
  "94042_UB1a": {
    "zone": "UB1a",
    "ces": 0,
    "hmax": 11,
    "hfait": 14,
    "rrue": 0,
    "rfond": 6,
    "rg": 6,
    "rd": 3,
    "cos": 0,
    "pct_espaces_verts": 10,
    "usages": "Centralite urbaine — habitat, commerces, services, bureaux, equipements",
    "notes": "200057941_reglement_20251014.pdf — PLUi PEMB — Art UB.9: bande 20m emprise 90% (100% av. Gallieni/pl. Verdun) ; au-dela 20m emprise 20% — Art UB.10: 11m egout + 14m faitage (15m/18m av. Gallieni) ; au-dela 20m: 7m/10m — Prospect H=L — Art UB.6: alignement obligatoire av. Gallieni, alignement ou retrait max 2.50m autres voies — Art UB.7: sur limite ou retrait H/2 min 6m (baies) / H/3 min 3m (aveugles) — Art UB.14: biotope 0.15, pleine terre 10%",
    "source": "gpu-verifie",
    "commune": "Joinville-le-Pont",
    "savedAt": "2026-04-05"
  },

  // --- ZONE UB2a : Zone urbaine mixte - secteur dense ---
  "94042_UB2a": {
    "zone": "UB2a",
    "ces": 50,
    "hmax": 12,
    "hfait": 15,
    "rrue": 0,
    "rfond": 8,
    "rg": 6,
    "rd": 3,
    "cos": 0,
    "pct_espaces_verts": 25,
    "usages": "Habitat collectif, commerces, services — secteur plus dense que UB2",
    "notes": "200057941_reglement_20251014.pdf — PLUi PEMB — Art UB.9: CES 50% (UB2a) — Art UB.10: 12m egout + 15m faitage — Prospect H=L+2 — Art UB.6: alignement ou retrait min 2.50m — Art UB.7: sur limite ou retrait H/2 min 6m (baies) / H/3 min 3m (aveugles) ; fond UP1 retrait 8m — Art UB.14: 25% pleine terre, biotope 0.30",
    "source": "gpu-verifie",
    "commune": "Joinville-le-Pont",
    "savedAt": "2026-04-05"
  },

  // --- ZONE UB4 : Zone urbaine mixte - av. Jean Jaures / rue Chapsal ---
  "94042_UB4": {
    "zone": "UB4",
    "ces": 0,
    "hmax": 12,
    "hfait": 15,
    "rrue": 0,
    "rfond": 6,
    "rg": 6,
    "rd": 3,
    "cos": 0,
    "pct_espaces_verts": 40,
    "usages": "Habitat collectif, commerces, services — av. Jean Jaures et rue Chapsal",
    "notes": "200057941_reglement_20251014.pdf — PLUi PEMB — Art UB.9: bande 15m emprise 100% (av. Jaures/rue Chapsal) 90% autres ; au-dela 20% — Art UB.10: 15m/18m av. Jaures, 12m/15m rue Chapsal ; au-dela 15m: 7m acrotere — Art UB.6: alignement oblig. av. Jaures/rue Chapsal — Art UB.14: biotope 0.45, pleine terre 10% de 40% espaces verts",
    "source": "gpu-verifie",
    "commune": "Joinville-le-Pont",
    "savedAt": "2026-04-05"
  },

  // =========================================================================
  // LIVRY-GARGAN (93046) — PLUi Grand Paris Grand Est (200058790)
  // Document : 200058790_reglement_20241217.pdf
  // PLUi approuve 17/12/2024
  // =========================================================================

  // --- ZONE UG : Zone de grands collectifs ---
  // ATTENTION: PLUi GPGE — toutes les valeurs (emprise, hauteur, implantation,
  // pleine terre) dependent des PLANS GRAPHIQUES (4.2.6, 4.2.7, 4.2.8, 4.2.3).
  // Les valeurs ci-dessous sont des estimations typiques pour Livry-Gargan UG.
  // Verifier imperativement les plans graphiques pour chaque parcelle.
  "93046_UG": {
    "zone": "UG",
    "ces": 60,
    "hmax": 25,
    "hfait": 27,
    "rrue": 0,
    "rfond": 6,
    "rg": 6,
    "rd": 4,
    "cos": 0,
    "pct_espaces_verts": 30,
    "usages": "Habitat collectif, commerces ≤200m² SDP, services, bureaux — grands collectifs mixtes",
    "notes": "200058790_reglement_20241217.pdf — PLUi GPGE — VALEURS DEPENDANT DES PLANS GRAPHIQUES (verifier par parcelle) — Art 3.1 emprise: plan 4.2.6 — CES 60% = hypothese LR1 bande principale (codes possibles: LR1 60%BP/LR2 45%/LR3 50%BP/LR4 30%) — BS degressif par tranches 400m²: 30→25→20→10% — Art 3.2 hauteur: plan 4.2.7 fourchette 4m-35m; hmax=25m estimation mediane; Livry-Gargan +1m terrasse ou +2m pente>30deg — Attique oblig >=12m ou >=4 niv: SDP dernier niv <=60% niv inf, retrait 2m — RDC 4m sur lineaire commercial a alignement — Jouxtant UC: hmax 12m sur 10m profondeur — Art 3.3.1 implantation: plan 4.2.8 (alignement ou retrait 2-15m selon secteur) — Art 3.3.2 limites separatives: Annexe 1 au reglement — Art 6.2 pleine terre: plan 4.2.3 (20-70% selon secteur, 30% hypothese UG dense) — 50% pleine terre d'un seul tenant — Facade >30m: porche traversant RDC 2 niveaux largeur 4m min",
    "source": "gpu-verifie",
    "commune": "Livry-Gargan",
    "savedAt": "2026-04-05",
    "pdf": "200058790_reglement_20241217.pdf",
    "plui": "PLUi Grand Paris Grand Est (200058790)",
    "scans": [
      { "file": "p198_art1_destinations_usages.png", "page": 198, "article": "Art 1", "label": "Destinations et usages autorises", "critere": "usages" },
      { "file": "p202_art3-1_emprise_au_sol.png", "page": 202, "article": "Art 3.1", "label": "Emprise au sol — tableau des seuils", "critere": "ces" },
      { "file": "p203_art3-1_emprise_LR1_LR2_LR3.png", "page": 203, "article": "Art 3.1", "label": "Emprise — codes LR1, LR2, LR3 (tranches)", "critere": "ces" },
      { "file": "p204_art3-1_emprise_LR3_LR4.png", "page": 204, "article": "Art 3.1", "label": "Emprise — LR3 suite, LR4, angle 2 voies", "critere": "ces" },
      { "file": "p205_art3-2_hauteur_maximale_1.png", "page": 205, "article": "Art 3.2", "label": "Hauteur maximale — tableau (4m a 18m)", "critere": "hmax" },
      { "file": "p206_art3-2_hauteur_maximale_2.png", "page": 206, "article": "Art 3.2", "label": "Hauteur maximale — suite (21m a 35m)", "critere": "hmax" },
      { "file": "p207_art3-2_depassement_attique.png", "page": 207, "article": "Art 3.2", "label": "Depassement hauteur + attique obligatoire", "critere": "hmax" },
      { "file": "p208_art3-2_hauteur_rdc_angle.png", "page": 208, "article": "Art 3.2", "label": "Hauteur RDC 4m + angle 2 voies + jouxtant UC", "critere": "hmax" },
      { "file": "p210_art3-3-1_implantation_voies_1.png", "page": 210, "article": "Art 3.3.1", "label": "Implantation / voies — tableau retraits", "critere": "rrue" },
      { "file": "p211_art3-3-1_implantation_voies_2.png", "page": 211, "article": "Art 3.3.1", "label": "Implantation / voies — suite retraits", "critere": "rrue" },
      { "file": "p214_art3-3-2_limites_separatives.png", "page": 214, "article": "Art 3.3.2", "label": "Limites separatives — renvoi Annexe 1", "critere": "rg" },
      { "file": "p226_art6_pleine_terre_renvoi.png", "page": 226, "article": "Art 6.2", "label": "Pleine terre — renvoi dispositions communes", "critere": "pct_espaces_verts" },
      { "file": "p062_disp_communes_pleine_terre.png", "page": 62, "article": "Disp. communes", "label": "Pleine terre — tableau 20% a 70%", "critere": "pct_espaces_verts" }
    ]
  },

  // =========================================================================
  // FERRIERES-EN-BRIE (77181) — PLU communal
  // Document : 77181_reglement_20230609.pdf
  // PLU approuve, modification n°1 du 09/06/2023
  // =========================================================================

  // --- ZONE UA : Zone urbaine mixte centrale ---
  "77181_UA": {
    "zone": "UA",
    "ces": 0,
    "hmax": 11,
    "hfait": 11,
    "rrue": 0,
    "rfond": 0,
    "rfond_retrait_min": 3,
    "rg": 0,
    "rg_retrait_min": 3,
    "rd": 0,
    "rd_retrait_min": 3,
    "cos": 0,
    "pct_espaces_verts": 20,
    "usages": "Zone urbaine mixte — habitat, commerces, bureaux, artisanat — industrie et entrepots interdits",
    "notes": "77181_reglement_20230609.pdf — PLU communal Ferrieres-en-Brie modif n°1 2023 — Art UA.6: alignement ou retrait min 3m au choix (interdit dans bande 50m axe allee Imperatrice Eugenie) — Art UA.7: IMPLANTATION SUR LIMITE AUTORISEE (rg=rd=rfond=0 pour murs aveugles); si facade avec baie eclairant piece principale: retrait obligatoire min 3m — Art UA.9: emprise NON REGLEMENTEE (CES=0 : le PLU ne fixe pas de regle, a definir au cas par cas selon le projet) — Art UA.10: hauteur totale max 11m mesuree jusqu'au faitage ou acrotere → R+2 possible (niv=3) — Art UA.13: 20% min espaces verts de la parcelle — Stationnement UA.12: 1pl/55m2 SDP habitat min 1pl/logement, 1pl/100m2 commerce, 1pl/55m2 bureaux — 30% logements sociaux min a partir de 10 logements — Annexes max 30m2 (hors piscines)",
    "source": "gpu-verifie",
    "commune": "Ferrieres-en-Brie",
    "savedAt": "2026-04-06",
    "pdf": "77181_reglement_20230609.pdf",
    "scans": [
      { "file": "p07_art_UA1-5_destinations.png", "page": 7, "article": "Art UA.1-5", "label": "Destinations et usages autorises/interdits", "critere": "usages" },
      { "file": "p11_art_UA6_implantation_voies.png", "page": 11, "article": "Art UA.6", "label": "Implantation par rapport aux voies", "critere": "rrue" },
      { "file": "p12_art_UA7_limites_separatives.png", "page": 12, "article": "Art UA.7", "label": "Implantation par rapport aux limites separatives", "critere": "rg" },
      { "file": "p13_art_UA9_emprise_au_sol.png", "page": 13, "article": "Art UA.9", "label": "Emprise au sol — non reglementee", "critere": "ces" },
      { "file": "p14_art_UA10_hauteur.png", "page": 14, "article": "Art UA.10", "label": "Hauteur maximale — 11m faitage/acrotere", "critere": "hmax" },
      { "file": "p16_art_UA13_espaces_verts.png", "page": 16, "article": "Art UA.13", "label": "Espaces libres — 20% minimum", "critere": "pct_espaces_verts" }
    ]
  },

  // =========================================================================
  // CAMPAGNAN (34047) — PLU communal
  // Document : 34047_reglement_20250318.pdf
  // PLU approuve fevrier 2025
  // =========================================================================

  // --- ZONE U2 : Secteur urbanise mixte a dominante pavillonnaire ---
  "34047_U2": {
    "zone": "U2",
    "ces": 50,
    "hmax": 6,
    "hfait": 8,
    "rrue": 5,
    "rfond": 3,
    "rg": 3,
    "rd": 0,
    "rd_retrait_min": 3,
    "cos": 0,
    "pct_espaces_verts": 30,
    "usages": "Habitat pavillonnaire, commerces et artisanat sous conditions — industrie interdite",
    "notes": "34047_reglement_20250318.pdf — PLU communal Campagnan fevrier 2025 — Art U.4: surface impermeabilisee max 50% de l'assiette du projet (voies acces et stationnement en materiaux permeables) — Art U.5: 8m faitage ou 6m acrotere; annexes dissociees 4m faitage / 3m acrotere; surelevations interdites si rupture echelle — Art U.6 voies: alignement ou recul min 5m (exception si annexe >=20m2 a alignement ou muret 60-120cm existant) — Art U.6 limites separatives: sur limite ou min 3m (rd=0 = sur limite possible au moins un cote) — Art U.9: 30% pleine terre minimum; arbres HT conserves ou remplaces; 1 arbre/50m2 parking — Art U.10: 1pl/80m2 SDP + 1pl/logement min; 1pl/chambre gite — Toitures tuile canal/romane teinte vieillie, toitures plates autorisees — Facades enduits ocres clairs/pierre, palette locale",
    "source": "gpu-verifie",
    "commune": "Campagnan",
    "savedAt": "2026-04-05",
    "pdf": "34047_reglement_20250318.pdf",
    "scans": [
      { "file": "p19_art_U1_destinations.png", "page": 19, "article": "Art U.1-U.2", "label": "Destinations et usages autorises/interdits", "critere": "usages" },
      { "file": "p21_art_U4_U5_emprise_hauteur.png", "page": 21, "article": "Art U.4-U.5", "label": "Emprise au sol 50% + Hauteur 8m faitage / 6m acrotere", "critere": "ces" },
      { "file": "p21_art_U4_U5_emprise_hauteur.png", "page": 21, "article": "Art U.5", "label": "Hauteur maximale — 8m faitage / 6m acrotere", "critere": "hmax" },
      { "file": "p22_art_U6_implantation_voies_limites.png", "page": 22, "article": "Art U.6", "label": "Implantation par rapport aux voies — alignement ou recul min 5m", "critere": "rrue" },
      { "file": "p23_art_U6_limites_separatives.png", "page": 23, "article": "Art U.6", "label": "Implantation par rapport aux limites separatives — sur limite ou min 3m", "critere": "rg" },
      { "file": "p28_art_U9_espaces_verts_pleine_terre.png", "page": 28, "article": "Art U.9", "label": "Espaces libres — 30% pleine terre minimum en U2", "critere": "pct_espaces_verts" }
    ]
  },

  // =========================================================================
  // JUTIGNY (77242) — PLUiH Communaute de communes Bassee-Montois
  // Document : 200040251_reglement_20250710 (approuve 10/07/2025)
  // Structure classique articles numerotes — Zone UB analysee
  // =========================================================================

  // --- ZONE UB : Habitat individuel, mixte a dominante residentielle ---
  "77242_UB": {
    "zone": "UB",
    "ces": 60,
    "hmax": 6,
    "hfait": 10,
    "rrue": 5,
    "rfond": 0,
    "rfond_retrait_min": 3,
    "rg": 0,
    "rg_retrait_min": 3,
    "rd": 0,
    "rd_retrait_min": 3,
    "cos": 0,
    "pct_espaces_verts": 50,
    "usages": "Habitat individuel mixte a dominante residentielle",
    "notes": "200040251_reglement_20250710.pdf — PLUiH Bassee-Montois approuve 10/07/2025 — Art UB-4: recul 5m min / voies (alignement possible si coherence batiment voisin, disp. alternative 4.2.1) — Art UB-5: sur limite separative possible OU retrait min 5m; JUTIGNY SPECIFIQUE 5.2.1: retrait reduit a 3m si facade sans baie; en limite zone A/N: min 8m — Art UB-7: emprise au sol max 60% — Art UB-8: 6m egout/acrotere, 10m faitage, R+1+C — Art UB-12: 50% pleine terre min (ATTENTION: CES 60% + pleine terre 50% = CES effectif contraint a 50% max) — Art UB-15: 2 places/logement — Toitures min 2 pans 35-45deg, tuile ton rouge/brun — Pan coupe 3m angle 2 voies (4.3.1)",
    "source": "gpu-verifie",
    "commune": "Jutigny",
    "savedAt": "2026-04-06",
    "pdf": "200040251_reglement_20250710.pdf",
    "plui": "PLUiH Communaute de communes Bassee-Montois",
    "scans": [
      { "file": "p59_art_UB-4_implantation_voies.png", "page": 59, "article": "Art UB-4", "label": "Implantation / voies — recul 5m min", "critere": "rrue" },
      { "file": "p60_art_UB-5_limites_separatives.png", "page": 60, "article": "Art UB-5", "label": "Limites separatives — sur limite ou retrait 5m (Jutigny: 3m sans baie)", "critere": "rg" },
      { "file": "p61_art_UB-7_emprise_UB-8_hauteur.png", "page": 61, "article": "Art UB-7 / UB-8", "label": "Emprise 60% + Hauteur 6m egout / 10m faitage / R+1+C", "critere": "ces" },
      { "file": "p67_art_UB-12_espaces_verts.png", "page": 67, "article": "Art UB-12", "label": "Espaces verts — 50% pleine terre minimum", "critere": "pct_espaces_verts" },
      { "file": "p70_art_UB-15_stationnement.png", "page": 70, "article": "Art UB-15", "label": "Stationnement — 2 places par logement", "critere": "usages" }
    ]
  },

  // =========================================================================
  // LAMBERSART (59328) — PLUi MEL PLU3 (200093201)
  // Document : 200093201_PLUi_20251017 (approuve 17/10/2025)
  // ATTENTION : PLU3 MEL = systeme UCO/UGB/USE/UVC/UAR/UVD par territoire
  // Le GPU renvoie "Uj" mais la zone PLU3 est UCO6.1 (residentiel pavillonnaire)
  // =========================================================================

  // --- Zone Uj (alias GPU) = probablement UCO6.1 residentiel pavillonnaire ---
  "59328_Uj": {
    "zone": "Uj",
    "ces": 40,
    "hmax": 9,
    "hfait": 12,
    "rrue": 5,
    "rfond": 4,
    "rg": 3,
    "rd": 3,
    "cos": 0,
    "pct_espaces_verts": 20,
    "usages": "Residentiel pavillonnaire couronne urbaine (= probablement UCO6.1 dans PLU3 MEL)",
    "notes": "PLUi MEL PLU3 200093201 Livre III p.217-218 — Zone GPU 'Uj' = probablement UCO6.1. CES 40%. HAUTEUR ESTIMEE 9m facade / 12m faitage (typique R+1+C en couronne, valeur reelle sur plan des hauteurs geomel.lillemetropole.fr). Voie: retrait min 5m. Lat: retrait H/2 min 3m. Fond: retrait H/2 min 4m. Bande 20m. Pleine terre 20% habitat. A VERIFIER sur cartographie dynamique MEL.",
    "source": "gpu-estime",
    "commune": "Lambersart",
    "savedAt": "2026-04-07"
  },

  // --- Zone UA1 (centralite Lambersart) ---
  "59328_UA1": {
    "zone": "UA1",
    "ces": 40,
    "hmax": 12,
    "hfait": 15,
    "rrue": 0,
    "rfond": 4,
    "rg": 0,
    "rg_retrait_min": 3,
    "rd": 3,
    "cos": 0,
    "pct_espaces_verts": 20,
    "usages": "Centralite couronne urbaine (= probablement UCO1.1 dans PLU3 MEL)",
    "notes": "PLUi MEL PLU3 200093201 Livre III — Zone GPU 'UA1' = probablement UCO1.1. CES 40% impermeabilisation max 70%. HAUTEUR ESTIMEE 12m facade / 15m faitage (typique centralite couronne, valeur reelle sur plan des hauteurs). Voie: alignement ou retrait min 5m. Lat: sur limite ou H/2 min 3m. Fond: H/2 min 4m. Pleine terre 20%. A VERIFIER sur cartographie dynamique MEL.",
    "source": "gpu-estime",
    "commune": "Lambersart",
    "savedAt": "2026-04-07"
  },

  // --- Zone UVC4.1 (residentiel intermediaire, Villes/Villages Couronne) ---
  "59328_UVC4.1": {
    "zone": "UVC4.1",
    "ces": 40,
    "hmax": 9,
    "hfait": 12,
    "rrue": 0,
    "rfond": 8,
    "rg": 0,
    "rg_retrait_min": 3,
    "rd": 3,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Residentiel intermediaire, constructions jumelees, ilots semi-ouverts (PLU3 MEL UVC4.1)",
    "notes": "PLUi MEL PLU3 200093201 Livre III p.389-391 — CES 40%. HAUTEUR ESTIMEE 9m facade / 12m faitage (typique intermediaire, valeur reelle sur plan des hauteurs). Voie: alignement sur existant/voisin, sinon alignement ou retrait 5m. Lat bande 15m: sur limites obligatoire (gabarit 60deg). Bande 15-25m: sur limite max 3.50m + gabarit 45deg, ou retrait H/2 min 3m. Fond: retrait H/2 min 8m. Bande constructibilite 25m. rg=0 car sur limite possible en bande 15m, rd=3 (retrait min si pas sur limite). A VERIFIER sur cartographie dynamique MEL.",
    "source": "gpu-estime",
    "commune": "Lambersart",
    "savedAt": "2026-04-07"
  },

  // =========================================================================
  // PONTAULT-COMBAULT (77373) — PLU communal
  // Document : 77373_reglement_20230327.pdf (Modification n1, approuve 27/03/2023)
  // Structure classique : articles 6/7/9/10/13
  // =========================================================================

  // --- ZONE UA : Centre ancien de Pontault ---
  "77373_UA": {
    "zone": "UA",
    "ces": 50,
    "hmax": 6,
    "hfait": 9,
    "rrue": 0,
    "rfond": 4,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 35,
    "usages": "Centre ancien - habitat, commerces, services, tissu briard traditionnel",
    "notes": "77373_reglement_20230327.pdf — Art.UA6: alignement obligatoire (dispositions particulieres rue de la Liberation: retrait ou alignement, min 1.50m). Art.UA7: bande 10m = limite a limite obligatoire; au-dela 10m: D=H min 8m (baies) / H/2 min 4m (aveugle). Fond: D=H min 4m (aveugle) / 8m (baies). Art.UA9: CES 50%. Art.UA10: 6m facade 9m faitage R+1+C; rue de la Liberation: 9m facade 12m faitage R+2+C (profondeur 15m). Art.UA13: 35% espaces verts.",
    "source": "gpu-verifie",
    "commune": "Pontault-Combault",
    "savedAt": "2026-04-08",
    "pdf": "77373_reglement_20230327.pdf",
    "scans": [
      { "file": "p32_Art_UA-6.png", "page": 32, "article": "Art UA-6", "label": "Implantation / voies — alignement obligatoire", "critere": "rrue" },
      { "file": "p33_Art_UA-7.png", "page": 33, "article": "Art UA-7", "label": "Limites separatives — bande 10m limite a limite", "critere": "rg" },
      { "file": "p35_Art_UA-9-10.png", "page": 35, "article": "Art UA-9/10", "label": "Emprise 50% + Hauteur 6m facade / 9m faitage R+1+C", "critere": "ces" },
      { "file": "p39_Art_UA-13.png", "page": 39, "article": "Art UA-13", "label": "Espaces verts — 35% minimum", "critere": "pct_espaces_verts" }
    ]
  },

  // --- ZONE UBa : Pole Gare ---
  "77373_UBa": {
    "zone": "UBa",
    "ces": 50,
    "hmax": 12.5,
    "hfait": 15,
    "rrue": 1.5,
    "rfond": 4,
    "rg": 0,
    "rg_retrait_min": 4,
    "rd": 0,
    "rd_retrait_min": 4,
    "cos": 0,
    "pct_espaces_verts": 20,
    "usages": "Pole Gare - habitat dense, commerces, mixite fonctionnelle",
    "notes": "77373_reglement_20230327.pdf — Art.UB6: retrait 1.50m / bande 20m. Art.UB7: sur au moins 1 limite laterale dans bande 20m, au-dela D=H min 8m/4m. Fond: D=H min 4m/8m. Art.UB9: CES 50%. Art.UB10: 12.50m facade 15m faitage R+3+C. OAP Gare: 18m faitage R+4+C (19.5m si RDC commercial 4m), pas de limite emprise, espaces verts 15%. En limite UC: faitage 12m max. Pan coupe angle 5-7m.",
    "source": "gpu-verifie",
    "commune": "Pontault-Combault",
    "savedAt": "2026-04-08",
    "pdf": "77373_reglement_20230327.pdf",
    "scans": [
      { "file": "p47_Art_UB-6.png", "page": 47, "article": "Art UB-6", "label": "Implantation / voies — retrait 1.50m bande 20m", "critere": "rrue" },
      { "file": "p49_Art_UB-7.png", "page": 49, "article": "Art UB-7", "label": "Limites separatives — sur 1 limite min en bande 20m", "critere": "rg" },
      { "file": "p51_Art_UB-9-10.png", "page": 51, "article": "Art UB-9/10", "label": "Emprise 50% + Hauteur UBa 12.5m/15m R+3+C", "critere": "ces" },
      { "file": "p56_Art_UB-13.png", "page": 56, "article": "Art UB-13", "label": "Espaces verts — UBa 20%, UBb 35%", "critere": "pct_espaces_verts" }
    ]
  },

  // --- ZONE UBb : Pole Mairie et axes principaux ---
  "77373_UBb": {
    "zone": "UBb",
    "ces": 50,
    "hmax": 9.5,
    "hfait": 12,
    "rrue": 1.5,
    "rfond": 4,
    "rg": 0,
    "rg_retrait_min": 4,
    "rd": 0,
    "rd_retrait_min": 4,
    "cos": 0,
    "pct_espaces_verts": 35,
    "usages": "Pole Mairie et axes principaux - habitat, commerces",
    "notes": "77373_reglement_20230327.pdf — Art.UB6: retrait 1.50m / bande 20m. Art.UB7: sur au moins 1 limite dans bande 20m, au-dela D=H min 8m/4m. Fond: D=H min 4m/8m. Art.UB9: CES 50%. Art.UB10: 9.50m facade 12m faitage R+2+C. En limite UC: faitage 9m max. Art.UB13: 35% espaces verts.",
    "source": "gpu-verifie",
    "commune": "Pontault-Combault",
    "savedAt": "2026-04-08"
  },

  // --- ZONE UCa : Pavillonnaire classique ---
  "77373_UCa": {
    "zone": "UCa",
    "ces": 30,
    "hmax": 6,
    "hfait": 8,
    "rrue": 4,
    "rfond": 4,
    "rg": 0,
    "rg_retrait_min": 3,
    "rd": 0,
    "rd_retrait_min": 3,
    "cos": 0,
    "pct_espaces_verts": 50,
    "usages": "Pavillonnaire classique - habitat individuel dominant",
    "notes": "77373_reglement_20230327.pdf — Art.UC6: retrait 4m min, bande 25m. Art.UC7: UCa peut aller sur limites laterales dans bande 25m; si retrait: D=H min 8m (baies) / H/2 min 3m (aveugle). Au-dela 25m: annexes <3m seulement. Fond: D=H min 4m/8m. Art.UC9: CES 30%. Art.UC10: 6m facade 8m faitage R+1 ou R+C. Attique interdit. Facade max 15m. Art.UC13: 50% pleine terre.",
    "source": "gpu-verifie",
    "commune": "Pontault-Combault",
    "savedAt": "2026-04-08",
    "pdf": "77373_reglement_20230327.pdf",
    "scans": [
      { "file": "p65_Art_UC-6.png", "page": 65, "article": "Art UC-6", "label": "Implantation / voies — retrait 4m min bande 25m", "critere": "rrue" },
      { "file": "p66_Art_UC-7.png", "page": 66, "article": "Art UC-7", "label": "Limites separatives — sur limites ou D=H min 8m/3m", "critere": "rg" },
      { "file": "p67_Art_UC-9-10.png", "page": 67, "article": "Art UC-9/10", "label": "Emprise UCa 30% + Hauteur 6m/8m R+1 ou R+C", "critere": "ces" },
      { "file": "p72_Art_UC-13.png", "page": 72, "article": "Art UC-13", "label": "Espaces verts — 50% pleine terre", "critere": "pct_espaces_verts" }
    ]
  },

  // --- ZONE UCb : ZAC (Pres-Saint-Martin, Bercheres, Tourelle, Hauts du Morbras) ---
  "77373_UCb": {
    "zone": "UCb",
    "ces": 50,
    "hmax": 6,
    "hfait": 9,
    "rrue": 4,
    "rfond": 4,
    "rg": 0,
    "rg_retrait_min": 2.5,
    "rd": 0,
    "rd_retrait_min": 2.5,
    "cos": 0,
    "pct_espaces_verts": 50,
    "usages": "ZAC residentielles - pavillonnaire recent, petit collectif",
    "notes": "77373_reglement_20230327.pdf — Art.UC6: retrait 4m min ou alignement existant, bande 25m. Art.UC7: UCb peut aller sur limites dans bande 25m; si retrait: D=H min 6m (baies) / H/2 min 2.50m (aveugle). Fond: D=H min 4m/8m. Art.UC9: CES 50%. Art.UC10: 6m facade 9m faitage R+1+C. Peut etre porte a 10m si RDC activites. Attique interdit. Art.UC13: 50% pleine terre.",
    "source": "gpu-verifie",
    "commune": "Pontault-Combault",
    "savedAt": "2026-04-08"
  },

  // --- ZONE UD : Collectifs et logements groupes ---
  "77373_UD": {
    "zone": "UD",
    "ces": 50,
    "hmax": 9.5,
    "hfait": 12,
    "rrue": 4,
    "rfond": 4,
    "rg": 4,
    "rd": 4,
    "cos": 0,
    "pct_espaces_verts": 30,
    "usages": "Collectifs et logements groupes - mixite fonctionnelle, renouvellement urbain",
    "notes": "77373_reglement_20230327.pdf — Art.UD6: retrait 4m min (5m rue des Pres-Saint-Martin). Art.UD7: retrait D=H min 4m (aveugle) / 8m (baies). Fond: D=H min 4m/8m. OAP: retrait 6m fond. Art.UD9: CES 50% (non limite en OAP). Art.UD10: 9.50m facade 12m faitage R+2+C. OAP place du 18 juin: 15m R+3+attique (16.5m si services RDC 4m). OAP Louvetiere UDa: 17m facade + attique = 20m max R+4+A. Art.UD13: 30% espaces verts.",
    "source": "gpu-verifie",
    "commune": "Pontault-Combault",
    "savedAt": "2026-04-08",
    "pdf": "77373_reglement_20230327.pdf",
    "scans": [
      { "file": "p80_Art_UD-6.png", "page": 80, "article": "Art UD-6", "label": "Implantation / voies — retrait 4m min", "critere": "rrue" },
      { "file": "p81_Art_UD-7.png", "page": 81, "article": "Art UD-7", "label": "Limites separatives — retrait D=H min 4m/8m", "critere": "rg" },
      { "file": "p82_Art_UD-9-10.png", "page": 82, "article": "Art UD-9/10", "label": "Emprise 50% + Hauteur 9.5m/12m R+2+C", "critere": "ces" },
      { "file": "p87_Art_UD-13.png", "page": 87, "article": "Art UD-13", "label": "Espaces verts — 30% minimum", "critere": "pct_espaces_verts" }
    ]
  },

  // --- ZONE UV : Espaces verts et equipements collectifs ---
  "77373_UV": {
    "zone": "UV",
    "ces": 0,
    "hmax": 12,
    "hfait": 12,
    "rrue": 4,
    "rfond": 4,
    "rg": 0,
    "rg_retrait_min": 2,
    "rd": 0,
    "rd_retrait_min": 2,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Espaces verts, parcs, equipements collectifs (Nautil, cimetiere, decheterie)",
    "notes": "77373_reglement_20230327.pdf — Art.UV6: retrait 4m min; RD21: 12m; RN104: 20m de l'axe. Art.UV7: sur limites ou retrait 2m min. Fond: 4m min/8m baies. Art.UV9: pas de limite sauf Nautil (15% extension max). Art.UV10: 12m (Nautil: 15m). CES 0 = non reglemente. UVa: hebergement hotelier et sante autorises. Art.UV13: pas de % fixe. Zone a vocation equipements, peu pertinente pour habitat.",
    "source": "gpu-verifie",
    "commune": "Pontault-Combault",
    "savedAt": "2026-04-08"
  },

  // --- ZONE UX : Activites economiques ---
  "77373_UX": {
    "zone": "UX",
    "ces": 70,
    "hmax": 15,
    "hfait": 15,
    "rrue": 6,
    "rfond": 4,
    "rg": 4,
    "rd": 4,
    "cos": 0,
    "pct_espaces_verts": 15,
    "usages": "Activites economiques - industrie, artisanat, commercial, services",
    "notes": "77373_reglement_20230327.pdf — Art.UX6: retrait 6m min. RD604: alignement ou retrait 6m. Art.UX7: UXa: D=H min 4m (aveugle)/8m (baies). UXb: retrait 6m min. Art.UX9: CES 70%. Art.UX10: 15m max (10m le long RD604). Art.UX13: 15% espaces verts. UXa = abords RD604 et voie ferree. UXb = parcs Pontillault et Pre des Aulnes.",
    "source": "gpu-verifie",
    "commune": "Pontault-Combault",
    "savedAt": "2026-04-08",
    "pdf": "77373_reglement_20230327.pdf",
    "scans": [
      { "file": "p105_Art_UX-6-7.png", "page": 105, "article": "Art UX-6/7", "label": "Implantation voies 6m + limites D=H min 4m/8m", "critere": "rrue" },
      { "file": "p107_Art_UX-9-10.png", "page": 107, "article": "Art UX-9/10", "label": "Emprise 70% + Hauteur 15m max", "critere": "ces" }
    ]
  },

  // --- ZONE UR : Exploitation Francilienne ---
  "77373_UR": {
    "zone": "UR",
    "ces": 0,
    "hmax": 8,
    "hfait": 8,
    "rrue": 0,
    "rfond": 0,
    "rfond_retrait_min": 2.5,
    "rg": 0,
    "rg_retrait_min": 2.5,
    "rd": 0,
    "rd_retrait_min": 2.5,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Exploitation Francilienne - aire de repos, station-service (URa)",
    "notes": "77373_reglement_20230327.pdf — Art.UR6: alignement ou retrait 2m min. Art.UR7: en limite ou retrait D=H/2 min 2.50m. Art.UR9: non reglemente (URa: polygone plan zonage). Art.UR10: 8m max. Art.UR13: pas de % fixe. Zone tres specifique, non pertinente pour habitat.",
    "source": "gpu-verifie",
    "commune": "Pontault-Combault",
    "savedAt": "2026-04-08"
  },

  // --- ZONE AU : A urbaniser (activites economiques) ---
  "77373_AU": {
    "zone": "AU",
    "ces": 70,
    "hmax": 12,
    "hfait": 12,
    "rrue": 4,
    "rfond": 5,
    "rg": 0,
    "rg_retrait_min": 5,
    "rd": 0,
    "rd_retrait_min": 5,
    "cos": 0,
    "pct_espaces_verts": 10,
    "usages": "Zone a urbaniser - extension activites economiques (Pontillault, Cocteau)",
    "notes": "77373_reglement_20230327.pdf — Art.AU6: retrait 4m min. Francilienne: AUa 60m de l'axe RN104, AUb 20m axe bretelle. Art.AU7: AUa: sur limite ou retrait 5m; AUb: D=H min 6m (baies) / sur limite si aveugle; services publics: retrait 3m min. Art.AU9: CES 70%. Art.AU10: 12m (9m le long chemin des Vieilles Vignes a l'est du chemin des Bercheres). Art.AU13: 10% espaces verts.",
    "source": "gpu-verifie",
    "commune": "Pontault-Combault",
    "savedAt": "2026-04-08"
  },

  // --- ZONE A : Agricole ---
  "77373_A": {
    "zone": "A",
    "ces": 0,
    "hmax": 12,
    "hfait": 12,
    "rrue": 5,
    "rfond": 3,
    "rg": 0,
    "rg_retrait_min": 3,
    "rd": 0,
    "rd_retrait_min": 3,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Zone agricole - terres agricoles a proteger (est du territoire)",
    "notes": "77373_reglement_20230327.pdf — Art.A6: retrait 5m (RN104: 100m axe, RN4: 75m axe, RD21: 12m); exploitation agricole: 5m min. Art.A7: en limite ou retrait H/2 min 3m. Art.A9: non reglemente. Art.A10: 12m max. Art.A13: pas de % fixe. Secteur Azh: zone humide, restrictions supplementaires. Constructions limitees a l'exploitation agricole.",
    "source": "gpu-verifie",
    "commune": "Pontault-Combault",
    "savedAt": "2026-04-08"
  },

  // --- ZONE N : Naturelle ---
  "77373_N": {
    "zone": "N",
    "ces": 0,
    "hmax": 3,
    "hfait": 3,
    "rrue": 5,
    "rfond": 3,
    "rg": 0,
    "rg_retrait_min": 3,
    "rd": 0,
    "rd_retrait_min": 3,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Zone naturelle - boisements, lisieres, corridors biologiques",
    "notes": "77373_reglement_20230327.pdf — Art.N6: retrait 5m (RN104: 100m, RD604: 75m, RD21: 12m). Art.N7: en limite ou retrait H/2 min 3m. Art.N9: non reglemente. Art.N10: 3m (jardins familiaux) / hauteur existante pour extensions autorisees a l'Art.2. Ns: STECAL. Nzh: zone humide restrictive. Constructions tres limitees. Zone non pertinente pour faisabilite habitat.",
    "source": "gpu-verifie",
    "commune": "Pontault-Combault",
    "savedAt": "2026-04-08"
  },

  // =========================================================================
  // SEVRAN (93071) — PLUi Paris Terres d'Envol (EPT 200058097)
  // Document : 200058097_reglement_20250707.pdf (approuve 07/07/2025)
  // Structure thematique post-reforme 2016, systeme d'indices (A,B,C...) par zone
  // Les indices geographiques sont definis sur le plan de zonage
  // Valeurs ci-dessous = indice A (le plus courant) sauf mention contraire
  // =========================================================================

  // --- ZONE U1 : Pavillonnaire, habitat individuel ---
  "93071_U1": {
    "zone": "U1",
    "ces": 30,
    "hmax": 7,
    "hfait": 10,
    "rrue": 5.5,
    "rrue_retrait_min": 5.5,
    "rfond": 8,
    "rfond_retrait_min": 8,
    "rg": 2.5,
    "rg_retrait_min": 2.5,
    "rd": 2.5,
    "rd_retrait_min": 2.5,
    "cos": 0,
    "pct_espaces_verts": 45,
    "usages": "Zone pavillonnaire, habitat individuel",
    "notes": "200058097_reglement_20250707.pdf — CES indices: A=30% B=35% C=45% D=35% E=35%+200m2max F=30%. Hauteur ind.A: facade 6m acrotere 7m faitag 10m (R+1+C). Recul voie min 5.5m bande 20m. Limites sep: retrait H/3 min 2.5m (sans vue) ou H/2 min 8m (avec vue). Sevran: logement min 50m2 SDP.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-13",
    "scans": [
      { "file": "p94_implantation_voies.png", "page": 94, "article": "Ind.1", "label": "Implantation voies — recul 5.5m bande 20m", "critere": "rrue" },
      { "file": "p99_implantation_limites.png", "page": 99, "article": "Ind.2", "label": "Limites separatives — H/3 min 2.5m", "critere": "rg" },
      { "file": "p111_emprise.png", "page": 111, "article": "Ind.4", "label": "Emprise au sol — A=30% B=40% C=40%", "critere": "ces" },
      { "file": "p113_hauteur.png", "page": 113, "article": "Ind.5", "label": "Hauteur — 6m facade 7m acrotere 10m faitage", "critere": "hmax" }
    ]
  },

  // --- ZONE U1a : Pavillonnaire, hebergement interdit ---
  // GPU Sevran: U1aCHFAJA → voies:C limites:H entre:F emprise:A hauteur:J espverts:A
  "93071_U1a": {
    "zone": "U1a",
    "ces": 30,
    "hmax": 7,
    "hfait": 10,
    "rrue": 5.5,
    "rrue_retrait_min": 5.5,
    "rfond": 8,
    "rfond_retrait_min": 8,
    "rg": 3,
    "rg_retrait_min": 3,
    "rd": 3,
    "rd_retrait_min": 3,
    "cos": 0,
    "pct_espaces_verts": 45,
    "usages": "Pavillonnaire, hebergement interdit",
    "notes": "5.4.1 REGLEMENT DES ZONES.pdf p13-38 — GPU indices CHFAJA. Voies ind.C: recul 5.5m bande 20m. Limites ind.H: retrait >=1 limite, min 8m(vues) 3m(sans vues) dans bande 20m. Emprise ind.A: 30%. Hauteur ind.J: 7m acrotere 10m faitage R+1+c. Espaces verts ind.A: 45% pleine terre. Hebergement bureaux commerce interdits.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-14"
  },

  // --- ZONE U1c : Pavillonnaire, cite-jardin ---
  "93071_U1c": {
    "zone": "U1c",
    "ces": 30,
    "hmax": 7,
    "hfait": 10,
    "rrue": 5.5,
    "rrue_retrait_min": 5.5,
    "rfond": 8,
    "rfond_retrait_min": 8,
    "rg": 2.5,
    "rg_retrait_min": 2.5,
    "rd": 2.5,
    "rd_retrait_min": 2.5,
    "cos": 0,
    "pct_espaces_verts": 45,
    "usages": "Pavillonnaire, cite-jardin, commerces sous conditions",
    "notes": "200058097_reglement_20250707.pdf — Secteur U1c: cite-jardin maintien bati d'origine obligatoire. Clotures max 0.5m.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-13"
  },

  // --- ZONE U2 : Centralite, mixte dense ---
  "93071_U2": {
    "zone": "U2",
    "ces": 0,
    "hmax": 17,
    "hfait": 20,
    "rrue": 0,
    "rfond": 8,
    "rfond_retrait_min": 8,
    "rg": 8,
    "rg_retrait_min": 8,
    "rd": 8,
    "rd_retrait_min": 8,
    "cos": 0,
    "pct_espaces_verts": 15,
    "usages": "Centralite, mixte dense, commerces en RDC",
    "notes": "200058097_reglement_20250707.pdf — CES: ind.A=non regl. B=85% C=80%/50%>25m D=80%. Hauteur ind.A: facade 17m faitag 20m (R+5+attique). Ind.B: 20m/23m (R+6). Ind.C: 27m (R+8). Alignement possible. Limites: H/2 min 8m. Transition U1: bande 10m=hmax U1+3m. RDC actif HSP 4m.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-13",
    "scans": [
      { "file": "p130_implantation_voies.png", "page": 130, "article": "Ind.1", "label": "Implantation voies — alignement ou recul", "critere": "rrue" },
      { "file": "p135_implantation_limites.png", "page": 135, "article": "Ind.2", "label": "Limites separatives — H/2 min 8m", "critere": "rg" },
      { "file": "p143_emprise.png", "page": 143, "article": "Ind.4", "label": "Emprise au sol — A=non regl. B=85%", "critere": "ces" },
      { "file": "p146_hauteur.png", "page": 146, "article": "Ind.5", "label": "Hauteur — 17m facade R+5+attique", "critere": "hmax" }
    ]
  },

  // --- ZONE U2a : Centralite, secteur courant Sevran ---
  // GPU Sevran: U2aGFEAHA → voies:G limites:F entre:E emprise:A hauteur:H espverts:A
  "93071_U2a": {
    "zone": "U2a",
    "ces": 80,
    "hmax": 15,
    "hfait": 15,
    "rrue": 0,
    "rfond": 5,
    "rfond_retrait_min": 5,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 15,
    "usages": "Centralite, mixte dense, commerces en RDC",
    "notes": "5.4.1 REGLEMENT DES ZONES.pdf p41-74 — GPU indices GFEAHA. Voies ind.G (p51): alignement ou recul min 2.5m. Limites ind.F (p56): sur limites ou retrait L=H/3 min 5m(vues) 3m(sans). Emprise ind.A: NON REGLEMENTEE (hypothese 80% pour calcul). Hauteur ind.H (p67): 15m au faitag uniquement. Espaces verts ind.A: 15% pleine terre + 15% CBS. RDC actif HSP 4m. ATTENTION: GPU renvoie U2a pour 82 av. du General Leclerc mais geocodage BAN errone — les parcelles AC110/111 au n82 sont en realite sur Rue d'Aulnay, zone U3a LIDAFA (verifie SIG PTE 2026-04-14).",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-14"
  },

  // --- ZONE U2c : Centralite, entrepots limites ---
  "93071_U2c": {
    "zone": "U2c",
    "ces": 0,
    "hmax": 17,
    "hfait": 20,
    "rrue": 0,
    "rfond": 8,
    "rfond_retrait_min": 8,
    "rg": 8,
    "rg_retrait_min": 8,
    "rd": 8,
    "rd_retrait_min": 8,
    "cos": 0,
    "pct_espaces_verts": 15,
    "usages": "Centralite, limitation entrepots et industrie",
    "notes": "200058097_reglement_20250707.pdf — Sous-secteur U2c: limitation superficies entrepots/industrie. Memes regles morpho que U2 (indices A par defaut).",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-13"
  },

  // --- ZONE U3 : Mixte, habitat collectif et activites ---
  "93071_U3": {
    "zone": "U3",
    "ces": 60,
    "hmax": 13,
    "hfait": 16,
    "rrue": 0,
    "rfond": 8,
    "rfond_retrait_min": 8,
    "rg": 8,
    "rg_retrait_min": 8,
    "rd": 8,
    "rd_retrait_min": 8,
    "cos": 0,
    "pct_espaces_verts": 15,
    "usages": "Mixte, habitat collectif et activites",
    "notes": "200058097_reglement_20250707.pdf — CES: ind.A=non regl. B=60% C=60% D=55% E=65% F=45% G=45% H=80%. Hauteur ind.A: 13m/16m (R+3+comble). Ind.B: 16m/18m (R+4). Ind.D: gabarit 20m+oblique 60deg plafond 27m (R+6). Alignement ou recul max 4m. Limites: H/2 min 8m. RDC actif HSP 4m.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-13",
    "scans": [
      { "file": "p163_implantation_voies.png", "page": 163, "article": "Ind.1", "label": "Implantation voies — alignement ou recul 4m", "critere": "rrue" },
      { "file": "p168_implantation_limites.png", "page": 168, "article": "Ind.2", "label": "Limites separatives — H/2 min 8m", "critere": "rg" },
      { "file": "p179_emprise.png", "page": 179, "article": "Ind.4", "label": "Emprise au sol — A=non regl. B=60% C=60%", "critere": "ces" },
      { "file": "p183_hauteur.png", "page": 183, "article": "Ind.5", "label": "Hauteur — 13m facade R+3+comble", "critere": "hmax" }
    ]
  },

  // --- ZONE U3a : Mixte, secteur courant Sevran (est, sud gare) ---
  // GPU Sevran: U3aEEEDFA → voies:E limites:E entre:E emprise:D hauteur:F espverts:A
  "93071_U3a": {
    "zone": "U3a",
    "ces": 55,
    "hmax": 21,
    "hfait": 21,
    "rrue": 0,
    "rfond": 8,
    "rfond_retrait_min": 8,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 15,
    "usages": "Mixte, collectif et activites, habitat/commercial",
    "notes": "5.4.1 REGLEMENT DES ZONES.pdf p76-114 — GPU indices EEDFA. Voies ind.E (p82): alignement obligatoire, bande 15m sur limites. Limites ind.E (p88): sur limites laterales dans bande 15m, retrait au-dela L=H/2 min 4.5m(lat vues) 3m(lat sans). Fond retrait min 8m(vues) 6m(sans). Emprise ind.D (p98): 55%. Hauteur ind.F (p104): 21m faitag R+6 (12m/R+3 le long rue Liegard). Espaces verts ind.A (p114): 15% pleine terre + 15% CBS. Percees visuelles >50m de facade. VARIANTE LIDAFA existe (voir 93071_U3aLIDAFA) avec ces=80(NR), rrue=5m, rfond=3m.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-14"
  },

  // --- ZONE U3a LIDAFA : Mixte, secteur ouest Rue d'Aulnay (parcelles AC110/111) ---
  // GPU Sevran: U3aLIDAFA → voies:L limites:I entre:D emprise:A hauteur:F espverts:A
  // ATTENTION: BAN geocode "82 av. du General Leclerc" a tort — c'est 82 Rue d'Aulnay
  "93071_U3aLIDAFA": {
    "zone": "U3a",
    "indices": "LIDAFA",
    "ces": 80,
    "hmax": 21,
    "hfait": 21,
    "rrue": 5,
    "rfond": 3,
    "rfond_retrait_min": 3,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 15,
    "usages": "Mixte, collectif et activites, habitat/commercial",
    "oap": "OAP sectorielle Rue d'Aulnay / Villa des Pres — Hauteur max 12m (R+3) le long de la rue Liegard. Orientations: continuite batie, front urbain, espaces publics. Voir 4.2.-OAP-sectorielles.pdf p157-158.",
    "oap_hmax": 12,
    "oap_label": "Rue d'Aulnay / Villa des Pres",
    "terrain_angle": true,
    "terrain_angle_rules": "Parcelles AC110/AC111 en angle de rue. (1) Limites (p85): implantation sur limites separatives AUTORISEE, si retrait L=H/2 min 3m (ind.I). (2) Pan coupe (p79): 3m minimum a l'angle. (3) Hauteur (p105): si 2 voies avec hauteurs differentes, la plus haute s'applique dans bande 15m perpendiculaire a la voie la plus large. (4) Emprise: la majoration 75% pour 2 voies publiques EXCLUT les angles de rue (p99). (5) Limites convergentes: exclusion du calcul en arc de cercle R=H/2 (p86,90).",
    "notes": "5.4.1 REGLEMENT DES ZONES.pdf p76-114 — GPU indices LIDAFA. Voies ind.L (p84): bande constructible 20m, recul min 5m par rapport a l'alignement. Limites ind.I (p90): implantation sur limites separatives autorisee ou retrait L=H/2 min 3m; fond de parcelle retrait obligatoire L=H/2 min 3m. Entre-constr. ind.D (p96): L=H/2 min 4m(vues) 2.5m(sans). Emprise ind.A (p98): NON REGLEMENTEE (hypothese 80% pour calcul). Hauteur ind.F (p104): 21m faitag R+6 (12m/R+3 le long rue Liegard + OAP Rue d'Aulnay/Villa des Pres p157-158). Espaces verts ind.A (p114): 15% pleine terre + 15% CBS. Parcelles AC110/AC111 = 82 Rue d'Aulnay, PAS avenue du General Leclerc. TERRAIN D'ANGLE: voir terrain_angle_rules.",
    "source": "sig-pte-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-14"
  },

  // --- ZONE U3c : Mixte, congres interdits, entrepots/bureaux limites ---
  "93071_U3c": {
    "zone": "U3c",
    "ces": 60,
    "hmax": 13,
    "hfait": 16,
    "rrue": 0,
    "rfond": 8,
    "rfond_retrait_min": 8,
    "rg": 8,
    "rg_retrait_min": 8,
    "rd": 8,
    "rd_retrait_min": 8,
    "cos": 0,
    "pct_espaces_verts": 15,
    "usages": "Mixte, congres et gros interdits, entrepots/bureaux max 200m2",
    "notes": "200058097_reglement_20250707.pdf — Sous-secteur U3c: centre de congres et commerce de gros interdits, entrepots et bureaux limites a 200m2 SDP. Regles morphologiques identiques a U3 (indice A par defaut). CES: ind.A=non regl. B=60% C=60% D=55% E=65%. Hauteur ind.A: 13m/16m (R+3). Alignement ou recul max 4m. Limites: H/2 min 8m. Indice exact depend du plan de zonage graphique.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-13",
    "scans": [
      { "file": "p163_implantation_voies.png", "page": 163, "article": "Ind.1", "label": "Implantation voies — alignement ou recul 4m", "critere": "rrue" },
      { "file": "p168_implantation_limites.png", "page": 168, "article": "Ind.2", "label": "Limites separatives — H/2 min 8m", "critere": "rg" },
      { "file": "p179_emprise.png", "page": 179, "article": "Ind.4", "label": "Emprise au sol — A=non regl. B=60% C=60%", "critere": "ces" },
      { "file": "p183_hauteur.png", "page": 183, "article": "Ind.5", "label": "Hauteur — 13m facade R+3+comble", "critere": "hmax" }
    ]
  },

  // --- ZONE U4 : Bourgs et centres anciens ---
  // GPU Sevran: U4aAAAAAA → tous indices A (par defaut)
  "93071_U4": {
    "zone": "U4",
    "ces": 80,
    "hmax": 12,
    "hfait": 15,
    "rrue": 0,
    "rfond": 5,
    "rfond_retrait_min": 5,
    "rg": 0,
    "rg_retrait_min": 0,
    "rd": 0,
    "rd_retrait_min": 0,
    "cos": 0,
    "pct_espaces_verts": 15,
    "usages": "Bourgs et centres anciens, tissu traditionnel",
    "notes": "5.4.1 REGLEMENT DES ZONES.pdf p121-138 — GPU indices AAAAAA. Voies ind.A (p124): alignement obligatoire. Limites ind.A (p126): sur limites laterales dans bande 15m, au-dela retrait L=H/3 min 5m(vues) 3m(sans). Fond: retrait L=H/3 min 5m(vues) 3m(sans). Emprise ind.A (p131): NON REGLEMENTEE (hypothese 80% zone centre). Hauteur ind.A (p134): 15m au faitag seul (hmax estimee 12m = R+3 typique). Ind.B: 9m egout 13m faitag R+3. Espaces verts ind.A (p138): 15% pleine terre + 15% CBS.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-14",
    "scans": [
      { "file": "p205_implantation_voies.png", "page": 205, "article": "Ind.1", "label": "Implantation voies — alignement obligatoire", "critere": "rrue" },
      { "file": "p207_implantation_limites.png", "page": 207, "article": "Ind.2", "label": "Limites separatives — sur limite bande 15m", "critere": "rg" },
      { "file": "p212_emprise.png", "page": 212, "article": "Ind.4", "label": "Emprise au sol — non reglementee", "critere": "ces" },
      { "file": "p215_hauteur.png", "page": 215, "article": "Ind.5", "label": "Hauteur — 15m faitage", "critere": "hmax" }
    ]
  },

  // --- ZONE U5 : Grandes residences, collectif (defaut ind.A) ---
  "93071_U5": {
    "zone": "U5",
    "ces": 40,
    "hmax": 20,
    "hfait": 20,
    "rrue": 4,
    "rrue_retrait_min": 4,
    "rfond": 8,
    "rfond_retrait_min": 8,
    "rg": 8,
    "rg_retrait_min": 8,
    "rd": 8,
    "rd_retrait_min": 8,
    "cos": 0,
    "pct_espaces_verts": 30,
    "usages": "Grandes residences, habitat collectif, grands ensembles",
    "notes": "200058097_reglement_20250707.pdf — Valeurs indice A par defaut. CES ind.A=40%. Hauteur ind.A: 20m point haut R+5. Voies ind.A: alignement ou recul 4m. Limites ind.A: H/2 min 8m. Pleine terre ind.A: 30%.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-13",
    "scans": [
      { "file": "p230_implantation_voies.png", "page": 230, "article": "Ind.1", "label": "Implantation voies — alignement ou recul 4m", "critere": "rrue" },
      { "file": "p232_implantation_limites.png", "page": 232, "article": "Ind.2", "label": "Limites separatives — H/2 min 8m", "critere": "rg" },
      { "file": "p241_emprise.png", "page": 241, "article": "Ind.4", "label": "Emprise au sol — A=40%", "critere": "ces" },
      { "file": "p244_hauteur.png", "page": 244, "article": "Ind.5", "label": "Hauteur — 20m R+5", "critere": "hmax" }
    ]
  },

  // --- ZONE U5b : Grandes residences, secteur Sevran ouest ---
  // GPU Sevran: U5bGGDFIA → voies:G limites:G entre:D emprise:F hauteur:I espverts:A
  "93071_U5b": {
    "zone": "U5b",
    "ces": 40,
    "hmax": 18,
    "hfait": 18,
    "rrue": 0,
    "rfond": 6,
    "rfond_retrait_min": 6,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 30,
    "usages": "Grandes residences, habitat collectif, renouvellement urbain",
    "notes": "5.4.1 REGLEMENT DES ZONES.pdf p139-169 — GPU indices GGDFIA. Voies ind.G (p149): alignement ou recul min 2.5m. Limites ind.G (p155-156): sur limites laterales ou retrait, fond retrait L=H/2 min 6m(vues) 3m(sans). Emprise ind.F (p160): 40%. Hauteur ind.I (p164): 18m point haut R+4+c ou att (attique recul 3m). Espaces verts ind.A (p169): 30% pleine terre. Transition U1: bande 10m=hmax U1+3m.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-14"
  },

  // --- ZONE U6 : Activites economiques ---
  "93071_U6": {
    "zone": "U6",
    "ces": 60,
    "hmax": 16,
    "hfait": 16,
    "rrue": 0,
    "rfond": 4,
    "rfond_retrait_min": 4,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 15,
    "usages": "Activites economiques, industrie, entrepots, bureaux",
    "notes": "200058097_reglement_20250707.pdf — CES: ind.A=60% B=non regl. C=45% D=50% E=40% F=75% G=60%. Hauteur ind.A: 16m. Ind.B: 30m. Ind.C: 23m. Ind.E: egout 13m faitag 16m (R+3). Alignement ou recul. Limites: sur limite ou H/2 min 4m.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-13",
    "scans": [
      { "file": "p261_implantation_voies.png", "page": 261, "article": "Ind.1", "label": "Implantation voies — alignement ou recul", "critere": "rrue" },
      { "file": "p269_implantation_limites.png", "page": 269, "article": "Ind.2", "label": "Limites separatives — sur limite ou H/2 min 4m", "critere": "rg" },
      { "file": "p282_emprise.png", "page": 282, "article": "Ind.4", "label": "Emprise au sol — A=60%", "critere": "ces" },
      { "file": "p285_hauteur.png", "page": 285, "article": "Ind.5", "label": "Hauteur — 16m", "critere": "hmax" }
    ]
  },

  // --- ZONE U6u : Activites, secteur Casanova ---
  "93071_U6u": {
    "zone": "U6u",
    "ces": 60,
    "hmax": 16,
    "hfait": 16,
    "rrue": 0,
    "rfond": 4,
    "rfond_retrait_min": 4,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 15,
    "usages": "Activites, secteur Casanova, transition U1",
    "notes": "200058097_reglement_20250707.pdf — Sous-zone U6u (Casanova): transition U1 bande 6m=hmax U1+3m. Commerce limite 150m2 SDP.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-13"
  },

  // --- ZONE U7 : Equipements publics (non reglemente) ---
  "93071_U7": {
    "zone": "U7",
    "ces": 0,
    "hmax": 0,
    "hfait": 0,
    "rrue": 0,
    "rfond": 0,
    "rg": 0,
    "rd": 0,
    "cos": 0,
    "pct_espaces_verts": 15,
    "usages": "Equipements publics, non reglemente",
    "notes": "200058097_reglement_20250707.pdf — Emprise hauteur implantation non reglementees. Pleine terre 15%. Zone dediee equipements d'interet collectif.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-13"
  },

  // --- ZONE N : Naturelle stricte ---
  "93071_N": {
    "zone": "N",
    "ces": 5,
    "hmax": 6,
    "hfait": 6,
    "rrue": 10,
    "rfond": 6,
    "rfond_retrait_min": 6,
    "rg": 6,
    "rg_retrait_min": 6,
    "rd": 6,
    "rd_retrait_min": 6,
    "cos": 0,
    "pct_espaces_verts": 80,
    "usages": "Naturelle stricte, Natura 2000, forets",
    "notes": "200058097_reglement_20250707.pdf — CES: 100m2 max et 5% terrain. Extension +20% emprise existante. Hauteur 6m (R+1). Recul voie 10m. Retrait limites zone U: 6m. Pleine terre 80%.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-13"
  },

  // --- ZONE Nl : Parcs et espaces verts urbains ---
  "93071_Nl": {
    "zone": "Nl",
    "ces": 20,
    "hmax": 10,
    "hfait": 10,
    "rrue": 10,
    "rfond": 6,
    "rfond_retrait_min": 6,
    "rg": 6,
    "rg_retrait_min": 6,
    "rd": 6,
    "rd_retrait_min": 6,
    "cos": 0,
    "pct_espaces_verts": 60,
    "usages": "Parcs et espaces verts urbains, loisirs",
    "notes": "200058097_reglement_20250707.pdf — CES: 400m2 max et 20% terrain. Hauteur 10m (R+2). Recul voie 10m. Retrait limites zone U: 6m. Pleine terre 60%.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-13"
  },

  // --- ZONE Nla : Agriculture urbaine, jardins ---
  "93071_Nla": {
    "zone": "Nla",
    "ces": 20,
    "hmax": 10,
    "hfait": 10,
    "rrue": 2,
    "rfond": 6,
    "rfond_retrait_min": 6,
    "rg": 6,
    "rg_retrait_min": 6,
    "rd": 6,
    "rd_retrait_min": 6,
    "cos": 0,
    "pct_espaces_verts": 60,
    "usages": "Agriculture urbaine, jardins partages et familiaux",
    "notes": "200058097_reglement_20250707.pdf — CES: 400m2 max et 20% terrain (serres 40%). Sevran: CES 400m2 serres 20% hauteur serres 5m. Hauteur 10m (R+2). Recul voie 2m. Pleine terre 60%.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-13"
  },

  // --- ZONE Nzh : Zones humides, protection stricte ---
  "93071_Nzh": {
    "zone": "Nzh",
    "ces": 0,
    "hmax": 0,
    "hfait": 0,
    "rrue": 10,
    "rfond": 6,
    "rfond_retrait_min": 6,
    "rg": 6,
    "rg_retrait_min": 6,
    "rd": 6,
    "rd_retrait_min": 6,
    "cos": 0,
    "pct_espaces_verts": 100,
    "usages": "Zones humides, protection stricte, inconstructible",
    "notes": "200058097_reglement_20250707.pdf — Emprise et hauteur: existant uniquement. Pleine terre 100%. Interdits: drainage remblaiement impermeabilisation affouillement.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-13"
  },

  // --- ZONE A : Agricole ---
  "93071_A": {
    "zone": "A",
    "ces": 0,
    "hmax": 7,
    "hfait": 15,
    "rrue": 5,
    "rrue_retrait_min": 5,
    "rfond": 5,
    "rfond_retrait_min": 5,
    "rg": 5,
    "rg_retrait_min": 5,
    "rd": 5,
    "rd_retrait_min": 5,
    "cos": 0,
    "pct_espaces_verts": 0,
    "usages": "Zone agricole, 1 logement par exploitation",
    "notes": "200058097_reglement_20250707.pdf — CES non regl. Hauteur: 15m agricole 7m habitation (1 logement 250m2 SDP max). Recul voie 5m (peripherique: 15m). Limites: retrait 5m min. Distance constructions: H/2 min 8m.",
    "source": "gpu-verifie",
    "commune": "Sevran",
    "pdf": "200058097_reglement_20250707.pdf",
    "savedAt": "2026-04-13"
  }

};

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BASE_REGLES_PLU;
}
// Exposition sur window pour les scripts navigateur (const ne s'attache pas a window)
if (typeof window !== 'undefined') {
  window.BASE_REGLES_PLU = BASE_REGLES_PLU;
}

// =============================================================================
// BASE DE SCANS PLU — captures d'ecran des reglements pour verification visuelle
// Integree ici (et non fetchee) pour fonctionner sur file:// et http://
// =============================================================================
var BASE_SCANS_PLU = {

  "34047_U2": {
    "commune": "Campagnan", "insee": "34047", "zone": "U2",
    "pdf": "34047_reglement_20250318.pdf",
    "scans": [
      { "file": "p19_art_U1_destinations.png", "page": 19, "article": "Art U.1-U.2", "label": "Destinations et usages autorises/interdits", "critere": "usages" },
      { "file": "p21_art_U4_U5_emprise_hauteur.png", "page": 21, "article": "Art U.4-U.5", "label": "Emprise au sol 50% + Hauteur 8m faitage / 6m acrotere", "critere": "ces" },
      { "file": "p21_art_U4_U5_emprise_hauteur.png", "page": 21, "article": "Art U.5", "label": "Hauteur maximale — 8m faitage / 6m acrotere", "critere": "hmax" },
      { "file": "p22_art_U6_implantation_voies_limites.png", "page": 22, "article": "Art U.6", "label": "Implantation par rapport aux voies — alignement ou recul min 5m", "critere": "rrue" },
      { "file": "p23_art_U6_limites_separatives.png", "page": 23, "article": "Art U.6", "label": "Implantation par rapport aux limites separatives — sur limite ou min 3m", "critere": "rg" },
      { "file": "p28_art_U9_espaces_verts_pleine_terre.png", "page": 28, "article": "Art U.9", "label": "Espaces libres — 30% pleine terre minimum en U2", "critere": "pct_espaces_verts" }
    ]
  },

  "93046_UG": {
    "commune": "Livry-Gargan", "insee": "93046", "zone": "UG",
    "pdf": "200058790_reglement_20241217.pdf",
    "plui": "PLUi Grand Paris Grand Est (200058790)",
    "scans": [
      { "file": "p198_art1_destinations_usages.png", "page": 198, "article": "Art 1", "label": "Destinations et usages autorises", "critere": "usages" },
      { "file": "p202_art3-1_emprise_au_sol.png", "page": 202, "article": "Art 3.1", "label": "Emprise au sol — tableau des seuils", "critere": "ces" },
      { "file": "p203_art3-1_emprise_LR1_LR2_LR3.png", "page": 203, "article": "Art 3.1", "label": "Emprise — codes LR1, LR2, LR3 (tranches)", "critere": "ces" },
      { "file": "p204_art3-1_emprise_LR3_LR4.png", "page": 204, "article": "Art 3.1", "label": "Emprise — LR3 suite, LR4, angle 2 voies", "critere": "ces" },
      { "file": "p205_art3-2_hauteur_maximale_1.png", "page": 205, "article": "Art 3.2", "label": "Hauteur maximale — tableau (4m a 18m)", "critere": "hmax" },
      { "file": "p206_art3-2_hauteur_maximale_2.png", "page": 206, "article": "Art 3.2", "label": "Hauteur maximale — suite (21m a 35m)", "critere": "hmax" },
      { "file": "p207_art3-2_depassement_attique.png", "page": 207, "article": "Art 3.2", "label": "Depassement hauteur + attique obligatoire", "critere": "hmax" },
      { "file": "p208_art3-2_hauteur_rdc_angle.png", "page": 208, "article": "Art 3.2", "label": "Hauteur RDC 4m + angle 2 voies + jouxtant UC", "critere": "hmax" },
      { "file": "p210_art3-3-1_implantation_voies_1.png", "page": 210, "article": "Art 3.3.1", "label": "Implantation / voies — tableau retraits", "critere": "rrue" },
      { "file": "p211_art3-3-1_implantation_voies_2.png", "page": 211, "article": "Art 3.3.1", "label": "Implantation / voies — suite retraits", "critere": "rrue" },
      { "file": "p214_art3-3-2_limites_separatives.png", "page": 214, "article": "Art 3.3.2", "label": "Limites separatives — renvoi Annexe 1", "critere": "rg" },
      { "file": "p226_art6_pleine_terre_renvoi.png", "page": 226, "article": "Art 6.2", "label": "Pleine terre — renvoi dispositions communes", "critere": "pct_espaces_verts" },
      { "file": "p062_disp_communes_pleine_terre.png", "page": 62, "article": "Disp. communes", "label": "Pleine terre — tableau 20% a 70%", "critere": "pct_espaces_verts" }
    ]
  },

  // --- JUTIGNY (77242) — Zone UB ---
  "77242_UB": {
    "commune": "Jutigny", "insee": "77242", "zone": "UB",
    "pdf": "200040251_reglement_20250710.pdf",
    "plui": "PLUiH Communaute de communes Bassee-Montois",
    "scans": [
      { "file": "p59_art_UB-4_implantation_voies.png", "page": 59, "article": "Art UB-4", "label": "Implantation / voies — recul 5m min", "critere": "rrue" },
      { "file": "p60_art_UB-5_limites_separatives.png", "page": 60, "article": "Art UB-5", "label": "Limites separatives — sur limite ou retrait 5m (Jutigny: 3m sans baie)", "critere": "rg" },
      { "file": "p61_art_UB-7_emprise_UB-8_hauteur.png", "page": 61, "article": "Art UB-7 / UB-8", "label": "Emprise 60% + Hauteur 6m egout / 10m faitage / R+1+C", "critere": "ces" },
      { "file": "p67_art_UB-12_espaces_verts.png", "page": 67, "article": "Art UB-12", "label": "Espaces verts — 50% pleine terre minimum", "critere": "pct_espaces_verts" },
      { "file": "p70_art_UB-15_stationnement.png", "page": 70, "article": "Art UB-15", "label": "Stationnement — 2 places par logement", "critere": "usages" }
    ]
  },

  // =========================================================================
  // PONTAULT-COMBAULT (77373) — Scans PLU communal
  // =========================================================================

  "77373_UA": {
    "commune": "Pontault-Combault", "insee": "77373", "zone": "UA", "pdf": "77373_reglement_20230327.pdf",
    "scans": [
      { "file": "p32_Art_UA-6.png", "page": 32, "article": "Art UA-6", "label": "Implantation / voies — alignement obligatoire", "critere": "rrue" },
      { "file": "p33_Art_UA-7.png", "page": 33, "article": "Art UA-7", "label": "Limites separatives — bande 10m limite a limite", "critere": "rg" },
      { "file": "p35_Art_UA-9-10.png", "page": 35, "article": "Art UA-9/10", "label": "Emprise 50% + Hauteur 6m facade / 9m faitage R+1+C", "critere": "ces" },
      { "file": "p39_Art_UA-13.png", "page": 39, "article": "Art UA-13", "label": "Espaces verts — 35% minimum", "critere": "pct_espaces_verts" }
    ]
  },

  "77373_UBa": {
    "commune": "Pontault-Combault", "insee": "77373", "zone": "UBa", "pdf": "77373_reglement_20230327.pdf",
    "scans": [
      { "file": "p47_Art_UB-6.png", "page": 47, "article": "Art UB-6", "label": "Implantation / voies — retrait 1.50m bande 20m", "critere": "rrue" },
      { "file": "p49_Art_UB-7.png", "page": 49, "article": "Art UB-7", "label": "Limites separatives — sur 1 limite min en bande 20m", "critere": "rg" },
      { "file": "p51_Art_UB-9-10.png", "page": 51, "article": "Art UB-9/10", "label": "Emprise 50% + Hauteur UBa 12.5m/15m R+3+C", "critere": "ces" },
      { "file": "p56_Art_UB-13.png", "page": 56, "article": "Art UB-13", "label": "Espaces verts — UBa 20%, UBb 35%", "critere": "pct_espaces_verts" }
    ]
  },

  "77373_UCa": {
    "commune": "Pontault-Combault", "insee": "77373", "zone": "UCa", "pdf": "77373_reglement_20230327.pdf",
    "scans": [
      { "file": "p65_Art_UC-6.png", "page": 65, "article": "Art UC-6", "label": "Implantation / voies — retrait 4m min bande 25m", "critere": "rrue" },
      { "file": "p66_Art_UC-7.png", "page": 66, "article": "Art UC-7", "label": "Limites separatives — sur limites ou D=H min 8m/3m", "critere": "rg" },
      { "file": "p67_Art_UC-9-10.png", "page": 67, "article": "Art UC-9/10", "label": "Emprise UCa 30% + Hauteur 6m/8m R+1 ou R+C", "critere": "ces" },
      { "file": "p72_Art_UC-13.png", "page": 72, "article": "Art UC-13", "label": "Espaces verts — 50% pleine terre", "critere": "pct_espaces_verts" }
    ]
  },

  "77373_UD": {
    "commune": "Pontault-Combault", "insee": "77373", "zone": "UD", "pdf": "77373_reglement_20230327.pdf",
    "scans": [
      { "file": "p80_Art_UD-6.png", "page": 80, "article": "Art UD-6", "label": "Implantation / voies — retrait 4m min", "critere": "rrue" },
      { "file": "p81_Art_UD-7.png", "page": 81, "article": "Art UD-7", "label": "Limites separatives — retrait D=H min 4m/8m", "critere": "rg" },
      { "file": "p82_Art_UD-9-10.png", "page": 82, "article": "Art UD-9/10", "label": "Emprise 50% + Hauteur 9.5m/12m R+2+C", "critere": "ces" },
      { "file": "p87_Art_UD-13.png", "page": 87, "article": "Art UD-13", "label": "Espaces verts — 30% minimum", "critere": "pct_espaces_verts" }
    ]
  },

  "77373_UX": {
    "commune": "Pontault-Combault", "insee": "77373", "zone": "UX", "pdf": "77373_reglement_20230327.pdf",
    "scans": [
      { "file": "p105_Art_UX-6-7.png", "page": 105, "article": "Art UX-6/7", "label": "Implantation voies 6m + limites D=H min 4m/8m", "critere": "rrue" },
      { "file": "p107_Art_UX-9-10.png", "page": 107, "article": "Art UX-9/10", "label": "Emprise 70% + Hauteur 15m max", "critere": "ces" }
    ]
  },

  // ======================== SEVRAN (93071) — PLUi PTE 200058097 ========================
  "93071_U2a": {
    "commune": "Sevran", "insee": "93071", "zone": "U2a",
    "pdf": "5.4.1. REGLEMENT DES ZONES.pdf", "plui": "PLUi PTE 200058097",
    "scans": [
      { "file": "p51_voies_G.png", "page": 51, "article": "Ind.1-G", "label": "Voies — alignement ou recul 2.5m", "critere": "rrue" },
      { "file": "p56_limites_F.png", "page": 56, "article": "Ind.2-F", "label": "Limites — L=H/3 min 5m/3m", "critere": "rg" },
      { "file": "p62_emprise_A.png", "page": 62, "article": "Ind.4-A", "label": "Emprise — non reglementee", "critere": "ces" },
      { "file": "p67_hauteur_H.png", "page": 67, "article": "Ind.5-H", "label": "Hauteur — 15m faitage", "critere": "hmax" }
    ]
  },
  "93071_U3a": {
    "commune": "Sevran", "insee": "93071", "zone": "U3a",
    "pdf": "5.4.1. REGLEMENT DES ZONES.pdf", "plui": "PLUi PTE 200058097",
    "scans": [
      { "file": "p82_voies_E.png", "page": 82, "article": "Ind.1-E", "label": "Voies — alignement obligatoire", "critere": "rrue" },
      { "file": "p88_limites_E.png", "page": 88, "article": "Ind.2-E", "label": "Limites — bande 15m sur limites", "critere": "rg" },
      { "file": "p98_emprise_D.png", "page": 98, "article": "Ind.4-D", "label": "Emprise — 55%", "critere": "ces" },
      { "file": "p104_hauteur_F.png", "page": 104, "article": "Ind.5-F", "label": "Hauteur — 21m R+6", "critere": "hmax" }
    ]
  },
  "93071_U3aLIDAFA": {
    "commune": "Sevran", "insee": "93071", "zone": "U3a", "indices": "LIDAFA",
    "pdf": "5.4.1. REGLEMENT DES ZONES.pdf", "plui": "PLUi PTE 200058097",
    "scans": [
      { "file": "p84_voies_L.png", "page": 84, "article": "Ind.1-L", "label": "Voies — bande 20m, recul min 5m", "critere": "rrue" },
      { "file": "p90_limites_I.png", "page": 90, "article": "Ind.2-I", "label": "Limites — sur limites ou retrait H/2 min 3m", "critere": "rg" },
      { "file": "p98_emprise_A.png", "page": 98, "article": "Ind.4-A", "label": "Emprise — non reglementee", "critere": "ces" },
      { "file": "p104_hauteur_F.png", "page": 104, "article": "Ind.5-F", "label": "Hauteur — 21m R+6 (12m rue Liegard)", "critere": "hmax" },
      { "file": "oap_aulnay_p157.png", "page": 157, "article": "OAP", "label": "OAP Rue d'Aulnay/Villa des Pres — orientations", "critere": "oap" },
      { "file": "oap_aulnay_p158.png", "page": 158, "article": "OAP", "label": "OAP Rue d'Aulnay/Villa des Pres — hauteurs", "critere": "oap" }
    ]
  },
  "93071_U5b": {
    "commune": "Sevran", "insee": "93071", "zone": "U5b",
    "pdf": "5.4.1. REGLEMENT DES ZONES.pdf", "plui": "PLUi PTE 200058097",
    "scans": [
      { "file": "p149_voies_G.png", "page": 149, "article": "Ind.1-G", "label": "Voies — alignement ou recul 2.5m", "critere": "rrue" },
      { "file": "p156_limites_G.png", "page": 156, "article": "Ind.2-G", "label": "Limites — sur limites ou retrait", "critere": "rg" },
      { "file": "p160_emprise_F.png", "page": 160, "article": "Ind.4-F", "label": "Emprise — 40%", "critere": "ces" },
      { "file": "p164_hauteur_I.png", "page": 164, "article": "Ind.5-I", "label": "Hauteur — 18m R+4+c/att", "critere": "hmax" }
    ]
  }

};

if (typeof window !== 'undefined') {
  window.BASE_SCANS_PLU = BASE_SCANS_PLU;
}
