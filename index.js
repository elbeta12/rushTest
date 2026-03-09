<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Liga Rushbet 2026</title>

<!-- Firebase SDK -->
<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
  import { getDatabase, ref, onValue, set, push, update, remove, get }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
           signOut, onAuthStateChanged, updateProfile }
    from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDH-ODpz5XS0vYF-KGzf1v1q0t_jtCH2qY",
    authDomain: "datos-53cd1.firebaseapp.com",
    databaseURL: "https://datos-53cd1-default-rtdb.firebaseio.com/",
    projectId: "datos-53cd1",
    storageBucket: "datos-53cd1.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:datos-53cd1:web:abcdef"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const auth = getAuth(app);

  window._fb = { db, auth, ref, onValue, set, push, update, remove, get };
  window._fbReady = true;
  document.dispatchEvent(new Event('fb-ready'));
</script>

<style>
/* ===== RESET & BASE ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --gold: #c8a84b;
  --gold2: #e5c96e;
  --gold-dim: #8a6f2e;
  --dark: #0a0a0c;
  --dark2: #111115;
  --dark3: #18181f;
  --dark4: #22222c;
  --dark5: #2a2a36;
  --text: #e8e0cc;
  --text-dim: #9a9080;
  --red: #c84b4b;
  --yellow: #c8b44b;
  --green: #4bc87a;
  --blue: #4b8ec8;
  --radius: 10px;
  --shadow: 0 4px 24px rgba(0,0,0,0.6);
}
html { scroll-behavior: smooth; }
body {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: var(--dark);
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
}
a { color: var(--gold); text-decoration: none; }
img { max-width: 100%; }
button { cursor: pointer; font-family: inherit; }

/* ===== SCROLLBAR ===== */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--dark2); }
::-webkit-scrollbar-thumb { background: var(--gold-dim); border-radius: 3px; }

/* ===== HEADER ===== */
#header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  height: 60px;
  background: rgba(10,10,12,0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(200,168,75,0.2);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 20px;
}
#header .logo {
  font-size: 1.2rem; font-weight: 800; letter-spacing: 2px;
  color: var(--gold);
  text-transform: uppercase;
}
#header .logo span { color: var(--text-dim); font-weight: 300; }

/* NAV */
#nav {
  display: flex; align-items: center; gap: 2px;
  background: var(--dark3);
  border: 1px solid rgba(200,168,75,0.15);
  border-radius: 30px;
  padding: 4px;
}
#nav button {
  background: none; border: none; color: var(--text-dim);
  padding: 6px 14px; border-radius: 24px;
  font-size: 0.78rem; font-weight: 600; letter-spacing: 0.5px;
  text-transform: uppercase; transition: all 0.2s;
}
#nav button:hover { color: var(--gold); }
#nav button.active { background: var(--gold); color: var(--dark); }

/* HEADER ACTIONS */
.header-actions { display: flex; align-items: center; gap: 10px; }
#btn-login {
  background: linear-gradient(135deg, var(--gold), var(--gold2));
  border: none; color: var(--dark);
  padding: 7px 16px; border-radius: 20px;
  font-size: 0.78rem; font-weight: 700; letter-spacing: 0.5px;
  text-transform: uppercase; transition: opacity 0.2s;
}
#btn-login:hover { opacity: 0.85; }
#btn-avatar {
  width: 36px; height: 36px; border-radius: 50%;
  border: 2px solid var(--gold);
  background: var(--dark4); overflow: hidden;
  display: none; padding: 0;
}
#btn-avatar img { width: 100%; height: 100%; object-fit: cover; }

/* ===== MAIN ===== */
#main { padding-top: 60px; }
.section { display: none; min-height: calc(100vh - 60px); padding: 40px 20px; }
.section.active { display: block; }

/* ===== SECTION HEADER ===== */
.section-title {
  text-align: center; margin-bottom: 36px;
}
.section-title h2 {
  font-size: 1.8rem; font-weight: 800; letter-spacing: 3px;
  text-transform: uppercase; color: var(--gold);
}
.section-title p { color: var(--text-dim); margin-top: 6px; font-size: 0.9rem; }
.gold-line {
  width: 60px; height: 3px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
  margin: 10px auto 0;
}

/* ===== CARDS ===== */
.card {
  background: var(--dark3);
  border: 1px solid rgba(200,168,75,0.12);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}
.card-hover {
  transition: transform 0.2s, border-color 0.2s;
}
.card-hover:hover {
  transform: translateY(-3px);
  border-color: rgba(200,168,75,0.35);
}

/* ===== TABS ===== */
.tabs {
  display: flex; gap: 6px; margin-bottom: 24px;
  border-bottom: 1px solid rgba(200,168,75,0.15);
  padding-bottom: 0;
}
.tab-btn {
  background: none; border: none; color: var(--text-dim);
  padding: 10px 20px; font-size: 0.85rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.5px;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px; transition: all 0.2s;
}
.tab-btn:hover { color: var(--gold); }
.tab-btn.active { color: var(--gold); border-bottom-color: var(--gold); }
.tab-pane { display: none; }
.tab-pane.active { display: block; }

/* ===== TABLES ===== */
.table-wrap { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
thead th {
  background: var(--dark4); color: var(--gold);
  padding: 10px 12px; text-align: center;
  font-size: 0.75rem; font-weight: 700; letter-spacing: 1px;
  text-transform: uppercase; border-bottom: 1px solid rgba(200,168,75,0.2);
}
thead th:first-child { text-align: left; }
tbody tr {
  border-bottom: 1px solid rgba(255,255,255,0.04);
  transition: background 0.15s;
}
tbody tr:hover { background: rgba(200,168,75,0.05); }
tbody td { padding: 10px 12px; text-align: center; color: var(--text); }
tbody td:first-child { text-align: left; }
.pos-badge {
  display: inline-block; width: 22px; height: 22px; line-height: 22px;
  text-align: center; border-radius: 50%;
  font-size: 0.75rem; font-weight: 700;
  background: var(--dark5); color: var(--text-dim);
}
.pos-badge.top1 { background: var(--gold); color: var(--dark); }
.pos-badge.top2 { background: #9e9e9e; color: var(--dark); }
.pos-badge.top3 { background: #a07040; color: var(--dark); }
.team-row-info { display: flex; align-items: center; gap: 8px; }
.team-logo-sm {
  width: 26px; height: 26px; border-radius: 50%;
  object-fit: cover; border: 1px solid rgba(200,168,75,0.3);
  background: var(--dark5);
}
.team-name-link { cursor: pointer; font-weight: 600; }
.team-name-link:hover { color: var(--gold); text-decoration: underline; }
.stat-link { cursor: pointer; font-weight: 600; }
.stat-link:hover { color: var(--gold); text-decoration: underline; }

/* ===== STANDINGS ===== */
.standings-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
}
@media (max-width: 900px) { .standings-grid { grid-template-columns: 1fr; } }
.standings-card { padding: 24px; }

/* ===== JORNADAS ===== */
.jornada-selector {
  display: flex; align-items: center; gap: 12px; margin-bottom: 24px;
  flex-wrap: wrap;
}
.jornada-selector label { color: var(--text-dim); font-size: 0.85rem; }
.jornada-selector select {
  background: var(--dark4); border: 1px solid rgba(200,168,75,0.25);
  color: var(--text); padding: 7px 12px; border-radius: var(--radius);
  font-size: 0.85rem;
}
.matches-grid { display: grid; gap: 12px; }
.match-card {
  padding: 16px 20px;
  display: grid; grid-template-columns: 1fr auto 1fr;
  align-items: center; gap: 10px;
}
.match-team { display: flex; align-items: center; gap: 8px; font-weight: 600; }
.match-team.right { flex-direction: row-reverse; text-align: right; }
.match-score {
  font-size: 1.4rem; font-weight: 900; color: var(--gold);
  min-width: 70px; text-align: center;
  background: var(--dark4); border-radius: 8px; padding: 6px 12px;
}
.match-score.pending { color: var(--text-dim); font-size: 0.85rem; font-weight: 400; }

/* ===== STATS ===== */
.stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
@media (max-width: 900px) { .stats-grid { grid-template-columns: 1fr; } }
.stats-card { padding: 20px; }
.stats-card h3 {
  color: var(--gold); font-size: 0.75rem; font-weight: 700;
  letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px;
  display: flex; align-items: center; gap: 8px;
}
.stats-card h3::before {
  content: ''; display: block; width: 12px; height: 12px;
  background: var(--gold); border-radius: 2px;
}
.stat-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: background 0.15s; border-radius: 4px; padding-left: 4px;
}
.stat-row:hover { background: rgba(200,168,75,0.05); }
.stat-row-left { display: flex; align-items: center; gap: 8px; }
.stat-row-pos { color: var(--text-dim); font-size: 0.75rem; width: 18px; }
.stat-row-avatar {
  width: 28px; height: 28px; border-radius: 50%;
  object-fit: cover; background: var(--dark5);
  border: 1px solid rgba(200,168,75,0.25);
}
.stat-row-val {
  font-size: 1.1rem; font-weight: 800; color: var(--gold);
  min-width: 32px; text-align: right;
}

/* ===== TARJETAS ===== */
.cards-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }
.card-tarjeta {
  padding: 16px; display: flex; align-items: center; gap: 14px;
  cursor: pointer;
}
.card-tarjeta:hover { border-color: rgba(200,168,75,0.35); }
.tc-avatar {
  width: 48px; height: 48px; border-radius: 50%; object-fit: cover;
  border: 2px solid rgba(200,168,75,0.3); background: var(--dark5); flex-shrink: 0;
}
.tc-info { flex: 1; }
.tc-name { font-weight: 700; font-size: 0.95rem; }
.tc-team { color: var(--text-dim); font-size: 0.8rem; margin-top: 2px; }
.tc-cards { display: flex; gap: 6px; margin-top: 6px; }
.badge-amarilla, .badge-roja {
  display: inline-flex; align-items: center; gap: 4px;
  padding: 2px 8px; border-radius: 4px;
  font-size: 0.75rem; font-weight: 700;
}
.badge-amarilla { background: rgba(200,180,75,0.2); color: var(--yellow); }
.badge-roja { background: rgba(200,75,75,0.2); color: var(--red); }

/* ===== NOTICIAS ===== */
.news-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
.news-card { overflow: hidden; display: flex; flex-direction: column; }
.news-img {
  width: 100%; height: 180px; object-fit: cover;
  background: var(--dark4);
}
.news-img-placeholder {
  width: 100%; height: 180px; background: var(--dark4);
  display: flex; align-items: center; justify-content: center;
  color: var(--text-dim); font-size: 2rem;
}
.news-body { padding: 16px; flex: 1; display: flex; flex-direction: column; }
.news-tag {
  display: inline-block; padding: 2px 8px; border-radius: 4px;
  font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;
  background: rgba(200,168,75,0.15); color: var(--gold); margin-bottom: 8px;
}
.news-title { font-size: 1rem; font-weight: 700; margin-bottom: 6px; }
.news-desc { color: var(--text-dim); font-size: 0.85rem; flex: 1; }
.news-footer {
  display: flex; align-items: center; justify-content: space-between;
  margin-top: 12px; padding-top: 12px;
  border-top: 1px solid rgba(255,255,255,0.07);
}
.news-date { color: var(--text-dim); font-size: 0.78rem; }
.news-link { font-size: 0.78rem; color: var(--gold); }

/* ===== AFILIADOS ===== */
.afiliados-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; }
.afiliado-card {
  padding: 24px; text-align: center; display: flex;
  flex-direction: column; align-items: center; gap: 12px;
}
.afiliado-logo {
  width: 80px; height: 80px; border-radius: 50%; object-fit: cover;
  border: 2px solid rgba(200,168,75,0.3); background: var(--dark4);
}
.afiliado-nombre { font-size: 1rem; font-weight: 700; }
.afiliado-desc { color: var(--text-dim); font-size: 0.84rem; text-align: center; }
.afiliado-actions { display: flex; gap: 8px; margin-top: 4px; }
.btn-sm {
  padding: 5px 12px; border-radius: 6px; font-size: 0.75rem; font-weight: 600;
  border: 1px solid rgba(200,168,75,0.3); color: var(--gold); background: transparent;
  transition: all 0.2s;
}
.btn-sm:hover { background: rgba(200,168,75,0.1); }

