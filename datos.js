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
},
        "Q3": {
          // 1. GUÍA DE APRENDIZAJE INTERACTIVA - ERA AGROEXPORTADORA E INDUSTRIAL (7 Lecciones)
          guia: [
            {
              titulo: "La Revolución Industrial: Primera y Segunda Fase",
              texto: "La <b>Revolución Industrial</b> fue un proceso histórico de profundas transformaciones tecnológicas, económicas y sociales que reemplazó el trabajo manual artesanal por la producción masiva en <b>fábricas mecanizadas</b>.<br><br><b>1. Primera Revolución Industrial (fines del siglo XVIII en Gran Bretaña):</b><br>- Se inició con la invención de la <b>máquina de vapor</b> perfeccionada por James Watt.<br>- Su principal fuente de energía fue el <b>carbón mineral</b>.<br>- La industria pionera fue la <b>textil</b> (hilado y tejido de algodón y lana), junto con la metalurgia del hierro.<br><br><b>2. Segunda Revolución Industrial (fines del siglo XIX en Europa occidental y EE.UU.):</b><br>- Incorporó nuevas fuentes de energía: el <b>petróleo</b> (combustibles) y la <b>electricidad</b>.<br>- Invención del motor de combustión interna y producción masiva de <b>acero</b>.<br>- Desarrollo de la industria química, automotriz y de maquinaria pesada.<br><br><i>Consecuencia global: Los países industrializados multiplicaron su producción y necesitaron desesperadamente comprar materias primas y alimentos al resto del mundo, vendiendo a cambio sus productos fabricados.</i>",
              resumen_corto: "La 1ra Revolución usó carbón y máquina de vapor en fábricas textiles; la 2da incorporó petróleo, electricidad y acero masivo.",
              preguntaValidacion: {
                q: "¿Cuál fue el invento tecnológico central y la principal fuente de energía de la Primera Revolución Industrial en Gran Bretaña?",
                a: ["El motor eléctrico alimentado con energía solar", "La máquina de vapor alimentada con carbón mineral", "El motor diésel a base de petróleo"],
                c: 1
              }
            },
            {
              titulo: "Revolución en los Transportes y las Comunicaciones",
              texto: "Para que los productos industriales y las materias primas pudieran circular a escala planetaria, fue indispensable revolucionar los medios de transporte y comunicación:<br><br>1. <b>El Barco de Vapor:</b> Reemplazó definitivamente a los viejos veleros. Gracias a los cascos de acero y motores potentes, los viajes oceánicos se volvieron regulares, seguros y mucho más rápidos, reduciendo los tiempos de travesía de meses a pocos días. La incorporación de <b>cámaras frigoríficas</b> permitió trasladar carne fresca y congelada a miles de kilómetros sin que se descompusiera.<br><br>2. <b>El Ferrocarril a Vapor:</b> Conectó el interior de los continentes con los puertos marítimos, abaratando los fletes de carga y movilizando millones de toneladas de granos y ganado.<br><br>3. <b>El Telégrafo Eléctrico y los Cables Submarinos:</b> Permitieron la transmisión instantánea de mensajes mediante impulsos eléctricos (código Morse). Al tenderse cables submarinos bajo el océano Atlántico, los precios de los productos y las órdenes de compra entre Buenos Aires y Londres se transmitían en minutos.<br><br><i>Dato clave: El mundo se 'achicó' gracias a la velocidad del vapor y la instantaneidad del telégrafo, dando origen al primer mercado global unificado.</i>",
              resumen_corto: "El barco a vapor y las cámaras frigoríficas aceleraron el comercio marítimo; el ferrocarril unió el interior con los puertos y el telégrafo comunicó al mundo.",
              preguntaValidacion: {
                q: "¿Qué innovación tecnológica en los barcos de ultramar permitió exportar carne argentina fresca y congelada hacia Europa sin que se echara a perder?",
                a: ["Las velas gigantes de lona reforzada", "Las cámaras frigoríficas instaladas en barcos a vapor con casco de acero", "El secado de carne al sol sobre cubierta"],
                c: 1
              }
            },
            {
              titulo: "La División Internacional del Trabajo (DIT)",
              texto: "Hacia la segunda mitad del siglo XIX, la economía mundial se organizó bajo un sistema de especialización productiva llamado <b>División Internacional del Trabajo (DIT)</b>. En este esquema, los países del mundo se dividieron en dos grupos complementarios pero con marcadas diferencias de poder económico:<br><br>1. <b>Países Centrales o Industriales:</b> (Como Gran Bretaña, Francia, Alemania y Estados Unidos). Se especializaron en fabricar productos manufacturados de alto valor (herramientas, ropa, rieles, locomotoras) y en exportar capitales mediante inversiones, créditos bancarios y construcción de infraestructura.<br><br>2. <b>Países Periféricos:</b> (Como Argentina y la mayoría de los países de América Latina, Asia y África). Se especializaron en la producción y exportación de <b>materias primas</b> (algodón, lana, minerales) y <b>alimentos</b> (cereales, carnes), e importaban todos los bienes industriales elaborados que no producían localmente.<br><br><i>Para recordar: Aunque este intercambio generó gran riqueza inicial para los exportadores de materias primas, los países centrales conservaban el control financiero y tecnológico, marcando una relación de dependencia económica.</i>",
              resumen_corto: "La DIT dividió al mundo: países centrales que producían manufacturas y exportaban capitales, y países periféricos (como Argentina) que producían alimentos y materias primas.",
              preguntaValidacion: {
                q: "Dentro del esquema de la División Internacional del Trabajo, ¿cuál era el rol asignado a la República Argentina?",
                a: ["Fabricar locomotoras y maquinarias pesadas para exportar a Europa", "Ser un país periférico productor y exportador de alimentos y materias primas", "Mantenerse aislada del comercio mundial sin comprar ni vender nada"],
                c: 1
              }
            },
            {
              titulo: "El Modelo Agroexportador en Argentina",
              texto: "Entre 1880 y 1914, la Argentina se integró plenamente al mercado mundial a través del <b>Modelo Agroexportador</b>, llegando a ser conocida internacionalmente como <b>'El Granero del Mundo'</b>.<br><br><b>Los Tres Pilares del Modelo Agroexportador:</b><br>1. <b>La Tierra:</b> La incorporación de millones de hectáreas fértiles en la región pampeana tras las campañas militares, con clima templado ideal para la agricultura extensiva (trigo, maíz, lino) y la ganadería vacuna y ovina.<br>2. <b>El Capital Extranjero:</b> Inversiones masivas, principalmente de origen británico, para financiar la red de ferrocarriles, modernizar los puertos, instalar frigoríficos y abrir bancos.<br>3. <b>El Trabajo (Mano de Obra):</b> La llegada masiva de millones de inmigrantes europeos que trabajaron la tierra como peones o arrendatarios y construyeron la infraestructura nacional.<br><br><i>Punto crítico: El país dependía casi exclusivamente de la demanda externa; si los países europeos entraban en crisis o bajaban los precios de los granos, la economía argentina sufría de inmediato.</i>",
              resumen_corto: "Argentina se convirtió en 'el granero del mundo' combinando tierras pampeanas fértiles, inversiones británicas en trenes y puertos, y mano de obra inmigrante.",
              preguntaValidacion: {
                q: "¿Cuáles fueron los tres factores fundamentales que hicieron posible el desarrollo del modelo agroexportador argentino?",
                a: ["Tierras pampeanas fértiles, capitales extranjeros (ferrocarriles/puertos) y mano de obra inmigrante", "La fabricación propia de automóviles, computadoras y satélites", "El aislamiento de los puertos y el cierre del comercio exterior"],
                c: 0
              }
            },
            {
              titulo: "La Expansión del Ferrocarril: Una Red para Exportar",
              texto: "El <b>Ferrocarril</b> fue el gran motor de la economía argentina. Entre 1860 y 1910, la red ferroviaria pasó de unos pocos kilómetros a casi <b>28.000 kilómetros</b>, construida mayoritariamente por empresas británicas con apoyo del Estado.<br><br><b>Diseño en Abanico (Radial):</b><br>Si observamos un mapa histórico de las vías férreas, todas nacen en el interior agrícola-ganadero y convergen como los rayos de un abanico en los <b>puertos de exportación</b> (especialmente Buenos Aires y Rosario). Su objetivo primordial era el circuito: <b>Del campo a la estación, de la estación al puerto, y del puerto al mundo</b>.<br><br><b>Líneas Ferroviarias Emblemáticas:</b><br>- <b>Ferrocarril del Oeste (1857):</b> La primera línea del país, inaugurada con la célebre locomotora <i>'La Porteña'</i>, uniendo la actual Plaza Lavalle en Buenos Aires con Flores.<br>- <b>Ferrocarril del Sud (1863):</b> Expandió las vías hacia el sur bonaerense y Bahía Blanca.<br>- <b>Ferrocarril Central Argentino (actual Mitre):</b> Unió Rosario con Córdoba.<br>- <b>Ferrocarril Central Norte (actual Belgrano):</b> Conectó Córdoba con Tucumán, Salta y Jujuy.<br><br><i>Impacto social: Alrededor de cada estación ferroviaria nacieron pueblos y ciudades, y los trenes permitieron transportar pasajeros y mercaderías, dinamizando también el mercado interno.</i>",
              resumen_corto: "Casi 28.000 km de vías con diseño radial conectaron los campos con los puertos para exportar granos y carnes, fundando pueblos y ciudades a su paso.",
              preguntaValidacion: {
                q: "¿Por qué la red ferroviaria argentina tenía un diseño en forma de abanico (radial) convergente en Buenos Aires y Rosario?",
                a: ["Para que los trenes pudieran viajar en círculos turísticos", "Para transportar rápida y directamente la producción agropecuaria desde el campo hacia los puertos de exportación", "Porque las vías no podían doblar en línea recta"],
                c: 1
              }
            },
            {
              titulo: "Las Primeras Industrias y las Desigualdades Regionales",
              texto: "Hacia fines del siglo XIX surgieron en el país las primeras fábricas e industrias modernas:<br><br><b>1. Industrias para la Exportación:</b> Nacieron directamente ligadas al campo. Se destacaron los <b>Molinos Harineros</b> (procesamiento masivo de trigo en la región pampeana y el litoral) y los <b>Frigoríficos</b> (instalaciones con capitales ingleses y estadounidenses como <i>Swift</i> que reemplazaron a los antiguos saladeros, exportando carne vacuna enfriada o congelada). En el norte forestal (Chaco y Santa Fe), la empresa británica <i>La Forestal</i> talaba bosques de quebracho para extraer <b>tanino</b> (sustancia para curtir cueros) y durmientes de madera para las vías.<br><br><b>2. Industrias para el Mercado Interno:</b> El aumento poblacional urbano impulsó fábricas de alimentos (como las galletitas <i>Bagley</i>), calzado (<i>Alpargatas</i>), muebles y textiles.<br><br><b>Desigualdades Regionales:</b><br>El modelo benefició de forma desproporcionada a la <b>región pampeana y al litoral</b>, que tenían puertos, ferrocarriles y productos cotizados en el mundo. En cambio, las <b>economías del interior</b> (azúcar en el Noroeste, vinos en Cuyo, yerba mate en Misiones) producían para el mercado interno y sufrieron la fuerte competencia de productos importados más baratos que entraban por el puerto libremente.<br><br><i>Conclusión: Argentina creció enormemente en riqueza global, pero de manera muy desigual territorialmente.</i>",
              resumen_corto: "Nacieron frigoríficos y molinos harineros para exportar, y fábricas como Bagley y Alpargatas para consumo local. La región pampeana prosperó más que las economías del interior.",
              preguntaValidacion: {
                q: "¿Por qué el modelo agroexportador generó marcadas desigualdades regionales en Argentina?",
                a: ["Porque todas las provincias exportaban la misma cantidad de carne", "Porque benefició principalmente a la región pampeana y el litoral con puertos y trenes, mientras el interior dependía del mercado interno y competía con importaciones", "Porque el ferrocarril solo circulaba por la cordillera de los Andes"],
                c: 1
              }
            },
            {
              titulo: "La Gran Inmigración Ultramarina y la Transformación Social",
              texto: "Entre 1880 y 1914 se produjo en la Argentina el fenómeno de la <b>Gran Inmigración</b>: arribaron más de 4 millones de personas procedentes de ultramar, transformando para siempre la demografía, la cultura y la sociedad nacional.<br><br><b>¿Por qué vinieron?</b><br>- En Europa: escasez de tierras, pobreza, desempleo provocado por la mecanización fabril y guerras.<br>- En Argentina: enorme necesidad de trabajadores, promesa de salarios mejores y políticas estatales de fomento como la <b>Ley Avellaneda de Inmigración (1876)</b>, que garantizaba alojamiento gratuito en el <b>Hotel de Inmigrantes</b> del puerto de Buenos Aires y facilidades para radicarse.<br><br><b>¿Quiénes eran y dónde vivieron?</b><br>La gran mayoría eran <b>italianos y españoles</b>, aunque también llegaron contingentes franceses, alemanes, rusos, polacos, judíos, sirio-libaneses y británicos. Muchos se instalaron en colonias agrícolas del litoral o como arrendatarios; sin embargo, gran parte permaneció en las ciudades (como Buenos Aires y Rosario), habitando hacinados en habitaciones de alquiler llamadas <b>Conventillos</b>.<br><br><i>Huella imborrable: Los inmigrantes crearon asociaciones de socorros mutuos, sindicatos y aportaron sus costumbres, enriqueciendo nuestra gastronomía, el nacimiento del tango y el vocabulario popular del <b>lunfardo</b>.</i>",
              resumen_corto: "Millones de inmigrantes (sobre todo italianos y españoles) llegaron buscando trabajo y tierras, transformando las ciudades, los conventillos, el campo y la cultura argentina.",
              preguntaValidacion: {
                q: "¿Qué ley nacional impulsó y reguló la llegada masiva de inmigrantes europeos ofreciendo alojamiento en el Hotel de Inmigrantes y facilidades laborales?",
                a: ["La Ley Avellaneda de Inmigración y Colonización de 1876", "La Ley de Aduanas Secas de 1820", "El Acuerdo de San Nicolás"],
                c: 0
              }
            }
          ],

          // 2. GLOSARIO CONCEPTUAL Y TARJETAS FLASHCARD (30 Términos)
          glosario: [
            { termino: "Revolución Industrial", def: "Proceso histórico de transformación que sustituyó el trabajo manual artesanal por la producción masiva mecanizada en fábricas." },
            { termino: "Máquina de Vapor", def: "Invento de James Watt accionado por carbón que transformó la energía térmica en fuerza mecánica para fábricas, barcos y trenes." },
            { termino: "Segunda Revolución Industrial", def: "Etapa fabril de fines del siglo XIX caracterizada por el empleo del petróleo, la electricidad, el acero y la industria química." },
            { termino: "Barco de Vapor", def: "Embarcación transoceánica con casco de acero y motor a vapor que abarató fletes y redujo drásticamente el tiempo de viaje marítimo." },
            { termino: "Telégrafo Eléctrico", def: "Sistema de comunicación por cable que transmitía mensajes codificados en código Morse en tiempo real a grandes distancias." },
            { termino: "División Internacional del Trabajo", def: "Organización de la economía global en el siglo XIX entre países centrales industrializados y países periféricos proveedores de materias primas." },
            { termino: "Países Centrales", def: "Naciones industrializadas (Inglaterra, Francia, Alemania, EE.UU.) que elaboraban manufacturas, exportaban tecnología y prestaban capitales." },
            { termino: "Países Periféricos", def: "Países no industrializados (como Argentina) que producían y exportaban alimentos y materias primas a los países centrales." },
            { termino: "Modelo Agroexportador", def: "Esquema económico argentino (1880-1914) basado en la producción y venta masiva de granos y carnes para abastecer al mercado mundial." },
            { termino: "Granero del Mundo", def: "Denominación otorgada a la Argentina a comienzos del siglo XX por su gigantesca capacidad exportadora de trigo y maíz." },
            { termino: "Red Ferroviaria", def: "Trazado de vías de tren que alcanzó 28.000 km en Argentina, uniendo las zonas de producción agrícola con los puertos." },
            { termino: "Trazado Radial", def: "Diseño en abanico de las vías férreas argentinas, donde todas las líneas confluían directamente en los puertos de Buenos Aires y Rosario." },
            { termino: "La Porteña", def: "Nombre de la primera locomotora a vapor que circuló en territorio argentino en 1857 en el Ferrocarril del Oeste." },
            { termino: "Ferrocarril del Oeste", def: "Línea férrea inaugural de la Argentina creada en 1857 que comunicaba la Ciudad de Buenos Aires con la campiña pampeana." },
            { termino: "Frigorífico", def: "Establecimiento industrial moderno con cámaras de frío artificial que permitió exportar carne vacuna fresca y congelada a Europa." },
            { termino: "Molino Harinero", def: "Fábrica agroindustrial encargada de procesar masivamente el trigo cosechado para transformarlo en harina de consumo y exportación." },
            { termino: "Saladero", def: "Antigua industria ganadera tradicional donde la carne vacuna se cortaba y secaba con sal para producir tasajo antes del frigorífico." },
            { termino: "La Forestal", def: "Empresa de capitales británicos que explotó millones de hectáreas de bosques de quebracho en Chaco y Santa Fe para extraer tanino." },
            { termino: "Tanino", def: "Sustancia química astringente obtenida de la madera del quebracho colorado fundamental para curtir cueros a nivel mundial." },
            { termino: "Mercado Interno", def: "Conjunto de intercambios comerciales de bienes y servicios que se compran y venden dentro de las fronteras de un país." },
            { termino: "Mercado Externo", def: "Comercio internacional que comprende las ventas (exportaciones) y compras (importaciones) que realiza un país con el resto del mundo." },
            { termino: "Región Pampeana", def: "Zona geográfica central de Argentina con clima templado y suelos fértiles que fue el epicentro del modelo agroexportador." },
            { termino: "Economías Regionales", def: "Actividades productivas tradicionales del interior (azúcar en NOA, vid en Cuyo, yerba en Misiones) que vendían al mercado interno." },
            { termino: "Gran Inmigración", def: "Proceso demográfico masivo por el cual más de cuatro millones de extranjeros (principalmente italianos y españoles) arribaron al país." },
            { termino: "Ley Avellaneda", def: "Normativa sancionada en 1876 que organizó la recepción, alojamiento provisional y radicación de inmigrantes en la Argentina." },
            { termino: "Hotel de Inmigrantes", def: "Complejo edilicio portuario en Buenos Aires donde los recién llegados de ultramar recibían alojamiento, comida y ayuda médica gratuita." },
            { termino: "Conventillo", def: "Casona urbana antigua convertida en inquilinato donde decenas de familias de inmigrantes compartían habitaciones y un patio central." },
            { termino: "Arrendatario", def: "Colono o agricultor que trabajaba parcelas de tierra alquiladas a un estanciero, pagando una renta fija en dinero o porcentaje de cosecha." },
            { termino: "Lunfardo", def: "Vocabulario popular urbano nacido en Buenos Aires de la mezcla del castellano con palabras de dialectos italianos y otras lenguas inmigrantes." },
            { termino: "Colonización Agrícola", def: "Instalación organizada de familias de inmigrantes europeos en colonias rurales dedicadas al cultivo de la tierra en Santa Fe y Entre Ríos." }
          ],

          // 3. BANCO DE SIMULACROS Y DESAFÍOS ARCADE (70 Preguntas por Ejes Temáticos)
          simulacro: [
            {
              pregunta: "¿En qué país y en qué período histórico se inició la Primera Revolución Industrial?",
              opciones: ["En España a mediados del siglo XVI", "En Gran Bretaña (Inglaterra) hacia fines del siglo XVIII", "En Argentina a comienzos del siglo XX"],
              correcta: 1,
              pista: "Comenzó en las islas británicas gracias a sus yacimientos de carbón.",
              explicacion: "La Primera Revolución Industrial nació en Inglaterra a finales del siglo XVIII impulsada por la máquina de vapor y la minería de carbón."
            },
            {
              pregunta: "¿Cuál fue el combustible y fuente de energía principal que alimentó a la Primera Revolución Industrial?",
              opciones: ["La electricidad", "El carbón mineral", "La energía nuclear"],
              correcta: 1,
              pista: "Una roca negra fósil muy abundante en las minas inglesas.",
              explicacion: "El carbón mineral se quemaba en calderas para calentar agua y producir vapor de alta presión que movía los telares y locomotoras."
            },
            {
              pregunta: "¿Qué rama de la producción manufacturera fue la pionera de la Primera Revolución Industrial?",
              opciones: ["La industria textil (hilado y tejido de algodón y lana)", "La industria aeroespacial", "La fabricación masiva de computadoras"],
              correcta: 0,
              pista: "Fabrica telas, vestidos y prendas de vestir.",
              explicacion: "Los telares mecánicos e hiladoras automáticas de algodón revolucionaron la industria textil inglesa, multiplicando la producción."
            },
            {
              pregunta: "¿Qué fuentes de energía caracterizaron a la SEGUNDA Revolución Industrial a fines del siglo XIX?",
              opciones: ["La leña y el viento", "El petróleo y la electricidad", "La tracción a sangre con caballos"],
              correcta: 1,
              pista: "Permitieron el alumbrado urbano y los motores de combustión de nafta.",
              explicacion: "Hacia 1870, el petróleo y la energía eléctrica reemplazaron progresivamente al vapor, permitiendo la iluminación y motores modernos."
            },
            {
              pregunta: "¿Qué metal fundamental se comenzó a fabricar masivamente durante la Segunda Revolución Industrial?",
              opciones: ["El oro", "El acero", "El bronce"],
              correcta: 1,
              pista: "Aleación de hierro mucho más resistente que se usó para barcos, puentes y rascacielos.",
              explicacion: "El convertidor Bessemer y hornos modernos permitieron producir acero barato y resistente para vías de ferrocarril, barcos y vigas."
            },
            {
              pregunta: "¿Cómo cambió la forma de trabajo con la llegada de las fábricas mecanizadas?",
              opciones: ["Se volvió al trabajo artesanal en las casas de campo", "El artesano fue reemplazado por obreros asalariados que cumplían horarios rígidos operando máquinas", "Se eliminó el trabajo humano y solo trabajaban robots"],
              correcta: 1,
              pista: "Los trabajadores se concentraron en grandes galpones bajo el control de capataces.",
              explicacion: "La mecanización concentró la producción en fábricas con división del trabajo y extensas jornadas laborales asalariadas."
            },
            {
              pregunta: "¿Hacia qué países se expandió la Segunda Revolución Industrial además de Gran Bretaña?",
              opciones: ["Alemania, Estados Unidos y Francia", "Solo hacia el Polo Norte", "Únicamente hacia África central"],
              correcta: 0,
              pista: "Potencias de Europa y Norteamérica con gran desarrollo fabril.",
              explicacion: "Alemania y Estados Unidos lideraron la Segunda Revolución Industrial en industrias químicas, eléctricas y siderúrgicas."
            },
            {
              pregunta: "¿Qué necesidad comercial urgente generó la Revolución Industrial en las potencias europeas?",
              opciones: ["Cerrar sus fronteras para no vender nada", "Comprar materias primas y alimentos en el mundo y vender sus productos manufacturados", "Destruir todas sus fábricas para volver a cultivar"],
              correcta: 1,
              pista: "Sus fábricas necesitaban insumos y su población urbana necesitaba alimentos.",
              explicacion: "Al volcarse a la industria, Europa requería lana, algodón, granos y carnes del exterior, y mercados donde colocar sus telas y herramientas."
            },
            {
              pregunta: "¿Quién perfeccionó la máquina de vapor que revolucionó el transporte y la producción fabril?",
              opciones: ["James Watt", "Cristóbal Colón", "Julio A. Roca"],
              correcta: 0,
              pista: "Ingeniero e inventor escocés cuyo apellido dio nombre a la unidad de potencia.",
              explicacion: "James Watt introdujo en 1769 mejoras decisivas en el condensador de la máquina de vapor, haciéndola eficiente y adaptable a múltiples usos."
            },
            {
              pregunta: "¿Cuál fue uno de los principales impactos sociales en las ciudades europeas durante la Revolución Industrial?",
              opciones: ["La desaparición de las ciudades", "La rápida migración del campo a las ciudades (urbanización) y el surgimiento de la clase obrera", "Que toda la población se fue a vivir a la selva"],
              correcta: 1,
              pista: "Millones de campesinos se mudaron a las ciudades en busca de empleo fabril.",
              explicacion: "El éxodo rural provocó un crecimiento caótico de las urbes industriales y la consolidación de la burguesía y el proletariado fabril."
            },
            {
              pregunta: "¿Qué medio de transporte revolucionó los viajes oceánicos reemplazando a los tradicionales barcos de vela?",
              opciones: ["El barco de vapor con casco de acero", "Las canoas de madera", "Los dirigibles de aire caliente"],
              correcta: 0,
              pista: "Navegaba con propulsión mecánica sin depender del viento.",
              explicacion: "Los vapores acortaron drásticamente las travesías transatlánticas, permitiendo viajes regulares entre Europa y América."
            },
            {
              pregunta: "¿Qué innovación tecnológica permitió transportar carne vacuna desde Argentina a Europa sin que se descompusiera?",
              opciones: ["Los saladeros tradicionales en cubierta", "Las cámaras frigoríficas instaladas en los barcos de vapor", "Envolver la carne en hojas de plátano"],
              correcta: 1,
              pista: "Enfriaba artificialmente las bodegas del barco.",
              explicacion: "La refrigeración artificial a bordo posibilitó embarcar carne fresca congelada o enfriada desde el Río de la Plata hacia los mercados ingleses."
            },
            {
              pregunta: "¿Qué invento permitió la comunicación de noticias comerciales y órdenes de compra en minutos a través del océano?",
              opciones: ["Las palomas mensajeras", "El telégrafo eléctrico y los cables submarinos", "El correo postal a caballo"],
              correcta: 1,
              pista: "Transmitía señales eléctricas instantáneas con el código Morse.",
              explicacion: "El tendido de cables telegráficos submarinos unió a Buenos Aires con Londres en 1874, conectando instantáneamente el mercado bursátil."
            },
            {
              pregunta: "El ferrocarril cumplió un papel decisivo en el siglo XIX porque:",
              opciones: ["Solo transportaba cartas personales de los presidentes", "Abarató y aceleró el traslado masivo de mercancías agrícolas y pasajeros desde el interior hasta los puertos", "Impedía que los barcos llegaran a la costa"],
              correcta: 1,
              pista: "Unió los campos lejanos con las terminales de exportación.",
              explicacion: "El tren a vapor permitió sacar la cosecha y el ganado desde miles de kilómetros tierra adentro hacia los muelles de ultramar."
            },
            {
              pregunta: "¿Cómo influyó la reducción de los costos de flete marítimo en el comercio mundial?",
              opciones: ["Hizo que los productos importados fueran mucho más baratos y accesibles en todo el planeta", "Hizo que nadie quisiera comerciar con otros países", "Prohibió la venta de trigo y maíz"],
              correcta: 0,
              pista: "Al ser más barato el flete, el precio final de las cosas bajó.",
              explicacion: "La mayor capacidad y velocidad de los vapores abarató el transporte de cargas pesadas, facilitando la integración comercial global."
            },
            {
              pregunta: "¿Qué sistema de signos de puntos y rayas se utilizaba para transmitir mensajes por el telégrafo?",
              opciones: ["El sistema binario de computación", "El código Morse", "El abecedario jeroglífico"],
              correcta: 1,
              pista: "Creado por el inventor Samuel Morse.",
              explicacion: "El código Morse traduce las letras del alfabeto en pulsos eléctricos breves (puntos) y largos (rayas)."
            },
            {
              pregunta: "¿Por dónde se tendieron los cables de telégrafo para comunicar continentes separados por el mar?",
              opciones: ["Por el fondo del océano (cables submarinos)", "Flotando atados a boyas en el agua", "Por naves espaciales"],
              correcta: 0,
              pista: "Se depositaban sobre el lecho marino con barcos cableros.",
              explicacion: "Los cables telegráficos submarinos recubiertos de aislantes de goma se extendieron por el lecho del Atlántico uniendo América con Europa."
            },
            {
              pregunta: "Antes de la llegada del ferrocarril a las llanuras argentinas, ¿cómo se transportaba la producción desde el interior?",
              opciones: ["En carretas tiradas por bueyes y arreos de mulas que tardaban meses", "En camiones de carga de gran porte", "Por trenes eléctricos subterráneos"],
              correcta: 0,
              pista: "Transporte lento de tracción a sangre por caminos de tierra.",
              explicacion: "Las tropas de carretas tardaban hasta dos o tres meses en unir Tucumán o Mendoza con Buenos Aires, con fletes lentos y caros."
            },
            {
              pregunta: "La frase 'El mundo se achicó' durante el siglo XIX se refiere a:",
              opciones: ["Que el planeta Tierra perdió masa y volumen", "Que la gran velocidad de los vapores, trenes y telégrafos acortó las distancias y tiempos de viaje", "Que la población mundial disminuyó a la mitad"],
              correcta: 1,
              pista: "Los viajes que antes tomaban meses pasaron a durar semanas o días.",
              explicacion: "Es una metáfora que alude a cómo los avances del transporte y las telecomunicaciones acercaron regiones distantes del planeta."
            },
            {
              pregunta: "¿Qué ventaja ofrecían los cascos de acero en los barcos de vapor frente a los antiguos cascos de madera?",
              opciones: ["Eran más livianos que una pluma", "Eran mucho más resistentes, seguros contra tempestades y permitían barcos de mayor tamaño y capacidad de carga", "No requerían motores para navegar"],
              correcta: 1,
              pista: "El acero permitió construir naves gigantescas que resistían el oleaje.",
              explicacion: "El acero posibilitó fabricar buques mercantes y transatlánticos inmensos, duplicando y triplicando el volumen de carga por viaje."
            },
            {
              pregunta: "¿Qué fue la División Internacional del Trabajo (DIT) en el siglo XIX?",
              opciones: ["Una ley que prohibía trabajar los fines de semana en todo el mundo", "La especialización económica mundial donde unos países producían bienes industriales y otros materias primas", "Un acuerdo para que todos los países fabricaran lo mismo"],
              correcta: 1,
              pista: "Cada grupo de países se especializaba en lo que mejor producía.",
              explicacion: "La DIT organizó el comercio internacional entre países manufactureros e industriales y países agropecuarios y mineros."
            },
            {
              pregunta: "¿Qué características tenían los llamados 'Países Centrales' en la DIT?",
              opciones: ["Eran países pobres sin tecnología", "Eran naciones industrializadas que fabricaban manufacturas complejas y exportaban capitales", "Solo cultivaban bananas y café"],
              correcta: 1,
              pista: "Eran las potencias como Gran Bretaña, Francia y Estados Unidos.",
              explicacion: "Los países centrales concentraban la ciencia, las industrias avanzadas, la flota mercante y los bancos internacionales."
            },
            {
              pregunta: "¿Qué tipo de productos exportaban los 'Países Periféricos' hacia los países centrales?",
              opciones: ["Locomotoras, telas finas y productos químicos", "Alimentos, granos, carnes y materias primas minerales o agrícolas", "Satélites de comunicaciones"],
              correcta: 1,
              pista: "Productos naturales del campo o de las minas sin gran elaboración.",
              explicacion: "Las naciones periféricas abastecían de insumos primarios y alimentos a bajo costo a las fábricas y ciudades europeas."
            },
            {
              pregunta: "¿Cuál era la principal potencia central con la que comerciaba la Argentina hacia 1880?",
              opciones: ["Gran Bretaña (Inglaterra)", "Rusia", "Japón"],
              correcta: 0,
              pista: "El principal imperio industrial marítimo de la era victoriana.",
              explicacion: "Gran Bretaña era el principal comprador de las carnes y cereales argentinos y el mayor inversor en nuestros trenes y bancos."
            },
            {
              pregunta: "¿Por qué se considera que la DIT generaba una relación de dependencia para los países periféricos?",
              opciones: ["Porque los países centrales decidían los precios y controlaban los transportes y préstamos", "Porque los países periféricos gobernaban Europa", "Porque estaba prohibido vender alimentos"],
              correcta: 0,
              pista: "El poder económico y financiero estaba concentrado en Londres y París.",
              explicacion: "Al no tener industrias propias diversificadas, los países periféricos dependían de las compras y créditos de las potencias centrales."
            },
            {
              pregunta: "¿Qué compraba habitualmente la Argentina a los países industrializados durante el modelo de la DIT?",
              opciones: ["Trigo y carne vacuna", "Rieles, locomotoras, telas elaboradas, carbón y maquinarias", "Materia prima sin procesar"],
              correcta: 1,
              pista: "Manufacturas y bienes de capital que no se fabricaban en el país.",
              explicacion: "Argentina importaba productos elaborados de acero, telas inglesas, vajilla, carbón galés e insumos ferroviarios."
            },
            {
              pregunta: "¿Cómo pagaban las potencias centrales los alimentos que importaban de países como Argentina?",
              opciones: ["Con oro, dinero y mediante la venta de sus manufacturas industriales", "Con tierras en Europa", "Con alimentos que ellos cultivaban"],
              correcta: 0,
              pista: "Había un intercambio comercial complementario.",
              explicacion: "Las divisas generadas por las exportaciones primarias se utilizaban para comprar las manufacturas que llegaban en los barcos de vuelta."
            },
            {
              pregunta: "Bajo la DIT, si en Europa estallaba una crisis económica y dejaban de comprar alimentos, en Argentina ocurría que:",
              opciones: ["La economía crecía mucho más", "Se desataba una crisis económica local porque sobraban productos y no entraba dinero del exterior", "No pasaba absolutamente nada"],
              correcta: 1,
              pista: "Nuestra economía dependía de la demanda del mercado internacional.",
              explicacion: "La vulnerabilidad del modelo agroexportador radicaba en su dependencia directa de los ciclos de prosperidad o recesión de Europa."
            },
            {
              pregunta: "¿Qué otros países latinoamericanos formaban parte del grupo de países periféricos en el siglo XIX?",
              opciones: ["Brasil (café), Chile (cobre y salitre) y Cuba (azúcar)", "Inglaterra y Francia", "Alemania y Suiza"],
              correcta: 0,
              pista: "Naciones hermanas especializadas en productos agrícolas o minerales.",
              explicacion: "Casi toda América Latina se insertó en la DIT como proveedora de materias primas específicas: café, caucho, azúcar, cobre o cereales."
            },
            {
              pregunta: "La División Internacional del Trabajo promovió a nivel global una política comercial de tipo:",
              opciones: ["Cierre total de aduanas", "Librecambismo, facilitando el flujo de mercancías entre continentes", "Prohibición de la navegación"],
              correcta: 1,
              pista: "Comercio libre sin aranceles prohibitivos entre naciones.",
              explicacion: "Las potencias promovían el libre comercio internacional para que sus manufacturas ingresaran sin trabas a los mercados periféricos."
            },
            {
              pregunta: "¿Qué denominación popular y gráfica recibió la Argentina en el mundo entre 1880 y 1914?",
              opciones: ["La Fábrica del Acero", "El Granero del Mundo", "El Taller Textil"],
              correcta: 1,
              pista: "Por su gigantesca producción de trigo, maíz y cereales.",
              explicacion: "Argentina abastecía de harinas y granos a millones de personas en Europa, ganándose el apodo de 'El Granero del Mundo'."
            },
            {
              pregunta: "¿Qué zona geográfica de la Argentina fue el motor del modelo agroexportador?",
              opciones: ["La cordillera de los Andes", "La región pampeana y el litoral", "La meseta patagónica árida"],
              correcta: 1,
              pista: "Tierras llanas, húmedas y fértiles cerca de los ríos de la Plata y Paraná.",
              explicacion: "Las provincias pampeanas (Buenos Aires, Santa Fe, Córdoba, Entre Ríos) concentraron las mejores condiciones ecológicas para el agro."
            },
            {
              pregunta: "¿Cuáles eran los principales cultivos agrícolas de exportación en la Argentina de fines del siglo XIX?",
              opciones: ["Café, cacao y bananas", "Trigo, maíz y lino", "Algodón y caña de azúcar exclusivamente"],
              correcta: 1,
              pista: "Cereales y oleaginosas para alimentos y aceites.",
              explicacion: "El trigo para panificación, el maíz para forraje y el lino para aceites industriales fueron los cultivos estelares de la pampa húmeda."
            },
            {
              pregunta: "¿Cómo impactó la llegada del alambrado en los campos pampeanos?",
              opciones: ["Permitió delimitar la propiedad privada, separar la agricultura de la ganadería y mejorar las razas de ganado", "Impidió que los trenes pudieran circular", "Hizo que el pasto dejara de crecer"],
              correcta: 0,
              pista: "Cercó los campos para que los animales no se mezclaran ni pisaran los sembrados.",
              explicacion: "El alambrado ordenó el uso de la tierra, facilitó el mestizaje con toros finos británicos y protegió las áreas de cosecha."
            },
            {
              pregunta: "¿Qué razas de ganado vacuno británico se introdujeron para mejorar la calidad de la carne exportable?",
              opciones: ["Shorthorn, Hereford y Aberdeen Angus", "Gaucho criollo puro", "Cebú tropical"],
              correcta: 0,
              pista: "Razas de carne tierna adaptadas a los pastos pampeanos.",
              explicacion: "El ganado criollo fue mestizado con razas refinadas británicas (Shorthorn, Hereford, Angus) para satisfacer el paladar europeo."
            },
            {
              pregunta: "¿Quiénes eran los 'Arrendatarios' en la estructura del campo argentino de esa época?",
              opciones: ["Los dueños de los bancos de Londres", "Agricultores inmigrantes que alquilaban parcelas de tierra para sembrar y cosechar", "Soldados del ejército de frontera"],
              correcta: 1,
              pista: "Trabajaban la tierra pagando un alquiler al gran estanciero.",
              explicacion: "Muchos inmigrantes no pudieron comprar tierras por su alto costo y se convirtieron en arrendatarios (inquilinos rurales) por contrato."
            },
            {
              pregunta: "¿Qué grupo social concentraba la propiedad de las grandes estancias pampeanas y el poder político?",
              opciones: ["La oligarquía terrateniente (grandes propietarios de tierras)", "Los peones golondrina recién llegados", "Los caciques indígenas"],
              correcta: 0,
              pista: "Familias ricas que controlaban la Sociedad Rural y los cargos de gobierno.",
              explicacion: "La clase terrateniente pampeana dominaba la producción exportadora, concentraba inmensas fortunas y ejercía la conducción política del país."
            },
            {
              pregunta: "¿Qué puerto argentino concentraba el mayor volumen de salida de granos y carnes hacia el exterior?",
              opciones: ["El Puerto de Buenos Aires (y también el de Rosario)", "El puerto de Ushuaia", "El puerto de Posadas"],
              correcta: 0,
              pista: "Ubicado en el Río de la Plata con modernas dársenas para vapores.",
              explicacion: "Buenos Aires (con Puerto Madero y luego Puerto Nuevo) y Rosario sobre el Paraná eran las puertas de salida de la riqueza agropecuaria."
            },
            {
              pregunta: "¿Por qué el modelo agroexportador requería de millones de trabajadores inmigrantes?",
              opciones: ["Porque Argentina tenía una población muy reducida para sembrar y cosechar millones de hectáreas", "Para que los argentinos se fueran de vacaciones a Europa", "Porque los trenes funcionaban a pedal"],
              correcta: 0,
              pista: "El territorio era inmenso y faltaba mano de obra.",
              explicacion: "El país era extenso y con escasa población; sin la fuerza de trabajo de los inmigrantes europeos, levantar las cosechas era imposible."
            },
            {
              pregunta: "¿Qué ocurría con la tierra tras varias cosechas sucesivas de trigo bajo el sistema mixto pampeano?",
              opciones: ["Se sembraba alfalfa para alimentar al ganado refinado y devolver nutrientes al suelo", "Se quemaba con ácido", "Se abandonaba para siempre"],
              correcta: 0,
              pista: "La alternancia entre agricultura y pasturas forrajeras.",
              explicacion: "El sistema mixto combinaba años de agricultura con siembra de alfalfa para engorde de novillos, rotando y cuidando la fertilidad."
            },
            {
              pregunta: "¿Cuántos kilómetros de vías férreas llegó a tener aproximadamente la Argentina hacia 1910?",
              opciones: ["Menos de 100 kilómetros", "Casi 28.000 kilómetros", "Un millón de kilómetros"],
              correcta: 1,
              pista: "Una de las diez redes ferroviarias más extensas del planeta.",
              explicacion: "Entre 1860 y 1910 la red ferroviaria se multiplicó hasta alcanzar cerca de 28.000 km conectando pueblos, campos y puertos."
            },
            {
              pregunta: "¿Qué país extranjero fue el principal inversor y constructor de las líneas de ferrocarril en Argentina?",
              opciones: ["Gran Bretaña (empresas inglesas)", "España", "China"],
              correcta: 0,
              pista: "Empresas británicas con capitales, rieles y locomotoras de Inglaterra.",
              explicacion: "La mayoría de las compañías ferroviarias eran británicas, atraídas por las ganancias garantizadas en el transporte de granos."
            },
            {
              pregunta: "¿Cómo se llamaba la célebre primera locomotora que inauguró los viajes en tren en la Argentina en 1857?",
              opciones: ["La Tucumana", "La Porteña", "El Rayo del Sur"],
              correcta: 1,
              pista: "Bautizada con el gentilicio de la ciudad de Buenos Aires.",
              explicacion: "'La Porteña' recorrió el primer tramo del Ferrocarril del Oeste desde la actual Plaza Lavalle hasta la estación Floresta."
            },
            {
              pregunta: "¿Cuál fue el objetivo central del diseño en forma de abanico (radial) de los ferrocarriles argentinos?",
              opciones: ["Unir las provincias del interior entre sí sin pasar por Buenos Aires", "Conectar de manera directa las zonas de cultivo con los puertos de Buenos Aires y Rosario para la exportación", "Rodear toda la costa patagónica"],
              correcta: 1,
              pista: "Todas las vías apuntaban hacia el puerto donde esperaban los barcos.",
              explicacion: "El trazado radial estaba pensado para la salida veloz de la producción hacia el puerto de ultramar y no para la integración transversal interna."
            },
            {
              pregunta: "¿Qué sucedía en el paisaje pampeano cada vez que se instalaba una nueva estación de ferrocarril?",
              opciones: ["La gente huía asustada", "A su alrededor nacía y crecía un nuevo pueblo o ciudad con comercios, escuelas y viviendas", "El terreno se inundaba"],
              correcta: 1,
              pista: "Las estaciones fueron el punto de partida de cientos de localidades actuales.",
              explicacion: "Alrededor de cada estación se loteaban tierras y surgían pueblos que abastecían a los colonos y recibían mercancías del tren."
            },
            {
              pregunta: "¿Qué línea ferroviaria histórica unía la ciudad de Rosario con Córdoba?",
              opciones: ["Ferrocarril Central Argentino (actual tren Mitre)", "Ferrocarril del Oeste", "El Subte de Buenos Aires"],
              correcta: 0,
              pista: "Línea central que conectó el Litoral santafesino con el corazón de Córdoba.",
              explicacion: "El Ferrocarril Central Argentino comunicó Rosario con Córdoba hacia 1870, colonizando miles de hectáreas a los costados de las vías."
            },
            {
              pregunta: "¿Qué ferrocarril de trocha angosta se extendió hacia el norte hasta Salta y Jujuy?",
              opciones: ["El Ferrocarril Central Norte (actual Belgrano)", "El Tren de las Sierras", "El Tranvía porteño"],
              correcta: 0,
              pista: "Línea estatal construida para conectar el Noroeste argentino.",
              explicacion: "El Ferrocarril Central Norte unió Córdoba con Tucumán, Salta y Jujuy, integrando las provincias norteñas al mercado nacional."
            },
            {
              pregunta: "Además de transportar la cosecha al puerto, ¿qué beneficio aportó el ferrocarril al mercado interno?",
              opciones: ["Permitió el traslado de pasajeros y la distribución de productos de consumo entre distintas ciudades del país", "Impidió la llegada de cartas", "Cerró todos los almacenes de ramos generales"],
              correcta: 0,
              pista: "La gente viajaba mucho más rápido y seguro.",
              explicacion: "El tren dinamizó el mercado nacional permitiendo el viaje de familias y la distribución de mercaderías hacia las ciudades del interior."
            },
            {
              pregunta: "¿Quiénes eran los trabajadores que tendían los rieles y colocaban los durmientes de madera a lo largo del país?",
              opciones: ["Exclusivamente ingenieros ingleses con traje de gala", "Miles de obreros criollos e inmigrantes que realizaban un durísimo esfuerzo físico", "Máquinas robotizadas del siglo XX"],
              correcta: 1,
              pista: "La fuerza humana de miles de trabajadores en campamentos de vías.",
              explicacion: "Cuadrillas de peones criollos e inmigrantes (italianos, españoles) abrieron caminos a pico y pala viviendo en campamentos volantes."
            },
            {
              pregunta: "¿Por qué se dice que el ferrocarril fue clave para integrar a la Argentina al mundo?",
              opciones: ["Porque los trenes cruzaban el océano navegando", "Porque permitió que los granos y carnes del campo llegaran a tiempo a los barcos de exportación", "Porque era gratis para todos los turistas"],
              correcta: 1,
              pista: "Completó la cadena logística del modelo agroexportador.",
              explicacion: "El tren fue el eslabón de transporte indispensable que conectó la producción del campo con los buques que iban a Europa."
            },
            {
              pregunta: "¿A qué actividad económica estuvieron estrechamente ligadas las primeras industrias modernas en Argentina?",
              opciones: ["A la minería de diamantes", "A la actividad agropecuaria (procesamiento de carne y cereales)", "A la fabricación de teléfonos celulares"],
              correcta: 1,
              pista: "Procesaban lo que se cosechaba y criaba en los campos.",
              explicacion: "Las primeras grandes industrias agregaban valor primario a los productos de la pampa: molinos harineros y frigoríficos de carnes."
            },
            {
              pregunta: "¿Qué ventaja tenían los FRIGORÍFICOS (como Swift) frente a los viejos saladeros?",
              opciones: ["Envasaban carne salada dura", "Conservaban la carne mediante frío artificial, exportando cortes tiernos enfriados o congelados de alto valor", "Solo vendían cuero para zapatos"],
              correcta: 1,
              pista: "La carne congelada era tierna y se vendía mucho mejor en Gran Bretaña.",
              explicacion: "El tasajo salado era para esclavos; el frigorífico abasteció a la población urbana europea con carne vacuna de excelente calidad."
            },
            {
              pregunta: "¿Qué producto industrial de exportación extraía la empresa británica 'La Forestal' de los bosques del Chaco y Santa Fe?",
              opciones: ["Aceite de girasol", "Tanino (extraído del quebracho) y durmientes de madera para las vías", "Gasolina para aviones"],
              correcta: 1,
              pista: "Sustancia amarga que se usaba para curtir cueros en todo el mundo.",
              explicacion: "La Forestal procesaba el quebracho colorado para obtener tanino (indispensable para la curtiembre) y durmientes para el ferrocarril."
            },
            {
              pregunta: "¿Cuáles fueron ejemplos destacados de industrias orientadas al MERCADO INTERNO a fines del siglo XIX?",
              opciones: ["Fábricas de satélites", "Fábricas de galletitas (Bagley), calzado (Alpargatas) y muebles", "Fundiciones de oro puro"],
              correcta: 1,
              pista: "Producían alimentos envasados y zapatillas para los habitantes de las ciudades.",
              explicacion: "El crecimiento de Buenos Aires impulsó industrias de bienes no durables (Bagley, Noel, Cervecería Quilmes, Alpargatas) para consumo popular."
            },
            {
              pregunta: "¿Qué región de la Argentina resultó ampliamente la MÁS FAVORECIDA por el modelo agroexportador?",
              opciones: ["La región pampeana y el litoral", "La Puna jujeña", "El interior de La Rioja"],
              correcta: 0,
              pista: "Poseía las mejores tierras, los puertos y la mayor densidad de trenes.",
              explicacion: "La pampa húmeda gozó de una posición privilegiada por clima, cercanía portuaria y concentración de inversiones de capital."
            },
            {
              pregunta: "¿Qué producían las provincias del Noroeste (Tucumán, Salta y Jujuy) para el mercado interno?",
              opciones: ["Trigo para Europa", "Azúcar a partir del cultivo e industrialización de la caña de azúcar", "Carne ovina congelada"],
              correcta: 1,
              pista: "Ingenios azucareros que endulzaban a todo el país.",
              explicacion: "El NOA se especializó en la caña de azúcar en grandes ingenios industriales, abasteciendo la demanda de las ciudades argentinas."
            },
            {
              pregunta: "¿Qué producción regional característica se consolidó en la región de Cuyo (Mendoza y San Juan)?",
              opciones: ["La industria vitivinícola (viñedos y elaboración de vinos)", "La pesca marítima en barco", "La cosecha de yerba mate"],
              correcta: 0,
              pista: "El cultivo de la vid y las bodegas de vino.",
              explicacion: "Cuyo desarrolló una pujante agroindustria del vino gracias al riego por acequias y la conexión ferroviaria con Buenos Aires."
            },
            {
              pregunta: "¿Qué producción destacaba en la provincia de Misiones y el noreste argentino?",
              opciones: ["La extracción de carbón mineral", "La yerba mate y los recursos forestales de madera", "La cría masiva de caballos de carrera"],
              correcta: 1,
              pista: "La infusión tradicional argentina y árboles de la selva.",
              explicacion: "Misiones abastecía al mercado argentino con yerba mate y maderas nativas para construcciones y embalajes."
            },
            {
              pregunta: "¿Por qué muchas economías regionales del interior sufrieron graves dificultades económicas en esa época?",
              opciones: ["Porque el ingreso de manufacturas importadas más baratas por el puerto perjudicó a sus producciones locales", "Porque no tenían tierra cultivable", "Porque nadie consumía azúcar ni vino"],
              correcta: 0,
              pista: "Las telas e industrias artesanales del interior no podían competir en precio.",
              explicacion: "Los productos importados de Europa llegaban baratos en tren, arruinando a los antiguos talleres y tejedurías artesanales provinciales."
            },
            {
              pregunta: "La frase 'Un mismo país, realidades diferentes' resume:",
              opciones: ["Que todas las provincias tenían exactamente la misma riqueza", "El desarrollo desigual del territorio argentino durante la era del modelo agroexportador", "Que el país estaba dividido en diez naciones independientes"],
              correcta: 1,
              pista: "Marcó una gran brecha económica entre Buenos Aires/Pampa y el resto del interior.",
              explicacion: "Refleja cómo el modelo enriqueció a la zona pampeana pero dejó rezagadas y en crisis a muchas regiones del interior no exportador."
            },
            {
              pregunta: "¿Cuántos inmigrantes extranjeros llegaron aproximadamente a la Argentina entre 1880 y 1914?",
              opciones: ["Menos de diez mil personas", "Más de 4 millones de personas", "Cien personas"],
              correcta: 1,
              pista: "Una de las mayores oleadas migratorias de la historia contemporánea mundial.",
              explicacion: "Arribaron más de 4 millones de inmigrantes de ultramar, modificando de forma sustancial la composición de la sociedad argentina."
            },
            {
              pregunta: "¿De qué dos países europeos provenía la gran mayoría de los inmigrantes que llegaron a la Argentina?",
              opciones: ["Italia y España", "Rusia y China", "Inglaterra y Suecia"],
              correcta: 0,
              pista: "Italianos y españoles constituyeron más del 70% de los recién llegados.",
              explicacion: "La enorme mayoría eran italianos (de diversas regiones) y españoles, seguidos por franceses, alemanes, polacos y sirio-libaneses."
            },
            {
              pregunta: "¿Cuáles fueron los motivos principales que impulsaron a millones de europeos a emigrar a nuestro país?",
              opciones: ["Viajar por turismo de fin de semana", "Pobreza, falta de trabajo y tierras, crisis económicas y guerras en sus lugares de origen", "Un castigo impuesto por sus reyes"],
              correcta: 1,
              pista: "Buscaban una oportunidad de 'hacer la América' y progresar con trabajo.",
              explicacion: "La difícil situación socioeconómica en Europa expulsaba a campesinos desocupados, que veían en Argentina la esperanza de forjar un futuro."
            },
            {
              pregunta: "¿Qué fue el 'Hotel de Inmigrantes' ubicado en el puerto de Buenos Aires?",
              opciones: ["Un hotel de lujo para turistas ricos con pileta de natación", "Un gran complejo del Estado donde los inmigrantes recibían alojamiento, comida y atención médica gratuita al llegar", "Una estación de policía donde los encerraban"],
              correcta: 1,
              pista: "Los alojaba gratuitamente durante sus primeros 5 días en el país.",
              explicacion: "Construido por el gobierno en Retiro, brindaba cobijo inicial, desinfección médica y oficinas de empleo para ubicarlos laboralmente."
            },
            {
              pregunta: "¿Qué eran los 'Conventillos' en barrios porteños como La Boca o San Telmo?",
              opciones: ["Viejas mansiones subdivididas en pequeñas piezas de alquiler donde vivían hacinadas familias de diversos orígenes compartiendo patio y cocina", "Campos de trigo en las afueras de la ciudad", "Teatros de ópera"],
              correcta: 0,
              pista: "Inquilinatos populosos donde se mezclaban idiomas y costumbres.",
              explicacion: "Los conventillos eran viviendas colectivas donde familias enteras alquilaban una habitación chica, conviviendo en patios comunes multilingües."
            },
            {
              pregunta: "¿Qué ley argentina de 1876 reglamentó y fomentó la llegada de los contingentes migratorios?",
              opciones: ["La Ley Avellaneda de Inmigración y Colonización", "La Ley de Aduanas Secas", "El Tratado de San Nicolás"],
              correcta: 0,
              pista: "Sancionada bajo la presidencia de Nicolás Avellaneda.",
              explicacion: "La Ley Avellaneda (N° 817) otorgaba derechos civiles, pasaje subsidiado en ciertos casos y apoyo estatal para instalarse."
            },
            {
              pregunta: "¿Qué es el 'Lunfardo' y cómo se originó en la Argentina?",
              opciones: ["Un dialecto indígena precolombino", "Un vocabulario popular nacido en Buenos Aires por la fusión del español con términos traídos por los inmigrantes italianos", "El idioma oficial de Francia"],
              correcta: 1,
              pista: "Palabras como laburo, mina, facha, pibe, guita.",
              explicacion: "El lunfardo surgió en los conventillos, puertos y arrabales porteños como una jerga que amalgamó modismos italianos con el habla criolla."
            },
            {
              pregunta: "¿Por qué muchos inmigrantes que soñaban con tener su propio campo terminaron quedándose a trabajar en las ciudades?",
              opciones: ["Porque en las ciudades regalaban casas quintas", "Porque la mayor parte de las mejores tierras pampeanas ya pertenecía a grandes terratenientes y era muy cara para comprarla", "Porque estaba prohibido viajar en tren"],
              correcta: 1,
              pista: "La tierra estaba concentrada en pocas manos que no querían subdividirla.",
              explicacion: "La alta concentración de tierras en manos de estancieros obligó a muchos a trabajar como peones temporarios o radicarse en las ciudades como obreros o comerciantes."
            },
            {
              pregunta: "¿Qué rol cumplieron las 'Sociedades de Socorros Mutuos' creadas por las distintas colectividades de inmigrantes?",
              opciones: ["Eran bancos privados para financiar guerras", "Asociaciones comunitarias que brindaban ayuda médica, económica y contención fraterna a los paisanos de su misma nacionalidad", "Partidos políticos que gobernaban el país"],
              correcta: 1,
              pista: "Hospitales y centros mutuales españoles, italianos, franceses, etc.",
              explicacion: "Las mutuales (Hospital Italiano, Hospital Español, etc.) brindaban salud, entierros dignos y asistencia mutua a los recién llegados."
            },
            {
              pregunta: "¿Qué género musical y cultural universal nació en los arrabales y conventillos porteños fruto de la mezcla criolla e inmigrante?",
              opciones: ["El tango", "El rock and roll", "La música clásica vienesa"],
              correcta: 0,
              pista: "Danza y música que canta a la nostalgia y al barrio con bandoneón.",
              explicacion: "El tango floreció en el Río de la Plata a fines del siglo XIX como una síntesis cultural única entre la guitarra criolla, ritmos afro y melodías europeas."
            }
          ]
        },
        "Q4": {
          guia: [],
          glosario: [],
          simulacro: []
        }
      }
    },
    "ingles": {
      materia: "Inglés Técnico",
      color: "#4f46e5",
      trimestres: {
        "Q1": { guia: [], glosario: [], simulacro: [] },
        "Q2": {
          guia: [
            {
              titulo: "Lección 1: Pasado Simple - Verbos Regulares",
              texto: "El <b>Past Simple</b> (Pasado Simple) se usa para hablar de acciones que ya terminaron en el pasado. Para los <b>verbos regulares</b>, la regla general es agregarle <b>-ed</b> al final del verbo.<br><br><b>Reglas de Ortografía importantes para niños:</b><br>1. Regla general: Solo agregamos -ed. Ejemplo: <i>walk</i> (caminar) -> <i>walked</i>.<br>2. Si el verbo ya termina con la letra -e: Solo agregamos la -d. Ejemplo: <i>like</i> (gustar) -> <i>liked</i>.<br>3. Si termina en Consonante + Y: Cambiamos la 'y' por una 'i' latina y agregamos -ed. Ejemplo: <i>study</i> (estudiar) -> <i>studied</i>.<br>4. Si es un verbo cortito y termina en Consonante-Vocal-Consonante (CVC): Duplicamos la última letra antes de poner -ed. Ejemplo: <i>stop</i> (parar) -> <i>stopped</i>.<br><br><b>Forma Negativa:</b> Usamos el secreto <b>did not</b> o su versión corta <b>didn't</b>. ¡Ojo! Cuando ponemos <i>didn't</i>, el verbo vuelve a su forma normal (pierde el -ed). Ejemplo: <i>I didn't watch TV</i> (Yo no miré tele).<br><br><b>Preguntas:</b> Empezamos la pregunta con <b>Did</b>, y el verbo también se queda en su forma normal. Ejemplo: <i>Did you play?</i> (¿Vos jugaste?).",
              resumen_corto: "Se usa para acciones terminadas. Los verbos regulares suman '-ed'. En negativo usamos 'didn't' y en pregunta 'Did' con el verbo normal.",
              preguntaValidacion: {
                q: "Si queremos decir 'Yo estudié inglés ayer', ¿cuál es la forma correcta del verbo 'study'?",
                a: ["studyed", "studied", "studying"],
                c: 1
              }
            },
            {
              titulo: "Lección 2: Pasado Simple - Verbos Irregulares",
              texto: "Los <b>Irregular Verbs</b> (Verbos Irregulares) son rebeldes: ¡no siguen la regla del -ed! Cambian de forma por completo cuando los pasamos al pasado y hay que aprenderlos de memoria jugando y practicando.<br><br><b>Los ejemplos más usados por niños:</b><br>- <i>go</i> (ir) -> se transforma en <b>went</b><br>- <i>eat</i> (comer) -> se transforma en <b>ate</b><br>- <i>see</i> (ver) -> se transforma en <b>saw</b><br>- <i>write</i> (escribir) -> se transforma en <b>wrote</b><br>- <i>buy</i> (comprar) -> se transforma en <b>bought</b><br><br><b>¡Súper Truco Secreto!:</b> Las formas de Negativo (<b>didn't</b>) y Pregunta (<b>Did</b>) funcionan EXACTAMENTE IGUAL que con los verbos regulares. Esto significa que el verbo rebelde se asusta y vuelve a su forma normal.<br><br>Ejemplo Afirmativo: <i>He went to the park</i> (Él fue al parque).<br>Ejemplo Negativo: <i>He <b>didn't go</b> to the park</i> (Él no fue al parque). ¡Vuelve a ser 'go'!",
              resumen_corto: "Los verbos irregulares cambian por completo en afirmativo. Pero en las negaciones (didn't) y preguntas (Did) vuelven a su forma normal.",
              preguntaValidacion: {
                q: "¿Cómo se dice correctamente en negativo 'Ella no comió pizza'?",
                a: ["She didn't ate pizza.", "She didn't eat pizza.", "She not eat pizza."],
                c: 1
              }
            },
            {
              titulo: "Lección 3: Pasado Continuo - Acciones en Progreso",
              texto: "El <b>Past Continuous</b> (Pasado Continuo) se usa para describir acciones que estaban ocurriendo (en progreso o en desarrollo) en un momento específico del pasado. Imagina que es como ponerle pausa a una película en el pasado para ver qué estaba haciendo el personaje.<br><br><b>¿Cómo se arma?:</b> Usamos el verbo del pasado (<b>was</b> o <b>were</b>) + un verbo con la terminación <b>-ing</b> (que significa -ando o -endo).<br><br><b>¿Cuándo usar Was y cuándo Were?</b><br>- Usamos <b>Was</b> con: <i>I, he, she, it</i> (Personas singulares). Ejemplo: <i>She was reading</i> (Ella estaba leyendo).<br>- Usamos <b>Were</b> con: <i>you, we, they</i> (Personas en plural). Ejemplo: <i>They were playing</i> (Ellos estaban jugando).<br><br><b>Negativo:</b> Ponemos <i>wasn't</i> o <i>weren't</i>. Ejemplo: <i>We weren't sleeping</i> (No estábamos durmiendo).<br><b>Pregunta:</b> Cambiamos el orden al inicio. Ejemplo: <i>Was he cooking?</i> (¿Él estaba cocinando?).",
              resumen_corto: "Muestra una acción que se estaba haciendo en el pasado. Se arma con 'was/were' más el verbo terminado en '-ing'.",
              preguntaValidacion: {
                q: "Para decir 'Nosotros estábamos jugando', ¿cuál se usa?",
                a: ["We was playing", "We were playing", "We playing"],
                c: 1
              }
            },
            {
              titulo: "Lección 4: Combinando Pasados (Interrupciones)",
              texto: "Muchas veces usamos el Pasado Simple y el Pasado Continuo juntos en la misma oración. Esto sirve para contar que una acción larga que se estaba haciendo en el pasado fue **interrumpida** por una acción cortita de repente.<br><br><b>Nuestras dos palabras mágicas conectoras son:</b><br><br>1. <b>WHEN (Cuando):</b> Por lo general, va seguido por el Pasado Simple (la acción cortita que interrumpe).<br>Ejemplo: <i>I was watching TV <b>when</b> the phone rang.</i> (Yo estaba mirando tele cuando el teléfono sonó). Mirar tele era la acción larga; que suene el teléfono fue la interrupción cortita.<br><br>2. <b>WHILE (Mientras):</b> Por lo general, va seguido por el Pasado Continuo (la acción larga que tomaba tiempo).<br>Ejemplo: <i><b>While</b> I was studying, my cat jumped into my bed.</i> (Mientras yo estaba estudiando, mi gato saltó a mi cama).",
              resumen_corto: "El Pasado Continuo es la acción larga de fondo y el Pasado Simple es la acción corta que la interrumpe. Usamos 'when' y 'while'.",
              preguntaValidacion: {
                q: "Completa la idea: 'Mientras mi mamá estaba cocinando, mi papá ___ a casa'.",
                a: ["came (llegó)", "was coming (estaba llegando)", "comes (llega)"],
                c: 0
              }
            }
          ],
          glosario: [
            { termino: "Action in progress", def: "Una acción en progreso. Significa que la actividad se estaba realizando de forma continua en ese momento." },
            { termino: "Auxiliary Verb", def: "Verbo auxiliar. Un verbo ayudante (como 'did', 'was', 'were') que sirve para armar los negativos y las preguntas." },
            { termino: "Base Form", def: "Forma base. El verbo en su estado natural e infinitivo, sin agregarle ninguna letra ni tiempo (ejemplo: 'play')." },
            { termino: "Completed Action", def: "Acción terminada. Un evento que empezó y finalizó por completo en el pasado." },
            { termino: "Consonant", def: "Consonante. Cualquier letra del abecedario que no sea una vocal (ejemplo: b, c, d, f, g, z)." },
            { termino: "Irregular Verb", def: "Verbo irregular. Un verbo rebelde que cambia su forma por completo en el pasado afirmativo sin usar -ed." },
            { termino: "Regular Verb", def: "Verbo regular. Un verbo obediente que sigue la regla estándar de sumar -ed o -d en el pasado." },
            { termino: "Short Action", def: "Acción corta. Una acción repentina en pasado simple que ocurre en un instante e interrumpe a otra." },
            { termino: "Suffix", def: "Sufijo. Una combinación de letras que se pegan al final de una palabra, como '-ed' o '-ing'." },
            { termino: "Time Expression", def: "Expresión de tiempo. Palabras que te indican exactamente cuándo ocurrió la acción (ejemplo: 'yesterday' significa ayer)." },
            { termino: "When", def: "Significa 'Cuando'. Por lo general introduce la acción corta que interrumpe en pasado simple." },
            { termino: "While", def: "Significa 'Mientras'. Introduce la acción larga y continua en pasado continuo." }
          ],
          simulacro: [
            {
              pregunta: "1. Yesterday, I ___ (play) football with my friends in the park.",
              opciones: ["played", "playyed", "plays"],
              correcta: 0,
              pista: "Este es un verbo regular común. Sigue la regla general y agrégale '-ed' al final."
            },
            {
              pregunta: "2. She ___ (study) all night for the English exam last Tuesday.",
              opciones: ["studyed", "studying", "studied"],
              correcta: 2,
              pista: "Cuando el verbo termina en consonante + 'y', cambiamos la 'y' por la 'i' latina antes del '-ed'."
            },
            {
              pregunta: "3. They ___ (not watch) TV yesterday evening.",
              opciones: ["don't watch", "didn't watched", "didn't watch"],
              correcta: 2,
              pista: "Para negar en el pasado usamos 'didn't' y el verbo tiene que quedarse en su forma normal."
            },
            {
              pregunta: "4. ___ you clean your bedroom last weekend?",
              opciones: ["Did", "Were", "Do"],
              correcta: 0,
              pista: "Para empezar una pregunta en pasado simple sobre una acción terminada usamos el auxiliar 'Did'."
            },
            {
              pregunta: "5. Last year, my family ___ (go) to Bariloche for our holidays.",
              opciones: ["goed", "went", "gone"],
              correcta: 1,
              pista: "'Go' es un verbo irregular muy rebelde. Su forma en pasado cambia por completo a una palabra con 'w'."
            },
            {
              pregunta: "6. We ___ (see) a massive whale in the ocean during our trip.",
              opciones: ["saw", "seed", "seen"],
              correcta: 0,
              pista: "'See' es un verbo irregular. Su pasado es una palabra cortita de tres letras que empieza con 's'."
            },
            {
              pregunta: "7. He ___ (have) a terrible headache yesterday morning.",
              opciones: ["haved", "has", "had"],
              correcta: 2,
              pista: "El pasado del verbo irregular 'have' es muy corto y termina con la letra 'd'."
            },
            {
              pregunta: "8. At 8 o'clock last night, she ___ (read) a fascinating novel.",
              opciones: ["was reading", "were reading", "readed"],
              correcta: 0,
              pista: "A una hora exacta, la acción estaba ocurriendo. Como es 'she' (singular), usamos 'was' + verbo con '-ing'."
            },
            {
              pregunta: "9. The boys ___ (play) video games when the electrical power went out.",
              opciones: ["was playing", "were playing", "played"],
              correcta: 1,
              pista: "'The boys' son ellos (plural). En el pasado continuo para el plural usamos 'were'."
            },
            {
              pregunta: "10. I ___ (not sleep) when you texted me at midnight.",
              opciones: ["wasn't sleeping", "weren't sleeping", "didn't slept"],
              correcta: 0,
              pista: "Para decir 'Yo no estaba...', usamos el negativo de was, que es 'wasn't', seguido de '-ing'."
            },
            {
              pregunta: "11. ___ they listening to the teacher when she explained the project?",
              opciones: ["Did", "Was", "Were"],
              correcta: 2,
              pista: "Es una pregunta en pasado continuo para 'they' (ellos). Debes empezar con 'Were'."
            },
            {
              pregunta: "12. I was doing my homework when my mother ___ (arrive) home.",
              opciones: ["was arriving", "arrived", "arrivee"],
              correcta: 1,
              pista: "La acción larga se corta porque mamá llegó. La interrupción cortita va en pasado simple (con '-ed')."
            },
            {
              pregunta: "13. While they ___ (cook) dinner, the fire alarm started making a loud noise.",
              opciones: ["were cooking", "was cooking", "cooked"],
              correcta: 0,
              pista: "La palabra 'While' significa 'Mientras'. Te avisa que viene la acción larga en pasado continuo."
            },
            {
              pregunta: "14. The yellow car ___ (stop) suddenly at the red traffic light.",
              opciones: ["stoped", "stopped", "was stopping"],
              correcta: 1,
              pista: "'Stop' es consonante-vocal-consonante. ¡Duplica la última letra antes de poner el '-ed'!"
            },
            {
              pregunta: "15. She ___ (write) a beautiful poem for her mother's birthday.",
              opciones: ["writed", "wrote", "written"],
              correcta: 1,
              pista: "'Write' es irregular. Su pasado cambia la letra 'i' por una 'o'."
            },
            {
              pregunta: "16. My uncle ___ (buy) a brand new laptop last Friday afternoon.",
              opciones: ["bought", "buyed", "boughted"],
              correcta: 0,
              pista: "El pasado de 'buy' (comprar) es irregular y termina con la forma difícil '-ought'."
            },
            {
              pregunta: "17. We ___ (swim) in the cold river for two hours yesterday.",
              opciones: ["swammed", "swam", "swimming"],
              correcta: 1,
              pista: "El verbo irregular 'swim' cambia su vocal interna de 'i' a 'a' en el pasado simple."
            },
            {
              pregunta: "18. He didn't ___ (like) the horror movie at all.",
              opciones: ["liked", "liking", "like"],
              correcta: 2,
              pista: "¡Alerta! Ya está puesto el ayudante 'didn't', así que el verbo tiene que volver a estar normal y limpio."
            },
            {
              pregunta: "19. Where ___ you go for your last summer vacation?",
              opciones: ["were", "did", "was"],
              correcta: 1,
              pista: "Es una pregunta sobre un viaje que ya terminó. Necesitamos el ayudante de preguntas del pasado: 'did'."
            },
            {
              pregunta: "20. The neighbour's dog ___ (bark) continuously all night long.",
              opciones: ["was barking", "were barking", "barkeded"],
              correcta: 0,
              pista: "El perro es un animal singular ('it'). Le corresponde usar 'was' más el verbo con '-ing'."
            },
            {
              pregunta: "21. We were walking down the street when it suddenly ___ (start) to pour rain.",
              opciones: ["starting", "started", "was starting"],
              correcta: 1,
              pista: "Empezó a llover de golpe. Esa interrupción corta requiere el pasado simple regular con '-ed'."
            },
            {
              pregunta: "22. I found my lost keys while I ___ (clean) up the messy living room.",
              opciones: ["was cleaning", "were cleaning", "cleaned"],
              correcta: 0,
              pista: "Después de 'while' (mientras) va la acción larga en desarrollo: yo ('I') estaba limpiando."
            },
            {
              pregunta: "23. They ___ (eat) a delicious pepperoni pizza at the Italian restaurant.",
              opciones: ["eated", "ate", "eating"],
              correcta: 1,
              pista: "'Eat' es irregular. Su pasado se escribe moviendo las letras para formar 'ate'."
            },
            {
              pregunta: "24. The thirsty cat ___ (drink) all the milk from its small bowl.",
              opciones: ["drank", "drinked", "drunk"],
              correcta: 0,
              pista: "El pasado del verbo 'drink' cambia la letra 'i' por una 'a'."
            },
            {
              pregunta: "25. She ___ (run) incredibly fast and won the school gold medal.",
              opciones: ["runned", "running", "ran"],
              correcta: 2,
              pista: "El pasado del verbo irregular 'run' (correr) se escribe con una 'a' intermedia."
            },
            {
              pregunta: "26. I ___ (lose) my favourite English textbook at school yesterday.",
              opciones: ["losed", "lost", "loose"],
              correcta: 1,
              pista: "El pasado del verbo irregular 'lose' (perder) es una palabra cortita de 4 letras que termina en 't'."
            },
            {
              pregunta: "27. Our school team ___ (win) the final football tournament match.",
              opciones: ["won", "winned", "winning"],
              correcta: 0,
              pista: "El pasado del verbo irregular 'win' (ganar) cambia la letra 'i' por una 'o'."
            },
            {
              pregunta: "28. He ___ (not watch) the documentary when the telephone rang.",
              opciones: ["wasn't watching", "weren't watching", "didn't watching"],
              correcta: 0,
              pista: "Él ('he') no estaba realizando esa acción larga de mirar la tele. Usamos 'wasn't' + '-ing'."
            },
            {
              pregunta: "29. What ___ you doing at exactly 9 o'clock last night?",
              opciones: ["was", "did", "were"],
              correcta: 2,
              pista: "En preguntas de pasado continuo para la persona 'you', siempre usamos 'were'."
            },
            {
              pregunta: "30. They ___ (visit) their grandparents living in Mar del Plata last month.",
              opciones: ["visited", "visitted", "visiting"],
              correcta: 0,
              pista: "'Visit' es un verbo regular común. Solo agrégale '-ed' al final sin duplicar nada."
            },
            {
              pregunta: "31. The ballerina ___ (dance) beautifully during the school festival.",
              opciones: ["danced", "danceed", "was dance"],
              correcta: 0,
              pista: "Como 'dance' ya termina con la letra 'e', solo debemos sumarle una letra 'd' al final."
            },
            {
              pregunta: "32. The passenger train ___ (arrive) precisely on time last night.",
              opciones: ["arrived", "arriving", "arriveed"],
              correcta: 0,
              pista: "El verbo regular 'arrive' termina en 'e'. Solo agrégale la letra 'd' para pasarlo al pasado."
            },
            {
              pregunta: "33. He ___ (speak) perfect English during his presentation.",
              opciones: ["speaked", "spoke", "spoken"],
              correcta: 1,
              pista: "'Speak' es irregular. Su pasado cambia por completo y se transforma en 'spoke'."
            },
            {
              pregunta: "34. The children ___ (sing) a wonderful song together in the choir.",
              opciones: ["singed", "sung", "sang"],
              correcta: 2,
              pista: "El pasado del verbo irregular 'sing' (cantar) se escribe cambiando la 'i' por una 'a'."
            },
            {
              pregunta: "35. I totally ___ (forget) to bring my science homework project today.",
              opciones: ["forgot", "forgetted", "forgat"],
              correcta: 0,
              pista: "El verbo irregular 'forget' cambia su letra 'e' por una 'o' en el pasado simple."
            },
            {
              pregunta: "36. The generous teacher ___ (give) us some extra points for participation.",
              opciones: ["gived", "gave", "given"],
              correcta: 1,
              pista: "El pasado simple del verbo irregular 'give' (dar) cambia su vocal interna por una 'a'."
            },
            {
              pregunta: "37. We already ___ (know) all the correct answers to the test.",
              opciones: ["knew", "knowed", "known"],
              correcta: 0,
              pista: "El verbo irregular 'know' (saber) cambia su letra 'o' por una 'e' en el pasado."
            },
            {
              pregunta: "38. The telephone rang loudly while I ___ (take) a relaxing shower.",
              opciones: ["took", "was taking", "were taking"],
              correcta: 1,
              pista: "La palabra 'while' indica una acción larga continua. Como es 'I', lleva 'was' + '-ing'."
            },
            {
              pregunta: "39. Did you ___ (see) the beautiful rainbow in the sky earlier?",
              opciones: ["saw", "see", "seeing"],
              correcta: 1,
              pista: "Como la pregunta ya empieza con el ayudante 'Did', el verbo debe volver a su forma base normal."
            },
            {
              pregunta: "40. He was ___ (run) quickly in the playground when he tripped and fell.",
              opciones: ["running", "runing", "runned"],
              correcta: 0,
              pista: "En pasado continuo, al verbo corto 'run' (CVC) se le duplica la 'n' antes del '-ing'."
            },
            {
              pregunta: "41. She was ___ (make) a delicious chocolate cake for my birthday party.",
              opciones: ["maked", "making", "makeing"],
              correcta: 1,
              pista: "Cuando agregamos '-ing', los verbos que terminan con una 'e' muda pierden esa letra."
            },
            {
              pregunta: "42. I didn't ___ (know) that you were waiting outside in the cold.",
              opciones: ["knew", "know", "knowing"],
              correcta: 1,
              pista: "En las oraciones negativas con 'didn't', el verbo principal siempre se queda en su forma base limpia."
            },
            {
              pregunta: "43. They traveled to London exactly three years ___.",
              opciones: ["ago", "last", "before"],
              correcta: 0,
              pista: "La palabra que se pone al final para decir cuánto tiempo atrás ocurrió algo es 'ago' (atrás)."
            },
            {
              pregunta: "44. A small colourful bird ___ (fly) directly into the classroom window.",
              opciones: ["flied", "flew", "flown"],
              correcta: 1,
              pista: "'Fly' (volar) es un verbo irregular. Su forma pasada se escribe 'flew'."
            },
            {
              pregunta: "45. The clumsy boy ___ (break) his new reading glasses yesterday afternoon.",
              opciones: ["broke", "breaked", "broken"],
              correcta: 1,
              pista: "'Break' es irregular. Su pasado cambia a una palabra que termina en 'e' muda: 'broke'."
            },
            {
              pregunta: "46. Our school director ___ (teach) us a historical lesson last Friday.",
              opciones: ["teached", "taught", "taughted"],
              correcta: 1,
              pista: "El verbo 'teach' (enseñar) es irregular y su forma pasada es larga y difícil: 'taught'."
            },
            {
              pregunta: "47. We ___ (spend) all our pocket money on sweets at the local shop.",
              opciones: ["spended", "spent", "spending"],
              correcta: 1,
              pista: "El pasado del verbo irregular 'spend' cambia su última letra 'd' por una 't'."
            },
            {
              pregunta: "48. We ___ not paying attention when the guide pointed at the ancient map.",
              opciones: ["were", "was", "did"],
              correcta: 0,
              pista: "Estamos en pasado continuo con la persona plural 'We'. Le corresponde usar 'were'."
            },
            {
              pregunta: "49. When the teacher walked into the room, the students ___ (talk) loudly.",
              opciones: ["talked", "were talking", "was talking"],
              correcta: 1,
              pista: "Los alumnos estaban realizando una acción larga y ruidosa cuando entró el profesor. Usá pasado continuo."
            },
            {
              pregunta: "50. He ___ (not help) me carry the heavy box upstairs yesterday.",
              opciones: ["didn't helped", "didn't help", "wasn't help"],
              correcta: 1,
              pista: "Para negar en pasado simple regular, combinamos 'didn't' con el verbo en infinitivo normal."
            },
            {
              pregunta: "51. I ___ (lose) my favorite pen last Monday.",
              opciones: ["lost", "losed", "losen"],
              correcta: 0,
              pista: "El pasado del verbo irregular 'lose' cambia la letra final por una 't'."
            },
            {
              pregunta: "52. What time ___ you arrive at the cinema yesterday?",
              opciones: ["did", "were", "was"],
              correcta: 0,
              pista: "Para preguntar la hora exacta en que ocurrió una acción terminada, usamos el auxiliar 'did'."
            },
            {
              pregunta: "53. My sister ___ (cry) when she fell off her bicycle.",
              opciones: ["cried", "cryed", "was crying"],
              correcta: 0,
              pista: "'Cry' termina en consonante + 'y'. Cambiá la 'y' por la 'i' latina antes de agregar '-ed'."
            },
            {
              pregunta: "54. While the teacher was speaking, the kids ___ (listen) carefully.",
              opciones: ["were listening", "was listening", "listened"],
              correcta: 0,
              pista: "Es una acción en paralelo y continua en el pasado. Los chicos ('kids' es plural) estaban escuchando."
            },
            {
              pregunta: "55. The dog ___ (bite) the ball and ran into the garden.",
              opciones: ["bited", "bit", "bitten"],
              correcta: 1,
              pista: "El pasado del verbo irregular 'bite' (morder) es una palabra muy cortita: 'bit'."
            },
            {
              pregunta: "56. I ___ (try) to finish my homework before dinner.",
              opciones: ["tryed", "tried", "was trying"],
              correcta: 1,
              pista: "El verbo regular 'try' termina en consonante + 'y'. Cambiá la letra 'y' por 'i' antes del '-ed'."
            },
            {
              pregunta: "57. Did your father ___ (drive) you to school this morning?",
              opciones: ["drive", "drove", "driven"],
              correcta: 0,
              pista: "Ya pusiste el ayudante de preguntas 'Did', así que el verbo vuelve a su forma base normal."
            },
            {
              pregunta: "58. We ___ (have) lunch when the lights went out.",
              opciones: ["were having", "was having", "had"],
              correcta: 0,
              pista: "Estábamos realizando la acción larga de almorzar en plural. Usamos 'were' + verbo con '-ing'."
            },
            {
              pregunta: "59. She ___ (plan) a secret birthday party for her best friend.",
              opciones: ["planed", "planned", "was plan"],
              correcta: 1,
              pista: "'Plan' termina en Consonante-Vowel-Consonant. ¡Duplicá la 'n' antes de colocar '-ed'!"
            },
            {
              pregunta: "60. Suddenly, the train ___ (stop) and everybody looked out the window.",
              opciones: ["stopped", "stoped", "was stopping"],
              correcta: 0,
              pista: "Una acción repentina en el pasado. Duplicá la letra 'p' y agregá '-ed' para este verbo regular."
            }
          ]
        },
        "Q3": {
          guia: [
{
              titulo: "Lección 1: Hair & Face — Describiendo Sospechosos y Apariencia",
              texto: "En la Unidad 5 (<i>Police!</i>), nos convertimos en detectives para describir personas y sospechosos observando su rostro y cabello.<br><br><b>1. El Cabello (Hair):</b><br>- <b>dark:</b> cabello oscuro (negro o castaño oscuro).<br>- <b>fair:</b> cabello claro o castaño claro.<br>- <b>blond:</b> rubio.<br>- <b>curly:</b> con rulos u ondulado.<br>- <b>straight:</b> lacio o recto.<br>- <b>short / long:</b> corto o largo.<br><i>Regla de orden:</i> tamaño + forma + color + hair (ejemplo: <i>She has got short curly blond hair</i>).<br><br><b>2. Rasgos Faciales (Face Features):</b><br>- <b>moustache:</b> bigote (sobre el labio superior).<br>- <b>beard:</b> barba (alrededor de la mandíbula y mejillas).<br>- <b>scar:</b> cicatriz (marca en la piel, como en <i>cheek</i> - mejilla o <i>nose</i> - nariz).<br>- <b>chin:</b> barbilla o mentón.<br>- <b>cheek:</b> mejilla (<i>right cheek</i> / <i>left cheek</i>).<br><br><b>Estructuras Clave:</b><br>Usamos <b>have got / has got</b>: <i>The robber has got a blond beard and a small scar on his right cheek.</i>",
              resumen_corto: "Vocabulario de rostro y pelo: dark, fair, blond, curly, straight, beard, moustache y scar. Usamos 'has got' para describir sospechosos.",
              preguntaValidacion: {
                q: "Si un sospechoso tiene pelo con rulos y de color rubio, ¿cómo lo describimos en inglés?",
                a: ["He has got straight dark hair.", "He has got curly blond hair.", "He has got a big beard."],
                c: 1
              }
            },
{
              titulo: "Lección 2: Used to — Hábitos y Estados del Pasado",
              texto: "Usamos <b>used to</b> para hablar de cosas que hacíamos habitualmente en el pasado o estados que eran verdad antes, <b>pero que ya no ocurren en el presente</b>. En español significa <i>'solía'</i> o <i>'antes hacía / tenía...'</i>.<br><br><b>Regla de Oro (Forma Base):</b> Después de <i>used to</i>, el verbo principal SIEMPRE va en su forma infinitiva normal (sin -ed, sin -ing, sin -s).<br><br><b>1. Afirmativo (Sujeto + used to + verbo base):</b><br>- <i>He <b>used to be</b> a police officer.</i> (Él antes era policía).<br>- <i>I <b>used to have</b> curly hair, but now it's straight.</i> (Yo antes tenía pelo con rulos, pero ahora es lacio).<br>- <i>He <b>used to drive</b> a fast car.</i> (Él solía manejar un auto rápido).<br><br><b>2. Negativo (Sujeto + didn't use to + verbo base):</b><br>¡OJO de detective!: Cuando usamos el auxiliar <b>didn't</b>, la palabra pierde la 'd' final y queda <b>use to</b>.<br>- <i>I <b>didn't use to like</b> vegetables.</i> (Yo antes no solía gustar de las verduras).<br>- <i>He <b>didn't use to wear</b> glasses.</i> (Él antes no usaba anteojos).<br><br><b>3. Preguntas (Did + Sujeto + use to + verbo base?):</b><br>Al igual que en el negativo, el auxiliar <b>Did</b> le quita la 'd' a <i>use to</i>.<br>- <i><b>Did you use to</b> live in an apartment?</i> (¿Solías vivir en un departamento?).<br>- <i><b>Did he use to</b> carry a walkie-talkie?</i> (¿Él solía llevar un walkie-talkie?).<br><br><b>Contraste con el presente:</b><br>Es común contrastar con <i>but now...</i>: <i>I used to like finger painting, but I don't now!</i>",
              resumen_corto: "Used to expresa hábitos pasados que ya no ocurren ('solía'). En negativo usamos 'didn't use to' y en preguntas 'Did you use to...?' con verbo base.",
              preguntaValidacion: {
                q: "¿Cuál es la forma negativa correcta para decir 'Él no solía tener barba'?",
                a: ["He didn't used to have a beard.", "He didn't use to have a beard.", "He not used to have a beard."],
                c: 1
              }
            },
{
              titulo: "Lección 3: Had to — Obligaciones y Deberes en el Pasado",
              texto: "<b>Had to</b> es el pasado del verbo de obligación <i>have to / has to</i>. Se usa para expresar <b>obligaciones, necesidades o deberes obligatorios</b> que tuvimos que cumplir en el pasado (<i>'tuve que'</i> o <i>'tenía que'</i>).<br><br><b>1. Forma Afirmativa (Sujeto + had to + verbo base):</b><br>Funciona igual para TODAS las personas (<i>I, you, he, she, it, we, they</i>):<br>- <i>I <b>had to keep</b> it secret.</i> (Tuve que mantenerlo en secreto).<br>- <i>Grandpa <b>had to be</b> careful because of dangerous criminals.</i> (El abuelo tenía que ser cuidadoso).<br>- <i>We <b>had to wear</b> a uniform at school.</i> (Tuvimos que usar uniforme).<br>- <i>I <b>had to get up</b> at 5 am.</i> (Tuve que levantarme a las 5 am).<br><br><b>2. Forma Negativa (Sujeto + didn't have to + verbo base):</b><br>Significa que <b>no fue necesario</b> hacer algo (no había obligación):<br>¡Atención!: Al poner <b>didn't</b>, el verbo vuelve a su forma base <b>have to</b>.<br>- <i>He <b>didn't have to wash</b> the car.</i> (Él no tuvo que lavar el auto).<br><br><b>3. Preguntas (Did + Sujeto + have to + verbo base?):</b><br>- <i><b>Did you have to work</b> all night?</i> (¿Tuviste que trabajar toda la noche?).<br>- <i>Yes, I did. / No, I didn't.</i><br><br><b>¡Diferencia Clave para la Prueba!:</b><br>- <b>Used to:</b> Es una costumbre o hábito del pasado (<i>I used to play tennis</i> = Solía jugar al tenis).<br>- <b>Had to:</b> Es una obligación obligatoria (<i>I had to do my homework</i> = Tuve que hacer mi tarea obligatoriamente).",
              resumen_corto: "Had to indica una obligación pasada ('tuve que'). En negativo se usa 'didn't have to' y en pregunta 'Did you have to...?'. Se diferencia del hábito 'used to'.",
              preguntaValidacion: {
                q: "Si queremos decir 'Ayer tuvimos que usar uniforme en la escuela', ¿cuál es la opción correcta?",
                a: ["We used to wear a uniform yesterday.", "We had to wear a uniform yesterday.", "We having to wear a uniform yesterday."],
                c: 1
              }
            },
{
              titulo: "Lección 4: Mythical Beasts & Animal Bodies — Criaturas y 'Looks Like'",
              texto: "En la Unidad 6 (<i>Mythical beasts</i>), aprendemos las partes del cuerpo de los animales y exploramos criaturas fantásticas de leyendas:<br><br><b>1. Partes del Cuerpo (Animal Bodies):</b><br>- <b>wing:</b> ala (para volar).<br>- <b>horn:</b> cuerno (en la cabeza, como el unicornio o el triceratops).<br>- <b>scales:</b> escamas (en serpientes, peces y dinosaurios).<br>- <b>feathers:</b> plumas (en aves y dinosaurios alados).<br>- <b>tail:</b> cola.<br>- <b>neck:</b> cuello.<br>- <b>tongue:</b> lengua.<br>- <b>beak:</b> pico (como el oviraptor o los pájaros).<br>- <b>back:</b> lomo o espalda.<br><br><b>2. Bestias Míticas (Mythical Beasts):</b><br>- <b>Pegasus:</b> caballo alado mitológico.<br>- <b>Unicorn:</b> caballo blanco con un cuerno mágico.<br>- <b>Sphinx (Esfinge):</b> cuerpo de león y cabeza humana.<br>- <b>Mermaid (Sirena):</b> mitad mujer y mitad pez.<br>- <b>Phoenix (Fénix):</b> ave sagrada de fuego y plumas doradas.<br>- <b>Centaur (Centauro):</b> mitad humano y mitad caballo.<br><br><b>3. La Estructura 'LOOKS LIKE' (Parece / Se parece a):</b><br>Usamos <b>looks like</b> (o <b>look like</b>) seguido de un sustantivo para describir la apariencia:<br>- <i>The Sphinx <b>looks like</b> a lion.</i> (La Esfinge parece un león).<br>- <i>A unicorn <b>looks like</b> a white horse.</i> (Un unicornio parece un caballo blanco).<br>- <i>What does it look like? It <b>looks like</b> a gecko with a crocodile's head!</i>",
              resumen_corto: "Vocabulario de partes corporales (wing, horn, scales, feathers, tail, beak) y bestias míticas. Usamos 'looks like' para describir a qué se asemeja una criatura.",
              preguntaValidacion: {
                q: "¿Cómo se dice correctamente 'El unicornio parece un caballo blanco'?",
                a: ["A unicorn looks like a white horse.", "A unicorn is like a horse white.", "A unicorn looks white horse."],
                c: 0
              }
            },
{
              titulo: "Lección 5: Comparatives — Cómo Comparar Dos Cosas en Inglés",
              texto: "Usamos el <b>Grado Comparativo</b> para comparar dos personas, animales o cosas usando la palabra clave <b>than</b> (<i>'que'</i>).<br><br><b>1. Adjetivos Cortos (1 sílaba): Sumamos -er than</b><br>- <i>fast</i> -> <b>faster than</b> (más rápido que).<br>- <i>long</i> -> <b>longer than</b> (más largo que).<br>- <i>tall</i> -> <b>taller than</b> (más alto que).<br>Ejemplo: <i>The cheetah is faster than the T-Rex.</i><br><br><b>2. Si terminan en -e: Solo sumamos -r than</b><br>- <i>large</i> -> <b>larger than</b>.<br><br><b>3. Regla CVC (Consonante-Vocal-Consonante): Duplicamos la consonante</b><br>Si termina en 1 consonante + 1 vocal + 1 consonante, duplicamos la última letra antes de poner -er:<br>- <i>big</i> -> <b>bigger than</b> (con doble g).<br>- <i>hot</i> -> <b>hotter than</b> (con doble t).<br>Ejemplo: <i>The shark is bigger than a crocodile.</i><br><br><b>4. Terminados en Consonante + Y: Cambiamos la 'y' por '-ier than'</b><br>- <i>heavy</i> -> <b>heavier than</b> (más pesado que).<br>- <i>scary</i> -> <b>scarier than</b> (más aterrador que).<br>- <i>pretty</i> -> <b>prettier than</b> (más bonito que).<br><br><b>5. Adjetivos Largos (2 o más sílabas): Usamos 'more + adjetivo + than'</b><br>¡Nunca agregues -er a palabras largas!<br>- <i>dangerous</i> -> <b>more dangerous than</b> (más peligroso que).<br>- <i>beautiful</i> -> <b>more beautiful than</b> (más hermoso que).<br>- <i>expensive</i> -> <b>more expensive than</b> (más caro que).<br><br><b>6. Los Irregulares Rebeldes:</b><br>- <i>good</i> -> <b>better than</b> (mejor que).<br>- <i>bad</i> -> <b>worse than</b> (peor que).",
              resumen_corto: "Para comparar usamos 'than'. Cortos suman -er, CVC duplica consonante (bigger), terminados en -y cambian a -ier (heavier), largos llevan 'more' e irregulares son better y worse.",
              preguntaValidacion: {
                q: "¿Cuál es la forma comparativa correcta para 'heavy' (pesado)?",
                a: ["more heavy than", "heavier than", "heavyer than"],
                c: 1
              }
            },
{
              titulo: "Lección 6: Superlatives & Dinosaurs — Los Récords Absolutos",
              texto: "El <b>Grado Superlativo</b> se usa para destacar al número uno absoluto de un grupo: <i>'el más...'</i> o <i>'la más...'</i>.<br><br><b>La Regla de Oro del Superlativo:</b> SIEMPRE debe llevar el artículo <b>the</b> adelante.<br><br><b>1. Adjetivos Cortos: the + adjetivo + -est</b><br>- <i>fast</i> -> <b>the fastest</b> (el más rápido).<br>- <i>long</i> -> <b>the longest</b> (el más largo).<br>Ejemplo: <i>The Titanoboa was the longest snake in the world.</i><br><br><b>2. Regla CVC: Duplicamos la consonante + -est</b><br>- <i>big</i> -> <b>the biggest</b> (el más grande).<br>Ejemplo: <i>Argentinosaurus was the biggest dinosaur.</i><br><br><b>3. Terminados en Consonante + Y: the + -iest</b><br>- <i>heavy</i> -> <b>the heaviest</b> (el más pesado).<br>- <i>scary</i> -> <b>the scariest</b> (el más aterrador).<br>Ejemplo: <i>Megalodon was the scariest shark in the ocean.</i><br><br><b>4. Adjetivos Largos: the most + adjetivo</b><br>- <i>dangerous</i> -> <b>the most dangerous</b> (el más peligroso).<br>Ejemplo: <i>T-Rex was the most dangerous dinosaur.</i><br>- <i>beautiful</i> -> <b>the most beautiful</b> (el más hermoso).<br><br><b>5. Superlativos Irregulares:</b><br>- <i>good</i> -> <b>the best</b> (el mejor). Ejemplo: <i>Jurassic Park is the best dinosaur film.</i><br>- <i>bad</i> -> <b>the worst</b> (el peor). Ejemplo: <i>It's the worst singer in the house.</i><br><br><b>6. Clasificación de Dinosaurios por Alimentación (Science/CLIL):</b><br>- <b>Herbivores:</b> Comen plantas y hojas (<i>Stegosaurus, Triceratops</i>). Sus dientes son planos.<br>- <b>Carnivores:</b> Comen carne y cazan a otros animales (<i>Tyrannosaurus Rex</i>). Tienen dientes filosos.<br>- <b>Omnivores:</b> Comen plantas, carne, huevos e insectos (<i>Oviraptor</i>). Tienen pico (<i>beak</i>).<br>- <b>Palaeontologists:</b> Científicos que investigan los fósiles y dinosaurios.",
              resumen_corto: "El superlativo destaca al número uno usando 'the'. Cortos llevan -est, CVC duplica (the biggest), terminados en -y llevan -iest (the heaviest), largos 'the most' e irregulares son the best y the worst.",
              preguntaValidacion: {
                q: "¿Cómo se dice en superlativo que el T-Rex era 'el dinosaurio más peligroso'?",
                a: ["The T-Rex was the dangerousest dinosaur.", "The T-Rex was the most dangerous dinosaur.", "The T-Rex was the more dangerous dinosaur."],
                c: 1
              }
            }
          ],
          glosario: [
{
              termino: "Dark hair",
              def: "Cabello oscuro; pelo de color negro o castaño oscuro."
            },
{
              termino: "Fair hair",
              def: "Cabello claro; pelo de color castaño claro o rubio suave."
            },
{
              termino: "Blond hair",
              def: "Cabello rubio o dorado."
            },
{
              termino: "Curly hair",
              def: "Cabello con rulos u ondulaciones definidas."
            },
{
              termino: "Straight hair",
              def: "Cabello lacio y liso, sin ondulaciones ni rulos."
            },
{
              termino: "Moustache",
              def: "Bigote; vello facial que crece sobre el labio superior."
            },
{
              termino: "Beard",
              def: "Barba; vello facial que crece en la mandíbula y mejillas."
            },
{
              termino: "Scar",
              def: "Cicatriz; marca permanente que queda en la piel después de una herida."
            },
{
              termino: "Cheek",
              def: "Mejilla; zona lateral y carnosa de la cara situada debajo de los ojos."
            },
{
              termino: "Chin",
              def: "Barbilla o mentón; parte inferior del rostro debajo de la boca."
            },
{
              termino: "Used to",
              def: "Solía / Antes... Estructura para describir hábitos o estados del pasado que ya no ocurren en el presente."
            },
{
              termino: "Didn't use to",
              def: "No solía / Antes no... Forma negativa de 'used to'. Nota que pierde la 'd' final por la presencia del auxiliar 'didn't'."
            },
{
              termino: "Had to",
              def: "Tuve que / Tenía que; expresa una obligación o deber ineludible en el pasado (pasado de 'have to')."
            },
{
              termino: "Didn't have to",
              def: "No tuve que / No era necesario; forma negativa que indica ausencia de obligación en el pasado."
            },
{
              termino: "Wing",
              def: "Ala; miembro que utilizan las aves, murciélagos y bestias míticas como Pegaso o dragones para volar."
            },
{
              termino: "Horn",
              def: "Cuerno; estructura dura y puntiaguda en la cabeza de animales como el unicornio o el triceratops."
            },
{
              termino: "Scales",
              def: "Escamas; pequeñas placas protectoras duras que recubren el cuerpo de peces, serpientes y dinosaurios."
            },
{
              termino: "Feathers",
              def: "Plumas; cobertura ligera y suave que poseen las aves y algunos dinosaurios carnívoros alados."
            },
{
              termino: "Tail",
              def: "Cola; prolongación flexible de la columna vertebral en la parte posterior de los animales."
            },
{
              termino: "Beak",
              def: "Pico; estructura rígida y córnea con la que comen las aves y dinosaurios como el Oviraptor."
            },
{
              termino: "Looks like",
              def: "Se parece a / Parece; expresión utilizada para describir la semejanza visual con otro animal o cosa."
            },
{
              termino: "Comparative",
              def: "Grado comparativo; se usa para comparar dos cosas usando la terminación '-er than' o 'more ... than'."
            },
{
              termino: "Superlative",
              def: "Grado superlativo; destaca al elemento supremo de un grupo usando 'the ... -est' o 'the most ...'."
            },
{
              termino: "Better than",
              def: "Mejor que; forma comparativa irregular del adjetivo 'good' (bueno)."
            },
{
              termino: "The best",
              def: "El mejor / La mejor; forma superlativa irregular del adjetivo 'good' (bueno)."
            },
{
              termino: "Worse than",
              def: "Peor que; forma comparativa irregular del adjetivo 'bad' (malo)."
            },
{
              termino: "The worst",
              def: "El peor / La peor; forma superlativa irregular del adjetivo 'bad' (malo)."
            },
{
              termino: "Herbivore",
              def: "Herbívoro; animal que se alimenta únicamente de plantas, hojas y vegetales (como el Stegosaurus)."
            },
{
              termino: "Carnivore",
              def: "Carnívoro; animal depredador que se alimenta de carne (como el Tyrannosaurus Rex)."
            },
{
              termino: "Omnivore",
              def: "Omnívoro; animal que come tanto plantas como carne, huevos e insectos (como el Oviraptor)."
            }
          ],
          simulacro: [
{
              pregunta: "1. She has got hair with lots of spirals and waves. Her hair is ___.",
              opciones: ["curly", "straight", "dark"],
              correcta: 0,
              pista: "La palabra describe el pelo con rulos y ondulado.",
              explicacion: "'Curly' significa con rulos. 'Straight' es lacio y 'dark' es oscuro."
            },
{
              pregunta: "2. His hair has a bright yellow-golden color like the sun. He has got ___ hair.",
              opciones: ["dark", "blond", "curly"],
              correcta: 1,
              pista: "Es la palabra para el cabello rubio en inglés.",
              explicacion: "'Blond' significa rubio. 'Dark' es oscuro y 'curly' describe rulos."
            },
{
              pregunta: "3. The hair that grows above a man's upper lip, below his nose, is a ___.",
              opciones: ["beard", "scar", "moustache"],
              correcta: 2,
              pista: "Está sobre el labio superior; en español se llama bigote.",
              explicacion: "'Moustache' es bigote. 'Beard' es barba y 'scar' es cicatriz."
            },
{
              pregunta: "4. The hair that grows on a man's chin and the sides of his face is a ___.",
              opciones: ["beard", "moustache", "tail"],
              correcta: 0,
              pista: "Cubre el mentón y las mejillas; en español es barba.",
              explicacion: "'Beard' significa barba. 'Moustache' es bigote y 'tail' es cola de un animal."
            },
{
              pregunta: "5. The Gentleman Robber had a permanent mark from an old cut on his face. It was a ___.",
              opciones: ["feather", "scar", "wing"],
              correcta: 1,
              pista: "Es una marca o herida cicatrizada en la piel.",
              explicacion: "'Scar' significa cicatriz. 'Feather' es pluma y 'wing' es ala."
            },
{
              pregunta: "6. His hair is not curly or wavy at all; it hangs completely flat. It is ___.",
              opciones: ["fair", "curly", "straight"],
              correcta: 2,
              pista: "Es el opuesto exacto de 'curly' (pelo lacio).",
              explicacion: "'Straight' significa lacio o recto. 'Curly' significa con rulos."
            },
{
              pregunta: "7. My brother doesn't have fair or blond hair; his hair is deep black and brown. It is ___.",
              opciones: ["dark", "blond", "fair"],
              correcta: 0,
              pista: "Es el término para cabello oscuro o morocho.",
              explicacion: "'Dark' significa oscuro. 'Blond' y 'fair' hacen referencia a colores claros."
            },
{
              pregunta: "8. The bottom part of your face below your mouth is called the ___.",
              opciones: ["neck", "chin", "cheek"],
              correcta: 1,
              pista: "En español es la barbilla o mentón.",
              explicacion: "'Chin' significa barbilla/mentón. 'Cheek' es mejilla y 'neck' es cuello."
            },
{
              pregunta: "9. The robber had a small scar on his right ___, just next to his nose and under his eye.",
              opciones: ["chin", "hair", "cheek"],
              correcta: 2,
              pista: "Es el lateral de la cara donde nos sonrojamos (mejilla).",
              explicacion: "'Cheek' significa mejilla. 'Chin' es la barbilla y 'hair' es el pelo."
            },
{
              pregunta: "10. In a police station, an artist draws a quick picture of the criminal. This drawing is a ___.",
              opciones: ["sketch", "shadow", "uniform"],
              correcta: 0,
              pista: "Aparece en la página de Arte de Unit 5; significa boceto.",
              explicacion: "'Sketch' significa boceto o dibujo preliminar que hace el dibujante policial."
            },
{
              pregunta: "11. When an artist darkens an area of a drawing with a pencil to show shadows, it is called ___.",
              opciones: ["jumping", "shading", "running"],
              correcta: 1,
              pista: "Proviene de 'shade' (sombra); es la técnica de sombreado.",
              explicacion: "'Shading' significa sombreado en dibujo artístico."
            },
{
              pregunta: "12. Choose the correct description for a man with yellow hair, a beard and a face mark:",
              opciones: ["He has got dark hair, a moustache and feathers.", "He has got curly dark hair and no beard.", "He has got blond hair, a beard and a scar."],
              correcta: 2,
              pista: "Busca la combinación: blond (rubio), beard (barba) y scar (cicatriz).",
              explicacion: "'Blond hair, a beard and a scar' describe con exactitud los tres rasgos pedidos."
            },
{
              pregunta: "13. When Grandpa was younger, he ___ (be) a police officer in London.",
              opciones: ["used to be", "used to was", "use to be"],
              correcta: 0,
              pista: "En afirmativo usamos 'used to' seguido de la forma base del verbo 'be'.",
              explicacion: "'Used to be' es la forma correcta. El verbo después de 'used to' siempre va en infinitivo base."
            },
{
              pregunta: "14. When I was a baby, I used to ___ (have) very small legs.",
              opciones: ["had", "have", "having"],
              correcta: 1,
              pista: "Después de 'used to', el verbo va en forma base infinitiva.",
              explicacion: "La regla exige la forma base 'have', nunca pasado 'had' ni gerundio 'having'."
            },
{
              pregunta: "15. Officer Ben used to ___ (drive) a very fast police car through the city.",
              opciones: ["drove", "driving", "drive"],
              correcta: 2,
              pista: "El verbo principal que acompaña a 'used to' debe estar en forma base.",
              explicacion: "Se usa 'drive' (forma base). 'Drove' es pasado simple y no se combina con used to."
            },
{
              pregunta: "16. I ___ (not / like) vegetables when I was five, but now I love them!",
              opciones: ["didn't use to like", "didn't used to like", "not used to like"],
              correcta: 0,
              pista: "Al poner 'didn't', la palabra 'use' pierde la 'd' final.",
              explicacion: "En oraciones negativas, 'didn't use to' es la forma correcta sin la 'd'."
            },
{
              pregunta: "17. Remember the spelling rule: in negative sentences with 'didn't', we write ___.",
              opciones: ["didn't used to", "didn't use to", "did use not to"],
              correcta: 1,
              pista: "El auxiliar 'didn't' ya absorbe el tiempo pasado, por lo que el verbo queda en presente 'use'.",
              explicacion: "'Didn't use to' es la ortografía gramatical estándar."
            },
{
              pregunta: "18. ___ you use to live in a house with a garden when you were small?",
              opciones: ["Were", "Do", "Did"],
              correcta: 2,
              pista: "Las preguntas sobre hábitos pasados con 'use to' comienzan con el auxiliar de pasado.",
              explicacion: "Las preguntas en pasado simple con 'use to' se inician con 'Did'."
            },
{
              pregunta: "19. Did your grandfather ___ to carry a walkie-talkie when he was on duty?",
              opciones: ["use", "used", "using"],
              correcta: 0,
              pista: "Como la pregunta ya tiene 'Did', el verbo pierde la letra 'd'.",
              explicacion: "Tras el auxiliar 'Did', se escribe 'use to' (sin 'd')."
            },
{
              pregunta: "20. What does the sentence 'I used to eat sweets, but I don't now' mean?",
              opciones: ["I will eat sweets tomorrow.", "I ate sweets in the past, but I stopped.", "I currently eat sweets every day."],
              correcta: 1,
              pista: "Used to indica un hábito del pasado que ya no se realiza en el presente.",
              explicacion: "Significa que en el pasado solía comer dulces, pero hoy ya no lo hace."
            },
{
              pregunta: "21. Uncle John ___ have a big dark moustache, but now he shaved it off.",
              opciones: ["had to", "use to", "used to"],
              correcta: 2,
              pista: "Es una oración afirmativa sobre un hábito o aspecto del pasado ('solía').",
              explicacion: "En afirmativo se escribe 'used to' con 'd'. 'Had to' significa obligación."
            },
{
              pregunta: "22. The police officers ___ (not / carry) mobile phones fifty years ago.",
              opciones: ["didn't use to carry", "didn't used to carry", "not used carry"],
              correcta: 0,
              pista: "Buscá el auxiliar negativo 'didn't' seguido de 'use to' sin 'd'.",
              explicacion: "'Didn't use to carry' es la estructura negativa correcta."
            },
{
              pregunta: "23. Dad used to have long brown hair, but yesterday he ___ it all at the barber's.",
              opciones: ["cutted", "cut", "was cut"],
              correcta: 1,
              pista: "El verbo 'cut' es irregular y su pasado se escribe exactamente igual.",
              explicacion: "El pasado simple de 'cut' es 'cut'. Expresa la acción puntual que cambió su aspecto."
            },
{
              pregunta: "24. Which of the following sentences is 100% grammatically CORRECT?",
              opciones: ["She didn't used to drink tea.", "She not use to drink tea.", "She didn't use to drink tea."],
              correcta: 2,
              pista: "Revisa que tenga 'didn't' y 'use to' (sin 'd').",
              explicacion: "'She didn't use to drink tea.' es la única opción que respeta la regla de 'didn't' + 'use to'."
            },
{
              pregunta: "25. Grandpa ___ (wear) a clean police uniform every single morning for work.",
              opciones: ["had to wear", "used wear", "had wearing"],
              correcta: 0,
              pista: "Era una obligación laboral de su trabajo; usamos 'had to'.",
              explicacion: "'Had to wear' expresa la obligación pasada de llevar uniforme."
            },
{
              pregunta: "26. It was a secret surprise party for Gina, so I ___ (keep) it secret from everyone!",
              opciones: ["used keep", "had to keep", "had kept"],
              correcta: 1,
              pista: "Era una necesidad/obligación ineludible mantener el secreto.",
              explicacion: "'Had to keep' indica la obligación de guardar el secreto para que fuera sorpresa."
            },
{
              pregunta: "27. The dangerous criminal escaped, so the police officer ___ (run) as fast as possible.",
              opciones: ["had to ran", "used to running", "had to run"],
              correcta: 2,
              pista: "Estructura: 'had to' + forma base del verbo.",
              explicacion: "'Had to run' es correcto: 'had to' siempre va seguido del verbo en forma base ('run', no 'ran')."
            },
{
              pregunta: "28. At the world's worst holiday camp, we ___ (wash up) greasy dishes every evening.",
              opciones: ["had to wash up", "used wash up", "having to wash up"],
              correcta: 0,
              pista: "Expresa una tarea u obligación molesta del campamento.",
              explicacion: "'Had to wash up' indica que era una tarea obligatoria en el campamento."
            },
{
              pregunta: "29. Lucy had an important exam early in the morning, so she ___ (get up) at 6:00 am.",
              opciones: ["had to got up", "had to get up", "used to got up"],
              correcta: 1,
              pista: "El verbo principal tras 'had to' debe estar en forma base.",
              explicacion: "'Had to get up' es correcto. El verbo 'get' debe ir en forma base, nunca 'got'."
            },
{
              pregunta: "30. Yesterday was Sunday and a holiday, so Enzo ___ (not go) to school.",
              opciones: ["didn't had to go", "not had to go", "didn't have to go"],
              correcta: 2,
              pista: "En negativo, 'didn't' hace que 'had' vuelva a su forma base 'have'.",
              explicacion: "'Didn't have to go' es la forma correcta para decir que no había obligación."
            },
{
              pregunta: "31. In the negative form of past obligation, we say ___.",
              opciones: ["didn't have to", "didn't had to", "hadn't to"],
              correcta: 0,
              pista: "El auxiliar 'didn't' requiere el verbo en infinitivo 'have to'.",
              explicacion: "'Didn't have to' es la forma gramatical estándar de falta de obligación en pasado."
            },
{
              pregunta: "32. ___ you have to finish all your homework before playing video games yesterday?",
              opciones: ["Had", "Did", "Were"],
              correcta: 1,
              pista: "Las preguntas en pasado simple con 'have to' inician con el auxiliar 'Did'.",
              explicacion: "Usamos 'Did' para preguntas de pasado: 'Did you have to...?'."
            },
{
              pregunta: "33. 'Did the police officers have to chase the suspect on foot?' — 'Yes, they ___.'",
              opciones: ["had", "were", "did"],
              correcta: 2,
              pista: "La respuesta corta debe coincidir con el auxiliar de la pregunta ('Did').",
              explicacion: "Como la pregunta empieza con 'Did', la respuesta corta afirmativa es 'Yes, they did'."
            },
{
              pregunta: "34. Which sentence expresses an OBLIGATION (deber necesario) and NOT a habit?",
              opciones: ["I had to study hard for the math test.", "I used to ride my bicycle in the park.", "I used to have blond hair."],
              correcta: 0,
              pista: "Busca la oración que utiliza 'had to' para indicar un deber.",
              explicacion: "'I had to study hard' indica una obligación académica, mientras que las otras son hábitos o estados con 'used to'."
            },
{
              pregunta: "35. Which sentence expresses a PAST HABIT (costumbre antigua) and NOT an obligation?",
              opciones: ["We had to show our tickets at the entrance.", "I used to collect stickers when I was little.", "Grandpa had to wear his police hat."],
              correcta: 1,
              pista: "Busca la oración con 'used to' que describe una actividad que se solía hacer por gusto.",
              explicacion: "'I used to collect stickers' es un hábito pasado con 'used to'."
            },
{
              pregunta: "36. The door was locked, so Ben and Lucy ___ climb a secret ladder to escape.",
              opciones: ["used to", "didn't use to", "had to"],
              correcta: 2,
              pista: "No era una costumbre, fue una necesidad u obligación puntual para salir.",
              explicacion: "'Had to' expresa la necesidad ineludible que tuvieron de trepar la escalera para escapar."
            },
{
              pregunta: "37. A cheetah is ___ (fast) than a tyrannosaurus rex.",
              opciones: ["faster", "more fast", "fastest"],
              correcta: 0,
              pista: "Es un adjetivo corto de una sílaba; agrégale la terminación '-er'.",
              explicacion: "'Fast' es un adjetivo corto, por lo que su comparativo es 'faster than'."
            },
{
              pregunta: "38. The prehistoric Megalodon shark was ___ (big) than any great white shark today.",
              opciones: ["biger", "bigger", "more big"],
              correcta: 1,
              pista: "'Big' termina en Consonante-Vocal-Consonante (CVC). ¡Duplica la 'g'!",
              explicacion: "Por la regla CVC, duplicamos la consonante final: 'bigger'."
            },
{
              pregunta: "39. The Argentinosaurus was much ___ (heavy) than an African elephant.",
              opciones: ["heavyer", "more heavy", "heavier"],
              correcta: 2,
              pista: "'Heavy' termina en consonante + 'y'. Cambia la 'y' por 'i' antes de poner '-er'.",
              explicacion: "Los adjetivos de 2 sílabas terminados en 'y' cambian a '-ier': 'heavier'."
            },
{
              pregunta: "40. In the prehistoric story, the Megalodon shark was ___ (scary) than the dolphin.",
              opciones: ["scarier", "more scary", "scariest"],
              correcta: 0,
              pista: "Aplica la regla de la 'y': 'scary' cambia a '-ier'.",
              explicacion: "'Scary' termina en 'y', por lo que su comparativo es 'scarier than'."
            },
{
              pregunta: "41. A Tyrannosaurus Rex was ___ (dangerous) than an Oviraptor.",
              opciones: ["dangerouser", "more dangerous", "most dangerous"],
              correcta: 1,
              pista: "'Dangerous' es un adjetivo largo de 3 sílabas; no se le suma '-er'.",
              explicacion: "Para adjetivos largos usamos 'more + adjetivo': 'more dangerous than'."
            },
{
              pregunta: "42. The diamond necklace was ___ (expensive) than the silver bracelet.",
              opciones: ["expensiver", "most expensive", "more expensive"],
              correcta: 2,
              pista: "'Expensive' tiene 3 sílabas; usamos 'more'.",
              explicacion: "Los adjetivos largos forman el comparativo con 'more': 'more expensive than'."
            },
{
              pregunta: "43. Lucy thinks 'Jurassic Park' is a ___ (good) movie than 'Planet of Dinosaurs'.",
              opciones: ["better", "gooder", "more good"],
              correcta: 0,
              pista: "'Good' es un adjetivo irregular y cambia por completo.",
              explicacion: "El comparativo irregular de 'good' es 'better'."
            },
{
              pregunta: "44. The weather in the storm was ___ (bad) than yesterday.",
              opciones: ["badder", "worse", "worser"],
              correcta: 1,
              pista: "'Bad' es un adjetivo irregular; no existe 'badder'.",
              explicacion: "El comparativo irregular de 'bad' es 'worse than'."
            },
{
              pregunta: "45. Complete the comparative sentence: 'A giraffe's neck is longer ___ an elephant's trunk.'",
              opciones: ["that", "then", "than"],
              correcta: 2,
              pista: "Es la palabra clave de comparación en inglés que significa 'que'.",
              explicacion: "Usamos siempre 'than' para comparar dos elementos."
            },
{
              pregunta: "46. A Pegasus has wings, so it can fly ___ (high) than a regular horse.",
              opciones: ["higher", "more high", "highest"],
              correcta: 0,
              pista: "'High' es un adjetivo corto de una sola sílaba.",
              explicacion: "'High' es adjetivo corto y forma el comparativo como 'higher than'."
            },
{
              pregunta: "47. The Titanoboa was ___ (long) than ten cars parked in a line.",
              opciones: ["more long", "longer", "longest"],
              correcta: 1,
              pista: "'Long' es corto; suma '-er'.",
              explicacion: "'Longer than' es el comparativo de 'long'."
            },
{
              pregunta: "48. Which of the following comparative forms is spelled INCORRECTLY?",
              opciones: ["heavier", "bigger", "dangerousest"],
              correcta: 2,
              pista: "Buscá la opción que intentó inventar una regla inexistente para un adjetivo largo.",
              explicacion: "'Dangerousest' es un error grave. El comparativo correcto es 'more dangerous'."
            },
{
              pregunta: "49. The cheetah is ___ (fast) land animal in the entire world.",
              opciones: ["the fastest", "the faster", "the most fast"],
              correcta: 0,
              pista: "El superlativo requiere 'the' + adjetivo con '-est'.",
              explicacion: "'The fastest' es el superlativo de 'fast'."
            },
{
              pregunta: "50. The blue whale is ___ (big) animal that has ever lived on Earth.",
              opciones: ["the bigest", "the biggest", "the most big"],
              correcta: 1,
              pista: "Aplica la regla CVC: duplica la consonante 'g' antes de '-est'.",
              explicacion: "'The biggest' lleva doble 'g' por la regla Consonante-Vocal-Consonante."
            },
{
              pregunta: "51. The Argentinosaurus weighed over 80,000 kilos; it was ___ (heavy) dinosaur.",
              opciones: ["the heavyest", "the most heavy", "the heaviest"],
              correcta: 2,
              pista: "La 'y' cambia por 'i' antes de agregar '-est'.",
              explicacion: "'The heaviest' cambia la 'y' por 'i' + '-est'."
            },
{
              pregunta: "52. Tyrannosaurus Rex was one of ___ (dangerous) predators in the prehistoric world.",
              opciones: ["the most dangerous", "the dangeroust", "the more dangerous"],
              correcta: 0,
              pista: "Para adjetivos largos de 3 sílabas en superlativo usamos 'the most'.",
              explicacion: "'The most dangerous' es la forma superlativa para adjetivos largos."
            },
{
              pregunta: "53. Enzo thinks that Jurassic Park is ___ (good) dinosaur movie ever made.",
              opciones: ["the goodest", "the best", "the better"],
              correcta: 1,
              pista: "'Good' es irregular; su forma suprema es 'the best'.",
              explicacion: "El superlativo irregular de 'good' es 'the best'."
            },
{
              pregunta: "54. According to the song in the book, the mouse was ___ (bad) singer in the house!",
              opciones: ["the baddest", "the worse", "the worst"],
              correcta: 2,
              pista: "El superlativo irregular de 'bad' termina en 't'.",
              explicacion: "El superlativo irregular de 'bad' es 'the worst'."
            },
{
              pregunta: "55. The mythical Sphinx has a human head and a lion's body; it ___ a lion.",
              opciones: ["looks like", "look like", "is looking"],
              correcta: 0,
              pista: "Con tercera persona singular (it / the Sphinx) el verbo lleva 's'.",
              explicacion: "Usamos 'looks like' para tercera persona singular: 'The Sphinx looks like a lion'."
            },
{
              pregunta: "56. Birds and some feathered dinosaurs had wings covered in colourful ___.",
              opciones: ["scales", "feathers", "horns"],
              correcta: 1,
              pista: "En español significa plumas.",
              explicacion: "'Feathers' significa plumas. 'Scales' son escamas y 'horns' son cuernos."
            },
{
              pregunta: "57. Snakes, lizards and many prehistoric reptiles have skin covered in hard ___.",
              opciones: ["feathers", "beaks", "scales"],
              correcta: 2,
              pista: "En español son las escamas.",
              explicacion: "'Scales' son las escamas que recubren la piel de los reptiles."
            },
{
              pregunta: "58. The Stegosaurus only ate plants, leaves and ferns; it was a ___.",
              opciones: ["herbivore", "carnivore", "omnivore"],
              correcta: 0,
              pista: "Animal que come únicamente plantas.",
              explicacion: "'Herbivore' (herbívoro) es el animal cuya dieta se basa en plantas y hojas."
            },
{
              pregunta: "59. The Tyrannosaurus Rex hunted other animals to eat meat; it was a ___.",
              opciones: ["herbivore", "carnivore", "omnivore"],
              correcta: 1,
              pista: "Animal depredador que come carne.",
              explicacion: "'Carnivore' (carnívoro) es el depredador que se alimenta de carne."
            },
{
              pregunta: "60. The Oviraptor used its beak to eat plants, eggs, insects and meat; it was an ___.",
              opciones: ["herbivore", "carnivore", "omnivore"],
              correcta: 2,
              pista: "Animal que come tanto plantas como carne o insectos.",
              explicacion: "'Omnivore' (omnívoro) es el animal que consume alimentos de origen vegetal y animal."
            }
          ]
        },
        "Q4": { guia: [], glosario: [], simulacro: [] }
      }
    },
    "naturales": {
      materia: "Ciencias Naturales",
      color: "#16a34a",
      trimestres: {
        "Q1": {
          // 1. GUÍA DE APRENDIZAJE INTERACTIVA (7 Lecciones Curriculares)
          guia: [
            {
              titulo: "Temperatura vs Calor",
              texto: "Aunque solemos usarlas como sinónimos, en ciencias son conceptos muy diferentes. El <b>Calor</b> es energía térmica en tránsito; es energía que viaja o se transfiere de un cuerpo a otro. La <b>Temperatura</b>, en cambio, es una medida física: nos indica qué tan rápido se están moviendo las partículas que forman un cuerpo (su energía cinética promedio).<br><br><b>Ejemplo:</b> Imagina una pileta y una taza de café, ambas a 50°C. Tienen exactamente la misma temperatura, pero la pileta contiene muchísimo más calor acumulado (energía térmica total) porque tiene miles de millones de partículas más en movimiento.<br><br><i>Recuerda: El calor siempre fluye de manera espontánea desde el cuerpo con mayor temperatura hacia el de menor temperatura hasta alcanzar el equilibrio térmico.</i>",
              resumen_corto: "Calor es energía viajera entre cuerpos; temperatura mide la agitación promedio de sus partículas.",
              preguntaValidacion: {
                q: "¿Hacia dónde fluye siempre el calor de forma natural entre dos cuerpos en contacto?",
                a: ["Del cuerpo con menor temperatura al de mayor temperatura", "Del cuerpo con mayor temperatura al de menor temperatura", "El calor no fluye, permanece fijo en cada objeto"],
                c: 1
              }
            },
            {
              titulo: "La Medición de la Temperatura",
              texto: "Para medir la temperatura con precisión se utiliza el <b>Termómetro</b>. Los termómetros tradicionales funcionan aprovechando el fenómeno de la <b>dilatación térmica</b>: los líquidos se expanden al calentarse, haciendo subir la columna graduada dentro de un fino tubo de vidrio.<br><br><b>Ejemplo:</b> En nuestra vida diaria usamos la <b>Escala Celsius (°C)</b>, fijada tomando el punto de congelación del agua a 0°C y su punto de ebullición a 100°C. En los laboratorios científicos se utiliza la <b>Escala Kelvin (K)</b>, cuyo punto de partida es el <b>Cero Absoluto (-273,15°C)</b>, temperatura teórica extrema donde las partículas dejan de moverse por completo.<br><br><i>Dato clave: El mercurio dejó de utilizarse en termómetros hogareños por ser un metal pesado altamente tóxico para la salud, siendo reemplazado por alcohol con colorante o sensores electrónicos digitales.</i>",
              resumen_corto: "El termómetro mide la temperatura por dilatación. En la vida diaria usamos grados Celsius y en ciencias la escala Kelvin.",
              preguntaValidacion: {
                q: "¿Qué propiedad física aprovecha un termómetro de líquido para marcar la temperatura?",
                a: ["La dilatación o aumento de volumen del líquido con el calor", "El cambio en el peso o masa de las partículas", "La pérdida de resistencia eléctrica del vidrio"],
                c: 0
              }
            },
            {
              titulo: "Formas de Transmisión del Calor",
              texto: "El calor se transmite de un cuerpo a otro mediante tres mecanismos fundamentales:<br>1. <b>Conducción:</b> Ocurre principalmente en materiales sólidos por contacto directo, cuando las partículas más agitadas transmiten su energía a las vecinas.<br>2. <b>Convección:</b> Es propia de fluidos (líquidos y gases) y ocurre mediante corrientes de movimiento de masas: las zonas calientes se expanden, se vuelven menos densas y ascienden, mientras las frías descienden.<br>3. <b>Radiación:</b> Se propaga mediante ondas electromagnéticas (infrarrojas). ¡Es la única forma que puede viajar a través del vacío!<br><br><b>Ejemplo:</b> Al acercarte a una fogata o estufa, el metal se calienta por conducción, el aire tibio que sube hacia el techo lo hace por convección, y el calor que sientes en la cara a distancia te llega por radiación.<br><br><i>Para la prueba: El calor del Sol viaja 150 millones de kilómetros por el vacío del espacio y llega a la Tierra exclusivamente por Radiación.</i>",
              resumen_corto: "El calor viaja por Conducción (contacto en sólidos), Convección (masas en fluidos) y Radiación (ondas en el vacío).",
              preguntaValidacion: {
                q: "¿Cuál es la única forma de transmisión de calor que puede viajar a través del vacío del espacio?",
                a: ["Conducción directa", "Convección circular", "Radiación por ondas"],
                c: 2
              }
            },
            {
              titulo: "Conductores y Aislantes Térmicos",
              texto: "No todos los materiales se comportan igual frente a la energía térmica. Los <b>Conductores Térmicos</b> (como los metales: cobre, aluminio, plata, hierro) permiten que el calor fluya rápidamente a través de ellos gracias a la disposición de sus partículas. En cambio, los <b>Aislantes Térmicos</b> (como la madera, el plástico, la lana, el corcho y el telgopor) presentan gran resistencia y frenan el paso del calor.<br><br><b>Ejemplo:</b> Cuando cocinamos, una olla es de metal (conductor) para que el fuego caliente rápidamente los alimentos, pero el mango está cubierto de plástico o madera (aislante) para evitar quemarnos las manos.<br><br><i>Dato clave: El aire quieto o atrapado es un excelente aislante térmico. Por esta razón, las ventanas con doble vidrio hermético y las camperas rellenas de plumas o fibra aíslan tan eficazmente el frío exterior.</i>",
              resumen_corto: "Los conductores (metales) transmiten rápido el calor; los aislantes (madera, plástico, aire atrapado) frenan su avance.",
              preguntaValidacion: {
                q: "¿Por qué los mangos de las sartenes suelen fabricarse de madera o plástico?",
                a: ["Porque son materiales aislantes que evitan que el calor pase a la mano", "Porque son excelentes conductores que calientan la comida más rápido", "Para reducir el peso de la sartén exclusivamente"],
                c: 0
              }
            },
            {
              titulo: "El Modelo Corpuscular y Estados de la Materia",
              texto: "El <b>Modelo Corpuscular</b> explica que toda la materia está formada por diminutas partículas (corpúsculos) en continuo movimiento, existiendo <b>espacio vacío</b> entre ellas. La temperatura refleja la velocidad o energía cinética de estas partículas.<br><br><b>Organización de los Tres Estados:</b><br>- <b>Sólido:</b> Partículas muy unidas por intensas fuerzas de atracción; solo vibran en posiciones fijas (tienen forma y volumen propios).<br>- <b>Líquido:</b> Partículas unidas con menor fuerza que se deslizan unas sobre otras (tienen volumen fijo, pero se adaptan a la forma del recipiente).<br>- <b>Gaseoso:</b> Partículas muy alejadas y veloces con atracción casi nula (ocupan todo el espacio disponible, no tienen forma ni volumen fijos y son fáciles de comprimir).<br><br><i>Recuerda: Al calentar un cuerpo, las partículas individuales NO aumentan de tamaño; lo que se incrementa es su velocidad y la separación entre ellas.</i>",
              resumen_corto: "La materia son partículas en constante movimiento con vacío entre ellas. Los sólidos son rígidos, los líquidos fluyen y los gases se expanden.",
              preguntaValidacion: {
                q: "Según el modelo corpuscular, ¿qué hay en el espacio microscópico entre partícula y partícula?",
                a: ["Aire puro", "Espacio vacío (no hay ninguna sustancia)", "Agua en estado invisible"],
                c: 1
              }
            },
            {
              titulo: "Los Cambios de Estado y Dilatación",
              texto: "La materia cambia de estado cuando gana o cede energía térmica:<br>- <b>Fusión:</b> Sólido a líquido al absorber calor (ej: hielo derritiéndose a 0°C).<br>- <b>Evaporación y Ebullición:</b> Líquido a gas al ganar calor (lenta en superficie o tumultuosa con burbujas).<br>- <b>Condensación:</b> Gas a líquido al enfriarse (ej: gotas en el espejo del baño).<br>- <b>Solidificación:</b> Líquido a sólido al perder calor (ej: congelar agua).<br>- <b>Sublimación:</b> Paso directo entre sólido y gas sin pasar por líquido (ej: naftalina o hielo seco).<br><br><b>Dilatación y Contracción:</b> Al calentarse, las partículas aumentan su agitación y se separan, aumentando el volumen total del material (<b>dilatación</b>). Al enfriarse, se acercan y el volumen disminuye (<b>contracción</b>).<br><br><i>En la prueba: Las vías del tren y los puentes se construyen con pequeñas separaciones llamadas juntas de dilatación para evitar que el metal se deforme con el calor del verano.</i>",
              resumen_corto: "Fusión y vaporización absorben calor; condensación y solidificación lo liberan. El calor dilata los cuerpos y el frío los contrae.",
              preguntaValidacion: {
                q: "¿Cómo se llama el proceso por el cual el vapor de agua se enfría y vuelve a ser líquido?",
                a: ["Fusión", "Solidificación", "Condensación"],
                c: 2
              }
            },
            {
              titulo: "El Aire y la Atmósfera Terrestre",
              texto: "El aire es materia en estado gaseoso que envuelve a nuestro planeta formando la <b>Atmósfera</b>. Está compuesto principalmente por <b>Nitrógeno (78%)</b>, <b>Oxígeno (21%)</b> indispensable para la respiración, y una pequeña fracción de dióxido de carbono, vapor de agua y otros gases.<br><br><b>Propiedades del Aire:</b> Aunque no lo veamos, el aire tiene masa, ocupa volumen y ejerce fuerza sobre todos los cuerpos, conocida como <b>Presión Atmosférica</b>. La presión es máxima a nivel del mar (donde hay más columna de aire encima) y disminuye a mayor altitud en las montañas.<br><br><b>Ejemplo:</b> Al calentarse, el aire se dilata, se vuelve menos denso y asciende. El aire frío circundante, más pesado, se desplaza para ocupar su lugar. ¡Este movimiento de masas de aire impulsado por el calor genera el <b>viento</b>!<br><br><i>Clave de examen: La atmósfera actúa como un escudo térmico natural; sin ella, las temperaturas de la Tierra oscilarían de forma letal entre frío y calor extremos.</i>",
              resumen_corto: "El aire es materia gaseosa con nitrógeno (78%) y oxígeno (21%). Tiene peso, ejerce presión y su movimiento genera los vientos.",
              preguntaValidacion: {
                q: "¿Por qué el aire caliente asciende en una habitación o en la atmósfera?",
                a: ["Porque se dilata con el calor, haciéndose menos denso que el aire frío", "Porque pierde su masa por completo", "Porque atrae a los rayos del sol"],
                c: 0
              }
            }
          ],

          // 2. GLOSARIO CONCEPTUAL Y TARJETAS FLASHCARD (30 Términos)
          glosario: [
            { termino: "Calor", def: "Energía en tránsito que viaja de un cuerpo con mayor temperatura a uno de menor." },
            { termino: "Temperatura", def: "Medida de la agitación o movimiento de las partículas de un cuerpo." },
            { termino: "Equilibrio Térmico", def: "Estado en el que dos cuerpos igualan su temperatura y el calor deja de fluir." },
            { termino: "Energía Térmica", def: "La energía total de un cuerpo debido al movimiento de sus partículas." },
            { termino: "Termómetro", def: "Instrumento que se utiliza para medir la temperatura de forma precisa." },
            { termino: "Grados Celsius (°C)", def: "Escala de medición de temperatura más utilizada en el mundo." },
            { termino: "Cero Absoluto", def: "Temperatura más baja teórica donde las partículas dejan de moverse por completo." },
            { termino: "Conducción", def: "Transmisión de calor por contacto directo, típica en materiales sólidos." },
            { termino: "Convección", def: "Transmisión de calor en fluidos (líquidos y gases) a través de movimientos de masas." },
            { termino: "Radiación", def: "Calor que viaja a través de ondas y puede propagarse incluso en el vacío." },
            { termino: "Vacío", def: "Espacio donde no hay materia; solo el calor por radiación puede viajar por aquí." },
            { termino: "Conductor Térmico", def: "Material (como los metales) que permite que el calor se transmita a través de él con gran facilidad y rapidez." },
            { termino: "Aislante Térmico", def: "Material (madera, plástico, telgopor, lana, aire quieto) que ofrece gran resistencia al paso del calor." },
            { termino: "Sólido", def: "Estado donde las partículas están muy juntas y tienen forma y volumen propios." },
            { termino: "Líquido", def: "Estado con volumen definido pero forma variable (se adapta al envase)." },
            { termino: "Gaseoso", def: "Estado donde las partículas están muy separadas y se mueven libremente." },
            { termino: "Fluido", def: "Sustancia que puede moverse o fluir, como los líquidos y los gases." },
            { termino: "Modelo Corpuscular", def: "Idea científica de que todo está hecho de pequeñas partículas (bolitas) en movimiento." },
            { termino: "Energía Cinética", def: "Es la energía que tienen las partículas debido a su movimiento o velocidad." },
            { termino: "Partícula", def: "El componente más pequeño e invisible que forma toda la materia." },
            { termino: "Fusión", def: "Paso de sólido a líquido al absorber calor (ej: hielo derritiéndose)." },
            { termino: "Solidificación", def: "Paso de líquido a sólido al perder calor (ej: hacer hielo)." },
            { termino: "Evaporación", def: "Paso de líquido a gas de forma lenta en la superficie." },
            { termino: "Condensación", def: "Paso de gas a líquido al enfriarse (ej: empañar un vidrio)." },
            { termino: "Dilatación", def: "Aumento de tamaño de un material al calentarse." },
            { termino: "Contracción", def: "Disminución de tamaño de un material al enfriarse." },
            { termino: "Atmósfera", def: "Capa de gases que rodea la Tierra y que nos permite vivir." },
            { termino: "Nitrógeno", def: "El gas más abundante del aire (ocupa el 78%)." },
            { termino: "Oxígeno", def: "Gas indispensable para la respiración de los seres vivos (ocupa el 21%)." },
            { termino: "Presión Atmosférica", def: "El peso que el aire ejerce sobre todas las cosas de la Tierra." }
          ],

          // 3. BANCO DE EVALUACIÓN Y SIMULACROS (100 Preguntas por Ejes Temáticos)
          simulacro: [
            // --- EJE: LA TEMPERATURA Y EL CALOR ---
            {
              pregunta: "¿Qué es el calor según el modelo corpuscular?",
              opciones: ["Energía en tránsito", "Partículas quietas", "Un líquido invisible"],
              correcta: 0,
              pista: "Es algo que 'viaja'.",
              explicacion: "El calor es energía que se transfiere de un cuerpo a otro."
            },
            {
              pregunta: "¿Hacia dónde fluye siempre el calor entre dos cuerpos?",
              opciones: ["Del más frío al más caliente", "Del más caliente al más frío", "No fluye, se queda quieto"],
              correcta: 1,
              pista: "Busca 'enfriar' al caliente.",
              explicacion: "La energía térmica siempre busca el equilibrio fluyendo hacia el cuerpo de menor temperatura."
            },
            {
              pregunta: "¿Qué mide la temperatura?",
              opciones: ["La cantidad de masa", "La agitación de las partículas", "El tamaño de los átomos"],
              correcta: 1,
              pista: "Mide movimiento.",
              explicacion: "Es una medida del promedio de la energía cinética de las moléculas."
            },
            {
              pregunta: "Si dos objetos están en 'Equilibrio Térmico' significa que:",
              opciones: ["Tienen distinta temperatura", "Tienen igual temperatura", "Uno es de metal"],
              correcta: 1,
              pista: "Hay un empate térmico.",
              explicacion: "Ya no hay transferencia de calor porque están iguales."
            },
            {
              pregunta: "¿Cuál tiene más energía térmica: una taza de té a 80°C o una olla gigante a 80°C?",
              opciones: ["La taza", "La olla", "Son iguales"],
              correcta: 1,
              pista: "Más partículas = más energía.",
              explicacion: "A igual temperatura, el objeto con más masa tiene más energía térmica total."
            },
            {
              pregunta: "El calor se siente cuando la energía...",
              opciones: ["Se destruye", "Se transfiere", "Se congela"],
              correcta: 1,
              pista: "Movimiento de energía.",
              explicacion: "Percibimos el calor cuando hay un flujo de energía hacia o desde nosotros."
            },
            {
              pregunta: "¿Qué sucede con las partículas de un cuerpo cuando su temperatura sube?",
              opciones: ["Se mueven más rápido", "Se mueven más lento", "Se detienen"],
              correcta: 0,
              pista: "Más velocidad.",
              explicacion: "Mayor temperatura equivale a mayor agitación corpuscular."
            },
            {
              pregunta: "El calor y la temperatura son lo mismo:",
              opciones: ["Verdadero", "Falso", "Solo en los metales"],
              correcta: 1,
              pista: "Son conceptos distintos.",
              explicacion: "El calor es energía en tránsito y la temperatura es una medida de agitación."
            },
            {
              pregunta: "¿Qué ocurre si pongo un objeto a 10°C junto a uno a 40°C?",
              opciones: ["El de 10°C le da calor al de 40°C", "El de 40°C le da calor al de 10°C", "Nada"],
              correcta: 1,
              pista: "Viaje de caliente a frío.",
              explicacion: "El calor siempre viaja del de mayor temperatura al de menor."
            },
            {
              pregunta: "Cuando decimos 'hace calor', científicamente nos referimos a:",
              opciones: ["Alta temperatura ambiente", "Poco aire", "Mucha humedad"],
              correcta: 0,
              pista: "Hablamos de grados Celsius.",
              explicacion: "Es una forma coloquial de decir que el ambiente tiene una temperatura elevada."
            },
            {
              pregunta: "La energía térmica de un cuerpo depende de:",
              opciones: ["Su color", "Su masa y temperatura", "Su forma"],
              correcta: 1,
              pista: "Cantidad y velocidad.",
              explicacion: "Depende de cuántas partículas tiene y qué tan rápido se mueven."
            },
            {
              pregunta: "¿Qué es el frío científicamente?",
              opciones: ["Una energía opuesta al calor", "Ausencia o baja energía térmica", "Un gas"],
              correcta: 1,
              pista: "Menos movimiento corpuscular.",
              explicacion: "El frío no existe como entidad, es la sensación de falta de calor."
            },
            {
              pregunta: "El calor se mide frecuentemente en:",
              opciones: ["Kilómetros", "Calorías o Joules", "Litros"],
              correcta: 1,
              pista: "Unidades de energía.",
              explicacion: "Como es una forma de energía, usamos unidades de energía."
            },
            {
              pregunta: "¿Puede el calor viajar a través del vacío?",
              opciones: ["No, necesita aire", "Sí, mediante radiación", "Solo si hay agua"],
              correcta: 1,
              pista: "Como el sol.",
              explicacion: "La radiación no requiere materia para propagarse."
            },
            // --- EJE: LA MEDICIÓN DE LA TEMPERATURA ---
            {
              pregunta: "¿Qué propiedad física cambia en un termómetro de mercurio?",
              opciones: ["El color", "El volumen (se dilata)", "El peso"],
              correcta: 1,
              pista: "Se hace más grande.",
              explicacion: "El líquido sube porque se expande con el calor."
            },
            {
              pregunta: "¿Cuál es el punto de fusión del agua en la escala Celsius?",
              opciones: ["100°C", "0°C", "32°C"],
              correcta: 1,
              pista: "Cuando se congela.",
              explicacion: "A 0°C el hielo comienza a transformarse en agua líquida."
            },
            {
              pregunta: "¿A qué temperatura hierve el agua (punto de ebullición) a nivel del mar?",
              opciones: ["50°C", "100°C", "200°C"],
              correcta: 1,
              pista: "Burbujas en la olla.",
              explicacion: "A los 100°C el agua líquida pasa a ser vapor de forma masiva."
            },
            {
              pregunta: "El instrumento para medir la temperatura corporal se llama:",
              opciones: ["Barómetro", "Termómetro clínico", "Anemómetro"],
              correcta: 1,
              pista: "Lo usa el médico.",
              explicacion: "Está diseñado para rangos de temperatura humana."
            },
            {
              pregunta: "La escala Kelvin empieza en el 'Cero Absoluto', que equivale a:",
              opciones: ["0°C", "-273,15°C", "100°C"],
              correcta: 1,
              pista: "Mucho frío teórico.",
              explicacion: "Es el punto donde no hay movimiento corpuscular."
            },
            {
              pregunta: "¿Por qué se dejó de usar el mercurio en termómetros hogareños?",
              opciones: ["Porque era caro", "Porque es tóxico", "Porque no medía bien"],
              correcta: 1,
              pista: "Es peligroso.",
              explicacion: "Es un metal pesado peligroso para la salud y el ambiente."
            },
            {
              pregunta: "¿Qué escala de temperatura se usa mayormente en laboratorios científicos?",
              opciones: ["Celsius", "Fahrenheit", "Kelvin"],
              correcta: 2,
              pista: "Empieza en el cero absoluto.",
              explicacion: "La escala Kelvin es la unidad del Sistema Internacional."
            },
            {
              pregunta: "¿Cómo funciona un termómetro digital?",
              opciones: ["Con un líquido rojo", "Con un sensor electrónico", "Con un resorte"],
              correcta: 1,
              pista: "Usa batería.",
              explicacion: "Usa un componente llamado termistor que cambia su resistencia con el calor."
            },
            {
              pregunta: "¿Qué escala se usa comúnmente en Estados Unidos?",
              opciones: ["Celsius", "Kelvin", "Fahrenheit"],
              correcta: 2,
              pista: "Empieza con F.",
              explicacion: "Es la escala tradicional de ese país."
            },
            {
              pregunta: "Si un termómetro marca 37°C en una persona, significa:",
              opciones: ["Tiene fiebre", "Temperatura normal", "Está congelada"],
              correcta: 1,
              pista: "Salud normal.",
              explicacion: "36°C a 37°C es el rango normal del cuerpo humano."
            },
            {
              pregunta: "Para medir la temperatura de un horno industrial se usa:",
              opciones: ["Termómetro de alcohol", "Termocupla (pirómetro)", "Termómetro de mercurio"],
              correcta: 1,
              pista: "Para calor extremo.",
              explicacion: "Pueden medir temperaturas muy altas donde el vidrio se fundiría."
            },
            {
              pregunta: "Los termómetros de alcohol suelen ser de color:",
              opciones: ["Plateado", "Rojo o azul", "Verde fluorescente"],
              correcta: 1,
              pista: "Colorante.",
              explicacion: "Se les agrega colorante para ver mejor la columna."
            },
            {
              pregunta: "¿Qué sucede si ponemos un termómetro clínico en agua hirviendo?",
              opciones: ["Mide 100°C", "Se rompe", "Se apaga"],
              correcta: 1,
              pista: "No resiste tanto.",
              explicacion: "Los termómetros clínicos solo llegan hasta 42°C generalmente."
            },
            {
              pregunta: "La temperatura ambiente normal en una casa suele ser de:",
              opciones: ["0 a 5°C", "20 a 25°C", "40 a 50°C"],
              correcta: 1,
              pista: "Ni frío ni calor.",
              explicacion: "Es el rango de confort térmico."
            },
            // --- EJE: LA TRANSMISIÓN DEL CALOR ---
            {
              pregunta: "¿Cómo se llama la transmisión de calor por contacto directo?",
              opciones: ["Convección", "Radiación", "Conducción"],
              correcta: 2,
              pista: "Tocar algo.",
              explicacion: "Ocurre principalmente en sólidos cuando las partículas chocan entre sí."
            },
            {
              pregunta: "La convección ocurre principalmente en:",
              opciones: ["Sólidos", "Vacío", "Fluidos (líquidos y gases)"],
              correcta: 2,
              pista: "Aire o agua.",
              explicacion: "El calor se traslada por el movimiento de la masa del fluido."
            },
            {
              pregunta: "¿Qué tipo de transmisión no necesita materia para viajar?",
              opciones: ["Conducción", "Radiación", "Convección"],
              correcta: 1,
              pista: "A través del vacío.",
              explicacion: "La radiación viaja mediante ondas electromagnéticas."
            },
            {
              pregunta: "Un material que deja pasar el calor fácilmente es un:",
              opciones: ["Aislante", "Conductor", "Semisólido"],
              correcta: 1,
              pista: "Cobre, plata, hierro.",
              explicacion: "Los metales son excelentes conductores."
            },
            {
              pregunta: "¿Cuál de estos es un buen aislante térmico?",
              opciones: ["Cobre", "Aluminio", "Telgopor"],
              correcta: 2,
              pista: "Mantiene el frío.",
              explicacion: "Materiales con mucho aire atrapado son malos conductores."
            },
            {
              pregunta: "El mango de madera de una sartén sirve para:",
              opciones: ["Que sea más linda", "Aislar el calor", "Que pese menos"],
              correcta: 1,
              pista: "Protección.",
              explicacion: "La madera es un aislante que evita quemaduras."
            },
            {
              pregunta: "En una estufa, el aire caliente sube por:",
              opciones: ["Conducción", "Radiación", "Convección"],
              correcta: 2,
              pista: "Corrientes de aire.",
              explicacion: "El aire caliente es menos denso y genera corrientes ascendentes."
            },
            {
              pregunta: "Sentir el calor de una fogata en la cara es:",
              opciones: ["Conducción", "Radiación", "Convección"],
              correcta: 1,
              pista: "Calor a distancia.",
              explicacion: "El calor llega por ondas infrarrojas a distancia."
            },
            {
              pregunta: "Un termo tiene doble pared de vidrio con vacío para evitar:",
              opciones: ["Que se rompa", "La conducción y convección", "La luz"],
              correcta: 1,
              pista: "Bloquea el viaje del calor.",
              explicacion: "El vacío no tiene partículas, bloqueando estos dos tipos de transmisión."
            },
            {
              pregunta: "¿Por qué los metales son buenos conductores?",
              opciones: ["Porque son brillantes", "Por su estructura de partículas", "Porque son pesados"],
              correcta: 1,
              pista: "Estructura interna.",
              explicacion: "Sus partículas están muy juntas y transmiten la vibración rápido."
            },
            {
              pregunta: "La brisa en la playa durante el día es un ejemplo de:",
              opciones: ["Conducción", "Convección", "Magnetismo"],
              correcta: 1,
              pista: "Aire moviéndose.",
              explicacion: "El aire circula por diferencias de temperatura."
            },
            {
              pregunta: "La lana nos mantiene calientes porque:",
              opciones: ["Genera calor propio", "Atrapa aire que es aislante", "Es mágica"],
              correcta: 1,
              pista: "Aire atrapado.",
              explicacion: "El aire quieto entre las fibras no deja escapar el calor del cuerpo."
            },
            {
              pregunta: "¿Cuál de estos materiales es el mejor conductor?",
              opciones: ["Plástico", "Plata", "Madera"],
              correcta: 1,
              pista: "Es un metal caro.",
              explicacion: "La plata es uno de los mejores conductores térmicos."
            },
            {
              pregunta: "Al calentar agua en una olla, el agua de abajo sube porque:",
              opciones: ["Se evapora", "Se vuelve menos densa", "Tiene miedo"],
              correcta: 1,
              pista: "Corrientes de agua.",
              explicacion: "El calor expande el agua de abajo, se hace liviana y sube."
            },
            // --- EJE: LOS ESTADOS DE LA MATERIA ---
            {
              pregunta: "¿Qué estado de la materia tiene forma y volumen definidos?",
              opciones: ["Líquido", "Gaseoso", "Sólido"],
              correcta: 2,
              pista: "Como una piedra.",
              explicacion: "Las partículas están muy juntas y ordenadas."
            },
            {
              pregunta: "Los líquidos tienen volumen definido pero...",
              opciones: ["No tienen peso", "No tienen forma propia", "No tienen partículas"],
              correcta: 1,
              pista: "Se adaptan al vaso.",
              explicacion: "Toman la forma del recipiente que los contiene."
            },
            {
              pregunta: "¿Cuál de estos estados se puede comprimir (achicar) fácilmente?",
              opciones: ["Sólido", "Líquido", "Gaseoso"],
              correcta: 2,
              pista: "Como el aire en una jeringa.",
              explicacion: "Los gases tienen mucho espacio entre sus partículas."
            },
            {
              pregunta: "En el estado gaseoso, las partículas están:",
              opciones: ["Muy juntas", "En contacto pero desordenadas", "Muy separadas y veloces"],
              correcta: 2,
              pista: "Mucha libertad.",
              explicacion: "Vuelan libremente en todas direcciones."
            },
            {
              pregunta: "Un ejemplo de materia en estado líquido es:",
              opciones: ["Vapor", "Hielo", "Aceite"],
              correcta: 2,
              pista: "Se puede derramar.",
              explicacion: "El aceite fluye pero mantiene su volumen."
            },
            {
              pregunta: "¿Qué sucede con las partículas en el estado sólido?",
              opciones: ["Vibran en un lugar fijo", "Vuelan por el aire", "Se desplazan unas sobre otras"],
              correcta: 0,
              pista: "Están 'atadas'.",
              explicacion: "Tienen fuerzas de atracción muy fuertes."
            },
            {
              pregunta: "Los gases ocupan...",
              opciones: ["Solo el fondo del envase", "Todo el espacio disponible", "Un lugar fijo"],
              correcta: 1,
              pista: "No tienen límites.",
              explicacion: "Se expanden hasta llenar cualquier recipiente."
            },
            {
              pregunta: "¿Cuál es el cuarto estado de la materia (común en el sol)?",
              opciones: ["Gelatina", "Plasma", "Humo"],
              correcta: 1,
              pista: "Está en las estrellas.",
              explicacion: "Es un gas ionizado con mucha energía."
            },
            {
              pregunta: "Si pasamos 1 litro de agua de una jarra a un balde:",
              opciones: ["Cambia el volumen", "Cambia la forma", "Cambian ambos"],
              correcta: 1,
              pista: "Líquidos.",
              explicacion: "El volumen sigue siendo 1 litro, pero la forma cambia."
            },
            {
              pregunta: "¿Qué estado fluye pero no se puede comprimir?",
              opciones: ["Sólido", "Líquido", "Gaseoso"],
              correcta: 1,
              pista: "Como el agua.",
              explicacion: "Los líquidos fluyen pero sus partículas ya están muy cerca."
            },
            {
              pregunta: "El aire que nos rodea está en estado:",
              opciones: ["Plasma", "Líquido", "Gaseoso"],
              correcta: 2,
              pista: "Invisibles.",
              explicacion: "Es una mezcla de gases."
            },
            {
              pregunta: "Una mesa es un sólido porque:",
              opciones: ["Es de madera", "Sus partículas están muy unidas", "Es grande"],
              correcta: 1,
              pista: "Dureza.",
              explicacion: "La fuerza de atracción corpuscular es alta."
            },
            {
              pregunta: "¿Qué estado tiene la mayor energía cinética?",
              opciones: ["Sólido", "Líquido", "Gaseoso"],
              correcta: 2,
              pista: "Mucho movimiento.",
              explicacion: "Las partículas de gas se mueven a gran velocidad."
            },
            {
              pregunta: "El estado de una sustancia depende de:",
              opciones: ["Solo la presión", "Solo la temperatura", "Presión y temperatura"],
              correcta: 2,
              pista: "Dos factores.",
              explicacion: "Ambas afectan cómo se organizan las partículas."
            },
            // --- EJE: EL MODELO CORPUSCULAR DE LA MATERIA ---
            {
              pregunta: "Según el modelo corpuscular, la materia está formada por:",
              opciones: ["Hilos invisibles", "Partículas o corpúsculos", "Energía pura"],
              correcta: 1,
              pista: "Pequeñas esferas.",
              explicacion: "Todo lo que vemos son pequeñas bolitas unidas."
            },
            {
              pregunta: "¿Qué hay entre partícula y partícula?",
              opciones: ["Aire", "Agua", "Vacío"],
              correcta: 2,
              pista: "Nada de nada.",
              explicacion: "No hay nada entre ellas, es espacio vacío."
            },
            {
              pregunta: "Las partículas están siempre:",
              opciones: ["Quietitas", "En movimiento", "Solo se mueven si las tocamos"],
              correcta: 1,
              pista: "Eterno movimiento.",
              explicacion: "Incluso en sólidos, vibran constantemente."
            },
            {
              pregunta: "¿Qué sucede con el espacio entre partículas en un gas?",
              opciones: ["Es muy grande", "Es muy pequeño", "No existe"],
              correcta: 0,
              pista: "Mucha distancia.",
              explicacion: "Están muy alejadas unas de otras."
            },
            {
              pregunta: "La fuerza que mantiene unidas a las partículas se llama:",
              opciones: ["Gravedad", "Fuerza de atracción", "Magnetismo"],
              correcta: 1,
              pista: "Las mantiene juntas.",
              explicacion: "Varía según el estado de la materia."
            },
            {
              pregunta: "Si calentamos un gas, las partículas chocan...",
              opciones: ["Más suave", "Más fuerte y frecuente", "Igual"],
              correcta: 1,
              pista: "Más velocidad.",
              explicacion: "Aumenta la energía y la violencia de los choques."
            },
            {
              pregunta: "¿Por qué los sólidos no se pueden comprimir?",
              opciones: ["Porque son duros", "Porque sus partículas ya están muy juntas", "Porque no tienen aire"],
              correcta: 1,
              pista: "Sin espacio.",
              explicacion: "No hay espacio libre para acercarlas más."
            },
            {
              pregunta: "El modelo corpuscular explica que la materia es:",
              opciones: ["Continua", "Discontinua (con huecos)", "Infinita"],
              correcta: 1,
              pista: "Como un rompecabezas.",
              explicacion: "Es discontinua porque tiene espacios vacíos entre partículas."
            },
            {
              pregunta: "En un líquido, las partículas pueden:",
              opciones: ["Volar por el aire", "Desplazarse unas sobre otras", "Estar fijas"],
              correcta: 1,
              pista: "Se resbalan.",
              explicacion: "Esto permite que el líquido fluya."
            },
            {
              pregunta: "¿Qué partícula es más pequeña que un átomo?",
              opciones: ["Célula", "Electrón", "Gota"],
              correcta: 1,
              pista: "Muy, muy chiquito.",
              explicacion: "Los electrones son partículas subatómicas."
            },
            {
              pregunta: "A mayor energía cinética, las partículas tienen:",
              opciones: ["Más masa", "Más velocidad", "Más brillo"],
              correcta: 1,
              pista: "Rapidez.",
              explicacion: "La energía cinética es la energía del movimiento."
            },
            {
              pregunta: "El modelo corpuscular es una:",
              opciones: ["Verdad absoluta", "Teoría o modelo científico", "Ley de la selva"],
              correcta: 1,
              pista: "Es una explicación.",
              explicacion: "Es una representación para entender la realidad."
            },
            {
              pregunta: "Cuando un sólido se funde, las partículas...",
              opciones: ["Se rompen", "Vencen parte de la atracción", "Se multiplican"],
              correcta: 1,
              pista: "Se sueltan.",
              explicacion: "Ganan energía y se separan un poco."
            },
            {
              pregunta: "¿Qué sucede con el tamaño de cada partícula al calentar?",
              opciones: ["Se agrandan", "Se achican", "No cambian de tamaño"],
              correcta: 2,
              pista: "Cuidado: truco.",
              explicacion: "La partícula no cambia, cambia el espacio entre ellas."
            },
            // --- EJE: LOS CAMBIOS DE ESTADO ---
            {
              pregunta: "¿Cómo se llama el paso de sólido a líquido?",
              opciones: ["Fusión", "Ebullición", "Sublimación"],
              correcta: 0,
              pista: "Derrretir.",
              explicacion: "Como cuando el hielo se derrite."
            },
            {
              pregunta: "El paso de líquido a sólido se denomina:",
              opciones: ["Condensación", "Solidificación", "Fusión"],
              correcta: 1,
              pista: "Congelar.",
              explicacion: "Ocurre al quitar calor al líquido."
            },
            {
              pregunta: "La evaporación es un cambio de líquido a gas que ocurre:",
              opciones: ["En toda la masa a 100°C", "Lentamente en la superficie", "Solo si hay sol"],
              correcta: 1,
              pista: "La ropa secándose.",
              explicacion: "Ocurre a cualquier temperatura, solo en la capa de arriba."
            },
            {
              pregunta: "Cuando el vapor toca una tapa fría y se hace agua, ocurre:",
              opciones: ["Evaporación", "Condensación", "Sublimación"],
              correcta: 1,
              pista: "Gotitas.",
              explicacion: "El gas pierde calor y vuelve a ser líquido."
            },
            {
              pregunta: "La ebullición ocurre cuando:",
              opciones: ["Solo arriba", "En toda la masa del líquido", "Hace frío"],
              correcta: 1,
              pista: "Hervir.",
              explicacion: "Es un proceso violento con burbujas en todo el líquido."
            },
            {
              pregunta: "El paso directo de sólido a gas (sin ser líquido) es:",
              opciones: ["Fusión", "Sublimación", "Vaporización"],
              correcta: 1,
              pista: "Salto de estado.",
              explicacion: "Como sucede con la naftalina o el hielo seco."
            },
            {
              pregunta: "¿Qué cambio de estado requiere ganar energía (calor)?",
              opciones: ["Solidificación", "Fusión", "Condensación"],
              correcta: 1,
              pista: "Dar energía.",
              explicacion: "Para derretir algo hay que darle calor."
            },
            {
              pregunta: "¿Qué cambio de estado libera energía (se enfría)?",
              opciones: ["Evaporación", "Fusión", "Solidificación"],
              correcta: 2,
              pista: "Quitar energía.",
              explicacion: "Al congelarse, la sustancia entrega su calor."
            },
            {
              pregunta: "La escarcha en el pasto es ejemplo de:",
              opciones: ["Fusión", "Sublimación inversa", "Evaporación"],
              correcta: 1,
              pista: "Hielo directo.",
              explicacion: "El vapor de agua pasa a sólido directamente."
            },
            {
              pregunta: "Al calentar un metal, este se estira un poco. Esto es:",
              opciones: ["Dilatación", "Contracción", "Fusión"],
              correcta: 0,
              pista: "Se agranda.",
              explicacion: "Las partículas se alejan y el cuerpo ocupa más lugar."
            },
            {
              pregunta: "¿Por qué las vías del tren tienen espacios entre ellas?",
              opciones: ["Para ahorrar metal", "Para la dilatación en verano", "Para que el tren haga ruido"],
              correcta: 1,
              pista: "Espacio para crecer.",
              explicacion: "Evita que se tuerzan cuando el calor las expande."
            },
            {
              pregunta: "Si un globo se pone en el freezer, este:",
              opciones: ["Se infla", "Se achica (contracción)", "Explota"],
              correcta: 1,
              pista: "Se encoge.",
              explicacion: "El aire adentro pierde energía y ocupa menos volumen."
            },
            {
              pregunta: "La vaporización incluye dos procesos:",
              opciones: ["Fusión y Vapor", "Evaporación y Ebullición", "Lluvia y Nieve"],
              correcta: 1,
              pista: "Dos caminos.",
              explicacion: "Son las dos formas de pasar de líquido a gas."
            },
            {
              pregunta: "Cuando sudamos y el viento nos refresca es por la:",
              opciones: ["Condensación", "Evaporación", "Solidificación"],
              correcta: 1,
              pista: "El sudor se va.",
              explicacion: "Al evaporarse, el sudor nos quita calor del cuerpo."
            },
            {
              pregunta: "El punto de fusión y de solidificación del agua es:",
              opciones: ["El mismo (0°C)", "Distinto", "100°C"],
              correcta: 0,
              pista: "Es 0°C.",
              explicacion: "Es la temperatura donde conviven el sólido y el líquido."
            },
            // --- EJE: EL AIRE Y LA ATMÓSFERA ---
            {
              pregunta: "¿Cuál es el gas más abundante en nuestra atmósfera?",
              opciones: ["Oxígeno", "Dióxido de Carbono", "Nitrógeno"],
              correcta: 2,
              pista: "78 por ciento.",
              explicacion: "El nitrógeno compone el 78% del aire."
            },
            {
              pregunta: "¿Qué porcentaje de oxígeno tiene el aire aproximadamente?",
              opciones: ["78%", "21%", "1%"],
              correcta: 1,
              pista: "Casi un cuarto.",
              explicacion: "Es la cantidad justa para la vida animal."
            },
            {
              pregunta: "La capa de aire que protege a la Tierra se llama:",
              opciones: ["Hidrósfera", "Biósfera", "Atmósfera"],
              correcta: 2,
              pista: "Manto de gases.",
              explicacion: "Filtra rayos solares y mantiene la temperatura."
            },
            {
              pregunta: "El aire tiene peso:",
              opciones: ["Falso", "Verdadero", "Solo si llueve"],
              correcta: 1,
              pista: "Es materia.",
              explicacion: "Como tiene partículas con masa, la gravedad lo atrae."
            },
            {
              pregunta: "¿Qué gas usan las plantas para la fotosíntesis?",
              opciones: ["Oxígeno", "Dióxido de Carbono", "Argón"],
              correcta: 1,
              pista: "Lo que exhalamos.",
              explicacion: "Toman CO2 y liberan Oxígeno."
            },
            {
              pregunta: "El aire caliente tiende a:",
              opciones: ["Bajar al suelo", "Subir", "Ir hacia los costados"],
              correcta: 1,
              pista: "Globos aerostáticos.",
              explicacion: "Es menos denso que el aire frío."
            },
            {
              pregunta: "La presión atmosférica es mayor en:",
              opciones: ["La cima de una montaña", "A nivel del mar", "En el espacio"],
              correcta: 1,
              pista: "Donde hay más aire arriba.",
              explicacion: "Hay más aire encima nuestro presionando."
            },
            {
              pregunta: "¿Qué gas nos protege de los rayos ultravioletas?",
              opciones: ["Oxígeno", "Ozono", "Helio"],
              correcta: 1,
              pista: "Empieza con O.",
              explicacion: "La capa de ozono es vital en la estratosfera."
            },
            {
              pregunta: "El viento se produce por:",
              opciones: ["Las aspas de los molinos", "Diferencias de temperatura y presión", "El movimiento del mar"],
              correcta: 1,
              pista: "Viaje del aire.",
              explicacion: "El aire se mueve de zonas frías a cálidas."
            },
            {
              pregunta: "Un globo inflado con helio sube porque:",
              opciones: ["El helio es muy pesado", "El helio es menos denso que el aire", "El helio es aire caliente"],
              correcta: 1,
              pista: "Más liviano.",
              explicacion: "Tiene menos masa por unidad de volumen."
            },
            {
              pregunta: "¿Cómo se llama la capa de la atmósfera donde vivimos?",
              opciones: ["Troposfera", "Exosfera", "Mesosfera"],
              correcta: 0,
              pista: "Empieza con T.",
              explicacion: "Es la capa más baja donde ocurre el clima."
            },
            {
              pregunta: "El aire es una mezcla de:",
              opciones: ["Solo un gas", "Muchos gases y partículas", "Solo oxígeno y agua"],
              correcta: 1,
              pista: "Es una mezcla.",
              explicacion: "Contiene nitrógeno, oxígeno, argón, CO2 y vapor de agua."
            },
            {
              pregunta: "Sin atmósfera, la temperatura de la Tierra sería:",
              opciones: ["Igual", "Muy extrema (muy frío y muy calor)", "Siempre caliente"],
              correcta: 1,
              pista: "Efecto invernadero.",
              explicacion: "La atmósfera actúa como un invernadero natural."
            },
            {
              pregunta: "¿Qué gas expulsamos al respirar?",
              opciones: ["Oxígeno", "Dióxido de Carbono", "Nitrógeno"],
              correcta: 1,
              pista: "CO2.",
              explicacion: "Es el residuo de nuestra respiración celular."
            },
            {
              pregunta: "¿Por qué el aire es materia?",
              opciones: ["Porque se puede ver", "Porque tiene masa y ocupa lugar", "Porque es transparente"],
              correcta: 1,
              pista: "Masa y volumen.",
              explicacion: "Cumple con las dos condiciones básicas de la materia."
            }
          ]
        },
        "Q2": {
          // 1. GUÍA DE APRENDIZAJE INTERACTIVA - MISIÓN NOVA TERRA (7 Lecciones)
          guia: [
            {
              titulo: "Calor, Temperatura y Equilibrio Térmico",
              texto: "La <b>Temperatura</b> indica qué tan caliente o frío está un cuerpo; científicamente, es una medida del movimiento y agitación de las partículas que lo forman.<br><br>El <b>Calor</b> es una forma de energía térmica en tránsito que se transfiere espontáneamente desde un cuerpo con mayor temperatura hacia otro con menor temperatura. <b>¡El calor siempre pasa del cuerpo más caliente al más frío!</b><br><br>Cuando un cuerpo caliente entra en contacto con otro más frío, el calor fluye continuamente hasta que ambos alcanzan exactamente la misma temperatura. A este estado final se lo llama <b>Equilibrio Térmico</b>.<br><br><b>Ejemplo Real:</b> Cuando dejas una taza de sopa o chocolate caliente sobre la mesa, la sopa disminuye su temperatura porque transfiere calor al aire del ambiente. Con el paso de los minutos, la sopa y la habitación alcanzan la misma temperatura y el calor deja de transferirse.<br><br><i>Recuerda: El frío no es una energía que entra, sino la sensación que sentimos cuando un cuerpo pierde calor.</i>",
              resumen_corto: "El calor es energía que siempre viaja del cuerpo más caliente al más frío hasta igualar temperaturas en el equilibrio térmico.",
              preguntaValidacion: {
                q: "Si dejas una taza de sopa hirviendo sobre la mesa de la cocina, ¿qué sucederá con el calor y la temperatura?",
                a: ["El frío del ambiente entra en la taza y la sopa gana energía", "La sopa transfiere calor al ambiente hasta que ambos alcanzan la misma temperatura (equilibrio térmico)", "La sopa mantiene su calor atrapado indefinidamente sin cambiar"],
                c: 1
              }
            },
            {
              titulo: "Materiales Conductores y Aislantes Térmicos",
              texto: "Frente al paso de la energía térmica, los materiales se clasifican en dos grandes grupos:<br><br>1. <b>Conductores Térmicos:</b> Son materiales que permiten que el calor pase a través de ellos muy fácilmente y con rapidez. Los <b>metales</b> como el <b>hierro</b> y el <b>aluminio</b> son excelentes conductores térmicos.<br><br>2. <b>Aislantes Térmicos:</b> Son materiales que dificultan, frenan o retardan el paso del calor. La <b>lana</b>, la madera, el plástico, el telgopor y el corcho son grandes aislantes térmicos.<br><br><b>Ejemplo Real:</b> Cuando cocinas, la olla se fabrica de aluminio o hierro para que el calor del fuego llegue rápidamente a los alimentos. Sin embargo, el mango de la olla se cubre con plástico o madera para que el calor no pase a tu mano.<br><br><i>Para la prueba: Para fabricar un abrigo elegimos la <b>lana</b> porque es un material aislante: no produce calor propio, sino que atrapa aire y frena la pérdida del calor natural de nuestro cuerpo hacia el exterior.</i>",
              resumen_corto: "Los metales como el hierro y aluminio son conductores de calor; la lana, madera y plástico son aislantes térmicos.",
              preguntaValidacion: {
                q: "¿Por qué la lana es el material más adecuado para fabricar un abrigo de invierno?",
                a: ["Porque es un metal conductor que absorbe frío", "Porque es un material aislante térmico que dificulta la pérdida del calor corporal", "Porque produce calor artificialmente mediante reacciones químicas"],
                c: 1
              }
            },
            {
              titulo: "Los Cambios de Estado de la Materia",
              texto: "La materia puede cambiar de un estado físico a otro cuando <b>gana calor</b> (aumenta su temperatura) o cuando <b>pierde calor</b> (se enfría):<br><br><b>1. Cambios donde la sustancia GANA calor:</b><br>- <b>Fusión:</b> Paso de sólido a líquido al absorber calor (ej: un cubo de hielo que se derrite al sacarlo del congelador).<br>- <b>Vaporización o Ebullición:</b> Paso de líquido a gas al ganar calor (ej: el agua líquida de una olla hirviendo en la hornalla o un charco que se seca con el sol).<br><br><b>2. Cambios donde la sustancia PIERDE calor:</b><br>- <b>Solidificación:</b> Paso de líquido a sólido al ceder calor al ambiente (ej: colocar agua en una cubetera en el freezer hasta formar hielo).<br>- <b>Condensación:</b> Paso de gas a líquido al enfriarse (ej: el vapor de agua invisible del aire que, al chocar contra el vidrio frío de una ventana, forma gotitas líquidas).<br><br><i>Clave de examen: En la fusión y vaporización las partículas se separan ganando energía; en la solidificación y condensación pierden energía y se unen.</i>",
              resumen_corto: "Fusión (sólido a líquido) y vaporización ganan calor; solidificación (líquido a sólido) y condensación (gas a líquido) pierden calor.",
              preguntaValidacion: {
                q: "Cuando el vapor de la ducha toca el espejo frío del baño y se forman gotas de agua líquida, ¿qué cambio de estado ocurrió?",
                a: ["Condensación", "Fusión", "Solidificación"],
                c: 0
              }
            },
            {
              titulo: "La Atmósfera Terrestre y la Protección de la Vida",
              texto: "La <b>Atmósfera</b> es la inmensa capa de gases que rodea a la Tierra, retenida por la gravedad. Es fundamental para la existencia de los seres vivos.<br><br><b>Composición del Aire:</b> Los dos gases más abundantes son el <b>Nitrógeno (N₂) con un 78%</b> y el <b>Oxígeno (O₂) con un 21%</b>. El 1% restante está formado por pequeñas cantidades de dióxido de carbono (CO₂), vapor de agua, argón y otros gases.<br><br><b>5 Funciones Vitales de la Atmósfera:</b><br>1. <b>Protección de radiación dañina:</b> La capa de ozono filtra parte de los peligrosos rayos solares ultravioleta (UV).<br>2. <b>Regulación de la temperatura:</b> Actúa como un escudo térmico evitando diferencias extremas de temperatura entre el día y la noche.<br>3. <b>Escudo antimeteoritos:</b> La mayoría de los pequeños fragmentos rocosos espaciales se desintegran por fricción al ingresar a la atmósfera.<br>4. <b>Gases esenciales:</b> Contiene el oxígeno que respiran personas y animales, y el dióxido de carbono que usan las plantas para la fotosíntesis.<br>5. <b>Permite los fenómenos meteorológicos:</b> En ella se forman las nubes, los vientos y las precipitaciones indispensables para el ciclo del agua.",
              resumen_corto: "La atmósfera está compuesta por 78% nitrógeno y 21% oxígeno. Regula la temperatura, filtra radiación solar y protege de meteoritos.",
              preguntaValidacion: {
                q: "¿Cuáles son los dos gases más abundantes que componen la atmósfera terrestre?",
                a: ["Oxígeno (78%) e Hidrógeno (21%)", "Nitrógeno (78%) y Oxígeno (21%)", "Dióxido de carbono (78%) y Helio (21%)"],
                c: 1
              }
            },
            {
              titulo: "Fenómenos Meteorológicos, Tiempo y Clima",
              texto: "Los <b>Fenómenos Meteorológicos</b> son cambios que ocurren en la atmósfera en un lugar y momento determinado:<br>- <b>Lluvia:</b> Caída de gotas de agua líquida desde las nubes.<br>- <b>Viento:</b> Movimiento de masas de aire en la atmósfera provocado por diferencias de temperatura y presión.<br>- <b>Nubes:</b> Gotitas de agua microscópicas o cristales de hielo suspendidos en el aire.<br>- <b>Granizo:</b> Bolas o piedras de hielo que caen con fuerza desde nubes de tormenta.<br>- <b>Tormentas:</b> Descargas eléctricas intensas (rayos y relámpagos) acompañadas de truenos, lluvia y viento.<br><br><b>¿Meteorológico o No Meteorológico?</b><br>- Son <b>Meteorológicos</b> los que ocurren en la atmósfera: lluvia, viento, granizo, tormentas y nieve.<br>- Son <b>NO Meteorológicos</b> los fenómenos geológicos que ocurren en la Tierra o corteza terrestre: <b>terremotos (sismos), erupciones volcánicas, maremotos (tsunamis) y corrimientos de tierra</b>.<br><br><b>Tiempo Atmosférico vs. Clima:</b><br>- <b>Tiempo atmosférico:</b> Es el estado de la atmósfera en un momento y lugar específico a corto plazo. Puede cambiar de un día para otro (ej: <i>'Durante tres días hizo mucho frío y llovió'</i>).<br>- <b>Clima:</b> Es el promedio general de las condiciones meteorológicas en una región a lo largo de muchos años (ej: <i>'El clima de la Patagonia es frío y seco'</i>).",
              resumen_corto: "Los meteorológicos ocurren en la atmósfera (lluvia, viento, granizo); terremotos y volcanes son de la Tierra. El tiempo es el día a día y el clima es el promedio de años.",
              preguntaValidacion: {
                q: "Si decimos: 'Durante tres días hizo mucho frío y llovió intensamente en la ciudad', ¿a qué concepto nos referimos?",
                a: ["Al clima regional de la zona", "Al tiempo atmosférico, porque describe condiciones momentáneas a corto plazo", "A un fenómeno geológico no meteorológico"],
                c: 1
              }
            },
            {
              titulo: "Las Personas y el Ambiente: Cuidado y Huella de Carbono",
              texto: "Las actividades humanas pueden alterar el equilibrio natural del planeta.<br><br><b>Contaminación Atmosférica:</b> Es la presencia en el aire de sustancias y gases tóxicos perjudiciales para la salud y los ecosistemas. Sus principales fuentes son las <b>fábricas</b> (emiten humos industriales) y los <b>vehículos</b> (emiten gases contaminantes por los caños de escape).<br><br><b>Calentamiento Global:</b> Es el aumento gradual de la temperatura media del planeta debido a la acumulación excesiva de gases de efecto invernadero (como el dióxido de carbono, CO₂) que atrapan demasiado calor. Provoca el <b>derretimiento de glaciares</b>, la <b>subida del nivel del mar</b> e intensos cambios en el clima.<br><br><b>Huella de Carbono:</b> Es la cantidad total de gases de efecto invernadero que generamos directa o indirectamente con nuestras actividades diarias (usar autos a combustible, consumir energía eléctrica derivada de petróleo, generar residuos).<br><br><b>La Regla de las 3R para Cuidar el Planeta:</b><br>- <b>Reducir:</b> Disminuir el consumo innecesario (ahorrar agua, apagar luces y desconectar aparatos).<br>- <b>Reutilizar:</b> Dar un nuevo uso a los objetos antes de desecharlos (usar bolsas de tela, frascos de vidrio).<br>- <b>Reciclar:</b> Separar residuos (vidrio, papel, plástico) para que sean procesados en nuevos productos. <i>¡Quemar basura contamina gravemente el aire; reciclar permite reutilizar materiales y disminuye la contaminación!</i>",
              resumen_corto: "La contaminación y quema de basura agravan el calentamiento global. Reducir, reutilizar, reciclar y usar bici disminuyen la huella de carbono.",
              preguntaValidacion: {
                q: "¿Cuál de las siguientes acciones contribuye de manera directa a reducir la huella de carbono y no contaminar el aire?",
                a: ["Quemar la basura acumulada en el patio", "Usar la bicicleta o caminar en lugar del automóvil", "Dejar todas las luces y artefactos encendidos"],
                c: 1
              }
            },
            {
              titulo: "El Sistema Solar: Estrellas, Planetas y Órbitas",
              texto: "En el Sistema Solar conviven distintos cuerpos astronómicos organizados alrededor de una estrella central:<br><br><b>1. El Sol:</b> Es una <b>estrella</b> de tamaño mediano que se encuentra en el centro del sistema. Las estrellas tienen <b>luz y calor propios</b>, producidos por colosales reacciones nucleares en su interior.<br><br><b>2. Los Planetas:</b> Son cuerpos celestes de forma casi esférica que <b>giran alrededor del Sol</b> describiendo trayectorias llamadas <b>órbitas</b>. <b>¡Los planetas no tienen luz propia!</b> Lo que vemos brillante en el cielo nocturno es la luz solar que su superficie refleja.<br><br><b>Diferencia clave entre Estrella y Planeta:</b> La estrella genera su propia energía luminosa y térmica; el planeta no genera luz propia, refleja la de una estrella y orbita a su alrededor.<br><br><b>Distancia al Sol y Período de Traslación:</b> Cuanto más lejos se encuentra un planeta del Sol, mayor y más extensa es su órbita, por lo que <b>tarda mucho más tiempo en dar una vuelta completa (su año es más largo)</b>.<br><br><b>Ejemplo:</b> <b>Mercurio</b> es el planeta más cercano al Sol y tarda solo 88 días terrestres en dar una vuelta. <b>Saturno</b>, al estar mucho más lejos, recorre una órbita gigantesca y tarda casi 30 años terrestres en completar un solo giro alrededor del Sol.",
              resumen_corto: "El Sol es una estrella con luz propia; los planetas no tienen luz propia y orbitan al Sol. Cuanto más lejos está un planeta, más tarda en dar una vuelta completa.",
              preguntaValidacion: {
                q: "Si comparamos a Mercurio y Saturno girando alrededor del Sol, ¿cuál de los dos tarda más tiempo en completar una vuelta y por qué?",
                a: ["Mercurio, porque es el más pequeño de los dos", "Saturno, porque está mucho más lejos del Sol y su órbita es mucho más larga", "Ambos tardan exactamente el mismo tiempo"],
                c: 1
              }
            }
          ],

          // 2. GLOSARIO CONCEPTUAL Y TARJETAS FLASHCARD (30 Términos)
          glosario: [
            { termino: "Temperatura", def: "Medida física que indica qué tan caliente o frío está un cuerpo según la agitación promedio de sus partículas." },
            { termino: "Calor", def: "Forma de energía térmica en tránsito que se transfiere espontáneamente desde un cuerpo de mayor temperatura a uno de menor temperatura." },
            { termino: "Equilibrio Térmico", def: "Estado alcanzado cuando dos cuerpos en contacto igualan sus temperaturas y cesa la transferencia de calor entre ellos." },
            { termino: "Conductor Térmico", def: "Material que permite que el calor se transmita a través de él con facilidad y rapidez (ej: metales como hierro y aluminio)." },
            { termino: "Aislante Térmico", def: "Material que dificulta o retarda notablemente el paso del calor a través de él (ej: lana, madera, plástico, telgopor)." },
            { termino: "Lana", def: "Material textil aislante de origen animal que atrapa aire y reduce la pérdida de calor corporal hacia el exterior." },
            { termino: "Fusión", def: "Cambio de estado físico en el cual una sustancia sólida pasa a líquido al absorber calor (ej: derretimiento del hielo)." },
            { termino: "Solidificación", def: "Cambio de estado físico en el cual un líquido pasa a sólido al ceder o perder calor (ej: agua que se convierte en hielo)." },
            { termino: "Vaporización", def: "Paso de una sustancia de estado líquido a gaseoso al ganar calor (ej: ebullición en una olla o evaporación en un charco)." },
            { termino: "Condensación", def: "Cambio de estado físico donde un gas se enfría y pasa a líquido (ej: vapor que forma gotas en una ventana)." },
            { termino: "Atmósfera", def: "Capa de gases que rodea a la Tierra, indispensable para la vida al regular la temperatura y filtrar radiación perjudicial." },
            { termino: "Nitrógeno (N₂)", def: "Gas más abundante de la atmósfera terrestre, constituyendo aproximadamente el 78% del aire que nos rodea." },
            { termino: "Oxígeno (O₂)", def: "Segundo gas más abundante de la atmósfera (21%), imprescindible para la respiración de los seres vivos aeróbicos." },
            { termino: "Capa de Ozono", def: "Región de la atmósfera que filtra gran parte de los rayos solares ultravioletas (UV) dañinos para la vida." },
            { termino: "Fenómeno Meteorológico", def: "Cualquier cambio o evento físico natural que ocurre dentro de la atmósfera (lluvia, viento, nubes, granizo, tormenta)." },
            { termino: "Lluvia", def: "Precipitación meteorológica que consiste en la caída de gotas de agua líquida desde las nubes hacia la superficie." },
            { termino: "Viento", def: "Movimiento de masas de aire en la atmósfera generado por diferencias de temperatura y de presión." },
            { termino: "Granizo", def: "Precipitación en forma de bolas o esferas compactas de hielo que caen con fuerza desde las nubes de tormenta." },
            { termino: "Tormenta", def: "Fenómeno atmosférico violento caracterizado por descargas eléctricas (rayos), truenos, lluvias intensas y fuertes vientos." },
            { termino: "Tiempo Atmosférico", def: "Condición momentánea de la atmósfera en un lugar y momento determinado, capaz de cambiar en horas o días." },
            { termino: "Clima", def: "Promedio estadístico de las condiciones meteorológicas de una región a lo largo de períodos extensos (décadas)." },
            { termino: "Fenómeno No Meteorológico", def: "Evento natural geológico que ocurre en la corteza terrestre y no en la atmósfera (ej: terremoto, erupción volcánica, tsunami)." },
            { termino: "Contaminación Atmosférica", def: "Presencia de gases y partículas dañinas en el aire producidas principalmente por vehículos y fábricas." },
            { termino: "Calentamiento Global", def: "Aumento gradual de la temperatura media del planeta debido al exceso de gases de efecto invernadero emitidos por el ser humano." },
            { termino: "Huella de Carbono", def: "Medida del total de gases de efecto invernadero emitidos por las actividades diarias de una persona o comunidad." },
            { termino: "Reducir", def: "Primera de las 3R; consiste en disminuir el consumo innecesario de energía, agua y productos para generar menos desechos." },
            { termino: "Reutilizar", def: "Segunda de las 3R; consiste en darle un nuevo uso a los objetos o envases antes de desecharlos a la basura." },
            { termino: "Reciclar", def: "Tercera de las 3R; separación y transformación industrial de materiales desechados (vidrio, papel, plástico) en nuevos productos." },
            { termino: "Estrella", def: "Cuerpo celeste luminoso en el espacio que emite luz y calor propios generados por reacciones nucleares internas (como el Sol)." },
            { termino: "Planeta", def: "Cuerpo celeste que orbita alrededor de una estrella (como el Sol) y no posee luz propia, sino que refleja la luz estelar." }
          ],

          // 3. BANCO DE SIMULACROS Y DESAFÍOS ARCADE (70 Preguntas por Ejes Temáticos)
          simulacro: [
            {
              pregunta: "Un científico deja una taza de sopa muy caliente sobre una mesa de laboratorio. ¿Qué ocurrirá con la temperatura de la sopa con el paso de los minutos?",
              opciones: ["Aumentará continuamente", "Disminuirá porque transfiere calor al ambiente", "Se mantendrá igual indefinidamente"],
              correcta: 1,
              pista: "La sopa está más caliente que el aire de la habitación y cede energía.",
              explicacion: "La sopa caliente transfiere calor de manera espontánea al aire del entorno, provocando que su temperatura descienda."
            },
            {
              pregunta: "¿Hacia dónde se transferirá el calor entre la taza de sopa caliente y el ambiente de la habitación?",
              opciones: ["Desde el ambiente frío hacia la sopa", "Desde la sopa caliente hacia el ambiente circundante", "El calor no viaja, se destruye"],
              correcta: 1,
              pista: "La regla de oro del calor dice que viaja del más caliente al más frío.",
              explicacion: "El calor siempre se transfiere naturalmente desde el cuerpo de mayor temperatura (la sopa) hacia el de menor temperatura (el ambiente)."
            },
            {
              pregunta: "¿Qué sucederá cuando la taza de sopa y el ambiente alcancen el 'Equilibrio Térmico'?",
              opciones: ["La sopa se congelará por completo", "Ambos tendrán la misma temperatura y el calor dejará de transferirse", "La sopa volverá a calentarse sola"],
              correcta: 1,
              pista: "Equilibrio significa empate o igualdad de temperaturas.",
              explicacion: "El equilibrio térmico se produce cuando dos cuerpos en contacto igualan su temperatura, cesando el flujo neto de energía térmica."
            },
            {
              pregunta: "Científicamente, ¿cuál es la definición correcta de 'Calor'?",
              opciones: ["Una forma de energía térmica que se transfiere de un cuerpo a otro", "La temperatura absoluta de un material", "Una propiedad que indica si algo es sólido o líquido"],
              correcta: 0,
              pista: "El calor es energía en movimiento o tránsito.",
              explicacion: "El calor es una forma de energía que viaja exclusivamente cuando hay una diferencia de temperatura entre dos cuerpos."
            },
            {
              pregunta: "¿Qué indica la 'Temperatura' de un cuerpo?",
              opciones: ["La cantidad de masa que tiene el objeto", "Qué tan caliente o frío está, midiendo la agitación de sus partículas", "El volumen de aire que ocupa"],
              correcta: 1,
              pista: "Está relacionada con la velocidad a la que vibran las partículas.",
              explicacion: "La temperatura es una medida física del grado de agitación o energía cinética promedio de las partículas de una sustancia."
            },
            {
              pregunta: "Si colocamos un cubo de hielo a 0°C dentro de un vaso de agua tibia a 30°C:",
              opciones: ["El hielo le transfiere frío al agua", "El agua tibia le transfiere calor al hielo", "Ninguno transfiere nada"],
              correcta: 1,
              pista: "El calor siempre fluye del cuerpo con mayor temperatura.",
              explicacion: "El agua líquida tibia (30°C) transfiere energía térmica al hielo (0°C), provocando que el hielo absorba calor y comience a fundirse."
            },
            {
              pregunta: "¿Existe científicamente el 'frío' como una forma de energía?",
              opciones: ["Sí, es una energía opuesta al calor", "No, el frío es la sensación de ausencia o pérdida de calor", "Sí, solo en invierno"],
              correcta: 1,
              pista: "Solo el calor es energía; el frío es cuando falta esa energía.",
              explicacion: "Científicamente el frío no es una energía que se transmite, sino la percepción resultante de que un cuerpo pierde energía térmica."
            },
            {
              pregunta: "Una taza de chocolate caliente se enfría en una mesa porque:",
              opciones: ["Transfiere calor al ambiente más frío", "El frío de la mesa se mete adentro de la taza", "Pierde partículas de chocolate"],
              correcta: 0,
              pista: "La energía viaja de lo más caliente hacia el entorno.",
              explicacion: "El chocolate caliente se enfría porque cede su energía térmica al aire circundante que se encuentra a menor temperatura."
            },
            {
              pregunta: "Si dos recipientes con agua están ambos a 20°C y los ponemos en contacto:",
              opciones: ["El calor pasará rápidamente de uno a otro", "Están en equilibrio térmico y no habrá transferencia de calor", "Uno se calentará y el otro se enfriará"],
              correcta: 1,
              pista: "Tienen exactamente la misma temperatura.",
              explicacion: "Al tener idéntica temperatura, no existe gradiente térmico y por lo tanto no hay transferencia de calor; ya están en equilibrio térmico."
            },
            {
              pregunta: "¿Qué ocurre con el movimiento de las partículas de una sopa cuando se va enfriando?",
              opciones: ["Comienzan a moverse más despacio al perder temperatura", "Comienzan a moverse cada vez más rápido", "Desaparecen de la sopa"],
              correcta: 0,
              pista: "Menos temperatura significa menor velocidad de partículas.",
              explicacion: "A menor temperatura, menor es la energía cinética y agitación de las partículas que componen la materia."
            },
            {
              pregunta: "Entre el hierro, el aluminio y la lana, ¿cuál es el material más adecuado para fabricar un abrigo?",
              opciones: ["El hierro", "El aluminio", "La lana"],
              correcta: 2,
              pista: "Necesitamos un material suave y que retenga el calor corporal.",
              explicacion: "La lana es un excelente aislante térmico, ideal para abrigos porque retiene el calor del cuerpo humano."
            },
            {
              pregunta: "¿Por qué la lana es tan eficaz para protegernos del frío en invierno?",
              opciones: ["Porque genera fuego y calor propio químicamente", "Porque es un material aislante que dificulta el paso y pérdida del calor corporal", "Porque es un metal superconductor"],
              correcta: 1,
              pista: "Los abrigos no generan calor, lo conservan.",
              explicacion: "La lana es un aislante térmico que atrapa aire entre sus fibras, frenando la transferencia del calor de nuestro cuerpo hacia el aire frío exterior."
            },
            {
              pregunta: "¿Qué caracteriza a un material 'Conductor Térmico'?",
              opciones: ["Dificulta y bloquea completamente el paso del calor", "Permite que el calor pase a través de él muy fácilmente", "Cambia de color con la luz del sol"],
              correcta: 1,
              pista: "Conducir significa guiar o dejar pasar con rapidez.",
              explicacion: "Los conductores térmicos poseen una estructura que transmite rápidamente las vibraciones y energía térmica entre sus partículas."
            },
            {
              pregunta: "¿Cuáles de los siguientes materiales son ejemplos típicos de conductores térmicos?",
              opciones: ["Madera y plástico", "Hierro y aluminio", "Lana y telgopor"],
              correcta: 1,
              pista: "Son metales que usamos para fabricar ollas y sartenes.",
              explicacion: "El hierro y el aluminio son metales, y casi todos los metales son excelentes conductores del calor."
            },
            {
              pregunta: "¿Qué función cumple el mango de plástico o madera en una sartén de metal?",
              opciones: ["Hacer que la sartén pese mucho más", "Actuar como aislante térmico para no quemarnos la mano al cocinar", "Ayudar a que la comida se cocine más rápido"],
              correcta: 1,
              pista: "El plástico frena el calor que viene de la base metálica.",
              explicacion: "Al ser la madera y el plástico materiales aislantes, impiden que el calor de la base metálica caliente llegue con rapidez al mango."
            },
            {
              pregunta: "Si tocas una varilla de metal y un trozo de madera que están en la misma habitación a 20°C, ¿por qué el metal se siente más frío?",
              opciones: ["Porque el metal está a una temperatura de 0°C", "Porque el metal es un conductor que le quita calor a tu mano mucho más rápido", "Porque la madera produce calor espontáneamente"],
              correcta: 1,
              pista: "Ambos están a 20°C, pero uno roba calor más velozmente.",
              explicacion: "El metal es buen conductor térmico y conduce velozmente el calor desde tu mano (a 36°C) hacia él, generando una intensa sensación de frío."
            },
            {
              pregunta: "¿Cuál de los siguientes elementos es un aislante térmico muy utilizado en heladeras portátiles para conservar el frío?",
              opciones: ["El telgopor (poliestireno expandido)", "El alambre de cobre", "La lámina de hierro"],
              correcta: 0,
              pista: "Es liviano, blanco y contiene muchísimo aire atrapado.",
              explicacion: "El telgopor es un material plástico poroso que atrapa millones de burbujas de aire, siendo un aislante térmico excepcional."
            },
            {
              pregunta: "¿Por qué no se fabrican camperas de abrigo con láminas de aluminio en su interior?",
              opciones: ["Porque el aluminio es demasiado barato", "Porque el aluminio es un conductor que dejaría escapar el calor del cuerpo rápidamente", "Porque el aluminio atrae la lluvia"],
              correcta: 1,
              pista: "El aluminio dejaría salir la energía del cuerpo al exterior.",
              explicacion: "Los metales como el aluminio conducen el calor velozmente, lo que causaría que el cuerpo pierda temperatura rápidamente en un ambiente frío."
            },
            {
              pregunta: "El aire quieto o atrapado se comporta físicamente como:",
              opciones: ["Un excelente conductor de calor", "Un gran aislante térmico", "Un líquido viscoso"],
              correcta: 1,
              pista: "Las ventanas de doble vidrio con aire intermedio aíslan muy bien.",
              explicacion: "El aire tiene sus partículas muy separadas, por lo que cuando está confinado y no se mueve por corrientes, es un aislante térmico natural de primer nivel."
            },
            {
              pregunta: "Al revolver sopa hirviendo en una olla, ¿con qué cuchara es más probable que te quemes los dedos?",
              opciones: ["Con una cuchara de madera", "Con una cuchara de metal (acero o aluminio)", "Con una cuchara de plástico grueso"],
              correcta: 1,
              pista: "El metal transmite el calor desde la sopa hacia el mango en segundos.",
              explicacion: "La cuchara de metal es conductora térmica y conduce el calor del caldo hasta el mango muy rápidamente."
            },
            {
              pregunta: "¿Qué cambio de estado ocurre cuando un cubito de hielo se derrite y se convierte en agua líquida?",
              opciones: ["Solidificación", "Fusión", "Condensación"],
              correcta: 1,
              pista: "El sólido gana calor y se funde.",
              explicacion: "La fusión es el paso del estado sólido al líquido al absorber calor."
            },
            {
              pregunta: "Cuando colocamos agua líquida en una cubetera dentro del freezer y se transforma en hielo, ocurre:",
              opciones: ["Solidificación", "Vaporización", "Fusión"],
              correcta: 0,
              pista: "El líquido se vuelve sólido.",
              explicacion: "La solidificación es el paso de líquido a sólido al perder calor hacia el ambiente frío del congelador."
            },
            {
              pregunta: "En un día frío de invierno, el vapor de la respiración forma gotas de agua en el vidrio de una ventana. Este cambio es:",
              opciones: ["Vaporización", "Condensación", "Sublimación"],
              correcta: 1,
              pista: "El gas toca una superficie fría y se hace líquido.",
              explicacion: "La condensación ocurre cuando un gas o vapor pierde calor al entrar en contacto con una superficie fría y pasa a estado líquido."
            },
            {
              pregunta: "El agua de una olla hirviendo en el fuego se transforma en burbujas y vapor. ¿Cómo se denomina este proceso?",
              opciones: ["Condensación", "Vaporización (ebullición)", "Fusión"],
              correcta: 1,
              pista: "El líquido gana calor y se convierte en gas.",
              explicacion: "La vaporización (en su forma tumultuosa llamada ebullición) es el paso de líquido a gas cuando el agua absorbe calor y llega a 100°C."
            },
            {
              pregunta: "El agua de un charco en la vereda desaparece lentamente tras salir el sol. ¿Qué cambio de estado ocurrió?",
              opciones: ["Evaporación (vaporización)", "Solidificación", "Fusión"],
              correcta: 0,
              pista: "El agua de la superficie pasa a gas sin hervir.",
              explicacion: "La evaporación es un tipo de vaporización lenta que ocurre solo en la superficie del líquido a cualquier temperatura ambiental."
            },
            {
              pregunta: "¿Cuáles de los siguientes cambios de estado requieren que la sustancia GANE o absorba calor?",
              opciones: ["Fusión y Vaporización", "Solidificación y Condensación", "Condensación y Fusión"],
              correcta: 0,
              pista: "Para derretir o evaporar algo hay que calentarlo.",
              explicacion: "Tanto derretir (fusión) como hervir o evaporar (vaporización) requieren suministrar calor para vencer las fuerzas de atracción entre partículas."
            },
            {
              pregunta: "¿Cuáles de los siguientes cambios de estado requieren que la sustancia PIERDA calor (se enfríe)?",
              opciones: ["Fusión y Ebullición", "Solidificación y Condensación", "Vaporización y Solidificación"],
              correcta: 1,
              pista: "Ocurren cuando bajamos la temperatura en la heladera o ventana fría.",
              explicacion: "Hacer hielo (solidificación) y empañar un vidrio con gotitas (condensación) ocurren cuando la sustancia cede su calor y se enfría."
            },
            {
              pregunta: "Cuando sacas una lata de gaseosa muy fría de la heladera, se forman pequeñas gotas de agua por fuera. ¿De dónde proviene esa agua?",
              opciones: ["Se escapó del interior de la lata atravesando el metal", "Es vapor de agua del aire que se condensó al tocar la lata fría", "La lata transpiró su propia pintura"],
              correcta: 1,
              pista: "En el aire hay vapor invisible que al tocar el frío se hace líquido.",
              explicacion: "El aire ambiental contiene vapor de agua que, al chocar contra la superficie fría de la lata, pierde calor y se condensa en gotitas líquidas."
            },
            {
              pregunta: "¿Qué le sucede a las partículas de agua cuando el hielo se funde y pasa a estado líquido?",
              opciones: ["Se destruyen y nacen partículas nuevas", "Ganan energía cinética, se mueven más y se separan ligeramente", "Se quedan totalmente inmóviles"],
              correcta: 1,
              pista: "El calor les da más energía y libertad de movimiento.",
              explicacion: "Al absorber calor, las partículas vencen parte de las fuertes uniones del sólido y pueden deslizarse unas sobre otras en estado líquido."
            },
            {
              pregunta: "A nivel del mar, ¿a qué temperatura ocurre la ebullición del agua pura?",
              opciones: ["0°C", "50°C", "100°C"],
              correcta: 2,
              pista: "Es el punto máximo de la escala Celsius.",
              explicacion: "El punto de ebullición del agua pura a presión atmosférica normal (a nivel del mar) es exactamente de 100°C."
            },
            {
              pregunta: "¿Qué es la atmósfera terrestre?",
              opciones: ["Una masa de agua líquida que cubre los océanos", "La capa de gases que rodea a la Tierra retenida por la gravedad", "Una corteza de rocas y minerales sólidos"],
              correcta: 1,
              pista: "Es la envoltura gaseosa de nuestro planeta.",
              explicacion: "La atmósfera es la capa protectora de gases que envuelve a la Tierra y que resulta indispensable para albergar vida."
            },
            {
              pregunta: "¿Cuál es el gas que se encuentra en mayor proporción en el aire de la atmósfera?",
              opciones: ["El Oxígeno con un 50%", "El Nitrógeno con un 78%", "El Dióxido de Carbono con un 90%"],
              correcta: 1,
              pista: "Comienza con N y supera las tres cuartas partes del aire.",
              explicacion: "El nitrógeno gaseoso (N₂) es el más abundante, ocupando aproximadamente el 78% de la atmósfera terrestre."
            },
            {
              pregunta: "¿Qué porcentaje aproximado de Oxígeno contiene el aire que respiramos?",
              opciones: ["78%", "21%", "1%"],
              correcta: 1,
              pista: "Es casi una quinta parte del total.",
              explicacion: "El oxígeno (O₂) representa cerca del 21% del aire atmosférico y es vital para la respiración de animales y personas."
            },
            {
              pregunta: "¿Qué función cumple la capa de ozono presente en la atmósfera?",
              opciones: ["Atraer meteoritos hacia la superficie", "Filtrar y protegernos de la radiación solar ultravioleta dañina", "Producir oxígeno para los peces"],
              correcta: 1,
              pista: "Actúa como un filtro solar para el planeta.",
              explicacion: "La capa de ozono en la estratosfera absorbe gran parte de la radiación UV del Sol, previniendo daños severos en la piel y los ojos."
            },
            {
              pregunta: "¿Cómo ayuda la atmósfera a regular la temperatura de la Tierra?",
              opciones: ["Enfriando el planeta hasta el cero absoluto cada noche", "Evitando diferencias térmicas extremas entre el día y la noche como un escudo térmico", "Haciendo que siempre haga exactamente 30°C en todo el mundo"],
              correcta: 1,
              pista: "Retiene parte del calor para que las noches no sean congelantes.",
              explicacion: "La atmósfera retiene parte del calor diurno mediante su efecto invernadero natural, evitando que las noches sean mortalmente gélidas."
            },
            {
              pregunta: "¿Qué le ocurre a la gran mayoría de los pequeños meteoritos que caen del espacio hacia la Tierra?",
              opciones: ["Chocan contra las ciudades intactos", "Se desintegran por la fricción y calor al entrar en contacto con la atmósfera", "Rebotan y vuelven a la luna"],
              correcta: 1,
              pista: "Forman las llamadas 'estrellas fugaces' al quemarse.",
              explicacion: "La atmósfera actúa como un escudo protector: al ingresar a gran velocidad, el roce con los gases quema y desintegra a los pequeños meteoritos."
            },
            {
              pregunta: "¿Qué gas atmosférico toman las plantas verdes para fabricar su alimento durante la fotosíntesis?",
              opciones: ["Dióxido de Carbono (CO₂)", "Nitrógeno puro", "Helio"],
              correcta: 0,
              pista: "Es el gas que expulsamos los seres humanos al exhalar.",
              explicacion: "Las plantas absorben dióxido de carbono de la atmósfera y, junto con el agua y la luz solar, producen glucosa y liberan oxígeno."
            },
            {
              pregunta: "Sin la atmósfera, la vida en la Tierra sería imposible porque:",
              opciones: ["Habría demasiada vegetación", "No tendríamos oxígeno, los meteoritos impactarían libremente y las temperaturas oscilarían de forma extrema", "Los mares serían de agua dulce"],
              correcta: 1,
              pista: "Faltaría aire, protección solar y equilibrio térmico.",
              explicacion: "La atmósfera provee los gases para respirar, detiene la radiación solar mortal, frena meteoritos y mantiene el clima templado."
            },
            {
              pregunta: "¿En qué capa más baja de la atmósfera ocurren los fenómenos meteorológicos como nubes y lluvias?",
              opciones: ["La Troposfera", "La Exosfera", "La Mesosfera"],
              correcta: 0,
              pista: "Es la capa en contacto con el suelo donde vivimos.",
              explicacion: "La troposfera es la capa inferior de la atmósfera (hasta unos 10-12 km de altura) donde se concentra el vapor de agua y ocurre el clima."
            },
            {
              pregunta: "Además de nitrógeno y oxígeno, ¿qué otros gases forman el 1% restante de la atmósfera?",
              opciones: ["Argón, dióxido de carbono y vapor de agua", "Petróleo líquido y metano sólido", "Hierro y aluminio"],
              correcta: 0,
              pista: "Son gases en proporciones muy pequeñas pero sumamente importantes.",
              explicacion: "El 1% restante está constituido por gases nobles como el argón, dióxido de carbono, vapor de agua y trazas de ozono e hidrógeno."
            },
            {
              pregunta: "¿Dónde se originan y ocurren los fenómenos meteorológicos?",
              opciones: ["En el interior del núcleo de la Tierra", "En la atmósfera terrestre", "En el fondo de los océanos exclusivamente"],
              correcta: 1,
              pista: "Tienen que ver con el aire, el calor y el vapor de agua.",
              explicacion: "Los fenómenos meteorológicos son todas aquellas manifestaciones y cambios físicos que se producen dentro de la atmósfera."
            },
            {
              pregunta: "De la siguiente lista, ¿cuáles son fenómenos METEOROLÓGICOS (M)?",
              opciones: ["Terremoto y erupción volcánica", "Lluvia, viento, nubes y granizo", "Maremoto y tsunami"],
              correcta: 1,
              pista: "Ocurren en el cielo y aire, no en las rocas del suelo.",
              explicacion: "La lluvia, el viento, las nubes, el granizo y las tormentas son fenómenos producidos por la dinámica de los gases atmosféricos."
            },
            {
              pregunta: "¿Por qué un TERREMOTO y una ERUPCIÓN VOLCÁNICA son fenómenos NO METEOROLÓGICOS (NM)?",
              opciones: ["Porque ocurren en la atmósfera superior", "Porque se originan en el interior de la corteza y geósfera terrestre, no en la atmósfera", "Porque nunca causan daños"],
              correcta: 1,
              pista: "Son fenómenos geológicos que nacen bajo tierra.",
              explicacion: "Los sismos y volcanes son fenómenos geológicos producidos por las placas tectónicas y el magma del interior de la Tierra."
            },
            {
              pregunta: "Si un reporte escolar dice: 'Durante los últimos tres días en la ciudad hizo mucho frío y llovió torrencialmente', ¿está describiendo el tiempo o el clima?",
              opciones: ["El clima", "El tiempo atmosférico", "La estación de primavera"],
              correcta: 1,
              pista: "Habla de solo tres días, es a corto plazo.",
              explicacion: "El tiempo atmosférico se refiere al estado puntual de la atmósfera en un período breve de tiempo (días u horas)."
            },
            {
              pregunta: "¿Cuál es la diferencia fundamental entre 'Tiempo Atmosférico' y 'Clima'?",
              opciones: ["Son exactamente sinónimos y no hay diferencia", "El tiempo describe el estado momentáneo (días); el clima es el promedio de muchos años", "El clima cambia cada 5 minutos y el tiempo dura siglos"],
              correcta: 1,
              pista: "Uno es la foto del día; el otro es la película de décadas.",
              explicacion: "El tiempo es el estado actual de la atmósfera (hoy llueve, mañana hay sol), mientras que el clima es el patrón característico analizado durante 30 años o más."
            },
            {
              pregunta: "La afirmación 'El clima de la Patagonia argentina es predominantemente frío, ventoso y seco' es un ejemplo de:",
              opciones: ["Clima, porque describe el patrón habitual durante muchas décadas", "Tiempo atmosférico de esta mañana", "Un fenómeno no meteorológico"],
              correcta: 0,
              pista: "Resume las características estables a largo plazo de una región.",
              explicacion: "Es una descripción del clima porque define las condiciones promedio y características generales de esa zona geográfica a lo largo de muchos años."
            },
            {
              pregunta: "¿Qué es físicamente el 'Viento'?",
              opciones: ["Gotas de agua que se congelaron en el aire", "El movimiento de masas de aire en la atmósfera debido a diferencias de temperatura", "Oxígeno puro que baja del espacio"],
              correcta: 1,
              pista: "El aire caliente sube y el aire frío entra a ocupar su lugar.",
              explicacion: "El viento es aire en movimiento impulsado por las diferencias de presión y temperatura originadas por el calentamiento desigual del sol."
            },
            {
              pregunta: "¿Cómo se forma el 'Granizo' en una tormenta?",
              opciones: ["Son copos de nieve aplastados por los rayos", "Gotas de agua que son elevadas por fuertes corrientes a zonas gélidas donde se congelan en bolas de hielo", "Trozos de nubes que se endurecen por el calor"],
              correcta: 1,
              pista: "Las gotas ascienden a gran altura donde hace bajo cero y se hacen piedras de hielo.",
              explicacion: "En nubes de tormenta potentes, corrientes ascendentes llevan gotas a zonas bajo cero repetidas veces, acumulando capas de hielo hasta caer por su peso."
            },
            {
              pregunta: "¿Cuál de los siguientes es un fenómeno NO METEOROLÓGICO?",
              opciones: ["Maremoto (tsunami)", "Tormenta eléctrica", "Llovizna"],
              correcta: 0,
              pista: "Se origina por un terremoto submarino en la placa oceánica.",
              explicacion: "Los tsunamis son olas gigantes causadas por sismos o deslizamientos en el fondo del mar, siendo de origen geológico y no atmosférico."
            },
            {
              pregunta: "¿Qué son en realidad las 'Nubes' que vemos flotando en el cielo?",
              opciones: ["Gas de humo blanco", "Millones de diminutas gotitas de agua líquida o cristales de hielo suspendidos en el aire", "Algodón gigante de vapor seco"],
              correcta: 1,
              pista: "El vapor de agua invisible sube y se condensa en microgotas.",
              explicacion: "Las nubes son acumulaciones visibles de diminutas gotitas de agua o cristales de hielo formadas por la condensación del vapor al ascender."
            },
            {
              pregunta: "Si en una ciudad aumenta drásticamente la cantidad de autos y fábricas, ¿cómo afecta esto a la atmósfera?",
              opciones: ["Aumenta la pureza del oxígeno", "Se contamina con gran cantidad de humos y gases tóxicos como el monóxido y dióxido de carbono", "Se reduce la gravedad terrestre"],
              correcta: 1,
              pista: "Las chimeneas y caños de escape emiten humo dañino.",
              explicacion: "La quema de combustibles fósiles en industrias y vehículos arroja partículas y gases que deterioran la calidad del aire respirable."
            },
            {
              pregunta: "¿Qué grave problema ambiental de escala planetaria se agrava con el aumento de gases contaminantes en el aire?",
              opciones: ["El Calentamiento Global", "El aumento de la distancia a la Luna", "La solidificación de los mares"],
              correcta: 0,
              pista: "La temperatura media de la Tierra se eleva.",
              explicacion: "El exceso de gases como el CO₂ intensifica el efecto invernadero, atrapando más calor solar y provocando el calentamiento global."
            },
            {
              pregunta: "¿Qué consecuencias directas genera el Calentamiento Global en nuestro planeta?",
              opciones: ["Derretimiento de glaciares, subida del nivel del mar y climas extremos", "La multiplicación de los glaciares en los polos", "Que los días duren 40 horas"],
              correcta: 0,
              pista: "A más calor, el hielo se derrite y el nivel del océano sube.",
              explicacion: "El alza de temperatura funde los hielos polares, eleva el nivel de los océanos e incrementa la frecuencia de sequías e inundaciones."
            },
            {
              pregunta: "¿Qué representa el concepto de 'Huella de Carbono'?",
              opciones: ["La marca que deja un zapato mojado en el piso", "La cantidad total de gases de efecto invernadero producidos por nuestras actividades cotidianas", "La cantidad de carbón mineral que extrae un minero"],
              correcta: 1,
              pista: "Mide cuánto impactamos en la emisión de CO₂.",
              explicacion: "La huella de carbono cuantifica las emisiones de gases contaminantes emitidos directa o indirectamente por el consumo y transporte de una persona o comunidad."
            },
            {
              pregunta: "Entre 'Quemar basura' y 'Reciclar', ¿cuál es la diferencia en su impacto ambiental?",
              opciones: ["Ambas son exactamente iguales y beneficiosas", "Quemar basura contamina gravemente el aire; reciclar permite reutilizar materiales y reduce la contaminación", "Quemar basura limpia el aire de la ciudad"],
              correcta: 1,
              pista: "El fuego libera toxinas al cielo; clasificar permite hacer cosas nuevas.",
              explicacion: "La quema de basura libera humo tóxico, cenizas y gases de invernadero; el reciclaje aprovecha los residuos como insumo para nuevos productos sin contaminar."
            },
            {
              pregunta: "¿Cuál de las siguientes acciones individuales ayuda a DISMINUIR nuestra huella de carbono?",
              opciones: ["Usar el automóvil para hacer trayectos de dos cuadras", "Usar la bicicleta o caminar para trasladarnos distancias cortas", "Dejar la televisión y las luces prendidas todo el día"],
              correcta: 1,
              pista: "Andar a pedal no quema nafta ni emite humo.",
              explicacion: "La bicicleta no consume combustibles fósiles ni emite gases, reduciendo directamente la huella de carbono personal."
            },
            {
              pregunta: "¿Qué significa la 'R' de 'REDUCIR' dentro de la regla de las 3R?",
              opciones: ["Comprar el doble de cosas en el supermercado", "Disminuir el consumo innecesario de agua, energía y productos desechables", "Pintar los tachos de basura de color rojo"],
              correcta: 1,
              pista: "Significa usar menos y evitar el derroche.",
              explicacion: "Reducir implica ser conscientes del consumo y moderarlo: apagar luces, cerrar canillas y evitar envases de un solo uso."
            },
            {
              pregunta: "¿Cuál de los siguientes es un ejemplo claro de 'REUTILIZAR'?",
              opciones: ["Tirar frascos de mermelada vacíos a la vereda", "Lavar los frascos de vidrio vacíos y usarlos para guardar lápices o galletitas", "Dejar la canilla abierta mientras te lavas los dientes"],
              correcta: 1,
              pista: "Darle una segunda vida útil al mismo objeto antes de tirarlo.",
              explicacion: "Reutilizar es volver a utilizar un producto u objeto con la misma o distinta función sin someterlo a un proceso industrial de transformación."
            },
            {
              pregunta: "¿En qué consiste la acción de 'RECICLAR' residuos?",
              opciones: ["Separar vidrio, papel y plástico para que plantas industriales los transformen en nuevos materiales", "Enterrar toda la basura junta en un pozo", "Llevar la basura a quemar al río"],
              correcta: 0,
              pista: "Separar en tachos específicos para volver a fabricar.",
              explicacion: "Reciclar es el circuito donde se separan materiales que, tras un tratamiento industrial, se convierten en materia prima para crear nuevos objetos."
            },
            {
              pregunta: "¿Por qué plantar árboles y cuidar la vegetación ayuda a mitigar la contaminación ambiental?",
              opciones: ["Porque los árboles expulsan humo negro", "Porque durante la fotosíntesis los árboles absorben dióxido de carbono (CO₂) y liberan oxígeno puro", "Porque los árboles aumentan la temperatura del suelo"],
              correcta: 1,
              pista: "Son los pulmones del planeta verde.",
              explicacion: "Los árboles absorben grandes cantidades de CO₂ (el principal gas de efecto invernadero), fijando el carbono y purificando el aire con oxígeno."
            },
            {
              pregunta: "Astronómicamente, el Sol es clasificado como:",
              opciones: ["Un planeta gigante gaseoso", "Una estrella que se ubica en el centro de nuestro sistema planetario", "Un satélite natural de la Tierra"],
              correcta: 1,
              pista: "Tiene luz y calor propios.",
              explicacion: "El Sol es una estrella de tipo espectral medio que concentra la mayor parte de la masa del Sistema Solar."
            },
            {
              pregunta: "¿Alrededor de qué cuerpo celeste giran los planetas del Sistema Solar?",
              opciones: ["Alrededor de la Luna", "Alrededor del Sol", "Alrededor del cometa Halley"],
              correcta: 1,
              pista: "Giran alrededor de la estrella central.",
              explicacion: "Los ocho planetas principales describen órbitas elípticas continuas alrededor del Sol, atraídos por su enorme fuerza de gravedad."
            },
            {
              pregunta: "¿Cuál es la diferencia principal entre una ESTRELLA y un PLANETA?",
              opciones: ["La estrella emite luz y calor propios; el planeta no tiene luz propia y refleja la luz estelar", "Los planetas son siempre diez veces más calientes que las estrellas", "Las estrellas están hechas de agua y los planetas de gas"],
              correcta: 0,
              pista: "Una genera su propio brillo por fusión nuclear; el otro es como un espejo.",
              explicacion: "Las estrellas producen su propia radiación luminosa y calórica mediante reacciones nucleares; los planetas son cuerpos fríos que solo reflejan la luz de su estrella."
            },
            {
              pregunta: "¿Por qué vemos brillar a planetas como Venus o Marte en el cielo nocturno si no tienen luz propia?",
              opciones: ["Porque tienen lámparas gigantes", "Porque reflejan la luz que les llega desde el Sol", "Porque están prendidos fuego"],
              correcta: 1,
              pista: "La luz del Sol rebota en su superficie hacia nuestros ojos.",
              explicacion: "Los planetas y las lunas no emiten luz propia; los vemos iluminados porque sus atmósferas y superficies actúan como reflectores de la luz solar."
            },
            {
              pregunta: "Mercurio y Saturno giran alrededor del Sol. Sabiendo que Saturno está mucho más lejos, ¿cuál tardará MÁS TIEMPO en dar una vuelta completa?",
              opciones: ["Mercurio, porque es muy veloz", "Saturno, porque recorre una órbita gigantesca y mucho más extensa", "Tardan exactamente los mismos días"],
              correcta: 1,
              pista: "Cuanto más lejos está el planeta, más largo es su camino (su año).",
              explicacion: "Al estar más distante del Sol, la órbita de Saturno es mucho mayor, tardando casi 30 años terrestres en completar una vuelta (mientras que Mercurio tarda solo 88 días)."
            },
            {
              pregunta: "El camino o trayectoria curva que recorre un planeta alrededor del Sol se denomina:",
              opciones: ["Órbita", "Vía de escape", "Línea del ecuador"],
              correcta: 0,
              pista: "Empieza con O y es casi circular o elíptica.",
              explicacion: "La órbita es la trayectoria gravitatoria que describe un cuerpo en el espacio alrededor de otro de mayor masa."
            },
            {
              pregunta: "El movimiento que realiza un planeta al girar ALREDEDOR DEL SOL se conoce como:",
              opciones: ["Movimiento de Rotación", "Movimiento de Traslación", "Movimiento de Inclinación"],
              correcta: 1,
              pista: "Marca la duración del año en ese planeta.",
              explicacion: "La traslación es el giro que efectúa el planeta alrededor del Sol y determina la duración del año planetario."
            },
            {
              pregunta: "¿Qué planeta tarda MENOS tiempo en completar una traslación alrededor del Sol en nuestro sistema?",
              opciones: ["Neptuno", "Mercurio", "Júpiter"],
              correcta: 1,
              pista: "Es el planeta más cercano a la estrella madre.",
              explicacion: "Mercurio es el planeta más próximo al Sol, por lo que su órbita es la más corta de todas y tarda apenas 88 días terrestres en completarla."
            },
            {
              pregunta: "La Tierra tarda aproximadamente 365 días en dar una vuelta al Sol. Si un planeta estuviera más cerca del Sol que la Tierra, su año sería:",
              opciones: ["Más largo que 365 días", "Más corto que 365 días", "De 1000 días"],
              correcta: 1,
              pista: "Menor distancia significa una pista de carrera más corta.",
              explicacion: "Al tener una órbita de menor radio, los planetas interiores (como Mercurio y Venus) recorren una trayectoria más corta y completan su año en menos tiempo que la Tierra."
            },
            {
              pregunta: "En la evaluación 'Misión: Nova Terra', el equipo científico entrena sobre el calor, la atmósfera y el Sistema Solar porque:",
              opciones: ["Para colonizar y entender las condiciones de un nuevo mundo se debe comprender la energía, los gases vitales y la dinámica de las estrellas", "Para aprender a pintar naves espaciales de color rojo", "Solo para memorizar nombres de rocas"],
              correcta: 0,
              pista: "La ciencia ayuda a explorar el universo y cuidar la vida.",
              explicacion: "El conocimiento de los materiales, la transferencia de calor, las funciones de la atmósfera y el comportamiento orbital es la base científica fundamental para la vida y la exploración espacial."
            }
          ]
        },
        "Q3": {
          // 1. GUÍA DE APRENDIZAJE INTERACTIVA - PUBERTAD Y REPRODUCCIÓN (7 Lecciones)
          guia: [
            {
              titulo: "Pubertad y Adolescencia: Cambios Físicos y Emocionales",
              texto: "La <b>Pubertad</b> es la etapa biológica del crecimiento en la que el cuerpo del niño o niña madura sexualmente y adquiere la capacidad biológica de reproducirse. Ocurre habitualmente entre los <b>9 y 13 años</b>, pero no todas las personas la viven a la misma edad.<br><br>La pubertad forma parte de la <b>Adolescencia</b>, que es una etapa mucho más amplia que involucra profundas transformaciones físicas, psicológicas y sociales, orientadas a la búsqueda de la propia identidad.<br><br><b>Cambios Físicos en la Pubertad:</b><br>- Aceleración del crecimiento en estatura (el 'estirón').<br>- Aparición de vello en la zona púbica y en las axilas.<br>- Mayor actividad de las glándulas sebáceas y sudoríparas (más sudor y posible aparición de acné/espinillas).<br>- En las mujeres: desarrollo de las mamas, ensanchamiento de caderas y aparición de la primera menstruación (<b>menarca</b>).<br>- En los varones: ensanchamiento de hombros, cambio en el tono de voz (se vuelve más grave) y crecimiento del pene y los testículos.<br><br><b>Cambios Emocionales y Sociales:</b> Cambios frecuentes de humor, mayor sensibilidad, necesidad de mayor privacidad e independencia respecto a los adultos, y un creciente interés por pertenecer a grupos de pares y forjar nuevas amistades.<br><br><i>Para recordar: Cada persona experimenta estos cambios a su propio ritmo. ¡Todos los ritmos son normales y completamente válidos!</i>",
              resumen_corto: "La pubertad es la maduración física y sexual dentro de la adolescencia. Incluye cambios corporales, emocionales y de identidad.",
              preguntaValidacion: {
                q: "¿Qué define científicamente a la pubertad?",
                a: ["Una etapa en la que el cuerpo madura físicamente y se vuelve biológicamente capaz de reproducirse", "El momento exacto en el que una persona termina la escuela secundaria", "Un cambio exclusivo que solo experimentan los varones a los 18 años"],
                c: 0
              }
            },
            {
              titulo: "Las Hormonas Sexuales y sus Funciones",
              texto: "Los cambios físicos y reproductivos que experimentamos durante la pubertad están coordinados por las <b>Hormonas Sexuales</b>, que son mensajeros químicos transportados por la sangre y producidos principalmente en los órganos sexuales (gónadas).<br><br><b>Las Principales Hormonas Sexuales:</b><br><br>1. <b>Testosterona:</b> Es la principal hormona sexual masculina. Se produce en los <b>testículos</b> y es responsable de la producción de espermatozoides, del cambio hacia una voz más grave, del ensanchamiento de hombros y del crecimiento de vello corporal y facial.<br><br>2. <b>Estrógenos:</b> Hormonas sexuales femeninas producidas en los <b>ovarios</b>. Regulan el desarrollo de las mamas, el ensanchamiento de la pelvis y preparan el sistema reproductor para el ciclo menstrual.<br><br>3. <b>Progesterona:</b> Hormona femenina producida en los <b>ovarios</b>. Su función clave es preparar y mantener la pared interna del útero (el endometrio) para permitir la anidación del óvulo fecundado durante el embarazo.<br><br><i>Dato clave: El cerebro (a través de la hipófisis) envía las señales químicas iniciales que despiertan a los ovarios y testículos para comenzar la pubertad.</i>",
              resumen_corto: "Las hormonas sexuales son mensajeros químicos: la testosterona en varones (testículos), y los estrógenos y progesterona en mujeres (ovarios).",
              preguntaValidacion: {
                q: "¿Dónde se produce la testosterona y cuál es una de sus funciones principales?",
                a: ["En los ovarios, regulando el ciclo menstrual", "En los testículos, promoviendo los cambios corporales masculinos y la formación de espermatozoides", "En el estómago, facilitando la digestión de alimentos"],
                c: 1
              }
            },
            {
              titulo: "El Sistema Reproductor Masculino",
              texto: "El <b>Sistema Reproductor Masculino</b> está adaptado biológicamente para la producción y transporte de los gametos masculinos.<br><br><b>Órganos y Estructuras Principales:</b><br><br>1. <b>Testículos:</b> Son dos órganos ubicados dentro de una bolsa protectora de piel llamada escroto. Tienen dos funciones primordiales: producir los <b>espermatozoides</b> y sintetizar la hormona <b>testosterona</b>.<br><br>2. <b>Conductos Deferentes:</b> Son dos finos tubos musculares que conectan los testículos con la uretra, transportando los espermatozoides hacia el exterior.<br><br>3. <b>Próstata y Vesículas Seminales:</b> Glándulas que aportan líquidos seminales ricos en sustancias nutritivas. Este líquido, al combinarse con los espermatozoides, conforma el <b>semen</b>, protegiéndolos y facilitando su desplazamiento.<br><br>4. <b>Uretra:</b> Conducto que atraviesa el pene. En los varones cumple una doble función compartida con el sistema urinario: permite la salida de la orina y la expulsión del semen (eyaculación), aunque jamás ocurren al mismo tiempo.<br><br>5. <b>Pene:</b> Órgano eréctil externo que permite depositar los espermatozoides en el interior del sistema reproductor femenino durante la reproducción.<br><br><i>Recuerda: Los espermatozoides necesitan una temperatura ligeramente inferior a la del interior del cuerpo (unos 35°C), motivo por el cual los testículos se alojan en el escroto fuera de la cavidad abdominal.</i>",
              resumen_corto: "Los testículos producen espermatozoides y testosterona. Los conductos deferentes los transportan y la próstata aporta el líquido seminal hacia la uretra.",
              preguntaValidacion: {
                q: "¿Qué órganos masculinos son los encargados de producir los espermatozoides y la testosterona?",
                a: ["La próstata y la vejiga", "Los testículos", "Los conductos deferentes exclusivamente"],
                c: 1
              }
            },
            {
              titulo: "El Sistema Reproductor Femenino",
              texto: "El <b>Sistema Reproductor Femenino</b> está ubicado casi en su totalidad en la cavidad pélvica y está especializado en la producción de óvulos y en albergar el desarrollo de un nuevo ser durante la gestación.<br><br><b>Órganos y Estructuras Principales:</b><br><br>1. <b>Ovarios:</b> Son dos glándulas con forma y tamaño de almendra. Producen los <b>óvulos</b> (gametos femeninos) y liberan las hormonas <b>estrógenos y progesterona</b>.<br><br>2. <b>Trompas de Falopio:</b> Dos conductos en forma de embudo que comunican cada ovario con el útero. Su función es capturar y transportar al óvulo liberado. <b>¡Es en las trompas de Falopio donde ocurre la fecundación!</b><br><br>3. <b>Útero (o Matriz):</b> Órgano muscular hueco, elástico y con forma de pera invertida. Su capa interna mucosa y vascularizada se llama <b>endometrio</b>. En el útero se implanta el óvulo fecundado y se desarrolla el embrión y feto durante los 9 meses de embarazo.<br><br>4. <b>Vagina:</b> Canal muscular elástico que conecta el cuello del útero con el exterior. Es el conducto por donde sale el flujo menstrual, el canal natural del parto y el órgano que recibe al semen en la reproducción.<br><br><i>Para el examen: La vulva es la parte visible exterior (labios mayores y menores, clítoris); la vagina es el conducto interno muscular.</i>",
              resumen_corto: "Los ovarios producen óvulos y hormonas. Las trompas de Falopio transportan el óvulo y albergan la fecundación. El útero aloja al embrión.",
              preguntaValidacion: {
                q: "¿En qué órgano del sistema reproductor femenino se produce habitualmente el encuentro y unión del óvulo con el espermatozoide (fecundación)?",
                a: ["En el útero", "En las trompas de Falopio", "En la vagina"],
                c: 1
              }
            },
            {
              titulo: "Los Gametos y el Ciclo Menstrual",
              texto: "Los <b>Gametos</b> son las células sexuales portadoras de la información genética:<br><br>- <b>Óvulo (gameto femenino):</b> Se forma en los ovarios. Es una célula esférica, muy grande (visible casi a simple vista), que almacena nutrientes y <b>no se desplaza por sí misma</b> (es empujada por cilios en las trompas).<br>- <b>Espermatozoide (gameto masculino):</b> Se forma en los testículos. Es sumamente pequeño y posee una cabeza con el material genético y una <b>cola larga o flagelo</b> que le permite nadar con gran movilidad.<br><br><b>El Ciclo Menstrual Femenino:</b><br>Es un proceso cíclico y coordinado que dura en promedio <b>28 días</b> (pudiendo variar normalmente entre 21 y 35 días):<br><br>1. <b>Menstruación (Días 1 al 5):</b> Si el óvulo no fue fecundado, el endometrio (tejido que recubría el útero) se desprende y se expulsa al exterior junto con un sangrado a través de la vagina. Suele durar entre 3 y 7 días.<br>2. <b>Fase Folicular (Días 6 al 13):</b> El ovario madura un nuevo óvulo mientras el endometrio del útero vuelve a engrosarse.<br>3. <b>Ovulación (Alrededor del Día 14):</b> El ovario libera el óvulo maduro hacia la trompa de Falopio. Son los días de mayor fertilidad.<br>4. <b>Fase Lútea (Días 15 al 28):</b> El endometrio se mantiene grueso y esponjoso esperando un posible embrión. Si no hay fecundación, el ciclo recomienza con una nueva menstruación.",
              resumen_corto: "El óvulo es grande e inmóvil; el espermatozoide tiene cola para nadar. El ciclo menstrual dura unos 28 días e incluye menstruación y ovulación.",
              preguntaValidacion: {
                q: "¿Qué ocurre durante la fase de ovulación en el ciclo menstrual femenino (alrededor del día 14)?",
                a: ["Se desprende el endometrio produciendo un sangrado", "El ovario libera un óvulo maduro hacia la trompa de Falopio", "Los espermatozoides viajan hacia los riñones"],
                c: 1
              }
            },
            {
              titulo: "Fecundación, Embarazo y Parto",
              texto: "La reproducción humana implica una secuencia precisa de etapas de desarrollo:<br><br>1. <b>Fecundación:</b> Es la unión del espermatozoide con el óvulo en el tercio superior de las <b>trompas de Falopio</b>. De la fusión de sus núcleos surge la primera célula del nuevo individuo: el <b>Cigoto</b>.<br><br>2. <b>Implantación:</b> El cigoto comienza a dividirse rápidamente en 2, 4, 8 células mientras viaja hacia el útero. Hacia el día 6-7, se implanta en la pared del <b>endometrio</b>.<br><br>3. <b>Desarrollo Embrionario y Fetal:</b><br>- <b>Embrión:</b> Nombre que recibe el futuro bebé durante las primeras 8 semanas (primeros dos meses), etapa en la que se forman todos los órganos vitales y sistemas principales.<br>- <b>Feto:</b> A partir del <b>tercer mes</b> y hasta el nacimiento, pasa a llamarse feto. En esta fase sus órganos maduran, crece en tamaño y peso y comienza a moverse con vigor.<br><br>4. <b>Estructuras de Soporte:</b><br>- <b>Placenta:</b> Órgano esponjoso temporal que permite el intercambio de oxígeno y nutrientes entre la sangre de la madre y del bebé sin mezclarse.<br>- <b>Cordón Umbilical:</b> Conducto que conecta al feto con la placenta.<br>- <b>Líquido Amniótico:</b> Protege al feto amortiguando golpes y manteniendo una temperatura constante.<br><br>5. <b>Parto:</b> Tras aproximadamente <b>9 meses (40 semanas)</b> de gestación, las contracciones del útero empujan al bebé hacia el exterior a través del canal de parto (la vagina).",
              resumen_corto: "La fecundación en las trompas crea el cigoto, que se implanta en el útero. Es embrión hasta la 8va semana y luego feto hasta el parto a los 9 meses.",
              preguntaValidacion: {
                q: "¿A partir de qué momento del desarrollo intrauterino el futuro bebé pasa a denominarse científicamente 'Feto'?",
                a: ["Desde el primer día de fecundación", "A partir del tercer mes de gestación hasta el nacimiento", "Únicamente después de haber nacido"],
                c: 1
              }
            },
            {
              titulo: "Salud Sexual, Prevención de ITS y Cuidado del Cuerpo",
              texto: "El cuidado de nuestra salud y el respeto por nuestro cuerpo y el de los demás son pilares fundamentales del crecimiento.<br><br><b>¿Qué son las Infecciones de Transmisión Sexual (ITS)?</b><br>Son infecciones causadas por virus, bacterias o parásitos que se transmiten principalmente a través de relaciones sexuales sin protección. Algunos ejemplos son el <b>VIH</b> (virus de inmunodeficiencia humana), el <b>VPH</b> (virus del papiloma humano), la <b>sífilis</b>, la <b>gonorrea</b> y el <b>herpes genital</b>.<br><br><b>Métodos de Prevención Eficaces:</b><br>1. <b>El Preservativo (o Profiláctico):</b> Es una funda de látex que actúa como una barrera física infranqueable. <b>Es el único método que previene al mismo tiempo las ITS y los embarazos no planificados.</b><br>2. <b>Vacunación Preventiva:</b> En Argentina, el calendario nacional incluye la vacuna gratuita y obligatoria contra el <b>VPH a los 11 años</b> (tanto para mujeres como para varones), previniendo tipos de virus asociados a ciertos cánceres en la adultez.<br>3. <b>Controles Médicos Periódicos:</b> Consultar al médico ante cualquier molestia, lesión o secreción inusual.<br><br><b>Cuidado Integral y Respeto:</b> Conocer cómo funciona nuestro cuerpo nos empodera para cuidarlo mejor, mantener hábitos diarios de higiene personal, respetarnos a nosotros mismos y a nuestros compañeros, y acudir siempre a personas adultas de confianza (familia, docentes, médicos) ante cualquier duda.",
              resumen_corto: "Las ITS se previenen usando preservativo (único método de barrera dual) y con vacunas como la del VPH a los 11 años. Cuidar el cuerpo es respetarse.",
              preguntaValidacion: {
                q: "¿Cuál es el único método que previene de manera simultánea tanto las Infecciones de Transmisión Sexual (ITS) como los embarazos no planificados?",
                a: ["El lavado con agua y jabón", "El uso correcto del preservativo (profiláctico)", "Tomar vitaminas antes de dormir"],
                c: 1
              }
            }
          ],

          // 2. GLOSARIO CONCEPTUAL Y TARJETAS FLASHCARD (30 Términos)
          glosario: [
            { termino: "Pubertad", def: "Etapa de la vida caracterizada por la maduración biológica de los órganos sexuales y el desarrollo de la capacidad reproductiva." },
            { termino: "Adolescencia", def: "Período más amplio del desarrollo humano que abarca la pubertad, con cambios físicos, psicológicos, emocionales y búsqueda de identidad." },
            { termino: "Hormonas Sexuales", def: "Sustancias químicas producidas por las gónadas que regulan los cambios de la pubertad y el funcionamiento del sistema reproductor." },
            { termino: "Testosterona", def: "Principal hormona sexual masculina producida en los testículos; estimula la producción de espermatozoides y caracteres sexuales masculinos." },
            { termino: "Estrógenos", def: "Hormonas sexuales femeninas producidas en los ovarios; responsables del desarrollo de mamas, caderas y del ciclo menstrual." },
            { termino: "Progesterona", def: "Hormona sexual femenina producida en los ovarios que acondiciona y mantiene el endometrio para una posible gestación." },
            { termino: "Testículos", def: "Gónadas masculinas alojadas en el escroto encargadas de producir espermatozoides y secretar la hormona testosterona." },
            { termino: "Ovarios", def: "Gónadas femeninas ubicadas en la pelvis encargadas de madurar los óvulos y producir estrógenos y progesterona." },
            { termino: "Conductos Deferentes", def: "Tubos musculares que transportan a los espermatozoides desde los testículos hacia la uretra." },
            { termino: "Próstata", def: "Glándula masculina que produce un líquido blanquecino y nutritivo que se mezcla con los espermatozoides para formar el semen." },
            { termino: "Uretra", def: "Conducto que permite la evacuación de la orina en ambos sexos y, en los varones, también la salida del semen durante la eyaculación." },
            { termino: "Trompas de Falopio", def: "Conductos musculares que conectan los ovarios con el útero; en ellos ocurre habitualmente el proceso de fecundación." },
            { termino: "Útero", def: "Órgano muscular hueco femenino donde se implanta el embrión y se desarrolla el feto durante los 9 meses de gestación." },
            { termino: "Endometrio", def: "Capa mucosa interna del útero ricamente vascularizada que se engrosa cada mes y se desprende en la menstruación si no hay embarazo." },
            { termino: "Vagina", def: "Conducto muscular elástico femenino que comunica el útero con el exterior; es el canal de parto y de salida de la menstruación." },
            { termino: "Gameto", def: "Célula reproductora especializada (óvulo en la mujer, espermatozoide en el varón) que contiene la mitad de la información genética." },
            { termino: "Óvulo", def: "Gameto femenino; célula grande, esférica e inmóvil producida por los ovarios que aporta la mitad del material genético." },
            { termino: "Espermatozoide", def: "Gameto masculino; célula pequeña y móvil con cabeza y flagelo (cola) producida en los testículos." },
            { termino: "Menarca", def: "Primera menstruación en la vida de una mujer, que marca el inicio de sus ciclos ovulatorios y menstruales en la pubertad." },
            { termino: "Menstruación", def: "Sangrado periódico femenino originado por la descamación y expulsión del endometrio uterino cuando no hubo fecundación." },
            { termino: "Ciclo Menstrual", def: "Proceso hormonal y biológico cíclico que dura en promedio 28 días y prepara al cuerpo femenino para un posible embarazo." },
            { termino: "Ovulación", def: "Momento del ciclo menstrual (hacia el día 14) en que el ovario libera un óvulo maduro hacia la trompa de Falopio." },
            { termino: "Fecundación", def: "Unión del espermatozoide y el óvulo en la trompa de Falopio para originar la primera célula del nuevo ser (el cigoto)." },
            { termino: "Cigoto", def: "Célula inicial resultante de la fecundación que posee la dotación genética completa de ambos progenitores." },
            { termino: "Embrión", def: "Etapa inicial del desarrollo intrauterino que se extiende desde la implantación hasta la octava semana de gestación." },
            { termino: "Feto", def: "Denominación del futuro bebé en gestación a partir del tercer mes de embarazo y hasta el momento del parto." },
            { termino: "Placenta", def: "Órgano temporal formado durante el embarazo que suministra oxígeno y nutrientes de la madre al feto y elimina desechos." },
            { termino: "Cordón Umbilical", def: "Estructura tubular con vasos sanguíneos que conecta el ombligo del feto con la placenta materna." },
            { termino: "Infecciones de Transmisión Sexual (ITS)", def: "Enfermedades infecciosas causadas por virus, bacterias o parásitos transmitidas principalmente por contacto sexual sin protección." },
            { termino: "Preservativo", def: "Método de barrera elástica de látex que previene simultáneamente la transmisión de ITS y los embarazos no planificados." }
          ],

          // 3. BANCO DE SIMULACROS Y DESAFÍOS ARCADE (70 Preguntas por Ejes Temáticos)
          simulacro: [
            {
              pregunta: "¿Qué es la pubertad según las Ciencias Naturales?",
              opciones: ["Una enfermedad transitoria que afecta a niños pequeños", "La etapa de la vida en la que el cuerpo madura físicamente y se vuelve capaz de reproducirse", "El momento exacto en que una persona empieza la universidad"],
              correcta: 1,
              pista: "Implica la maduración de los órganos reproductivos.",
              explicacion: "La pubertad es la fase del desarrollo en la que los caracteres sexuales y los órganos reproductores maduran biológicamente."
            },
            {
              pregunta: "¿A qué edades suele comenzar habitualmente la pubertad?",
              opciones: ["Entre los 2 y 5 años", "En general entre los 9 y 13 años, según cada persona", "Exactamente a los 18 años en todos los seres humanos"],
              correcta: 1,
              pista: "Comienza al final de la niñez y marca el inicio de la adolescencia.",
              explicacion: "El inicio de la pubertad varía entre los 9 y 13 años dependiendo de factores genéticos, hormonales y ambientales de cada individuo."
            },
            {
              pregunta: "¿Cuál de los siguientes es un cambio físico característico de la pubertad exclusivo de las mujeres?",
              opciones: ["El ensanchamiento de la espalda", "El desarrollo de las mamas y la primera menstruación (menarca)", "El engrosamiento brusco de la voz"],
              correcta: 1,
              pista: "Ocurre en el pecho y en el sistema reproductor femenino.",
              explicacion: "El crecimiento de las mamas y la llegada de la menarca son caracteres sexuales secundarios propios del desarrollo femenino."
            },
            {
              pregunta: "¿Cuál de los siguientes cambios físicos de la pubertad ocurre típicamente en los varones?",
              opciones: ["Desarrollo de mamas prominentes", "Cambio en el tono de la voz, volviéndose más grave", "Aparición de la menarca"],
              correcta: 1,
              pista: "La laringe crece y la voz cambia de timbre.",
              explicacion: "El crecimiento de la laringe por acción de la testosterona provoca que la voz de los varones se torne más grave."
            },
            {
              pregunta: "¿Qué cambio físico es COMÚN tanto a varones como a mujeres durante la pubertad?",
              opciones: ["Aparición de vello en axilas y zona púbica, y mayor producción de sudor", "La menstruación mensual", "La producción de esperma"],
              correcta: 0,
              pista: "Ocurre en la piel y vello de ambos sexos.",
              explicacion: "Tanto chicos como chicas experimentan el estirón de estatura, vello corporal en axilas y pubis, y mayor actividad en las glándulas sudoríparas y sebáceas."
            },
            {
              pregunta: "¿Qué nombre específico recibe la primera menstruación que tiene una mujer en la pubertad?",
              opciones: ["Menopausia", "Menarca", "Ovulación tardía"],
              correcta: 1,
              pista: "Empieza con M y termina con 'arca'.",
              explicacion: "La menarca es la primera hemorragia menstrual de una niña y señala el comienzo de sus ciclos ovulatorios y menstruales."
            },
            {
              pregunta: "Además de cambios físicos, ¿qué transformaciones emocionales y sociales son frecuentes en la pubertad y adolescencia?",
              opciones: ["Pérdida de la memoria de la infancia", "Mayor sensibilidad, cambios de humor, búsqueda de independencia e interés por las amistades", "Deseo de vivir aislado sin hablar con nadie"],
              correcta: 1,
              pista: "Las emociones son más intensas y se busca definir la identidad personal.",
              explicacion: "El torrente hormonal y la maduración neurológica generan fluctuaciones de ánimo, búsqueda de autonomía y mayor apego a los grupos de pares."
            },
            {
              pregunta: "Si un compañero de clase aún no pegó el estirón de crecimiento y otros sí, ¿qué debemos entender?",
              opciones: ["Que tiene una enfermedad grave y nunca crecerá", "Que cada persona vive los cambios de la pubertad a su propio ritmo y todos son válidos", "Que debe tomar medicamentos obligatorios"],
              correcta: 1,
              pista: "El cuerpo de cada persona tiene su propio reloj biológico.",
              explicacion: "El desarrollo no ocurre al mismo tiempo para todos; la diversidad en los tiempos de crecimiento es completamente normal y respetable."
            },
            {
              pregunta: "¿Cómo se relaciona la pubertad con la adolescencia?",
              opciones: ["Son dos cosas que no tienen ninguna relación", "La pubertad es la fase biológica y corporal que forma parte de una etapa más amplia llamada adolescencia", "La adolescencia ocurre antes de nacer y la pubertad a los 40 años"],
              correcta: 1,
              pista: "Una es la maduración física; la otra abarca lo social, mental y psicológico.",
              explicacion: "La pubertad corresponde a los cambios biológicos y reproductivos, integrados dentro del proceso psicosocial más abarcativo de la adolescencia."
            },
            {
              pregunta: "¿Por qué suele aparecer acné o puntos negros en la piel durante la pubertad?",
              opciones: ["Por lavarse la cara con agua fría", "Por un aumento hormonal que estimula a las glándulas sebáceas a producir más grasa", "Porque la piel cambia de color en invierno"],
              correcta: 1,
              pista: "Las glándulas de la piel trabajan con mayor intensidad por las hormonas.",
              explicacion: "Las hormonas sexuales estimulan a las glándulas sebáceas a generar más sebo, que al taponar los poros de la piel puede provocar granitos o acné."
            },
            {
              pregunta: "¿Qué son las hormonas sexuales desde el punto de vista biológico?",
              opciones: ["Vitaminas que se obtienen de las frutas", "Sustancias químicas mensajeras producidas por los órganos sexuales que viajan por la sangre", "Bacterias que viven en el estómago"],
              correcta: 1,
              pista: "Son sustancias que llevan órdenes químicas a todo el cuerpo.",
              explicacion: "Las hormonas sexuales son compuestos químicos producidos por las gónadas que regulan el desarrollo sexual y la reproducción."
            },
            {
              pregunta: "¿Cuál es la principal hormona sexual producida en los testículos de los varones?",
              opciones: ["La insulina", "La testosterona", "La progesterona"],
              correcta: 1,
              pista: "Su nombre empieza con 'testo-', como los testículos.",
              explicacion: "La testosterona es la principal hormona sexual masculina sintetizada por los testículos."
            },
            {
              pregunta: "¿Cuáles son las dos principales hormonas sexuales producidas por los ovarios en las mujeres?",
              opciones: ["Adrenalina y glucagón", "Estrógenos y progesterona", "Testosterona y tiroxina"],
              correcta: 1,
              pista: "Una empieza con E y la otra con P.",
              explicacion: "Los ovarios producen estrógenos (que desarrollan los caracteres secundarios) y progesterona (que acondiciona el útero)."
            },
            {
              pregunta: "¿Qué función primordial cumplen los ESTRÓGENOS en el cuerpo de la mujer?",
              opciones: ["Hacer que la voz sea grave como la de un tenor", "Promover el desarrollo de las mamas, ensanchar la pelvis y regular el ciclo menstrual", "Estimular la producción de espermatozoides"],
              correcta: 1,
              pista: "Fomentan los cambios corporales típicamente femeninos.",
              explicacion: "Los estrógenos estimulan el crecimiento de los órganos reproductores femeninos y la aparición de los caracteres sexuales secundarios."
            },
            {
              pregunta: "¿Cuál es el rol central de la PROGESTERONA durante el ciclo menstrual y el embarazo?",
              opciones: ["Destruir las células del cuerpo", "Mantener grueso y vascularizado el endometrio para acoger al óvulo fecundado", "Producir glóbulos rojos"],
              correcta: 1,
              pista: "Su nombre viene de 'pro-gestación' (a favor de la gestación).",
              explicacion: "La progesterona prepara el tejido interno del útero (endometrio) para que el embrión pueda anidar y nutrirse con éxito."
            },
            {
              pregunta: "¿Qué glándula situada en la base del cerebro envía las señales que activan a las gónadas al inicio de la pubertad?",
              opciones: ["El apéndice", "La hipófisis (glándula pituitaria)", "La vesícula biliar"],
              correcta: 1,
              pista: "Es una pequeña glándula maestra del sistema endocrino en la cabeza.",
              explicacion: "La hipófisis libera gonadotropinas que viajan por la sangre para activar la producción hormonal en ovarios y testículos."
            },
            {
              pregunta: "La testosterona en los varones es indispensable para:",
              opciones: ["La formación y maduración de espermatozoides y el desarrollo muscular y óseo", "La secreción de leche materna", "El crecimiento de las uñas de los pies únicamente"],
              correcta: 0,
              pista: "Permite producir gametos masculinos y aumenta la masa muscular.",
              explicacion: "La testosterona regula la espermatogénesis (creación de espermatozoides) e impulsa el desarrollo de fuerza y masa muscular en el varón."
            },
            {
              pregunta: "Durante la infancia, ¿las hormonas sexuales se encuentran en los mismos niveles que en la pubertad?",
              opciones: ["Sí, están exactamente iguales desde el nacimiento", "No, en la infancia se mantienen en niveles muy bajos y aumentan notablemente al iniciar la pubertad", "En la infancia hay el triple de hormonas que en la adultez"],
              correcta: 1,
              pista: "El cuerpo 'despierta' la producción hormonal a partir de los 9-11 años.",
              explicacion: "Durante la niñez la concentración de hormonas sexuales es muy reducida; el incremento drástico ocurre con el inicio de la pubertad."
            },
            {
              pregunta: "Si un análisis biológico detecta altos niveles de progesterona en una persona, podemos deducir que:",
              opciones: ["Se trata de una mujer en su fase lútea o cursando un embarazo", "Es un varón recién nacido", "Es una persona con falta de hierro"],
              correcta: 0,
              pista: "Es la hormona femenina producida tras la ovulación en los ovarios.",
              explicacion: "La progesterona se eleva en la segunda mitad del ciclo femenino tras ovular y se mantiene alta durante el embarazo."
            },
            {
              pregunta: "Tanto en varones como en mujeres, las hormonas sexuales actúan transportándose a través de:",
              opciones: ["El aire que respiran", "El torrente sanguíneo", "Los músculos del brazo"],
              correcta: 1,
              pista: "El sistema circulatorio reparte los mensajeros químicos.",
              explicacion: "Todas las hormonas son secretadas al sistema circulatorio, que las transporta a través de la sangre hacia sus órganos diana."
            },
            {
              pregunta: "¿Cuáles son los dos órganos masculinos alojados en el escroto que producen espermatozoides?",
              opciones: ["Los riñones", "Los testículos", "Las vesículas seminales"],
              correcta: 1,
              pista: "Son las gónadas masculinas.",
              explicacion: "Los testículos son los órganos encargados de fabricar millones de espermatozoides de forma continua a partir de la pubertad."
            },
            {
              pregunta: "¿Por qué los testículos se encuentran ubicados fuera del abdomen en una bolsa llamada escroto?",
              opciones: ["Para estar más expuestos a los golpes", "Para mantenerse a una temperatura unos 2°C a 3°C inferior a la del cuerpo, necesaria para los espermatozoides", "Para no tocar los huesos de la cadera"],
              correcta: 1,
              pista: "La temperatura normal de 37°C dañaría a los espermatozoides.",
              explicacion: "La espermatogénesis requiere una temperatura de alrededor de 34°C a 35°C; el escroto regula esa temperatura adecuada."
            },
            {
              pregunta: "¿Qué función cumplen los 'Conductos Deferentes' en el aparato reproductor masculino?",
              opciones: ["Fabricar orina para los riñones", "Transportar a los espermatozoides desde los testículos hacia la uretra", "Producir hormonas femeninas"],
              correcta: 1,
              pista: "Son los tubos o canales por donde viajan las células sexuales.",
              explicacion: "Los conductos deferentes son tubos musculares que conducen a los espermatozoides desde el epidídimo hasta la uretra."
            },
            {
              pregunta: "¿Qué aporta la 'Próstata' al sistema reproductor masculino?",
              opciones: ["Produce los óvulos", "Aporta un líquido alcalino y nutritivo que protege a los espermatozoides y forma el semen", "Filtra la sangre como un riñón"],
              correcta: 1,
              pista: "Produce el líquido seminal que baña a los espermatozoides.",
              explicacion: "La próstata secreta el líquido seminal, que neutraliza la acidez de la uretra y vagina y nutre a los espermatozoides."
            },
            {
              pregunta: "¿Qué es el 'Semen'?",
              opciones: ["Orina concentrada", "La mezcla de espermatozoides y los líquidos producidos por la próstata y vesículas seminales", "Un tipo de sudor corporal"],
              correcta: 1,
              pista: "Es el fluido blanquecino expulsado durante la eyaculación.",
              explicacion: "El semen es el fluido compuesto por los espermatozoides suspendidos en los líquidos glandulares de la próstata y vesículas."
            },
            {
              pregunta: "¿Qué particularidad tiene la URETRA en el sistema del varón?",
              opciones: ["Solo sirve para digerir la comida", "Es un conducto compartido por el que salen tanto la orina como el semen (en momentos distintos)", "No conecta con ningún otro órgano"],
              correcta: 1,
              pista: "Forma parte del sistema urinario y del sistema reproductor.",
              explicacion: "La uretra masculina transporta tanto orina desde la vejiga como semen en la eyaculación, mediante un esfínter que impide que se mezclen."
            },
            {
              pregunta: "¿Cómo se llama el proceso de expulsión del semen a través de la uretra hacia el exterior?",
              opciones: ["Menstruación", "Eyaculación", "Ovulación"],
              correcta: 1,
              pista: "Empieza con la letra E.",
              explicacion: "La eyaculación es la liberación refleja del semen hacia el exterior a través del pene."
            },
            {
              pregunta: "¿En qué parte del espermatozoide se localiza la información genética que se transmitirá al futuro hijo?",
              opciones: ["En la cola o flagelo", "En la cabeza del espermatozoide (en su núcleo)", "En la piel de las piernas"],
              correcta: 1,
              pista: "La cola es solo un motor; los genes están en la cabeza.",
              explicacion: "El núcleo celular, que contiene los 23 cromosomas del padre, se ubica en la cabeza del espermatozoide."
            },
            {
              pregunta: "¿Cuál es la función del flagelo (la 'cola') en el espermatozoide?",
              opciones: ["Almacenar comida para dos años", "Brindarle movilidad para nadar hacia el óvulo a través del útero y las trompas", "Protegerlo de la luz del sol"],
              correcta: 1,
              pista: "Se mueve como una hélice para impulsarlo.",
              explicacion: "El flagelo se mueve velozmente con energía celular para permitir que el espermatozoide se desplace en busca del óvulo."
            },
            {
              pregunta: "¿Qué órgano muscular externo contiene a la uretra en el varón y permite depositar los gametos?",
              opciones: ["El pene", "El estómago", "El hígado"],
              correcta: 0,
              pista: "Es el órgano copulador masculino.",
              explicacion: "El pene es el órgano cilíndrico que alberga la uretra y permite depositar los espermatozoides en la vagina."
            },
            {
              pregunta: "¿Cuáles son los dos órganos femeninos con forma de almendra donde se producen y maduran los óvulos?",
              opciones: ["Las trompas de Falopio", "Los ovarios", "Los riñones"],
              correcta: 1,
              pista: "Son las gónadas femeninas.",
              explicacion: "Los ovarios son las glándulas sexuales femeninas donde se almacenan y maduran los óvulos."
            },
            {
              pregunta: "¿Qué conductos reciben al óvulo liberado por el ovario y son el lugar donde ocurre la FECUNDACIÓN?",
              opciones: ["Las Trompas de Falopio", "La uretra", "Los conductos deferentes"],
              correcta: 0,
              pista: "Llevan el nombre del anatomista italiano Falopio.",
              explicacion: "Las trompas de Falopio conectan los ovarios con el útero y en su interior se produce el encuentro y unión con el espermatozoide."
            },
            {
              pregunta: "¿Qué es el ÚTERO y cuál es su función biológica principal?",
              opciones: ["Un conducto delgado por donde sale la orina", "Un órgano muscular hueco y elástico donde se implanta y desarrolla el bebé durante el embarazo", "Una glándula que produce saliva"],
              correcta: 1,
              pista: "También se lo conoce popularmente como matriz.",
              explicacion: "El útero es el órgano que aloja, protege y nutre al embrión y feto a lo largo de los 9 meses de gestación."
            },
            {
              pregunta: "¿Cómo se llama la capa interna del útero que se engrosa cada mes con sangre y nutrientes?",
              opciones: ["Placenta", "Endometrio", "Cordón umbilical"],
              correcta: 1,
              pista: "Empieza con 'Endo-' (que significa interno).",
              explicacion: "El endometrio es el tejido mucoso interno del útero que se prepara mensualmente para recibir al óvulo fecundado."
            },
            {
              pregunta: "¿Qué le ocurre al endometrio si el óvulo NO es fecundado por ningún espermatozoide?",
              opciones: ["Se convierte en hueso", "Se desprende y se expulsa al exterior provocando la menstruación", "Se queda fijo para siempre"],
              correcta: 1,
              pista: "Origina el sangrado menstrual periódico.",
              explicacion: "Al no haber embarazo, los niveles hormonales bajan, el endometrio se descama y es eliminado a través de la vagina como menstruación."
            },
            {
              pregunta: "¿Qué es la VAGINA en el sistema reproductor femenino?",
              opciones: ["El lugar donde se fabrican los óvulos", "Un canal muscular elástico que comunica el cuello del útero con el exterior", "La parte externa visible con vello"],
              correcta: 1,
              pista: "Es el conducto interno por donde sale la menstruación y nace el bebé.",
              explicacion: "La vagina es el conducto tubular muscular que conecta el útero con la vulva exterior; canal de parto y de menstruación."
            },
            {
              pregunta: "¿Tienen las mujeres un conducto exclusivo para orinar independiente de la vagina?",
              opciones: ["No, la mujer orina por la vagina al igual que el varón", "Sí, la mujer tiene un orificio uretral separado exclusivo para la orina", "La mujer no tiene uretra"],
              correcta: 1,
              pista: "A diferencia del varón, el sistema urinario femenino está separado del reproductor.",
              explicacion: "En las mujeres, la uretra tiene un orificio independiente ubicado por encima de la entrada de la vagina, dedicado solo a la orina."
            },
            {
              pregunta: "¿Qué nombre recibe el conjunto de órganos genitales externos visibles de la mujer?",
              opciones: ["Útero", "Vulva", "Ovario"],
              correcta: 1,
              pista: "Incluye los labios mayores, menores y el clítoris.",
              explicacion: "La vulva comprende las estructuras anatómicas exteriores femeninas que rodean y protegen la entrada de la vagina y la uretra."
            },
            {
              pregunta: "¿Cuántos ovarios y cuántas trompas de Falopio tiene el sistema reproductor femenino normalmente?",
              opciones: ["Uno de cada uno", "Dos ovarios y dos trompas de Falopio (uno a cada lado del útero)", "Cuatro de cada uno"],
              correcta: 1,
              pista: "Son órganos pares ubicados a izquierda y derecha.",
              explicacion: "El aparato reproductor femenino posee dos ovarios bilaterales y dos trompas de Falopio que desembocan en el útero central."
            },
            {
              pregunta: "¿Qué estructura empuja suavemente al óvulo para que viaje a través de las trompas de Falopio?",
              opciones: ["Su propia cola natatoria", "Diminutas vellosidades o cilios microscópicos en la pared de la trompa", "La fuerza de gravedad del suelo"],
              correcta: 1,
              pista: "Como el óvulo no tiene cola, la trompa lo barre con pequeños pelitos.",
              explicacion: "La mucosa interna de las trompas cuenta con células con cilios que generan corrientes para desplazar al óvulo hacia el útero."
            },
            {
              pregunta: "Al comparar el ÓVULO con el ESPERMATOZOIDE, ¿cuál es la principal diferencia de movilidad?",
              opciones: ["Ambos nadan a gran velocidad con flagelo", "El óvulo es inmóvil y grande; el espermatozoide es pequeño y tiene cola para desplazarse", "El óvulo tiene dos colas y el espermatozoide no tiene ninguna"],
              correcta: 1,
              pista: "Uno espera en la trompa y el otro nada millones de micrómetros.",
              explicacion: "El óvulo no posee estructuras de locomoción propia, mientras que el espermatozoide está provisto de un largo flagelo natatorio."
            },
            {
              pregunta: "¿Cuánto dura en promedio el ciclo menstrual en una mujer sana?",
              opciones: ["Exactamente 10 días", "Aproximadamente 28 días (pudiendo variar entre 21 y 35 días)", "Un año completo"],
              correcta: 1,
              pista: "Dura casi cuatro semanas, similar al ciclo lunar.",
              explicacion: "El promedio del ciclo menstrual es de 28 días, considerándose normales los ciclos regulares de entre 21 y 35 días."
            },
            {
              pregunta: "¿En qué consiste la fase de la 'Menstruación' (días 1 al 5 del ciclo)?",
              opciones: ["En la liberación de un óvulo por el ovario", "En el desprendimiento y expulsión del endometrio con sangrado a través de la vagina", "En la unión de los gametos"],
              correcta: 1,
              pista: "Marca el primer día del ciclo mensual.",
              explicacion: "La menstruación es la expulsión del tejido endometrial que se había preparado para un embarazo que finalmente no ocurrió."
            },
            {
              pregunta: "¿Qué ocurre aproximadamente alrededor del DÍA 14 de un ciclo menstrual regular de 28 días?",
              opciones: ["La menarca", "La ovulación (liberación del óvulo maduro desde el ovario)", "El parto"],
              correcta: 1,
              pista: "Es el punto medio del ciclo, el momento más fértil.",
              explicacion: "Hacia la mitad del ciclo (día 14 promedio), el folículo ovárico se abre y libera al óvulo hacia la trompa de Falopio."
            },
            {
              pregunta: "¿Cuántos días suele durar habitualmente el sangrado de la menstruación?",
              opciones: ["Solo 5 minutos", "Entre 3 y 7 días", "30 días seguidos"],
              correcta: 1,
              pista: "Aproximadamente una semana o menos.",
              explicacion: "El flujo menstrual normal suele extenderse entre 3 y 7 días según cada organismo."
            },
            {
              pregunta: "¿Qué célula sexual humana aporta la mitad de la información genética del padre?",
              opciones: ["El óvulo", "El espermatozoide", "La neurona"],
              correcta: 1,
              pista: "Es el gameto producido en los testículos.",
              explicacion: "El espermatozoide contiene 23 cromosomas aportados por el progenitor masculino."
            },
            {
              pregunta: "¿Qué célula sexual humana contiene los 23 cromosomas maternos y reservas nutritivas?",
              opciones: ["El óvulo", "El espermatozoide", "El glóbulo blanco"],
              correcta: 0,
              pista: "Es el gameto femenino madurado en los ovarios.",
              explicacion: "El óvulo aporta los 23 cromosomas maternos junto con el citoplasma y organelas para las primeras divisiones celulares."
            },
            {
              pregunta: "Si una mujer tiene un ciclo menstrual de 28 días y el día 1 comenzó su sangrado, ¿cuáles son sus días más fértiles?",
              opciones: ["Los días 1 y 2", "Los días cercanos a la ovulación (alrededor del día 12 al 16)", "Los días 27 y 28"],
              correcta: 1,
              pista: "La fertilidad máxima ocurre en torno a la salida del óvulo a la trompa.",
              explicacion: "El período de máxima probabilidad de fecundación comprende los días previos y posteriores a la ovulación (días 12 a 16 aprox.)."
            },
            {
              pregunta: "¿Por qué los ciclos menstruales pueden ser irregulares durante los primeros años de la pubertad?",
              opciones: ["Porque el sistema hormonal aún se está ajustando y madurando", "Porque es una enfermedad peligrosa", "Porque el cuerpo deja de funcionar"],
              correcta: 0,
              pista: "El cuerpo recién está empezando a regular sus ritmos biológicos.",
              explicacion: "Tras la menarca, el eje hormonal entre el cerebro y los ovarios suele tardar un tiempo en calibrarse, causando ciclos irregulares normales."
            },
            {
              pregunta: "¿Qué sucede con el óvulo si pasan 24 a 48 horas tras la ovulación y no es alcanzado por ningún espermatozoide?",
              opciones: ["Se convierte en un feto solo", "Pierde su vitalidad, se desintegra y es reabsorbido por el cuerpo", "Vuelve a entrar al ovario"],
              correcta: 1,
              pista: "Tiene un tiempo limitado de vida fértil.",
              explicacion: "El óvulo tiene una ventana de fertilidad de unas 24 horas; si no es fecundado, degenera y se reabsorbe, dando paso a la fase premenstrual."
            },
            {
              pregunta: "¿Qué es la FECUNDACIÓN?",
              opciones: ["La separación de los ovarios", "La unión física de un espermatozoide con un óvulo para dar origen a una nueva vida", "La salida de la menstruación"],
              correcta: 1,
              pista: "Es la fusión de los gametos.",
              explicacion: "La fecundación es el proceso biológico en el que se fusionan las células sexuales femenina y masculina."
            },
            {
              pregunta: "¿Cómo se llama la primera célula resultante de la unión del óvulo y el espermatozoide?",
              opciones: ["Cigoto", "Feto", "Placenta"],
              correcta: 0,
              pista: "Empieza con C y tiene 46 cromosomas completos.",
              explicacion: "El cigoto (o célula huevo) es la célula inicial con dotación genética completa a partir de la cual se formará el nuevo ser."
            },
            {
              pregunta: "¿En qué lugar del sistema reproductor femenino ocurre exactamente la fecundación?",
              opciones: ["En la vagina", "En el tercio superior de las Trompas de Falopio", "En la vejiga urinaria"],
              correcta: 1,
              pista: "En el camino entre el ovario y el útero.",
              explicacion: "El encuentro y penetración del espermatozoide en el óvulo ocurre normalmente en las trompas de Falopio."
            },
            {
              pregunta: "¿Dónde se IMPLANTA el cigoto en división para comenzar el embarazo?",
              opciones: ["En el ovario", "En el endometrio, la pared interior del útero", "En el estómago de la mamá"],
              correcta: 1,
              pista: "Anida en el tejido esponjoso del útero.",
              explicacion: "La implantación ocurre cuando la esfera de células embrionarias se adhiere firmemente al endometrio uterino materno."
            },
            {
              pregunta: "¿Hasta qué momento del desarrollo intrauterino se denomina científicamente 'EMBRIÓN'?",
              opciones: ["Durante los primeros 5 minutos nada más", "Durante las primeras 8 semanas (primeros dos meses), mientras se forman los órganos básicos", "Hasta que cumple 5 años de edad"],
              correcta: 1,
              pista: "Es la etapa de organogénesis (formación de órganos iniciales).",
              explicacion: "Se llama embrión desde la implantación hasta el final de la octava semana de gestación, cuando ya se esbozan todos los órganos."
            },
            {
              pregunta: "¿A partir de qué mes pasa a llamarse 'FETO' el futuro bebé?",
              opciones: ["Desde el tercer mes de embarazo hasta el nacimiento", "Solo el último día antes de nacer", "A los diez años de vida"],
              correcta: 0,
              pista: "A partir de la semana 9 o tercer mes.",
              explicacion: "A partir del tercer mes adquiere forma netamente humana y pasa a llamarse feto, dedicándose a madurar y crecer."
            },
            {
              pregunta: "¿Qué órgano temporal y maravilloso permite que el feto respire y reciba nutrientes de la sangre materna sin mezclar las sangres?",
              opciones: ["Los pulmones del bebé", "La placenta", "El estómago del bebé"],
              correcta: 1,
              pista: "Se forma en el útero y se expulsa después del parto.",
              explicacion: "La placenta filtra nutrientes y oxígeno desde la madre hacia el feto y retira dióxido de carbono y desechos."
            },
            {
              pregunta: "¿Qué conducto flexible une el abdomen del feto con la placenta materna?",
              opciones: ["El cordón umbilical", "La uretra", "El conducto deferente"],
              correcta: 0,
              pista: "Al nacer se corta y deja la marca de nuestro ombligo.",
              explicacion: "El cordón umbilical contiene vasos sanguíneos que transportan la sangre oxigenada y los nutrientes hacia el feto."
            },
            {
              pregunta: "¿Cuánto dura aproximadamente el embarazo humano completo?",
              opciones: ["3 meses", "Aproximadamente 9 meses (40 semanas de gestación)", "2 años"],
              correcta: 1,
              pista: "Son unos 280 días o 9 lunas.",
              explicacion: "La gestación humana tiene una duración media de 40 semanas (9 meses lunares) desde la última menstruación."
            },
            {
              pregunta: "¿Qué es el 'Parto'?",
              opciones: ["El momento en que se produce la fecundación", "El proceso por el cual el bebé nace, saliendo del útero a través de la vagina", "El primer día de la pubertad"],
              correcta: 1,
              pista: "Es el nacimiento del nuevo ser.",
              explicacion: "El parto es la fase final de la gestación en la cual el útero se contrae para expulsar al bebé al mundo exterior."
            },
            {
              pregunta: "¿Qué significan las siglas 'ITS' en el ámbito de la salud y las Ciencias Naturales?",
              opciones: ["Información Técnica de Secundaria", "Infecciones de Transmisión Sexual", "Institutos de Tratamiento Solar"],
              correcta: 1,
              pista: "Son infecciones que se contagian por vía sexual sin protección.",
              explicacion: "ITS son las Infecciones de Transmisión Sexual, producidas por microorganismos (bacterias, virus, parásitos)."
            },
            {
              pregunta: "¿Cuál de las siguientes es una Infección de Transmisión Sexual provocada por un virus?",
              opciones: ["La gripe común de invierno", "El VIH (Virus de Inmunodeficiencia Humana) y el VPH", "La varicela escolar"],
              correcta: 1,
              pista: "El VIH y el VPH son dos de los virus más conocidos de este grupo.",
              explicacion: "El VIH y el VPH son virus que se transmiten principalmente por contacto sexual desprotegido."
            },
            {
              pregunta: "¿Cuál es el ÚNICO método que previene de forma simultánea tanto las ITS como los embarazos no planificados?",
              opciones: ["Las pastillas anticonceptivas solas", "El uso correcto del preservativo (profiláctico) de látex en cada relación", "Lavarse las manos después de comer"],
              correcta: 1,
              pista: "Es un método de barrera física de látex.",
              explicacion: "El preservativo actúa como una barrera que bloquea el paso de microorganismos infecciosos y espermatozoides a la vez (doble protección)."
            },
            {
              pregunta: "¿A qué edad se aplica en Argentina de manera gratuita y obligatoria la vacuna contra el VPH (Virus del Papiloma Humano)?",
              opciones: ["A los 11 años, tanto para niñas como para niños", "A los 50 años", "Solo al nacer en las primeras horas"],
              correcta: 0,
              pista: "En 6to grado escolar, a los 11 años.",
              explicacion: "El Calendario Nacional de Vacunación establece la vacuna contra el VPH a los 11 años para prevenir infecciones y lesiones oncológicas en la adultez."
            },
            {
              pregunta: "¿Por qué las pastillas anticonceptivas NO protegen contra las Infecciones de Transmisión Sexual?",
              opciones: ["Porque no son de barrera física, solo regulan hormonas para evitar la ovulación", "Porque son caramelos", "Porque curan todas las enfermedades"],
              correcta: 0,
              pista: "Evitan la ovulación pero no frenan los microbios.",
              explicacion: "Las pastillas anticonceptivas son hormonales y evitan la fecundación, pero no constituyen una barrera física contra virus o bacterias."
            },
            {
              pregunta: "Durante la pubertad, debido al aumento de transpiración y sudor, es fundamental:",
              opciones: ["No bañarse nunca para cuidar el agua", "Mantener hábitos diarios de higiene corporal (baño diario, cambio de ropa interior, desodorante)", "Comer solo golosinas"],
              correcta: 1,
              pista: "La limpieza diaria cuida la piel y evita olores por bacterias.",
              explicacion: "La mayor actividad de las glándulas apocrinas y sebáceas requiere higiene diaria con agua y jabón para la salud y el confort personal."
            },
            {
              pregunta: "Si un adolescente tiene dudas, miedos o preguntas sobre los cambios en su cuerpo y sexualidad, ¿qué es lo más aconsejable?",
              opciones: ["Guardarse las dudas en secreto y asustarse", "Conversar abiertamente con personas adultas de confianza (padres, docentes, médicos)", "Creer en cualquier mito o rumor de internet sin verificar"],
              correcta: 1,
              pista: "La información científica confiable y el diálogo brindan seguridad.",
              explicacion: "Hablar con adultos responsables y profesionales de la salud permite recibir respuestas claras, científicas y sin tabúes."
            },
            {
              pregunta: "¿Qué actitud debemos tener frente a los cambios corporales que experimentan nuestros compañeros en la escuela?",
              opciones: ["Hacer burlas o apodos sobre su cuerpo o altura", "Respeto, empatía y comprensión, sabiendo que cada cuerpo crece a su propio ritmo", "Ignorarlos para siempre"],
              correcta: 1,
              pista: "El respeto hacia el propio cuerpo y el de los demás es un valor esencial.",
              explicacion: "La empatía y el respeto por la diversidad corporal son fundamentales para una convivencia escolar sana y libre de bullying."
            },
            {
              pregunta: "¿Por qué es importante conocer la anatomía y el funcionamiento de nuestros sistemas reproductores?",
              opciones: ["Solo para aprobar una prueba escolar de memoria", "Porque conocer nuestro cuerpo nos permite cuidarlo, prevenir enfermedades y tomar decisiones responsables sobre nuestra salud", "Para poder dibujar en las paredes"],
              correcta: 1,
              pista: "Conocer es la mejor manera de cuidarse.",
              explicacion: "La educación sexual integral y el conocimiento anatómico permiten cuidar la salud personal, prevenir riesgos y respetarse a uno mismo."
            },
            {
              pregunta: "¿Cuál es el mensaje final clave de la unidad sobre la pubertad y el crecimiento?",
              opciones: ["Crecer es peligroso y negativo", "Conocer nuestro cuerpo es una forma de cuidarnos: información, respeto y empatía nos ayudan a crecer juntos", "Todos debemos ser exactamente iguales en todo"],
              correcta: 1,
              pista: "Se basa en el cuidado, la empatía y la información confiable.",
              explicacion: "Crecer con información confiable, respeto hacia uno mismo y empatía hacia los demás nos permite transitar la adolescencia con seguridad y armonía."
            }
          ]
        },
        "Q4": {
          guia: [],
          glosario: [],
          simulacro: []
        }
      }
    }
  }
};
