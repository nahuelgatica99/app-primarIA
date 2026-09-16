// =============================================================================
// PLATAFORMA EDUCATIVA INTERACTIVA - MODO GAMER ARCADE
// =============================================================================

// --- GESTOR DE SONIDO ARCADE 100% OFFLINE (WEB AUDIO API) ---
const ArcadeAudio = {
  ctx: null,
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  },
  playSfx(type) {
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      if (type === 'acierto') {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(587.33, now); // D5
        osc.frequency.setValueAtTime(880.00, now + 0.08); // A5
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.linearRampToValueAtTime(0.25, now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.35);

      } else if (type === 'error') {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(160, now + 0.22);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);

      } else if (type === 'click') {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(480, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.06);

      } else if (type === 'fanfarria' || type === 'record' || type === 'logro') {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.value = freq;
          const noteTime = now + idx * 0.1;
          gain.gain.setValueAtTime(0.18, noteTime);
          gain.gain.exponentialRampToValueAtTime(0.001, noteTime + (idx === 3 ? 0.6 : 0.25));
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(noteTime);
          osc.stop(noteTime + (idx === 3 ? 0.6 : 0.25));
        });

      } else if (type === 'flip') {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(350, now);
        osc.frequency.linearRampToValueAtTime(520, now + 0.1);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.12);

      } else if (type === 'tick') {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(700, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.04);
      }
    } catch (e) {
      console.warn("AudioContext SFX error:", e);
    }
  }
};

// --- CONFIGURACIÓN DE SINCRONIZACIÓN EN LA NUBE (PARA GITHUB PAGES) ---
const CONFIG_CLOUD = {
  enabled: true,
  url: "https://primaria-ia-gatica-default-rtdb.firebaseio.com/leaderboard.json" 
};

// --- SALÓN DE LA FAMA (LEADERBOARD MULTIJUGADOR) ---
const LeaderboardManager = {
  claveLocal: 'arcade_leaderboard_v2',
  datosIniciales: [],
  obtenerUrl() {
    if (!CONFIG_CLOUD.url) return "";
    let u = CONFIG_CLOUD.url.trim();
    if (!u.endsWith('.json')) {
      u = u.replace(/\/$/, '') + '/leaderboard.json';
    }
    return u;
  },
  obtenerRecords() {
    try {
      const guardados = localStorage.getItem(this.claveLocal);
      if (guardados) {
        let lista = JSON.parse(guardados);
        if (Array.isArray(lista) && lista.length > 0) return lista;
      }
    } catch(e) {}
    return [];
  },
  guardarRecord(jugador, puntos, materia) {
    if (!jugador || puntos <= 0) return;
    let lista = this.obtenerRecords();
    const fecha = new Date().toLocaleDateString();
    lista.push({ 
      jugador: jugador.toUpperCase().trim(), 
      puntos: puntos, 
      materia: materia || "General", 
      fecha: fecha 
    });
    lista.sort((a, b) => b.puntos - a.puntos);
    lista = lista.slice(0, 15);
    localStorage.setItem(this.claveLocal, JSON.stringify(lista));

    if (CONFIG_CLOUD.enabled && this.obtenerUrl()) {
      this.enviarANube(lista);
    }
    return lista;
  },
  async sincronizarDesdeNube() {
    const url = this.obtenerUrl();
    if (!CONFIG_CLOUD.enabled || !url) return;
    try {
      const resp = await fetch(url);
      if (resp.ok) {
        const datosNube = await resp.json();
        if (Array.isArray(datosNube) && datosNube.length > 0) {
          localStorage.setItem(this.claveLocal, JSON.stringify(datosNube));
          if (capaActual === 'pantalla-inicio') renderPantallaInicio();
        } else if (datosNube === null || (Array.isArray(datosNube) && datosNube.length === 0)) {
          localStorage.removeItem(this.claveLocal);
          if (capaActual === 'pantalla-inicio') renderPantallaInicio();
        }
      }
    } catch(e) {
      console.warn("Sincronización en la nube en espera:", e);
    }
  },
  async enviarANube(lista) {
    const url = this.obtenerUrl();
    if (!url) return;
    try {
      await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lista)
      });
    } catch(e) {
      console.warn("Error enviando récord a la nube:", e);
    }
  }
};

// =============================================================================
// MOTOR DE MEDALLAS, LOGROS Y NIVELES (FASE 3)
// =============================================================================
const LISTA_LOGROS = [
  { id: "primer_paso", icono: "🐣", titulo: "Primer Paso", desc: "Completar tu primer estudio o desafío escolar." },
  { id: "tiro_certero", icono: "🎯", titulo: "Tiro Certero", desc: "Acertar una pregunta en un simulacro sin usar pistas." },
  { id: "rayo_veloz", icono: "⚡", titulo: "Rayo Veloz", desc: "Completar un Micro-Reto express de 5 preguntas." },
  { id: "mente_brillante", icono: "🎓", titulo: "Mente Brillante", desc: "Lograr 80% o más de aciertos en un desafío." },
  { id: "flashcards_fan", icono: "🃏", titulo: "Mente Mnemónica", desc: "Repasar y dominar 5 tarjetas de memoria en el glosario." },
  { id: "nuevo_record", icono: "👑", titulo: "Rey del Podio", desc: "Superar tu récord personal de puntos anterior." }
];

const LogrosManager = {
  obtenerLogrosJugador(jugador) {
    try {
      return JSON.parse(localStorage.getItem('logros_' + jugador)) || [];
    } catch(e) {
      return [];
    }
  },
  desbloquear(idLogro) {
    if (!jugadorActual) return;
    let guardados = this.obtenerLogrosJugador(jugadorActual);
    if (guardados.includes(idLogro)) return; // Ya desbloqueado

    guardados.push(idLogro);
    localStorage.setItem('logros_' + jugadorActual, JSON.stringify(guardados));

    const logro = LISTA_LOGROS.find(l => l.id === idLogro);
    if (logro) {
      this.mostrarToast(logro);
      ArcadeAudio.playSfx('logro');
      sumarXP(25, 'Logro Desbloqueado');
    }
  },
  mostrarToast(logro) {
    const toast = document.getElementById('toast-logro');
    if (!toast) return;
    document.getElementById('toast-icono').innerText = logro.icono;
    document.getElementById('toast-titulo').innerText = `¡Logro: ${logro.titulo}!`;
    document.getElementById('toast-desc').innerText = logro.desc;

    toast.style.display = 'flex';
    clearTimeout(this.timerToast);
    this.timerToast = setTimeout(() => {
      toast.style.display = 'none';
    }, 3500);
  }
};