/* ===== EQUIPOS ===== */
.equipos-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; }
.equipo-card {
  padding: 24px 16px; text-align: center; cursor: pointer;
  display: flex; flex-direction: column; align-items: center; gap: 10px;
}
.equipo-logo {
  width: 72px; height: 72px; border-radius: 50%; object-fit: cover;
  border: 2px solid rgba(200,168,75,0.3); background: var(--dark4);
}
.equipo-nombre { font-weight: 700; font-size: 0.95rem; }
.equipo-abrev { color: var(--gold); font-size: 0.78rem; font-weight: 700; letter-spacing: 2px; }

/* ===== FICHAJES ===== */
.fichajes-list { display: flex; flex-direction: column; gap: 10px; max-width: 700px; margin: 0 auto; }
.fichaje-item {
  padding: 14px 18px; display: flex; align-items: center; gap: 14px;
  border-radius: var(--radius);
  background: var(--dark3); border: 1px solid rgba(200,168,75,0.1);
}
.fichaje-avatars { display: flex; align-items: center; gap: 6px; }
.fichaje-avatar {
  width: 40px; height: 40px; border-radius: 50%; object-fit: cover;
  border: 2px solid rgba(200,168,75,0.25); background: var(--dark5);
}
.fichaje-sep { color: var(--gold); font-weight: 900; font-size: 1rem; }
.fichaje-text { flex: 1; }
.fichaje-title { font-weight: 600; font-size: 0.9rem; }
.fichaje-sub { color: var(--text-dim); font-size: 0.78rem; margin-top: 2px; }
.fichaje-badge {
  font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;
  text-transform: uppercase;
}
.badge-fichaje { background: rgba(75,200,122,0.15); color: var(--green); }
.badge-traspaso { background: rgba(75,142,200,0.15); color: var(--blue); }
.badge-baja { background: rgba(200,75,75,0.15); color: var(--red); }
.fichaje-date { color: var(--text-dim); font-size: 0.75rem; }

/* ===== CUENTA ===== */
.cuenta-container { max-width: 480px; margin: 0 auto; }
.auth-box { padding: 32px; }
.auth-box h3 { color: var(--gold); font-size: 1.1rem; margin-bottom: 20px; text-align: center; }
.form-group { margin-bottom: 16px; }
.form-group label { display: block; color: var(--text-dim); font-size: 0.82rem; margin-bottom: 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
.form-group input, .form-group textarea, .form-group select {
  width: 100%; background: var(--dark4);
  border: 1px solid rgba(200,168,75,0.2); color: var(--text);
  padding: 10px 14px; border-radius: 8px; font-size: 0.9rem;
  transition: border-color 0.2s; font-family: inherit;
}
.form-group input:focus, .form-group textarea:focus {
  outline: none; border-color: var(--gold);
}
.btn-primary {
  width: 100%; padding: 11px; border: none; border-radius: 8px;
  background: linear-gradient(135deg, var(--gold), var(--gold2));
  color: var(--dark); font-size: 0.9rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 1px;
  transition: opacity 0.2s; margin-top: 6px;
}
.btn-primary:hover { opacity: 0.85; }
.btn-secondary {
  width: 100%; padding: 11px; border-radius: 8px;
  background: transparent; border: 1px solid rgba(200,168,75,0.3);
  color: var(--gold); font-size: 0.9rem; font-weight: 600; margin-top: 8px;
  transition: background 0.2s;
}
.btn-secondary:hover { background: rgba(200,168,75,0.1); }
.auth-toggle { text-align: center; margin-top: 16px; color: var(--text-dim); font-size: 0.84rem; }
.auth-toggle button { background: none; border: none; color: var(--gold); font-weight: 600; }
.perfil-box { padding: 32px; }
.perfil-header { display: flex; align-items: center; gap: 20px; margin-bottom: 28px; }
.perfil-avatar-wrap { position: relative; }
.perfil-avatar {
  width: 80px; height: 80px; border-radius: 50%; object-fit: cover;
  border: 3px solid var(--gold); background: var(--dark4); cursor: pointer;
}
.perfil-avatar-edit {
  position: absolute; bottom: 0; right: 0;
  width: 24px; height: 24px; border-radius: 50%;
  background: var(--gold); color: var(--dark);
  border: none; font-size: 0.7rem; display: flex; align-items: center; justify-content: center;
}
.perfil-info h3 { font-size: 1.2rem; font-weight: 700; }
.perfil-info p { color: var(--text-dim); font-size: 0.85rem; margin-top: 4px; }
.vincular-box {
  background: var(--dark4); border: 1px dashed rgba(200,168,75,0.3);
  border-radius: 8px; padding: 16px; margin-top: 16px; text-align: center;
}
.vincular-box p { color: var(--text-dim); font-size: 0.84rem; margin-bottom: 8px; }
.uid-code {
  font-family: monospace; font-size: 1.1rem; color: var(--gold);
  background: var(--dark5); padding: 8px 16px; border-radius: 6px;
  letter-spacing: 3px; display: inline-block;
}
.discord-badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(88,101,242,0.15); color: #5865F2;
  padding: 4px 10px; border-radius: 6px; font-size: 0.82rem; font-weight: 600;
}

/* ===== INICIO ===== */
.hero {
  min-height: calc(100vh - 60px);
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center; padding: 40px 20px;
  background: radial-gradient(ellipse at 50% 30%, rgba(200,168,75,0.06) 0%, transparent 70%);
}
.hero-badge {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 3px;
  text-transform: uppercase; color: var(--gold);
  border: 1px solid rgba(200,168,75,0.3); padding: 5px 14px; border-radius: 20px;
  margin-bottom: 20px; display: inline-block;
}
.hero h1 {
  font-size: clamp(2.5rem, 6vw, 5rem); font-weight: 900;
  line-height: 1.05; margin-bottom: 18px;
  background: linear-gradient(135deg, var(--gold), #fff, var(--gold));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.hero p { color: var(--text-dim); max-width: 500px; line-height: 1.6; margin-bottom: 32px; }
.hero-btns { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; }
.btn-hero-primary {
  padding: 12px 28px; border-radius: 30px;
  background: linear-gradient(135deg, var(--gold), var(--gold2));
  border: none; color: var(--dark); font-weight: 700; font-size: 0.9rem;
  letter-spacing: 0.5px; transition: transform 0.2s;
}
.btn-hero-primary:hover { transform: translateY(-2px); }
.btn-hero-secondary {
  padding: 12px 28px; border-radius: 30px;
  border: 1px solid rgba(200,168,75,0.3); background: transparent;
  color: var(--gold); font-weight: 600; font-size: 0.9rem;
  transition: all 0.2s;
}
.btn-hero-secondary:hover { background: rgba(200,168,75,0.1); }
.hero-stats { display: flex; gap: 40px; margin-top: 48px; }
.hero-stat { text-align: center; }
.hero-stat-num {
  font-size: 2rem; font-weight: 900; color: var(--gold);
  display: block;
}
.hero-stat-label { color: var(--text-dim); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 1px; }

/* ===== REGLAMENTO ===== */
.reglamento-container { max-width: 800px; margin: 0 auto; }
.reglamento-section { margin-bottom: 32px; }
.reglamento-section h3 {
  color: var(--gold); font-size: 1rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;
  padding-bottom: 8px; border-bottom: 1px solid rgba(200,168,75,0.2);
}
.reglamento-section p, .reglamento-section li {
  color: var(--text-dim); line-height: 1.7; margin-bottom: 6px;
}
.reglamento-section ul { padding-left: 18px; }

/* ===== MODALS ===== */
.modal-overlay {
  position: fixed; inset: 0; z-index: 2000;
  background: rgba(0,0,0,0.75); backdrop-filter: blur(4px);
  display: flex; align-items: center; justify-content: center;
  padding: 20px; opacity: 0; pointer-events: none; transition: opacity 0.2s;
}
.modal-overlay.open { opacity: 1; pointer-events: all; }
.modal-box {
  background: var(--dark2); border: 1px solid rgba(200,168,75,0.2);
  border-radius: 14px; max-width: 560px; width: 100%;
  max-height: 85vh; overflow-y: auto;
  transform: translateY(20px); transition: transform 0.2s;
}
.modal-overlay.open .modal-box { transform: translateY(0); }
.modal-header {
  padding: 20px 24px 16px;
  display: flex; align-items: center; justify-content: space-between;
  border-bottom: 1px solid rgba(200,168,75,0.12);
}
.modal-header h3 { font-size: 1rem; font-weight: 700; color: var(--gold); }
.modal-close {
  background: none; border: none; color: var(--text-dim);
  font-size: 1.3rem; line-height: 1; padding: 4px;
}
.modal-close:hover { color: var(--text); }
.modal-body { padding: 20px 24px; }

/* PERFIL JUGADOR MODAL */
.pj-hero {
  display: flex; align-items: center; gap: 18px; margin-bottom: 24px;
}
.pj-avatar {
  width: 70px; height: 70px; border-radius: 50%;
  border: 3px solid var(--gold); object-fit: cover; background: var(--dark4);
}
.pj-name { font-size: 1.2rem; font-weight: 800; }
.pj-team { color: var(--text-dim); font-size: 0.85rem; margin-top: 4px; }
.pj-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
.pj-stat { background: var(--dark4); border-radius: 8px; padding: 12px; text-align: center; }
.pj-stat-val { font-size: 1.4rem; font-weight: 900; color: var(--gold); }
.pj-stat-label { font-size: 0.72rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.5px; }
.sanciones-list { margin-top: 20px; }
.sancion-item {
  padding: 8px 12px; background: rgba(200,75,75,0.08);
  border: 1px solid rgba(200,75,75,0.2); border-radius: 6px; margin-bottom: 6px;
  font-size: 0.84rem; display: flex; justify-content: space-between;
}

/* EQUIPO PERFIL MODAL */
.eq-hero {
  display: flex; align-items: center; gap: 18px; margin-bottom: 24px;
}
.eq-logo {
  width: 72px; height: 72px; border-radius: 50%;
  border: 3px solid var(--gold); object-fit: cover; background: var(--dark4);
}
.eq-name { font-size: 1.2rem; font-weight: 800; }
.eq-abrev { color: var(--gold); font-size: 0.8rem; font-weight: 700; letter-spacing: 2px; }
.plantilla-list { display: flex; flex-direction: column; gap: 8px; }
.plantilla-member {
  display: flex; align-items: center; gap: 10px;
  padding: 8px; background: var(--dark4); border-radius: 6px;
}
.plantilla-avatar {
  width: 32px; height: 32px; border-radius: 50%;
  object-fit: cover; background: var(--dark5);
}
.plantilla-name { font-size: 0.88rem; font-weight: 600; }
.plantilla-role { font-size: 0.75rem; color: var(--text-dim); }

/* ===== ADMIN PANEL ===== */
.admin-modal .modal-box { max-width: 700px; }
.admin-sections { display: flex; flex-direction: column; gap: 0; }
.admin-section-tab {
  padding: 14px 20px; background: none; border: none;
  border-bottom: 1px solid rgba(200,168,75,0.1);
  color: var(--text-dim); font-size: 0.85rem; font-weight: 600;
  text-align: left; text-transform: uppercase; letter-spacing: 1px;
  transition: all 0.2s; display: flex; align-items: center; justify-content: space-between;
}
.admin-section-tab:hover { color: var(--gold); background: rgba(200,168,75,0.04); }
.admin-section-tab.open { color: var(--gold); }
.admin-section-content { display: none; padding: 16px 20px; border-bottom: 1px solid rgba(200,168,75,0.08); background: var(--dark4); }
.admin-section-content.open { display: block; }
.admin-tabla-grid { display: flex; flex-direction: column; gap: 4px; }
.admin-tabla-row {
  display: grid; gap: 6px; align-items: center;
  grid-template-columns: 30px 2fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr auto;
}
.admin-tabla-row input {
  background: var(--dark5); border: 1px solid rgba(200,168,75,0.15);
  color: var(--text); padding: 5px 7px; border-radius: 5px; font-size: 0.8rem;
  width: 100%;
}
.admin-tabla-row input:focus { outline: none; border-color: var(--gold); }
.admin-row-header { font-size: 0.65rem; color: var(--text-dim); font-weight: 700; text-align: center; text-transform: uppercase; }
.btn-add-row, .btn-save, .btn-reset {
  margin-top: 10px; padding: 8px 16px; border-radius: 7px;
  font-size: 0.82rem; font-weight: 700; border: none; cursor: pointer;
}
.btn-add-row { background: rgba(200,168,75,0.15); color: var(--gold); }
.btn-save { background: linear-gradient(135deg, var(--gold), var(--gold2)); color: var(--dark); }
.btn-reset { background: rgba(200,75,75,0.15); color: var(--red); margin-left: 6px; }
.btn-delete { background: rgba(200,75,75,0.2); color: var(--red); border: none; border-radius: 5px; padding: 4px 8px; font-size: 0.75rem; }
.admin-partido-row {
  display: grid; gap: 6px; align-items: center;
  grid-template-columns: 1fr auto auto auto 1fr auto auto;
  margin-bottom: 6px;
}
.admin-partido-row input, .admin-partido-row select {
  background: var(--dark5); border: 1px solid rgba(200,168,75,0.15);
  color: var(--text); padding: 5px 7px; border-radius: 5px; font-size: 0.8rem; width: 100%;
}
.admin-stat-row {
  display: grid; gap: 6px; align-items: center;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr auto;
  margin-bottom: 6px;
}
.admin-stat-row input {
  background: var(--dark5); border: 1px solid rgba(200,168,75,0.15);
  color: var(--text); padding: 5px 7px; border-radius: 5px; font-size: 0.8rem; width: 100%;
}
.admin-tarjeta-row {
  display: grid; gap: 6px; align-items: center;
  grid-template-columns: 2fr 2fr 1fr 1fr auto;
  margin-bottom: 6px;
}
.admin-tarjeta-row input {
  background: var(--dark5); border: 1px solid rgba(200,168,75,0.15);
  color: var(--text); padding: 5px 7px; border-radius: 5px; font-size: 0.8rem; width: 100%;
}
.admin-noticia-row { border: 1px solid rgba(200,168,75,0.15); border-radius: 8px; padding: 12px; margin-bottom: 10px; background: var(--dark5); }
.admin-noticia-row .row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px; }
.admin-noticia-row input, .admin-noticia-row textarea {
  background: var(--dark3); border: 1px solid rgba(200,168,75,0.15);
  color: var(--text); padding: 7px 10px; border-radius: 6px; font-size: 0.82rem; width: 100%;
}
.admin-noticia-row textarea { resize: vertical; min-height: 60px; font-family: inherit; }
.admin-afiliado-row { border: 1px solid rgba(200,168,75,0.15); border-radius: 8px; padding: 12px; margin-bottom: 10px; background: var(--dark5); }
.admin-afiliado-row .row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 8px; }
.admin-afiliado-row input, .admin-afiliado-row textarea {
  background: var(--dark3); border: 1px solid rgba(200,168,75,0.15);
  color: var(--text); padding: 7px 10px; border-radius: 6px; font-size: 0.82rem; width: 100%;
}
.admin-afiliado-row textarea { resize: vertical; min-height: 60px; font-family: inherit; }
.admin-row-del { justify-self: end; margin-bottom: 8px; }
.admin-anuncio textarea {
  background: var(--dark5); border: 1px solid rgba(200,168,75,0.2);
  color: var(--text); padding: 10px; border-radius: 8px; width: 100%;
  min-height: 80px; font-family: inherit; font-size: 0.9rem; resize: vertical;
}
.admin-jornada-row { display: flex; gap: 8px; align-items: center; margin-bottom: 8px; }
.admin-jornada-row input, .admin-jornada-row select {
  background: var(--dark5); border: 1px solid rgba(200,168,75,0.15);
  color: var(--text); padding: 5px 8px; border-radius: 5px; font-size: 0.8rem;
}
.admin-pass-input {
  background: var(--dark4); border: 1px solid rgba(200,168,75,0.25);
  color: var(--text); padding: 10px 14px; border-radius: 8px; font-size: 0.9rem;
  width: 100%;
}

