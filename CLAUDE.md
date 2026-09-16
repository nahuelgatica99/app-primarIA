# CLAUDE.md — Guía del Proyecto PrimarIA

Este documento sirve como directriz técnica y estándar de desarrollo para asistentes de Inteligencia Artificial (Claude, Antigravity, etc.) y desarrolladores que interactúen o colaboren en el proyecto **PrimarIA**.

---

## 📌 1. Visión General del Proyecto

- **Nombre:** PrimarIA (Plataforma Educativa Interactiva - Modo Arcade Gamer).
- **Destinatario Principal:** Enzo y estudiantes de nivel primario (actualmente cursando **6to Grado** en Argentina).
- **Objetivo Pedagógico:** Ofrecer una plataforma web de estudio gamificada, accesible e interactiva que cubra los contenidos de las asignaturas escolares (**Ciencias Naturales**, **Ciencias Sociales** e **Inglés Técnico**) para preparar exámenes trimestrales sin frustración, mediante audiolibros interactivos, flashcards 3D, búsqueda terminológica instantánea y simulacros de examen con retroalimentación constructiva.
- **Enfoque de Diseño:** Estética Gamer / Arcade accesible (inspirada en consolas retro y cyberpunk apto para niños), alto contraste, tipografías legibles, feedback audiovisual dinámico y celebraciones de logros (medallas, XP y fanfarrias).

---

## 🛠️ 2. Stack Tecnológico & Arquitectura

- **Tecnologías:** 100% Vanilla Web Nativo:
  - **HTML5:** Estructura semántica, HUD superior interactivo, modales y renderizado dinámico.
  - **CSS3:** Variables CSS para temas por materia, Flexbox/Grid responsive, transformaciones espaciales 3D (`perspective`, `rotateY`, `backface-visibility`) y animaciones arcade.
  - **JavaScript (ES6+):** Código cliente modular, gestión de estados, manipulación de DOM nativo.
- **Dependencias Externas:** **CERO (0)** dependencias. No utiliza `npm`, `node`, `webpack`, `vite`, `React` ni librerías externas.
- **Audio & Accesibilidad:**
  - **Web Speech API (`SpeechSynthesisUtterance`):** Audiolibro fonético nativo en español para lectura de lecciones.
  - **Web Audio API (`AudioContext` / `ArcadeAudio`):** Síntesis de sonido en tiempo real mediante osciladores (sine, triangle, square, sawtooth) sin requerir archivos de audio externos (`.mp3` o `.wav`).
- **Persistencia de Datos:** `window.localStorage` para guardar perfiles de usuario, XP, niveles, rachas, insignias desbloqueadas y tabla de récords (*Leaderboard*).
- **Ejecución:** Compatible con cualquier navegador moderno abriendo directamente `index.html` (protocolo `file://`) o desplegado como sitio estático en **GitHub Pages**.

---

## 📂 3. Estructura del Repositorio

```
APP PrimarIA/
├── index.html       # Estructura del DOM, HUD superior, modales y contenedores de vista
├── style.css        # Sistema de estilos, temas de color por materia, animaciones 3D y responsive
├── script.js        # Motor de estados (cambiarCapa), audio sintético, lógica de perfiles y simulacros
├── datos.js         # Base de datos global unificada (CONTENIDOS_EDUCATIVOS)
├── README.md        # Documentación general y pedagógica del proyecto
└── CLAUDE.md        # Esta guía de directrices técnicas y estándares para IA
```

### Responsabilidades por Archivo:
* **`datos.js`:** Almacena la constante global `CONTENIDOS_EDUCATIVOS`. No contiene lógica de presentación ni llamadas a APIs del navegador; únicamente datos estructurados.
* **`script.js`:** Contiene toda la lógica del cliente:
  - `ArcadeAudio`: Gestor de SFX mediante osciladores nativos.
  - `LeaderboardManager`: Gestión del Salón de la Fama en `localStorage` (con soporte opcional para sincronización en la nube).
  - Máquina de Estados: `cambiarCapa(nuevaCapa)`, `volverAtras()`, control de flujo.
  - Renderizadores de vistas: `renderSeleccionMateria`, `renderSeleccionTrimestre`, `renderMenuEnfoque`, `renderGuia`, `renderBiblioteca`, `renderGlosario`, `renderSimulacroMenu`, `renderPreguntaSimulacro`, etc.
  - Sistema de Gamificación: Perfiles, XP, niveles, rachas y medallas.
