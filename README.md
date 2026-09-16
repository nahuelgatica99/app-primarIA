# 🎓 PrimarIA — Plataforma Educativa Interactiva (Modo Arcade Gamer)

¡Bienvenido a **PrimarIA**! Una plataforma web educativa, modular, responsiva y accesible diseñada especialmente para estudiantes de educación primaria (focalizada actualmente en **6to Grado**).

El sistema transforma el estudio tradicional y la preparación para exámenes en una experiencia inmersiva, interactiva y lúdica a través de **audiolibros guiados**, **tarjetas de memorización 3D (Flashcards)**, **diccionarios reactivos** y **simulacros de examen arcade** con efectos de sonido retro generados 100% offline.

---

## 🌟 Características Principales

1. **Autonomía y Autoaprendizaje:** El alumno explora, lee, escucha y se auto-evalúa a su propio ritmo sin depender de supervisión constante.
2. **Accesibilidad Universal con Audiolibro (TTS):** Integración nativa con la **Web Speech API** que permite la lectura fonética de lecciones completas en español para alumnos con dificultades de lectura, dislexia o fatiga visual.
3. **Efectos de Sonido Retro Offline (Web Audio API):** Generador sintético de sonido en tiempo real sin requerir archivos `.mp3` ni conexión a internet (aciertos, errores, fanfarrias de nivel, giros de tarjetas y clics).
4. **Gamificación Integral:**
   - **Perfil Predeterminado:** Configurado con **Enzo** como jugador principal (con soporte para sumar nuevos perfiles).
   - **Puntos & Niveles:** Sistema de experiencia (+XP), niveles de maestría y rangos dinámicos (Novato, Explorador, Erudito, Maestro, Leyenda).
   - **Medallero y Logros:** Desbloqueo de insignias especiales con notificaciones flotantes (*Toast Notifications*).
   - **Salón de la Fama (Leaderboard):** Tabla de récords históricos locales y sincronización opcional con la nube.
5. **Retroalimentación Pedagógica Inmediata:** Cada pregunta de simulacro cuenta con pistas orientativas y explicaciones pedagógicas que se despliegan automáticamente al responder para fijar el aprendizaje en el acto.
6. **Diseño Mobile-First & Estética Gamer Arcade (Dark Mode):** Interfaz inmersiva de alto impacto inspirada en consolas retro-modernas (estilo Nintendo Switch / Arcade cósmico), con fondo oscuro para evitar la fatiga visual, textos en blanco nítido (`#f8fafc`), botones táctiles 3D con relieve físico, podio del Salón de la Fama y adaptación al 100% del alto de pantalla de smartphones (`100dvh`) sin recortes arbitrarios.
7. **Zero Dependencies (Sin Dependencias Externas):** 100% HTML5, CSS3 y JavaScript moderno nativo. No requiere `npm`, `node`, ni servidores backend. Funciona directamente abriendo `index.html` en cualquier navegador moderno o alojado en GitHub Pages.

---

## 📚 Mapa Curricular Completo (6to Grado)

La plataforma cuenta con un árbol académico exhaustivo estructurado en `datos.js`:

### 🔬 Ciencias Naturales
* **1er Trimestre (Q1): La Vida, la Célula y los Sistemas del Cuerpo Humano**
  - **7 Lecciones:** Niveles de organización biológica, La Célula vegetal y animal, El Sistema Digestivo, El Sistema Circulatorio y la Sangre, El Sistema Respiratorio, El Sistema Excretor, El Sistema Reproductor Humano.
  - **Glosario:** 30 términos científicos clave.
  - **Simulacro:** 100 preguntas de opción múltiple pedagógicas con pistas y explicaciones.