/* ===== TOAST ===== */
#toast {
  position: fixed; bottom: 24px; right: 24px; z-index: 3000;
  background: var(--dark3); border: 1px solid rgba(200,168,75,0.3);
  color: var(--text); padding: 12px 18px; border-radius: 8px;
  font-size: 0.88rem; max-width: 320px; transform: translateY(80px);
  opacity: 0; transition: all 0.3s; pointer-events: none;
  box-shadow: 0 8px 32px rgba(0,0,0,0.5);
}
#toast.show { transform: translateY(0); opacity: 1; }
#toast.success { border-color: rgba(75,200,122,0.4); }
#toast.error { border-color: rgba(200,75,75,0.4); }

/* ===== LOADING ===== */
.loading { text-align: center; padding: 40px; color: var(--text-dim); }
.spinner {
  width: 32px; height: 32px; border-radius: 50%;
  border: 3px solid rgba(200,168,75,0.2);
  border-top-color: var(--gold);
  animation: spin 0.8s linear infinite; margin: 0 auto 12px;
}
@keyframes spin { to { transform: rotate(360deg); } }
.empty-state {
  text-align: center; padding: 60px 20px; color: var(--text-dim);
}
.empty-state .empty-icon { font-size: 2.5rem; margin-bottom: 12px; }
.empty-state p { font-size: 0.9rem; }

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  #nav { display: none; }
  .standings-grid { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: 1fr; }
  .hero h1 { font-size: 2.2rem; }
  .hero-stats { gap: 20px; }
  .admin-tabla-row { grid-template-columns: 25px 1fr 1fr 1fr 1fr auto; }
  .admin-stat-row { grid-template-columns: 1fr 1fr 1fr auto; }
}
</style>
</head>
<body>

<!-- ===== HEADER ===== -->
<header id="header">
  <div class="logo">Liga <span>Rushbet</span> <span style="color:var(--gold)">2026</span></div>
  <nav id="nav">
    <button class="active" onclick="switchSection('inicio')">Inicio</button>
    <button onclick="switchSection('tablas')">Tablas</button>
    <button onclick="switchSection('jornadas')">Jornadas</button>
    <button onclick="switchSection('stats')">Estadísticas</button>
    <button onclick="switchSection('tarjetas')">Tarjetas</button>
    <button onclick="switchSection('fichajes')">Fichajes</button>
    <button onclick="switchSection('equipos')">Equipos</button>
    <button onclick="switchSection('noticias')">Noticias</button>
    <button onclick="switchSection('reglamento')">Reglamento</button>
    <button onclick="switchSection('afiliados')">Afiliados</button>
    <button onclick="switchSection('cuenta')">Cuenta</button>
  </nav>
  <div class="header-actions">
    <button id="btn-admin" onclick="openAdmin()" style="background:none;border:1px solid rgba(200,168,75,0.25);color:var(--gold-dim);padding:6px 12px;border-radius:6px;font-size:0.72rem;font-weight:700;letter-spacing:1px;text-transform:uppercase">ADMIN</button>
    <button id="btn-login" onclick="switchSection('cuenta')">Entrar</button>
    <button id="btn-avatar" onclick="switchSection('cuenta')">
      <img id="avatar-img" src="" alt="avatar">
    </button>
  </div>
</header>

<!-- ===== MAIN ===== -->
<main id="main">

<!-- INICIO -->
<section class="section active" id="s-inicio">
  <div class="hero">
    <span class="hero-badge">⚽ Temporada 2026</span>
    <h1>Liga Rushbet<br>2026</h1>
    <p>La liga oficial de Haxball. Competición, estadísticas, fichajes y todo lo que necesitas saber sobre la temporada.</p>
    <div class="hero-btns">
      <button class="btn-hero-primary" onclick="switchSection('tablas')">Ver Clasificación</button>
      <button class="btn-hero-secondary" onclick="switchSection('jornadas')">Ver Jornadas</button>
    </div>
    <div class="hero-stats">
      <div class="hero-stat"><span class="hero-stat-num" id="hero-equipos">–</span><span class="hero-stat-label">Equipos</span></div>
      <div class="hero-stat"><span class="hero-stat-num" id="hero-partidos">–</span><span class="hero-stat-label">Partidos</span></div>
      <div class="hero-stat"><span class="hero-stat-num" id="hero-goles">–</span><span class="hero-stat-label">Goles</span></div>
    </div>
  </div>
</section>

<!-- TABLAS -->
<section class="section" id="s-tablas">
  <div class="section-title"><h2>Clasificación</h2><div class="gold-line"></div></div>
  <div class="standings-grid">
    <div class="card standings-card">
      <h3 style="color:var(--gold);font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px">🥇 Primera División</h3>
      <div class="table-wrap"><div id="tabla-primera"><div class="loading"><div class="spinner"></div>Cargando...</div></div></div>
    </div>
    <div class="card standings-card">
      <h3 style="color:var(--gold);font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px">🥈 Segunda División</h3>
      <div class="table-wrap"><div id="tabla-segunda"><div class="loading"><div class="spinner"></div>Cargando...</div></div></div>
    </div>
  </div>
</section>

<!-- JORNADAS -->
<section class="section" id="s-jornadas">
  <div class="section-title"><h2>Jornadas</h2><div class="gold-line"></div></div>
  <div class="tabs">
    <button class="tab-btn active" onclick="switchJornadaDiv('primera', this)">Primera División</button>
    <button class="tab-btn" onclick="switchJornadaDiv('segunda', this)">Segunda División</button>
  </div>
  <div class="jornada-selector">
    <label>Jornada:</label>
    <select id="jornada-select" onchange="renderJornada()"></select>
  </div>
  <div id="matches-container"><div class="loading"><div class="spinner"></div>Cargando...</div></div>
</section>

<!-- STATS -->
<section class="section" id="s-stats">
  <div class="section-title"><h2>Estadísticas</h2><div class="gold-line"></div></div>
  <div class="stats-grid">
    <div class="card stats-card">
      <h3>Goleadores</h3>
      <div id="stat-goleadores"><div class="loading"><div class="spinner"></div></div></div>
    </div>
    <div class="card stats-card">
      <h3>Asistencias</h3>
      <div id="stat-asistencias"><div class="loading"><div class="spinner"></div></div></div>
    </div>
    <div class="card stats-card">
      <h3>Clean Sheets</h3>
      <div id="stat-cs"><div class="loading"><div class="spinner"></div></div></div>
    </div>
  </div>
</section>

<!-- TARJETAS -->
<section class="section" id="s-tarjetas">
  <div class="section-title"><h2>Disciplina</h2><div class="gold-line"></div></div>
  <div id="tarjetas-container"><div class="loading"><div class="spinner"></div>Cargando...</div></div>
</section>

<!-- FICHAJES -->
<section class="section" id="s-fichajes">
  <div class="section-title"><h2>Fichajes</h2><div class="gold-line"></div><p>Últimos movimientos de jugadores</p></div>
  <div id="fichajes-container"><div class="loading"><div class="spinner"></div>Cargando...</div></div>
</section>

<!-- EQUIPOS -->
<section class="section" id="s-equipos">
  <div class="section-title"><h2>Equipos</h2><div class="gold-line"></div></div>
  <div id="equipos-container"><div class="loading"><div class="spinner"></div>Cargando...</div></div>
</section>

<!-- NOTICIAS -->
<section class="section" id="s-noticias">
  <div class="section-title"><h2>Noticias</h2><div class="gold-line"></div></div>
  <div id="noticias-container"><div class="loading"><div class="spinner"></div>Cargando...</div></div>