* **`style.css`:** Define la apariencia global. Soporta variables temáticas dinámicas (`--rojo-principal`, `--verde-principal`, `--azul-principal`) para adaptar el color del HUD y botones según la materia seleccionada.

---

## 📋 4. Esquema de Datos (`datos.js`)

Todos los contenidos se organizan bajo el siguiente árbol JSON/JavaScript en `datos.js`:

```javascript
const CONTENIDOS_EDUCATIVOS = {
  "6to": {
    "naturales": {
      materia: "Ciencias Naturales",
      color: "var(--verde-principal)",
      trimestres: {
        "Q1": { guia: [...], glosario: [...], simulacro: [...] },
        "Q2": { guia: [...], glosario: [...], simulacro: [...] },
        "Q3": { guia: [...], glosario: [...], simulacro: [...] },
        "Q4": { guia: [], glosario: [], simulacro: [] }
      }
    },
    "sociales": {
      materia: "Ciencias Sociales",
      color: "var(--rojo-principal)",
      trimestres: {
        "Q1": { guia: [...], glosario: [...], simulacro: [...] },
        "Q2": { guia: [...], glosario: [...], simulacro: [...] },
        "Q3": { guia: [...], glosario: [...], simulacro: [...] },
        "Q4": { guia: [], glosario: [], simulacro: [] }
      }
    },
    "ingles": {
      materia: "Inglés Técnico",
      color: "#4f46e5",
      trimestres: {
        "Q1": { guia: [], glosario: [], simulacro: [] },
        "Q2": { guia: [...], glosario: [...], simulacro: [...] },
        "Q3": { guia: [...], glosario: [...], simulacro: [...] },
        "Q4": { guia: [], glosario: [], simulacro: [] }
      }
    }
  }
};
```

### Especificación de Estructuras Internas:

#### 1. Guía de Aprendizaje (`guia`)
Cada elemento del array representa una lección interactiva:
```javascript
{
  titulo: "Título descriptivo de la lección",
  texto: "Contenido redactado en prosa didáctica con etiquetas HTML (<b>, <br>, <i>) para resaltar conceptos clave.",
  resumen_corto: "Síntesis de 1 o 2 oraciones para el audiolibro rápido y la vista de Biblioteca.",
  preguntaValidacion: {
    q: "¿Pregunta de validación al pie de la lectura?",
    a: [
      "Opción A",
      "Opción B",
      "Opción C"
    ], // Exactamente 3 opciones
    c: 1 // Índice de la respuesta correcta (0, 1 o 2)
  }
}
```

#### 2. Glosario y Tarjetas Flashcards 3D (`glosario`)
Cada elemento representa un término del diccionario y una tarjeta flashcard:
```javascript
{
  termino: "Término Conceptual",
  def: "Definición clara, concisa y rigurosa adaptada al nivel escolar de 6to grado."
}
```

#### 3. Simulacro de Examen (`simulacro`)
Cada elemento es un reactivo de evaluación pedagógica:
```javascript
{
  pregunta: "¿Enunciado de la pregunta pedagógica?",
  opciones: [
    "Opción A",
    "Opción B",
    "Opción C"
  ], // Exactamente 3 opciones verosímiles
  correcta: 0, // Índice de la respuesta correcta (0, 1 o 2)
  pista: "Orientación deductiva que ayuda al alumno a reflexionar sin darle la respuesta servida.",
  explicacion: "Justificación didáctica que refuerza el aprendizaje inmediato tanto en aciertos como en fallos."
}
```

---

## ⚖️ 5. Reglas de Desarrollo e Invariantes Críticos

