// --- CENTRAL DE DATOS ACADÉMICOS GLOBAL ---
const CONTENIDOS_EDUCATIVOS = {
  "6to": {
    "sociales": {
      materia: "Ciencias Sociales",
      color: "var(--rojo-principal)",
      trimestres: {
        "Q1": {
          guia: [
            {
              titulo: "Ambientes y Recursos Naturales",
              texto: "El <b>Ambiente</b> es el entorno formado por elementos naturales y por las transformaciones humanas. Los <b>Recursos Naturales</b> son los elementos de la naturaleza (agua, suelo, árboles) que la sociedad valora y usa para satisfacer necesidades.<br><br><b>Ejemplo:</b> Las Barrancas de Belgrano en Buenos Aires muestran cómo el relieve natural se transformó con veredas y árboles de otras partes del mundo.<br><br><i>Recuerda: Los recursos son 'naturales' por su origen, pero son 'sociales' porque la sociedad les da un valor y un uso.</i>",
              resumen_corto: "El ambiente combina naturaleza y sociedad. Los recursos naturales son aquellos elementos de la naturaleza útiles para la vida que la sociedad valora.",
              preguntaValidacion: {
                q: "¿Qué define mejor a un recurso natural?",
                a: ["Elementos de la naturaleza valorados y usados por la sociedad", "Cualquier planta silvestre", "Los edificios de una ciudad"],
                c: 0
              }
            },
            {
              titulo: "Tipos de Recursos",
              texto: "Existen recursos <b>Renovables</b>, que se regeneran en tiempos cortos (como las plantas y animales), y recursos <b>No Renovables</b>, que tardan millones de años en formarse (como el petróleo y los metales).<br><br><b>Ejemplo:</b> El suelo es un recurso que debemos cuidar; si se agotan sus nutrientes por mal uso, tarda muchísimo tiempo en recuperarse.<br><br><i>¡Cuidado! Si un recurso renovable se sobreexplota más rápido de lo que se regenera, puede llegar a extinguirse.</i>",
              resumen_corto: "Recursos Renovables: Se recuperan rápido (plantas, sol). No Renovables: Existen en cantidades fijas y pueden agotarse (petróleo, gas).",
              preguntaValidacion: {
                q: "El petróleo y los metales son ejemplos de recursos:",
                a: ["No Renovables", "Renovables", "Inagotables"],
                c: 0
              }
            }
          ],
          glosario: [
            { termino: "Ambiente", def: "Conjunto de elementos naturales y sociales que interactúan en un espacio determinado." },
            { termino: "Recursos Naturales", def: "Elementos de la naturaleza aprovechados por la sociedad para satisfacer sus necesidades." },
            { termino: "Recursos Renovables", def: "Bienes naturales que tienen la capacidad de regenerarse en tiempos humanos si se cuidan." },
            { termino: "Recursos No Renovables", def: "Recursos que existen en cantidades fijas y tardan millones de años en formarse, como el gas." }
          ],
          simulacro: [
            {
              pregunta: "¿Qué define mejor a un recurso natural?",
              opciones: ["Elementos de la naturaleza valorados y usados por la sociedad", "Cualquier planta silvestre", "Los edificios de una ciudad"],
              correcta: 0,
              pista: "Piensa en el valor práctico que la sociedad le otorga al elemento de la naturaleza."
            },
            {
              pregunta: "El petróleo y los metales son ejemplos de recursos:",
              opciones: ["No Renovables", "Renovables", "Inagotables"],
              correcta: 0,
              pista: "Tardan millones de años en volver a formarse de manera natural en la Tierra."
            }
          ]
        },
        "Q2": {
          guia: [
            {
              titulo: "Unitarios vs. Federales: Los Proyectos de País",
              texto: "Luego de la independencia de 1820, las provincias no lograban ponerse de acuerdo sobre cómo organizar la economía y el gobierno de la Argentina. Surgieron dos grandes grupos rivales: Los Unitarios (identificados con el celeste/azul y trajes elegantes) querían un gobierno central fuerte en Buenos Aires que eligiera a los gobernadores provinciales. Los Federales (identificados con ponchos y moños rojos punzó) querían que cada provincia fuera autónoma, tuviera sus propias leyes y eligiera a sus gobernantes, distribuyendo las ganancias de la Aduana de Buenos Aires de forma justa.",
              resumen_corto: "Unitarios: Buscaban centralizar el poder en Buenos Aires. Federales: Defendían las autonomías de cada provincia y el reparto justo de la aduana.",
              preguntaValidacion: {
                q: "¿De qué color se identificaban los Federales y qué defendían?",
                a: ["Celeste, y querían que Buenos Aires elija todos los gobernadores", "Rojo punzó, y defendían la autonomía de cada provincia", "Verde, y querían volver a ser parte de España"],
                c: 1
              }
            },
            {
              titulo: "La Confederación Argentina y la Época de Rosas",
              texto: "Al no haber una constitución, las provincias firmaron pactos (como el Pacto Federal) creando la 'Confederación Argentina'. Juan Manuel de Rosas gobernó la provincia de Buenos Aires con un poder enorme (Suma del Poder Público). Él exigió el uso obligatorio de la divisa punzó y controló la navegación de los ríos Paraná y Uruguay para beneficiar al puerto de Buenos Aires, lo que causó grandes tensiones con el litoral argentino y países vecinos.",
              resumen_corto: "Bajo Rosas, las provincias formaban una Confederación unida por pactos. Rosas ejerció un control estricto de la economía y la navegación de los ríos.",
              preguntaValidacion: {
                q: "¿Qué significaba la Confederación Argentina bajo el mando indirecto de Rosas?",
                a: ["Que todas las provincias perdieron sus nombres", "Una unión de provincias autónomas donde Rosas manejaba las relaciones exteriores", "Un imperio con un Rey absoluto"],
                c: 1
              }
            },
            {
              titulo: "La Organización del Estado Nacional (1853)",
              texto: "En 1852, Justo José de Urquiza venció a Rosas en la Batalla de Caseros. Al año siguiente, en 1853, representantes de las provincias se reunieron en Santa Fe y sancionaron por fin la Constitución Nacional, estableciendo una forma de gobierno Representativa, Republicana y Federal. Sin embargo, Buenos Aires no estuvo de acuerdo y se separó del resto del país por varios años, hasta que las batallas de Cepeda y Pavón unificaron el territorio bajo las presidencias de Mitre, Sarmiento y Avellaneda.",
              resumen_corto: "La Constitución Nacional se sancionó en 1853 en Santa Fe, adoptando la forma representativa, republicana y federal.",
              preguntaValidacion: {
                q: "¿En qué año se sancionó la ansiada Constitución Nacional Argentina?",
                a: ["En 1816", "En 1853", "En 1889"],
                c: 1
              }
            },
            {
              titulo: "La Guerra de la Triple Alianza (1865-1870)",
              texto: "Durante la presidencia de Bartolomé Mitre, Argentina se unió en un tratado militar con Brasil y Uruguay (La Triple Alianza) para enfrentar al gobierno paraguayo de Francisco Solano López. La guerra duró 5 sangrientos años y se desarrolló principalmente en Paraguay, dejando a ese país en ruinas. Aunque sirvió para consolidar el poder del ejército nacional argentino, muchas provincias se opusieron fuertemente al reclutamiento obligatorio de soldados.",
              resumen_corto: "Guerra entre la Alianza (Argentina, Brasil, Uruguay) contra Paraguay. Fortaleció al Ejército Nacional pero generó rechazo interno por las levas obligatorias.",
              preguntaValidacion: {
                q: "¿Qué países formaron la Triple Alianza?",
                a: ["Argentina, Brasil y Uruguay", "Argentina, Chile y Perú", "Paraguay, Bolivia y Brasil"],
                c: 0
              }
            }
          ],
          glosario: [
            { termino: "Autónomo", def: "Que tiene poder e independencia propia para gobernarse y dictar sus leyes individuales." },
            { termino: "Confederación", def: "Unión o alianza de provincias o estados independientes que delegan solo ciertas facultades (como relaciones exteriores) en una autoridad." },
            { termino: "Constitución", def: "La ley suprema y fundamental de un Estado que organiza sus poderes y garantiza los derechos de los ciudadanos." },
            { termino: "Derrocar", def: "Hacer caer de un cargo o destituir de manera contundente a una autoridad o gobierno establecido." },
            { termino: "Divisa Punzó", def: "Distintivo o cinta de color rojo vivo que Rosas impuso de uso obligatorio para demostrar fidelidad a la causa federal." },
            { termino: "Federales", def: "Grupo político que defendía las autonomías de las provincias y la distribución aduanera." },
            { termino: "Unitarios", def: "Grupo político que proponía un gobierno centralizado con base e imposiciones directas desde Buenos Aires." }
          ],
          simulacro: [
            {
              pregunta: "¿Quién lideró el ejército que venció a Rosas en la Batalla de Caseros?",
              opciones: ["Bartolomé Mitre", "Justo José de Urquiza", "Domingo F. Sarmiento"],
              correcta: 1,
              pista: "Fue el caudillo y gobernador de Entre Ríos que impulsó firmemente la Constitución de 1853."
            },
            {
              pregunta: "¿Qué característica definía a los Unitarios?",
              opciones: ["Querían autonomía provincial total", "Querían un gobierno central fuerte radicado en Buenos Aires", "Usaban siempre ponchos color rojo"],
              correcta: 1,
              pista: "Buscaban la centralización absoluta del poder político y los recursos desde la capital."
            },
            {
              pregunta: "¿Qué provincia se separó de la Confederación tras la sanción de la Constitución?",
              opciones: ["Entre Ríos", "Buenos Aires", "Corrientes"],
              correcta: 1,
              pista: "Se negaban rotundamente a perder el control exclusivo de los millonarios ingresos de su aduana portuaria."
            },
            {
              pregunta: "¿Cuál fue una consecuencia de la Guerra de la Triple Alianza para la Argentina?",
              opciones: ["Se debilitó el gobierno central", "Se fortaleció el Estado y el Ejército Nacional", "Se independizó la provincia de Corrientes"],
              correcta: 1,
              pista: "El conflicto permitió unificar y profesionalizar las fuerzas armadas bajo un comando único nacional."
            }
          ]
        }
      }
    },
    "naturales": {
      materia: "Ciencias Naturales",
      color: "#16a34a",
      trimestres: {
        "Q1": {
          guia: [
            {
              titulo: "La Célula y la Vida",
              texto: "La <b>Célula</b> es la unidad estructural y funcional básica de todos los seres vivos...",
              resumen_corto: "La unidad mínima de vida dotada de capacidad para nutrirse y reproducirse.",
              preguntaValidacion: { q: "¿Qué es la célula?", a: ["Un componente mineral", "La unidad básica de la vida", "Un tipo de roca"], c: 1 }
            }
          ],
          glosario: [
            { termino: "Célula", def: "Unidad mínima fundamental de los seres vivos." }
          ],
          simulacro: [
            { pregunta: "¿Cuál es la unidad básica de la vida?", opciones: ["El átomo", "La célula", "El tejido"], correcta: 1, pista: "Tiene vida independiente." }
          ]
        }
      }
    }
  }
};