</section>

<!-- REGLAMENTO -->
<section class="section" id="s-reglamento">
  <div class="section-title"><h2>Reglamento</h2><div class="gold-line"></div></div>
  <div class="reglamento-container">
    <div class="reglamento-section">
      <h3>1. Participación</h3>
      <ul>
        <li>Todos los equipos deben estar registrados antes del inicio de la temporada.</li>
        <li>Cada equipo debe contar con un mínimo de 4 jugadores para participar.</li>
        <li>Los jugadores no pueden pertenecer a más de un equipo simultáneamente.</li>
      </ul>
    </div>
    <div class="reglamento-section">
      <h3>2. Partidos</h3>
      <ul>
        <li>Los partidos se juegan en la sala oficial de Liga Rushbet.</li>
        <li>Cada equipo debe presentar al menos 3 jugadores para comenzar el partido.</li>
        <li>Los resultados deben ser enviados con screenshot al staff dentro de las 24h.</li>
        <li>Los partidos no presentados a tiempo serán marcados como 0-3 para el ausente.</li>
      </ul>
    </div>
    <div class="reglamento-section">
      <h3>3. Tarjetas y Sanciones</h3>
      <ul>
        <li>Tarjeta amarilla: conducta antideportiva leve.</li>
        <li>2 tarjetas amarillas equivalen a 1 partido de suspensión.</li>
        <li>Tarjeta roja directa: 2 partidos de suspensión.</li>
        <li>Las apelaciones deben realizarse dentro de las 48h por el canal correspondiente.</li>
      </ul>
    </div>
    <div class="reglamento-section">
      <h3>4. Fichajes</h3>
      <ul>
        <li>El mercado de fichajes está abierto durante las dos primeras semanas de cada mes.</li>
        <li>Los fichajes se gestionan a través del bot de Discord.</li>
        <li>Un jugador sancionado no puede ser fichado hasta cumplir su sanción.</li>
      </ul>
    </div>
    <div class="reglamento-section">
      <h3>5. Clasificación</h3>
      <ul>
        <li>Victoria: 3 puntos. Empate: 1 punto. Derrota: 0 puntos.</li>
        <li>En caso de empate a puntos, se aplican: diferencia de goles, goles a favor y enfrentamiento directo.</li>
        <li>Los 2 últimos de Primera descienden. Los 2 primeros de Segunda ascienden.</li>
      </ul>
    </div>
  </div>
</section>

<!-- AFILIADOS -->
<section class="section" id="s-afiliados">
  <div class="section-title"><h2>Afiliados</h2><div class="gold-line"></div><p>Nuestros patrocinadores y colaboradores</p></div>
  <div id="afiliados-container"><div class="loading"><div class="spinner"></div>Cargando...</div></div>
</section>

<!-- CUENTA -->
<section class="section" id="s-cuenta">
  <div class="section-title"><h2>Mi Cuenta</h2><div class="gold-line"></div></div>
  <div class="cuenta-container">
    <!-- Auth: login/register -->
    <div id="auth-panel" class="card auth-box">
      <div id="auth-login-panel">
        <h3>Iniciar Sesión</h3>
        <div class="form-group"><label>Email</label><input type="email" id="login-email" placeholder="tu@email.com"></div>
        <div class="form-group"><label>Contraseña</label><input type="password" id="login-pass" placeholder="••••••••"></div>
        <button class="btn-primary" onclick="doLogin()">Entrar</button>
        <div class="auth-toggle">¿No tienes cuenta? <button onclick="toggleAuthPanel(true)">Regístrate</button></div>
      </div>
      <div id="auth-register-panel" style="display:none">
        <h3>Crear Cuenta</h3>
        <div class="form-group"><label>Nombre de usuario</label><input type="text" id="reg-name" placeholder="NombreDeJugador"></div>
        <div class="form-group"><label>Email</label><input type="email" id="reg-email" placeholder="tu@email.com"></div>
        <div class="form-group"><label>Contraseña</label><input type="password" id="reg-pass" placeholder="••••••••"></div>
        <button class="btn-primary" onclick="doRegister()">Crear Cuenta</button>
        <div class="auth-toggle">¿Ya tienes cuenta? <button onclick="toggleAuthPanel(false)">Inicia sesión</button></div>
      </div>
    </div>
    <!-- Perfil (logged in) -->
    <div id="perfil-panel" class="card perfil-box" style="display:none">
      <div class="perfil-header">
        <div class="perfil-avatar-wrap">
          <img class="perfil-avatar" id="perfil-avatar-img" src="https://cdn.discordapp.com/embed/avatars/0.png" alt="avatar">
          <button class="perfil-avatar-edit" onclick="document.getElementById('avatar-upload').click()" title="Cambiar foto">✏️</button>
          <input type="file" id="avatar-upload" accept="image/*" style="display:none" onchange="uploadAvatar(event)">
        </div>
        <div class="perfil-info">
          <h3 id="perfil-nombre">–</h3>
          <p id="perfil-email">–</p>
          <div id="perfil-discord-badge" style="margin-top:6px;display:none"></div>
        </div>
      </div>
      <div class="vincular-box" id="vincular-box">
        <p>Vincula tu cuenta de Discord usando este código en el bot:</p>
        <div class="uid-code" id="uid-code-display">–</div>
        <p style="margin-top:8px;font-size:0.75rem">Usa <strong style="color:var(--gold)">/vincular [código]</strong> en Discord</p>
      </div>
      <div style="margin-top:20px">
        <h4 style="color:var(--gold);font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px">Mis Estadísticas</h4>
        <div class="pj-stats-grid" id="perfil-stats-grid">
          <div class="pj-stat"><div class="pj-stat-val" id="ps-goles">–</div><div class="pj-stat-label">Goles</div></div>
          <div class="pj-stat"><div class="pj-stat-val" id="ps-asist">–</div><div class="pj-stat-label">Asistencias</div></div>
          <div class="pj-stat"><div class="pj-stat-val" id="ps-cs">–</div><div class="pj-stat-label">CS</div></div>
          <div class="pj-stat"><div class="pj-stat-val" id="ps-pj">–</div><div class="pj-stat-label">PJ</div></div>
          <div class="pj-stat"><div class="pj-stat-val" id="ps-mvp">–</div><div class="pj-stat-label">MVPs</div></div>
          <div class="pj-stat"><div class="pj-stat-val" id="ps-ta">–</div><div class="pj-stat-label">TA</div></div>
        </div>
      </div>
      <div style="margin-top:20px">
        <div class="form-group"><label>Nombre de usuario</label><input type="text" id="edit-nombre" placeholder="Nombre"></div>
        <button class="btn-primary" onclick="saveNombre()" style="width:auto;padding:8px 20px">Guardar nombre</button>
      </div>
      <button class="btn-secondary" onclick="doLogout()" style="margin-top:16px">Cerrar sesión</button>
    </div>
  </div>
</section>

</main>

<!-- ===== MODALS ===== -->

<!-- JUGADOR PERFIL MODAL -->
<div class="modal-overlay" id="modal-jugador">
  <div class="modal-box">
    <div class="modal-header">
      <h3>Perfil del Jugador</h3>
      <button class="modal-close" onclick="closeModal('modal-jugador')">✕</button>
    </div>
    <div class="modal-body">
      <div class="pj-hero">
        <img class="pj-avatar" id="pj-avatar" src="https://cdn.discordapp.com/embed/avatars/0.png" alt="avatar">
        <div>
          <div class="pj-name" id="pj-name">–</div>
          <div class="pj-team" id="pj-team">–</div>
          <div id="pj-discord" style="margin-top:4px"></div>
        </div>
      </div>
      <div class="pj-stats-grid">
        <div class="pj-stat"><div class="pj-stat-val" id="pj-goles">–</div><div class="pj-stat-label">Goles</div></div>
        <div class="pj-stat"><div class="pj-stat-val" id="pj-asist">–</div><div class="pj-stat-label">Asistencias</div></div>
        <div class="pj-stat"><div class="pj-stat-val" id="pj-cs">–</div><div class="pj-stat-label">CS</div></div>
        <div class="pj-stat"><div class="pj-stat-val" id="pj-pj">–</div><div class="pj-stat-label">PJ</div></div>
        <div class="pj-stat"><div class="pj-stat-val" id="pj-mvp">–</div><div class="pj-stat-label">MVPs</div></div>
        <div class="pj-stat"><div class="pj-stat-val" id="pj-ta">–</div><div class="pj-stat-label">TA</div></div>
      </div>
      <div class="sanciones-list" id="pj-sanciones"></div>
    </div>
  </div>
</div>

<!-- EQUIPO PERFIL MODAL -->
<div class="modal-overlay" id="modal-equipo">
  <div class="modal-box">
    <div class="modal-header">
      <h3>Perfil del Equipo</h3>
      <button class="modal-close" onclick="closeModal('modal-equipo')">✕</button>
    </div>
    <div class="modal-body">
      <div class="eq-hero">
        <img class="eq-logo" id="eq-logo" src="" alt="logo">
        <div>
          <div class="eq-name" id="eq-name">–</div>
          <div class="eq-abrev" id="eq-abrev">–</div>
        </div>
      </div>
      <h4 style="color:var(--gold);font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:12px">Plantilla</h4>
      <div class="plantilla-list" id="eq-plantilla"></div>
    </div>
  </div>
</div>

<!-- ADMIN MODAL -->
<div class="modal-overlay admin-modal" id="modal-admin">
  <div class="modal-box" style="max-width:720px">
    <div class="modal-header">
      <h3>⚙️ Panel de Administración</h3>
      <button class="modal-close" onclick="closeModal('modal-admin')">✕</button>
    </div>
    <div class="modal-body" id="admin-body">
      <div id="admin-pass-screen">
        <div class="form-group">
          <label>Contraseña de administrador</label>
          <input class="admin-pass-input" type="password" id="admin-pass" placeholder="••••••••" onkeydown="if(event.key==='Enter') checkAdminPass()">
        </div>
        <button class="btn-save" style="margin-top:8px" onclick="checkAdminPass()">Entrar</button>
      </div>
      <div id="admin-content" style="display:none">
        <div class="admin-sections" id="admin-sections"></div>
      </div>
    </div>
  </div>
</div>

<!-- TOAST -->
<div id="toast"></div>

<!-- ===== SCRIPTS ===== -->
<script>
// ====================================================
//  GLOBALS
// ====================================================
let _db, _auth, _ref, _onValue, _set, _push, _update, _remove, _get;
let currentSection = 'inicio';
let currentJornadaDiv = 'primera';
let adminUnlocked = false;
let currentUser = null;
let currentUserData = null;

// Data cache
let dataPrimera = [], dataSegunda = [], partidosPrimera = [], partidosSegunda = [];
let dataGoleadores = [], dataAsistencias = [], dataCS = [];
let dataTarjetas = [], dataNoticias = [], dataAfiliados = [], dataEquipos = [], dataFichajes = [];
let dataStats = {};

// ====================================================
//  FIREBASE INIT
// ====================================================
document.addEventListener('fb-ready', () => {
  const fb = window._fb;
  _db = fb.db; _auth = fb.auth;
  _ref = fb.ref; _onValue = fb.onValue;
  _set = fb.set; _push = fb.push;
  _update = fb.update; _remove = fb.remove; _get = fb.get;

  setupListeners();
  setupAuthListener();
});

function fbRef(path) { return _ref(_db, path); }