Al modificar o expandir la plataforma, cualquier asistente de IA o colaborador debe respetar estrictamente:

1. **Codificación de Archivos:** Guardar siempre en **UTF-8 sin BOM**. Nunca usar codificaciones ANSI o UTF-8 con BOM que puedan corromper caracteres acentuados o símbolos del idioma español.
2. **Preservación y Aislamiento:** Nunca sobreescribir ni romper materias o trimestres preexistentes. Al agregar un nuevo trimestre (por ejemplo `Q3` en Ciencias Sociales), asegurar que `Q1`, `Q2` e `Inglés` permanezcan intactos.
3. **Equilibrio de Llaves y Sintaxis:** Cualquier edición en `datos.js` debe verificar que la cantidad de llaves de apertura `{` coincida exactamente con las de cierre `}`, al igual que los corchetes `[` y `]`.
4. **Formato Estricto de Preguntas:**
   - Todo objeto de pregunta (`simulacro` o `preguntaValidacion`) debe contener **exactamente 3 opciones** en el array `opciones` / `a`.
   - El índice de respuesta correcta (`correcta` / `c`) debe ser estrictamente un entero entre `0` y `2`.
   - Las claves `pista` y `explicacion` son **obligatorias** en `simulacro` para asegurar el valor formativo.
5. **Navegación Dinámica de Trimestres:**
   - La pantalla de trimestres en `script.js` detecta automáticamente si el objeto del trimestre existe en `datos.js`. Al agregar `"Q3"`, el botón `3er Trimestre (T3) 🌟` se habilita automáticamente sin necesidad de parches adicionales en la UI.
6. **Mantenimiento de `Q4`:**
   - Incluso si un trimestre aún no tiene contenidos, debe inicializarse como `{ guia: [], glosario: [], simulacro: [] }` para evitar errores de referencia `undefined`.
7. **Tono Pedagógico:** Mantener un estilo motivador, respetuoso, riguroso pero accesible para un estudiante de 11-12 años en Argentina (ejemplos locales: La Forestal, Ferrocarril del Oeste, trenes a Retiro/Constitución, etc.).
8. **Usuario Predeterminado:** El jugador activo y predeterminado es exclusivamente **ENZO**, manteniendo limpia la lista de jugadores y el Salón de la Fama de registros de prueba.

---

## 🧪 6. Procedimiento de Verificación y Testing

Tras realizar cualquier cambio en `datos.js` o `script.js`, se debe ejecutar una verificación automatizada con Python:

```bash
# Script de verificación integral
python -c "
with open('datos.js', 'r', encoding='utf-8') as f:
    code = f.read()

assert code.count('{') == code.count('}'), 'Llaves desbalanceadas'
assert code.count('[') == code.count(']'), 'Corchetes desbalanceados'
print('Sintaxis y balance de llaves en datos.js: OK!')
"
```

O utilizar la suite de verificación completa ubicada en el directorio de trabajo:
```bash
python scratch/verify_all.py
```

Esta suite valida:
- Balance de delimitadores en `datos.js` y `script.js`.
- Integridad estructural de lecciones, glosarios y simulacros para todas las materias y trimestres.
- Cumplimiento de las 3 opciones por pregunta y validez de índices de respuesta.

---

## 🗺️ 7. Hoja de Ruta para Futuras Expansiones

- **Inglés Técnico Q3:** ✅ **COMPLETADO.** Cubre las Unidades 5 y 6 del libro escolar (*Police!* y *Mythical beasts*): vocabulario de apariencia y rostro, estructuras *used to* y *had to*, bestias míticas, partes corporales, *looks like*, comparativos y superlativos, con 6 lecciones interactivas, 30 tarjetas de glosario y 60 preguntas arcade.
- **Trimestre 4 (Q4):** Carga de contenidos de fin de ciclo lectivo cuando estén disponibles en el colegio para todas las asignaturas.
- **Multi-Grado:** Expansión del selector raíz a **7mo Grado** o grados inferiores utilizando la misma estructura modular en `datos.js`.
