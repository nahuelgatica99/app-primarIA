// --- VARIABLES DE ESTADO GLOBAL DE LA APP (DINÁMICAS) ---
let capaActual = "seleccion-grado"; 
let gradoSeleccionado = localStorage.getItem("grado") || null;
let materiaSeleccionada = null;
let trimestreSeleccionado = null;

let score = 0;
let maxScore = parseInt(localStorage.getItem('maxScore')) || 0;
let historial = JSON.parse(localStorage.getItem('historial')) || [];
let indicePreguntaExamen = 0; 
let timerInterval = null;
let timeLeft = 900; // 15 minutos en segundos
let totalSecondsUsed = 0;
let estadoAudio = "detenido"; 
let utteranceActual = null;
let indiceLeccionActual = 0;
let preguntasSimulacro = [];

// --- ASISTENTE DE CONTEXTO EDUCATIVO ---
function obtenerBloqueEducativo() {
  try {
    return CONTENIDOS_EDUCATIVOS[gradoSeleccionado][materiaSeleccionada].trimestres[trimestreSeleccionado];
  } catch(e) {
    return null;
  }
}

// --- SISTEMA AUDIO LIBRO (PAUSAR / REANUDAR) ---
function controlarAudiolibro(textoLimpio) {
  if (estadoAudio === "detenido") {
    window.speechSynthesis.cancel();
    const textoProcesado = textoLimpio.replace(/<[^>]*>/g, '');
    utteranceActual = new SpeechSynthesisUtterance(textoProcesado);
    utteranceActual.lang = 'es-419'; 
    
    const voces = window.speechSynthesis.getVoices();
    const vozLatina = voces.find(v => v.lang.includes('es-419') || v.lang.includes('es-MX') || v.lang.includes('es-US'));
    if (vozLatina) utteranceActual.voice = vozLatina;
    
    utteranceActual.onend = function() {
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

function actualizarBotonAudio() {
  const btn = document.getElementById('btn-audio-dinamico');
  if (!btn) return;
  if (estadoAudio === "reproduciendo") {
    btn.innerHTML = "⏸️ Pausar Audiolibro";
    btn.style.background = "#fef3c7";
  } else if (estadoAudio === "pausado") {
    btn.innerHTML = "▶️ Reanudar Audiolibro";
    btn.style.background = "#bbf7d0";
  } else {
    btn.innerHTML = "🔊 Escuchar Audiolibro";
    btn.style.background = "#fef3c7";
  }
}

// --- CONTROLADOR DE FLUJO PRINCIPAL ---
window.onload = function() {
  if (gradoSeleccionado === "6to") {
    irAPantallaMateria();
  } else {
    renderSeleccionGrado();
  }
};

function cambiarCapa(nuevaCapa) {
  capaActual = nuevaCapa;
  const timerCont = document.getElementById('timer-cont');
  if (nuevaCapa === 'simulacro') {
    timerCont.style.visibility = 'visible';
  } else {
    timerCont.style.visibility = 'hidden';
    if(timerInterval) { clearInterval(timerInterval); }
  }
  actualizarHUD();
}

function actualizarHUD() {
  document.getElementById('points').innerText = score;
  let rango = "Novato 🐣";
  if (score >= 50) rango = "Erudito 🎓";
  else if (score >= 25) rango = "Explorador 🗺️";
  document.getElementById('rank').innerText = rango;
}

// --- PANTALLA 1: SELECCIÓN DE GRADO ---
function renderSeleccionGrado() {
  cambiarCapa("seleccion-grado");
  document.getElementById('title').innerText = "¡BIENVENIDO! ELIGE TU GRADO";
  document.getElementById('display-area').innerHTML = `
    <p style="text-align:center; font-weight:bold;">Para comenzar a estudiar, haz clic en tu grado escolar:</p>
    <div class="grid-selector">
      <div class="card-option disabled">4to Grado 🔒</div>
      <div class="card-option disabled">5to Grado 🔒</div>
      <div class="card-option" onclick="seleccionarGrado('6to')">6to Grado 🎓</div>
      <div class="card-option disabled">7mo Grado 🔒</div>
    </div>
  `;
  document.getElementById('help-area').innerHTML = "";
  document.getElementById('action-buttons').innerHTML = "";
  document.getElementById('btn-back-contextual').style.display = "none";
}

function seleccionarGrado(grado) {
  gradoSeleccionado = grado;
  localStorage.setItem("grado", grado);
  irAPantallaMateria();
}

// --- ESCALABILIDAD FUTURA: SELECCIÓN DE MATERIA ---
function irAPantallaMateria() {
  cambiarCapa("seleccion-materia");
  document.getElementById('title').innerText = `SELECCIONAR ASIGNATURA`;
  
  // Generación dinámica de botones basada en las llaves del objeto datos.js
  let materiasDisponibles = Object.keys(CONTENIDOS_EDUCATIVOS[gradoSeleccionado]);
  
  let htmlMaterias = materiasDisponibles.map(key => {
    let m = CONTENIDOS_EDUCATIVOS[gradoSeleccionado][key];
    return `<div class="card-option" style="border-left:6px solid ${m.color || '#cbd5e1'};" onclick="seleccionarMateria('${key}')">${m.materia}</div>`;
  }).join('');

  document.getElementById('display-area').innerHTML = `
    <p style="text-align:center; font-weight:bold;">¿Qué asignatura deseas estudiar hoy?</p>
    <div class="grid-selector" style="grid-template-columns: 1fr; gap: 10px;">
      ${htmlMaterias}
    </div>
  `;
  
  const backBtn = document.getElementById('btn-back-contextual');
  backBtn.style.display = "block";
  backBtn.innerHTML = "🔙 Cambiar de Grado";
}

function seleccionarMateria(materia) {
  materiaSeleccionada = materia;
  irAPantallaTrimestre();
}

// --- PANTALLA 2: SELECCIÓN DE TRIMESTRE ---
function irAPantallaTrimestre() {
  cambiarCapa("seleccion-trimestre");
  let nombreMat = CONTENIDOS_EDUCATIVOS[gradoSeleccionado][materiaSeleccionada].materia;
  document.getElementById('title').innerText = `${nombreMat.toUpperCase()}`;
  document.getElementById('display-area').innerHTML = `
    <p style="text-align:center; font-weight:bold;">Selecciona qué bloque de contenidos deseas abordar:</p>
    <div class="grid-selector" style="grid-template-columns: repeat(2, 1fr); gap: 10px;">
      <div class="card-option" onclick="seleccionarTrimestre('Q1')">1er Trimestre (T1)</div>
      <div class="card-option" onclick="seleccionarTrimestre('Q2')">2do Trimestre (T2)</div>
      <div class="card-option disabled" style="opacity:0.6; cursor:not-allowed;">3er Trimestre (T3) 🔒</div>
      <div class="card-option disabled" style="opacity:0.6; cursor:not-allowed;">4to Trimestre (T4) 🔒</div>
    </div>
  `;
  
  const backBtn = document.getElementById('btn-back-contextual');
  backBtn.innerHTML = "🔙 Cambiar Asignatura";
}

function seleccionarTrimestre(t) {
  trimestreSeleccionado = t;
  irAMenuEnfoque();
}

// --- PANTALLA 3: CENTRAL DE ESTUDIO ---
function irAMenuEnfoque() {
  cambiarCapa("menu-enfoque");
  window.speechSynthesis.cancel(); 
  estadoAudio = "detenido"; 
  
  let infoMat = CONTENIDOS_EDUCATIVOS[gradoSeleccionado][materiaSeleccionada];
  document.getElementById('title').innerText = `${infoMat.materia} (${trimestreSeleccionado === 'Q1' ? 'T1' : 'T2'})`;
  document.getElementById('display-area').innerHTML = `
    <div style="text-align:center; margin-bottom:15px;">
      <h3>¿Qué quieres hacer hoy, Campeón?</h3>
    </div>
    <div style="display:flex; flex-direction:column; gap:10px;">
      <button class="card-option" style="border-color:#22c55e; padding:12px;" onclick="iniciarGuiaAprendizaje()">📘 Leer Guía Interactiva</button>
      <button class="card-option" style="border-color:#3b82f6; padding:12px;" onclick="verBibliotecaSeparada()">📚 Consultar Biblioteca (Resúmenes)</button>
      <button class="card-option" style="border-color:#facc15; padding:12px;" onclick="verGlosarioSeparado()">🔍 Glosario con Buscador</button>
      <button class="card-option" style="border-color:var(--rojo-principal); padding:12px;" onclick="iniciarMenuSimulacroOriginal()">🎯 Simulacro Contra Reloj</button>
    </div>
  `;
  
  const backBtn = document.getElementById('btn-back-contextual');
  backBtn.innerHTML = "🔙 Volver a Trimestres";
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
    document.getElementById('display-area').innerHTML = "<p style='text-align:center;'>Próximamente contenidos disponibles para este bloque.</p>";
    return;
  }

  if (indiceLeccionActual >= lecciones.length) {
    document.getElementById('title').innerText = "FIN DE LA GUÍA";
    document.getElementById('display-area').innerHTML = `
      <center style="padding:20px;">
        <h2>🎉 ¡Guía Completada! 🎉</h2>
        <p>Has recorrido todas las lecciones teóricas de esta unidad.</p>
        <button class="btn-nav" style="margin-top:15px;" onclick="iniciarMenuSimulacroOriginal()">🎯 Ir a los Simulacros</button>
      </center>
    `;
    return;
  }

  const leccion = lecciones[indiceLeccionActual];
  document.getElementById('title').innerText = `TEMA ${indiceLeccionActual + 1} DE ${lecciones.length}`;
  
  document.getElementById('display-area').innerHTML = `
    <div class="libro-contenedor">
      <h3 style="margin:0; color:var(--rojo-oscuro);">${leccion.titulo}</h3>
      <button id="btn-audio-dinamico" class="audio-control" onclick="controlarAudiolibro('${leccion.texto.replace(/'/g, "\\'").replace(/\n/g, ' ')}')">🔊 Escuchar Audiolibro</button>
      <div class="libro-texto">${leccion.texto}</div>
      
      <div class="validacion-box" id="box-validacion-tema">
        <h4 style="margin-top:0; color:#166534;">📝 Mini-Pregunta de Validación:</h4>
        <p><b>${leccion.preguntaValidacion.q}</b></p>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${leccion.preguntaValidacion.a.map((opcion, idx) => `
            <button class="btn-action" style="text-align:left;" onclick="validarRespuestaLectura(this, ${idx}, ${leccion.preguntaValidacion.c})">${opcion}</button>
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
}

function navegarLibro(direccion) {
  indiceLeccionActual += direccion;
  renderLeccionLibro();
}

function validarRespuestaLectura(botonElegido, elegido, correcto) {
  const fBox = document.getElementById('feedback-lectura');
  const hermanos = botonElegido.parentElement.querySelectorAll('button');
  hermanos.forEach(b => b.disabled = true);

  if (elegido === correcto) {
    score += 5;
    actualizarHUD();
    fBox.innerHTML = `<div class="feedback-box correct">¡Excelente! Respuesta correcta 🌟 (+5 pts)</div>`;
  } else {
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
    htmlContenido += "<p style='text-align:center; color:#64748b;'>No hay resúmenes para este bloque.</p>";
  } else {
    htmlContenido += lecciones.map(l => `
      <div style="background: white; border-radius: 10px; padding: 15px; margin-bottom: 12px; border-left: 5px solid #3b82f6; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <h4 style="margin: 0 0 5px 0; color: var(--rojo-oscuro); font-size:1.1rem;">${l.titulo}</h4>
        <p style="font-size: 0.98rem; line-height:1.4; margin: 5px 0; color:var(--texto-oscuro);">${l.resumen_corto || l.texto}</p>
      </div>
    `).join('');
  }
  
  document.getElementById('display-area').innerHTML = htmlContenido;
  const backBtn = document.getElementById('btn-back-contextual');
  backBtn.innerHTML = "🔙 Volver a la Central";
}

// --- MÓDULO: GLOSARIO INTELIGENTE ---
function verGlosarioSeparado() {
  cambiarCapa("glosario");
  document.getElementById('title').innerText = "🔍 GLOSARIO DE TÉRMINOS";
  
  document.getElementById('display-area').innerHTML = `
    <div style="margin-bottom: 12px;">
      <input type="text" id="input-busqueda-glosario" oninput="filtrarGlosario()" placeholder="✏️ Escribe una palabra para buscar..." style="width:100%; padding:10px; border-radius:8px; border:2px solid #cbd5e1; box-sizing:border-box; font-size:1rem;">
    </div>
    <div id="lista-terminos-glosario"></div>
  `;
  
  const backBtn = document.getElementById('btn-back-contextual');
  backBtn.innerHTML = "🔙 Volver a la Central";
  filtrarGlosario();
}

function filtrarGlosario() {
  const query = document.getElementById('input-busqueda-glosario').value.toLowerCase().trim();
  const listaContenedor = document.getElementById('lista-terminos-glosario');
  
  let bloque = obtenerBloqueEducativo();
  let terminos = (bloque && bloque.glosario) ? bloque.glosario : [];
  
  terminos.sort((a, b) => a.termino.localeCompare(b.termino));
  let filtrados = terminos.filter(t => t.termino.toLowerCase().includes(query) || t.def.toLowerCase().includes(query));
  
  if (filtrados.length === 0) {
    listaContenedor.innerHTML = `<p style="text-align:center; color:#64748b; margin-top:20px;">No se encontraron términos. 🔍</p>`;
    return;
  }
  
  listaContenedor.innerHTML = filtrados.map(t => `
    <div style="background: white; padding: 12px; border-radius: 8px; margin-bottom: 10px; border-left: 4px solid #facc15; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
      <strong style="color:var(--rojo-oscuro); font-size:1.05rem;">${t.termino}</strong>
      <p style="margin: 4px 0 0 0; font-size:0.92rem; color:var(--texto-oscuro);">${t.def}</p>
    </div>
  `).join('');
}

// --- MÓDULO: EXAMEN SIMULACRO CONTRA RELOJ ---
function iniciarMenuSimulacroOriginal() {
  cambiarCapa("simulacro-menu");
  window.speechSynthesis.cancel();
  
  document.getElementById('title').innerText = "EVALUACIONES Y SIMULACROS";
  document.getElementById('display-area').innerHTML = `
    <div style="text-align: center; margin-bottom: 15px;">
      <p><b>Récord Personal:</b> <span style="color:var(--rojo-principal); font-weight:bold;">${maxScore} Puntos</span></p>
      <p>Mídete en un entorno de examen real: 30 preguntas aleatorias, pistas con costo y reloj.</p>
    </div>
  `;
  
  document.getElementById('action-buttons').innerHTML = `
    <button class="btn-action" onclick="comenzarExamenContraReloj()">⏱️ Iniciar Simulacro Contra Reloj</button>
    <button class="btn-action" onclick="verHistorialIntentos()">📊 Ver Historial de Intentos</button>
  `;
  
  const backBtn = document.getElementById('btn-back-contextual');
  backBtn.innerHTML = "🔙 Volver a la Central";
}

function comenzarExamenContraReloj() {
  cambiarCapa("simulacro");
  score = 0;
  actualizarHUD();
  
  timeLeft = 900; // 15 Minutos restablecidos
  totalSecondsUsed = 0;
  
  document.getElementById('timer-cont').style.visibility = "visible";
  document.getElementById('timer').innerText = "15:00";
  document.getElementById('timer').classList.remove("timer-warning");

  clearInterval(timerInterval);
  timerInterval = setInterval(function() {
    timeLeft--;
    totalSecondsUsed++;
    
    let min = Math.floor(timeLeft / 60);
    let seg = timeLeft % 60;
    document.getElementById('timer').innerText = `${min}:${seg < 10 ? '0' : ''}${seg}`;

    if (timeLeft <= 60) document.getElementById('timer').classList.add("timer-warning");

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);

  let bloque = obtenerBloqueEducativo();
  let bancoPreguntasCompleto = (bloque && bloque.simulacro) ? bloque.simulacro : [];
  let copiaBanco = [...bancoPreguntasCompleto];
  
  // Algoritmo Fisher-Yates aleatorio
  for (let i = copiaBanco.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copiaBanco[i], copiaBanco[j]] = [copiaBanco[j], copiaBanco[i]];
  }
  
  preguntasSimulacro = copiaBanco.slice(0, 30); // Límite original de 30 preguntas
  indicePreguntaExamen = 0;

  renderPreguntaSimulacro();
}

function renderPreguntaSimulacro() {
  window.speechSynthesis.cancel();
  estadoAudio = "detenido";

  if (indicePreguntaExamen >= preguntasSimulacro.length) {
    clearInterval(timerInterval);
    endGame();
    return;
  }

  let p = preguntasSimulacro[indicePreguntaExamen];
  document.getElementById('title').innerText = `PREGUNTA ${indicePreguntaExamen + 1} DE ${preguntasSimulacro.length}`;

  let htmlOpciones = p.opciones.map((opc, i) => `
    <button class="card-option" style="text-align:left; padding:12px;" onclick="validarRespuestaSimulacro(${i})">
      ${String.fromCharCode(65 + i)}) ${opc}
    </button>
  `).join('');

  document.getElementById('display-area').innerHTML = `
    <div style="background:white; padding:15px; border-radius:10px; box-shadow:0 2px 4px rgba(0,0,0,0.05); margin-bottom:15px;">
      <p style="font-size:1.1rem; font-weight:bold; margin:0; color:var(--texto-oscuro);">${p.pregunta}</p>
    </div>
    <div style="display:flex; flex-direction:column; gap:10px;">
      ${htmlOpciones}
    </div>
  `;

  document.getElementById('help-area').innerHTML = `
    <div id="pista-contenedor" style="margin-top:10px;"></div>
  `;

  document.getElementById('action-buttons').innerHTML = `
    <button class="btn-audio" onclick="controlarAudiolibro('${p.pregunta}')">🔊 Escuchar</button>
    <button class="btn-action" style="background:#facc15; color:#854d0e;" onclick="pedirPista()">💡 Pedir Pista (-2 pts)</button>
  `;
}

function pedirPista() {
  let p = preguntasSimulacro[indicePreguntaExamen];
  if (!p || !p.pista) return;

  score = Math.max(0, score - 2); // Penalización restaurada
  actualizarHUD();

  document.getElementById('pista-contenedor').innerHTML = `
    <div class="hint-box">🔍 <b>Pista Ayuda:</b> ${p.pista}</div>
  `;
  
  const botonPista = document.querySelector("button[onclick='pedirPista()']");
  if (botonPista) {
    botonPista.disabled = true;
    botonPista.style.opacity = "0.5";
  }
}

function validarRespuestaSimulacro(indiceElegido) {
  let p = preguntasSimulacro[indicePreguntaExamen];
  const opciones = document.querySelectorAll('.card-option');
  opciones.forEach(btn => btn.removeAttribute('onclick'));

  let fBox = document.getElementById('pista-contenedor');

  if (indiceElegido === p.correcta) {
    score += 10; // +10 puntos por acierto original
    actualizarHUD();
    try { document.getElementById('sfx-win').play(); } catch(e){}
    fBox.innerHTML = `<div class="feedback-box correct">¡Excelente! Correcto 🌟 (+10 pts)</div>`;
  } else {
    fBox.innerHTML = `
      <div class="feedback-box incorrect">
        ❌ Incorrecto.<br>
        <span style="font-weight:normal; font-size:0.9rem;">La respuesta correcta era: <b>${p.opciones[p.correcta]}</b></span>
      </div>
    `;
  }

  document.getElementById('action-buttons').innerHTML = `
    <button class="btn-action" style="background:var(--rojo-principal);" onclick="avanzarExamen()">Siguiente Pregunta ➡️</button>
  `;
}

function avanzarExamen() {
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
    puntos: score,
    fecha: fechaActual,
    hora: horaActual,
    duracion: duracionTexto,
    bloque: trimestreSeleccionado
  };
  
  historial.push(intento);
  localStorage.setItem('historial', JSON.stringify(historial));

  let esNuevoRecord = false;
  if (score > maxScore) {
    maxScore = score;
    localStorage.setItem('maxScore', maxScore);
    esNuevoRecord = true;
    try {
      const trompetas = new Audio('https://www.myinstants.com/media/sounds/tada.mp3');
      trompetas.play();
    } catch(e){}
  }

  // Análisis cualitativo restaurado
  let diagnostico = "";
  let colorDiagnostico = "";
  let porcentajeAciertos = Math.round((score / (preguntasSimulacro.length * 10)) * 100) || 0;

  if (porcentajeAciertos >= 80) {
    diagnostico = "¡Impresionante! Tienes un dominio nivel Erudito. ¡Sigue así, Campeón!";
    colorDiagnostico = "#166534";
  } else if (porcentajeAciertos >= 50) {
    diagnostico = "¡Buen trabajo! Vas por excelente camino. Repasa un poco más las guías para dominar al 100%.";
    colorDiagnostico = "#854d0e";
  } else {
    diagnostico = "¡No te rindas! Te recomendamos volver a leer la guía interactiva e intentarlo de nuevo.";
    colorDiagnostico = "#991b1b";
  }

  document.getElementById('title').innerText = "ANÁLISIS DE RENDIMIENTO FINAL";
  document.getElementById('display-area').innerHTML = `
    <center style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
      <h3 style="margin:0; color: var(--texto-oscuro);">¡Simulacro Completado!</h3>
      
      <div style="font-size: 4rem; color: var(--rojo-principal); font-weight: bold; margin: 10px 0; line-height:1;">
        ${score} <span style="font-size:1.5rem; color:#64748b;">Pts</span>
      </div>
      
      ${esNuevoRecord ? `<div style="background:#fef08a; color:#854d0e; font-weight:bold; padding:5px 10px; border-radius:20px; font-size:0.9rem; display:inline-block; margin-bottom:15px; border:1px solid #facc15;">🏆 ¡NUEVO RÉCORD PERSONAL! 🏆</div>` : ''}

      <table style="width:100%; border-collapse:collapse; margin: 15px 0; text-align:left; font-size:0.95rem; color: var(--texto-oscuro);">
        <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:8px 0; color:#64748b;">Tiempo Empleado:</td><td style="padding:8px 0; font-weight:bold; text-align:right;">⏳ ${duracionTexto}</td></tr>
        <tr style="border-bottom:1px solid #e2e8f0;"><td style="padding:8px 0; color:#64748b;">Efectividad:</td><td style="padding:8px 0; font-weight:bold; text-align:right;">📈 ${porcentajeAciertos}%</td></tr>
      </table>

      <div style="background:#f8fafc; padding:12px; border-radius:8px; border-left:4px solid var(--rojo-principal); text-align:left; margin-top:10px;">
        <strong style="color:${colorDiagnostico}; font-size:0.95rem;">📊 Diagnóstico del Tutor:</strong>
        <p style="margin:4px 0 0 0; font-size:0.9rem; line-height:1.4; color:#334155;">${diagnostico}</p>
      </div>
    </center>
  `;

  document.getElementById('help-area').innerHTML = "";
  document.getElementById('action-buttons').innerHTML = `
    <button class="btn-action" style="background:#3b82f6;" onclick="iniciarMenuSimulacroOriginal()">🔄 Volver a Intentar / Ver Historial</button>
  `;
}

function verHistorialIntentos() {
  cambiarCapa("historial");
  document.getElementById('title').innerText = "HISTORIAL DE SIMULACROS";
  
  if (historial.length === 0) {
    document.getElementById('display-area').innerHTML = "<p style='text-align:center;'>Aún no tienes intentos guardados.</p>";
  } else {
    let htmlContenido = historial.map((i) => `
      <div style="background:white; padding:10px; border-radius:8px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center; border:1px solid #cbd5e1;">
        <div>
          <strong style="color:var(--rojo-principal)">${i.puntos} Pts</strong> - Bloque: ${i.bloque || "Q1"}<br>
          <small style="color:#64748b;">${i.fecha} a las ${i.hora}</small>
        </div>
        <span style="font-size:0.9rem; font-weight:bold; background:#f1f5f9; padding:4px 8px; border-radius:5px;">⏳ ${i.duracion}</span>
      </div>
    `).reverse().join('');
    document.getElementById('display-area').innerHTML = htmlContenido;
  }
  
  document.getElementById('action-buttons').innerHTML = "";
  const backBtn = document.getElementById('btn-back-contextual');
  backBtn.innerHTML = "🔙 Volver al Panel";
}

// --- BOTÓN CONTEXTUAL DE RETORNO INTELIGENTE ---
function volverAtras() {
  window.speechSynthesis.cancel();
  estadoAudio = "detenido";
  
  if (capaActual === "seleccion-materia") {
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
    if(confirm("¿Estás seguro de que deseas abandonar la evaluación en curso? Perderás tu progreso actual.")) {
      iniciarMenuSimulacroOriginal();
    }
  } else if (capaActual === "historial") {
    iniciarMenuSimulacroOriginal();
  }
}