function setupListeners() {
  _onValue(fbRef('liga/primera'), snap => {
    dataPrimera = toArray(snap.val());
    renderTabla('primera');
    updateHeroStats();
  });
  _onValue(fbRef('liga/segunda'), snap => {
    dataSegunda = toArray(snap.val());
    renderTabla('segunda');
  });
  _onValue(fbRef('liga/partidos_primera'), snap => {
    partidosPrimera = toArray(snap.val());
    if (currentJornadaDiv === 'primera') renderJornada();
  });
  _onValue(fbRef('liga/partidos_segunda'), snap => {
    partidosSegunda = toArray(snap.val());
    if (currentJornadaDiv === 'segunda') renderJornada();
  });
  _onValue(fbRef('liga/goleadores'), snap => {
    dataGoleadores = toArray(snap.val());
    renderStats();
  });
  _onValue(fbRef('liga/asistencias'), snap => {
    dataAsistencias = toArray(snap.val());
    renderStats();
  });
  _onValue(fbRef('liga/cleansheets'), snap => {
    dataCS = toArray(snap.val());
    renderStats();
  });
  _onValue(fbRef('liga/tarjetas'), snap => {
    dataTarjetas = toArray(snap.val());
    renderTarjetas();
  });
  _onValue(fbRef('liga/noticias'), snap => {
    dataNoticias = toArray(snap.val());
    renderNoticias();
  });
  _onValue(fbRef('liga/afiliados'), snap => {
    dataAfiliados = toArray(snap.val());
    renderAfiliados();
  });
  _onValue(fbRef('bot/teams'), snap => {
    const val = snap.val();
    if (val) dataEquipos = Object.values(val);
    else dataEquipos = [];
    renderEquipos();
  });
  _onValue(fbRef('bot/historial'), snap => {
    const val = snap.val();
    if (val) dataFichajes = Object.values(val).reverse();
    else dataFichajes = [];
    renderFichajes();
  });
  _onValue(fbRef('bot/stats'), snap => {
    const val = snap.val();
    if (val) dataStats = val;
    else dataStats = {};
  });
}

function toArray(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val.filter(Boolean);
  return Object.entries(val).map(([k, v]) => ({ ...v, _key: k }));
}

// ====================================================
//  NAV
// ====================================================
function switchSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('#nav button').forEach(b => b.classList.remove('active'));
  document.getElementById('s-' + id).classList.add('active');
  const btn = [...document.querySelectorAll('#nav button')].find(b => b.textContent.toLowerCase().includes(id === 'stats' ? 'estadísticas' : id === 'cuenta' ? 'cuenta' : id));
  if (btn) btn.classList.add('active');
  currentSection = id;
  window.scrollTo(0, 0);
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}
function openModal(id) {
  document.getElementById(id).classList.add('open');
}

// Close on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});

// ====================================================
//  TOAST
// ====================================================
let toastTimer;
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'show ' + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.classList.remove('show', 'success', 'error'); }, 3000);
}

// ====================================================
//  TABLAS
// ====================================================
function renderTabla(div) {
  const data = div === 'primera' ? dataPrimera : dataSegunda;
  const el = document.getElementById('tabla-' + div);
  if (!data.length) { el.innerHTML = '<div class="empty-state"><div class="empty-icon">📋</div><p>Sin datos de clasificación</p></div>'; return; }
  let html = `<table><thead><tr>
    <th>#</th><th style="text-align:left">Equipo</th>
    <th>PJ</th><th>G</th><th>E</th><th>P</th>
    <th>GF</th><th>GC</th><th>DG</th><th>Pts</th>
  </tr></thead><tbody>`;
  data.forEach((t, i) => {
    const pos = i + 1;
    let badge = `<span class="pos-badge${pos<=1?' top1':pos<=2?' top2':pos<=3?' top3':''}">${pos}</span>`;
    const logo = t.logo ? `<img class="team-logo-sm" src="${t.logo}" onerror="this.style.display='none'">` : '';
    html += `<tr>
      <td>${badge}</td>
      <td><div class="team-row-info">${logo}<span class="team-name-link" onclick="openEquipoPerfil('${t.nombre||t.equipo||''}')">${t.nombre||t.equipo||'–'}</span></div></td>
      <td>${t.pj||0}</td><td>${t.g||0}</td><td>${t.e||0}</td><td>${t.p||0}</td>
      <td>${t.gf||0}</td><td>${t.gc||0}</td>
      <td>${(t.gf||0)-(t.gc||0)}</td>
      <td style="font-weight:800;color:var(--gold)">${t.pts||0}</td>
    </tr>`;
  });
  html += '</tbody></table>';
  el.innerHTML = html;
}

// ====================================================
//  JORNADAS
// ====================================================
function switchJornadaDiv(div, btn) {
  currentJornadaDiv = div;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  buildJornadaSelect();
}

function buildJornadaSelect() {
  const partidos = currentJornadaDiv === 'primera' ? partidosPrimera : partidosSegunda;
  const jornadas = [...new Set(partidos.map(p => p.jornada||1))].sort((a,b)=>a-b);
  const sel = document.getElementById('jornada-select');
  const prev = sel.value;
  sel.innerHTML = jornadas.length ? jornadas.map(j => `<option value="${j}">Jornada ${j}</option>`).join('') : '<option value="1">Jornada 1</option>';
  if (prev && jornadas.includes(parseInt(prev))) sel.value = prev;
  renderJornada();
}

function renderJornada() {
  const partidos = currentJornadaDiv === 'primera' ? partidosPrimera : partidosSegunda;
  const jornada = parseInt(document.getElementById('jornada-select').value) || 1;
  const filtered = partidos.filter(p => (p.jornada||1) == jornada);
  const el = document.getElementById('matches-container');
  if (!filtered.length) { el.innerHTML = '<div class="empty-state"><div class="empty-icon">⚽</div><p>Sin partidos en esta jornada</p></div>'; return; }
  el.innerHTML = '<div class="matches-grid">' + filtered.map(p => {
    const scoreStr = p.resultado ? `<div class="match-score">${p.resultado}</div>` : `<div class="match-score pending">vs</div>`;
    const logoL = p.logoLocal ? `<img class="team-logo-sm" src="${p.logoLocal}" onerror="this.style.display='none'">` : '';
    const logoV = p.logoVisitante ? `<img class="team-logo-sm" src="${p.logoVisitante}" onerror="this.style.display='none'">` : '';
    return `<div class="card match-card">
      <div class="match-team">${logoL}<span>${p.local||'–'}</span></div>
      ${scoreStr}
      <div class="match-team right"><span>${p.visitante||'–'}</span>${logoV}</div>
    </div>`;
  }).join('') + '</div>';
}

// ====================================================
//  STATS
// ====================================================
function renderStats() {
  renderStatList('stat-goleadores', dataGoleadores, 'goles');
  renderStatList('stat-asistencias', dataAsistencias, 'asistencias');
  renderStatList('stat-cs', dataCS, 'cs');
}

function renderStatList(elId, data, field) {
  const el = document.getElementById(elId);
  if (!data.length) { el.innerHTML = '<div class="empty-state" style="padding:20px"><p>Sin datos</p></div>'; return; }
  const sorted = [...data].sort((a,b)=>(b[field]||0)-(a[field]||0)).slice(0,10);
  el.innerHTML = sorted.map((p, i) => {
    const nombre = p.nombre || p.jugador || 'Desconocido';
    const val = p[field] || 0;
    const avatar = p.avatar || getDiscordAvatar(p.discordId);
    return `<div class="stat-row" onclick="openJugadorPerfil('${nombre}','${p.discordId||''}','${p.equipo||''}')" style="cursor:pointer">
      <div class="stat-row-left">
        <span class="stat-row-pos">${i+1}</span>
        <img class="stat-row-avatar" src="${avatar}" onerror="this.src='https://cdn.discordapp.com/embed/avatars/${i%6}.png'">
        <span class="stat-link">${nombre}</span>
      </div>
      <span class="stat-row-val">${val}</span>
    </div>`;
  }).join('');
}

function getDiscordAvatar(discordId) {
  if (!discordId) return 'https://cdn.discordapp.com/embed/avatars/0.png';
  return `https://cdn.discordapp.com/embed/avatars/0.png`;
}

// ====================================================
//  TARJETAS
// ====================================================
function renderTarjetas() {
  const el = document.getElementById('tarjetas-container');
  if (!dataTarjetas.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">🟨</div><p>Sin tarjetas registradas</p></div>'; return;
  }
  el.innerHTML = '<div class="cards-grid">' + dataTarjetas.map(t => {
    const avatar = t.avatar || 'https://cdn.discordapp.com/embed/avatars/0.png';
    return `<div class="card card-tarjeta card-hover" onclick="openJugadorPerfil('${t.jugador||t.nombre||''}','${t.discordId||''}','${t.equipo||''}')">
      <img class="tc-avatar" src="${avatar}" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
      <div class="tc-info">
        <div class="tc-name">${t.jugador||t.nombre||'–'}</div>
        <div class="tc-team">${t.equipo||'–'}</div>
        <div class="tc-cards">
          ${(t.amarillas||t.ta||0)>0 ? `<span class="badge-amarilla">🟨 ${t.amarillas||t.ta||0}</span>` : ''}
          ${(t.rojas||t.tr||0)>0 ? `<span class="badge-roja">🟥 ${t.rojas||t.tr||0}</span>` : ''}
        </div>
      </div>
    </div>`;
  }).join('') + '</div>';
}

// ====================================================
//  NOTICIAS
// ====================================================
function renderNoticias() {
  const el = document.getElementById('noticias-container');
  if (!dataNoticias.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">📰</div><p>Sin noticias publicadas</p></div>'; return;
  }
  const sorted = [...dataNoticias].sort((a,b) => new Date(b.fecha||0) - new Date(a.fecha||0));
  el.innerHTML = '<div class="news-grid">' + sorted.map(n => {
    const imgEl = n.imagen ? `<img class="news-img" src="${n.imagen}" onerror="this.outerHTML='<div class=\\'news-img-placeholder\\'>📰</div>'">` : '<div class="news-img-placeholder">📰</div>';
    const tagEl = n.tag ? `<span class="news-tag">${n.tag}</span>` : '';
    const linkEl = n.link ? `<a class="news-link" href="${n.link}" target="_blank">Leer más →</a>` : '';
    return `<div class="card news-card card-hover">
      ${imgEl}
      <div class="news-body">
        ${tagEl}
        <div class="news-title">${n.titulo||'Sin título'}</div>
        <div class="news-desc">${n.descripcion||''}</div>
        <div class="news-footer">
          <span class="news-date">${n.fecha||''}</span>
          ${linkEl}
        </div>
      </div>
    </div>`;
  }).join('') + '</div>';
}

// ====================================================
//  AFILIADOS
// ====================================================
function renderAfiliados() {
  const el = document.getElementById('afiliados-container');
  if (!dataAfiliados.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">🤝</div><p>Sin afiliados registrados</p></div>'; return;
  }
  el.innerHTML = '<div class="afiliados-grid">' + dataAfiliados.map(a => {
    const logoEl = a.imagen ? `<img class="afiliado-logo" src="${a.imagen}" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">` : '<div class="afiliado-logo" style="display:flex;align-items:center;justify-content:center;font-size:1.5rem">🤝</div>';
    const btns = [
      a.url ? `<a href="${a.url}" target="_blank"><button class="btn-sm">🌐 Web</button></a>` : '',
      a.discord ? `<a href="https://discord.gg/${a.discord}" target="_blank"><button class="btn-sm">Discord</button></a>` : ''
    ].filter(Boolean).join('');
    return `<div class="card afiliado-card card-hover">
      ${logoEl}
      <div class="afiliado-nombre">${a.nombre||'–'}</div>
      <div class="afiliado-desc">${a.descripcion||''}</div>
      ${btns ? `<div class="afiliado-actions">${btns}</div>` : ''}
    </div>`;
  }).join('') + '</div>';
}

// ====================================================
//  EQUIPOS
// ====================================================
function renderEquipos() {
  const el = document.getElementById('equipos-container');
  if (!dataEquipos.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">🏟️</div><p>Sin equipos registrados</p></div>'; return;
  }
  el.innerHTML = '<div class="equipos-grid">' + dataEquipos.map(e => {
    const logo = e.logo ? `<img class="equipo-logo" src="${e.logo}" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">` : '<div class="equipo-logo" style="display:flex;align-items:center;justify-content:center;font-size:1.5rem">⚽</div>';
    return `<div class="card equipo-card card-hover" onclick="openEquipoPerfil('${e.nombre||e.name||''}','${e.roleId||''}')">
      ${logo}
      <div class="equipo-nombre">${e.nombre||e.name||'–'}</div>
      <div class="equipo-abrev">${e.abrev||'–'}</div>
    </div>`;
  }).join('') + '</div>';
}