* **2do Trimestre (Q2): Ecosistemas, Tramas Tróficas y Adaptaciones**
  - **7 Lecciones:** Ecosistemas y Factores Bióticos/Abióticos, Productores y Fotosíntesis, Consumidores y Descomponedores, Cadenas y Redes Tróficas, Relaciones Interespecíficas (Mutualismo, Parasitismo, etc.), Adaptaciones Morfológicas y Fisiológicas, Impacto Humano y Conservación.
  - **Glosario:** 30 términos científicos clave.
  - **Simulacro:** 70 preguntas pedagógicas con pistas y explicaciones.
* **3er Trimestre (Q3): Pubertad, Reproducción Humana y Salud Sexual**
  - **7 Lecciones:** Pubertad y Adolescencia (cambios corporales y emocionales), Hormonas Sexuales (Testosterona, Estrógenos, Progesterona), Sistema Reproductor Masculino, Sistema Reproductor Femenino, Gametos y Ciclo Menstrual (fecundación, ovulación y regla), Embarazo y Parto (cigoto, embrión y feto), Salud Sexual y Prevención de ITS (uso de preservativo e higiene).
  - **Glosario:** 30 términos científicos clave.
  - **Simulacro:** 70 preguntas pedagógicas con pistas y explicaciones.

---

### 🌍 Ciencias Sociales
* **1er Trimestre (Q1): Ambientes, Recursos Naturales y Riesgos**
  - **6 Lecciones:** Ambientes y Recursos Naturales, Tipos de Recursos (Renovables y No Renovables), Actores Sociales y el Rol del Estado, Problemas Ambientales Locales y Globales, Amenazas Naturales Internas y Atmosféricas, Vulnerabilidad Social frente a Desastres.
  - **Glosario:** 22 términos históricos y geográficos.
  - **Simulacro:** 100 preguntas pedagógicas.
* **2do Trimestre (Q2): La Construcción del Estado Nacional Argentino (1852-1880)**
  - **10 Lecciones:** La Confederación Argentina y el Estado de Buenos Aires, La Constitución Nacional de 1853, La Batalla de Pavón y la Unificación Política, Las Presidencias Históricas (Mitre, Sarmiento, Avellaneda), La Ley 1420 de Educación Común, Organización Institucional, Fronteras y Campañas Militares, La Integración Territorial de 1880.
  - **Glosario:** 21 términos históricos.
  - **Simulacro:** 100 preguntas pedagógicas.
* **3er Trimestre (Q3): La Argentina Agroexportadora y la Era Industrial (1880-1914)**
  - **7 Lecciones:** La Revolución Industrial (1ra y 2da Fase: vapor, carbón, electricidad y petróleo), Revolución en Transportes y Comunicaciones (barcos a vapor con cámaras frigoríficas, telégrafo submarino), La División Internacional del Trabajo (países centrales vs. periféricos), El Modelo Agroexportador en Argentina ("El Granero del Mundo", tierras pampeanas, capitales británicos y mano de obra), La Expansión Ferroviaria (red radial de 28.000 km convergiendo en puertos), Primeras Industrias y Desigualdades Regionales (frigoríficos, molinos harineros, La Forestal vs. economías del interior), La Gran Inmigración Ultramarina (Ley Avellaneda de 1876, Hotel de Inmigrantes, conventillos, tango y lunfardo).
  - **Glosario:** 30 términos económicos e históricos.
  - **Simulacro:** 70 preguntas pedagógicas con pistas y explicaciones.

---

### 🇬🇧 Inglés Técnico
* **2do Trimestre (Q2): Past Simple & Past Continuous**
  - **4 Lecciones:** Pasado Simple con Verbos Regulares (reglas de sufijo `-ed`, duplicación CVC, terminación en consonante + y, negativos con `didn't`, preguntas con `Did`), Verbos Irregulares comunes (`went`, `ate`, `saw`, etc.), Pasado Continuo para acciones en desarrollo (`was/were` + verbo en `-ing`), y Combinación de Pasados con conectores (`when` para interrupciones cortas y `while` para acciones continuas).
  - **Glosario:** 12 términos gramaticales clave.
  - **Simulacro:** 60 preguntas arcade con pistas y explicaciones pedagógicas.
