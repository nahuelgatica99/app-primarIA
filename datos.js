// --- CENTRAL DE DATOS ACADÉMICOS GLOBAL ---
const CONTENIDOS_EDUCATIVOS = {
  "6to": {
    "sociales": {
      materia: "Ciencias Sociales",
      color: "var(--rojo-principal)",
      trimestres: {

"Q1": {
  // 1. GUÍA DE APRENDIZAJE
  guia: [
    {
      titulo: "Ambientes y Recursos Naturales",
      texto: "El <b>Ambiente</b> es el entorno formado por elementos naturales y por las transformaciones humanas. Los <b>Recursos Naturales</b> son los elementos de la naturaleza (agua, suelo, árboles) que la sociedad valora y usa para satisfacer necesidades.<br><br><b>Ejemplo:</b> Las Barrancas de Belgrano en Buenos Aires muestran cómo el relieve natural se transformó con veredas y árboles de otras partes del mundo.<br><br><i>Recuerda: Los recursos son 'naturales' por su origen, pero son 'sociales' porque la sociedad les da un valor y un uso.</i>",
      resumen_corto: "El ambiente es naturaleza más sociedad. Los recursos naturales son elementos útiles para vivir.",
      preguntaValidacion: {
        q: "¿Qué define mejor al concepto de ambiente actualmente?",
        a: ["Un paisaje de naturaleza pura sin intervención", "El entorno formado por elementos naturales y transformaciones humanas", "Los espacios urbanos exclusivamente"],
        c: 1
      }
    },
    {
      titulo: "Tipos de Recursos",
      texto: "Existen recursos <b>Renovables</b>, que se regeneran en tiempos cortos (como las plantas y animales), y recursos <b>No Renovables</b>, que tardan millones de años en formarse (como el petróleo y los metales).<br><br><b>Ejemplo:</b> El suelo es un recurso que debemos cuidar; si se agotan sus nutrientes por mal uso, tarda muchísimo en recuperarse.<br><br><i>En la prueba: Si un recurso renovable se usa más rápido de lo que se repone, puede llegar a agotarse.</i>",
      resumen_corto: "Los renovables se reponen rápido; los no renovables tardan millones de años.",
      preguntaValidacion: {
        q: "Si un recurso renovable se explota más rápido de lo que la naturaleza lo repone, ¿qué sucede?",
        a: ["Se vuelve eterno e inagotable", "Se multiplica su velocidad de reproducción", "Puede llegar a agotarse"],
        c: 2
      }
    },
    {
      titulo: "Actores Sociales y el Estado",
      texto: "Los <b>Actores Sociales</b> son las personas y grupos que intervienen en el ambiente: empresas, trabajadores, vecinos y ONGs. El <b>Estado</b> es el actor más importante porque crea las leyes y controla cómo se usan los recursos.<br><br><b>Ejemplo:</b> Cuando una empresa quiere talar un bosque, el Estado debe controlar que cumpla con las leyes ambientales.<br><br><i>Clave: El Estado debe equilibrar los intereses de las empresas con el cuidado del ambiente para toda la sociedad.</i>",
      resumen_corto: "Actores sociales son grupos con intereses. El Estado regula y pone las reglas.",
      preguntaValidacion: {
        q: "¿Cuál es el rol principal del Estado frente a los recursos naturales?",
        a: ["Apoyar únicamente los fines económicos de empresas privadas", "Crear leyes, controlar su uso y priorizar el bienestar común", "Dejar que los vecinos resuelvan los problemas solos"],
        c: 1
      }
    },
    {
      titulo: "Problemas Ambientales",
      texto: "Son situaciones que deterioran el ambiente y perjudican a la sociedad. Pueden ser de origen natural (terremotos) o humano (contaminación). Cuando un problema afecta a muchas personas en el mundo, se llama <b>Escala Global</b>.<br><br><b>Ejemplo:</b> La contaminación del aire en una ciudad es un problema local, pero el cambio climático es un problema global.<br><br><i>Ojo: Un fenómeno natural solo es 'problema ambiental' si afecta negativamente a las personas o sus actividades.</i>",
      resumen_corto: "Los problemas ambientales dañan a la naturaleza y a las personas por igual.",
      preguntaValidacion: {
        q: "¿Cuándo un fenómeno natural pasa a ser considerado un problema ambiental?",
        a: ["Cuando ocurre lejos de zonas habitadas", "Cuando afecta negativamente a las personas o a sus actividades", "Siempre que llueve de manera consecutiva"],
        c: 1
      }
    },
    {
      titulo: "Amenazas Naturales",
      texto: "Se dividen en dos: <b>Origen Interno</b> (terremotos, volcanes y tsunamis) y <b>Origen Atmosférico</b> (huracanes, tornados, sequías e inundaciones).<br><br><b>Ejemplo:</b> El terremoto de San Juan en 1944 fue uno de los desastres más grandes de Argentina, obligando a reconstruir la ciudad con normas antisísmicas.<br><br><i>Diferencia: Las sequías se desarrollan lento, mientras que un tornado ocurre en muy poco tiempo e intensidad.</i>",
      resumen_corto: "Internas son del interior de la tierra; atmosféricas son del clima y el aire.",
      preguntaValidacion: {
        q: "¿Cuál de las siguientes es una amenaza de origen atmosférico?",
        a: ["Un maremoto o tsunami submarino", "Una erupción volcánica activa", "Un tornado o huracán violento"],
        c: 2
      }
    },
    {
      titulo: "Riesgo y Vulnerabilidad",
      texto: "El <b>Riesgo</b> es la probabilidad de que una amenaza ocurra. La <b>Vulnerabilidad</b> es qué tan preparada está una sociedad para enfrentar ese peligro. A menor preparación (pobreza, falta de planes), mayor es la vulnerabilidad.<br><br><b>Ejemplo:</b> Una ciudad con edificios antisísmicos es menos vulnerable ante un terremoto que una ciudad con casas precarias.<br><br><i>Para recordar: Desastre = Amenaza Natural + Sociedad Vulnerable.</i>",
      resumen_corto: "Riesgo es la chance de que pase; vulnerabilidad es qué tan desprotegidos estamos.",
      preguntaValidacion: {
        q: "¿De qué depende principalmente el nivel de vulnerabilidad de una sociedad?",
        a: ["De la cantidad de nubes en el cielo", "De su grado de preparación, recursos y planes de prevención", "Únicamente de la magnitud que tenga la amenaza"],
        c: 1
      }
    }
  ],

  // 2. GLOSARIO
  glosario: [
    { termino: "Ambiente", def: "Entorno formado por elementos naturales y las transformaciones de la sociedad." },
    { termino: "Recursos Naturales", def: "Elementos de la naturaleza que las personas valoran y usan para satisfacer sus necesidades." },
    { termino: "Manejo de Recursos", def: "Forma en que las sociedades deciden explotar, cuidar o conservar los elementos naturales." },
    { termino: "Transformación", def: "Cambios producidos por los humanos en el entorno natural (ej: construir una plaza)." },
    { termino: "Recursos Renovables", def: "Aquellos que se regeneran en tiempos cortos de forma natural (ej: plantas, animales)." },
    { termino: "Recursos No Renovables", def: "Elementos que tardan millones de años en formarse (ej: metales, petróleo)." },
    { termino: "Agotamiento", def: "Cuando un recurso renovable se usa más rápido de lo que la naturaleza puede reponerlo." },
    { termino: "Actores Sociales", def: "Personas o grupos (vecinos, empresas, ONGs) con distintos intereses sobre el ambiente." },
    { termino: "El Estado", def: "Actor social encargado de crear leyes, controlar el uso de recursos y proteger el bienestar común." },
    { termino: "Intereses", def: "Motivos por los cuales cada actor social utiliza o defiende un recurso natural." },
    { termino: "Problema Ambiental", def: "Deterioro del entorno que afecta negativamente a la naturaleza y a la sociedad." },
    { termino: "Escala Local", def: "Problema que afecta a una zona pequeña (ej: basural en un barrio)." },
    { termino: "Escala Global", def: "Problema que afecta a todo el planeta (ej: el calentamiento global)." },
    { termino: "Deforestación", def: "Pérdida masiva de bosques por tala o incendios, generalmente para agricultura." },
    { termino: "Amenaza Natural", def: "Fenómeno de la naturaleza que puede causar daños a las personas." },
    { termino: "Origen Interno", def: "Fenómenos que nacen dentro de la Tierra, como terremotos, volcanes o tsunamis." },
    { termino: "Origen Atmosférico", def: "Fenómenos que ocurren en el aire, como huracanes, tornados, sequías e inundaciones." },
    { termino: "Sequía", def: "Escasez prolongada de lluvias que afecta la vida y la economía." },
    { termino: "Vulnerabilidad", def: "Qué tan preparada (o desprotegida) está una sociedad para enfrentar una amenaza." },
    { termino: "Riesgo", def: "Probabilidad de que una amenaza ocurra y cause daños." },
    { termino: "Desastre", def: "Resultado de una amenaza natural sobre una población que no estaba preparada." },
    { termino: "Prevención", def: "Acciones para disminuir el daño, como construir edificios antisísmicos." }
  ],

  // 3. SIMULACRO
  simulacro: [
    // Temática 1
    {
      pregunta: "¿Qué es el ambiente según el libro?",
      opciones: ["Naturaleza sin humanos", "Interacción entre elementos naturales y actividades humanas", "Un paisaje de campo"],
      correcta: 1,
      pista: "Naturaleza + Sociedad."
    },
    {
      pregunta: "Los elementos de la naturaleza valorados por su utilidad son:",
      opciones: ["Recursos naturales", "Materias primas", "Biodiversidad"],
      correcta: 0,
      pista: "Tienen un valor de uso."
    },
    {
      pregunta: "¿Qué ejemplo de relieve transformado menciona el libro en Buenos Aires?",
      opciones: ["El Obelisco", "Reserva Ecológica", "Barrancas de Belgrano"],
      correcta: 2,
      pista: "Relieves elevados o lomas."
    },
    {
      pregunta: "¿Por qué los humanos somos 'agentes de transformación'?",
      opciones: ["Porque modificamos el entorno para vivir", "Porque miramos", "Porque no cambiamos nada"],
      correcta: 0,
      pista: "Acción humana."
    },
    {
      pregunta: "Un recurso natural es considerado 'social' porque:",
      opciones: ["Es de todos", "Se vende en el mercado", "La sociedad decide cómo y para qué usarlo"],
      correcta: 2,
      pista: "Depende de la valoración."
    },
    {
      pregunta: "La flora autóctona en las ciudades suele ser:",
      opciones: ["Protegida", "Reemplazada por especies de otros países", "Eliminada sin reemplazo"],
      correcta: 1,
      pista: "Especies traídas de afuera."
    },
    {
      pregunta: "El uso de un recurso puede mejorar la vida, por ejemplo:",
      opciones: ["Al talar todo", "Al construir una vivienda", "Al contaminar"],
      correcta: 1,
      pista: "Ejemplo positivo."
    },
    {
      pregunta: "La biodiversidad se refiere a:",
      opciones: ["Variedad de seres vivos en un ambiente", "Muchos edificios", "La cantidad de agua"],
      correcta: 0,
      pista: "Vida variada."
    },
    {
      pregunta: "El concepto de ambiente actualmente afecta a:",
      opciones: ["Solo ciudades", "Solo el campo", "Todo el planeta"],
      correcta: 2,
      pista: "Escala mundial."
    },
    {
      pregunta: "¿Qué recurso es vital para alimentarnos y producir herramientas?",
      opciones: ["Solo el dinero", "El plástico", "Recursos naturales"],
      correcta: 2,
      pista: "Base de la vida."
    },
    {
      pregunta: "Las lomas de Belgrano son un desnivel del terreno llamado:",
      opciones: ["Relieve", "Montaña", "Meseta"],
      correcta: 0,
      pista: "Forma de la tierra."
    },
    {
      pregunta: "Cuando el cambio ambiental perjudica a la sociedad se produce:",
      opciones: ["Un recurso", "Un problema ambiental", "Una solución"],
      correcta: 1,
      pista: "Efecto negativo."
    },
    {
      pregunta: "El manejo de los recursos depende de:",
      opciones: ["Las decisiones de la sociedad", "El clima", "La suerte"],
      correcta: 0,
      pista: "Decisión humana."
    },
    {
      pregunta: "La transformación ambiental por desconocimiento es:",
      opciones: ["Intencional", "Natural", "Accidental"],
      correcta: 2,
      pista: "Sin intención."
    },
    {
      pregunta: "Los paisajes urbanos son ambientes:",
      opciones: ["Naturales", "Altamente transformados", "Inagotables"],
      correcta: 1,
      pista: "Mucha construcción."
    },

    // Temática 2
    {
      pregunta: "¿Qué define a los recursos renovables?",
      opciones: ["No se usan", "Tardan siglos", "Se regeneran en tiempos cortos"],
      correcta: 2,
      pista: "Ciclos cortos."
    },
    {
      pregunta: "¿Cuál es un recurso no renovable?",
      opciones: ["Petróleo y minerales", "Energía solar", "Madera"],
      correcta: 0,
      pista: "Tardan mucho."
    },
    {
      pregunta: "El suelo se considera no renovable si:",
      opciones: ["Se moja", "Se degrada por mal uso", "Se planta mucho"],
      correcta: 1,
      pista: "Degradación."
    },
    {
      pregunta: "La energía eólica usa un recurso:",
      opciones: ["No renovable", "Caro", "Renovable (viento)"],
      correcta: 2,
      pista: "Inagotable."
    },
    {
      pregunta: "Si usamos un recurso renovable más rápido de lo que se repone:",
      opciones: ["Puede agotarse", "Se multiplica", "Mejora"],
      correcta: 0,
      pista: "Uso excesivo."
    },
    {
      pregunta: "Los metales (oro, cobre) son recursos:",
      opciones: ["Renovables", "No renovables", "Líquidos"],
      correcta: 1,
      pista: "Stock limitado."
    },
    {
      pregunta: "¿Qué recurso es inagotable o perpetuo?",
      opciones: ["Agua dulce", "Gas", "Energía solar"],
      correcta: 2,
      pista: "Siempre disponible."
    },
    {
      pregunta: "Los animales (fauna) son recursos renovables si:",
      opciones: ["Se respeta su ciclo de reproducción", "Se cazan todos", "Viven en zoos"],
      correcta: 0,
      pista: "Respetar tiempos."
    },
    {
      pregunta: "El carbón y el gas natural son recursos:",
      opciones: ["Fósiles no renovables", "Renovables", "Ecológicos"],
      correcta: 0,
      pista: "Combustibles fósiles."
    },
    {
      pregunta: "El agua dulce es un recurso que debemos cuidar porque:",
      opciones: ["Es salada", "Es infinita", "Es limitada para el consumo humano"],
      correcta: 2,
      pista: "Escasez."
    },
    {
      pregunta: "La silvicultura (plantar árboles) hace que la madera sea:",
      opciones: ["No renovable", "Renovable", "Artificial"],
      correcta: 1,
      pista: "Reforestación."
    },
    {
      pregunta: "¿Qué significa manejo sustentable?",
      opciones: ["Usar hoy cuidando el futuro", "Gastar todo", "No tocar nada"],
      correcta: 0,
      pista: "Pensar en el mañana."
    },
    {
      pregunta: "Los diamantes son recursos:",
      opciones: ["Renovables", "Plásticos", "No renovables"],
      correcta: 2,
      pista: "Mineral precioso."
    },
    {
      pregunta: "La marea es un recurso energético de tipo:",
      opciones: ["No renovable", "Renovable", "Químico"],
      correcta: 1,
      pista: "Movimiento del mar."
    },

    // Temática 3
    {
      pregunta: "¿Quiénes son los actores sociales?",
      opciones: ["Personas y grupos que intervienen en el ambiente", "Solo políticos", "Los animales"],
      correcta: 0,
      pista: "Grupos de interés."
    },
    {
      pregunta: "El actor social encargado de crear leyes es:",
      opciones: ["Las empresas", "Las ONGs", "El Estado"],
      correcta: 2,
      pista: "Poder legislativo."
    },
    {
      pregunta: "Cuando los intereses de dos actores chocan, se produce:",
      opciones: ["Una fiesta", "Un conflicto ambiental", "Una ley"],
      correcta: 1,
      pista: "Disputa."
    },
    {
      pregunta: "Las ONGs ambientales actúan para:",
      opciones: ["Ganar dinero", "Proteger la naturaleza y concientizar", "Construir rutas"],
      correcta: 1,
      pista: "Defensa ambiental."
    },
    {
      pregunta: "Las empresas privadas buscan principalmente:",
      opciones: ["Obtener rentabilidad económica", "Plantar flores", "No usar recursos"],
      correcta: 0,
      pista: "Ganancia."
    },
    {
      pregunta: "¿Qué es el 'bien común' para el Estado?",
      opciones: ["Lo que le sirve a una empresa", "Lo que beneficia a toda la sociedad", "Gastar papel"],
      correcta: 1,
      pista: "Para todos."
    },
    {
      pregunta: "Un vecino que protesta por el humo de una fábrica es:",
      opciones: ["Un actor social", "Un empleado", "Un científico"],
      correcta: 0,
      pista: "Ciudadano activo."
    },
    {
      pregunta: "El Estado controla el ambiente mediante:",
      opciones: ["Fotos", "Inspecciones y multas", "Regalos"],
      correcta: 1,
      pista: "Control público."
    },
    {
      pregunta: "Las asambleas vecinales suelen luchar contra:",
      opciones: ["Problemas ambientales locales", "El sol", "La música"],
      correcta: 0,
      pista: "Organización local."
    },
    {
      pregunta: "Los científicos aportan a los actores sociales:",
      opciones: ["Dinero", "Maquinaria", "Información y conocimiento"],
      correcta: 2,
      pista: "Saber científico."
    },
    {
      pregunta: "El derecho a un ambiente sano está en:",
      opciones: ["La Constitución Nacional", "La guía de teléfono", "Los cuentos"],
      correcta: 0,
      pista: "Ley máxima."
    },
    {
      pregunta: "Un conflicto ambiental en Argentina es:",
      opciones: ["El frío", "El fútbol", "Las papeleras o minería"],
      correcta: 2,
      pista: "Temas de disputa."
    },
    {
      pregunta: "El Estado debe garantizar que las empresas:",
      opciones: ["No ganen nada", "Cumplan con las leyes ambientales", "Regalen productos"],
      correcta: 1,
      pista: "Cumplimiento."
    },
    {
      pregunta: "La gestión ambiental es responsabilidad de:",
      opciones: ["Solo vecinos", "Nadie", "Principalmente del Estado"],
      correcta: 2,
      pista: "Responsabilidad pública."
    },

    // Temática 4
    {
      pregunta: "¿Qué es un problema ambiental?",
      opciones: ["Un día con nubes", "Deterioro ambiental que afecta a la sociedad", "Plantar árboles"],
      correcta: 1,
      pista: "Daño social."
    },
    {
      pregunta: "Un problema de escala LOCAL es:",
      opciones: ["Basural en un barrio", "Cambio climático", "Agujero de ozono"],
      correcta: 0,
      pista: "Espacio reducido."
    },
    {
      pregunta: "La deforestación se hace para obtener:",
      opciones: ["Solo sombra", "Aire puro", "Tierras para agricultura o ganadería"],
      correcta: 2,
      pista: "Agronegocio."
    },
    {
      pregunta: "Un problema ambiental GLOBAL afecta a:",
      opciones: ["Todo el planeta", "Un vecino", "Un solo país"],
      correcta: 0,
      pista: "Escala mundial."
    },
    {
      pregunta: "¿Qué causa la contaminación del agua?",
      opciones: ["Peces", "Residuos industriales y cloacales", "Oxígeno"],
      correcta: 1,
      pista: "Desechos."
    },
    {
      pregunta: "El calentamiento global es causado por:",
      opciones: ["Aumento de gases de invernadero", "El frío", "Las estrellas"],
      correcta: 0,
      pista: "Gases de fábricas."
    },
    {
      pregunta: "La pérdida de biodiversidad significa:",
      opciones: ["Más flores", "Viajar más", "Menos especies de plantas y animales"],
      correcta: 2,
      pista: "Extinción."
    },
    {
      pregunta: "El smog es un problema de:",
      opciones: ["Agua", "Aire en las ciudades", "Suelo"],
      correcta: 1,
      pista: "Humo urbano."
    },
    {
      pregunta: "La desertificación es la degradación de:",
      opciones: ["El agua", "El suelo", "El aire"],
      correcta: 1,
      pista: "Tierra seca."
    },
    {
      pregunta: "Los agrotóxicos afectan principalmente:",
      opciones: ["Suelo y agua cerca de campos", "El espacio", "La luna"],
      correcta: 0,
      pista: "Química agrícola."
    },
    {
      pregunta: "Un problema ambiental puede ocurrir por:",
      opciones: ["Mala suerte", "Accidentes o acciones intencionales", "Solo accidentes"],
      correcta: 1,
      pista: "Causas humanas."
    },
    {
      pregunta: "La basura tecnológica es un problema porque:",
      opciones: ["Tiene metales tóxicos", "Es vieja", "No sirve"],
      correcta: 0,
      pista: "Electrónica."
    },
    {
      pregunta: "El cambio climático provoca:",
      opciones: ["Clima estable", "Más hielo", "Fenómenos extremos (sequías, inundaciones)"],
      correcta: 2,
      pista: "Clima extremo."
    },
    {
      pregunta: "La contaminación auditiva es producida por:",
      opciones: ["Silencio", "Música suave", "Ruidos excesivos de autos y fábricas"],
      correcta: 2,
      pista: "Mucho ruido."
    },
    {
      pregunta: "Reciclar ayuda a reducir:",
      opciones: ["La acumulación de residuos", "La inteligencia", "El viento"],
      correcta: 0,
      pista: "Las 3 R."
    },

    // Temática 5
    {
      pregunta: "¿Qué es una amenaza natural?",
      opciones: ["Inventada por el hombre", "Fenómeno natural con potencial destructivo", "Un animal"],
      correcta: 1,
      pista: "Peligro natural."
    },
    {
      pregunta: "Una amenaza de origen INTERNO es:",
      opciones: ["Terremoto y erupción volcánica", "Tornado", "Lluvia"],
      correcta: 0,
      pista: "Desde adentro."
    },
    {
      pregunta: "Una amenaza ATMOSFÉRICA es:",
      opciones: ["Tsunami", "Huracán y tornado", "Sismo"],
      correcta: 1,
      pista: "Del cielo."
    },
    {
      pregunta: "¿Qué causa un tsunami?",
      opciones: ["Mucho sol", "Viento", "Terremotos submarinos"],
      correcta: 2,
      pista: "Olas gigantes."
    },
    {
      pregunta: "Las sequías se desarrollan:",
      opciones: ["Lentamente por falta de lluvia", "En un segundo", "Solo en invierno"],
      correcta: 0,
      pista: "Poco a poco."
    },
    {
      pregunta: "El Terremoto de San Juan de 1944:",
      opciones: ["Fue suave", "Fue una de las mayores catástrofes de Argentina", "No hubo muertos"],
      correcta: 1,
      pista: "Tragedia histórica."
    },
    {
      pregunta: "Las sudestadas afectan principalmente a:",
      opciones: ["Mendoza", "San Juan", "Ciudad de Buenos Aires"],
      correcta: 2,
      pista: "Río de la Plata."
    },
    {
      pregunta: "Un volcán expulsa:",
      opciones: ["Agua fría", "Magma, cenizas y gases", "Hielo"],
      correcta: 1,
      pista: "Lava."
    },
    {
      pregunta: "Un tornado es un viento:",
      opciones: ["Giratorio en forma de embudo", "Recto", "Suave"],
      correcta: 0,
      pista: "Gira rápido."
    },
    {
      pregunta: "Las inundaciones pueden ocurrir por:",
      opciones: ["Lluvias intensas o desborde de ríos", "Falta de nubes", "Mucho calor"],
      correcta: 0,
      pista: "Mucha agua."
    },
    {
      pregunta: "Las olas de calor afectan principalmente:",
      opciones: ["Los edificios", "Las piedras", "La salud de personas y cultivos"],
      correcta: 2,
      pista: "Mucho calor."
    },
    {
      pregunta: "¿Dónde hay más riesgo sísmico en Argentina?",
      opciones: ["Buenos Aires", "Provincias del Oeste (Mendoza, San Juan)", "Misiones"],
      correcta: 1,
      pista: "Cerca de montañas."
    },
    {
      pregunta: "El granizo puede dañar:",
      opciones: ["Autos y cultivos", "Solo el agua", "El sol"],
      correcta: 0,
      pista: "Hielo cayendo."
    },
    {
      pregunta: "La nieve excesiva puede causar:",
      opciones: ["Sequía", "Calor", "Aislamiento de pueblos y avalanchas"],
      correcta: 2,
      pista: "Mucha nieve."
    },

    // Temática 6
    {
      pregunta: "¿Qué es la vulnerabilidad?",
      opciones: ["La fuerza del viento", "Grado de desprotección ante una amenaza", "Tener mucho dinero"],
      correcta: 1,
      pista: "Estar desprotegido."
    },
    {
      pregunta: "Un desastre ocurre cuando:",
      opciones: ["Llueve normal", "No hay gente", "Amenaza natural + Sociedad vulnerable"],
      correcta: 2,
      pista: "Peligro + Debilidad."
    },
    {
      pregunta: "Los edificios antisísmicos sirven para:",
      opciones: ["Reducir la vulnerabilidad ante sismos", "Gastar", "Atraer nubes"],
      correcta: 0,
      pista: "Construcción segura."
    },
    {
      pregunta: "Hay mayor vulnerabilidad si hay:",
      opciones: ["Muchos médicos", "Pobreza y falta de planes de ayuda", "Muchos parques"],
      correcta: 1,
      pista: "Falta de medios."
    },
    {
      pregunta: "La prevención consiste en:",
      opciones: ["Esperar que pase", "Tomar medidas antes para disminuir daños", "Limpiar después"],
      correcta: 1,
      pista: "Actuar antes."
    },
    {
      pregunta: "¿Por qué un sismo en Japón mata menos que en Haití?",
      opciones: ["Por mejor preparación y normas de construcción", "Por suerte", "No hay sismos"],
      correcta: 0,
      pista: "Mejor protegidos."
    },
    {
      pregunta: "Un mapa de riesgo sirve para:",
      opciones: ["Encontrar tesoros", "Pintar", "Saber qué zonas son peligrosas para vivir"],
      correcta: 2,
      pista: "Identificar peligro."
    },
    {
      pregunta: "La educación ambiental sirve para:",
      opciones: ["Saber cómo actuar ante emergencias", "Nada", "Ser más alto"],
      correcta: 0,
      pista: "Saber es prevenir."
    },
    {
      pregunta: "Un plan de evacuación es:",
      opciones: ["Un dibujo", "Guía para salir ordenado en un peligro", "Una fiesta"],
      correcta: 1,
      pista: "Ruta de salida."
    },
    {
      pregunta: "El riesgo ambiental es la probabilidad de:",
      opciones: ["Que salga el sol", "Sufrir un daño por una amenaza", "No tener problemas"],
      correcta: 1,
      pista: "Chance de daño."
    },
    {
      pregunta: "Vivir en un terreno inundable es:",
      opciones: ["Divertido", "Seguro", "Una situación de alta vulnerabilidad"],
      correcta: 2,
      pista: "Lugar insecure."
    },
    {
      pregunta: "Después de un desastre, la reconstrucción debe:",
      opciones: ["Ser más segura y planificada", "Ser igual", "No hacerse"],
      correcta: 0,
      pista: "Aprender."
    },
    {
      pregunta: "¿Qué actor social lidera la ayuda en desastres?",
      opciones: ["Las empresas", "El Estado (Defensa Civil)", "Los turistas"],
      correcta: 1,
      pista: "Poder público."
    },
    {
      pregunta: "Un desastre afecta más a:",
      opciones: ["Los que tienen refugio", "Nadie", "Las personas más pobres y vulnerables"],
      correcta: 2,
      pista: "Desigualdad."
    },

    // Temática 7
    {
      pregunta: "¿Qué es la atmósfera?",
      opciones: ["Agua dulce", "Capa de gases que rodea la Tierra", "Suelo firme"],
      correcta: 1,
      pista: "Capa gaseosa."
    },
    {
      pregunta: "El gas más abundante en el aire es:",
      opciones: ["Nitrógeno (78%)", "Oxígeno", "Argón"],
      correcta: 0,
      pista: "78 por ciento."
    },
    {
      pregunta: "El oxígeno es necesario para:",
      opciones: ["La fotosíntesis", "Hacer fuego nada más", "La respiración de los seres vivos"],
      correcta: 2,
      pista: "Respiración."
    },
    {
      pregunta: "La presión atmosférica es:",
      opciones: ["El peso del aire sobre la superficie", "El calor", "La lluvia"],
      correcta: 0,
      pista: "Peso del aire."
    },
    {
      pregunta: "¿Dónde es MENOR la presión atmosférica?",
      opciones: ["A nivel del mar", "En la cima de una montaña", "En un sótano"],
      correcta: 1,
      pista: "En lo alto."
    },
    {
      pregunta: "La capa de ozono nos protege de:",
      opciones: ["El frío", "La lluvia", "Los rayos ultravioletas (UV)"],
      correcta: 2,
      pista: "Filtro solar."
    },
    {
      pregunta: "El aire caliente tiende a:",
      opciones: ["Subir", "Bajar", "Quedarse quieto"],
      correcta: 0,
      pista: "Sube."
    },
    {
      pregunta: "El viento se produce por:",
      opciones: ["Las hojas de árboles", "Diferencias de presión y temperatura", "El movimiento del mar"],
      correcta: 1,
      pista: "Movimiento de aire."
    },
    {
      pregunta: "¿Qué gas expulsamos al respirar?",
      opciones: ["Dióxido de Carbono (CO2)", "Oxígeno", "Helio"],
      correcta: 0,
      pista: "CO2."
    },
    {
      pregunta: "La atmósfera regula la temperatura terrestre:",
      opciones: ["Falso", "Verdadero", "Solo en el desierto"],
      correcta: 1,
      pista: "Efecto invernadero natural."
    },
    {
      pregunta: "La contaminación del aire produce:",
      opciones: ["Lluvia de colores", "Más oxígeno", "Enfermedades respiratorias y smog"],
      correcta: 2,
      pista: "Smog."
    },
    {
      pregunta: "El aire es materia porque:",
      opciones: ["Tiene masa y ocupa lugar", "Es espiritual", "No se ve"],
      correcta: 0,
      pista: "Masa y volumen."
    },
    {
      pregunta: "El sonido viaja por:",
      opciones: ["El vacío", "El aire", "Ningún lado"],
      correcta: 1,
      pista: "Ondas sonoras."
    },
    {
      pregunta: "El porcentaje de oxígeno en el aire es:",
      opciones: ["100%", "21%", "78%"],
      correcta: 1,
      pista: "Casi un cuarto."
    }
  ]
},
        "Q2": {
  // 1. GUÍA DE APRENDIZAJE (Contenidos conceptuales con lecturas y validación rápida)
  guia: [
    {
      titulo: "Unitarios y Federales",
      texto: "Hacia 1820, tras expulsar a los españoles, las provincias se convirtieron en <b>Estados autónomos</b> con sus propias leyes. Surgieron dos proyectos de país enfrentados. Los <b>Unitarios</b> querían un gobierno central fuerte radicado en Buenos Aires que controlara la economía y designara gobernadores. Los <b>Federales</b> defendían las autonomías de las provincias y exigían que cada región eligiera sus líderes y participara de las ganancias del puerto.<br><br><b>Ejemplo:</b> Los unitarios vestían de azul celeste con trajes europeos elegantes, mientras que los federales usaban ponchos, moños y distintivos de color rojo punzó.<br><br><i>Recuerda: El principal conflicto económico era el control y la distribución del dinero recaudado por la Aduana de Buenos Aires.</i>",
      resumen_corto: "Unitarios querían poder centralizado en Buenos Aires; Federales defendían las autonomías provinciales.",
      preguntaValidacion: {
        q: "¿Cuál era la principal diferencia entre unitarios y federales respecto al gobierno?",
        a: ["Los unitarios querían un rey y los federales una democracia", "Los unitarios querían un poder central fuerte y los federales autonomía para las provincias", "Los federales querían separar al país en tres naciones distintas"],
        c: 1
      }
    },
    {
      titulo: "Rosas y Urquiza",
      texto: "Juan Manuel de Rosas gobernó Buenos Aires con mano firme y la <b>Suma del Poder Público</b>, controlando la aduana y prohibiendo la libre navegación de los ríos interiores. Esto perjudicaba el comercio de las provincias litorales. En 1851, Justo José de Urquiza (gobernador de Entre Ríos) lanzó su 'Pronunciamiento', rebelándose contra Rosas. Formó el <b>Ejército Grande</b> con tropas locales, uruguayas y brasileñas, derrotando a Rosas definitivamente en la histórica batalla.<br><br><b>Ejemplo:</b> La Batalla de Caseros (3 de febrero de 1852) marcó el fin del largo liderazgo de Rosas y el inicio del camino constitucional.<br><br><i>En la prueba: Urquiza no solo buscaba derrocar a Rosas, sino cumplir con la postergada meta de sancionar una Constitución Nacional.</i>",
      resumen_corto: "Urquiza lideró el Ejército Grande y derrotó a Rosas en Caseros para organizar constitucionalmente el país.",
      preguntaValidacion: {
        q: "¿En qué batalla de 1852 fue derrotado Juan Manuel de Rosas?",
        a: ["Batalla de Pavón", "Batalla de Cepeda", "Batalla de Caseros"],
        c: 2
      }
    },
    {
      titulo: "El Acuerdo de San Nicolás",
      texto: "Luego de la caída de Rosas, Urquiza convocó a los gobernadores provinciales en 1852 para sentar las bases institucionales del país. Firmaron el <b>Acuerdo de San Nicolás</b>, el cual nombró a Urquiza como Director Provisorio de la Confederación Argentina y convocó a un Congreso Constituyente en Santa Fe. Buenos Aires rechazó el acuerdo porque establecía una representación igualitaria (dos diputados por provincia), restándole el enorme peso político que solía imponer.<br><br><b>Ejemplo:</b> Al no aceptar las condiciones, Buenos Aires se sublevó en septiembre de 1852 y decidió separarse formalmente del resto del país.<br><br><i>Clave: El acuerdo sentó las bases legales directas, inspiradas en el Pacto Federal de 1831, para redactar la Constitución Nacional.</i>",
      resumen_corto: "Pacto de gobernadores de 1852 para organizar el país. Fue rechazado por Buenos Aires, iniciando su separación.",
      preguntaValidacion: {
        q: "¿Por qué Buenos Aires rechazó firmar el Acuerdo de San Nicolás?",
        a: ["Porque se decidió mudar la capital a Tucumán", "Porque le otorgaba igual cantidad de diputados que a las demás provincias, perdiendo privilegios", "Porque prohibía el comercio con Europa"],
        c: 1
      }
    },
    {
      titulo: "La Constitución Nacional",
      texto: "El Congreso Constituyente se reunió en la ciudad de Santa Fe sin la presencia de Buenos Aires. El 1° de mayo de 1853 se sancionó la <b>Constitución Nacional</b> de la República Argentina. Estableció la forma de gobierno <b>Representativa, Republicana y Federal</b>. Inspirada en las ideas del pensador Juan Bautista Alberdi, declaró la libre navegación de los ríos y dispuso la nacionalización de las rentas aduaneras para el progreso de todo el territorio nacional.<br><br><b>Ejemplo:</b> El carácter federal significaba que, aunque hubiera un presidente nacional, las provincias conservaban el derecho de elegir gobernadores y dictar leyes locales.<br><br><i>Para recordar: Buenos Aires no la firmó en 1853 porque se negaba rotundamente a compartir el dinero recaudado por su puerto.</i>",
      resumen_corto: "Sancionada en Santa Fe en 1853, fijó la forma representativa, republicana y federal del Estado argentino.",
      preguntaValidacion: {
        q: "¿Qué forma de gobierno quedó plasmada de manera definitiva en la Constitución de 1853?",
        a: ["Monárquica, centralista y parlamentaria", "Representativa, republicana y federal", "Democrática, unitaria y comunal"],
        c: 1
      }
    },
    {
      titulo: "El Estado de Buenos Aires y la Confederación",
      texto: "Entre 1852 y 1861, la Argentina estuvo dividida en dos Estados independientes: la <b>Confederación Argentina</b> (integrada por las 13 provincias del interior, con capital en Paraná) y el <b>Estado de Buenos Aires</b>. Mientras Buenos Aires prosperaba vertiginosamente gracias a los recursos de su aduana y puerto, la Confederación sufría graves crisis económicas. Urquiza intentó competir creando la Ley de Derechos Diferenciales, pero las tensiones económicas terminaron desatando inevitables enfrentamientos militares.<br><br><b>Ejemplo:</b> La Confederación debió emitir su propia moneda y buscar rutas de comercio alternativas, pero la falta de un puerto de ultramar asfixiaba sus finanzas.<br><br><i>Ojo: La Batalla de Cepeda de 1859 forzó un intento de unión a través del Pacto de San José de Flores, pero la paz duró muy poco.</i>",
      resumen_corto: "El país estuvo dividido diez años en dos gobiernos: la Confederación en Paraná y el Estado de Buenos Aires.",
      preguntaValidacion: {
        q: "¿Cuál era la principal debilidad económica de la Confederación frente a Buenos Aires?",
        a: ["La falta de tierras cultivables en el interior", "No contar con los ingresos del puerto y la aduana porteña", "La ausencia total de industrias textiles"],
        c: 1
      }
    },
    {
      titulo: "La Unificación y la Presidencia de Mitre",
      texto: "En 1861, las tensiones remanentes llevaron a la decisiva <b>Batalla de Pavón</b>. Mitre, al mando de las fuerzas porteñas, triunfó sobre Urquiza. La Confederación se disolvió y Buenos Aires lideró la unificación definitiva. En 1862, **Bartolomé Mitre** fue elegido como el primer presidente del país unificado, iniciando la era de las **Presidencias Históricas**. Sus metas centrales fueron centralizar la autoridad política, organizar instituciones nacionales y unificar las fuerzas militares.<br><br><b>Ejemplo:</b> Mitre creó un Ejército Nacional permanente, disolviendo las milicias provinciales, lo que desató fuertes rebeliones de caudillos federales en el interior.<br><br><i>Dato de examen: Bajo su mandato se fundó la Corte Suprema de Justicia de la Nación y se expandieron fuertemente las vías ferroviarias.</i>",
      resumen_corto: "Mitre venció en Pavón (1861), unificó la nación bajo control porteño y organizó el Ejército y la Justicia federal.",
      preguntaValidacion: {
        q: "¿Qué batalla militar selló la unificación nacional bajo la hegemonía de Buenos Aires?",
        a: ["Batalla de Caseros", "Batalla de Pavón", "Batalla de San Lorenzo"],
        c: 1
      }
    },
    {
      titulo: "La Presidencia de Sarmiento",
      texto: "Domingo Faustino Sarmiento gobernó entre 1868 y 1874. Su gestión tuvo como eje absoluto la modernización del país a través de la **educación popular**, considerada el único motor de civilización y progreso. Fundó más de 800 escuelas, promovió academias científicas y organizó en 1869 el **Primer Censo Nacional de Población**. Además, extendió las líneas de telégrafo, expandió el ferrocarril e incentivó decididamente el arribo de inmigrantes europeos para poblar el suelo agrícola.<br><br><b>Ejemplo:</b> El censo de 1869 alarmó al gobierno al revelar que casi el 80% de la población era analfabeta, justificando la creación masiva de Escuelas Normales para formar maestros.<br><br><i>Clave: Sarmiento creía que la educación pública era la herramienta estatal indispensable para pacificar y unir culturalmente a la sociedad.</i>",
      resumen_corto: "Sarmiento priorizó la educación pública, realizó el primer censo nacional y extendió redes de telégrafos y trenes.",
      preguntaValidacion: {
        q: "¿Cuál fue el principal hallazgo del censo nacional de 1869 que impulsó las reformas de Sarmiento?",
        a: ["Que la población era mayoritariamente extranjera", "Que existía un altísimo índice de analfabetismo en el país", "Que la mayoría de las personas vivía en la Patagonia"],
        c: 1
      }
    },
    {
      titulo: "La Guerra de la Triple Alianza",
      texto: "Entre 1865 y 1870 se desarrolló la **Guerra de la Triple Alianza**, una contienda bélica sumamente sangrienta donde la Argentina, Brasil y Uruguay combatieron unidos contra Paraguay, gobernado por Francisco Solano López. El detonante fue la ocupación paraguaya de Corrientes tras la negativa de Mitre de otorgarles libre paso hacia Brasil. La guerra consolidó el poder militar del gobierno central argentino, pero generó rechazo en las provincias, que sufrían el **reclutamiento forzoso** de soldados.<br><br><b>Ejemplo:</b> El soldado y pintor Cándido López perdió un brazo en combate, pero plasmó con precisión documental las crudas escenas de la guerra en óleos históricos.<br><br><i>En la prueba: Aunque los aliados ganaron, Paraguay quedó devastado, destruido en infraestructura y perdiendo casi toda su población masculina adulta.</i>",
      resumen_corto: "Conflicto bélico violento (1865-1870) de Argentina, Brasil y Uruguay contra Paraguay. Fortaleció al Ejército Nacional.",
      preguntaValidacion: {
        q: "¿Qué hecho provocó la participación directa de Argentina en la Guerra de la Triple Alianza?",
        a: ["Un ataque paraguayo directo al puerto de Buenos Aires", "La invasión de tropas paraguayas a la provincia de Corrientes", "La firma de un acuerdo comercial secreto"],
        c: 1
      }
    },
    {
      titulo: "La Presidencia de Avellaneda y el Avance de Fronteras",
      texto: "Nicolás Avellaneda asumió la presidencia entre 1874 y 1880, afrontando el desafío de delimitar las fronteras territoriales del Estado nacional. Su primer Ministro de Guerra, Adolfo Alsina, implementó una estrategia defensiva construyendo la famosa **Zanja de Alsina**, un sistema de fosas y fortines para frenar el avance de los malones indígenas y proteger el ganado criollo. A la muerte de Alsina, Julio Argentino Roca asumió el cargo e implementó un plan ofensivo radicalmente opuesto.<br><br><b>Ejemplo:</b> La Ley Avellaneda fomentó activamente la colonización agrícola, entregando tierras a los contingentes de inmigrantes que arribaban masivamente.<br><br><i>Recuerda: Avellaneda coronó su gestión logrando la federalización de Buenos Aires en 1880, convirtiéndola definitivamente en la capital del país.</i>",
      resumen_corto: "Avellaneda impulsó la colonización agrícola y dio paso al avance militar sobre los territorios indígenas del sur.",
      preguntaValidacion: {
        q: "¿En qué consistió inicialmente la estrategia de Adolfo Alsina en la frontera indígena?",
        a: ["En un ataque sorpresa en la Patagonia profunda", "En la construcción de una línea de fosas y fortines defensivos", "En la firma de tratados de paz perpetua"],
        c: 1
      }
    },
    {
      titulo: "Campañas Militares y sus Consecuencias",
      texto: "En 1879 se ejecutó la **Conquista del Desierto**, una ofensiva militar agresiva comandada por Julio A. Roca sobre la Patagonia y La Pampa. El Estado incorporó millones de hectáreas aptas para la ganadería, consolidando el **modelo agroexportador**. Sin embargo, las consecuencias humanas para las comunidades originarias (Mapuche, Tehuelche, Ranquel) fueron trágicas: desarticulación cultural, miles de muertes y el sometimiento a regímenes de trabajo forzado tras ser despojados de sus tierras.<br><br><b>Ejemplo:</b> Familias enteras de prisioneros indígenas fueron trasladadas a pie, separando a mujeres y niños para ser enviados como sirvientes a centros urbanos.<br><br><i>Clave de cierre: Estas campañas militares eliminaron las fronteras internas del país y fijaron los límites de la soberanía territorial argentina actual.</i>",
      resumen_corto: "La campaña militar de 1879 anexó tierras patagónicas al modelo agroexportador, sometiendo trágicamente a los pueblos originarios.",
      preguntaValidacion: {
        q: "¿Cuál fue el impacto económico principal de las campañas militares en la Patagonia?",
        a: ["La creación de las primeras fábricas de automóviles del país", "La incorporación de millones de hectáreas para la producción agroexportadora", "El fin definitivo del comercio marítimo internacional"],
        c: 1
      }
    }
  ],

  // 2. GLOSARIO UNIFICADO Y PLANO (Términos conceptuales ordenados lógicamente)
  glosario: [
    { termino: "Autonomía Provincial", def: "Facultad de cada provincia para dictar sus leyes, gobernarse y administrar sus propios recursos económicos." },
    { termino: "Unitarios", def: "Grupo político que defendía un sistema de gobierno centralizado con eje indiscutido en Buenos Aires." },
    { termino: "Federales", def: "Agrupación política que propugnaba la autonomía regional y la distribución equitativa de las rentas nacionales." },
    { termino: "Rentas Aduaneras", def: "Impuestos recaudados por el ingreso de productos importados del exterior a través de la aduana del puerto." },
    { termino: "Suma del Poder Público", def: "Otorgamiento excepcional de los tres poderes de gobierno (Ejecutivo, Legislativo y Judicial) a una sola persona." },
    { termino: "Ejército Grande", def: "Fuerza militar aliada al mando de Urquiza que derrotó a Juan Manuel de Rosas en 1852." },
    { termino: "Pronunciamiento", def: "Declaración política y militar pública realizada por Urquiza para quitarle la delegación de relaciones exteriores a Rosas." },
    { termino: "Acuerdo de San Nicolás", def: "Compromiso firmado en 1852 por gobernadores provinciales para convocar al Congreso Constituyente." },
    { termino: "Forma Republicana", def: "Sistema de gobierno basado en la división de poderes, la publicidad de los actos públicos y la elección periódica." },
    { termino: "Confederación Argentina", def: "Unión de las provincias del interior argentino con capital en Paraná durante la separación de Buenos Aires." },
    { termino: "Derechos Diferenciales", def: "Impuestos aduaneros especiales creados por la Confederación para desalentar el uso comercial del puerto porteño." },
    { termino: "Presidencias Históricas", def: "Mandatos sucesivos de Mitre, Sarmiento y Avellaneda que consolidaron institucionalmente al Estado argentino." },
    { termino: "Ejército Nacional", def: "Fuerza militar regular unificada creada por el Estado nacional para centralizar la fuerza pública." },
    { termino: "Analfabetismo", def: "Condición social de no saber leer ni escribir, detectada en niveles altísimos durante el censo de 1869." },
    { termino: "Escuelas Normales", def: "Instituciones educativas creadas específicamente para la formación académica y pedagógica de maestros profesionales."
    },
    { termino: "Triple Alianza", def: "Pacto político y militar firmado por la Argentina, Brasil y Uruguay en 1865 para combatir a Paraguay." },
    { termino: "Reclutamiento Forzoso", def: "Obligación legal impuesta por el gobierno para incorporar ciudadanos comunes a las filas del ejército en tiempos de guerra." },
    { termino: "Zanja de Alsina", def: "Línea de fosas cavadas en el suelo bonaerense para frenar los ataques de los malones y el arreo de ganado." },
    { termino: "Conquista del Desierto", def: "Nombre histórico dado a las expediciones militares de 1879 dirigidas a ocupar por la fuerza tierras indígenas del sur." },
    { termino: "Modelo Agroexportador", def: "Sistema económico basado en la producción masiva de materias primas agrícolas y ganaderas para vender al exterior." },
    { termino: "Federalización", def: "Acto legal que convirtió a la Ciudad de Buenos Aires en la capital de toda la nación, desvinculándola de su provincia." }
  ],

  // 3. SIMULACRO DE EVALUACIÓN (100 Preguntas estrictamente numeradas por temática)
  simulacro: [
    // --- TEMÁTICA 1: UNITARIOS Y FEDERALES (Preguntas 1-10) ---
    {
      pregunta: "¿Qué modelo político defendían los unitarios hacia 1820?",
      opciones: ["Un gobierno centralizado con sede en Buenos Aires", "La total separación de las provincias en países independientes", "Un régimen monárquico manejado por caudillos locales"],
      correcta: 0,
      pista: "Buscaban concentrar la toma de decisiones en un solo punto fuerte."
    },
    {
      pregunta: "¿Qué exigían los federales para la organización nacional?",
      opciones: ["Que Buenos Aires gobernara sin constituciones", "El respeto a las autonomías de las provincias y el reparto de ingresos portuarios", "La eliminación de todas las aduanas del país"],
      correcta: 1,
      pista: "Defendían el derecho al autogobierno de las regiones."
    },
    {
      pregunta: "¿Con qué color y estilo de vestimenta se identificaban típicamente los unitarios?",
      opciones: ["Rojo punzó y vestimenta gaucha", "Azul o celeste, vistiendo según la moda elegante europea", "Verde brillante y uniformes de gala españoles"],
      correcta: 1,
      pista: "Miraban hacia las modas y costumbres de Europa occidental."
    },
    {
      pregunta: "¿Qué distintivo visual utilizaban los federales para mostrar su pertenencia política?",
      opciones: ["Gorros, moños, divisas y ponchos de color rojo punzó", "Sombreros de copa alta grises", "Pañuelos celestes atados al cuello"],
      correcta: 0,
      pista: "El rojo intenso era su color de bandera e identidad."
    },
    {
      pregunta: "Tras la disolución de la autoridad central en 1820, las provincias se convirtieron en:",
      opciones: ["Colonias inglesas", "Provincias dependientes del Uruguay", "Estados autónomos con leyes e instituciones propias"],
      correcta: 2,
      pista: "Cada provincia se gobernó a sí misma de forma independiente."
    },
    {
      pregunta: "¿Por qué las provincias rechazaron los intentos constitucionales de 1819 y 1826?",
      opciones: ["Porque le daban excesivo poder al gobierno central en desmedro del interior", "Porque estaban redactadas en idioma extranjero", "Porque permitían que gobernaran reyes españoles"],
      correcta: 0,
      pista: "Esos textos limitaban la autonomía de las provincias."
    },
    {
      pregunta: "¿Cuál era el recurso económico clave que causaba disputa entre Buenos Aires y el interior?",
      opciones: ["La recolección de minerales en el norte", "Los ingresos de la aduana del puerto de Buenos Aires", "La venta de maderas de los bosques del sur"],
      correcta: 1,
      pista: "Era la principal fuente de dinero en efectivo del comercio exterior."
    },
    {
      pregunta: "La frase 'Cada provincia dicta sus leyes y elige gobernadores' corresponde al ideal:",
      opciones: ["Unitario", "Federal", "Monárquico"],
      correcta: 1,
      pista: "Es la base del federalismo."
    },
    {
      pregunta: "¿Por qué se consideraba a Buenos Aires la provincia privilegiada en la década de 1820?",
      opciones: ["Porque no tenía deudas con otros países", "Por concentrar el único puerto habilitado para el comercio de ultramar", "Por poseer montañas con yacimientos de oro"],
      correcta: 1,
      pista: "Toda la mercancía obligatoriamente entraba o salía por allí."
    },
    {
      pregunta: "¿Cómo afectaban los caudillos locales al conflicto entre unitarios y federales?",
      opciones: ["Lideraban las defensas de las autonomías provinciales frente a los avances centralistas", "Apoyaban siempre los dictados del gobernador porteño", "Viajaban a Europa para conseguir ejércitos profesionales"],
      correcta: 0,
      pista: "Eran jefes populares defensores de su región."
    },

    // --- TEMÁTICA 2: ROSAS Y URQUIZA (Preguntas 11-20) ---
    {
      pregunta: "¿Bajo qué herramienta legal ejerció Juan Manuel de Rosas su segundo mandato en Buenos Aires?",
      opciones: ["La Constitución Nacional de 1853", "La Suma del Poder Público", "Un triunvirato rotativo"],
      correcta: 1,
      pista: "Concentraba las funciones ejecutivas, legislativas y judiciales."
    },
    {
      pregunta: "¿Qué medida económica de Rosas generaba fuertes tensiones con las provincias litorales?",
      opciones: ["El cierre total del comercio con Gran Bretaña", "La prohibición de la libre navegación de los ríos interiores Paraná y Uruguay", "La quema de pastizales en Entre Ríos"],
      correcta: 1,
      pista: "Obligaba a todos los barcos extranjeros a pasar primero por Buenos Aires."
    },
    {
      pregunta: "¿Quién fue el gobernador entrerriano que lideró la ruptura definitiva contra Rosas?",
      opciones: ["Bartolomé Mitre", "Facundo Quiroga", "Justo José de Urquiza"],
      correcta: 2,
      pista: "Realizó el famoso Pronunciamiento político en 1851."
    },
    {
      pregunta: "¿Qué reclamaba Urquiza en su Pronunciamiento público de 1851?",
      opciones: ["La separación definitiva de Entre Ríos de la Argentina", "La sanción de una Constitución Nacional y el fin de la delegación de Relaciones Exteriores en Rosas", "Que Rosas fuera nombrado presidente vitalicio"],
      correcta: 1,
      pista: "Exigía la organización institucional del país."
    },
    {
      pregunta: "¿Cómo se denominó al ejército multinacional unificado comandado por Urquiza?",
      opciones: ["Ejército Grande", "Ejército de los Andes", "Fuerzas Federales Unidas"],
      correcta: 0,
      pista: "Sumó contingentes de Entre Ríos, Corrientes, Uruguay y Brasil."
    },
    {
      pregunta: "¿En qué batalla de febrero de 1852 cayó derrotado el régimen de Juan Manuel de Rosas?",
      opciones: ["Batalla de Pavón", "Batalla de Caseros", "Batalla de Cepeda"],
      correcta: 1,
      pista: "Ocurrió en los terrenos de la estancia de la familia Caseros."
    },
    {
      pregunta: "¿Qué destino tomó Juan Manuel de Rosas inmediatamente después de perder la batalla?",
      opciones: ["Se refugió en el norte del país", "Se exilió en Inglaterra donde vivió hasta su muerte", "Asumió como gobernador de Santa Fe"],
      correcta: 1,
      pista: "Viajó en barco hacia Europa."
    },
    {
      pregunta: "Urquiza representaba un federalismo de base litoral que deseaba:",
      opciones: ["Habilitar puertos provinciales al comercio directo", "Centralizar todo en Entre Ríos", "Entregar la aduana a los franceses"],
      correcta: 0,
      pista: "Buscaba la libre navegación fluvial para vender los productos de su región."
    },
    {
      pregunta: "¿Qué rol jugó el Imperio de Brasil dentro del Ejército Grande de Urquiza?",
      opciones: ["Aportó tropas e importante apoyo financiero para desbancar a Rosas", "Se mantuvo neutral observando desde las fronteras", "Atacó las costas de Entre Ríos por sorpresa"],
      correcta: 0,
      pista: "Tenía intereses en debilitar la influencia porteña en el Río de la Plata."
    },
    {
      pregunta: "¿Cuál fue el principal logro político inmediato a la caída de Rosas?",
      opciones: ["La paz absoluta sin más guerras", "El inicio del proceso de organización constitucional del país", "La anexión de Uruguay a la Argentina"],
      correcta: 1,
      pista: "Se abrió paso a la redacción de la ley fundamental."
    },

    // --- TEMÁTICA 3: ACUERDO DE SAN NICOLÁS (Preguntas 21-30) ---
    {
      pregunta: "¿Cuál era el objetivo central del Acuerdo de San Nicolás firmado en mayo de 1852?",
      opciones: ["Declarar la guerra a Chile", "Sentar las pautas para convocar un Congreso General Constituyente", "Elegir a un rey para las Provincias Unidas"],
      correcta: 1,
      pista: "Buscaba reunir a los representantes para hacer la Constitución."
    },
    {
      pregunta: "¿Qué cargo provisorio le otorgó el Acuerdo de San Nicolás a Justo José de Urquiza?",
      opciones: ["Presidente Constitucional", "Director Provisorio de la Confederación Argentina", "Gobernador Vitalicio de Buenos Aires"],
      correcta: 1,
      pista: "Le dio el mando político y militar provisorio de la unión nacional."
    },
    {
      pregunta: "¿Por qué Buenos Aires se opuso rotundamente a ratificar el Acuerdo de San Nicolás?",
      opciones: ["Porque fijaba que todas las provincias tendrían igual número de diputados", "Porque la reunión se hizo en un barco inglés", "Porque obligaba a mudar todos los habitantes a Santa Fe"],
      correcta: 0,
      pista: "Perdía la mayoría automática basada en su mayor densidad poblacional."
    },
    {
      pregunta: "¿Qué pacto histórico de 1831 se tomó como antecedente directo en el Acuerdo de San Nicolás?",
      opciones: ["Tratado del Pilar", "Pacto de San José de Flores", "Pacto Federal"],
      correcta: 2,
      pista: "Era el pacto previo que unía a las provincias federales."
    },
    {
      pregunta: "¿Qué ciudad fue elegida por el acuerdo para celebrar las sesiones del Congreso Constituyente?",
      opciones: ["Buenos Aires", "Rosario", "Santa Fe"],
      correcta: 2,
      pista: "Una histórica ciudad santafesina a la vera del río Paraná."
    },
    {
      pregunta: "¿Qué dirigente porteño lideró los encendidos debates en contra del Acuerdo de San Nicolás?",
      opciones: ["Bartolomé Mitre", "Juan Bautista Alberdi", "Facundo Quiroga"],
      correcta: 0,
      pista: "Defendía fervientemente la preeminencia del Estado porteño."
    },
    {
      pregunta: "¿Qué decisión drástica tomó Buenos Aires tras los sucesos de septiembre de 1852?",
      opciones: ["Se disolvió como provincia", "Se separó formalmente del resto de las provincias, formando un Estado propio", "Le declaró la guerra al Imperio del Brasil"],
      correcta: 1,
      pista: "Inició casi una década de existencia independiente al resto del país."
    },
    {
      pregunta: "El Acuerdo de San Nicolás disponía que los gastos del Congreso Constituyente se pagarían con:",
      opciones: ["Préstamos otorgados por Francia", "Un porcentaje proporcional de las rentas de las aduanas de todas las provincias", "Donaciones de los vecinos de San Nicolás"],
      correcta: 1,
      pista: "Nacionalizaba temporalmente los fondos portuarios para financiar el proceso."
    },
    {
      pregunta: "Bajo los términos del acuerdo, el control de las fuerzas militares nacionales quedaba a cargo de:",
      opciones: ["Cada gobernador por separado", "Justo José de Urquiza", "Un general elegido por Buenos Aires"],
      correcta: 1,
      pista: "Se centralizó el mando militar en el Director Provisorio."
    },
    {
      pregunta: "¿Qué ocurrió con las sesiones del Congreso Constituyente en Santa Fe ante la ausencia de Buenos Aires?",
      opciones: ["Se suspendieron por cinco años", "Continuaron normalmente con las trece provincias restantes", "Se mudaron de urgencia a Entre Ríos"],
      correcta: 1,
      pista: "Las provincias del interior siguieron adelante con el plan institucional."
    },

    // --- TEMÁTICA 4: LA CONSTITUCIÓN NACIONAL (Preguntas 31-40) ---
    {
      pregunta: "¿En qué fecha exacta fue sancionada la primera Constitución Nacional de Argentina?",
      opciones: ["25 de Mayo de 1810", "9 de Julio de 1816", "1 de Mayo de 1853"],
      correcta: 2,
      pista: "Coincide con el día del pronunciamiento de Urquiza."
    },
    {
      pregunta: "¿Qué significa la forma de gobierno 'Representativa' consagrada en el artículo 1°?",
      opciones: ["Que el pueblo gobierna directamente en asambleas", "Que el pueblo delibera y gobierna a través de sus representantes elegidos", "Que el presidente toma todas las decisiones sin consultar"],
      correcta: 1,
      pista: "Los ciudadanos eligen gobernantes para que actúen en su nombre."
    },
    {
      pregunta: "¿Qué pilar caracteriza a la forma 'Republicana' de gobierno?",
      opciones: ["La existencia de un poder absoluto del rey", "La división de poderes (Ejecutivo, Legislativo y Judicial) y la periodicidad de mandatos", "Que los cargos de gobierno son hereditarios"],
      correcta: 1,
      pista: "Garantiza el equilibrio y control entre las instituciones del Estado."
    },
    {
      pregunta: "¿Qué implica que el Estado argentino adopte la forma 'Federal'?",
      opciones: ["Que las provincias pierden sus nombres", "Que existe un único gobierno y no hay gobernadores locales", "Que las provincias reconocen un gobierno nacional pero conservan sus autonomías locales"],
      correcta: 2,
      pista: "Hay convivencia entre el poder central y los poderes de cada provincia."
    },
    {
      pregunta: "¿Qué intelectual tucumano inspiró el contenido de la Constitución de 1853 con sus escritos?",
      opciones: ["Domingo F. Sarmiento", "Juan Bautista Alberdi", "Manuel Belgrano"],
      correcta: 1,
      pista: "Autor del célebre libro 'Bases y puntos de partida para la organización política'."
    },
    {
      pregunta: "¿Qué dispuso la Constitución de 1853 sobre los ríos interiores?",
      opciones: ["Su cierre absoluto para el comercio", "La libre navegación para buques de todas las banderas extranjeras", "Que pertenecían exclusivamente a Santa Fe"],
      correcta: 1,
      pista: "Terminó con el histórico monopolio de control fluvial que ejercía Buenos Aires."
    },
    {
      pregunta: "¿Por qué Buenos Aires no participó ni firmó la Constitución en 1853?",
      opciones: ["Porque se encontraba separada del resto del país y rechazaba la nacionalización de la aduana", "Porque sus diputados se perdieron en el viaje", "Porque prefería un régimen monárquico"],
      correcta: 0,
      pista: "No quería ceder el control y dinero de sus rentas portuarias."
    },
    {
      pregunta: "La Constitución de 1853 estableció la libertad de culto, lo que significaba que:",
      opciones: ["Solo se permitía la religión católica", "Los habitantes podían profesar y practicar su religión libremente", "Estaba prohibido construir iglesias"],
      correcta: 1,
      pista: "Fomentaba la tolerancia y la atracción de inmigrantes de diversas creencias."
    },
    {
      pregunta: "De acuerdo al texto constitucional, el Poder Ejecutivo Nacional quedaba compuesto por:",
      opciones: ["Un Presidente y un Vicepresidente elegidos por un período de 6 años", "Un directorio de tres personas del interior", "Un rey y su primer ministro"],
      correcta: 0,
      pista: "Fijó un mandato presidencial extenso sin reelección inmediata."
    },
    {
      pregunta: "¿Por qué se eligió Santa Fe para las deliberaciones constitucionales de 1852 y 1853?",
      opciones: ["Porque tenía los hoteles más lujosos", "Para garantizar un territorio federal neutral y alejado de la influencia de Buenos Aires", "Porque era la provincia con mayor cantidad de habitantes"],
      correcta: 1,
      pista: "Buscaban descentralizar el peso político del puerto bonaerense."
    },

    // --- TEMÁTICA 5: ESTADO DE BUENOS AIRES Y CONFEDERACIÓN (Preguntas 41-50) ---
    {
      pregunta: "Entre 1852 y 1861, el territorio de la actual Argentina estuvo dividido en:",
      opciones: ["El Estado de Buenos Aires y la Confederación Argentina", "Tres virreinatos autónomos", "La República del Plata y la República del Interior"],
      correcta: 0,
      pista: "Convivieron dos organizaciones gubernamentales independientes simultáneas."
    },
    {
      pregunta: "¿Qué ciudad funcionó como capital de la Confederación Argentina durante esos diez años?",
      opciones: ["Santa Fe", "Rosario", "Paraná"],
      correcta: 2,
      pista: "Una importante ciudad entrerriana sobre el río homónimo."
    },
    {
      pregunta: "¿Quién fue elegido como el primer Presidente de la Confederación Argentina en 1854?",
      opciones: ["Bartolomé Mitre", "Justo José de Urquiza", "Santiago Derqui"],
      correcta: 1,
      pista: "El vencedor de Caseros inauguró el período constitucional del interior."
    },
    {
      pregunta: "¿Cuál era la principal fortaleza económica del Estado de Buenos Aires durante la separación?",
      opciones: ["La explotación de minas de plata", "La recaudación exclusiva de los impuestos de su aduana portuaria", "La exportación de caña de azúcar"],
      correcta: 1,
      pista: "El comercio de ultramar le garantizaba abundantes fondos constantes."
    },
    {
      pregunta: "¿Qué grave problemática financiera aquejaba crónicamente a la Confederación Argentina?",
      opciones: ["La falta de tierras fértiles", "La escasez de recursos económicos debido a no contar con el puerto porteño", "Tener demasiadas fábricas paradas"],
      correcta: 1,
      pista: "Las aduanas interiores fluviales recaudaban muy poco dinero."
    },
    {
      pregunta: "¿Qué ley creó la Confederación para competir y quitarle comercio marítimo a Buenos Aires?",
      opciones: ["La Ley de Derechos Diferenciales", "El Tratado de Libre Comercio Fluvial", "La Ley de Aduanas Secas"],
      correcta: 0,
      pista: "Cobraba menos impuestos a los barcos que iban directo a puertos del interior (como Rosario)."
    },
    {
      pregunta: "¿Qué batalla militar enfrentó a ambos estados en 1859?",
      opciones: ["Batalla de Caseros", "Batalla de Pavón", "Batalla de Cepeda"],
      correcta: 2,
      pista: "Urquiza venció a las tropas porteñas comandadas por Mitre."
    },
    {
      pregunta: "¿Qué pacto de unión se firmó tras la Batalla de Cepeda en 1859?",
      opciones: ["Pacto Federal", "Pacto de San José de Flores", "Acuerdo de San Nicolás"],
      correcta: 1,
      pista: "Buenos Aires aceptó integrarse a la Confederación previa revisión de la Constitución."
    },
    {
      pregunta: "¿Por qué fracasó rápidamente el intento de integración de 1859?",
      opciones: ["Porque Buenos Aires volvió a rechazar las leyes aduaneras y las elecciones nacionales", "Porque Entre Ríos fue invadida por Uruguay", "Porque se descubrió oro en Paraná"],
      correcta: 0,
      pista: "Las disputas por el poder real y los fondos de la aduana subsistían."
    },
    {
      pregunta: "Durante este período de división, la Confederación Argentina logró:",
      opciones: ["Anexar el territorio de Paraguay", "Establecer escuelas, emitir moneda propia y organizar rutas comerciales fluviales", "Construir la primera línea de subterráneos"],
      correcta: 1,
      pista: "Hizo grandes esfuerzos institucionales a pesar de la asfixia económica."
    },

    // --- TEMÁTICA 6: LA UNIFICACIÓN DEL PAÍS Y MITRE (Preguntas 51-60) ---
    {
      pregunta: "¿Qué batalla militar de 1861 selló el fin de la Confederación y la unificación del país?",
      opciones: ["Batalla de Pavón", "Batalla de Caseros", "Batalla de Tucumán"],
      correcta: 0,
      pista: "Enfrentó nuevamente a Mitre y Urquiza, pero con un desenlace diferente."
    },
    {
      pregunta: "¿Qué actitud sorpresiva tomó Urquiza en la Batalla de Pavón que facilitó el triunfo porteño?",
      opciones: ["Se pasó al bando unitario", "Decidió retirar sus tropas entrerrianas del campo de batalla sin combatir a fondo", "Arrestó a todos sus generales"],
      correcta: 1,
      pista: "Su retirada dejó el triunfo político en manos de Buenos Aires."
    },
    {
      pregunta: "¿Quién asumió como presidente de la Nación unificada en octubre de 1862?",
      opciones: ["Domingo F. Sarmiento", "Nicolás Avellaneda", "Bartolomé Mitre"],
      correcta: 2,
      pista: "Fue el primer mandatario del territorio integrado e institucionalizado."
    },
    {
      pregunta: "¿Cómo se denomina históricamente al trío de presidencias inaugurado por Mitre?",
      opciones: ["Presidencias Históricas o de Organización Nacional", "Gobiernos Unitarios Tardíos", "El Triunvirato de la Unificación"],
      correcta: 0,
      pista: "Estructuraron los cimientos definitivos del Estado moderno."
    },
    {
      pregunta: "¿Cuál fue una de las principales medidas de Mitre para centralizar la fuerza pública?",
      opciones: ["La creación de ejércitos en cada municipio", "La formación de un Ejército Nacional permanente y la disolución de milicias locales", "Contratar piratas para custodiar los ríos"],
      correcta: 1,
      pista: "El Estado central pasó a tener el monopolio exclusivo de las armas."
    },
    {
      pregunta: "¿Qué caudillo riojano lideró una gran resistencia armada contra el centralismo de Mitre?",
      opciones: ["Ángel Vicente 'El Chacho' Peñaloza", "Juan Facundo Quiroga", "Juan Manuel de Rosas"],
      correcta: 0,
      pista: "Defensor del federalismo del interior profundo y los derechos de las provincias empobrecidas."
    },
    {
      pregunta: "¿Qué institución máxima del poder judicial se organizó bajo el gobierno de Mitre?",
      opciones: ["El Tribunal del Consulado", "La Corte Suprema de Justicia de la Nación", "El Consejo de la Magistratura Colonial"],
      correcta: 1,
      pista: "Cumplió con la división de poderes ordenada por la Constitución."
    },
    {
      pregunta: "Bajo la presidencia de Mitre, los ingresos de la Aduana de Buenos Aires pasaron a ser:",
      opciones: ["Exclusivos de la provincia de Buenos Aires", "Nacionalizados para el sostenimiento de todo el Estado federal", "Entregados al Banco de Inglaterra"],
      correcta: 1,
      pista: "Se implementó finalmente el mandato económico constitucional de 1853."
    },
    {
      pregunta: "¿Qué infraestructura de transporte clave fomentó Mitre mediante inversiones británicas?",
      opciones: ["Las flotas de globos aerostáticos", "Las redes de tranvías eléctricos en el campo", "La extensión de ramales del ferrocarril"],
      correcta: 2,
      pista: "Buscaba interconectar la producción agraria con el puerto de salida."
    },
    {
      pregunta: "Al terminar el gobierno de Mitre en 1868, el principal logro había sido:",
      opciones: ["Erradicar la pobreza por completo", "Establecer la estructura básica y la autoridad del Estado Nacional en todo el país", "La conquista total de la Antártida"],
      correcta: 1,
      pista: "Se consolidó la unidad política bajo un mando institucional único."
    },

    // --- TEMÁTICA 7: LA PRESIDENCIA DE SARMIENTO (Preguntas 61-70) ---
    {
      pregunta: "¿En qué período gobernó Domingo Faustino Sarmiento como presidente de la Argentina?",
      opciones: ["1853 a 1859", "1862 a 1868", "1868 a 1874"],
      correcta: 2,
      pista: "Fue el segundo mandatario del ciclo de las Presidencias Históricas."
    },
    {
      pregunta: "Sarmiento consideraba que el instrumento fundamental para alcanzar la civilización era:",
      opciones: ["La guerra contra países vecinos", "La educación pública y popular", "El aumento de impuestos a la carne"],
      correcta: 1,
      pista: "Dedicó gran parte de su vida y gobierno a combatir la ignorancia analfabeta."
    },
    {
      pregunta: "¿Qué gran relevamiento demográfico estatal se realizó por primera vez en 1869?",
      opciones: ["El Primer Censo Nacional de Población", "Un padrón exclusivo de propietarios de tierras", "Un conteo de ganado bovino"],
      correcta: 0,
      pista: "Permitió conocer con exactitud cuántos habitantes había y cómo vivían."
    },
    {
      pregunta: "¿Qué alarmante dato social arrojó el censo nacional de 1869?",
      opciones: ["Que la mayoría de la población vivía en islas del Paraná", "Que casi el 80% de los habitantes del país era analfabeto", "Que no quedaban niños en edad escolar"],
      correcta: 1,
      pista: "Justificó la urgencia de sus profundas reformas educativas."
    },
    {
      pregunta: "Para solucionar la falta de maestros profesionales, Sarmiento creó:",
      opciones: ["Las Escuelas Normales", "Las academias militares de frontera", "Los sindicatos de trabajadores de la tiza"],
      correcta: 0,
      pista: "Instituciones específicas destinadas a formar docentes diplomados."
    },
    {
      pregunta: "¿Qué tecnología de comunicaciones a larga distancia se expandió fuertemente con Sarmiento?",
      opciones: ["El correo a caballo exclusivo", "Las líneas del telégrafo eléctrico", "La radio de onda corta"],
      correcta: 1,
      pista: "Permitió la comunicación instantánea entre Buenos Aires y las provincias."
    },
    {
      pregunta: "¿Qué institución científica astronómica inauguró Sarmiento en la provincia de Córdoba?",
      opciones: ["El Observatorio Astronómico Nacional", "La Agencia Espacial del Plata", "El Museo de Ciencias Naturales"],
      correcta: 0,
      pista: "Impulsó el desarrollo de la ciencia dura y la cartografía estelar."
    },
    {
      pregunta: "Sarmiento incentivó fuertemente la llegada de inmigrantes procedentes de:",
      opciones: ["Europa occidental", "Asia oriental", "África del Norte"],
      correcta: 0,
      pista: "Buscaba poblar campos e introducir nuevos hábitos de cultivo e industria."
    },
    {
      pregunta: "¿A qué institución cultural benefició la sanción de la ley de Bibliotecas Populares?",
      opciones: ["A los clubes de fútbol nacientes", "A las asociaciones vecinales de lectura en pueblos y ciudades", "A los teatros privados de Buenos Aires"],
      correcta: 1,
      pista: "Facilitó el acceso gratuito a libros a los sectores populares."
    },
    {
      pregunta: "La visión del progreso de Sarmiento integraba la educación formal con:",
      opciones: ["La producción artesanal indígena", "La extensión del ferrocarril, la ciencia aplicada y los canales de navegación", "El regreso al sistema colonial de comercio"],
      correcta: 1,
      pista: "Conectaba el conocimiento con el desarrollo material del territorio."
    },

    // --- TEMÁTICA 8: LA GUERRA DE LA TRIPLE ALIANZA (Preguntas 71-80) ---
    {
      pregunta: "¿Qué tres países conformaron el pacto de la Triple Alianza en 1865?",
      opciones: ["Argentina, Brasil y Uruguay", "Argentina, Chile y Perú", "Brasil, Paraguay y Bolivia"],
      correcta: 0,
      pista: "Se unieron contra el gobierno de Francisco Solano López."
    },
    {
      pregunta: "¿Qué nación fue el objetivo militar de la Triple Alianza entre 1865 y 1870?",
      opciones: ["Bolivia", "Chile", "Paraguay"],
      correcta: 2,
      pista: "Un país mediterráneo que experimentaba un fuerte desarrollo autónomo."
    },
    {
      pregunta: "¿Qué acción militar paraguaya arrastró forzosamente a la Argentina a la guerra?",
      opciones: ["El bombardeo al puerto de Rosario", "La invasión de tropas paraguayas a la provincia de Corrientes", "La toma de la aduana porteña"],
      correcta: 1,
      pista: "Solano López cruzó territorio correntino sin autorización tras la negativa de Mitre."
    },
    {
      pregunta: "¿Quién ejerció el cargo de General en Jefe de los ejércitos aliados al comenzar el conflicto?",
      opciones: ["Justo José de Urquiza", "Domingo F. Sarmiento", "Bartolomé Mitre"],
      correcta: 2,
      pista: "El propio presidente argentino comandó las fuerzas en el frente exterior durante los primeros años."
    },
    {
      pregunta: "¿Cómo reaccionaron muchas de las poblaciones de las provincias argentinas ante la guerra?",
      opciones: ["Con total entusiasmo e inscripción masiva voluntaria", "Con fuertes protestas, rebeliones federales y deserciones debido al rechazo al reclutamiento forzoso", "Ignorando el conflicto por completo"],
      correcta: 1,
      pista: "Muchos consideraban que era una guerra fratricida impuesta por Buenos Aires."
    },
    {
      pregunta: "¿Qué célebre pintor y soldado argentino documentó artísticamente las batallas?",
      opciones: ["Cándido López", "Benito Quinquela Martín", "Prilidiano Pueyrredón"],
      correcta: 0,
      pista: "Pintó detalladamente con su mano izquierda tras perder el brazo derecho en el frente."
    },
    {
      pregunta: "¿Cuál fue el impacto demográfico de la guerra sobre la población de Paraguay?",
      opciones: ["Duplicó su cantidad de habitantes", "Sufrió una catástrofe humanitaria, perdiendo a la gran mayoría de su población masculina adulta", "No tuvo consecuencias significativas"],
      correcta: 1,
      pista: "El país quedó demográficamente diezmado y en ruinas."
    },
    {
      pregunta: "¿En qué gran batalla de mayo de 1866 chocaron de manera masiva y sangrienta ambos bandos?",
      opciones: ["Batalla de Tuyutí", "Batalla de San Lorenzo", "Batalla de Caseros"],
      correcta: 0,
      pista: "Considerada una de las batallas más grandes e intensas de la historia sudamericana."
    },
    {
      pregunta: "Una consecuencia directa de esta prolongada guerra para el Estado central argentino fue:",
      opciones: ["La quiebra definitiva del puerto", "La profesionalización y el fortalecimiento definitivo del Ejército Nacional", "La destitución de Mitre como presidente"],
      correcta: 1,
      pista: "Las fuerzas militares se unificaron, equiparon y consolidaron su poder."
    },
    {
      pregunta: "La Guerra de la Triple Alianza finalizó formalmente en 1870 con:",
      opciones: ["La firma de un tratado de paz pacífico", "La muerte del presidente paraguayo Francisco Solano López en Cerro Corá", "La retirada voluntaria de Brasil"],
      correcta: 1,
      pista: "Terminó cuando cayó el último bastión y líder paraguayo en combate."
    },

    // --- TEMÁTICA 9: PRESIDENCIA DE AVELLANEDA Y LA FRONTERA (Preguntas 81-90) ---
    {
      pregunta: "¿Quién gobernó la presidencia de la Nación en el período de 1874 a 1880?",
      opciones: ["Bartolomé Mitre", "Nicolás Avellaneda", "Julio Argentino Roca"],
      correcta: 1,
      pista: "Tercer presidente del ciclo de las Presidencias Históricas originario de Tucumán."
    },
    {
      pregunta: "¿Qué ley trascendental de su gobierno reguló la llegada e instalación de oleadas de extranjeros?",
      opciones: ["La Ley Avellaneda de Inmigración y Colonización", "La Ley de Residencia Extranjera", "El Tratado de Fronteras Abiertas"],
      correcta: 0,
      pista: "Otorgaba alojamiento y facilidades para ubicar a los recién llegados en colonias agrícolas."
    },
    {
      pregunta: "¿Quién fue el primer Ministro de Guerra de Avellaneda que ideó una estrategia de defensa de fronteras?",
      opciones: ["Julio A. Roca", "Adolfo Alsina", "Ricardo López Jordán"],
      correcta: 1,
      pista: "Falleció en ejercicio del cargo a fines de 1877."
    },
    {
      pregunta: "¿Qué era y qué objetivo tenía la denominada 'Zanja de Alsina'?",
      opciones: ["Un canal para barcos a vapor", "Una gran fosa excavada en la tierra con fortines para frenar los malones y proteger el ganado criollo", "Un sistema de riego para cultivar arroz"],
      correcta: 1,
      pista: "Consistía en una barrera física defensiva de cientos de kilómetros en la llanura pampeana."
    },
    {
      pregunta: "¿Quién asumió el Ministerio de Guerra a finales de 1877 cambiando radicalmente la estrategia por una ofensiva?",
      opciones: ["Bartolomé Mitre", "Dardo Rocha", "Julio Argentino Roca"],
      correcta: 2,
      pista: "Propuso abandonar las defensas fijas e invadir masivamente el territorio indígena."
    },
    {
      pregunta: "¿Qué argumento principal esgrimía el gobierno de Avellaneda para justificar el avance sobre el sur?",
      opciones: ["Integrar tierras fértiles a la economía agroexportadora y afirmar la soberanía frente a Chile", "Construir centros turísticos invernales", "Buscar yacimientos de petróleo ocultos"],
      correcta: 0,
      pista: "El Estado necesitaba expandir la producción lanera y ganadera a nivel global."
    },
    {
      pregunta: "¿Qué pueblos originarios habitaban ancestralmente las regiones de La Pampa y la Patagonia?",
      opciones: ["Incas y Guaraníes", "Diaguitas y Quilmes", "Mapuches, Tehuelches y Ranqueles"],
      correcta: 2,
      pista: "Comunidades nómades y seminómades con un fuerte vínculo con la naturaleza pampeana y patagónica."
    },
    {
      pregunta: "¿Cómo financiaba el Estado nacional las costosas expediciones militares a la frontera sur?",
      opciones: ["Mediante la venta anticipada de tierras públicas a particulares y terratenientes ricos", "Con préstamos directos del gobierno de Paraguay", "Con rifas organizadas en las escuelas"],
      correcta: 0,
      pista: "Se emitieron bonos ligados a las futuras hectáreas que se conquistarían."
    },
    {
      pregunta: "¿Qué importante hito político interno se resolvió al final del mandato de Avellaneda en 1880?",
      opciones: ["La mudanza de la capital a Córdoba", "La declaración de la Ciudad de Buenos Aires como Capital Federal de la nación", "La prohibición de las elecciones"],
      correcta: 1,
      pista: "Desvinculó a la ciudad de la órbita de su provincia, terminando un viejo conflicto federal."
    },
    {
      pregunta: "La federalización de Buenos Aires dictada por Avellaneda provocó:",
      opciones: ["Un alzamiento militar de la provincia de Buenos Aires que fue reprimido por el gobierno nacional", "La alegría unánime de todos los porteños inmediatamente", "La pérdida del puerto comercial"],
      correcta: 0,
      pista: "Las autoridades provinciales bonaerenses resistieron con armas defender sus antiguos privilegios territoriales."
    },

    // --- TEMÁTICA 10: CAMPAÑAS MILITARES Y SUS CONSECUENCIAS (Preguntas 91-100) ---
    {
      pregunta: "¿En qué año se inició la fase definitiva de la campaña militar comandada por Julio A. Roca?",
      opciones: ["1853", "1879", "1888"],
      correcta: 1,
      pista: "Marcó el final de la presidencia de Avellaneda y encumbró políticamente a Roca."
    },
    {
      pregunta: "¿Qué nombre histórico recibió la campaña militar sobre los territorios del sur?",
      opciones: ["Conquista del Desierto", "Campaña de las Escuelas", "Guerra de Fronteras Secas"],
      correcta: 0,
      pista: "Denominada así por el Estado porque consideraba esas áreas como 'vacías' de civilización."
    },
    {
      pregunta: "¿Cuál fue la consecuencia más trágica para los pueblos originarios tras la derrota militar?",
      opciones: ["La pérdida de tierras, miles de muertos, familias desmembradas y destrucción de su modo de vida", "Tener que mudarse obligatoriamente a Europa", "Aprender a tejer ponchos rojos"],
      correcta: 0,
      pista: "Sufrieron un profundo despojo territorial, humano y cultural."
    },
    {
      pregunta: "¿Qué destino final sufrieron miles de prisioneros indígenas capturados en el sur?",
      opciones: ["Fueron nombrados gobernadores de provincias", "Fueron trasladados forzosamente a pie y asignados como sirvientes o trabajadores rurales precarizados", "Se les entregaron títulos de propiedad en la aduana"],
      correcta: 1,
      pista: "Se desarticularon sus familias enviando mujeres y niños a casas ricas porteñas."
    },
    {
      pregunta: "¿A manos de quiénes pasó la gran mayoría de las tierras anexadas en la Patagonia?",
      opciones: ["Pequeños campesinos inmigrantes recién llegados de forma equitativa", "Grandes terratenientes, estancieros ricos y familias influyentes vinculadas al poder político", "Comunidades aborígenes locales"],
      correcta: 1,
      pista: "Se consolidaron inmensos latifundios ganaderos concentrados en pocas manos."
    },
    {
      pregunta: "¿Qué modelo económico de alcance global se consolidó gracias al avance territorial?",
      opciones: ["El modelo de industrialización pesada", "El modelo agroexportador (venta masiva de granos y carnes al mercado mundial)", "Un régimen comunal de trueque"],
      correcta: 1,
      pista: "Argentina se convirtió en el 'granero del mundo' proveyendo de materias primas a Europa."
    },
    {
      pregunta: "Además de la Patagonia y La Pampa, ¿qué otra gran región del país sufrió campañas militares similares?",
      opciones: ["El Gran Chaco (en el norte argentino)", "La provincia de Entre Ríos", "Las islas Malvinas"],
      correcta: 0,
      pista: "Área de densos bosques y sabanas habitada por comunidades Qom, Wichí y Moqoit."
    },
    {
      pregunta: "¿Qué límites geográficos actuales terminaron de consolidarse con estas campañas militares?",
      opciones: ["Los límites coloniales con el Alto Perú", "Las fronteras de la soberanía territorial de la República Argentina actual", "La separación definitiva de la provincia de Corrientes"],
      correcta: 1,
      pista: "El mapa nacional adquirió su fisonomía contemporánea definitiva de frontera a frontera."
    },
    {
      pregunta: "La incorporación de millones de hectáreas aptas para el pastoreo disparó exponencialmente el negocio de:",
      opciones: ["La cría de caballos de carreras", "La exportación de lana ovina, cueros y tasajo", "La producción de seda artificial"],
      correcta: 1,
      pista: "La oveja patagónica alimentó fuertemente las industrias textiles extranjeras."
    },
    {
      pregunta: "Hacia el año 1880, con la unificación política, territorial y militar consumada, se cierra el período de:",
      opciones: ["La emancipación de España", "La Organización Nacional y pacificación forzada del Estado soberano", "Las guerras civiles del siglo XX"],
      correcta: 1,
      pista: "Se da inicio a la etapa de consolidación definitiva del Estado moderno centralizado argentino."
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