// ====================================================
//  FICHAJES
// ====================================================
function renderFichajes() {
  const el = document.getElementById('fichajes-container');
  const tipos = ['FICHAJE','TRASPASO','BAJA'];
  const filtered = dataFichajes.filter(f => tipos.includes(f.tipo));
  if (!filtered.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">📋</div><p>Sin fichajes registrados</p></div>'; return;
  }
  el.innerHTML = '<div class="fichajes-list">' + filtered.slice(0,50).map(f => {
    const avatar = f.avatar || `https://cdn.discordapp.com/embed/avatars/0.png`;
    const logoEl = f.logoEquipo ? `<img class="fichaje-avatar" src="${f.logoEquipo}" onerror="this.style.display='none'" style="border-radius:50%">` : '';
    const badgeClass = f.tipo === 'FICHAJE' ? 'badge-fichaje' : f.tipo === 'TRASPASO' ? 'badge-traspaso' : 'badge-baja';
    const fecha = f.fecha ? new Date(f.fecha).toLocaleDateString('es-ES') : '';
    return `<div class="fichaje-item">
      <div class="fichaje-avatars">
        <img class="fichaje-avatar" src="${avatar}" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
        ${logoEl ? `<span class="fichaje-sep">→</span>${logoEl}` : ''}
      </div>
      <div class="fichaje-text">
        <div class="fichaje-title">${f.jugador||f.nombre||'Jugador'}</div>
        <div class="fichaje-sub">${f.descripcion||f.equipo||''}</div>
      </div>
      <span class="fichaje-badge ${badgeClass}">${f.tipo}</span>
      <span class="fichaje-date">${fecha}</span>
    </div>`;
  }).join('') + '</div>';
}

// ====================================================
//  HERO STATS
// ====================================================
function updateHeroStats() {
  const equipos = dataPrimera.length + dataSegunda.length;
  const partidos = (partidosPrimera.filter(p=>p.resultado)).length + (partidosSegunda.filter(p=>p.resultado)).length;
  const goles = [...dataGoleadores].reduce((s,p)=>s+(p.goles||0), 0);
  document.getElementById('hero-equipos').textContent = equipos || '–';
  document.getElementById('hero-partidos').textContent = partidos || '–';
  document.getElementById('hero-goles').textContent = goles || '–';
}

// ====================================================
//  PERFIL JUGADOR MODAL
// ====================================================
function openJugadorPerfil(nombre, discordId, equipo) {
  // Find stats
  let stats = null;
  if (discordId && dataStats[discordId]) stats = dataStats[discordId];
  if (!stats) {
    // Try from goleadores
    const g = dataGoleadores.find(p => p.nombre === nombre || p.jugador === nombre);
    const a = dataAsistencias.find(p => p.nombre === nombre || p.jugador === nombre);
    const c = dataCS.find(p => p.nombre === nombre || p.jugador === nombre);
    stats = {
      goles: g ? (g.goles||0) : 0,
      asistencias: a ? (a.asistencias||0) : 0,
      cs: c ? (c.cs||0) : 0,
      partidosJugados: g?.pj || 0,
      mvps: g?.mvps || 0,
      tarjetasAmarillas: 0
    };
  }

  // Check web account for avatar
  let avatar = 'https://cdn.discordapp.com/embed/avatars/0.png';
  if (_db && discordId) {
    // Try to get linked web account avatar
    _get(_ref(_db, `bot/cuentas/${discordId}`)).then(snap => {
      const cuentaData = snap.val();
      if (cuentaData && cuentaData.uid) {
        _get(_ref(_db, `usuarios/${cuentaData.uid}`)).then(usnap => {
          const ud = usnap.val();
          if (ud && ud.avatar) document.getElementById('pj-avatar').src = ud.avatar;
        });
      }
    }).catch(()=>{});
  }

  document.getElementById('pj-avatar').src = avatar;
  document.getElementById('pj-name').textContent = nombre || '–';
  document.getElementById('pj-team').textContent = equipo || '–';
  document.getElementById('pj-goles').textContent = stats.goles || 0;
  document.getElementById('pj-asist').textContent = stats.asistencias || 0;
  document.getElementById('pj-cs').textContent = stats.cs || 0;
  document.getElementById('pj-pj').textContent = stats.partidosJugados || 0;
  document.getElementById('pj-mvp').textContent = stats.mvps || 0;
  document.getElementById('pj-ta').textContent = stats.tarjetasAmarillas || 0;
  document.getElementById('pj-discord').innerHTML = discordId ? `<span class="discord-badge">🎮 Discord vinculado</span>` : '';

  // Sanciones
  const sanciones = dataTarjetas.filter(t => t.jugador === nombre || t.nombre === nombre);
  const sanEl = document.getElementById('pj-sanciones');
  if (sanciones.length) {
    sanEl.innerHTML = `<h4 style="color:var(--text-dim);font-size:0.78rem;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Tarjetas</h4>` +
      sanciones.map(s => `<div class="sancion-item">
        <span>${s.razon||s.motivo||'Sin motivo'}</span>
        <span>${(s.amarillas||s.ta||0)>0?'🟨':''}${(s.rojas||s.tr||0)>0?'🟥':''}</span>
      </div>`).join('');
  } else {
    sanEl.innerHTML = '';
  }

  openModal('modal-jugador');
}

// ====================================================
//  PERFIL EQUIPO MODAL
// ====================================================
function openEquipoPerfil(nombre, roleId) {
  const equipo = dataEquipos.find(e => e.nombre === nombre || e.name === nombre || e.roleId === roleId)
    || dataPrimera.find(e => e.nombre === nombre || e.equipo === nombre)
    || dataSegunda.find(e => e.nombre === nombre || e.equipo === nombre)
    || {};

  document.getElementById('eq-logo').src = equipo.logo || 'https://cdn.discordapp.com/embed/avatars/0.png';
  document.getElementById('eq-name').textContent = equipo.nombre || equipo.name || equipo.equipo || nombre || '–';
  document.getElementById('eq-abrev').textContent = equipo.abrev || '–';

  const plantillaEl = document.getElementById('eq-plantilla');
  if (equipo.jugadores && equipo.jugadores.length) {
    plantillaEl.innerHTML = equipo.jugadores.map(j => {
      const jName = typeof j === 'string' ? j : (j.nombre || j.name || '–');
      return `<div class="plantilla-member">
        <img class="plantilla-avatar" src="https://cdn.discordapp.com/embed/avatars/0.png">
        <div>
          <div class="plantilla-name">${jName}</div>
        </div>
      </div>`;
    }).join('');
  } else if (equipo.miembros && equipo.miembros.length) {
    plantillaEl.innerHTML = equipo.miembros.map(m => `<div class="plantilla-member">
      <img class="plantilla-avatar" src="https://cdn.discordapp.com/embed/avatars/0.png">
      <div><div class="plantilla-name">${m}</div></div>
    </div>`).join('');
  } else {
    plantillaEl.innerHTML = '<div style="color:var(--text-dim);font-size:0.85rem">Sin datos de plantilla</div>';
  }

  openModal('modal-equipo');
}

// ====================================================
//  AUTH
// ====================================================
function setupAuthListener() {
  import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js").then(mod => {
    mod.onAuthStateChanged(_auth, onAuthChange);
  });
}

async function onAuthChange(user) {
  currentUser = user;
  if (user) {
    document.getElementById('auth-panel').style.display = 'none';
    document.getElementById('perfil-panel').style.display = 'block';
    document.getElementById('btn-login').style.display = 'none';
    document.getElementById('btn-avatar').style.display = 'block';
    loadUserData(user.uid);
  } else {
    document.getElementById('auth-panel').style.display = 'block';
    document.getElementById('perfil-panel').style.display = 'none';
    document.getElementById('btn-login').style.display = 'block';
    document.getElementById('btn-avatar').style.display = 'none';
  }
}

async function loadUserData(uid) {
  try {
    const snap = await _get(_ref(_db, `usuarios/${uid}`));
    let data = snap.val() || {};
    currentUserData = data;

    if (!data.uid) {
      // First time - create record
      const code = uid.substring(0, 8).toUpperCase();
      data = { uid, email: currentUser.email, nombre: currentUser.displayName || '', avatar: '', discordId: '', codigo: code, createdAt: Date.now() };
      await _set(_ref(_db, `usuarios/${uid}`), data);
      currentUserData = data;
    }

    document.getElementById('perfil-nombre').textContent = data.nombre || currentUser.email;
    document.getElementById('perfil-email').textContent = currentUser.email;
    document.getElementById('edit-nombre').value = data.nombre || '';
    document.getElementById('uid-code-display').textContent = data.codigo || uid.substring(0,8).toUpperCase();

    if (data.avatar) {
      document.getElementById('perfil-avatar-img').src = data.avatar;
      const aImg = document.getElementById('avatar-img');
      if (aImg) aImg.src = data.avatar;
    }

    if (data.discordId) {
      document.getElementById('perfil-discord-badge').style.display = 'block';
      document.getElementById('perfil-discord-badge').innerHTML = `<span class="discord-badge">🎮 Discord: ${data.discordTag || data.discordId}</span>`;
      document.getElementById('vincular-box').style.display = 'none';
      loadPerfilStats(data.discordId);
    }
  } catch(e) { console.error(e); }
}

function loadPerfilStats(discordId) {
  if (!discordId || !dataStats[discordId]) return;
  const s = dataStats[discordId];
  document.getElementById('ps-goles').textContent = s.goles || 0;
  document.getElementById('ps-asist').textContent = s.asistencias || 0;
  document.getElementById('ps-cs').textContent = s.cs || 0;
  document.getElementById('ps-pj').textContent = s.partidosJugados || 0;
  document.getElementById('ps-mvp').textContent = s.mvps || 0;
  document.getElementById('ps-ta').textContent = s.tarjetasAmarillas || 0;
}

async function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass = document.getElementById('login-pass').value;
  if (!email || !pass) { showToast('Rellena todos los campos', 'error'); return; }
  try {
    await signInWithEmailAndPassword(_auth, email, pass);
    showToast('Bienvenido de nuevo', 'success');
  } catch(e) {
    showToast('Error: ' + (e.message.includes('user-not-found') ? 'Usuario no encontrado' : e.message.includes('wrong-password') ? 'Contraseña incorrecta' : e.message), 'error');
  }
}

async function doRegister() {
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass = document.getElementById('reg-pass').value;
  if (!name || !email || !pass) { showToast('Rellena todos los campos', 'error'); return; }
  if (pass.length < 6) { showToast('La contraseña debe tener al menos 6 caracteres', 'error'); return; }
  try {
    const cred = await createUserWithEmailAndPassword(_auth, email, pass);
    await updateProfile(cred.user, { displayName: name });
    showToast('Cuenta creada exitosamente', 'success');
  } catch(e) {
    showToast('Error: ' + (e.message.includes('email-already-in-use') ? 'Email ya en uso' : e.message), 'error');
  }
}

async function doLogout() {
  await signOut(_auth);
  showToast('Sesión cerrada');
}

function toggleAuthPanel(showRegister) {
  document.getElementById('auth-login-panel').style.display = showRegister ? 'none' : 'block';
  document.getElementById('auth-register-panel').style.display = showRegister ? 'block' : 'none';
}

async function saveNombre() {
  if (!currentUser) return;
  const nombre = document.getElementById('edit-nombre').value.trim();
  try {
    await _update(_ref(_db, `usuarios/${currentUser.uid}`), { nombre });
    await updateProfile(currentUser, { displayName: nombre });
    document.getElementById('perfil-nombre').textContent = nombre;
    showToast('Nombre guardado', 'success');
  } catch(e) { showToast('Error al guardar', 'error'); }
}

