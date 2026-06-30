# Plataforma Educativa Interactiva - Central de Aprendizaje Global

¡Bienvenido al repositorio oficial de la **Plataforma Educativa Interactiva**! Esta aplicación web responsiva, accesible y modular ha sido desarrollada utilizando tecnologías web nativas para asistir a estudiantes de educación primaria. El sistema transforma los contenidos curriculares tradicionales en una experiencia inmersiva de autoaprendizaje mediante la combinación de audiolibros interactivos, diccionarios reactivos en tiempo real y simulacros de examen gamificados con persistencia de datos local.

---

## 🎯 Objetivos de la Plataforma

1. **Fomentar la Autonomía Estudiantil:** Proporcionar un entorno educativo controlado donde el alumno explore los conceptos conceptuales a su propio ritmo sin depender de supervisión constante.
2. **Garantizar la Accesibilidad Universal:** Implementar soporte de lectura por voz nativa para asistir de forma efectiva a estudiantes con dificultades visuales, dislexia o diferentes ritmos de apropiación de la lectura.
3. **Validación Conceptual Inmediata:** Intercalar la lectura pasiva con retos prácticos directos (mini-preguntas) para asentar la retención de datos antes de avanzar a nuevos bloques teóricos.
4. **Mitigar la Ansiedad Frente a Exámenes:** Utilizar dinámicas lúdicas de gamificación (puntos, récords históricos e insignias de rango) para que las evaluaciones contra reloj sean vistas como un mecanismo de autosuperación y no de castigo.

---

## 🗺️ Sistema de Navegación y Flujo de la App

La aplicación está gobernada en su totalidad por una arquitectura de **Máquina de Estados de Capas** en el frontend. En lugar de realizar recargas de página o redirecciones HTTP clásicas, el ciclo de vida de la interfaz se controla mediante la variable global `capaActual` y el método centralizador de renderizado `cambiarCapa(nuevaCapa)`.

### Mapeo Exhaustivo de Capas de Interfaz:
* **`seleccion-grado`:** Pantalla raíz de bienvenida. Presenta los niveles escolares disponibles en el sistema.
* **`seleccion-trimestre`:** Filtra el recorrido del año lectivo tras seleccionar un grado, dividiendo la carga en bloques pedagógicos estándar (`Q1` para Primer Trimestre, `Q2` para Segundo Trimestre).
* **`menu-enfoque`:** El panel de control central (Hub) de la materia y trimestre seleccionados. Expone los accesos dinámicos hacia los cuatro modos de estudio disponibles.
* **`guia-aprendizaje`:** Interfaz de lectura interactiva equipada con controles de reproducción de audiolibro por párrafos y desafíos de validación rápida.
* **`biblioteca`:** Consola de visualización de resúmenes sintéticos limpios extraídos directamente de la base de datos de lecciones.
* **`glosario`:** Panel de consulta terminológica provisto de un motor de búsqueda instantáneo reactivo al tecleo del usuario.
* **`simulacro-menu`:** Antesala de evaluación que muestra las reglas del examen, las estadísticas de puntuación máxima y el historial cronológico de intentos guardados.
* **`simulacro`:** Entorno de examen adaptativo contra reloj de opción múltiple, con renderizado de preguntas, cronómetro dinámico y despliegue de pistas pedagógicas.

### Sistema de Retorno Inteligente y Contextual (`volverAtras()`)
El control de navegación de retorno ejecuta una limpieza y validación de estado rigurosa antes de alterar la capa visual:
1. **Cancelación de Audio:** Invoca inmediatamente `window.speechSynthesis.cancel()` y setea el estado global `estadoAudio = "detenido"` para evitar que la lectura de voz continúe reproduciéndose en segundo plano si el usuario abandona una lección.
2. **Navegación Condicional:** * Si `capaActual === "seleccion-trimestre"`, purga el almacenamiento de sesión ejecutando `localStorage.removeItem("grado")`, inicializa `gradoSeleccionado = null` y redirige a `renderSeleccionGrado()`.
   * Si `capaActual === "menu-enfoque"`, devuelve al alumno a la selección de trimestres escolares (`irAPantallaTrimestre()`).
   * Si la capa actual pertenece a un módulo de estudio (`guia-aprendizaje`, `biblioteca`, `glosario`, `simulacro-menu`), restablece la vista al panel principal del trimestre.
3. **Protocolo de Seguridad en Exámenes:** Si el alumno activa el retorno mientras realiza una evaluación activa (`capaActual === "simulacro"`), la función detiene el flujo de salida de inmediato e invoca un cuadro de confirmación nativo. Esto previene de forma absoluta la pérdida accidental del tiempo invertido y del progreso de la prueba por clics involuntarios.

---

## 🕹️ Modos de Uso de la Plataforma

