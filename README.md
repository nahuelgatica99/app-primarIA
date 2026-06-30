"""# Plataforma Educativa Interactiva - Central de Aprendizaje Global

¡Bienvenido al repositorio de la **Plataforma Educativa Interactiva**! Este proyecto es una aplicación web responsiva diseñada para estudiantes de educación primaria (con un enfoque inicial implementado para 6to Grado). Su objetivo principal es transformar el estudio de las ciencias en una experiencia dinámica, accesible y gamificada, combinando la lectura comprensiva con herramientas de audio, diccionarios en tiempo real y evaluaciones adaptativas de auto-superación.

---

## 🎯 Objetivos de la Plataforma

1. **Fomentar la Autonomía:** Permitir que los alumnos exploren los contenidos curriculares a su propio ritmo.
2. **Accesibilidad e Inclusión:** Integrar un sistema nativo de audiolibros interactivos para asistir a alumnos con distintas capacidades de lectura o estilos de aprendizaje.
3. **Refuerzo y Validación Inmediata:** Proveer retroalimentación en tiempo real tanto en la lectura pasiva como en los exámenes activos.
4. **Estimulación de Logros:** Utilizar dinámicas de gamificación (puntos, récords y rangos) para incentivar el repaso continuo de los temas.

---

## 🗺️ Sistema de Navegación y Flujo de la App

La plataforma funciona como una **Máquina de Estados de Capas** gestionada a través de la variable global `capaActual` y el método centralizador `cambiarCapa(nuevaCapa)`. Esto evita recargas de página innecesarias y asegura una experiencia fluida y controlada.

### Flujo de Capas de la Interfaz:
1. **Selección de Grado (`seleccion-grado`):** Pantalla de bienvenida donde el usuario elige su nivel académico actual (6to Grado disponible por defecto).
2. **Selección de Trimestre (`seleccion-trimestre`):** Segmenta los contenidos del año en bloques pedagógicos manejables (1er Trimestre / T1 y 2do Trimestre / T2).
3. **Central de Estudio / Menú de Enfoque (`menu-enfoque`):** El "Hub" o panel principal del trimestre elegido, desde donde el estudiante decide qué estrategia de aprendizaje aplicar.
4. **Módulos de Enfoque Específicos:**
   * **Guía de Aprendizaje Interactiva (`guia-aprendizaje`):** Lectura guiada tema por tema.
   * **Biblioteca de Resúmenes (`biblioteca`):** Vista consolidada de síntesis conceptuales rápidas.
   * **Glosario de Términos (`glosario`):** Diccionario interactivo de palabras clave con buscador integrado.
   * **Panel de Simulacros (`simulacro-menu` y `simulacro`):** Secciones dedicadas a las evaluaciones contra reloj e historial.

### Retorno Inteligente y Contextual (`volverAtras()`)
El sistema cuenta con un botón único de retorno que evalúa de forma inteligente en qué capa se encuentra el usuario para regresarlo exactamente al nivel inmediato anterior de la jerarquía o solicitar confirmación de seguridad si se intenta abandonar una evaluación activa (evitando la pérdida accidental de progreso).

---

## 🕹️ Modos de Uso de la Plataforma

Una vez dentro de un trimestre, el estudiante dispone de 4 herramientas complementarias:

1. **Guía de Aprendizaje Interactiva:** Presenta las lecciones detalladas en formato de libro digital. Incluye un control de **Audiolibro** asistido por la API de Síntesis de Voz del navegador (`SpeechSynthesisUtterance`), configurada con voces nativas hispanohablantes que permiten pausar y reanudar la narración. Cada lección cierra con una *Mini-Pregunta de Validación* conceptual.
2. **Consultar Biblioteca (Resúmenes):** Ideal para repasos rápidos antes de un examen. Extrae las ideas síntesis esenciales de cada tema sin distractores intermedios.
3. **Diccionario con Buscador:** Permite escribir cualquier término en tiempo real (`oninput`). Filtra instantáneamente la base de datos de definiciones para resolver dudas de vocabulario específico de forma ágil.
4. **Evaluaciones Contra Reloj:** Un examen adaptativo de opción múltiple con un temporizador global de 30 minutos (1800 segundos). Cuenta con un sistema visual de alertas que cambia de color cuando restan menos de 5 minutos, inyectando dinamismo y entrenando la gestión del tiempo.

---

## 🏆 Sistema de Puntajes, Récords y Rangos

La plataforma premia el esfuerzo y los conocimientos del usuario mediante un sistema acumulativo de puntuación reflejado en el HUD (Heads-Up Display) superior:

### 1. Reglas de Puntuación
* **Mini-Preguntas de Validación (Lectura):** Responder correctamente una pregunta rápida dentro de las guías de lectura otorga **+5 puntos** directamente al puntaje global. No penaliza en caso de error para incentivar el intento.
* **Preguntas del Simulacro de Examen:** Cada respuesta correcta en el examen contra reloj añade **+10 puntos**. 

### 2. Persistencia de Datos e Historial
Los resultados se guardan de forma permanente en el navegador del usuario utilizando `localStorage`:
* **Máximo Puntaje (`maxScore`):** Registra el récord histórico del alumno. Al finalizar un simulacro, si el puntaje supera al anterior, se celebra un nuevo récord en pantalla.
* **Historial de Intentos (`historial`):** Almacena una lista de objetos con los resultados previos, registrando la fecha exacta, hora, duración exacta del examen (`minutos:segundos`) y el bloque evaluado, visibles en un panel especializado.

### 3. Sistema de Rangos Dinámicos
El rango del estudiante se calcula automáticamente en función de los puntos acumulados en la sesión:
* 🐣 **Novato:** De 0 a 19 puntos. Rango inicial de exploración.
* 🗺️ **Explorador:** De 20 a 39 puntos. Demuestra un recorrido intermedio por los contenidos.
* 🎓 **Erudito:** 40 puntos o más. Nivel máximo otorgado a quienes completan con éxito múltiples validaciones y simulacros.

---

## 🛠️ Guía Técnica de Expansión (Mantenimiento y Desarrollo)

La plataforma está diseñada bajo una arquitectura desacoplada donde el archivo `datos.js` funciona como la base de datos relacional orientada a objetos (`CONTENIDOS_EDUCATIVOS`) y `codigo-actual.js` procesa los estados y la lógica.

### 1. Habilitar Nuevos Grados
Para activar grados que actualmente se encuentran bloqueados (como 4to, 5to o 7mo Grado):
1. Busque la función `renderSeleccionGrado()` en el script.
2. Localice las tarjetas HTML en la constante literal del string.
3. Remueva la clase `.disabled` de la tarjeta seleccionada y reemplace el texto del candado por el evento `onclick` correspondiente.
*Ejemplo para habilitar 5to:*