async function uploadAvatar(event) {
  const file = event.target.files[0];
  if (!file || !currentUser) return;
  if (file.size > 500000) { showToast('La imagen no puede superar 500KB', 'error'); return; }
  const reader = new FileReader();
  reader.onload = async (e) => {
    const base64 = e.target.result;
    try {
      await _update(_ref(_db, `usuarios/${currentUser.uid}`), { avatar: base64 });
      document.getElementById('perfil-avatar-img').src = base64;
      document.getElementById('avatar-img').src = base64;
      showToast('Avatar actualizado', 'success');
    } catch(err) { showToast('Error al guardar avatar', 'error'); }
  };
  reader.readAsDataURL(file);
}

// Auth functions loaded from Firebase module via window._fb
async function signInWithEmailAndPassword(auth, email, pass) {
  const mod = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
  return mod.signInWithEmailAndPassword(auth, email, pass);
}
async function createUserWithEmailAndPassword(auth, email, pass) {
  const mod = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
  return mod.createUserWithEmailAndPassword(auth, email, pass);
}
async function signOut(auth) {
  const mod = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
  return mod.signOut(auth);
}
async function updateProfile(user, data) {
  const mod = await import("https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js");
  return mod.updateProfile(user, data);
}

// ====================================================
//  ADMIN PANEL
// ====================================================
function openAdmin() { openModal('modal-admin'); }

function checkAdminPass() {
  const pass = document.getElementById('admin-pass').value;
  if (pass === 'rushadmins') {
    adminUnlocked = true;
    document.getElementById('admin-pass-screen').style.display = 'none';
    document.getElementById('admin-content').style.display = 'block';
    buildAdminPanel();
  } else {
    showToast('Contraseña incorrecta', 'error');
  }
}

function buildAdminPanel() {
  const sections = [
    { id: 'tabla-primera-admin', label: '📊 Tabla Primera División' },
    { id: 'tabla-segunda-admin', label: '📊 Tabla Segunda División' },
    { id: 'jornadas-primera-admin', label: '⚽ Jornadas Primera División' },
    { id: 'jornadas-segunda-admin', label: '⚽ Jornadas Segunda División' },
    { id: 'goleadores-admin', label: '🥅 Goleadores' },
    { id: 'asistencias-admin', label: '🎯 Asistencias' },
    { id: 'cs-admin', label: '🧤 Clean Sheets' },
    { id: 'tarjetas-admin', label: '🟨 Tarjetas' },
    { id: 'noticias-admin', label: '📰 Noticias' },
    { id: 'afiliados-admin', label: '🤝 Afiliados' },
    { id: 'anuncio-admin', label: '📢 Enviar Anuncio al Bot' },
  ];
  const container = document.getElementById('admin-sections');
  container.innerHTML = sections.map(s => `
    <button class="admin-section-tab" onclick="toggleAdminSection('${s.id}', this)">
      ${s.label} <span>▼</span>
    </button>
    <div class="admin-section-content" id="${s.id}">
      <div class="loading"><div class="spinner"></div></div>
    </div>
  `).join('');
}

function toggleAdminSection(id, btn) {
  const el = document.getElementById(id);
  const isOpen = el.classList.contains('open');
  // Close all
  document.querySelectorAll('.admin-section-content').forEach(e => e.classList.remove('open'));
  document.querySelectorAll('.admin-section-tab').forEach(b => b.classList.remove('open'));
  if (!isOpen) {
    el.classList.add('open');
    btn.classList.add('open');
    loadAdminSection(id);
  }
}

function loadAdminSection(id) {
  const el = document.getElementById(id);
  switch(id) {
    case 'tabla-primera-admin': buildTablaEditor(el, 'primera', dataPrimera); break;
    case 'tabla-segunda-admin': buildTablaEditor(el, 'segunda', dataSegunda); break;
    case 'jornadas-primera-admin': buildJornadaEditor(el, 'primera', partidosPrimera); break;
    case 'jornadas-segunda-admin': buildJornadaEditor(el, 'segunda', partidosSegunda); break;
    case 'goleadores-admin': buildStatEditor(el, 'goleadores', dataGoleadores, 'goles'); break;
    case 'asistencias-admin': buildStatEditor(el, 'asistencias', dataAsistencias, 'asistencias'); break;
    case 'cs-admin': buildStatEditor(el, 'cleansheets', dataCS, 'cs'); break;
    case 'tarjetas-admin': buildTarjetaEditor(el); break;
    case 'noticias-admin': buildNoticiasEditor(el); break;
    case 'afiliados-admin': buildAfiliadosEditor(el); break;
    case 'anuncio-admin': buildAnuncioPanel(el); break;
  }
}

// --- Tabla editor ---
function buildTablaEditor(el, div, data) {
  const fields = ['nombre','pj','g','e','p','gf','gc','pts'];
  const labels = ['Equipo','PJ','G','E','P','GF','GC','Pts'];
  let rows = (data.length ? [...data] : [{}]).map(t => ({ ...t }));

  const render = () => {
    el.innerHTML = `
      <div style="font-size:0.72rem;color:var(--text-dim);margin-bottom:6px">* Los logos se toman del apartado Equipos del bot.</div>
      <div class="admin-tabla-grid">
        <div class="admin-tabla-row">
          <span></span>
          ${labels.map(l=>`<span class="admin-row-header">${l}</span>`).join('')}
          <span></span>
        </div>
        ${rows.map((r,i)=>`<div class="admin-tabla-row" id="tr-${div}-${i}">
          <span style="color:var(--text-dim);font-size:0.75rem">${i+1}</span>
          ${fields.map(f=>`<input data-field="${f}" data-idx="${i}" data-div="${div}" value="${r[f]||''}" placeholder="${f}">`).join('')}
          <button class="btn-delete" onclick="deleteTablaRow('${div}',${i})">✕</button>
        </div>`).join('')}
      </div>
      <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">
        <button class="btn-add-row" onclick="addTablaRow('${div}')">+ Equipo</button>
        <button class="btn-save" onclick="saveTabla('${div}')">💾 Guardar</button>
        <button class="btn-reset" onclick="resetTabla('${div}')">🗑️ Reset</button>
      </div>
    `;
    el.querySelectorAll('input[data-field]').forEach(inp => {
      inp.addEventListener('input', e => {
        const i = parseInt(e.target.dataset.idx);
        const f = e.target.dataset.field;
        rows[i][f] = e.target.value;
      });
    });
  };

  window[`_tablaRows_${div}`] = rows;
  window[`_tablaRender_${div}`] = render;
  render();

  window[`addTablaRow`] = function(d) {
    window[`_tablaRows_${d}`].push({});
    const sec = document.getElementById(`tabla-${d}-admin`);
    window[`_tablaRender_${d}`]();
  };
  window[`deleteTablaRow`] = function(d, i) {
    window[`_tablaRows_${d}`].splice(i,1);
    window[`_tablaRender_${d}`]();
  };
}

window.saveTabla = async function(div) {
  const rows = window[`_tablaRows_${div}`] || [];
  const clean = rows.map(r => ({
    nombre: r.nombre||'', pj:parseInt(r.pj)||0, g:parseInt(r.g)||0, e:parseInt(r.e)||0,
    p:parseInt(r.p)||0, gf:parseInt(r.gf)||0, gc:parseInt(r.gc)||0, pts:parseInt(r.pts)||0
  }));
  try {
    await _set(_ref(_db, `liga/${div === 'primera' ? 'primera' : 'segunda'}`), clean);
    showToast('Tabla guardada', 'success');
  } catch(e) { showToast('Error al guardar', 'error'); }
};

window.resetTabla = async function(div) {
  if (!confirm('¿Resetear tabla?')) return;
  try {
    await _set(_ref(_db, `liga/${div === 'primera' ? 'primera' : 'segunda'}`), []);
    showToast('Tabla reseteada', 'success');
  } catch(e) { showToast('Error', 'error'); }
};

// --- Jornada editor ---
function buildJornadaEditor(el, div, data) {
  let rows = data.length ? [...data] : [];
  const fbKey = div === 'primera' ? 'partidos_primera' : 'partidos_segunda';

  const render = () => {
    el.innerHTML = `
      <div class="admin-tabla-grid">
        ${rows.map((r,i)=>`<div class="admin-jornada-row">
          <input placeholder="Jornada" type="number" value="${r.jornada||1}" style="width:70px" onchange="window._jorRows_${div}[${i}].jornada=this.value">
          <input placeholder="Local" value="${r.local||''}" onchange="window._jorRows_${div}[${i}].local=this.value">
          <input placeholder="Visitante" value="${r.visitante||''}" onchange="window._jorRows_${div}[${i}].visitante=this.value">
          <input placeholder="Resultado (ej: 3-1)" value="${r.resultado||''}" style="width:100px" onchange="window._jorRows_${div}[${i}].resultado=this.value">
          <button class="btn-delete" onclick="window._jorDel('${div}',${i})">✕</button>
        </div>`).join('')}
      </div>
      <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">
        <button class="btn-add-row" onclick="window._jorAdd('${div}')">+ Partido</button>
        <button class="btn-save" onclick="window._jorSave('${div}')">💾 Guardar</button>
      </div>
    `;
  };

  window[`_jorRows_${div}`] = rows;
  window._jorAdd = (d) => { window[`_jorRows_${d}`].push({ jornada:1, local:'', visitante:'', resultado:'' }); loadAdminSection(`jornadas-${d}-admin`); };
  window._jorDel = (d, i) => { window[`_jorRows_${d}`].splice(i,1); loadAdminSection(`jornadas-${d}-admin`); };
  window._jorSave = async (d) => {
    const rws = window[`_jorRows_${d}`] || [];
    const key = d === 'primera' ? 'partidos_primera' : 'partidos_segunda';
    try {
      await _set(_ref(_db, `liga/${key}`), rws.map(r=>({...r, jornada:parseInt(r.jornada)||1})));
      showToast('Jornadas guardadas', 'success');
    } catch(e) { showToast('Error', 'error'); }
  };
  render();
}

// --- Stat editor ---
function buildStatEditor(el, key, data, field) {
  let rows = data.length ? [...data] : [];
  window[`_statRows_${key}`] = rows;

  const render = () => {
    el.innerHTML = `
      <div>
        <div style="display:grid;grid-template-columns:2fr 1fr auto;gap:6px;margin-bottom:4px;font-size:0.7rem;color:var(--text-dim);font-weight:700;text-transform:uppercase">
          <span>Nombre</span><span>${field}</span><span></span>
        </div>
        ${rows.map((r,i)=>`<div style="display:grid;grid-template-columns:2fr 1fr auto;gap:6px;margin-bottom:4px">
          <input placeholder="Nombre jugador" value="${r.nombre||r.jugador||''}" style="background:var(--dark5);border:1px solid rgba(200,168,75,0.15);color:var(--text);padding:5px 8px;border-radius:5px;font-size:0.82rem;width:100%" onchange="window._statRows_${key}[${i}].nombre=this.value">
          <input type="number" placeholder="0" value="${r[field]||0}" style="background:var(--dark5);border:1px solid rgba(200,168,75,0.15);color:var(--text);padding:5px 8px;border-radius:5px;font-size:0.82rem;width:100%" onchange="window._statRows_${key}[${i}]['${field}']=this.value">
          <button class="btn-delete" onclick="window._statDel('${key}',${i})">✕</button>
        </div>`).join('')}
      </div>
      <div style="margin-top:8px;display:flex;gap:6px">
        <button class="btn-add-row" onclick="window._statAdd('${key}','${field}')">+ Jugador</button>
        <button class="btn-save" onclick="window._statSave('${key}','${field}')">💾 Guardar</button>
      </div>
    `;
  };

  window._statAdd = (k, f) => { window[`_statRows_${k}`].push({ nombre:'', [f]:0 }); loadAdminSection(`${k === 'goleadores' ? 'goleadores' : k === 'asistencias' ? 'asistencias' : 'cs'}-admin`); };
  window._statDel = (k, i) => { window[`_statRows_${k}`].splice(i,1); loadAdminSection(`${k === 'goleadores' ? 'goleadores' : k === 'asistencias' ? 'asistencias' : 'cs'}-admin`); };
  window._statSave = async (k, f) => {
    const rws = window[`_statRows_${k}`] || [];
    try {
      await _set(_ref(_db, `liga/${k}`), rws.map(r => ({ nombre:r.nombre||'', [f]:parseInt(r[f])||0 })));
      showToast('Guardado', 'success');
    } catch(e) { showToast('Error', 'error'); }
  };
  render();
}