### 1. Guía de Aprendizaje Interactiva y Audiolibro
Presenta las lecciones teóricas mapeadas dinámicamente. Integra la **Web Speech API** mediante el constructor `SpeechSynthesisUtterance`. Los algoritmos del controlador filtran las voces disponibles en el sistema operativo del cliente para priorizar voces en español nativo (`es-AR`, `es-ES`, o voces sintéticas avanzadas como `Microsoft Tomasa`). El usuario dispone de controles en pantalla para reproducir, pausar, reanudar y detener la lectura fonética del texto en prosa. Para avanzar o consolidar la lección, cada tema incluye una pregunta obligatoria basada en el contenido leído.

### 2. Consultar Biblioteca (Resúmenes Rápidos)
Diseñado para técnicas de repaso fluido y estudio de fijación. Esta interfaz extrae selectivamente la propiedad `resumen_corto` de cada una de las lecciones del bloque correspondiente, omitiendo los textos extensos y las preguntas de validación para entregar una hoja de ruta conceptual compacta e ideal para memorización de directrices fundamentales.

### 3. Diccionario con Buscador Dinámico
El glosario actúa como una base terminológica indexada. El campo de búsqueda implementa un capturador de eventos en tiempo real a través de la propiedad `oninput`. Cada vez que el estudiante presiona una tecla, el sistema ejecuta de manera inmediata un filtro predictivo sobre el arreglo de términos, actualizando el árbol de elementos en pantalla sin demoras ni necesidad de recargar la vista o presionar un botón de confirmación.

### 4. Simulacro de Examen Contra Reloj
Inicia una evaluación formal estructurada a partir del banco de preguntas del trimestre. El sistema cuenta con un motor de temporizador regresivo configurado a 30 minutos (1800 segundos) gestionado mediante `setInterval`. El componente gráfico del reloj posee reactividad cromática: al cruzar el umbral crítico de los 5 minutos restantes (300 segundos), altera sus estilos CSS dinámicamente cambiando a color rojo con animaciones de parpadeo visual para entrenar al alumno en la gestión del tiempo. Cada pregunta incluye la posibilidad de desplegar un campo de orientación técnica (Pista) que ayuda al razonamiento deductivo sin dar la respuesta directamente.

---

## 🏆 Sistema de Puntajes, Récords y Rangos

El progreso académico está completamente gamificado para incentivar la asiduidad del alumno y medir de manera objetiva su evolución a lo largo del tiempo.

### 1. Reglas de Asignación de Puntos
* **Mini-Preguntas de Validación (Guías):** Responder correctamente el desafío al final de una lectura teórica otorga **+5 puntos** directos al marcador global de la sesión. Si la respuesta es incorrecta, la plataforma lo notifica visualmente pero no aplica penalizaciones negativas, promoviendo la experimentación y eliminando el miedo al error.
* **Preguntas de Simulacro (Examen):** Resolver un reactivo de opción múltiple dentro del simulacro formal contra reloj premia al alumno con **+10 puntos**.

### 2. Persistencia en Almacenamiento Local (`localStorage`)
La aplicación no requiere bases de datos en servidores externos, utilizando en su lugar la persistencia del navegador del cliente mediante la API `localStorage`:
* **Puntaje Máximo Histórico (`maxScore`):** Registra de forma indeleble el récord de puntos más alto alcanzado por el usuario. Al concluir con éxito una evaluación, si el puntaje final supera la marca grabada, el sistema actualiza la clave en el almacenamiento local y activa un flujo visual de felicitación por nuevo récord establecido.
* **Historial Analítico de Intentos (`historial`):** Cada vez que un simulacro se da por terminado (ya sea por completar todas las preguntas, agotamiento del tiempo o abandono confirmado), el sistema genera un objeto con la marca de tiempo exacta (`fecha`, `hora`), el total de `puntos` obtenidos, la `duracion` consumida formateada en minutos/segundos y el identificador del `bloque` curricular evaluado. Este arreglo se guarda en formato JSON (`JSON.stringify`) y se renderiza en orden cronológico inverso (los intentos más recientes en la parte superior) dentro del menú del simulacro.

### 3. Clasificación de Rangos Dinámicos
La plataforma evalúa constantemente el puntaje global acumulado por el estudiante durante su sesión de uso activa para determinar y renderizar su nivel de rango de manera dinámica en el HUD superior:
* 🐣 **Novato (0 a 19 puntos):** Rango base otorgado al ingresar a la plataforma o al realizar exploraciones iniciales.
* 🗺️ **Explorador (20 a 39 puntos):** El estudiante demuestra consistencia, habiendo superado con éxito múltiples lecciones y lecturas de control.
* 🎓 **Erudito (40 puntos o más):** Distinción de honor máxima reservada para los estudiantes que completan simulacros formales con alta efectividad y demuestran un dominio completo de los bloques de estudio.

---