function abrirModalMedallas() {
  ArcadeAudio.playSfx('click');
  document.getElementById('medallas-jugador').innerText = jugadorActual;
  const logrosJugador = LogrosManager.obtenerLogrosJugador(jugadorActual);
  const contenedor = document.getElementById('lista-medallas');

  contenedor.innerHTML = LISTA_LOGROS.map(l => {
    const desbloqueado = logrosJugador.includes(l.id);
    return `
      <div class="medalla-card ${desbloqueado ? 'desbloqueada' : 'bloqueada'}">
        <div class="medalla-icono">${desbloqueado ? l.icono : '🔒'}</div>
        <div class="medalla-info">
          <strong>${l.titulo}</strong>
          <small>${l.desc}</small>
          ${desbloqueado ? `<span style="color:#15803d; font-size:0.75rem; font-weight:bold; display:block;">✨ ¡Completado!</span>` : `<span style="color:#94a3b8; font-size:0.75rem;">Bloqueado</span>`}
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('modal-medallas').style.display = 'flex';
}

function cerrarModalMedallas() {
  ArcadeAudio.playSfx('click');
  document.getElementById('modal-medallas').style.display = 'none';
}

// --- SISTEMA DE NIVELES Y XP ACUMULATIVO ---
function obtenerXPJugador(jugador) {
  return parseInt(localStorage.getItem('xp_' + jugador)) || 0;
}

function calcularNivel(xp) {
  if (xp >= 500) return { nivel: 4, titulo: "Erudito Legendario 👑", badge: "Nv. 4 👑" };
  if (xp >= 250) return { nivel: 3, titulo: "Estratega ⚔️", badge: "Nv. 3 ⚔️" };
  if (xp >= 100) return { nivel: 2, titulo: "Explorador 🗺️", badge: "Nv. 2 🗺️" };
  return { nivel: 1, titulo: "Novato 🐣", badge: "Nv. 1 🐣" };
}

function sumarXP(cantidad, motivo) {
  if (!jugadorActual || cantidad <= 0) return;
  let xpActual = obtenerXPJugador(jugadorActual);
  const nivelPrevio = calcularNivel(xpActual);

  xpActual += cantidad;
  localStorage.setItem('xp_' + jugadorActual, xpActual);

  const nivelNuevo = calcularNivel(xpActual);
  if (nivelNuevo.nivel > nivelPrevio.nivel) {
    LogrosManager.mostrarToast({
      icono: "⭐",
      titulo: `¡SUBISTE AL NIVEL ${nivelNuevo.nivel}!`,
      desc: `Ahora tienes el rango de ${nivelNuevo.titulo}`
    });
    ArcadeAudio.playSfx('fanfarria');
  }

  actualizarHUD();
}

// --- GESTIÓN DE PERFILES Y JUGADORES ARCADE ---
let jugadores = ['ENZO'];
try {
  let guardados = JSON.parse(localStorage.getItem('arcade_jugadores'));
  if (Array.isArray(guardados)) {
    guardados = guardados.filter(j => j !== 'NICO' && j !== 'SANTI' && j !== 'MATEO');
    if (guardados.length > 0) jugadores = guardados;
  }
} catch(e) {}
if (!jugadores.includes('ENZO')) jugadores.unshift('ENZO');
localStorage.setItem('arcade_jugadores', JSON.stringify(jugadores));

let jugadorActual = 'ENZO';
localStorage.setItem('arcade_jugador_activo', 'ENZO');

function abrirSelectorJugador() {
  ArcadeAudio.playSfx('click');
  const lista = document.getElementById('lista-jugadores');
  lista.innerHTML = jugadores.map(j => `
    <button class="chip-jugador ${j === jugadorActual ? 'activo' : ''}" onclick="seleccionarJugadorModal('${j}')">
      ${j === jugadorActual ? '⭐' : '🎮'} ${j}
    </button>
  `).join('');
  document.getElementById('modal-jugador').style.display = 'flex';
}

function cerrarSelectorJugador() {
  ArcadeAudio.playSfx('click');
  document.getElementById('modal-jugador').style.display = 'none';
}

function seleccionarJugadorModal(nombre) {
  jugadorActual = nombre;
  localStorage.setItem('arcade_jugador_activo', nombre);
  maxScore = parseInt(localStorage.getItem('maxScore_' + jugadorActual)) || 0;
  actualizarHUD();
  cerrarSelectorJugador();
}

function agregarNuevoJugador() {
  const input = document.getElementById('input-nuevo-jugador');
  const nombre = input.value.trim().toUpperCase().slice(0, 12);
  if (!nombre) return;
  if (!jugadores.includes(nombre)) {
    jugadores.push(nombre);
    localStorage.setItem('arcade_jugadores', JSON.stringify(jugadores));
  }
  input.value = '';
  seleccionarJugadorModal(nombre);
  ArcadeAudio.playSfx('acierto');
}

// --- VARIABLES DE ESTADO GLOBAL DE LA APP ---
let capaActual = "pantalla-inicio"; 
let gradoSeleccionado = localStorage.getItem("grado") || null;
let materiaSeleccionada = null;
let trimestreSeleccionado = null;

let score = 0;
let maxScore = parseInt(localStorage.getItem('maxScore_' + jugadorActual)) || parseInt(localStorage.getItem('maxScore')) || 0;
let historial = JSON.parse(localStorage.getItem('historial')) || [];
let indicePreguntaExamen = 0; 
let timerInterval = null;
let timeLeft = 600;
let totalSecondsUsed = 0;
let estadoAudio = "detenido"; 
let utteranceActual = null;
let indiceLeccionActual = 0;
let preguntasSimulacro = [];

// --- CONFIGURACIÓN DE PARTIDA Y TDAH ---
let cantidadPreguntasElegida = 10;
let modoConReloj = true;
let pistaUsadaEnPreguntaActual = false;

// --- VELOCIDAD DEL AUDIOLIBRO ---
let velocidadAudio = parseFloat(localStorage.getItem('audio_speed')) || 1.0;

function cambiarVelocidadAudio(v) {
  ArcadeAudio.playSfx('click');
  velocidadAudio = v;
  localStorage.setItem('audio_speed', v);
  if (utteranceActual && estadoAudio === "reproduciendo") {
    // Si ya está reproduciendo, reiniciar con nueva velocidad
    window.speechSynthesis.cancel();
    estadoAudio = "detenido";
    if (capaActual === 'guia-aprendizaje') escucharLeccionActual();
    else if (capaActual === 'simulacro') escucharPreguntaActual();
  } else {
    actualizarBotonesVelocidad();
  }
}

function actualizarBotonesVelocidad() {
  const botones = document.querySelectorAll('.speed-btn');
  botones.forEach(b => {
    const val = parseFloat(b.getAttribute('data-speed'));
    b.classList.toggle('activo', val === velocidadAudio);
  });
}

// --- ASISTENTE DE CONTEXTO EDUCATIVO ---
function obtenerBloqueEducativo() {
  try {
    return CONTENIDOS_EDUCATIVOS[gradoSeleccionado][materiaSeleccionada].trimestres[trimestreSeleccionado];
  } catch(e) {
    return null;
  }
}

// --- SISTEMA AUDIO LIBRO (MULTIDIOMA Y CONTROL ROBUSTO) ---
function controlarAudiolibro(textoLimpio, idiomaForzado) {
  if (estadoAudio === "detenido") {
    window.speechSynthesis.cancel();
    const textoProcesado = (textoLimpio || "").replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    utteranceActual = new SpeechSynthesisUtterance(textoProcesado);

    const esIngles = idiomaForzado === 'en' || materiaSeleccionada === 'ingles';
    const voces = window.speechSynthesis.getVoices();

    if (esIngles) {
      utteranceActual.lang = 'en-US';
      const vozInglesa = voces.find(v => v.lang.includes('en-US') || v.lang.includes('en-GB') || v.lang.includes('en'));
      if (vozInglesa) utteranceActual.voice = vozInglesa;
    } else {
      utteranceActual.lang = 'es-419';
      const vozLatina = voces.find(v => v.lang.includes('es-419') || v.lang.includes('es-AR') || v.lang.includes('es-MX') || v.lang.includes('es-US') || v.lang.includes('es-ES'));
      if (vozLatina) utteranceActual.voice = vozLatina;
    }

    utteranceActual.rate = velocidadAudio; // Velocidad personalizada

    utteranceActual.onend = function() {
      estadoAudio = "detenido";
      actualizarBotonAudio();
    };

    utteranceActual.onerror = function() {
      estadoAudio = "detenido";
      actualizarBotonAudio();
    };

    window.speechSynthesis.speak(utteranceActual);
    estadoAudio = "reproduciendo";
  } else if (estadoAudio === "reproduciendo") {
    window.speechSynthesis.pause();
    estadoAudio = "pausado";
  } else if (estadoAudio === "pausado") {
    window.speechSynthesis.resume();
    estadoAudio = "reproduciendo";
  }
  actualizarBotonAudio();
}

function escucharLeccionActual() {
  const bloque = obtenerBloqueEducativo();
  if (!bloque || !bloque.guia || !bloque.guia[indiceLeccionActual]) return;
  const leccion = bloque.guia[indiceLeccionActual];
  controlarAudiolibro(leccion.texto);
}

function escucharPreguntaActual() {
  if (!preguntasSimulacro || !preguntasSimulacro[indicePreguntaExamen]) return;
  const p = preguntasSimulacro[indicePreguntaExamen];
  controlarAudiolibro(p.pregunta);
}

function actualizarBotonAudio() {
  const btn = document.getElementById('btn-audio-dinamico');
  if (!btn) return;
  const esExamen = (capaActual === 'simulacro');
  const sufijo = esExamen ? "Voz" : "Audiolibro";
  if (estadoAudio === "reproduciendo") {
    btn.innerHTML = `⏸️ Pausar ${sufijo}`;
    btn.style.background = "#fef3c7";
  } else if (estadoAudio === "pausado") {
    btn.innerHTML = `▶️ Reanudar ${sufijo}`;
    btn.style.background = "#bbf7d0";
  } else {
    btn.innerHTML = esExamen ? "🔊 Escuchar" : "🔊 Escuchar Audiolibro";
    btn.style.background = "#fef3c7";
  }
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = function() {
    window.speechSynthesis.getVoices();
  };
}

// --- CONTROLADOR DE FLUJO PRINCIPAL ---
window.onload = function() {
  try {
    localStorage.removeItem('arcade_leaderboard');
  } catch(e) {}
  LeaderboardManager.sincronizarDesdeNube();
  renderPantallaInicio();
};

function cambiarCapa(nuevaCapa) {
  capaActual = nuevaCapa;
  const hud = document.getElementById('hud');
  const titleEl = document.getElementById('title');
  const timerCont = document.getElementById('timer-cont');

  if (nuevaCapa === 'pantalla-inicio') {
    if (hud) hud.style.display = 'none';
    if (titleEl) titleEl.style.display = 'none';
  } else {
    if (hud) hud.style.display = 'flex';
    if (titleEl) titleEl.style.display = 'block';
  }

  if (nuevaCapa === 'simulacro') {
    if (timerCont) timerCont.style.visibility = modoConReloj ? 'visible' : 'hidden';
  } else {
    if (timerCont) timerCont.style.visibility = 'hidden';
    if(timerInterval) { clearInterval(timerInterval); }
  }
  actualizarHUD();
}

function actualizarHUD() {
  const playerTag = document.getElementById('player-name');
  if (playerTag) playerTag.innerText = jugadorActual || "JUGADOR";

  const pointsEl = document.getElementById('points');
  if (pointsEl) pointsEl.innerText = score;

  const xpActual = obtenerXPJugador(jugadorActual);
  const totalXpEl = document.getElementById('total-xp');
  if (totalXpEl) totalXpEl.innerText = xpActual;

  const infoNivel = calcularNivel(xpActual);
  const levelBadge = document.getElementById('hud-level-badge');
  if (levelBadge) levelBadge.innerText = infoNivel.badge;
  const playerLevelEl = document.getElementById('player-level');
  if (playerLevelEl) playerLevelEl.innerText = infoNivel.nivel;
}

// =============================================================================
// PANTALLA DE INICIO ARCADE (LOGIN Y SALÓN DE LA FAMA)
// =============================================================================
function renderPantallaInicio() {
  cambiarCapa("pantalla-inicio");
  const titleEl = document.getElementById('title');
  if (titleEl) titleEl.style.display = 'none';

  const records = LeaderboardManager.obtenerRecords();
  const medals = ["🥇", "🥈", "🥉"];
  const medalClasses = ["gold", "silver", "bronze"];

  let htmlRecords = "";
  if (!records || records.length === 0) {
    htmlRecords = `
      <div style="text-align:center; padding:18px 10px; color:var(--texto-secundario);">
        <span style="font-size:2rem; display:block; margin-bottom:6px;">🏆</span>
        <p style="margin:0; font-size:0.92rem; font-weight:bold; color:#f8fafc;">¡El Salón de la Fama está listo para estrenarse!</p>
        <p style="margin:4px 0 0 0; font-size:0.8rem; color:#94a3b8;">Juega tu primer simulacro para conquistar el puesto #1 del podio.</p>
      </div>
    `;
  } else {
    htmlRecords = records.map((r, idx) => {
      const medalla = idx < 3 ? medals[idx] : `${idx + 1}°`;
      const claseMedalla = idx < 3 ? medalClasses[idx] : "";
      return `
        <div class="podium-item ${claseMedalla}">
          <div class="podium-left">
            <span class="podium-medal">${medalla}</span>
            <div>
              <span class="podium-name">${r.jugador}</span>
              <div class="podium-meta">${r.materia} • ${r.fecha}</div>
            </div>
          </div>
          <span class="podium-score">${r.puntos} ⭐</span>
        </div>
      `;
    }).join('');
  }

  const htmlChips = jugadores.map(j => {
    const xpJ = obtenerXPJugador(j);
    const n = calcularNivel(xpJ);
    return `
      <button class="chip-jugador ${j === jugadorActual ? 'activo' : ''}" onclick="iniciarSesion('${j}')">
        ${j === jugadorActual ? '⭐' : '🎮'} ${j} <span style="font-size:0.75rem; color:#64748b;">(Nv.${n.nivel})</span>
      </button>
    `;
  }).join('');

  document.getElementById('display-area').innerHTML = `
    <div class="inicio-contenedor">
      <div class="arcade-hero">
        <h2>🕹️ PRIMAR-IA ARCADE</h2>
        <p>Aprende, colecciona medallas y compite por el podio</p>
      </div>

      <div class="login-card">
        <h3 style="margin:0 0 10px 0; color:var(--texto-oscuro); font-size:1.1rem;">👤 Inicia tu Sesión de Juego</h3>
        <input type="text" id="nombre-login" class="login-input" maxlength="12" value="${jugadorActual || ''}" placeholder="TU NOMBRE..." onkeydown="if(event.key==='Enter') entrarConInput()">
        <button class="btn-enter-game" onclick="entrarConInput()">🚀 ¡ENTRAR A JUGAR!</button>

        <div class="recent-players-section">
          <div class="recent-players-label">O selecciona tu perfil guardado:</div>
          <div class="recent-chips">
            ${htmlChips}
          </div>
        </div>
      </div>

      <div class="leaderboard-card">
        <div class="leaderboard-header">
          <h3 class="leaderboard-title">🏆 Salón de la Fama (Top Récords)</h3>
          <span style="font-size:0.8rem; color:#854d0e; font-weight:bold;">🔥 En Vivo</span>
        </div>
        <div class="podium-list">
          ${htmlRecords}
        </div>
      </div>
    </div>
  `;

  document.getElementById('help-area').innerHTML = "";
  document.getElementById('action-buttons').innerHTML = "";
  const backBtn = document.getElementById('btn-back-contextual');
  if (backBtn) backBtn.style.display = "none";
}

function entrarConInput() {
  const input = document.getElementById('nombre-login');
  if (!input) return;
  const nombre = input.value.trim().toUpperCase().slice(0, 12);
  if (!nombre) {
    input.focus();
    input.style.borderColor = "#ef4444";
    ArcadeAudio.playSfx('error');
    return;
  }
  iniciarSesion(nombre);
}

function iniciarSesion(nombre) {
  jugadorActual = nombre.toUpperCase().trim();
  localStorage.setItem('arcade_jugador_activo', jugadorActual);

  if (!jugadores.includes(jugadorActual)) {
    jugadores.push(jugadorActual);
    localStorage.setItem('arcade_jugadores', JSON.stringify(jugadores));
  }

  maxScore = parseInt(localStorage.getItem('maxScore_' + jugadorActual)) || 0;
  actualizarHUD();
  ArcadeAudio.playSfx('acierto');
  renderSeleccionGrado();
}

function cerrarSesion() {
  ArcadeAudio.playSfx('click');
  window.speechSynthesis.cancel();
  estadoAudio = "detenido";

  localStorage.removeItem('grado');
  gradoSeleccionado = null;
  materiaSeleccionada = null;
  trimestreSeleccionado = null;
  score = 0;

  renderPantallaInicio();
}

// --- PANTALLA 1: SELECCIÓN DE GRADO ---
function renderSeleccionGrado() {
  cambiarCapa("seleccion-grado");
  const infoNivel = calcularNivel(obtenerXPJugador(jugadorActual));

  document.getElementById('title').innerText = `¡HOLA ${jugadorActual}! (${infoNivel.titulo})`;
  document.getElementById('display-area').innerHTML = `
    <p style="text-align:center; font-weight:bold;">Para comenzar tu entrenamiento, selecciona tu nivel:</p>
    <div class="grid-selector">
      <div class="card-option disabled">4to Grado 🔒</div>
      <div class="card-option disabled">5to Grado 🔒</div>
      <div class="card-option" onclick="seleccionarGrado('6to')">6to Grado 🎓</div>
      <div class="card-option disabled">7mo Grado 🔒</div>
    </div>
  `;
  document.getElementById('help-area').innerHTML = "";
  document.getElementById('action-buttons').innerHTML = "";

  const backBtn = document.getElementById('btn-back-contextual');
  backBtn.style.display = "block";
  backBtn.innerHTML = "🚪 Cambiar de Jugador";
  backBtn.onclick = cerrarSesion;
}

function seleccionarGrado(grado) {
  ArcadeAudio.playSfx('click');
  gradoSeleccionado = grado;
  localStorage.setItem("grado", grado);
  irAPantallaMateria();
}

// --- SELECCIÓN DE MATERIA ---
function irAPantallaMateria() {
  cambiarCapa("seleccion-materia");
  document.getElementById('title').innerText = `SELECCIONAR ASIGNATURA`;
  
  let materiasDisponibles = Object.keys(CONTENIDOS_EDUCATIVOS[gradoSeleccionado] || {});
  
  let htmlMaterias = materiasDisponibles.map(key => {
    let m = CONTENIDOS_EDUCATIVOS[gradoSeleccionado][key];
    return `<div class="card-option" style="border-left:6px solid ${m.color || '#cbd5e1'};" onclick="seleccionarMateria('${key}')">${m.materia}</div>`;
  }).join('');

  document.getElementById('display-area').innerHTML = `
    <p style="text-align:center; font-weight:bold;">Hola <b>${jugadorActual}</b>, ¿qué asignatura deseas estudiar hoy?</p>
    <div class="grid-selector" style="grid-template-columns: 1fr; gap: 10px;">
      ${htmlMaterias}
    </div>
  `;
  
  const backBtn = document.getElementById('btn-back-contextual');
  backBtn.style.display = "block";
  backBtn.innerHTML = "🔙 Cambiar de Grado";
  backBtn.onclick = volverAtras;
}

function seleccionarMateria(materia) {
  ArcadeAudio.playSfx('click');
  materiaSeleccionada = materia;
  irAPantallaTrimestre();
}

// --- SELECCIÓN DE TRIMESTRE ---
function irAPantallaTrimestre() {
  cambiarCapa("seleccion-trimestre");
  let matObj = CONTENIDOS_EDUCATIVOS[gradoSeleccionado][materiaSeleccionada];
  let nombreMat = matObj ? matObj.materia : "Asignatura";
  document.getElementById('title').innerText = `${nombreMat.toUpperCase()}`;

  const trimestres = (matObj && matObj.trimestres) ? matObj.trimestres : {};
  const hasQ1 = trimestres["Q1"] && ((trimestres["Q1"].guia && trimestres["Q1"].guia.length > 0) || (trimestres["Q1"].simulacro && trimestres["Q1"].simulacro.length > 0));
  const hasQ2 = trimestres["Q2"] && ((trimestres["Q2"].guia && trimestres["Q2"].guia.length > 0) || (trimestres["Q2"].simulacro && trimestres["Q2"].simulacro.length > 0));
  const hasQ3 = trimestres["Q3"] && ((trimestres["Q3"].guia && trimestres["Q3"].guia.length > 0) || (trimestres["Q3"].simulacro && trimestres["Q3"].simulacro.length > 0));

  document.getElementById('display-area').innerHTML = `
    <p style="text-align:center; font-weight:bold;">Selecciona qué bloque de contenidos deseas abordar:</p>
    <div class="grid-selector" style="grid-template-columns: repeat(2, 1fr); gap: 10px;">
      <div class="card-option ${!hasQ1 ? 'disabled' : ''}" onclick="${hasQ1 ? "seleccionarTrimestre('Q1')" : ''}">
        1er Trimestre (T1) ${!hasQ1 ? '🚧' : '⚡'}
      </div>
      <div class="card-option ${!hasQ2 ? 'disabled' : ''}" onclick="${hasQ2 ? "seleccionarTrimestre('Q2')" : ''}">
        2do Trimestre (T2) ${!hasQ2 ? '🚧' : '🔥'}
      </div>
      <div class="card-option ${!hasQ3 ? 'disabled' : ''}" onclick="${hasQ3 ? "seleccionarTrimestre('Q3')" : ''}">
        3er Trimestre (T3) ${!hasQ3 ? '🚧' : '🌟'}
      </div>
      <div class="card-option disabled" style="opacity:0.6; cursor:not-allowed;">4to Trimestre (T4) 🔒</div>
    </div>
  `;
  
  const backBtn = document.getElementById('btn-back-contextual');
  backBtn.innerHTML = "🔙 Cambiar Asignatura";
  backBtn.onclick = volverAtras;
}

function seleccionarTrimestre(t) {
  ArcadeAudio.playSfx('click');
  trimestreSeleccionado = t;
  irAMenuEnfoque();
}

// --- CENTRAL DE ESTUDIO (HUB) ---
function irAMenuEnfoque() {
  cambiarCapa("menu-enfoque");
  window.speechSynthesis.cancel(); 
  estadoAudio = "detenido"; 
  
  let infoMat = CONTENIDOS_EDUCATIVOS[gradoSeleccionado][materiaSeleccionada];
  let bloque = obtenerBloqueEducativo();
  let totalPreguntas = (bloque && bloque.simulacro) ? bloque.simulacro.length : 0;
  let totalLecciones = (bloque && bloque.guia) ? bloque.guia.length : 0;

  const etiquetaTrimestre = (trimestreSeleccionado || "").replace('Q', 'T');
  document.getElementById('title').innerText = `${infoMat.materia} (${etiquetaTrimestre})`;
  document.getElementById('display-area').innerHTML = `
    <div style="text-align:center; margin-bottom:12px;">
      <h3 style="margin: 0; color: var(--texto-oscuro);">¿Qué modo quieres jugar hoy, ${jugadorActual}? 🎮</h3>
      <small style="color: #64748b;">${totalLecciones} temas • ${totalPreguntas} preguntas disponibles</small>
    </div>
    <div style="display:flex; flex-direction:column; gap:10px;">
      <button class="card-option" style="border-color:#22c55e; padding:12px; text-align:left;" onclick="iniciarGuiaAprendizaje()">
        📘 <b>Leer Guía Interactiva</b> (con audiolibro)
      </button>
      <button class="card-option" style="border-color:#3b82f6; padding:12px; text-align:left;" onclick="verBibliotecaSeparada()">
        📚 <b>Consultar Biblioteca</b> (resúmenes rápidos)
      </button>
      <button class="card-option" style="border-color:#facc15; padding:12px; text-align:left;" onclick="verGlosarioSeparado()">
        🔍 <b>Glosario y Flashcards</b> (modo memoria)
      </button>
      <button class="card-option" style="border-color:var(--rojo-principal); padding:12px; text-align:left;" onclick="iniciarMenuSimulacroOriginal()">
        🎯 <b>Simulacros y Desafíos</b> (con micro-retos)
      </button>
    </div>
  `;
  
  const backBtn = document.getElementById('btn-back-contextual');
  backBtn.innerHTML = "🔙 Volver a Trimestres";
  backBtn.onclick = volverAtras;
}

// --- MÓDULO: GUÍA DE APRENDIZAJE INTERACTIVA ---
function iniciarGuiaAprendizaje() {
  cambiarCapa("guia-aprendizaje");
  indiceLeccionActual = 0;
  renderLeccionLibro();
}

function renderLeccionLibro() {
  window.speechSynthesis.cancel();
  estadoAudio = "detenido";

  let bloque = obtenerBloqueEducativo();
  let lecciones = (bloque && bloque.guia) ? bloque.guia : [];

  if (lecciones.length === 0) {
    document.getElementById('display-area').innerHTML = `
      <div style="text-align:center; padding:30px 10px;">
        <h3>🚧 ¡Nivel en Desarrollo!</h3>
        <p style="color:#64748b;">Próximamente los contenidos teóricos de este bloque estarán disponibles.</p>
        <button class="btn-nav" style="margin-top:15px;" onclick="irAMenuEnfoque()">🔙 Elegir otro bloque</button>
      </div>
    `;
    return;
  }

  if (indiceLeccionActual >= lecciones.length) {
    ArcadeAudio.playSfx('fanfarria');
    sumarXP(30, 'Guía Teórica Completada');
    LogrosManager.desbloquear('primer_paso');

    document.getElementById('title').innerText = "¡GUÍA COMPLETADA!";
    document.getElementById('display-area').innerHTML = `
      <div style="text-align:center; padding:20px;">
        <h2>🎉 ¡Misión Cumplida, ${jugadorActual}! 🎉</h2>
        <p>Has recorrido con éxito todas las lecciones teóricas de esta unidad.</p>
        <div style="font-size:3rem; margin:15px 0;">🏆 ⭐ 🚀</div>
        <p style="color:#15803d; font-weight:bold;">¡Ganaste +30 XP de experiencia!</p>
        <button class="btn-nav" style="margin-top:15px;" onclick="iniciarMenuSimulacroOriginal()">🎯 ¡A los Simulacros!</button>
      </div>
    `;
    return;
  }

  const leccion = lecciones[indiceLeccionActual];
  document.getElementById('title').innerText = `TEMA ${indiceLeccionActual + 1} DE ${lecciones.length}`;
  
  document.getElementById('display-area').innerHTML = `
    <div class="libro-contenedor">
      <h3 style="margin:0; color:var(--rojo-oscuro);">${leccion.titulo}</h3>
      
      <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px;">
        <button id="btn-audio-dinamico" class="btn-audio" onclick="escucharLeccionActual()">🔊 Escuchar Audiolibro</button>
        <div class="speed-control-box">
          <span style="font-size:0.75rem; color:#64748b;">Vel:</span>
          <button class="speed-btn ${velocidadAudio === 0.85 ? 'activo' : ''}" data-speed="0.85" onclick="cambiarVelocidadAudio(0.85)">0.85x</button>
          <button class="speed-btn ${velocidadAudio === 1.0 ? 'activo' : ''}" data-speed="1.0" onclick="cambiarVelocidadAudio(1.0)">1.0x</button>
          <button class="speed-btn ${velocidadAudio === 1.2 ? 'activo' : ''}" data-speed="1.2" onclick="cambiarVelocidadAudio(1.2)">1.2x</button>
        </div>
      </div>

      <div class="libro-texto">${leccion.texto}</div>
      
      <div class="validacion-box" id="box-validacion-tema">
        <h4 style="margin-top:0; color:#166534;">📝 Mini-Pregunta de Validación:</h4>
        <p><b>${leccion.preguntaValidacion.q}</b></p>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${leccion.preguntaValidacion.a.map((opcion, idx) => `
            <button class="btn-action" style="text-align:left; padding:12px;" onclick="validarRespuestaLectura(this, ${idx}, ${leccion.preguntaValidacion.c})">
              ${opcion}
            </button>
          `).join('')}
        </div>
        <div id="feedback-lectura"></div>
      </div>

      <div style="display:flex; justify-content:space-between; margin-top:15px; gap:10px;">
        <button class="btn-action" style="flex:1; font-weight:bold;" onclick="navegarLibro(-1)" ${indiceLeccionActual === 0 ? 'disabled' : ''}>⬅️ Anterior</button>
        <button class="btn-action" style="flex:1; font-weight:bold; background:var(--rojo-claro); color:white; border:none;" onclick="navegarLibro(1)">Siguiente ➡️</button>
      </div>
    </div>
  `;
  
  const backBtn = document.getElementById('btn-back-contextual');
  backBtn.innerHTML = "🏠 Salir a la Central";
  backBtn.onclick = volverAtras;
}

function navegarLibro(direccion) {
  ArcadeAudio.playSfx('click');
  indiceLeccionActual += direccion;
  renderLeccionLibro();
}

function validarRespuestaLectura(botonElegido, elegido, correcto) {
  const fBox = document.getElementById('feedback-lectura');
  const hermanos = botonElegido.parentElement.querySelectorAll('button');
  hermanos.forEach(b => b.disabled = true);

  if (elegido === correcto) {
    score += 5;
    sumarXP(5, 'Mini-Pregunta de Lectura');
    actualizarHUD();
    ArcadeAudio.playSfx('acierto');
    botonElegido.classList.add('correct');
    fBox.innerHTML = `<div class="feedback-box correct">¡Excelente, ${jugadorActual}! Respuesta correcta 🌟 (+5 pts / +5 XP)</div>`;
    LogrosManager.desbloquear('primer_paso');
  } else {
    ArcadeAudio.playSfx('error');
    botonElegido.classList.add('incorrect');
    if (hermanos[correcto]) hermanos[correcto].classList.add('correct-answer');
    fBox.innerHTML = `<div class="feedback-box incorrect">¡Buen intento! Revisa los textos teóricos de arriba para consolidar tu conocimiento.</div>`;
  }
}

// --- MÓDULO: BIBLIOTECA DE RESÚMENES ---
function verBibliotecaSeparada() {
  cambiarCapa("biblioteca");
  document.getElementById('title').innerText = "📚 BIBLIOTECA CONCEPTUAL";
  
  let bloque = obtenerBloqueEducativo();
  let lecciones = (bloque && bloque.guia) ? bloque.guia : [];
  
  let htmlContenido = "<p style='text-align:center; font-style:italic;'>Resúmenes conceptuales rápidos de la unidad:</p>";
  
  if (lecciones.length === 0) {
    htmlContenido += "<p style='text-align:center; color:#64748b;'>No hay resúmenes cargados para este bloque.</p>";
  } else {
    htmlContenido += lecciones.map(l => `
      <div style="background: var(--fondo-card); border-radius: 14px; padding: 15px; margin-bottom: 12px; border: 1.5px solid var(--borde-gamer); border-left: 5px solid #38bdf8; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
        <h4 style="margin: 0 0 5px 0; color: #38bdf8; font-size:1.1rem;">${l.titulo}</h4>
        <p style="font-size: 0.98rem; line-height:1.5; margin: 5px 0; color:var(--texto-principal);">${l.resumen_corto || l.texto}</p>
      </div>
    `).join('');
  }
  
  document.getElementById('display-area').innerHTML = htmlContenido;
  const backBtn = document.getElementById('btn-back-contextual');
  backBtn.innerHTML = "🔙 Volver a la Central";
  backBtn.onclick = volverAtras;
}

// =============================================================================
// MÓDULO: GLOSARIO Y TARJETAS FLASHCARD 3D (FASE 3)
// =============================================================================
let modoGlosario = "lista"; // "lista" o "flashcard"
let indiceFlashcard = 0;
let flashcardsDominadas = 0;

function verGlosarioSeparado() {
  cambiarCapa("glosario");
  document.getElementById('title').innerText = "🔍 GLOSARIO DE TÉRMINOS";
  
  let bloque = obtenerBloqueEducativo();
  let terminos = (bloque && bloque.glosario) ? bloque.glosario : [];

  document.getElementById('display-area').innerHTML = `
    <div style="display:flex; justify-content:center; gap:8px; margin-bottom:12px;">
      <button class="btn-action ${modoGlosario === 'lista' ? 'btn-nav' : ''}" style="flex:1; padding:8px;" onclick="cambiarModoGlosario('lista')">
        📋 Modo Lista
      </button>
      <button class="btn-action ${modoGlosario === 'flashcard' ? 'btn-nav' : ''}" style="flex:1; padding:8px;" onclick="cambiarModoGlosario('flashcard')">
        🃏 Tarjetas Flashcard 3D
      </button>
    </div>
    <div id="contenedor-glosario-dinamico"></div>
  `;
  
  const backBtn = document.getElementById('btn-back-contextual');
  backBtn.innerHTML = "🔙 Volver a la Central";
  backBtn.onclick = volverAtras;

  renderContenidoGlosario();
}

function cambiarModoGlosario(modo) {
  ArcadeAudio.playSfx('click');
  modoGlosario = modo;
  verGlosarioSeparado();
}

function renderContenidoGlosario() {
  const contenedor = document.getElementById('contenedor-glosario-dinamico');
  if (!contenedor) return;
  
  let bloque = obtenerBloqueEducativo();
  let terminos = (bloque && bloque.glosario) ? bloque.glosario : [];

  if (terminos.length === 0) {
    contenedor.innerHTML = `<p style="text-align:center; color:#64748b; margin-top:20px;">No hay términos cargados en este bloque.</p>`;
    return;
  }

  if (modoGlosario === 'lista') {
    contenedor.innerHTML = `
      <div style="margin-bottom: 12px;">
        <input type="text" id="input-busqueda-glosario" oninput="filtrarGlosario()" placeholder="✏️ Escribe una palabra para buscar..." style="width:100%; padding:10px; border-radius:8px; border:2px solid #cbd5e1; box-sizing:border-box; font-size:1rem;">
      </div>
      <div id="lista-terminos-glosario"></div>
    `;
    filtrarGlosario();
  } else {
    // Modo Flashcards
    if (indiceFlashcard >= terminos.length) indiceFlashcard = 0;
    const t = terminos[indiceFlashcard];

    contenedor.innerHTML = `
      <div style="text-align:center;">
        <div style="display:flex; justify-content:space-between; font-size:0.85rem; color:#64748b; font-weight:bold; margin-bottom:6px;">
          <span>Tarjeta ${indiceFlashcard + 1} de ${terminos.length}</span>
          <span>⭐ Dominadas: ${flashcardsDominadas}</span>
        </div>

        <div class="flashcard-wrapper" onclick="girarTarjetaFlashcard()">
          <div id="flashcard-card-el" class="flashcard-card">
            <div class="flashcard-front">
              <span style="font-size:2rem; margin-bottom:6px;">💡</span>
              <div class="flashcard-term">${t.termino}</div>
              <div class="flashcard-hint">👆 Toca para dar vuelta y ver la definición</div>
            </div>
            <div class="flashcard-back">
              <span style="font-size:1.8rem; margin-bottom:6px;">📖</span>
              <b style="color:#1e3a8a; margin-bottom:4px;">${t.termino}:</b>
              <div class="flashcard-def">${t.def}</div>
              <div class="flashcard-hint">👆 Toca para volver al frente</div>
            </div>
          </div>
        </div>

        <div style="display:flex; gap:8px; margin-top:10px;">
          <button class="btn-action" style="flex:1;" onclick="navegarFlashcard(-1)">⬅️ Anterior</button>
          <button class="btn-action" style="background:#22c55e; color:white; border:none; flex:1.2; font-weight:bold;" onclick="marcarTarjetaDominada()">
            ⭐ ¡Me la sé! (+3 XP)
          </button>
          <button class="btn-action" style="flex:1;" onclick="navegarFlashcard(1)">Siguiente ➡️</button>
        </div>
      </div>
    `;
  }
}

function girarTarjetaFlashcard() {
  ArcadeAudio.playSfx('flip');
  const card = document.getElementById('flashcard-card-el');
  if (card) card.classList.toggle('flipped');
}

function navegarFlashcard(dir) {
  ArcadeAudio.playSfx('click');
  let bloque = obtenerBloqueEducativo();
  let terminos = (bloque && bloque.glosario) ? bloque.glosario : [];
  indiceFlashcard = (indiceFlashcard + dir + terminos.length) % terminos.length;
  renderContenidoGlosario();
}

function marcarTarjetaDominada() {
  ArcadeAudio.playSfx('acierto');
  flashcardsDominadas++;
  sumarXP(3, 'Tarjeta Flashcard dominada');

  if (flashcardsDominadas >= 5) {
    LogrosManager.desbloquear('flashcards_fan');
  }

  navegarFlashcard(1);
}

function filtrarGlosario() {
  const query = (document.getElementById('input-busqueda-glosario') ? document.getElementById('input-busqueda-glosario').value.toLowerCase().trim() : '');
  const listaContenedor = document.getElementById('lista-terminos-glosario');
  if (!listaContenedor) return;
  
  let bloque = obtenerBloqueEducativo();
  let terminos = (bloque && bloque.glosario) ? bloque.glosario : [];
  
  let copiaTerminos = [...terminos].sort((a, b) => a.termino.localeCompare(b.termino));
  let filtrados = copiaTerminos.filter(t => t.termino.toLowerCase().includes(query) || t.def.toLowerCase().includes(query));
  
  if (filtrados.length === 0) {
    listaContenedor.innerHTML = `<p style="text-align:center; color:#64748b; margin-top:20px;">No se encontraron términos. 🔍</p>`;
    return;
  }
  
  listaContenedor.innerHTML = filtrados.map(t => `
    <div style="background: var(--fondo-card); padding: 14px; border-radius: 14px; margin-bottom: 10px; border: 1.5px solid var(--borde-gamer); border-left: 5px solid #facc15; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
      <strong style="color:#fde047; font-size:1.05rem;">${t.termino}</strong>
      <p style="margin: 4px 0 0 0; font-size:0.95rem; line-height:1.45; color:var(--texto-principal);">${t.def}</p>
    </div>
  `).join('');
}

// =============================================================================
// MÓDULO: EXAMEN SIMULACRO Y MICRO-RETOS (FASE 2 Y 3)
// =============================================================================
function iniciarMenuSimulacroOriginal() {
  cambiarCapa("simulacro-menu");
  window.speechSynthesis.cancel();
  
  let bloque = obtenerBloqueEducativo();
  let totalPreguntas = (bloque && bloque.simulacro) ? bloque.simulacro.length : 0;

  document.getElementById('title').innerText = "CONFIGURADOR DE DESAFÍOS";

  if (totalPreguntas === 0) {
    document.getElementById('display-area').innerHTML = `
      <div style="text-align:center; padding:30px 15px;">
        <h3>🚧 ¡Nivel en Desarrollo!</h3>
        <p style="color:#64748b;">Aún no se cargaron preguntas de simulacro para este bloque específico.</p>
        <button class="btn-nav" style="margin-top:15px;" onclick="irAMenuEnfoque()">🔙 Elegir otro bloque</button>
      </div>
    `;
    document.getElementById('action-buttons').innerHTML = "";
    return;
  }

  if (cantidadPreguntasElegida > totalPreguntas) {
    cantidadPreguntasElegida = totalPreguntas >= 10 ? 10 : (totalPreguntas >= 5 ? 5 : totalPreguntas);
  }

  document.getElementById('display-area').innerHTML = `
    <div style="text-align: center; margin-bottom: 12px;">
      <p style="margin:4px 0;"><b>Jugador:</b> <span style="color:var(--rojo-principal); font-weight:bold;">🎮 ${jugadorActual}</span></p>
      <p style="margin:4px 0;"><b>Récord Personal:</b> <span style="color:#2563eb; font-weight:bold;">${maxScore} Puntos ⭐</span></p>
    </div>

    <div class="selector-modos-box">
      <div class="selector-modos-label">🎯 1. Elige la longitud de tu partida:</div>
      <div class="selector-modos">
        <div class="modo-btn ${cantidadPreguntasElegida === 5 ? 'activo' : ''}" onclick="seleccionarModoPreguntas(5)">
          <span class="modo-titulo">⚡ 5 Preg.</span>
          <span class="modo-sub">Micro-Reto (3m)</span>
        </div>
        <div class="modo-btn ${cantidadPreguntasElegida === 10 ? 'activo' : ''}" onclick="seleccionarModoPreguntas(10)">
          <span class="modo-titulo">🎯 10 Preg.</span>
          <span class="modo-sub">Estándar (6m)</span>
        </div>
        <div class="modo-btn ${cantidadPreguntasElegida === 20 ? 'activo' : ''}" onclick="seleccionarModoPreguntas(20)">
          <span class="modo-titulo">🏆 20 Preg.</span>
          <span class="modo-sub">Completo (12m)</span>
        </div>
      </div>

      <div class="toggle-reloj-box">
        <div>
          <b style="font-size:0.9rem; color:#1e293b;">⏱️ Modo de Tiempo:</b>
          <div style="font-size:0.75rem; color:#64748b;">${modoConReloj ? 'Contra reloj con alarma arcade' : 'Tranquilo sin presión de tiempo'}</div>
        </div>
        <button class="btn-toggle-reloj ${modoConReloj ? 'activo' : ''}" onclick="toggleModoReloj()">
          ${modoConReloj ? '⏳ Con Reloj' : '🧘 Modo Zen'}
        </button>
      </div>
    </div>
  `;
  
  document.getElementById('action-buttons').innerHTML = `
    <button class="btn-action" style="background:#22c55e; color:white; border:none; padding:14px; font-size:1.05rem;" onclick="comenzarExamenConfigurado()">
      🚀 ¡Comenzar Desafío (${cantidadPreguntasElegida} preguntas)!
    </button>
    <button class="btn-action" onclick="verHistorialIntentos()">📊 Ver Historial de Intentos</button>
  `;
  
  const backBtn = document.getElementById('btn-back-contextual');
  backBtn.innerHTML = "🔙 Volver a la Central";
  backBtn.onclick = volverAtras;
}

function seleccionarModoPreguntas(cant) {
  ArcadeAudio.playSfx('click');
  cantidadPreguntasElegida = cant;
  iniciarMenuSimulacroOriginal();
}

function toggleModoReloj() {
  ArcadeAudio.playSfx('click');
  modoConReloj = !modoConReloj;
  iniciarMenuSimulacroOriginal();
}

function comenzarExamenConfigurado() {
  ArcadeAudio.playSfx('click');
  cambiarCapa("simulacro");
  score = 0;
  actualizarHUD();
  
  totalSecondsUsed = 0;
  
  let bloque = obtenerBloqueEducativo();
  let bancoPreguntasCompleto = (bloque && bloque.simulacro) ? bloque.simulacro : [];
  let copiaBanco = [...bancoPreguntasCompleto];
  
  for (let i = copiaBanco.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copiaBanco[i], copiaBanco[j]] = [copiaBanco[j], copiaBanco[i]];
  }
  
  const cantidadReal = Math.min(cantidadPreguntasElegida, copiaBanco.length);
  preguntasSimulacro = copiaBanco.slice(0, cantidadReal);
  indicePreguntaExamen = 0;

  timeLeft = Math.max(180, cantidadReal * 60);

  const timerCont = document.getElementById('timer-cont');
  const timerEl = document.getElementById('timer');
  
  if (modoConReloj) {
    timerCont.style.visibility = "visible";
    let min = Math.floor(timeLeft / 60);
    let seg = timeLeft % 60;
    timerEl.innerText = `${min}:${seg < 10 ? '0' : ''}${seg}`;
    timerEl.classList.remove("timer-warning");
  } else {
    timerCont.style.visibility = "hidden";
  }

  clearInterval(timerInterval);
  timerInterval = setInterval(function() {
    totalSecondsUsed++;

    if (modoConReloj) {
      timeLeft--;
      let min = Math.floor(timeLeft / 60);
      let seg = timeLeft % 60;
      timerEl.innerText = `${min}:${seg < 10 ? '0' : ''}${seg}`;

      if (timeLeft <= 60) {
        timerEl.classList.add("timer-warning");
        if (timeLeft <= 10 && timeLeft > 0) {
          ArcadeAudio.playSfx('tick');
        }
      }

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        endGame();
      }
    }
  }, 1000);

  renderPreguntaSimulacro();
}

function renderPreguntaSimulacro() {
  window.speechSynthesis.cancel();
  estadoAudio = "detenido";
  pistaUsadaEnPreguntaActual = false;

  if (indicePreguntaExamen >= preguntasSimulacro.length) {
    clearInterval(timerInterval);
    endGame();
    return;
  }

  let p = preguntasSimulacro[indicePreguntaExamen];
  const progresoPct = Math.round(((indicePreguntaExamen + 1) / preguntasSimulacro.length) * 100);

  document.getElementById('title').innerText = `DESAFÍO EN CURSO`;

  let htmlOpciones = p.opciones.map((opc, i) => `
    <button class="card-option" style="text-align:left; padding:12px;" onclick="validarRespuestaSimulacro(${i})">
      <b>${String.fromCharCode(65 + i)})</b> ${opc}
    </button>
  `).join('');

  document.getElementById('display-area').innerHTML = `
    <div class="progress-container">
      <div class="progress-header">
        <span>Pregunta ${indicePreguntaExamen + 1} de ${preguntasSimulacro.length}</span>
        <span>${progresoPct}%</span>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width: ${progresoPct}%;"></div>
      </div>
    </div>

    <div style="background: var(--fondo-card); padding: 15px; border-radius: 14px; border: 1.5px solid var(--borde-gamer); box-shadow: 0 4px 12px rgba(0,0,0,0.3); margin-bottom: 12px;">
      <p style="font-size:1.05rem; font-weight:bold; margin:0; color:var(--texto-principal); line-height:1.4;">${p.pregunta}</p>
    </div>
    <div style="display:flex; flex-direction:column; gap:10px;">
      ${htmlOpciones}
    </div>
  `;

  document.getElementById('help-area').innerHTML = `
    <div id="pista-contenedor" style="margin-top:10px;"></div>
  `;

  document.getElementById('action-buttons').innerHTML = `
    <div style="display:flex; align-items:center; gap:8px;">
      <button id="btn-audio-dinamico" class="btn-audio" onclick="escucharPreguntaActual()">🔊 Escuchar</button>
      <div class="speed-control-box">
        <button class="speed-btn ${velocidadAudio === 0.85 ? 'activo' : ''}" data-speed="0.85" onclick="cambiarVelocidadAudio(0.85)">0.85x</button>
        <button class="speed-btn ${velocidadAudio === 1.0 ? 'activo' : ''}" data-speed="1.0" onclick="cambiarVelocidadAudio(1.0)">1.0x</button>
        <button class="speed-btn ${velocidadAudio === 1.2 ? 'activo' : ''}" data-speed="1.2" onclick="cambiarVelocidadAudio(1.2)">1.2x</button>
      </div>
    </div>
    <button class="btn-action" style="background:#fef08a; color:#854d0e; font-weight:bold; margin-top:8px;" onclick="pedirPista()">💡 Pedir Pista (Gratis)</button>
  `;
}

function pedirPista() {
  ArcadeAudio.playSfx('click');
  let p = preguntasSimulacro[indicePreguntaExamen];
  if (!p || !p.pista) return;

  pistaUsadaEnPreguntaActual = true;

  document.getElementById('pista-contenedor').innerHTML = `
    <div class="hint-box">💡 <b>Pista de Apoyo:</b> ${p.pista}</div>
  `;
  
  const botonPista = document.querySelector("button[onclick='pedirPista()']");
  if (botonPista) {
    botonPista.disabled = true;
    botonPista.style.opacity = "0.5";
    botonPista.innerText = "💡 Pista Activada";
  }
}

function validarRespuestaSimulacro(indiceElegido) {
  let p = preguntasSimulacro[indicePreguntaExamen];
  const opciones = document.querySelectorAll('#display-area .card-option');
  opciones.forEach(btn => btn.removeAttribute('onclick'));

  let fBox = document.getElementById('pista-contenedor');
  const esCorrecto = (indiceElegido === p.correcta);

  if (opciones[indiceElegido]) {
    opciones[indiceElegido].classList.add(esCorrecto ? 'correct' : 'incorrect');
  }

  if (esCorrecto) {
    let puntosGanados = 10;
    let mensajeBonus = "";
    if (pistaUsadaEnPreguntaActual) {
      puntosGanados = 7;
      mensajeBonus = "¡Muy bien deducido con la pista! 💡 (+7 pts / +7 XP)";
    } else {
      puntosGanados = 10;
      mensajeBonus = "¡Excelente! Acierto Maestro 🌟 (+10 pts / +10 XP)";
      LogrosManager.desbloquear('tiro_certero');
    }

    score += puntosGanados;
    sumarXP(puntosGanados, 'Respuesta Simulacro');
    actualizarHUD();
    ArcadeAudio.playSfx('acierto');
    fBox.innerHTML = `
      <div class="feedback-box correct">
        ${mensajeBonus}
        ${p.explicacion ? `<div style="margin-top:6px; font-size:0.88rem; color:#166534; border-top:1px dashed #86efac; padding-top:5px;">💡 <b>Explicación:</b> ${p.explicacion}</div>` : ''}
      </div>
    `;
  } else {
    ArcadeAudio.playSfx('error');
    if (opciones[p.correcta]) {
      opciones[p.correcta].classList.add('correct-answer');
    }
    fBox.innerHTML = `
      <div class="feedback-box incorrect">
        ❌ Incorrecto.<br>
        <span style="font-weight:normal; font-size:0.9rem;">La respuesta correcta era: <b>${p.opciones[p.correcta]}</b></span>
        ${p.explicacion ? `<div style="margin-top:6px; font-size:0.88rem; color:#334155; border-top:1px dashed #fca5a5; padding-top:5px;">💡 <b>Explicación:</b> ${p.explicacion}</div>` : ''}
      </div>
    `;
  }

  document.getElementById('action-buttons').innerHTML = `
    <button class="btn-action" style="background:var(--rojo-principal); color:white;" onclick="avanzarExamen()">Siguiente Pregunta ➡️</button>
  `;
}

function avanzarExamen() {
  ArcadeAudio.playSfx('click');
  indicePreguntaExamen++;
  renderPreguntaSimulacro();
}

function endGame() {
  clearInterval(timerInterval);
  window.speechSynthesis.cancel();
  estadoAudio = "detenido";
  document.getElementById('timer-cont').style.visibility = "hidden";

  const min = Math.floor(totalSecondsUsed / 60);
  const seg = totalSecondsUsed % 60;
  const duracionTexto = `${min}m ${seg}s`;

  const ahora = new Date();
  const fechaActual = ahora.toLocaleDateString();
  const horaActual = ahora.getHours() + ":" + (ahora.getMinutes() < 10 ? '0' : '') + ahora.getMinutes();
  
  const intento = {
    jugador: jugadorActual,
    puntos: score,
    fecha: fechaActual,
    hora: horaActual,
    duracion: duracionTexto,
    bloque: trimestreSeleccionado
  };
  
  historial.push(intento);
  localStorage.setItem('historial', JSON.stringify(historial));

  let matObj = (CONTENIDOS_EDUCATIVOS[gradoSeleccionado] && CONTENIDOS_EDUCATIVOS[gradoSeleccionado][materiaSeleccionada]) ? CONTENIDOS_EDUCATIVOS[gradoSeleccionado][materiaSeleccionada] : null;
  let nombreMateria = matObj ? matObj.materia : "General";
  LeaderboardManager.guardarRecord(jugadorActual, score, nombreMateria);

  // Evaluar logros de fin de partida
  LogrosManager.desbloquear('primer_paso');
  if (preguntasSimulacro.length === 5) {
    LogrosManager.desbloquear('rayo_veloz');
  }

  let esNuevoRecord = false;
  if (score > maxScore) {
    maxScore = score;
    localStorage.setItem('maxScore_' + jugadorActual, maxScore);
    localStorage.setItem('maxScore', maxScore);
    esNuevoRecord = true;
    ArcadeAudio.playSfx('fanfarria');
    LogrosManager.desbloquear('nuevo_record');
  } else {
    ArcadeAudio.playSfx('acierto');
  }

  let totalPosible = Math.max(1, preguntasSimulacro.length) * 10;
  let porcentajeAciertos = Math.round((score / totalPosible) * 100) || 0;

  if (porcentajeAciertos >= 80) {
    LogrosManager.desbloquear('mente_brillante');
  }

  let diagnostico = "";
  let colorDiagnostico = "";

  if (porcentajeAciertos >= 80) {
    diagnostico = `¡Impresionante, ${jugadorActual}! Tienes un dominio nivel Erudito. ¡Sigue así, Campeón!`;
    colorDiagnostico = "#166534";
  } else if (porcentajeAciertos >= 50) {
    diagnostico = `¡Buen trabajo, ${jugadorActual}! Vas por excelente camino. Repasa un poco más las guías para dominar al 100%.`;
    colorDiagnostico = "#854d0e";
  } else {
    diagnostico = `¡No te rindas, ${jugadorActual}! Te recomendamos volver a leer la guía interactiva e intentarlo de nuevo.`;
    colorDiagnostico = "#991b1b";
  }

  document.getElementById('title').innerText = "ANÁLISIS FINAL DE PARTIDA";
  document.getElementById('display-area').innerHTML = `
    <div style="background: var(--fondo-card); border: 1.5px solid var(--borde-gamer); padding: 20px; border-radius: 18px; box-shadow: 0 6px 20px rgba(0,0,0,0.4); text-align:center;">
      <h3 style="margin:0; color: var(--texto-principal);">¡Desafío Completado! 🎮</h3>
      <p style="margin:5px 0; color:#94a3b8;">Jugador: <b>${jugadorActual}</b> • ${preguntasSimulacro.length} Preguntas</p>
      
      <div style="font-size: 3.5rem; color: var(--rojo-principal); font-weight: bold; margin: 10px 0; line-height:1; text-shadow: 0 0 15px rgba(244,63,94,0.4);">
        ${score} <span style="font-size:1.5rem; color:#94a3b8;">Pts</span>
      </div>
      
      ${esNuevoRecord ? `<div style="background:rgba(250,204,21,0.2); color:#fde047; font-weight:bold; padding:6px 14px; border-radius:20px; font-size:0.95rem; display:inline-block; margin-bottom:15px; border:1px solid #facc15; animation:popIn 0.3s; text-shadow: 0 0 8px rgba(250,204,21,0.5);">🏆 ¡NUEVO RÉCORD PERSONAL! 🏆</div>` : ''}

      <table style="width:100%; border-collapse:collapse; margin: 15px 0; text-align:left; font-size:0.95rem; color: var(--texto-principal);">
        <tr style="border-bottom:1px solid #25334d;"><td style="padding:8px 0; color:#94a3b8;">Tiempo Empleado:</td><td style="padding:8px 0; font-weight:bold; text-align:right;">⏳ ${duracionTexto}</td></tr>
        <tr style="border-bottom:1px solid #25334d;"><td style="padding:8px 0; color:#94a3b8;">Efectividad:</td><td style="padding:8px 0; font-weight:bold; text-align:right;">📈 ${porcentajeAciertos}%</td></tr>
      </table>

      <div style="background:#111a2c; padding:12px; border-radius:12px; border: 1px solid var(--borde-gamer); border-left:4px solid var(--rojo-principal); text-align:left; margin-top:10px;">
        <strong style="color:${colorDiagnostico}; font-size:0.95rem;">📊 Diagnóstico del Tutor:</strong>
        <p style="margin:4px 0 0 0; font-size:0.9rem; line-height:1.4; color:#cbd5e1;">${diagnostico}</p>
      </div>
    </div>
  `;

  document.getElementById('help-area').innerHTML = "";
  document.getElementById('action-buttons').innerHTML = `
    <button class="btn-action" style="background:#3b82f6; color:white; border:none;" onclick="iniciarMenuSimulacroOriginal()">🔄 Volver a Intentar / Cambiar Modo</button>
    <button class="btn-action" style="background:#facc15; color:#854d0e; font-weight:bold; margin-top:6px;" onclick="renderPantallaInicio()">🏆 Ver Salón de la Fama</button>
  `;
}

function verHistorialIntentos() {
  cambiarCapa("historial");
  document.getElementById('title').innerText = "HISTORIAL DE SIMULACROS";
  
  if (historial.length === 0) {
    document.getElementById('display-area').innerHTML = "<p style='text-align:center;'>Aún no tienes intentos guardados.</p>";
  } else {
    let htmlContenido = [...historial].reverse().map((i) => `
      <div style="background:white; padding:10px 14px; border-radius:8px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center; border:1px solid #cbd5e1;">
        <div>
          <strong style="color:var(--rojo-principal)">${i.puntos} Pts</strong> ${i.jugador ? `(${i.jugador})` : ''} - Bloque: ${i.bloque || "Q1"}<br>
          <small style="color:#64748b;">${i.fecha} a las ${i.hora}</small>
        </div>
        <span style="font-size:0.9rem; font-weight:bold; background:#f1f5f9; padding:4px 8px; border-radius:5px;">⏳ ${i.duracion}</span>
      </div>
    `).join('');
    document.getElementById('display-area').innerHTML = htmlContenido;
  }
  
  document.getElementById('action-buttons').innerHTML = "";
  const backBtn = document.getElementById('btn-back-contextual');
  backBtn.innerHTML = "🔙 Volver al Panel";
  backBtn.onclick = volverAtras;
}

// --- RETORNO INTELIGENTE Y NAVEGACIÓN ---
function volverAtras() {
  ArcadeAudio.playSfx('click');
  window.speechSynthesis.cancel();
  estadoAudio = "detenido";
  
  if (capaActual === "seleccion-grado") {
    cerrarSesion();
  } else if (capaActual === "seleccion-materia") {
    localStorage.removeItem("grado");
    gradoSeleccionado = null;
    renderSeleccionGrado();
  } else if (capaActual === "seleccion-trimestre") {
    materiaSeleccionada = null;
    irAPantallaMateria();
  } else if (capaActual === "menu-enfoque") {
    irAPantallaTrimestre();
  } else if (capaActual === "guia-aprendizaje" || capaActual === "simulacro-menu" || capaActual === "biblioteca" || capaActual === "glosario") {
    irAMenuEnfoque();
  } else if (capaActual === "simulacro") {
    if(confirm("¿Estás seguro de que deseas abandonar la partida en curso? Perderás tu progreso actual.")) {
      iniciarMenuSimulacroOriginal();
    }
  } else if (capaActual === "historial") {
    iniciarMenuSimulacroOriginal();
  }
}