// --- Tarjeta editor ---
function buildTarjetaEditor(el) {
  let rows = dataTarjetas.length ? [...dataTarjetas] : [];
  window._tarjRows = rows;

  const render = () => {
    el.innerHTML = `
      <div>
        <div style="display:grid;grid-template-columns:2fr 2fr 1fr 1fr auto;gap:6px;margin-bottom:4px;font-size:0.7rem;color:var(--text-dim);font-weight:700;text-transform:uppercase">
          <span>Jugador</span><span>Equipo</span><span>🟨</span><span>🟥</span><span></span>
        </div>
        ${rows.map((r,i)=>`<div style="display:grid;grid-template-columns:2fr 2fr 1fr 1fr auto;gap:6px;margin-bottom:4px">
          <input placeholder="Jugador" value="${r.jugador||r.nombre||''}" style="background:var(--dark5);border:1px solid rgba(200,168,75,0.15);color:var(--text);padding:5px 8px;border-radius:5px;font-size:0.82rem;width:100%" onchange="window._tarjRows[${i}].jugador=this.value">
          <input placeholder="Equipo" value="${r.equipo||''}" style="background:var(--dark5);border:1px solid rgba(200,168,75,0.15);color:var(--text);padding:5px 8px;border-radius:5px;font-size:0.82rem;width:100%" onchange="window._tarjRows[${i}].equipo=this.value">
          <input type="number" value="${r.amarillas||r.ta||0}" style="background:var(--dark5);border:1px solid rgba(200,168,75,0.15);color:var(--text);padding:5px 8px;border-radius:5px;font-size:0.82rem;width:100%" onchange="window._tarjRows[${i}].amarillas=this.value">
          <input type="number" value="${r.rojas||r.tr||0}" style="background:var(--dark5);border:1px solid rgba(200,168,75,0.15);color:var(--text);padding:5px 8px;border-radius:5px;font-size:0.82rem;width:100%" onchange="window._tarjRows[${i}].rojas=this.value">
          <button class="btn-delete" onclick="window._tarjDel(${i})">✕</button>
        </div>`).join('')}
      </div>
      <div style="margin-top:8px;display:flex;gap:6px">
        <button class="btn-add-row" onclick="window._tarjAdd()">+ Tarjeta</button>
        <button class="btn-save" onclick="window._tarjSave()">💾 Guardar</button>
      </div>
    `;
  };

  window._tarjAdd = () => { window._tarjRows.push({ jugador:'', equipo:'', amarillas:0, rojas:0 }); buildTarjetaEditor(el); };
  window._tarjDel = (i) => { window._tarjRows.splice(i,1); buildTarjetaEditor(el); };
  window._tarjSave = async () => {
    try {
      await _set(_ref(_db, 'liga/tarjetas'), window._tarjRows.map(r => ({
        jugador: r.jugador||'', equipo: r.equipo||'',
        amarillas: parseInt(r.amarillas)||0, rojas: parseInt(r.rojas)||0
      })));
      showToast('Tarjetas guardadas', 'success');
    } catch(e) { showToast('Error', 'error'); }
  };
  render();
}

// --- Noticias editor ---
function buildNoticiasEditor(el) {
  let rows = dataNoticias.length ? JSON.parse(JSON.stringify(dataNoticias)) : [];
  window._notRows = rows;

  const render = () => {
    el.innerHTML = `
      <div id="noticias-admin-rows">
        ${rows.map((n,i) => `<div class="admin-noticia-row">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:0.78rem;color:var(--gold);font-weight:700">Noticia ${i+1}</span>
            <button class="btn-delete" onclick="window._notDel(${i})">✕ Eliminar</button>
          </div>
          <input placeholder="Título *" value="${n.titulo||''}" style="width:100%;margin-bottom:6px;background:var(--dark3);border:1px solid rgba(200,168,75,0.15);color:var(--text);padding:7px 10px;border-radius:6px;font-size:0.82rem" onchange="window._notRows[${i}].titulo=this.value">
          <textarea placeholder="Descripción" style="width:100%;min-height:60px;resize:vertical;background:var(--dark3);border:1px solid rgba(200,168,75,0.15);color:var(--text);padding:7px 10px;border-radius:6px;font-size:0.82rem;font-family:inherit;margin-bottom:6px" onchange="window._notRows[${i}].descripcion=this.value">${n.descripcion||''}</textarea>
          <div class="row2">
            <input placeholder="URL imagen" value="${n.imagen||''}" style="background:var(--dark3);border:1px solid rgba(200,168,75,0.15);color:var(--text);padding:7px 10px;border-radius:6px;font-size:0.82rem;width:100%" onchange="window._notRows[${i}].imagen=this.value">
            <input placeholder="Link externo" value="${n.link||''}" style="background:var(--dark3);border:1px solid rgba(200,168,75,0.15);color:var(--text);padding:7px 10px;border-radius:6px;font-size:0.82rem;width:100%" onchange="window._notRows[${i}].link=this.value">
            <input placeholder="Tag (ej: TRASPASO)" value="${n.tag||''}" style="background:var(--dark3);border:1px solid rgba(200,168,75,0.15);color:var(--text);padding:7px 10px;border-radius:6px;font-size:0.82rem;width:100%" onchange="window._notRows[${i}].tag=this.value">
            <input type="date" value="${n.fecha||''}" style="background:var(--dark3);border:1px solid rgba(200,168,75,0.15);color:var(--text);padding:7px 10px;border-radius:6px;font-size:0.82rem;width:100%" onchange="window._notRows[${i}].fecha=this.value">
          </div>
        </div>`).join('')}
      </div>
      <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">
        <button class="btn-add-row" onclick="window._notAdd()">+ Noticia</button>
        <button class="btn-save" onclick="window._notSave()">💾 Guardar todas</button>
      </div>
    `;
  };

  window._notAdd = () => { window._notRows.push({ titulo:'', descripcion:'', imagen:'', link:'', tag:'', fecha:'' }); buildNoticiasEditor(el); };
  window._notDel = (i) => { window._notRows.splice(i,1); buildNoticiasEditor(el); };
  window._notSave = async () => {
    try {
      const clean = window._notRows.filter(n => n.titulo).map(n => ({
        titulo: n.titulo||'', descripcion: n.descripcion||'',
        imagen: n.imagen||'', link: n.link||'', tag: n.tag||'',
        fecha: n.fecha || new Date().toISOString().split('T')[0]
      }));
      await _set(_ref(_db, 'liga/noticias'), clean);
      showToast('Noticias guardadas', 'success');
    } catch(e) { showToast('Error', 'error'); }
  };
  render();
}

// --- Afiliados editor ---
function buildAfiliadosEditor(el) {
  let rows = dataAfiliados.length ? JSON.parse(JSON.stringify(dataAfiliados)) : [];
  window._afilRows = rows;

  const render = () => {
    el.innerHTML = `
      <div>
        ${rows.map((a,i) => `<div class="admin-afiliado-row">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
            <span style="font-size:0.78rem;color:var(--gold);font-weight:700">Afiliado ${i+1}</span>
            <button class="btn-delete" onclick="window._afilDel(${i})">✕ Eliminar</button>
          </div>
          <input placeholder="Nombre *" value="${a.nombre||''}" style="width:100%;margin-bottom:6px;background:var(--dark3);border:1px solid rgba(200,168,75,0.15);color:var(--text);padding:7px 10px;border-radius:6px;font-size:0.82rem" onchange="window._afilRows[${i}].nombre=this.value">
          <textarea placeholder="Descripción" style="width:100%;min-height:50px;resize:vertical;background:var(--dark3);border:1px solid rgba(200,168,75,0.15);color:var(--text);padding:7px 10px;border-radius:6px;font-size:0.82rem;font-family:inherit;margin-bottom:6px" onchange="window._afilRows[${i}].descripcion=this.value">${a.descripcion||''}</textarea>
          <div class="row2">
            <input placeholder="URL imagen" value="${a.imagen||''}" style="background:var(--dark3);border:1px solid rgba(200,168,75,0.15);color:var(--text);padding:7px 10px;border-radius:6px;font-size:0.82rem;width:100%" onchange="window._afilRows[${i}].imagen=this.value">
            <input placeholder="URL web" value="${a.url||''}" style="background:var(--dark3);border:1px solid rgba(200,168,75,0.15);color:var(--text);padding:7px 10px;border-radius:6px;font-size:0.82rem;width:100%" onchange="window._afilRows[${i}].url=this.value">
            <input placeholder="Discord (código invite)" value="${a.discord||''}" style="background:var(--dark3);border:1px solid rgba(200,168,75,0.15);color:var(--text);padding:7px 10px;border-radius:6px;font-size:0.82rem;width:100%" onchange="window._afilRows[${i}].discord=this.value">
          </div>
        </div>`).join('')}
      </div>
      <div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap">
        <button class="btn-add-row" onclick="window._afilAdd()">+ Afiliado</button>
        <button class="btn-save" onclick="window._afilSave()">💾 Guardar todos</button>
      </div>
    `;
  };

  window._afilAdd = () => { window._afilRows.push({ nombre:'', descripcion:'', imagen:'', url:'', discord:'' }); buildAfiliadosEditor(el); };
  window._afilDel = (i) => { window._afilRows.splice(i,1); buildAfiliadosEditor(el); };
  window._afilSave = async () => {
    try {
      const clean = window._afilRows.filter(a => a.nombre).map(a => ({
        nombre: a.nombre||'', descripcion: a.descripcion||'',
        imagen: a.imagen||'', url: a.url||'', discord: a.discord||''
      }));
      await _set(_ref(_db, 'liga/afiliados'), clean);
      showToast('Afiliados guardados', 'success');
    } catch(e) { showToast('Error', 'error'); }
  };
  render();
}

// --- Anuncio panel ---
function buildAnuncioPanel(el) {
  el.innerHTML = `
    <div class="admin-anuncio">
      <p style="color:var(--text-dim);font-size:0.84rem;margin-bottom:10px">El bot leerá este anuncio y lo enviará al canal configurado en Discord.</p>
      <textarea id="anuncio-texto" placeholder="Escribe el anuncio aquí..." style="width:100%;min-height:80px;background:var(--dark5);border:1px solid rgba(200,168,75,0.2);color:var(--text);padding:10px;border-radius:8px;font-family:inherit;font-size:0.9rem;resize:vertical"></textarea>
      <div style="margin-top:8px;display:flex;gap:8px">
        <button class="btn-save" onclick="enviarAnuncio()">📢 Enviar Anuncio</button>
      </div>
    </div>
  `;
}

async function enviarAnuncio() {
  const texto = document.getElementById('anuncio-texto').value.trim();
  if (!texto) { showToast('Escribe un anuncio primero', 'error'); return; }
  try {
    await _push(_ref(_db, 'bot/anuncios'), {
      texto, fecha: Date.now(), enviado: false
    });
    document.getElementById('anuncio-texto').value = '';
    showToast('Anuncio enviado al bot', 'success');
  } catch(e) { showToast('Error al enviar', 'error'); }
}

// ====================================================
//  INIT ON LOAD
// ====================================================
window.addEventListener('DOMContentLoaded', () => {
  if (!window._fbReady) {
    document.addEventListener('fb-ready', () => buildJornadaSelect());
  } else {
    buildJornadaSelect();
  }
});
</script>
</body>
</html>