* **3er Trimestre (Q3): Physical Appearance, Habits (Used To), Obligations (Had To), Mythical Beasts, Comparatives & Superlatives (Units 5 & 6)**
  - **6 Lecciones:**
    1. *Hair & Face Vocabulary (Unit 5):* Cabello (`dark`, `fair`, `blond`, `curly`, `straight`, `long/short`), rasgos faciales (`moustache`, `beard`, `scar`, `chin`, `cheek`) y descripciones con `have got / has got`.
    2. *Used to — Hábitos y Estados del Pasado (Unit 5):* Hábitos que ya no ocurren (*"solía"*), regla de forma base, afirmativo (`used to`), negativo (`didn't use to`) y preguntas (`Did you use to...?`).
    3. *Had to — Obligaciones en el Pasado (Unit 5):* Deberes obligatorios pasados (*"tuve que"*), negativo (`didn't have to`), preguntas (`Did you have to...?`) y contrastes con *used to*.
    4. *Mythical Beasts & Animal Bodies (Unit 6):* Partes corporales (`wing`, `horn`, `scales`, `feathers`, `tail`, `beak`, `neck`, `tongue`), bestias míticas (`Pegasus`, `Sphinx`, `unicorn`, `mermaid`, `centaur`, `phoenix`) y estructura visual `looks like`.
    5. *Comparatives (Unit 6):* Comparaciones con `than`, reglas para adjetivos cortos (`-er than`), terminados en `-e`, duplicación CVC (`bigger than`), terminados en `-y` (`heavier than`, `scarier than`), largos (`more dangerous than`) e irregulares (`better than`, `worse than`).
    6. *Superlatives & Dinosaurs (Unit 6):* Récords supremos con `the ... -est`, duplicación CVC (`the biggest`), terminados en `-y` (`the heaviest`), adjetivos largos (`the most dangerous`), irregulares (`the best`, `the worst`) y dietas prehistóricas (`herbivores`, `carnivores`, `omnivores`).
  - **Glosario:** 30 tarjetas flashcard 3D bilingües.
  - **Simulacro:** 60 preguntas de examen con balance perfecto de respuestas (20 de opción A, 20 de B y 20 de C), pistas y retroalimentación constructiva.

---

## 🕹️ Modos de Juego y Estudio

Dentro de cada materia y trimestre, el alumno dispone de 4 accesos principales en el Hub:

```
[ HUB DE ESTUDIO ]
  ├── 📘 Guía Interactiva (Lectura + Audiolibro TTS + Reto de Validación)
  ├── 📚 Biblioteca Resumen (Tarjetas conceptuales rápidas)
  ├── 🔍 Glosario & Flashcards 3D (Buscador reactivo + Tarjetas giratorias)
  └── 🎯 Simulacro Arcade (Examen cronometrado con pistas y feedback)
```

### 1. 📘 Guía Interactiva con Audiolibro
- Prosa clara y estructurada con tipografía legible y colores estimulantes.
- Botones multimedia: **Reproducir ▶️**, **Pausar ⏸️**, **Reanudar ⏯️** y **Detener ⏹️**.
- Mini-pregunta de validación obligatoria al pie de página (+5 XP al acertar) para desbloquear la asimilación del tema.

### 2. 📚 Biblioteca de Resúmenes
- Diseñada para el repaso rápido minutos antes de entrar a clase o rendir la prueba.
- Extrae la síntesis conceptual de cada lección (`resumen_corto`), permitiendo una lectura panorámica rápida.

### 3. 🔍 Glosario & Flashcards 3D
- **Modo Lista:** Diccionario indexado con buscador instantáneo (`oninput`). Filtra al teclear sin recargar la pantalla.
- **Modo Flashcards 3D:** Tarjetas interactivas con animación de giro espacial en CSS (`preserve-3d`). Permite marcar tarjetas como *Dominadas* o *Por Repasar*, premiando la memorización con XP.

### 4. 🎯 Simulacro Arcade y Desafíos Contra Reloj
- **Longitud Configurable:** El alumno elige realizar sesiones rápidas de 5 preguntas, rondas estándar de 10 preguntas, simulacros completos de 20 preguntas o el banco entero.
- **Reloj de Tensión:** Temporizador con cuenta regresiva. Al cruzar los últimos minutos, entra en estado de alerta visual con parpadeo rojo.
- **Pistas Didácticas:** Botón de ayuda que despliega orientaciones deductivas sin revelar la solución.
- **Feedback Inmediato:** Tras responder, se muestra una tarjeta explicativa en verde (acierto) o ámbar (error) detallando el porqué de la respuesta correcta.
- **Podio y Récords:** Cálculo de porcentaje de aciertos, medallas ganadas, rachas y guardado en el Salón de la Fama.

---

## 🧱 Arquitectura de Software y Código

El proyecto sigue una arquitectura de **Single-Page Application (SPA)** nativa y modular:

```
APP PrimarIA/
├── index.html       # Estructura semántica del DOM, HUD gamer superior, modales arcade y marcos reactivos
├── style.css        # Sistema Dark Gamer Arcade, variables temáticas por materia, arquitectura responsive 100dvh y animaciones 3D
├── script.js        # Motor principal: máquina de estados (cambiarCapa), audio sintético, gestión inteligente de UI, perfiles y simulacros
├── datos.js         # Base de datos global unificada (CONTENIDOS_EDUCATIVOS) con esquemas de lecciones, glosarios y simulacros
├── README.md        # Documentación general para usuarios y desarrolladores
└── CLAUDE.md        # Guía técnica y directrices de desarrollo para asistentes de Inteligencia Artificial
```

### Máquina de Estados de Capas (`cambiarCapa(nuevaCapa)`)
La navegación entre vistas no realiza recargas de página. El ciclo de vida visual se controla mediante la variable global `capaActual` y el método `cambiarCapa()`:
- `seleccion-perfil` / `seleccion-materia`
- `seleccion-trimestre` (detecta dinámicamente si existe `Q1`, `Q2` o `Q3` y habilita botones)
- `menu-enfoque` (Hub de la materia)
- `guia-aprendizaje`
- `biblioteca`
- `glosario`
- `simulacro-menu`
- `simulacro`
- `simulacro-resultado`

### Protocolo de Seguridad en Exámenes (`volverAtras()`)
Si el usuario intenta volver atrás durante un simulacro activo, la plataforma intercepta la acción y solicita confirmación para evitar la pérdida involuntaria del progreso o del tiempo restante. Asimismo, al cambiar de vista, cancela inmediatamente cualquier reproducción en curso de la voz sintetizada (`speechSynthesis.cancel()`).

---

## 🚀 Cómo Ejecutar y Desplegar

### Ejecución Local
1. Clona o descarga la carpeta del proyecto.
2. Haz doble clic en `index.html` para abrirlo en cualquier navegador (Chrome, Edge, Firefox, Safari).
3. ¡No requiere instalar Node.js, dependencias ni servidores locales!

### Despliegue en GitHub Pages
1. Sube el repositorio a GitHub.
2. Dirígete a **Settings ➡️ Pages**.
3. Selecciona la rama `main` (o `master`) y la carpeta `/ (root)`.
4. ¡Tu enlace web de PrimarIA estará activo en segundos para usarlo desde cualquier tablet, computadora o celular!

---

## 👨‍💻 Autoría y Propósito

Desarrollado con dedicación para acompañar el aprendizaje de **Enzo** en 6to Grado, promoviendo el entusiasmo por el conocimiento, la curiosidad científica, el rigor histórico y el disfrute del estudio escolar.
