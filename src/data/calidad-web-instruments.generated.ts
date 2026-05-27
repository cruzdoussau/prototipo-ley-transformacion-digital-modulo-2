import type { QualityInstrumentDefinition, QualityInstrumentType } from "../types/calidad-web.types";

// Generated from the official Calidad Web 2.0 publicable workbooks included in the source package.
export const qualityInstrumentCatalog = {
  "Sitio Web": {
    "tipoInstrumento": "Sitio Web",
    "sourceFile": "3.1 Sitios Web - CalidadWeb 2.0 PUBLICABLE.xlsx",
    "dimensiones": [
      {
        "id": "web-1",
        "orden": 1,
        "nombre": "Contenido y lenguaje claro",
        "descripcion": "Información representada por texto, imagen, video, sonido u otros tipos de medios. Debe utilizarse un lenguaje comprensible para la ciudadanía, además de cumplir con criterios de relevancia, actualización, precisión, fiabilidad y legibilidad, entre otros.",
        "sourceSheet": "1Con",
        "preguntas": [
          {
            "id": "web-1-q1",
            "codigo": "1.1.1",
            "indicador": "Fiabilidad",
            "descripcion": "Entrega de información veraz, segura y rigurosa.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Es fácil reconocer la fuente o autoría de la información publicada? Por ejemplo: se identifica claramente el nombre de la institución que publica en el encabezado o pie de cada página, o la unidad interna o externa que entregó alguna información específica, con frases del tipo \"Departamento de Estudios\" como firma al final del texto o \"Fuente: Instituto Nacional de Estadísticas (INE)\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q2",
            "codigo": "1.1.2",
            "indicador": "Completitud",
            "descripcion": "Entrega de información con la cobertura y datos necesarios para divulgar un tema con exhaustividad.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los contenidos representan de manera fiel lo enunciado en su título?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q3",
            "codigo": "1.1.2.2",
            "indicador": "Completitud",
            "descripcion": "Entrega de información con la cobertura y datos necesarios para divulgar un tema con exhaustividad.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se cumple con la recomendación de no incluir páginas sin contenido, contenido incompleto o \"En construcción\"?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q4",
            "codigo": "1.1.2.3",
            "indicador": "Completitud",
            "descripcion": "Entrega de información con la cobertura y datos necesarios para divulgar un tema con exhaustividad.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El texto destaca los datos clave de la información? Por ejemplo: se presenta un resumen con las respuestas a las preguntas qué, cómo, dónde, cuándo y para quién o existe un recuadro con fechas importantes.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q5",
            "codigo": "1.1.2.4",
            "indicador": "Completitud",
            "descripcion": "Entrega de información con la cobertura y datos necesarios para divulgar un tema con exhaustividad.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En el caso de textos referidos a trámites, ¿se brinda información suficiente para que las personas usuarias puedan realizarlos autónomamente?  La opción \"No aplica\" es solo para el caso en que no se encuentren textos referidos a trámites.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q6",
            "codigo": "1.1.3",
            "indicador": "Lenguaje plano",
            "descripcion": "Estilo de redacción simple y centrado en las personas usuarias, alejado de jergas legales y tecnicismos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El lenguaje utilizado está orientado a que una persona pueda entender el contenido, aun aquellas con mayor dificultad de comprensión lectora? Por ejemplo: se recomienda revisar con alguna herramienta en línea como Legible (de los cinco indicadores evaluados que se visualizan en la tabla Legibilidad del texto, al menos tres deben indicar dificultad Normal para aprobar este indicador).",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q7",
            "codigo": "1.1.3.2",
            "indicador": "Lenguaje plano",
            "descripcion": "Estilo de redacción simple y centrado en las personas usuarias, alejado de jergas legales y tecnicismos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El tono y voz son amables, respetuosos y cercanos con las personas usuarias?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q8",
            "codigo": "1.1.3.3",
            "indicador": "Lenguaje plano",
            "descripcion": "Estilo de redacción simple y centrado en las personas usuarias, alejado de jergas legales y tecnicismos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿La redacción prescinde de la jerga técnica o legal? Por ejemplo: en el texto se evitan conceptos legales, administrativos o informáticos que tengan un equivalente más fácil de entender por parte de las personas usuarias (\"resolución\" en vez de \"acto administrativo\" o \"memoria temporal\" en vez de \"caché\") o se evitan referencias números de leyes y normativas sin una clara identificación del tema (\"Ley de acoso laboral\" en vez de \"Ley 21643\").",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q9",
            "codigo": "1.1.3.4",
            "indicador": "Lenguaje plano",
            "descripcion": "Estilo de redacción simple y centrado en las personas usuarias, alejado de jergas legales y tecnicismos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se evitan abreviaturas, extranjerismos, eufemismos, modismos o términos muy especializados o rebuscados en al menos un 50% de los contenidos revisados?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q10",
            "codigo": "1.1.3.5",
            "indicador": "Lenguaje plano",
            "descripcion": "Estilo de redacción simple y centrado en las personas usuarias, alejado de jergas legales y tecnicismos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se define cada sigla y acrónimo y se emplean solo si es necesario?  La opción \"No aplica\" es solo para el caso en que no se encuentren siglas o acrónimos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q11",
            "codigo": "1.1.3.6",
            "indicador": "Lenguaje plano",
            "descripcion": "Estilo de redacción simple y centrado en las personas usuarias, alejado de jergas legales y tecnicismos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los contenidos están escritos en tono positivo indicando lo que se puede hacer y evitando enfocar los mensajes desde el \"no se puede\"?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q12",
            "codigo": "1.1.4",
            "indicador": "Actualización",
            "descripcion": "Renovación permanente de los contenidos, con el objeto de garantizar la entrega de información eficaz y oportuna a la ciudadanía.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los contenidos están actualizados y muestran información vigente al año en curso? Por ejemplo: se indica expresamente su fecha de publicación o última fecha de actualización.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q13",
            "codigo": "1.1.5",
            "indicador": "Redacción y ortografía",
            "descripcion": "Correcta escritura de los textos publicados.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Son correctas la ortografía –literal, acentual y puntual– y la gramática en los contenidos? Por ejemplo: para revisar este aspecto, se puede usar un corrector ortográfico y gramatical para revisar los contenidos de las páginas de muestra. Tanto Microsoft Word como Documentos de Google lo ofrecen; o bien utilizar herramientas en línea como LanguageTool.  (Revisar la muestra de contenidos escogidos, si hay más de un error, entonces no cumple este criterio).",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q14",
            "codigo": "1.1.5.2",
            "indicador": "Redacción y ortografía",
            "descripcion": "Correcta escritura de los textos publicados.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los signos de puntuación empleados facilitan la lectura del documento?  Por ejemplo: se privilegia el uso de puntos seguidos, frente a las frases intercaladas entre comas.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q15",
            "codigo": "1.1.5.3",
            "indicador": "Redacción y ortografía",
            "descripcion": "Correcta escritura de los textos publicados.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Las frases se relacionan entre sí por medio de conectores?  Por ejemplo: \"A su vez,\", \"Por otra parte,\", \"Sin embargo,\" o \"De igual modo,\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q16",
            "codigo": "1.1.6",
            "indicador": "Propiedad intelectual",
            "descripcion": "Posesión de los derechos de uso de contenidos publicados en un sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio cuenta con información de permisos de uso de sus contenidos en algún lugar del sitio?  Por ejemplo: se señala en las condiciones de uso del sitio que ningún contenido se puede utilizar sin autorización (copyright o todos los derechos de autor reservados) o se indica un modelo de licencias flexibles de propiedad intelectual, como Creative Commons, que autorizan la reutilización bajo ciertas condiciones.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q17",
            "codigo": "1.1.6.2",
            "indicador": "Propiedad intelectual",
            "descripcion": "Posesión de los derechos de uso de contenidos publicados en un sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se evita la redifusión de material protegido por derechos de autor sin autorización?  Por ejemplo: para comprobar este factor se puede descargar una imagen del sitio que no consigne sus créditos y subirla al buscador de imágenes de Google, para ver si aparece en otros sitios.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q18",
            "codigo": "1.1.7",
            "indicador": "Privacidad y datos personales",
            "descripcion": "Protección de los datos e información personal de las personas usuarias de un sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Si se mencionan listados de personas, ¿se evita la publicación de sus RUN en el sitio web?  La opción \"No aplica\" es solo para el caso en que no se encuentren listados de personas.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q19",
            "codigo": "1.1.7.2",
            "indicador": "Privacidad y datos personales",
            "descripcion": "Protección de los datos e información personal de las personas usuarias de un sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio protege la privacidad al no publicar direcciones ni teléfonos particulares?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q20",
            "codigo": "1.1.7.3",
            "indicador": "Privacidad y datos personales",
            "descripcion": "Protección de los datos e información personal de las personas usuarias de un sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Existe información sobre cómo las personas usuarias pueden ejercer los derechos sobre acceso, rectificación, cancelación o eliminación, oposición (ARCO) y bloqueo de datos personales, incluidos en la Ley sobre Protección de la Vida Privada?  Por ejemplo: se menciona el procedimiento en la Política de Privacidad o se enlaza el formulario de solicitud en la sección de Transparencia.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q21",
            "codigo": "1.1.8",
            "indicador": "Contenidos sensibles",
            "descripcion": "Respeto de la intimidad de las personas usuarias de un sitio web a partir de la no publicación de información que pueda menoscabar su honra y perjudicar su imagen personal en Internet.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Si el sitio publica información sobre menores de edad, ¿se protege la identidad de los mismos en textos y fotografías?  La opción \"No aplica\" es solo para el caso en que no se encuentre información sobre menores de edad.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q22",
            "codigo": "1.1.8.2",
            "indicador": "Contenidos sensibles",
            "descripcion": "Respeto de la intimidad de las personas usuarias de un sitio web a partir de la no publicación de información que pueda menoscabar su honra y perjudicar su imagen personal en Internet.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El contenido es apto para ser leído por menores de edad?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q23",
            "codigo": "1.1.8.3",
            "indicador": "Contenidos sensibles",
            "descripcion": "Respeto de la intimidad de las personas usuarias de un sitio web a partir de la no publicación de información que pueda menoscabar su honra y perjudicar su imagen personal en Internet.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio evita exhibir material que pueda afectar la susceptibilidad de las personas o las menoscaben?  Por ejemplo: características físicas o morales de las personas o hechos o circunstancias de su vida privada o intimidad, tales como los hábitos personales, el origen racial, las ideologías y opiniones políticas, las creencias o convicciones religiosas, los estados de salud físicos o psíquicos y la vida sexual (como lo señala la Ley 19628 sobre Protección de la Vida Privada).",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q24",
            "codigo": "1.2.1",
            "indicador": "Claridad",
            "descripcion": "Redacción orientada hacia una facilidad de comprensión de los contenidos.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los contenidos están estructurados como respuestas a las preguntas frecuentes que podrían hacerse las personas usuarias?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q25",
            "codigo": "1.2.1.2",
            "indicador": "Claridad",
            "descripcion": "Redacción orientada hacia una facilidad de comprensión de los contenidos.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las palabras, frases y conceptos utilizados tienen un lenguaje claro para las personas usuarias?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q26",
            "codigo": "1.2.1.3",
            "indicador": "Claridad",
            "descripcion": "Redacción orientada hacia una facilidad de comprensión de los contenidos.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Predomina el tiempo presente simple y la voz activa de los verbos?  Por ejemplo: \"Este documento acredita cómo obtener el beneficio\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q27",
            "codigo": "1.2.1.4",
            "indicador": "Claridad",
            "descripcion": "Redacción orientada hacia una facilidad de comprensión de los contenidos.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las oraciones están ordenadas según la forma sujeto-verbo-predicado?  Por ejemplo: \"Las y los interesados deben dirigirse a la oficina comunal\" (correcto); \"A la oficina comunal deben dirigirse las y los interesados\" (incorrecto).",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q28",
            "codigo": "1.2.1.5",
            "indicador": "Claridad",
            "descripcion": "Redacción orientada hacia una facilidad de comprensión de los contenidos.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Cuando se listan requisitos en contenidos referidos a servicios a la ciudadanía, ¿se usa modo infinitivo? (Modo que engloba las formas no personales del verbo, puede terminar en  –ar, –er o –ir). Por ejemplo: \"Ser mayor de 18 años\", \"Enviar su solicitud a través de correo electrónico\".  La opción \"No aplica\" es solo para el caso en que no se listen requisitos referidos a servicios a la ciudadanía.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q29",
            "codigo": "1.2.2",
            "indicador": "Concisión",
            "descripcion": "Capacidad de los sitios de presentar sus contenidos de manera breve.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los textos son breves y utilizan frases cortas en su redacción?  Por ejemplo: al menos 2 párrafos y como máximo 8 por página.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q30",
            "codigo": "1.2.2.2",
            "indicador": "Concisión",
            "descripcion": "Capacidad de los sitios de presentar sus contenidos de manera breve.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Al revisar el sitio web en versión de escritorio, ¿los párrafos son cortos, con menos de 8 líneas?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q31",
            "codigo": "1.2.2.3",
            "indicador": "Concisión",
            "descripcion": "Capacidad de los sitios de presentar sus contenidos de manera breve.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se explica una idea por párrafo?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q32",
            "codigo": "1.2.2.4",
            "indicador": "Concisión",
            "descripcion": "Capacidad de los sitios de presentar sus contenidos de manera breve.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las oraciones son simples y directas, evitando el exceso de palabras?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q33",
            "codigo": "1.2.2.5",
            "indicador": "Concisión",
            "descripcion": "Capacidad de los sitios de presentar sus contenidos de manera breve.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Si existe un texto extenso –de cuatro o más párrafos–, ¿hay un resumen al inicio?  La opción \"No aplica\" es solo para el caso en que no se encuentren textos de cuatro o más párrafos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q34",
            "codigo": "1.2.3",
            "indicador": "Legibilidad",
            "descripcion": "Facilidad de lectura de los contenidos publicados.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Hay espacio entre los párrafos?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q35",
            "codigo": "1.2.3.2",
            "indicador": "Legibilidad",
            "descripcion": "Facilidad de lectura de los contenidos publicados.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El texto está alineado a la izquierda?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q36",
            "codigo": "1.2.3.3",
            "indicador": "Legibilidad",
            "descripcion": "Facilidad de lectura de los contenidos publicados.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se utilizan listas numeradas, viñetas o tablas para presentar la información más ordenada?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q37",
            "codigo": "1.2.4",
            "indicador": "Escritura para la web",
            "descripcion": "Adaptación de la redacción optimizada para su lectoría en una interfaz digital.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los contenidos del sitio aplican el modelo de \"pirámide invertida\" que los estructura desde lo más a lo menos importante?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q38",
            "codigo": "1.2.4.2",
            "indicador": "Escritura para la web",
            "descripcion": "Adaptación de la redacción optimizada para su lectoría en una interfaz digital.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las páginas están bien organizadas, con títulos claros y subtítulos que facilitan la lectura y la búsqueda de información?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q39",
            "codigo": "1.2.4.3",
            "indicador": "Escritura para la web",
            "descripcion": "Adaptación de la redacción optimizada para su lectoría en una interfaz digital.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Es fácil escanear visualmente los contenidos?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q40",
            "codigo": "1.2.4.4",
            "indicador": "Escritura para la web",
            "descripcion": "Adaptación de la redacción optimizada para su lectoría en una interfaz digital.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se utilizan negritas para destacar palabras claves de cada párrafo?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q41",
            "codigo": "1.2.4.5",
            "indicador": "Escritura para la web",
            "descripcion": "Adaptación de la redacción optimizada para su lectoría en una interfaz digital.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se evitan las frases escritas únicamente en mayúsculas?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q42",
            "codigo": "1.2.4.6",
            "indicador": "Escritura para la web",
            "descripcion": "Adaptación de la redacción optimizada para su lectoría en una interfaz digital.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se vinculan contenidos del mismo sitio a través de enlaces relacionados?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q43",
            "codigo": "1.2.4.7",
            "indicador": "Escritura para la web",
            "descripcion": "Adaptación de la redacción optimizada para su lectoría en una interfaz digital.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Cuando se enlazan documentos, ¿se especifican el título, formato y peso? Por ejemplo: \"Informe sobre ciberseguridad en Chile 2024 (pdf, 345 KB)\".  Selecciona \"Sí\" solo si se cumplen los tres elementos (título, formato y peso) en todos los documentos enlazados.  La opción \"No aplica\" corresponde únicamente si no hay documentos en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q44",
            "codigo": "1.2.4.8",
            "indicador": "Escritura para la web",
            "descripcion": "Adaptación de la redacción optimizada para su lectoría en una interfaz digital.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se entrega una breve descripción de los documentos enlazados para mejorar su capacidad de búsqueda, usabilidad y accesibilidad?  La opción \"No aplica\" es solo para el caso en que no se encuentren documentos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q45",
            "codigo": "1.3.1",
            "indicador": "Visualización de la información",
            "descripcion": "Uso de elementos visuales para presentar información o datos.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Se utilizan apoyos visuales como íconos, imágenes, gráficos o infografías para presentar datos?  La opción \"No aplica\" es solo si el sitio web no presenta datos que requieran apoyos visuales.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q46",
            "codigo": "1.3.2",
            "indicador": "Objetividad",
            "descripcion": "Imparcialidad y neutralidad de la información publicada.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Los contenidos tienen información objetiva y presentan una redacción neutra, sin reflejar la opinión de quién los escribió?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q47",
            "codigo": "1.3.2.2",
            "indicador": "Objetividad",
            "descripcion": "Imparcialidad y neutralidad de la información publicada.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿En al menos un 80% de los contenidos se privilegia exponer datos y hechos por sobre el uso de adjetivos calificativos?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-1-q48",
            "codigo": "1.3.3",
            "indicador": "Archivo",
            "descripcion": "Conservación del contenido histórico del sitio web cuando se realice un reemplazo del mismo.",
            "prioridad": "Deseable",
            "preguntaChequeo": "Si el sitio presenta versiones anteriores de contenidos, ¿están rotuladas claramente como contenidos o documentos de archivo no vigentes? Por ejemplo: títulos del tipo \"Requisitos de postulación 2015\", donde señala claramente el año al que se refiera la información.  La opción \"No aplica\" es solo para el caso en que no se encuentren versiones anteriores de contenidos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-2",
        "orden": 2,
        "nombre": "Usabilidad",
        "descripcion": "Medida en que los usuarios pueden utilizar un sistema para lograr determinados objetivos con eficacia, eficiencia y satisfacción en un contexto de uso especificado.",
        "sourceSheet": "2Usa",
        "preguntas": [
          {
            "id": "web-2-q1",
            "codigo": "2.1.1",
            "indicador": "Coherencia y estandarización",
            "descripcion": "Apego a las convenciones de los sitios web y servicios digitales, de manera tal que las personas usuarias no tengan que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo en cada plataforma.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se respeta la organización del sitio web y se preserva su consistencia en todas las páginas? Por ejemplo: los enlaces del menú global aparecen en la misma posición en todo el sitio.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-2-q2",
            "codigo": "2.1.1.2",
            "indicador": "Coherencia y estandarización",
            "descripcion": "Apego a las convenciones de los sitios web y servicios digitales, de manera tal que las personas usuarias no tengan que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo en cada plataforma.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En el caso de los sitios del gobierno central, ¿Se utilizan los componentes del UI Kit del Gobierno Digital?  La opción \"No aplica\" es solo para el caso en que el sitio web examinado no pertenezca al gobierno central.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-2-q3",
            "codigo": "2.1.1.3",
            "indicador": "Coherencia y estandarización",
            "descripcion": "Apego a las convenciones de los sitios web y servicios digitales, de manera tal que las personas usuarias no tengan que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo en cada plataforma.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los iconos son fácilmente comprensibles sin texto adicional y siguen convenciones o figuras reconocibles por cualquier persona? Por ejemplo: una casa para volver al inicio, una lupa para el buscador, líneas horizontales del ícono de menú de \"hamburguesa\" para colapsar o una \"X\" para cerrar.  La opción \"No aplica\" se debe seleccionar solo si el sitio no utiliza iconos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-2-q4",
            "codigo": "2.1.2",
            "indicador": "Diseño estético y minimalista",
            "descripcion": "Simplicidad y limpieza de las interfaces, las que no deben contener información que sea irrelevante o que rara vez se necesite. Cada elemento en una interfaz compite con las unidades de información relevantes y disminuye su visibilidad relativa.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los llamados a la acción y botones están claramente destacados y se identifican fácilmente por su forma o color? Por ejemplo: los enlaces y botones se destacan visualmente, haciéndolos fáciles de reconocer a simple vista.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-2-q5",
            "codigo": "2.1.3",
            "indicador": "Diagnóstico y corrección de errores",
            "descripcion": "Asistencia a las personas usuarias ante errores, brindándoles una solución o un acceso directo para que pueda resolver el error de inmediato. Redacción de los mensajes de error en un lenguaje sencillo (sin códigos de error), indicando con precisión el problema y sugiriendo una solución de manera constructiva.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los mensajes de alerta ante un error brindan información clara del problema y ofrecen una vía de solución?  Por ejemplo: ante una página no encontrada, en vez de indicar \"error 404\" el sitio muestra alternativas de enlaces para que la persona usuaria pueda seguir a un nuevo contenido o volver al anterior.   Para evaluar una página no encontrada es necesario escribir la URL del sitio y después del \"/\" final, agregar un texto falso, como: https://sitioejemplo.gob.cl/abcde",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-2-q6",
            "codigo": "2.1.3.2",
            "indicador": "Diagnóstico y corrección de errores",
            "descripcion": "Asistencia a las personas usuarias ante errores, brindándoles una solución o un acceso directo para que pueda resolver el error de inmediato. Redacción de los mensajes de error en un lenguaje sencillo (sin códigos de error), indicando con precisión el problema y sugiriendo una solución de manera constructiva.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se puede verificar que los mensajes de error no interfieren con la navegación en la página?  Por ejemplo: las ventanas emergentes se pueden cerrar fácilmente con el teclado y no generan bloqueo de navegación. Esto se puede hacer con la tecla \"Esc\".  La opción \"No aplica\" es solo para el caso en que no se observen mensajes de error.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-2-q7",
            "codigo": "2.1.4",
            "indicador": "Ventanas modales o emergentes (pop-up)",
            "descripcion": "Cuidado de no utilizar excesiva o innecesariamente ventanas modales y emergentes (pop-up).",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio permite navegar sin interrupciones de modales o ventanas emergentes que tapen el contenido? Por ejemplo: no aparecen anuncios, mensajes de marketing o formularios de suscripción que bloqueen la visualización o navegación.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-2-q8",
            "codigo": "2.1.4.2",
            "indicador": "Ventanas modales o emergentes (pop-up)",
            "descripcion": "Cuidado de no utilizar excesiva o innecesariamente ventanas modales y emergentes (pop-up).",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Una vez cerrada la ventana emergente (pop-up) o modal, ¿queda guardada esa decisión para que no vuelva a aparecer al volver a ingresar, cargar o cambiar de página? Por ejemplo: al cerrar una ventana modal esta no vuelve a aparecer durante la navegación del sitio web.  La opción \"No aplica\" es solo para el caso en que no se observen ventanas emergentes o modales en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-2-q9",
            "codigo": "2.1.5",
            "indicador": "Mensajes de error",
            "descripcion": "Interrupción generada por el sistema que le informa a la persona usuaria de una situación incompleta, incompatible o indeseable dentro del flujo de navegación.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En caso de aparecer un mensaje de error, ¿se ofrecen soluciones claras y efectivas para que la persona usuaria pueda resolver el problema? Por ejemplo: las indicaciones del mensaje de error permiten realizar la acción correctamente sin que se repita el error.  La opción \"No aplica\" es solo para el caso en que no se observen mensajes de error.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-2-q10",
            "codigo": "2.1.5.2",
            "indicador": "Mensajes de error",
            "descripcion": "Interrupción generada por el sistema que le informa a la persona usuaria de una situación incompleta, incompatible o indeseable dentro del flujo de navegación.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En caso de aparecer un mensaje de error inesperado de origen técnico, ¿se entrega información clara en vez de mensajes ambiguos como \"Intente más tarde\" o \"Comuníquese con el administrador\"?  La opción \"No aplica\" es solo para el caso en que no se observen mensajes de error.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-2-q11",
            "codigo": "2.2.1",
            "indicador": "Similitud del sistema con el mundo real",
            "descripcion": "Utilización de conceptos, frases y diseños familiares para las personas usuarias. Correspondencia con las convenciones del mundo real, haciendo que la información aparezca en un orden natural y lógico.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El sitio web presenta información en un orden lógico y con zonas bien delimitadas?  Por ejemplo: se diferencian las zonas de encabezado, menú principal, contenido y pie de página.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-2-q12",
            "codigo": "2.2.2",
            "indicador": "Control y libertad para la persona usuaria",
            "descripcion": "Alternativa claramente marcada para abandonar una acción no deseada o detener un proceso prolongado.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las páginas permiten avanzar o retroceder sin quedar atrapadas, ofreciendo opciones claras para continuar o finalizar? Por ejemplo: al completar un trámite, la página muestra una confirmación en lugar de quedar en blanco, y los formularios se envían sin que el sistema quede \"guardando\" indefinidamente.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-2-q13",
            "codigo": "2.2.2.2",
            "indicador": "Control y libertad para la persona usuaria",
            "descripcion": "Alternativa claramente marcada para abandonar una acción no deseada o detener un proceso prolongado.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Si al ingresar al sitio web por primera vez aparece un mensaje que ocupe toda la pantalla (del tipo ventana modal, emergente o pop-up), ¿este tiene una opción de cerrarse fácilmente identificable?  Por ejemplo: un enlace que diga \"Cerrar\" o un botón con el icono de \"X\".  La opción \"No aplica\" es solo para el caso en que no se observan ventanas del tipo modal, emergente o pop-up.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-2-q14",
            "codigo": "2.2.2.3",
            "indicador": "Control y libertad para la persona usuaria",
            "descripcion": "Alternativa claramente marcada para abandonar una acción no deseada o detener un proceso prolongado.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los videos cuentan con todos sus botones de reproducción?  La opción \"No aplica\" es solo para el caso en que no existan videos en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-2-q15",
            "codigo": "2.3.1",
            "indicador": "Reducción del esfuerzo cognitivo",
            "descripcion": "Disminución de la carga de memoria a corto plazo para la persona usuaria, haciendo fácilmente reconocibles los elementos, acciones y opciones. El sistema debería ayudar a los usuarios a reconocer los elementos de la interfaz sin la necesidad de analizarlos cada vez en detalle, gastando más energía y tiempo.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Es visible el icono personalizado del sitio (favicon) en la pestaña del navegador?  Por ejemplo: aparece un cuadrado azul y rojo en los sitios del Gobierno de Chile.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-2-q16",
            "codigo": "2.3.1.2",
            "indicador": "Reducción del esfuerzo cognitivo",
            "descripcion": "Disminución de la carga de memoria a corto plazo para la persona usuaria, haciendo fácilmente reconocibles los elementos, acciones y opciones. El sistema debería ayudar a los usuarios a reconocer los elementos de la interfaz sin la necesidad de analizarlos cada vez en detalle, gastando más energía y tiempo.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Se ofrece ayuda en contexto, en lugar de presentar a las personas usuarias un largo tutorial para memorizar?  Por ejemplo: aparece una línea punteada bajo los acrónimos para acceder a su definición o un icono de interrogación (\"?\") al lado de una instrucción para acceder a una ayuda específica.  La opción \"No aplica\" es solo para el caso en el que, por la naturaleza de los contenidos ofrecidos, no existan opciones de ayuda.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-2-q17",
            "codigo": "2.3.2",
            "indicador": "Flexibilidad y eficiencia de uso",
            "descripcion": "Oferta de distintas maneras para acceder al contenido y opción de aceleradores y acciones personalizadas tanto para personas usuarias avanzadas como menos experimentadas.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Las personas usuarias cuentan con opciones para ordenar y filtrar resultados y tablas de datos?  Por ejemplo: búsqueda avanzada con filtro alfabético o por fecha.  La opción \"No aplica\" es solo para el caso en que no se encuentren resultados o tablas de datos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-3",
        "orden": 3,
        "nombre": "Accesibilidad web",
        "descripcion": "Especial cuidado de que todos los sitios web estén diseñados para que todos y todas puedan acceder. Pone foco principalmente en las personas con discapacidad para que puedan percibir, comprender, navegar, interactuar y contribuir con la web. Es importante destacar que esta dimensión no abarca de manera exhaustiva todas los criterios de accesibilidad. Para ello se recomienda utilizar la Plataforma de Reportabilidad de Accesibilidad Universal de SENADIS. Más información en: https://reportedeaccesibilidad.senadis.cl/sign.",
        "sourceSheet": "3Acc",
        "preguntas": [
          {
            "id": "web-3-q1",
            "codigo": "3.1.1",
            "indicador": "Texto alternativo",
            "descripcion": "Presentación de una alternativa textual a todo el contenido no textual (imágenes, botones, iconos), por ejemplo, mediante las etiquetas \"alt\", \"title\" o \"description\" del código HTML.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los elementos visuales presentan una alternativa textual, es decir el uso de atributos HTML como \"alt\" para las imágenes o \"description\" y \"title\" en botones o enlaces?  Esto se puede revisar abriendo al código fuente con los comandos \"Ctrl\" + \"U\" o \"Cmd\" + \"U\" y buscando las etiquetas \"alt\", \"description\" o \"title\", si se encuentran y tienen contenido este punto se cumple.  En el punto I de la guía, puede consultar cómo ver el código fuente de la página.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q2",
            "codigo": "3.1.1.2",
            "indicador": "Texto alternativo",
            "descripcion": "Presentación de una alternativa textual a todo el contenido no textual (imágenes, botones, iconos), por ejemplo, mediante las etiquetas \"alt\", \"title\" o \"description\" del código HTML.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los textos alternativos describen de manera suficientemente detallada la información visual de las imágenes?  Por ejemplo: \"El alcalde observa un plano de arquitectura desplegado sobre una mesa\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q3",
            "codigo": "3.1.2",
            "indicador": "Subtítulos",
            "descripcion": "Alternativa textual para los diálogos presentes en los videos, en el caso de no poder escucharlos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los videos cuentan con subtítulos en español y garantizan una correcta legibilidad, con una tipografía sin serifa (sans-serif) y alto contraste entre fondo y texto?   La opción \"No aplica\" es solo para el caso en que no existan videos en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q4",
            "codigo": "3.1.3",
            "indicador": "Navegación por teclado",
            "descripcion": "Orden lógico y fluido al navegar el sitio web con el teclado en que se respeta el sentido de izquierda a derecha, de arriba hacia abajo, y sin una determinada velocidad de pulsación.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Al navegar el sitio web con el teclado con la tecla \"Tab\" se respeta el orden de izquierda a derecha, de arriba hacia abajo?  En el punto VI de la guía, puede consultar cómo navegar el sitio web con el teclado.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q5",
            "codigo": "3.1.3.2",
            "indicador": "Navegación por teclado",
            "descripcion": "Orden lógico y fluido al navegar el sitio web con el teclado en que se respeta el sentido de izquierda a derecha, de arriba hacia abajo, y sin una determinada velocidad de pulsación.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Es posible una navegación mediante el teclado fluida y sin saltarse ninguna información?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q6",
            "codigo": "3.1.3.3",
            "indicador": "Navegación por teclado",
            "descripcion": "Orden lógico y fluido al navegar el sitio web con el teclado en que se respeta el sentido de izquierda a derecha, de arriba hacia abajo, y sin una determinada velocidad de pulsación.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Es posible navegar el sitio web con el teclado sin una determinada velocidad de pulsación?  Por ejemplo: si se navega el sitio con la tecla \"Tab\" y la persona usuaria se detiene por más de 10 segundos para luego retomar la navegación, no debe empezar toda la navegación desde el inicio, sino que se mantiene donde había quedado.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q7",
            "codigo": "3.1.4",
            "indicador": "Ajuste del tamaño de la fuente",
            "descripcion": "Posibilidad de agrandar el texto del sitio web en hasta un 200% cuidando de que se mantenga el diseño y no se pierda funcionalidad.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Existen botones para que el usuario pueda agrandar o achicar la fuente?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q8",
            "codigo": "3.1.4.2",
            "indicador": "Ajuste del tamaño de la fuente",
            "descripcion": "Posibilidad de agrandar el texto del sitio web en hasta un 200% cuidando de que se mantenga el diseño y no se pierda funcionalidad.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Es posible agrandar el texto hasta un 200% (con \"Ctrl +\" o \"Cmd +\") sin que se pierda el contenido, diseño o funcionalidad?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q9",
            "codigo": "3.1.5",
            "indicador": "Control de audio",
            "descripcion": "Mecanismos para pausar audios de reproducción automática.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿En el sitio web se evitan elementos que reproduzcan sonidos automáticamente? Por ejemplo: los videos en la portada permanecen en silencio al ingresar, a menos que la persona usuaria decida activarlos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q10",
            "codigo": "3.1.5.2",
            "indicador": "Control de audio",
            "descripcion": "Mecanismos para pausar audios de reproducción automática.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se proporcionan mecanismos para pausar audios de reproducción automática?  La opción \"No aplica\" es solo para el caso en que no existan audios de reproducción automática en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q11",
            "codigo": "3.1.6",
            "indicador": "Umbral de destellos",
            "descripcion": "Cuidado al implementar animaciones para que no destellen más de 3 veces en 1 segundo para evitar posibles convulsiones. Se entiende como destello, un cambio repentino y brusco en el contraste, generalmente de color blanco y de muy corta duración, de forma muy repetitiva puede provocar convulsiones en algunas personas.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio web evita elementos que destellan más de 3 veces en 1 segundo? Por ejemplo: los videos y animaciones no contienen secuencias con destellos rápidos que puedan causar molestias o distracciones.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q12",
            "codigo": "3.1.7",
            "indicador": "Etiquetas en iconos",
            "descripcion": "Soporte textual que explique la función de los iconos utilizados para ejecutar una acción.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿En el sitio web se presenta alternativa de texto para iconografía que ejecuta una acción?  Por ejemplo: se presenta el botón \"A+\" para aumentar el tamaño del texto y al poner el cursor por encima se muestra el texto \"Agrandar tamaño de fuente\", o al ver un icono de lupa se muestra el texto \"Buscar\".  La opción \"No aplica\" es solo para el caso en que no exista  iconografía que ejecuta una acción.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q13",
            "codigo": "3.1.8",
            "indicador": "Predecible al recibir el foco",
            "descripcion": "Preocupación de que no se cambie el contexto al recibir el foco cuando se utiliza la navegación por teclado.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Al utilizar navegación por teclado, el sitio mantiene el contexto al recibir el foco? Por ejemplo: al navegar un menú con la tecla \"Tab\", el sitio no redirige automáticamente al posicionarse en un elemento. Es necesario presionar la tecla \"Enter\" para acceder a cada página.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q14",
            "codigo": "3.1.9",
            "indicador": "Estructura de la interfaz",
            "descripcion": "Identificación clara de las diferentes zonas de una página para que los software de lectura puedan identificar las estructuras y relaciones del contenido.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El código HTML es semántico y sus etiquetas se usan adecuadamente en el sitio web? Por ejemplo: las etiquetas que se utilizan varían de acuerdo a su significado, un título principal se ve representado con una etiqueta \"h1\", subtítulos con \"h2\" o \"h3\", párrafos con \"p\" y texto destacado en negrita con \"strong\".   Esto se puede verificar abriendo al código fuente con los comandos \"Ctrl\" + \"U\" o \"Cmd\" + \"U\" y revisando la presencia del correcto uso de las etiquetas señaladas en el ejemplo.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q15",
            "codigo": "3.1.10",
            "indicador": "Contraste mínimo",
            "descripcion": "Atención a los contrastes de color al diseñar la interfaz, los textos e imágenes de texto, que deben tener un contraste mínimo de 4,5:1 entre el color de fondo y del texto o icono.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los textos tienen un contraste de color mayor a 4.5:1?  Por ejemplo: se evita el uso de texto gris sobre fondo blanco u otras combinaciones de color con bajo contraste.  En el punto III de la guía, puede consultar cómo verificar el contraste de textos con la herramienta \"Inspeccionar\". Si desea revisar en mayor detalle puede hacerlo con herramientas como Colour Contrast Analyser o Contrast Checker de WebAIM.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q16",
            "codigo": "3.2.1",
            "indicador": "Audio y video con texto alternativo",
            "descripcion": "Alternativa textual para los elementos de audio o video, en que se describe lo que está pasando en la escena.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los elementos de audio o video presentan un texto alternativo que describe lo que está pasando?  Por ejemplo: el sitio brinda la posibilidad de acceder a la transcripción de todo lo que se menciona y sucede en el audio.  La opción \"No aplica\" es solo para el caso en que no existan videos o audios en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q17",
            "codigo": "3.2.2",
            "indicador": "Componentes accesibles",
            "descripcion": "Información de estados, roles e información de valor en todos los componentes de interfaz de usuario para permitir la compatibilidad con la tecnología asistiva utilizada para acceder al contenido. Por ejemplo: personas que utilizan lectores de pantalla, ampliadores de pantalla y software de reconocimiento de voz.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se utilizan etiquetas semánticas HTML adecuadas para estructurar el contenido, facilitando la interpretación por parte de tecnologías de asistencia?  Por ejemplo: se utiliza código HTML semántico, es decir se usan etiquetas como \"header\", \"main\" y \"footer\".  Esto se puede verificar revisando el código fuente del sitio web o con la herramienta \"inspeccionar elemento\" utilizando la herramienta \"Selector de objetos\" (\"Ctrl\" + \"Shift\" + \"C\"): se debe posicionar en los distintos elementos y revisar los ejemplos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q18",
            "codigo": "3.2.3",
            "indicador": "Llamado a la acción claro",
            "descripcion": "Presencia de enlaces y botones con llamados a la acción claros y descriptivos.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los enlaces del sitio web tienen llamados a la acción claros?  Por ejemplo: para acceder a un formulario de registro el botón dice claramente la palabra \"Registrarse\" en vez de decir \"Haga clic aquí\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q19",
            "codigo": "3.2.4",
            "indicador": "Predecible al recibir entrada",
            "descripcion": "Preocupación por que los cambios y acciones que ocurran en el sitio web sean predecibles, esto se hace al explicar la acción antes de que se ejecute.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los cambios y acciones que ocurren en el sitio son predecibles o están explicados antes de que ocurra una acción?  Por ejemplo: los enlaces externos cuentan con un icono identificador que indica a las personas usuarias que al hacer clic en el enlace este lo sacará de la navegación actual.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q20",
            "codigo": "3.2.5",
            "indicador": "Foco visible",
            "descripcion": "Preocupación de que al navegar el sitio web por teclado se muestre de forma visible el indicador del foco donde está ubicado el usuario.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Al navegar el sitio web por el teclado con la tecla \"Tab\", ¿el foco es claramente visible? Por ejemplo: el foco es marcado con una línea de color que contraste con el diseño del sitio.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q21",
            "codigo": "3.3.1",
            "indicador": "Pausar, detener u ocultar",
            "descripcion": "Alternativa para pausar, detener u ocultar cuando se presenta información que tiene movimiento o se actualiza automáticamente.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿La información que tiene movimiento o se actualiza automáticamente ofrece alternativas para pausar, detener u ocultar?  Por ejemplo: un carrusel de noticias destacadas con un botón de pausa para detener el movimiento.  La opción \"No aplica\" es solo para el caso en que no existan elementos con movimiento en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q22",
            "codigo": "3.3.2",
            "indicador": "Audiodescripción",
            "descripcion": "Descripción clara del contenido de un audio o video.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Los videos cuentan con audiodescripción que detalla todo lo que ocurre?  Por ejemplo: descripción de sonidos (\"[Golpe de puerta]\"), presenta los nombres de los personajes (\"[Ministra Pérez]\") y cambios de escena (\"[Entra el Presidente]\").  La opción \"No aplica\" es solo para el caso en que no existan videos en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q23",
            "codigo": "3.3.3",
            "indicador": "Atajo hacia el contenido",
            "descripcion": "Posibilidad de saltar el encabezado del sitio web y pasar directamente al contenido. Se recomienda el uso del atributo \"accesskey\" en el código HTML.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Se ofrecen alternativas para llegar directo al contenido con la navegación por teclado?  Por ejemplo: presionando las teclas \"Alt\" y \"S\" se salta el encabezado del sitio web y lleva el foco al contenido de una noticia. Para Mac la combinación de teclas es \"Control\" + \"Option\" + \"S\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q24",
            "codigo": "3.3.4",
            "indicador": "Documentos accesibles",
            "descripcion": "Preocupación de ofrecer documentos descargables accesibles para todos los usuarios.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Los documentos descargables que están presentes en el sitio web son accesibles?  Para comprobar accesibilidad en un documento Word debe dirigirse a la pestaña Revisar de Word, luego seleccionar la opción Comprobar accesibilidad, aparecerá una ventana que señalará que no presenta problemas de accesibilidad.  Para comprobar accesibilidad en un documento PDF puede utilizar la herramienta MAUVE++ seleccionando la opción para validar PDF, luego agregar el PDF con su URL o subiendo el archivo y revisar que los resultados entreguen 0 fallas.  La opción \"No aplica\" es solo para el caso en que no se encuentren documentos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-3-q25",
            "codigo": "3.3.5",
            "indicador": "Declaración de accesibilidad",
            "descripcion": "Presencia de una página que explique los aspectos de accesibilidad presentes en el sitio web y declare el nivel de conformidad obtenido al aplicar las Pautas de Accesibilidad para el Contenido Web (WCAG) de la W3C.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El sitio web cuenta con un contenido sobre \"Accesibilidad\" donde menciona el nivel de conformidad de las Pautas de Accesibilidad para el Contenido Web (WCAG) y otras consideraciones para la accesibilidad?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-4",
        "orden": 4,
        "nombre": "Arquitectura de información",
        "descripcion": "Práctica de decidir cómo organizar y rotular de forma lógica el contenido y la navegación de un producto digital para que sea comprensible y que las personas usuarias localicen fácilmente lo que buscan.",
        "sourceSheet": "4Arq",
        "preguntas": [
          {
            "id": "web-4-q1",
            "codigo": "4.1.1",
            "indicador": "Similitud de criterio de organización",
            "descripcion": "Organización de los contenidos según el criterio más adecuado para el contexto, nivel cultural, hábitos informacionales y estructuras mentales de su público objetivo.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los contenidos están clasificados con criterios que les sean intuitivos y familiares para las personas usuarias?  Por ejemplo: el menú principal está ordenado por temas y no por unidades del organigrama interno.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q2",
            "codigo": "4.1.2",
            "indicador": "Jerarquización de la portada",
            "descripcion": "Consonancia entre la distribución de las secciones de la página de inicio y las necesidades de las personas usuarias.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿La portada destaca claramente los contenidos posiblemente más demandados por las personas usuarias?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q3",
            "codigo": "4.1.2.2",
            "indicador": "Jerarquización de la portada",
            "descripcion": "Consonancia entre la distribución de las secciones de la página de inicio y las necesidades de las personas usuarias.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿La página antepone el acceso a trámites y servicios por sobre la información institucional?  La opción \"No aplica\" es solo para el caso en que no existan trámites o servicios en el sitio web examinado.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q4",
            "codigo": "4.1.2.3",
            "indicador": "Jerarquización de la portada",
            "descripcion": "Consonancia entre la distribución de las secciones de la página de inicio y las necesidades de las personas usuarias.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Existe información institucional en el pie de página?  Por ejemplo: aparece el nombre completo de la institución, su dependencia o dirección física.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q5",
            "codigo": "4.1.2.4",
            "indicador": "Jerarquización de la portada",
            "descripcion": "Consonancia entre la distribución de las secciones de la página de inicio y las necesidades de las personas usuarias.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se evita el uso excesivo de banners en la portada? Por ejemplo: no más de 10 banners informativos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q6",
            "codigo": "4.1.3",
            "indicador": "Consistencia del rotulado",
            "descripcion": "Coherencia en el uso y estilo de las etiquetas en todo el sitio.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se mantienen constantes los rótulos o etiquetas tanto en la portada como en las páginas interiores?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q7",
            "codigo": "4.1.4",
            "indicador": "Claridad del rotulado",
            "descripcion": "Facilidad de comprensión de las etiquetas del menú.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los rótulos o etiquetas describen de forma clara y directa el contenido de cada categoría?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q8",
            "codigo": "4.1.5",
            "indicador": "Notoriedad de la navegación",
            "descripcion": "Presencia y visibilidad del menú de navegación, sus opciones, localización del usuario, estado del sistema y etapa o paso del trámite.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se advierten claramente las opciones del menú de navegación?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q9",
            "codigo": "4.1.5.2",
            "indicador": "Notoriedad de la navegación",
            "descripcion": "Presencia y visibilidad del menú de navegación, sus opciones, localización del usuario, estado del sistema y etapa o paso del trámite.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El menú está en una posición destacada?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q10",
            "codigo": "4.1.5.3",
            "indicador": "Notoriedad de la navegación",
            "descripcion": "Presencia y visibilidad del menú de navegación, sus opciones, localización del usuario, estado del sistema y etapa o paso del trámite.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se identifican fácilmente los elementos cliqueables en el menú?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q11",
            "codigo": "4.1.5.4",
            "indicador": "Notoriedad de la navegación",
            "descripcion": "Presencia y visibilidad del menú de navegación, sus opciones, localización del usuario, estado del sistema y etapa o paso del trámite.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Existen elementos que contextualizan a la persona usuaria respecto de su ubicación, nivel de avance en la navegación y estado del sistema?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q12",
            "codigo": "4.1.6",
            "indicador": "Menú de navegación principal",
            "descripcion": "Presencia de una navegación principal clara y consistente para las personas usuarias, que además privilegie la navegación dentro del mismo sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se evita el uso de siglas en el menú de navegación principal?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q13",
            "codigo": "4.1.6.2",
            "indicador": "Menú de navegación principal",
            "descripcion": "Presencia de una navegación principal clara y consistente para las personas usuarias, que además privilegie la navegación dentro del mismo sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Todos los enlaces del menú de navegación están en español?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q14",
            "codigo": "4.1.6.3",
            "indicador": "Menú de navegación principal",
            "descripcion": "Presencia de una navegación principal clara y consistente para las personas usuarias, que además privilegie la navegación dentro del mismo sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Todos los enlaces del menú de navegación principal funcionan correctamente?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q15",
            "codigo": "4.1.6.4",
            "indicador": "Menú de navegación principal",
            "descripcion": "Presencia de una navegación principal clara y consistente para las personas usuarias, que además privilegie la navegación dentro del mismo sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Todos los enlaces del menú principal conducen a páginas dentro del mismo sitio web?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q16",
            "codigo": "4.1.6.5",
            "indicador": "Menú de navegación principal",
            "descripcion": "Presencia de una navegación principal clara y consistente para las personas usuarias, que además privilegie la navegación dentro del mismo sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Todos los enlaces del menú principal conducen a páginas y no a documentos? Por ejemplo: no se enlazan archivos PDFs, Word, Excel o documentos compartidos de Google desde las opciones del menú.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q17",
            "codigo": "4.2.1",
            "indicador": "Marca o nombre de fantasía",
            "descripcion": "Identificación formal de la institución que usa un nombre de fantasía.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Si la institución cuenta con una marca o nombre de fantasía, ¿su significado se explica con un texto complementario? Por ejemplo: \"ChileAtiende: trámites y beneficios del Estado\", \"Salud Responde: asistencia telefónica y vía redes sociales\", \"IFE Laboral Apoya: incentivo al empleo formal\".  La opción \"No aplica\" es solo para el caso en que la institución no cuente con una marca o nombre de fantasía.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q18",
            "codigo": "4.2.2",
            "indicador": "Regla de los 3 clics",
            "descripcion": "Acceso a los contenidos desde portada o cualquier parte del sitio web en no más de tres enlaces de distancia.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los contenidos y servicios más relevantes para las personas usuarias se pueden encontrar a no más de 3 clics desde la portada?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q19",
            "codigo": "4.2.3",
            "indicador": "Precisión del rotulado",
            "descripcion": "Capacidad de los rótulos para expresar su significado de manera directa y concisa.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se evita el uso de siglas, eufemismos o términos rebuscados en los rótulos o etiquetas?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q20",
            "codigo": "4.2.3.2",
            "indicador": "Precisión del rotulado",
            "descripcion": "Capacidad de los rótulos para expresar su significado de manera directa y concisa.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se evita el exceso de palabras?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q21",
            "codigo": "4.2.3.3",
            "indicador": "Precisión del rotulado",
            "descripcion": "Capacidad de los rótulos para expresar su significado de manera directa y concisa.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los textos de los enlaces (rótulos) son descriptivos del contenido o sitio al que dirigen o directos en el llamado a la acción que impulsan, evitando términos ambiguos como \"Haga clic aquí\" o \"Más\"?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q22",
            "codigo": "4.2.4",
            "indicador": "Concisión del rotulado",
            "descripcion": "Brevedad y economía de palabras en las etiquetas, acorde al tiempo de lectura en internet y al espacio reducido en dispositivos móviles.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se alcanza a leer todo el menú global del sitio en breves segundos?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q23",
            "codigo": "4.2.4.2",
            "indicador": "Concisión del rotulado",
            "descripcion": "Brevedad y economía de palabras en las etiquetas, acorde al tiempo de lectura en internet y al espacio reducido en dispositivos móviles.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los textos se ajustan correctamente a la pantalla en dispositivos móviles? Para verificar la visualización en diferentes dispositivos, presiona F12 para abrir las herramientas del navegador y ajusta la vista seleccionando diferentes tamaños de pantalla en la opción \"Dimensiones\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q24",
            "codigo": "4.2.5",
            "indicador": "Equilibrio de la navegación",
            "descripcion": "Apropiado número de opciones del menú. Balance entre su extensión y nivel de profundidad.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El menú global presenta menos de ocho opciones?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q25",
            "codigo": "4.2.5.2",
            "indicador": "Equilibrio de la navegación",
            "descripcion": "Apropiado número de opciones del menú. Balance entre su extensión y nivel de profundidad.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se evita que haya más de dos niveles de submenús?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q26",
            "codigo": "4.2.6",
            "indicador": "Pertinencia de la navegación",
            "descripcion": "Adecuada ubicación de los enlaces, de manera tal que aparezcan en contexto y brinden acceso oportuno a la información.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los botones de llamado a la acción están situados en una posición que estimule su uso?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q27",
            "codigo": "4.2.6.2",
            "indicador": "Pertinencia de la navegación",
            "descripcion": "Adecuada ubicación de los enlaces, de manera tal que aparezcan en contexto y brinden acceso oportuno a la información.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Existen enlaces contextuales al contenido de la página que se está visitando?  Por ejemplo: en la descripción de un trámite, aparecen accesos del tipo \"Otros trámites relacionados\" o \"Ver también\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q28",
            "codigo": "4.2.6.3",
            "indicador": "Pertinencia de la navegación",
            "descripcion": "Adecuada ubicación de los enlaces, de manera tal que aparezcan en contexto y brinden acceso oportuno a la información.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Existen categorías o etiquetas (tags) que permitan acceder a otros contenidos con la misma clasificación?  Por ejemplo: navegar por todas las noticias clasificadas con la etiqueta \"Cuenta Pública 2024\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-4-q29",
            "codigo": "4.3.1",
            "indicador": "Flexibilidad de organización",
            "descripcion": "Clasificación de la información por distintos esquemas o estructuras de organización con el objetivo de ofrecer opciones de acceso a los usuarios.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Cuenta el sitio web con más de una forma de organización para acceder a la información?  Por ejemplo: una institución puede tener una navegación principal por temas, pero tener un segundo menú por tipos de público o contar con un mapa del sitio.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-5",
        "orden": 5,
        "nombre": "Búsqueda y encontrabilidad",
        "descripcion": "Disposición para ayudar a las personas usuarias a encontrar lo que necesitan: implica que debe contar con un sistema de navegación visible y completo, pero que además debe estar complementado por algún sistema de búsqueda que sea efectivo para acceder al contenido que no se encuentra a simple vista.",
        "sourceSheet": "5Bús",
        "preguntas": [
          {
            "id": "web-5-q1",
            "codigo": "5.1.1",
            "indicador": "Búsqueda interna",
            "descripcion": "Presencia destacada de un buscador interno, que rastree, indexe y recupere todas las páginas del sitio y ofrezca eficientemente los contenidos más relevantes frente a las consultas de las personas usuarias.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio cuenta con un buscador interno que permita acceder a todas las páginas del sitio?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-5-q2",
            "codigo": "5.1.1.2",
            "indicador": "Búsqueda interna",
            "descripcion": "Presencia destacada de un buscador interno, que rastree, indexe y recupere todas las páginas del sitio y ofrezca eficientemente los contenidos más relevantes frente a las consultas de las personas usuarias.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Está ubicado de manera destacada, idealmente en la parte superior de la página?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-5-q3",
            "codigo": "5.1.1.3",
            "indicador": "Búsqueda interna",
            "descripcion": "Presencia destacada de un buscador interno, que rastree, indexe y recupere todas las páginas del sitio y ofrezca eficientemente los contenidos más relevantes frente a las consultas de las personas usuarias.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En la página de inicio, ¿la búsqueda es una caja de texto (campo que permite escribir directamente) y no un enlace?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-5-q4",
            "codigo": "5.1.1.4",
            "indicador": "Búsqueda interna",
            "descripcion": "Presencia destacada de un buscador interno, que rastree, indexe y recupere todas las páginas del sitio y ofrezca eficientemente los contenidos más relevantes frente a las consultas de las personas usuarias.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El buscador interno funciona correctamente?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-5-q5",
            "codigo": "5.1.1.5",
            "indicador": "Búsqueda interna",
            "descripcion": "Presencia destacada de un buscador interno, que rastree, indexe y recupere todas las páginas del sitio y ofrezca eficientemente los contenidos más relevantes frente a las consultas de las personas usuarias.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El buscador interno indica expresamente cuando no se encuentran resultados?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-5-q6",
            "codigo": "5.2.1",
            "indicador": "Mapa del sitio",
            "descripcion": "Opción de navegación suplementaria que enlaza todo el sitio, refleja su estructura y evita la presencia de páginas aisladas.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Existe un mapa del sitio con enlace a todas las secciones y principales contenidos?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-5-q7",
            "codigo": "5.2.2",
            "indicador": "Optimización",
            "descripcion": "Adecuación y jerarquización del contenido sobre la base de las palabras más buscadas y el patrón de navegación de las personas usuarias.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las palabras clave más representativas del quehacer de la institución están presentes en los títulos, descripción y URLs de las páginas del sitio?  Por ejemplo: para identificarlas, éstas se pueden encontrar en la misión, en los nombres de los principales servicios y en los temas que aborda la institución, las que idealmente deberían coincidir con las palabras que buscarían las personas usuarias.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-5-q8",
            "codigo": "5.2.2.2",
            "indicador": "Optimización",
            "descripcion": "Adecuación y jerarquización del contenido sobre la base de las palabras más buscadas y el patrón de navegación de las personas usuarias.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se repiten estas palabras claves en las páginas internas de contenido?  Una forma de comprobarlo es utilizando la opción \"Buscar\" del navegador (Control + F en Google Chrome).",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-5-q9",
            "codigo": "5.2.2.3",
            "indicador": "Optimización",
            "descripcion": "Adecuación y jerarquización del contenido sobre la base de las palabras más buscadas y el patrón de navegación de las personas usuarias.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿La estructura de las páginas está organizada de forma lógica e intuitiva, con un tamaño de texto que permite identificar claramente las jerarquías visuales? Por ejemplo: los títulos son visiblemente más grandes que los subtítulos, y los títulos son considerablemente más grandes que el texto.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-5-q10",
            "codigo": "5.3.1",
            "indicador": "Búsqueda predictiva",
            "descripcion": "Proporción de un texto predictivo en la búsqueda para minimizar los errores.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El buscador del sitio tiene texto predictivo? Por ejemplo, al escribir \"certificado\", se despliegan opciones como \"certificado de matrimonio\", \"certificado de nacimiento\" o \"certificado de defunción\".  La opción \"No aplica\" solo corresponde si el sitio web no cuenta con un buscador.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-5-q11",
            "codigo": "5.3.2",
            "indicador": "Búsqueda avanzada",
            "descripcion": "Buscador interno con mayores opciones de refinamiento de las consultas y parametrización de los resultados.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Existe una búsqueda avanzada? Por ejemplo: que permita buscar solo sobre tipos de contenidos específicos (como trámites, noticias, actividades, productos o servicios) o permita seleccionar campos específicos para buscar, como autor, título o publicación.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-5-q12",
            "codigo": "5.3.2.2",
            "indicador": "Búsqueda avanzada",
            "descripcion": "Buscador interno con mayores opciones de refinamiento de las consultas y parametrización de los resultados.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Permite ordenar los resultados de búsqueda?  Por ejemplo: por criterios de fecha o relevancia.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-5-q13",
            "codigo": "5.3.3",
            "indicador": "Recomendación predictiva",
            "descripcion": "Oferta de contenidos y enlaces relacionados que permita a los usuarios profundizar o descubrir nueva información, sobre la base de sus preferencias y patrones de navegación previos.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿En el sitio se recomiendan enlaces que puedan ser de interés según el comportamiento de navegación de las personas usuarias?  Por ejemplo: \"Porque buscaste 'x', te puede interesar 'z'...\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-5-q14",
            "codigo": "5.3.4",
            "indicador": "Alternativas de búsqueda",
            "descripcion": "Entrega de opciones de búsqueda en caso de no encontrar resultados.",
            "prioridad": "Deseable",
            "preguntaChequeo": "Si no hubo resultados después de una búsqueda, ¿el sistema ofrece ideas u opciones para mejorar la búsqueda basados en problemas identificables con la búsqueda de la persona usuaria?  Por ejemplo: la persona usuaria busca \"bono marzo\" y el sistema no arroja resultados, pero da la opción de buscar \"Aporte familiar permanente (ex bono marzo)\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-6",
        "orden": 6,
        "nombre": "Responsividad móvil",
        "descripcion": "Cualidad que posee un sitio web para adaptarse a todos los dispositivos y tamaños de pantalla, sin perder calidad ni información esencial.",
        "sourceSheet": "6Res",
        "preguntas": [
          {
            "id": "web-6-q1",
            "codigo": "6.1.1",
            "indicador": "Visualización móvil",
            "descripcion": "Diseño responsivo, formulado y desarrollado para ser accesible desde cualquier dispositivo móvil.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio web se puede visualizar correctamente desde un teléfono celular o una tablet?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-6-q2",
            "codigo": "6.1.1.2",
            "indicador": "Visualización móvil",
            "descripcion": "Diseño responsivo, formulado y desarrollado para ser accesible desde cualquier dispositivo móvil.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Las funcionalidades del sitio se pueden usar correctamente desde un teléfono celular o una tablet?  Por ejemplo: si en un formulario se pide cargar documentos, esta funcionalidad no se ve interrumpida si se hace desde un teléfono celular o una tablet.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-6-q3",
            "codigo": "6.1.1.3",
            "indicador": "Visualización móvil",
            "descripcion": "Diseño responsivo, formulado y desarrollado para ser accesible desde cualquier dispositivo móvil.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El menú de navegación del sitio web se convierte en un menú desplegable o se reorganiza para mejorar la navegación en los diversos dispositivos móviles?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-6-q4",
            "codigo": "6.1.1.4",
            "indicador": "Visualización móvil",
            "descripcion": "Diseño responsivo, formulado y desarrollado para ser accesible desde cualquier dispositivo móvil.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Solo existe una versión del sitio y se evita la creación de una versión especial para dispositivos móviles paralela o una aplicación para descarga, que muestre otra información?  Por ejemplo: al navegar el sitio, este no debiera pedir descargar alguna aplicación para acceder a un contenido o servicio.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-6-q5",
            "codigo": "6.1.1.5",
            "indicador": "Visualización móvil",
            "descripcion": "Diseño responsivo, formulado y desarrollado para ser accesible desde cualquier dispositivo móvil.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los textos se ven enteros, sin cortarse o sobreponerse a otros elementos?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-6-q6",
            "codigo": "6.1.1.6",
            "indicador": "Visualización móvil",
            "descripcion": "Diseño responsivo, formulado y desarrollado para ser accesible desde cualquier dispositivo móvil.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En móvil, ¿se prioriza la presentación del logo institucional y menú por sobre otros enlaces? Por ejemplo: la primera franja que se ve en móvil es la imagen institucional y el menú de navegación.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-6-q7",
            "codigo": "6.2.1",
            "indicador": "Adaptabilidad",
            "descripcion": "Adecuación automática de un sitio web con sus elementos visuales y contenidos para que sean visualizados correctamente en cualquier dispositivo.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El sitio web se adapta y visualiza correctamente en diferentes tamaños de pantalla?  Por ejemplo: se visualiza de forma correcta tanto en un monitor de un notebook pequeño como en un monitor grande de un PC.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-6-q8",
            "codigo": "6.2.1.2",
            "indicador": "Adaptabilidad",
            "descripcion": "Adecuación automática de un sitio web con sus elementos visuales y contenidos para que sean visualizados correctamente en cualquier dispositivo.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los números telefónicos están enlazados o cuentan con el formato correcto para marcar directamente desde un celular?  La opción \"No aplica\" es solo para el caso en que no exista canal telefónico.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-7",
        "orden": 7,
        "nombre": "Diseño e imagen institucional",
        "descripcion": "Elementos visuales y gráficos para comunicar mensajes de forma efectiva que permitan proyectar la imagen institucional dentro del contexto de nuestro país, velando por un mensaje y contenido claro. Es importante mantener conectores visuales que vinculen e identifiquen a las instituciones, como tipografías, colores y algunas definiciones gráficas.",
        "sourceSheet": "7Dis",
        "preguntas": [
          {
            "id": "web-7-q1",
            "codigo": "7.1.1",
            "indicador": "Imagen gubernamental",
            "descripcion": "Conectores visuales que vinculan e identifican a los organismos de administración del Estado, como tipografías, colores y definiciones gráficas.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se visualiza claramente que el sitio web se identifica como un Órgano de la Administración del Estado?  Por ejemplo: se visualiza el logo del Gobierno, sus elementos icónicos, algún texto de referencia o enlace en la cabecera o el pie del sitio.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q2",
            "codigo": "7.1.1.2",
            "indicador": "Imagen gubernamental",
            "descripcion": "Conectores visuales que vinculan e identifican a los organismos de administración del Estado, como tipografías, colores y definiciones gráficas.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En el caso de los organismos gubernamentales, ¿los elementos gráficos del sitio web son elaborados a partir de las directrices del Gobierno?  Por ejemplo: se usan y aplican los fundamentos de diseño del UI Kit del Gobierno Digital como \"colores, tipografías, espaciado\" y elementos gráficos como \"botones, alertas, etc..\"  La opción \"No aplica\" es solo para el caso en que el sitio web examinado no pertenezca al gobierno central.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q3",
            "codigo": "7.1.1.3",
            "indicador": "Imagen gubernamental",
            "descripcion": "Conectores visuales que vinculan e identifican a los organismos de administración del Estado, como tipografías, colores y definiciones gráficas.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El texto del logo de la institución es totalmente legible?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q4",
            "codigo": "7.1.2",
            "indicador": "Enlaces perceptibles",
            "descripcion": "Condición de los enlaces del sitio web, que se deben diferenciar claramente de un párrafo de texto o títulos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los textos que son enlaces se diferencian claramente de otro texto que no sea enlace?  Por ejemplo: se utilizan enlaces subrayados o en un color notoriamente contrastante.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q5",
            "codigo": "7.1.3",
            "indicador": "Integridad estética",
            "descripcion": "Coherencia de los elementos visuales, los que deben disponerse de la misma manera y permitir mantener una apariencia consistente en todo el sitio, para que brinden una experiencia visual unificada para las personas usuarias.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio web mantiene un diseño gráfico consistente en todas sus secciones, utilizando colores, tipografías y estilos gráficos homogéneos para ofrecer una experiencia visual coherente? Por ejemplo: los contenidos interiores mantienen una apariencia similar a la portada, utilizando elementos gráficos, paletas de colores y tipografía consistentes.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q6",
            "codigo": "7.2.1",
            "indicador": "Tipografía",
            "descripcion": "Uso de tipografías que faciliten la legibilidad, con un tamaño adaptable a las diferentes condiciones de las personas usuarias y dispositivos. Adopción de las familias tipográficas establecidas en el sistema de diseño gubernamental.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se utilizan familias tipográficas optimizadas para la lectura en pantalla, especialmente las de palo seco (sin conectores visuales entre las letras) o sin \"serif?  Por ejemplo: Roboto, Verdana, Arial.  En el punto IV de la guía, puede consultar cómo verificar el tipo de fuente.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q7",
            "codigo": "7.2.1.2",
            "indicador": "Tipografía",
            "descripcion": "Uso de tipografías que faciliten la legibilidad, con un tamaño adaptable a las diferentes condiciones de las personas usuarias y dispositivos. Adopción de las familias tipográficas establecidas en el sistema de diseño gubernamental.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Su tamaño permite una adecuada legibilidad?  Por ejemplo: igual o superior a 16 puntos, con un espaciado de al menos 1,5 veces del tamaño de la fuente y alto contraste, evitando letras grises sobre fondos blancos.   En el punto IV de la guía, puede consultar cómo verificar el tamaño de los textos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q8",
            "codigo": "7.2.1.3",
            "indicador": "Tipografía",
            "descripcion": "Uso de tipografías que faciliten la legibilidad, con un tamaño adaptable a las diferentes condiciones de las personas usuarias y dispositivos. Adopción de las familias tipográficas establecidas en el sistema de diseño gubernamental.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Su tamaño se adapta automáticamente al dispositivo?  Esto se puede verificar revisando la estructura jerárquica adecuada entre los tamaños de los títulos, subtítulos y párrafos de texto y que el interlineado de cada párrafo facilite para la lectura. También puede reducir el ancho de su navegador y evaluar si se adapta al nuevo espacio.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q9",
            "codigo": "7.2.1.4",
            "indicador": "Tipografía",
            "descripcion": "Uso de tipografías que faciliten la legibilidad, con un tamaño adaptable a las diferentes condiciones de las personas usuarias y dispositivos. Adopción de las familias tipográficas establecidas en el sistema de diseño gubernamental.",
            "prioridad": "Esperable",
            "preguntaChequeo": "En el caso de organismos del Gobierno central, ¿el sitio web utiliza las tipografías recomendadas en el sistema de diseño gubernamental?  Por ejemplo: las tipografías las tipografías  Roboto Sans y Roboto Slab (solo para títulos)  La opción \"No aplica\" es solo para el caso en que el sitio web examinado no pertenezca al gobierno central.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q10",
            "codigo": "7.2.2",
            "indicador": "Uso del color",
            "descripcion": "Definición de una paleta de colores formulada para afianzar la imagen de la institución, sobre la base de criterios de una adecuada combinación, atractivo visual, coherencia y contraste. Estos deberán estar sujetos a las normas de accesibilidad y, si corresponde, adoptar los lineamientos del sistema de diseño gubernamental.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los colores apoyan el reconocimiento visual de la institución?  Por ejemplo: los colores azul y rojo oficiales del Gobierno.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q11",
            "codigo": "7.2.2.2",
            "indicador": "Uso del color",
            "descripcion": "Definición de una paleta de colores formulada para afianzar la imagen de la institución, sobre la base de criterios de una adecuada combinación, atractivo visual, coherencia y contraste. Estos deberán estar sujetos a las normas de accesibilidad y, si corresponde, adoptar los lineamientos del sistema de diseño gubernamental.",
            "prioridad": "Esperable",
            "preguntaChequeo": "En el caso de organismos del Gobierno central, ¿se consideran los colores de la paleta del UI Kit del Gobierno Digital?  La opción \"No aplica\" es solo para el caso en que el sitio web examinado no pertenezca al gobierno central.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q12",
            "codigo": "7.2.3",
            "indicador": "Uso de imágenes",
            "descripcion": "Selección cuidadosa de imágenes, fotografías y visualizaciones para afianzar la identidad institucional y complementar la información entregada. Es decir, que cuenten con un tratamiento y optimización técnica para el soporte web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se incorpora el logo o elemento icónico de la institución en el encabezado?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q13",
            "codigo": "7.2.3.2",
            "indicador": "Uso de imágenes",
            "descripcion": "Selección cuidadosa de imágenes, fotografías y visualizaciones para afianzar la identidad institucional y complementar la información entregada. Es decir, que cuenten con un tratamiento y optimización técnica para el soporte web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las imágenes tienen la calidad adecuada para su correcta visualización y se evita que se vean pixeladas a primera vista?  La opción \"No aplica\" es solo para el caso en que no existan imágenes en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q14",
            "codigo": "7.2.3.3",
            "indicador": "Uso de imágenes",
            "descripcion": "Selección cuidadosa de imágenes, fotografías y visualizaciones para afianzar la identidad institucional y complementar la información entregada. Es decir, que cuenten con un tratamiento y optimización técnica para el soporte web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las imágenes tienen títulos, descripciones o pies de fotos apropiados? El pie de foto es una explicación breve que se sitúa bajo cada ilustración, foto o figura en una publicación. Aunque sea el pie lo que le da nombre, también puede ubicarse en otros lugares, como en la parte superior.  La opción \"No aplica\" es solo para el caso en que no existan imágenes en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q15",
            "codigo": "7.2.3.4",
            "indicador": "Uso de imágenes",
            "descripcion": "Selección cuidadosa de imágenes, fotografías y visualizaciones para afianzar la identidad institucional y complementar la información entregada. Es decir, que cuenten con un tratamiento y optimización técnica para el soporte web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las fotografías están bien recortadas y tienen un encuadre adecuado?  Por ejemplo: los banners tienen un contenedor rectangular. Para minimizar o evitar recortes, hay que asegurarse de que la forma de la imagen coincida con la forma del contenedor y no quede recortada la información visual importante.  La opción \"No aplica\" es solo para el caso en que no existan imágenes en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q16",
            "codigo": "7.2.3.5",
            "indicador": "Uso de imágenes",
            "descripcion": "Selección cuidadosa de imágenes, fotografías y visualizaciones para afianzar la identidad institucional y complementar la información entregada. Es decir, que cuenten con un tratamiento y optimización técnica para el soporte web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se privilegia el uso de fotografías en el que aparezcan personas usuarias, lugares y situaciones reales en vez de usar imágenes de bancos de fotos comerciales?  La opción \"No aplica\" es solo para el caso en que no existan imágenes en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q17",
            "codigo": "7.2.3.6",
            "indicador": "Uso de imágenes",
            "descripcion": "Selección cuidadosa de imágenes, fotografías y visualizaciones para afianzar la identidad institucional y complementar la información entregada. Es decir, que cuenten con un tratamiento y optimización técnica para el soporte web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Los elementos que contienen texto informativo, como botones de acción e infografías, se disponen como texto seleccionable en vez de presentarlo dentro de una imagen.  La opción \"No aplica\" corresponde solo cuando no hay botones de acción, infografías u otros elementos con texto informativo en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q18",
            "codigo": "7.2.4",
            "indicador": "Distribución de los elementos",
            "descripcion": "Jerarquía de los elementos que se deben comprender a primera vista, sin ruido visual ni sobrecarga informativa.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los elementos de la interfaz se pueden identificar claramente a primera vista?  Por ejemplo: se puede encontrar fácilmente donde está el menú principal, el pie de página o el buscador.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q19",
            "codigo": "7.2.4.2",
            "indicador": "Distribución de los elementos",
            "descripcion": "Jerarquía de los elementos que se deben comprender a primera vista, sin ruido visual ni sobrecarga informativa.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Es una interfaz limpia, sin ruido visual?  Por ejemplo: los elementos visuales como figuras o colores, no están demasiado saturados y se evitan las ventanas emergentes que no aportan a la navegación del sitio.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q20",
            "codigo": "7.2.5",
            "indicador": "Atractivo visual",
            "descripcion": "Apariencia atractiva y armoniosa que logra captar la atención del usuario.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿La presentación visual del sitio es armoniosa, limpia y minimalista, orientada a la funcionalidad?  Por ejemplo: mantener sólo unos pocos componentes necesarios en la interfaz del sitio y dejar espacios en blanco o aires, para permitir centrar la atención en el contenido principal con más facilidad.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q21",
            "codigo": "7.2.6",
            "indicador": "Expresividad de iconos",
            "descripcion": "Capacidad de los iconos para ser claros y precisos en lo que quieren expresar, sin llevar a una interpretación o confusión.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿La iconografía es clara y ayuda a llamar a la acción de manera más rápida?  Por ejemplo: el icono de \"flecha a la derecha\" significa \"siguiente\" o \"continuar\".  La opción \"No aplica\" corresponde solo cuando no iconografía.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-7-q22",
            "codigo": "7.3.1",
            "indicador": "Familiaridad",
            "descripcion": "Cercanía y capacidad de reconocimiento a simple vista del diseño, sin necesidad de un aprendizaje previo.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El diseño y la distribución de los elementos siguen un orden familiar para las personas usuarias, similar a otros sitios web? Por ejemplo: el menú principal está en el encabezado, el logo en la esquina superior izquierda y el buscador a la derecha.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-8",
        "orden": 8,
        "nombre": "Seguridad",
        "descripcion": "Apego a estándares de desarrollo, compatibilidad y directrices para cautelar la seguridad de los sistemas. Esto protege la disponibilidad, integridad y confidencialidad de la información y datos institucionales y personales.",
        "sourceSheet": "8Seg",
        "preguntas": [
          {
            "id": "web-8-q1",
            "codigo": "8.1.1",
            "indicador": "Certificado SSL válido y vigente",
            "descripcion": "Utilización de mecanismos SSL/TLS o los protocolos de seguridad que los reemplacen. El certificado debe ser válido y estar vigente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "\"¿El sitio web utiliza el protocolo seguro HTTPS en su URL? Para verificarlo, haga doble clic en la barra de direcciones y asegúrese de que la URL comience con \"https://\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-8-q2",
            "codigo": "8.1.1.2",
            "indicador": "Certificado SSL válido y vigente",
            "descripcion": "Utilización de mecanismos SSL/TLS o los protocolos de seguridad que los reemplacen. El certificado debe ser válido y estar vigente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El certificado SSL/TLS es válido?  Por ejemplo: al revisar en Google Chrome a través del ícono \"Consulta la información del sitio\", que se encuentra inmediatamente a la izquierda de la URL en la barra de direcciones del navegador, luego verificar que existe el texto \"La conexión es segura\".  En el punto VII de la guía, puede verificar la conexión segura y si el certificado es válido.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-8-q3",
            "codigo": "8.1.2",
            "indicador": "Redirección de HTTP a HTTPS",
            "descripcion": "Redirección de las solicitudes con protocolo HTTP a su equivalente con protocolo HTTPS.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Al acceder con el protocolo HTTP a las páginas del sitio se realiza la redirección a la versión con protocolo HTTPS?  Por ejemplo: al ingresar en la URL \"http://sitioejemplo.gob.cl/algo\" esta redirige a \"https://sitioejemplo.gob.cl/algo\". Se puede probar quitando la letra \"s\" del protocolo de la url  de la página que está probando.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-8-q4",
            "codigo": "8.1.3",
            "indicador": "Bloqueo de enmascarado",
            "descripcion": "Inhibición de la posibilidad de enmascarar el sitio dentro de un sitio externo a través de un \"frame\".",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio web tiene configurada la cabecera \"X-Frame-Options\" con los valores \"DENY\" o \"SAMEORIGIN\"?  Para la verificación se deben revisar las cabeceras de la página, usando la herramienta https://securityheaders.com: 1. Primero se debe ingresar la URL de una página diferente de la portada y  2. luego dentro de los resultados el subtítulo \"Encabezados sin formato\" (Raw Headers en inglés), se encontrarán la lista de cabeceras de la página, en la que se debe buscar la cabecera \"X-Frame-Options\" y verificar que tenga los valores \"DENY\" o \"SAMEORIGIN\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-8-q5",
            "codigo": "8.1.4",
            "indicador": "Directorios desactivados",
            "descripcion": "Configuración del servidor web debe mantener inhabilitado el acceso a ver los contenidos de los directorios.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El servidor web está configurado de manera que no se muestra el contenido de los directorios (carpetas internas)?   Para la verificación: 1. Identificar una fotografía que sea parte del contenido de una noticia, sobre esta hacer un clic con el botón secundario del mouse y seleccionar la opción \"Copiar dirección de la imagen\". 2. La forma de probar será ver si es visible el directorio que contiene la imagen. 3. Se debe pegar y editar la url de la imagen de la siguiente manera: por ejemplo, si la URL es \"https://sitioejemplo.gob.cl/images/foto.jpg\" se debe eliminar el nombre del archivo de la imagen –en este caso, sacando \"foto.jpg\"– y probando la URL \"https://sitioejemplo.gob.cl/images/\".  4. Un servidor seguro mostrará algún tipo de error en vez de un listado de los contenidos que contiene el directorio.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-8-q6",
            "codigo": "8.2.1",
            "indicador": "Política de privacidad",
            "descripcion": "Presencia de una política que describa cómo se recopila, utiliza, gestiona, protege y divulga la información de las personas usuarias que utilizan el sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se presenta un enlace a la política de privacidad en el sitio web?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-8-q7",
            "codigo": "8.2.1.2",
            "indicador": "Política de privacidad",
            "descripcion": "Presencia de una política que describa cómo se recopila, utiliza, gestiona, protege y divulga la información de las personas usuarias que utilizan el sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Este enlace está en el pie de cada página del sitio web?  La opción \"No aplica\" es solo para el caso en que no exista un enlace a la política de privacidad.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-8-q8",
            "codigo": "8.3.1",
            "indicador": "Prevención de ataques MIME",
            "descripcion": "Uso de la cabecera \"X-Content-Type-Options\" con el valor \"nosniff\" para así indicar a los navegadores que deben respetar el tipo MIME (Multipurpose Internet Mail Extensions) especificado por el servidor.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El sitio tiene configurada la cabecera \"X-Content-Type-Options\" con el valor \"nosniff\"?  Para la verificación se deben revisar las cabeceras de la página, usando la herramienta https://securityheaders.com: 1. Primero se debe ingresar la URL de una página diferente de la portada y  2. Luego, dentro de los resultados, el subtítulo \"Encabezados sin formato\" (Raw Headers en inglés), se encontrarán la lista de cabeceras de la página, en la que se debe buscar la cabecera \"X-Content-Type-Options\" y verificar que tenga el valor \"nosniff\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-8-q9",
            "codigo": "8.3.2",
            "indicador": "Límite de referencias Referrer-Policy",
            "descripcion": "Utilización de la cabecera \"Referrer-Policy\" con el valor \"strict-origin\" para controlar la cantidad de información de referencia que se envía al realizar solicitudes desde una página.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El sitio web tiene configurada la cabecera \"Referrer-Policy\" con el valor \"strict-origin\"?   Para la verificación se deben revisar las cabeceras de la página, usando la herramienta https://securityheaders.com: 1. Primero se debe ingresar la URL de una página diferente de la portada y  2. Luego, dentro de los resultados, el subtítulo \"Encabezados sin formato\" (Raw Headers en inglés), se encontrarán la lista de cabeceras de la página, en la que se debe buscar la cabecera \"Referrer-Policy\" y verificar que tenga el valor \"strict-origin\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-8-q10",
            "codigo": "8.3.3",
            "indicador": "Aviso de uso de cookies",
            "descripcion": "Información clara que informe al usuario sobre la política de uso de cookies.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Proporciona el sitio web información clara y comprensible sobre el tipo de cookies que utiliza, sus finalidades y las opciones de control disponibles para el usuario? Por ejemplo: en la Política de Privacidad del sitio web se indica que las cookies no almacenan datos personales, ni el sitio web las comparte con terceros.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-9",
        "orden": 9,
        "nombre": "Tecnología",
        "descripcion": "Conjunto de herramientas y estándares para la creación y funcionamiento de productos digitales. Se deben priorizar las herramientas y tecnologías que faciliten crear un servicio de alta calidad de forma rentable y que permitan minimizar el costo de cambiar en el futuro.",
        "sourceSheet": "9Tec",
        "preguntas": [
          {
            "id": "web-9-q1",
            "codigo": "9.1.1",
            "indicador": "Disponibilidad y estabilidad",
            "descripcion": "Capacidad de un sitio web para estar accesible y operativo en todo momento. Además de mantener su funcionamiento sin caídas, errores o interrupciones, proporcionando una experiencia consistente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El servicio o sitio web estuvo disponible durante todo el período de evaluación?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-9-q2",
            "codigo": "9.1.1.2",
            "indicador": "Disponibilidad y estabilidad",
            "descripcion": "Capacidad de un sitio web para estar accesible y operativo en todo momento. Además de mantener su funcionamiento sin caídas, errores o interrupciones, proporcionando una experiencia consistente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los multicanales digitales para realizar consultas generales o solicitar información personalizada estuvieron disponibles durante la evaluación?  Por ejemplo: asistentes virtuales o chats.  La opción \"No aplica\" es solo para el caso en que no existan multicanales digitales para realizar consultas o solicitar información.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-9-q3",
            "codigo": "9.1.1.3",
            "indicador": "Disponibilidad y estabilidad",
            "descripcion": "Capacidad de un sitio web para estar accesible y operativo en todo momento. Además de mantener su funcionamiento sin caídas, errores o interrupciones, proporcionando una experiencia consistente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Las funcionalidades del sitio web están disponibles las 24 horas los 7 días de la semana? Por ejemplo: un formulario de contacto se puede completar y enviar cualquier día a cualquier hora.  La opción \"No aplica\" es solo para el caso en que no existan formularios u otras funcionalidades.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-9-q4",
            "codigo": "9.1.2",
            "indicador": "Codificación de caracteres",
            "descripcion": "Definición del set de caracteres del sitio web, el que debe ser preferentemente \"UTF-8\".",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se explicita el juego de caracteres UTF-8 a través de un metadato en el código fuente de la página?  Por ejemplo: es posible encontrar la referencia \"<meta charset=\"utf-8\">\" en las primeras líneas del código fuente.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-9-q5",
            "codigo": "9.1.3",
            "indicador": "Hojas de estilo en cascada (CSS)",
            "descripcion": "Utilización de código CSS (hojas de estilo en cascada), en la diagramación y diseño de las páginas, separando el contenido, la estructura y la presentación.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio web se presenta completamente sin diseño al deshabilitar las hojas de estilo?  Una opción para la verificación: 1. Ingresar al inspector de código de Google Chrome (opción \"Inspeccionar\" con el botón secundario del mouse), específicamente a la pestaña \"Consola\" (\"Console\" si se está en inglés) 2. En el inspector se verá la consola en la que se pueden escribir comandos, se podrá reconocer una fila que comienza con el signo \">\", en el caso de haber más de una fila esta se verá en la parte inferior del listado, en esta fila se debe pegar el comando \"document.querySelectorAll('link[rel=stylesheet]').forEach(link => link.disabled = true)\" (sin las comillas) y luego ejecutar con el botón Enter. 3. Es probable que al copiar y pegar el comando en la consola, el navegador haga una advertencia que comienza así: \"No pegues en la consola de Herramientas para desarrolladores código que no entiendas….\". Para habilitar pegar comandos en la consola antes deberás escribir el texto : \"permitir el pegado\" (\"allow pasting\" si está en inglés) y a continuación presionar Enter para permitir pegar comandos.  Se recomienda luego de la comprobación cerrar el inspector y actualizar la página (F5 o Control + F5 para Mac) para seguir con la revisión.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-9-q6",
            "codigo": "9.1.4",
            "indicador": "Especificación de idioma",
            "descripcion": "Uso del atributo HTML \"lang\" para especificar el idioma del sitio o los textos del mismo.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Está presente en la etiqueta \"html\" del código fuente el atributo \"lang\"?  Por ejemplo: al buscar esta referencia lang=\"es\" en el código fuente, deberá aparecer de una manera equivalente a esta: <html lang=\"es\">.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-9-q7",
            "codigo": "9.1.5",
            "indicador": "Funcionamiento de los enlaces",
            "descripcion": "Ausencia de enlaces rotos, enlaces redirigidos y enlaces inválidos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Todos los enlaces del sitio web funcionan correctamente?  Por ejemplo: al utilizar la herramienta de revisión de la W3C Check Link Validator sobre todo el sitio, en la tabla de resultados no aparece ningún resultado con código de error 404 .",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-9-q8",
            "codigo": "9.1.6",
            "indicador": "Soporte a URLs con y sin prefijo www",
            "descripcion": "Habilitación de acceso utilizando o no el prefijo \"www\". Los sitios web deberán visualizarse independiente de la utilización de este prefijo, redirigiendo a la URL final del sitio.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿La URL del sitio funciona sin y con \"www\" como prefijo de dominio?  Por ejemplo: al verificar que las URLs \"https://www.sitioejemplo.gob.cl\" y también \"https://sitioejemplo.gob.cl\", ambas llevan al mismo contenido del sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-9-q9",
            "codigo": "9.1.7",
            "indicador": "Dominio \".gob.cl\"",
            "descripcion": "Utilización del dominio \".gob.cl\", registrándolo previamente ante la División de Informática del Ministerio del Interior y Seguridad Pública y en el sitio web Administración de Dominios gob.cl (nic.gob.cl).",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Si se trata un sitio web del gobierno central, ¿utiliza el dominio .gob.cl?   La opción \"No aplica\" es solo para el caso en que el sitio web examinado no pertenezca al gobierno central.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-9-q10",
            "codigo": "9.1.7.2",
            "indicador": "Dominio \".gob.cl\"",
            "descripcion": "Utilización del dominio \".gob.cl\", registrándolo previamente ante la División de Informática del Ministerio del Interior y Seguridad Pública y en el sitio web Administración de Dominios gob.cl (nic.gob.cl).",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Si existen otros dominios desde los que se pueda acceder al servicio, ¿estos redirigen al sitio web que utiliza el dominio .gob.cl?  La opción \"No aplica\" es solo para el caso en que no exista o no se tenga conocimiento de otras urls alternativas a la oficial .gob.cl.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-9-q11",
            "codigo": "9.2.1",
            "indicador": "Lenguaje HTML5",
            "descripcion": "Utilización del lenguaje de marcado HTML5 para la creación y estructuración de contenido en las páginas web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se encuentra la identificación de HTML5 en la primera línea del código fuente?  Por ejemplo: la referencia \"<!DOCTYPE html>\" está presente en la primera línea del código fuente HTML.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-9-q12",
            "codigo": "9.2.2",
            "indicador": "Compatibilidad HTML",
            "descripcion": "Validación del código HTML en el validador de la W3C: el código debe cumplir o cumplir con reparos.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El código HTML del sitio web no presenta errores al comprobarlo en el validador de la W3C?  La opción \"No aplica\" es solo para el caso en que no sea posible utilizar la herramienta externa.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-9-q13",
            "codigo": "9.2.3",
            "indicador": "Compatibilidad CSS",
            "descripcion": "Validación de la escritura y compatibilidad del código CSS, el que no debe tener errores.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El código CSS del sitio web no presenta errores al comprobarlo en el validador de la W3C?  La opción \"No aplica\" es solo para el caso en que no sea posible utilizar la herramienta externa.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-9-q14",
            "codigo": "9.2.4",
            "indicador": "Optimización y rendimiento",
            "descripcion": "Capacidad de un sitio web para manejar el aumento en el tráfico y la demanda sin comprometer la estabilidad o la rapidez de respuesta.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿La portada del sitio cumple con un resultado sobre 60 en el parámetro rendimiento de Google PageSpeed Insights para la opción escritorio (ordenador)?   Para verificar se debe entrar en el sitio web PageSpeed Insights, ingresar la URL de la portada del sitio y accionar el botón \"Analizar\". Luego del análisis se podrá ver el valor que otorga para el indicador \"Rendimiento\", bajo el subtítulo \"Diagnostica problemas de rendimiento\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-9-q15",
            "codigo": "9.2.4.2",
            "indicador": "Optimización y rendimiento",
            "descripcion": "Capacidad de un sitio web para manejar el aumento en el tráfico y la demanda sin comprometer la estabilidad o la rapidez de respuesta.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿La portada del sitio cumple con un resultado sobre 60 en el parámetro rendimiento de Google PageSpeed Insights para la opción celulares (móvil)?   Para verificar se debe entrar en el sitio web PageSpeed Insights, ingresar la URL de la portada del sitio y accionar el botón \"Analizar\". Luego del análisis se podrá ver el valor que otorga para el indicador \"Rendimiento\", bajo el subtítulo \"Diagnostica problemas de rendimiento\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-9-q16",
            "codigo": "9.2.5",
            "indicador": "Versión de impresión",
            "descripcion": "Adaptación del contenido para una óptima impresión. La finalización de un trámite, sea ésta una página de entrega de información o un certificado, debe poder imprimirse sin dificultad o alteraciones significativas de su apariencia.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los contenidos tienen una versión de impresión optimizada? Por ejemplo, al revisar con Ctrl + P, el contenido se muestra sin elementos que dificulten su lectura. La navegación del sitio no aparece, pero sí el nombre o logo institucional.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-9-q17",
            "codigo": "9.2.5.2",
            "indicador": "Versión de impresión",
            "descripcion": "Adaptación del contenido para una óptima impresión. La finalización de un trámite, sea ésta una página de entrega de información o un certificado, debe poder imprimirse sin dificultad o alteraciones significativas de su apariencia.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los certificados o documentos descargables están optimizados para imprimirse sin dificultades o alteraciones significativas de su apariencia?  La opción \"No aplica\" es solo para el caso en que no se encuentren documentos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-9-q18",
            "codigo": "9.3.1",
            "indicador": "Javascript sin errores",
            "descripcion": "Ausencia de errores de JavaScript en la consola del navegador.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El código JavaScript está libre de errores en la consola del navegador?  Por ejemplo: no figuran errores en la consola del navegador.   Para la verificación se ingresa en la pestaña \"Consola\" (en inglés \"Console\") del inspector de código de Google Chrome (opción \"Inspeccionar\" en el botón secundario o derecho del mouse). En la consola pueden aparecer filas horizontales que muestren advertencias y errores, en el caso de aparecer filas resaltadas con un fondo de color rojo pálido significa que existen errores.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-10",
        "orden": 10,
        "nombre": "Atención a la ciudadanía",
        "descripcion": "Recursos y documentación que ayuden a la persona usuaria a responder sus consultas y necesidades que surjan al utilizar un producto digital. Es recomendable contar con múltiples canales de comunicación para satisfacer las necesidades de soporte.",
        "sourceSheet": "10Ate",
        "preguntas": [
          {
            "id": "web-10-q1",
            "codigo": "10.1.1",
            "indicador": "Contacto",
            "descripcion": "Oferta de múltiples vías de comunicación de las personas usuarias con los puntos de contacto del organismo.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se presentan vías de comunicación entre las personas usuarias y el organismo?  Por ejemplo: formulario de contacto, correo electrónico, teléfono.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-10-q2",
            "codigo": "10.1.1.2",
            "indicador": "Contacto",
            "descripcion": "Oferta de múltiples vías de comunicación de las personas usuarias con los puntos de contacto del organismo.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Existe un enlace a la Oficina de Información, Reclamos y Sugerencias (OIRS)?  La opción \"No aplica\" es solo para el caso de que el sitio corresponda a las siguientes entidades: ministerios, intendencias, gobernaciones, empresas públicas creadas por Ley y diversos servicios públicos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-10-q3",
            "codigo": "10.1.2",
            "indicador": "Horario de atención",
            "descripcion": "Información de horarios de atención en los cuales se pueda acceder a los servicios ofrecidos por la institución.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Existe y es visible al menos en la portada la información sobre los horarios de atención?  La opción \"No aplica\" es solo para el caso en que el organismo no tenga atención al público.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-10-q4",
            "codigo": "10.2.1",
            "indicador": "Recursos de apoyo y documentación",
            "descripcion": "Presencia de recursos y documentación de ayuda a las personas usuarias para responder sus consultas y necesidades de información que les surjan al utilizar un sitio web o servicios digitales.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Ofrece un área de preguntas frecuentes con datos de ayuda a las personas usuarias?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-10-q5",
            "codigo": "10.2.1.2",
            "indicador": "Recursos de apoyo y documentación",
            "descripcion": "Presencia de recursos y documentación de ayuda a las personas usuarias para responder sus consultas y necesidades de información que les surjan al utilizar un sitio web o servicios digitales.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se presentan documentos o recursos de información para que la persona usuaria entienda los trámites y procesos?  Por ejemplo: guías, tutoriales, videos explicativos, manuales descargables.  La opción \"No aplica\" es solo para el caso en que no existan trámites o servicios en el sitio web examinado.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-10-q6",
            "codigo": "10.2.2",
            "indicador": "Sección de ayuda",
            "descripcion": "Existencia de una sección especialmente dedicada a la ayuda para las personas usuarias, que reúna tanto los canales de atención como la documentación.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Existe una sección o mesa de ayuda en el sitio web?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-10-q7",
            "codigo": "10.2.2.2",
            "indicador": "Sección de ayuda",
            "descripcion": "Existencia de una sección especialmente dedicada a la ayuda para las personas usuarias, que reúna tanto los canales de atención como la documentación.",
            "prioridad": "Esperable",
            "preguntaChequeo": "El enlace a la sección de ayuda, ¿está ubicado en una zona visible y destacada?  La opción \"No aplica\" es solo para el caso en que no exista una sección o mesa de ayuda.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-10-q8",
            "codigo": "10.2.3",
            "indicador": "Asistencia en línea",
            "descripcion": "Canales de atención al ciudadano de manera sincrónica para satisfacer las necesidades de soporte que tengan las personas usuarias.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se presentan canales de atención interactivos o en tiempo real para las personas usuarias?  Por ejemplo: chat, teléfono de atención, videollamada, asistentes virtuales.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-10-q9",
            "codigo": "10.2.3.2",
            "indicador": "Asistencia en línea",
            "descripcion": "Canales de atención al ciudadano de manera sincrónica para satisfacer las necesidades de soporte que tengan las personas usuarias.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Es fácil contactarse con alguien para ser asistido ante una consulta?  Por ejemplo: hacer una pregunta de prueba en un chat, contactar a través de un teléfono o correo electrónico.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-10-q10",
            "codigo": "10.2.3.3",
            "indicador": "Asistencia en línea",
            "descripcion": "Canales de atención al ciudadano de manera sincrónica para satisfacer las necesidades de soporte que tengan las personas usuarias.",
            "prioridad": "Esperable",
            "preguntaChequeo": "En el caso de los chatbots generados con inteligencia artificial, ¿se le advierte al usuario claramente que es una herramienta automatizada y no una persona real?  La opción \"No aplica\" es solo para el caso en que no existan chatbots.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-10-q11",
            "codigo": "10.2.3.4",
            "indicador": "Asistencia en línea",
            "descripcion": "Canales de atención al ciudadano de manera sincrónica para satisfacer las necesidades de soporte que tengan las personas usuarias.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se evita denominar estos chatbots con nombres propios para minimizar el riesgo de confusión para las personas usuarias? Por ejemplo: SofIA o ClaudIA.  La opción \"No aplica\" es solo para el caso en que no existan chatbots.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-10-q12",
            "codigo": "10.3.1",
            "indicador": "Espacios participativos",
            "descripcion": "Presencia de espacios para promover la democracia participativa donde se recoja la opinión de la ciudadanía y fomenten hábitos de socialización.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Se presentan en el sitio encuestas, consultas ciudadanas o foros de debate donde se recabe la opinión de las personas usuarias y se fomente la participación activa?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-11",
        "orden": 11,
        "nombre": "Audiovisualidad",
        "descripcion": "Conjunto de objetos interactivos o no interactivos que contienen información representada por texto, imagen, video, animación, sonido u otro tipo de medios.",
        "sourceSheet": "11Aud",
        "preguntas": [
          {
            "id": "web-11-q1",
            "codigo": "11.1.1",
            "indicador": "Derechos de uso de imágenes, videos y archivos de audio",
            "descripcion": "Posesión de los derechos de uso de imágenes, videos o audios publicados en un sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio presenta imágenes, videos y archivos de audio propios?  Por ejemplo: una manera de comprobar autoría es buscando una imagen del sitio en el buscador de imágenes de Google.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-11-q2",
            "codigo": "11.1.1.2",
            "indicador": "Derechos de uso de imágenes, videos y archivos de audio",
            "descripcion": "Posesión de los derechos de uso de imágenes, videos o audios publicados en un sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Si se utiliza contenido ajeno, ¿se declara la fuente o autoría y se menciona el respectivo permiso de uso del autor o propietario?  Por ejemplo: \"Foto: Juan Pérez, licenciada bajo CC BY 4.0 Internacional\", \"Video cortesía de Memoria Chilena\".  La opción \"No aplica\" es solo para el caso en que no exista contenido ajeno.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-11-q3",
            "codigo": "11.2.1",
            "indicador": "Complementariedad",
            "descripcion": "Uso de imágenes, videos y audios para complementar la información publicada en los contenidos.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las imágenes, videos y audios publicados en el sitio web complementan (representan elementos de apoyo) los contenidos publicados?  Por ejemplo: en un contenido referente a cómo obtener la Clave Única, además del texto explicando secuencialmente los pasos que se deben seguir, se puede agregar un video mostrando el paso a paso en la pantalla de un computador, tablet o celular al realizar el trámite. De este modo, el material audiovisual complementa lo expresado a través de texto.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-11-q4",
            "codigo": "11.2.2",
            "indicador": "Formato de imágenes",
            "descripcion": "Especificaciones técnicas de las imágenes publicadas en un sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Predomina el uso de imágenes en formato de nueva generación como WebP que proporciona una mejor compresión que JPG, PNG o GIF?  En el punto V de la guía, puede consultar cómo verificar el formato de las imágenes.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-11-q5",
            "codigo": "11.2.2.2",
            "indicador": "Formato de imágenes",
            "descripcion": "Especificaciones técnicas de las imágenes publicadas en un sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las imágenes pesan menos de 600 KB para no ralentizar la carga de la página?  En el punto V de la guía, puede consultar cómo verificar el peso de las imágenes.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-11-q6",
            "codigo": "11.2.3",
            "indicador": "Formato de videos",
            "descripcion": "Especificaciones técnicas de los videos publicados en un sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los videos tienen la calidad adecuada para su correcta visualización?  Por ejemplo: el video no demora en cargar y la imagen se ve nítida.  La opción \"No aplica\" es solo para el caso en que no existan videos en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-11-q7",
            "codigo": "11.2.3.2",
            "indicador": "Formato de videos",
            "descripcion": "Especificaciones técnicas de los videos publicados en un sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los videos tienen título y descripción?  La opción \"No aplica\" es solo para el caso en que no existan videos en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-11-q8",
            "codigo": "11.2.3.3",
            "indicador": "Formato de videos",
            "descripcion": "Especificaciones técnicas de los videos publicados en un sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se usa streaming adaptable para adecuar la calidad del video según el dispositivo y velocidad de conexión?  Por ejemplo: el video demora menos de 2 segundos en comenzar a reproducirlo.  La opción \"No aplica\" es solo para el caso en que no existan videos en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-11-q9",
            "codigo": "11.2.4",
            "indicador": "Formato de audios",
            "descripcion": "Especificaciones técnicas de los audios publicados en un sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los audios tienen la calidad de sonido adecuada y el volumen mínimo por defecto para su correcta audición?   La opción \"No aplica\" es solo para el caso en que no existan audios en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-11-q10",
            "codigo": "11.2.4.2",
            "indicador": "Formato de audios",
            "descripcion": "Especificaciones técnicas de los audios publicados en un sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los audios tienen título y texto de descripción?  La opción \"No aplica\" es solo para el caso en que no existan audios en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-12",
        "orden": 12,
        "nombre": "Enfoque de género",
        "descripcion": "Incorporación de la perspectiva de género en un sitio web, a través de acciones como el uso de lenguaje inclusivo y la proporcionalidad de representación en contenidos o materiales audiovisuales, para evitar reproducir desigualdades e inequidades.",
        "sourceSheet": "12Gen",
        "preguntas": [
          {
            "id": "web-12-q1",
            "codigo": "12.1.1",
            "indicador": "Lenguaje inclusivo",
            "descripcion": "Expresión verbal, escrita o visual que visibiliza lo femenino y masculino, elimina estereotipos, el sexismo, el androcentrismo y el masculino como genérico universal. Se fundamenta en una comunicación institucional basada en los principios de igualdad, respeto y no discriminación.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se utiliza un lenguaje inclusivo, respetuoso de la diversidad y que no reproduzca estereotipos de género?  Por ejemplo: - Aplicar sustitutos de las palabras que pueden incluir algún sesgo de género, duplicando artículos que determinan el sustantivo (\"Las y los beneficiarios\"). - Prescindir de la referencia al sujeto y recurrir a formas pasivas (\"Se deben cumplir los requisitos de postulación\"). - Usar formas no personales del verbo (\"Es necesario considerar\"). - Usar pronombres sin marca de género (\"Quien suscribe\", \"Cada postulante\", \"Cada persona puede postular\"). - Quitar el artículo y usar determinantes sin marca de género (\"Cualquier integrante puede acceder\"). - Reemplazar genéricos masculinos comúnmente utilizados (en vez de \"Niños\", usar \"Infancia\", en vez de \"Beneficiarios\", usar \"Personas beneficiarias\", en vez de \"Ciudadanos\", usar \"Ciudadanía\").",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-12-q2",
            "codigo": "12.1.1.2",
            "indicador": "Lenguaje inclusivo",
            "descripcion": "Expresión verbal, escrita o visual que visibiliza lo femenino y masculino, elimina estereotipos, el sexismo, el androcentrismo y el masculino como genérico universal. Se fundamenta en una comunicación institucional basada en los principios de igualdad, respeto y no discriminación.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los contenidos del sitio están libres de palabras o términos discriminatorios?  Por ejemplo: frases o términos sexistas o discriminatorios como \"El que te quiere te aporrea\", \"Calladita te ves más bonita\", \"Los hombres no lloran\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-12-q3",
            "codigo": "12.2.1",
            "indicador": "Fotografías y videos con enfoque de género",
            "descripcion": "Uso de imágenes y videos con perspectiva de género, respetando principios de igualdad, respeto y no discriminación.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las imágenes del sitio están libres de sexismo y estereotipos de género? Por ejemplo: no se identifican profesiones ni actividades exclusivamente como femeninas o masculinas (como representar la ingeniería con fotos sólo masculinas o en el caso de la educación parvularia, con fotos solo femeninas); se evita asociar a través de las imágenes las tareas domésticas y de cuidado solo a mujeres.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-12-q4",
            "codigo": "12.2.1.2",
            "indicador": "Fotografías y videos con enfoque de género",
            "descripcion": "Uso de imágenes y videos con perspectiva de género, respetando principios de igualdad, respeto y no discriminación.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Cuando se utiliza musicalización en videos o archivos de audios, ¿las letras de canciones utilizadas están libres de sexismo y de palabras o términos discriminatorios?  La opción \"No aplica\" es solo para el caso en que no existan videos en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-12-q5",
            "codigo": "12.2.2",
            "indicador": "Representatividad",
            "descripcion": "Proporcionalidad de género en los contenidos, imágenes, videos y audios publicados en un sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Es proporcional por género la representatividad en contenidos, imágenes, videos y audios publicados?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-12-q6",
            "codigo": "12.3.1",
            "indicador": "Formularios representativos",
            "descripcion": "Diseño de formularios con perspectiva de género, respetando principios de igualdad, respeto, diversidad y no discriminación.",
            "prioridad": "Deseable",
            "preguntaChequeo": "En los formularios cuando se pregunta el género de quien responde, ¿además de \"Femenino\" y \"Masculino\", se incluye también a lo menos el campo \"Otro\"?  La opción \"No aplica\" se debe utilizar únicamente cuando no exista un formulario o el campo de género no esté presente.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-12-q7",
            "codigo": "12.3.2",
            "indicador": "Noticias con enfoque de género",
            "descripcion": "Publicación de noticias con perspectiva de género, respetando principios de igualdad, respeto y no discriminación.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿En las noticias se respeta el equilibrio entre géneros en la elección de especialistas o fuentes?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-13",
        "orden": 13,
        "nombre": "Imparcialidad e igualdad de trato",
        "descripcion": "Disposición a entregar la mejor experiencia de usuario a todas las personas, independiente de sus habilidades, identidad, antecedentes o situación en la que se encuentren.",
        "sourceSheet": "13Imp",
        "preguntas": [
          {
            "id": "web-13-q1",
            "codigo": "13.2.1",
            "indicador": "Diversidad en formularios",
            "descripcion": "Especial cuidado en la redacción de preguntas en formularios para considerar la diversidad de personas usuarias y evitar discriminaciones.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿En los campos de los formularios se considera una amplia diversidad de personas usuarias? Por ejemplo: evitar que personas queden fuera de los rangos etarios del selector de un formulario; cautelar que aparezcan todas las comunas, pueblos originarios o credos religiosos.  La opción \"No aplica\" es solo para el caso en que no existan formularios en el sitio web y/o sean personas jurísdicas.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-13-q2",
            "codigo": "13.3.1",
            "indicador": "Versiones en otros idiomas",
            "descripcion": "Presencia de información en otros idiomas, especialmente para personas de pueblos originarios y migrantes que no hablen español.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Existe una versión o información en otro idioma?  Por ejemplo: inglés, mapudungún, creole u otros.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-13-q3",
            "codigo": "13.3.1.2",
            "indicador": "Versiones en otros idiomas",
            "descripcion": "Presencia de información en otros idiomas, especialmente para personas de pueblos originarios y migrantes que no hablen español.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El sitio web permite ser traducido con la opción de traducción automática del navegador?  Para verificar este aspecto, en Google Chrome al hacer clic con el botón secundario elegir la opción \"Traducir al español\" (aunque ya esté en ese idioma). Con ello se activa el icono de traducción al lado derecho de la URL en la barra de navegación, donde podemos añadir otro idioma y comprobar.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-13-q4",
            "codigo": "13.3.2",
            "indicador": "Descentralización",
            "descripcion": "Especial cuidado en la redacción de los contenidos y acceso a los servicios para evitar un sesgo desde la centralización.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Los contenidos y servicios están formulados con igualdad de oportunidades de acceso para personas usuarias de todas las regiones?  Por ejemplo: evitar que los selectores de región de los formularios comiencen con la Región Metropolitana.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-14",
        "orden": 14,
        "nombre": "Inclusión",
        "descripcion": "Incorporación de un enfoque inclusivo que responda a la diversidad y diferencias individuales, garantizando igualdad de acceso a políticas y servicios públicos para todas y todos, sin importar características, habilidades u origen.",
        "sourceSheet": "14Inc",
        "preguntas": [
          {
            "id": "web-14-q1",
            "codigo": "14.1.1",
            "indicador": "Menús desplegables",
            "descripcion": "Cautela en el uso de menús desplegables, porque para algunas personas usuarias pueden significar una barrera de acceso, por ejemplo, personas con motricidad reducida.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En el caso de existir menús desplegables en el sitio web, ¿se pueden utilizar sin problemas?  Por ejemplo: se puede navegar fácilmente por el menú desplegable sin que se cierre inesperadamente, no flotan sobre otros menús o imágenes en movimiento.  La opción \"No aplica\" es solo para el caso en que no existan menús desplegables en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-14-q2",
            "codigo": "14.2.1",
            "indicador": "Interpretación en lengua de señas chilena",
            "descripcion": "Presencia de interpretación en lengua de señas chilena para los contenidos audiovisuales.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los videos cuentan con interpretación en lengua de señas chilena en un tamaño y formato entendible? Por ejemplo: el video cuenta con un recuadro ubicado en el costado inferior derecho de la pantalla en el que el intérprete se ve claramente, diferenciándose del fondo y las señas se pueden distinguir y reconocer.  La opción \"No aplica\" es solo para el caso en que no existan videos en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-14-q3",
            "codigo": "14.3.1",
            "indicador": "Apto para daltonismo",
            "descripcion": "Preocupación en el diseño por considerar contrastes y combinaciones de color aptos para personas con daltonismo.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El diseño considera contrastes y combinaciones de color aptos para el daltonismo?  Por ejemplo: esto se puede evaluar sacando una captura de pantalla del sitio web y revisando en el simulador de daltonismo del sitio web de Color Lite Lens, luego de subir la imagen seleccionar los distintos tipos de daltonismo y revisar uno a uno si con los cambios de color se pueden identificar correctamente los elementos y no se pierde información importante.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-14-q4",
            "codigo": "14.3.2",
            "indicador": "Lectura fácil",
            "descripcion": "Método de creación y adaptación de textos que los hace más fáciles de comprender para personas con dificultades de comprensión lectora.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Se presenta al menos un texto redactado con la técnica de Lectura Fácil?  Por ejemplo: es posible observar un texto organizado con frases sencillas y cortas; y, en caso de existir palabras poco comunes, estas cuentan con un cuadro con la definición al costado derecho. Los contenidos deben verse como los del sitio Planeta Inclusión.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-14-q5",
            "codigo": "14.3.3",
            "indicador": "Escala de grises y alto contraste",
            "descripcion": "Opción para que las personas usuarias puedan cambiar los colores del sitio a escala de grises y alto contraste.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Las personas usuarias pueden modificar el diseño del sitio web o servicio digital para verlo en escala de grises o alto contraste por medio de un botón presente en el sitio?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-14-q6",
            "codigo": "14.3.4",
            "indicador": "Lector de texto incorporado",
            "descripcion": "Herramienta para la lectura de texto incorporada en el sitio web.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El sitio web o servicio digital cuenta con una opción de lector de texto?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-15",
        "orden": 15,
        "nombre": "Promoción",
        "descripcion": "Conjunto de acciones orientadas a extender los contenidos del sitio web a la ciudadanía, como la optimización para el posicionamiento en buscadores y difusión en redes sociales.",
        "sourceSheet": "15Pro",
        "preguntas": [
          {
            "id": "web-15-q1",
            "codigo": "15.1.1",
            "indicador": "Indexación en buscadores",
            "descripcion": "Habilitación del acceso de los robots de búsqueda para indexar el sitio mediante el metadato \"robots\" o el archivo \"robots.txt\".",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Está presente la meta etiqueta \"robots\" sin los parámetros \"noindex\", \"nofollow\" o \"none\"?  Por ejemplo: al buscar la palabra \"robots\" con CTRL+F en el código fuente de la página, la referencia \"<meta name='robots' content='noindex'>\" no está presente. Tampoco cuando está con más de un valor: \"<meta name='robots' content='noindex,nofollow'/>\"  Si la meta etiqueta robots no está presente se debe responder afirmativamente a la pregunta.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q2",
            "codigo": "15.1.1.2",
            "indicador": "Indexación en buscadores",
            "descripcion": "Habilitación del acceso de los robots de búsqueda para indexar el sitio mediante el metadato \"robots\" o el archivo \"robots.txt\".",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Si existe un archivo denominado \"robots.txt\" en la raíz del sitio web, ¿este permite la indexación?  Por ejemplo: si está presente el archivo \"robots.txt\" en la raíz del sitio web –es decir en la URL: \"https://sitioejemplo.gob.cl/robots.txt\"–, este no deniega el acceso.   La denegación de acceso se podría ver de esta manera:  User-agent: *  Disallow: / Si al ingresar a la URL https://sitioejemplo.gob.cl/robots.txt el navegador arroja un error, esto significa que el archivo no existe y se debe marcar que esta pregunta no aplica.  La opción \"No aplica\" es solo para el caso en que no exista el archivo \"robots.txt\" en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q3",
            "codigo": "15.1.2",
            "indicador": "Persistencia de las URLs",
            "descripcion": "Estabilidad de las direcciones web en el tiempo. En el caso de un cambio de dominio o URL, se aplica una redirección que permita no dejar enlaces rotos, para que se pueda seguir accediendo a las páginas y documentos. Ello porque cada URL de un sitio puede estar enlazada desde documentos o sitios externos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El dominio del sitio web permanece estable y constante en el tiempo durante los últimos 5 años?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q4",
            "codigo": "15.1.2.2",
            "indicador": "Persistencia de las URLs",
            "descripcion": "Estabilidad de las direcciones web en el tiempo. En el caso de un cambio de dominio o URL, se aplica una redirección que permita no dejar enlaces rotos, para que se pueda seguir accediendo a las páginas y documentos. Ello porque cada URL de un sitio puede estar enlazada desde documentos o sitios externos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿En caso de rediseño o reubicación de páginas, es posible acceder a los contenidos del nuevo sitio desde las URLs de la versión anterior?  La opción \"No aplica\" solo si el sitio web no ha tenido rediseños o reubicaciones de páginas.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q5",
            "codigo": "15.1.3",
            "indicador": "Compatibilidad de URLs",
            "descripcion": "Uso exclusivo de letras minúsculas en la URL del sitio, evitando la utilización de caracteres especiales y tildes, para garantizar su compatibilidad y buen funcionamiento.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿La URL está compuesta solo de letras minúsculas y sin caracteres especiales ni tildes?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q6",
            "codigo": "15.1.3.2",
            "indicador": "Compatibilidad de URLs",
            "descripcion": "Uso exclusivo de letras minúsculas en la URL del sitio, evitando la utilización de caracteres especiales y tildes, para garantizar su compatibilidad y buen funcionamiento.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Las palabras que tienen la letra ñ, ¿en la URL la reemplazan por la letra n?  La opción \"No aplica\" es solo para el caso en que la URL no contenga palabras con la letra ñ.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q7",
            "codigo": "15.1.3.3",
            "indicador": "Compatibilidad de URLs",
            "descripcion": "Uso exclusivo de letras minúsculas en la URL del sitio, evitando la utilización de caracteres especiales y tildes, para garantizar su compatibilidad y buen funcionamiento.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En el caso de requerir la ñ dentro del nombre del dominio, ¿se redirecciona a la versión que con letra n?  La opción \"No aplica\" es solo para el caso en que la URL no contenga palabras con la letra ñ.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q8",
            "codigo": "15.1.4",
            "indicador": "Títulos indexables",
            "descripcion": "Presencia del tema principal de cada página del sitio en su título (etiqueta \"title\") para garantizar que el propósito de cada una sea claro para los motores de búsqueda.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Al revisar el código fuente, ¿el texto dentro de la etiqueta \"title\" utiliza el título o las palabras claves para identificar el contenido que la página contiene?  Por ejemplo: en las primeras líneas se puede reconocer un código del tipo \"<title>Ministerio de Salud - Gobierno de Chile</title>\" (sin comillas).",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q9",
            "codigo": "15.1.4.2",
            "indicador": "Títulos indexables",
            "descripcion": "Presencia del tema principal de cada página del sitio en su título (etiqueta \"title\") para garantizar que el propósito de cada una sea claro para los motores de búsqueda.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Cada página tiene una etiqueta \"title\" única que diferencia cada página dentro del sitio?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q10",
            "codigo": "15.1.5",
            "indicador": "Título principal en \"h1\"",
            "descripcion": "Uso de la etiqueta \"h1\" para describir el contenido principal de la página: ésta debe estar presente solo una vez en cada una.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Está presente en la página el título principal dentro de la etiqueta \"h1\"?  Por ejemplo: se puede buscar la referencia \"<h1\" en el código fuente de la página.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q11",
            "codigo": "15.1.5.2",
            "indicador": "Título principal en \"h1\"",
            "descripcion": "Uso de la etiqueta \"h1\" para describir el contenido principal de la página: ésta debe estar presente solo una vez en cada una.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El título \"h1\" utiliza las palabras claves para identificar el contenido que la página contiene?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q12",
            "codigo": "15.1.5.3",
            "indicador": "Título principal en \"h1\"",
            "descripcion": "Uso de la etiqueta \"h1\" para describir el contenido principal de la página: ésta debe estar presente solo una vez en cada una.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Existe solo un título identificado con la etiqueta \"h1\" dentro del código fuente de la página?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q13",
            "codigo": "15.1.6",
            "indicador": "Facilitar compartir en redes sociales",
            "descripcion": "Facilidad para que las páginas de contenidos del sitio web se compartan, con el uso de metadatos apropiados, a través de redes sociales con una previsualización.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se genera una previsualización que muestra una imagen y el título del contenido al compartir el contenido por redes sociales?  Por ejemplo: al pegar la URL de un contenido del sitio web en una conversación en WhatsApp el mensaje genera una vista previa con una foto y título del contenido.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q14",
            "codigo": "15.1.7",
            "indicador": "Publicidad en sitio y videos",
            "descripcion": "Precaución de no mostrar publicidad que anuncie o promocione productos, servicios o marcas externas a la organización en el sitio web o en videos incrustados.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Durante la revisión del sitio web no se observa publicidad externa a la organización.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q15",
            "codigo": "15.1.7.2",
            "indicador": "Publicidad en sitio y videos",
            "descripcion": "Precaución de no mostrar publicidad que anuncie o promocione productos, servicios o marcas externas a la organización en el sitio web o en videos incrustados.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En caso de haber algún video en el sitio web, no se observa publicidad externa a la organización.  La opción \"No aplica\" es solo para el caso en que no existan videos en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q16",
            "codigo": "15.2.1",
            "indicador": "Legibilidad de las URLs",
            "descripcion": "Preocupación por el uso de URLs amigables para las personas usuarias y semánticas para buscadores.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Para separar palabras dentro de la URL se usa guión medio?  Por ejemplo: \"https://sitioejemplo.gob.cl/palabras-separadas\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q17",
            "codigo": "15.2.1.2",
            "indicador": "Legibilidad de las URLs",
            "descripcion": "Preocupación por el uso de URLs amigables para las personas usuarias y semánticas para buscadores.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las URLs que quedan fijas al ingresar al sitio corresponden a la raíz y no se añaden segmentos o directorios internos? Por ejemplo: se puede comprobar si termina en \".cl\" y no aparece más texto del tipo \"index.php\", \"/#/pages/body/\" o \"/01/w3-channel.html\"",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q18",
            "codigo": "15.2.2",
            "indicador": "Metadescripción de páginas",
            "descripcion": "Correcta descripción de cada página al entregar información sobre su contenido en la meta etiqueta \"description\".",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿La metaetiqueta \"description\" utiliza las palabras claves para identificar el contenido que esta contiene y lo hace en menos de 160 caracteres?  Por ejemplo: al revisar el código fuente del sitio del Ministerio de Salud, se podría leer una línea del tipo \"<meta name=\"description\" content=\"El Minsal fija políticas de salud pública y prevención de enfermedades y coordina las redes asistenciales de Chile\">\".   Para medir la extensión de caracteres con espacio, puede usar la opción \"Contar palabras\" de Microsoft Word o la herramienta en línea Word Counter.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q19",
            "codigo": "15.2.2.2",
            "indicador": "Metadescripción de páginas",
            "descripcion": "Correcta descripción de cada página al entregar información sobre su contenido en la meta etiqueta \"description\".",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las metaetiquetas \"description\" son únicas para cada página en el sitio web?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q20",
            "codigo": "15.2.2.3",
            "indicador": "Metadescripción de páginas",
            "descripcion": "Correcta descripción de cada página al entregar información sobre su contenido en la meta etiqueta \"description\".",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las metaetiquetas \"description\" están centradas en el valor agregado entregado por cada página y de forma completamente clara?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q21",
            "codigo": "15.2.3",
            "indicador": "Patrones engañosos",
            "descripcion": "Estrategias y técnicas poco éticas que se utilizan en los sitios web, que obligan a las personas usuarias a realizar una acción que no desean, como comprar un producto o registrarse en algún servicio.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El sitio web está libre de preguntas que parecen plantear una cosa, pero al leerlas detenidamente se revela una pregunta totalmente distinta? Por ejemplo: la persona usuaria puede ser manipulada para proporcionar una respuesta que no pretendía ofrecer (mientras completa un formulario, responde a una pregunta que la engaña para dar una respuesta no deseada).",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q22",
            "codigo": "15.2.3.2",
            "indicador": "Patrones engañosos",
            "descripcion": "Estrategias y técnicas poco éticas que se utilizan en los sitios web, que obligan a las personas usuarias a realizar una acción que no desean, como comprar un producto o registrarse en algún servicio.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El sitio web evita testimonios de personas usuarias cuyo origen no está claro o no son creíbles y confiables?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q23",
            "codigo": "15.2.3.3",
            "indicador": "Patrones engañosos",
            "descripcion": "Estrategias y técnicas poco éticas que se utilizan en los sitios web, que obligan a las personas usuarias a realizar una acción que no desean, como comprar un producto o registrarse en algún servicio.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El sitio permite a la persona usuaria completar su tarea u obtener un servicio sin requerir acciones forzadas? Por ejemplo: no es necesario registrar una cuenta o suscribirse a un boletín informativo para avanzar.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q24",
            "codigo": "15.2.4",
            "indicador": "Presencia de redes sociales",
            "descripcion": "Visualización de los enlaces de las cuentas oficiales en redes sociales de la institución o servicio digital.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se encuentran presentes enlaces a las cuentas de redes sociales oficiales del servicio en las zonas permanentes del sitio, como la cabecera o el pie de página?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q25",
            "codigo": "15.3.1",
            "indicador": "Datos estructurados",
            "descripcion": "Presencia de datos estructurados dentro de los contenidos estratégicos del sitio web como: artículos, noticias, eventos, videos y preguntas frecuentes.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Se utilizan etiquetas de marcado schema.org?  Por ejemplo: se puede buscar la referencia \"https://schema.org/NewsArticle\" en el código fuente de una noticia o en una actividad o evento de calendario se puede buscar la referencia \"https://schema.org/Event\" en el código fuente para confirmar su uso.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-15-q26",
            "codigo": "15.3.2",
            "indicador": "Dominio representativo",
            "descripcion": "Representatividad del tema principal de la institución en el dominio del sitio web.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El dominio incorpora el nombre, palabra clave o tema más representativo de la institución? Por ejemplo: se privilegian URLs del tipo \"concepto.gob.cl\" o \"tema.gob.cl\" por sobre una sigla o el tipo de organización o plataforma.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-16",
        "orden": 16,
        "nombre": "Transparencia y apertura",
        "descripcion": "Transparencia corresponde a la información pública presentada de manera visible, actualizada y destacada respecto al funcionamiento administrativo y financiero de la institución. Apertura, por su parte, es la disposición abierta de la información, sin registro, suscripción o pago para acceder o descargar los datos y documentos que la institución dispone a las personas usuarias.",
        "sourceSheet": "16Tra",
        "preguntas": [
          {
            "id": "web-16-q1",
            "codigo": "16.1.1",
            "indicador": "Transparencia activa",
            "descripcion": "Presencia actualizada de la información pública relacionada con el funcionamiento administrativo y financiero de la institución, tal como lo indica la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia. Esta información puede estar disponible en el propio sitio de la institución o en el Portal de Transparencia.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio presenta un botón de acceso a la información pública de la institución de manera fácil de identificar y acceso expedito?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q2",
            "codigo": "16.1.1.2",
            "indicador": "Transparencia activa",
            "descripcion": "Presencia actualizada de la información pública relacionada con el funcionamiento administrativo y financiero de la institución, tal como lo indica la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia. Esta información puede estar disponible en el propio sitio de la institución o en el Portal de Transparencia.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Presenta información sobre actos administrativos y documentos publicados en Diario Oficial?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q3",
            "codigo": "16.1.1.3",
            "indicador": "Transparencia activa",
            "descripcion": "Presencia actualizada de la información pública relacionada con el funcionamiento administrativo y financiero de la institución, tal como lo indica la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia. Esta información puede estar disponible en el propio sitio de la institución o en el Portal de Transparencia.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Presenta información sobre las potestades del organismo y su marco normativo?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q4",
            "codigo": "16.1.1.4",
            "indicador": "Transparencia activa",
            "descripcion": "Presencia actualizada de la información pública relacionada con el funcionamiento administrativo y financiero de la institución, tal como lo indica la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia. Esta información puede estar disponible en el propio sitio de la institución o en el Portal de Transparencia.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Presenta información sobre la estructura orgánica, sus facultades, funciones y atribuciones?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q5",
            "codigo": "16.1.1.5",
            "indicador": "Transparencia activa",
            "descripcion": "Presencia actualizada de la información pública relacionada con el funcionamiento administrativo y financiero de la institución, tal como lo indica la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia. Esta información puede estar disponible en el propio sitio de la institución o en el Portal de Transparencia.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Presenta información sobre el personal de planta, a contrata y a honorarios, con sus remuneraciones?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q6",
            "codigo": "16.1.1.6",
            "indicador": "Transparencia activa",
            "descripcion": "Presencia actualizada de la información pública relacionada con el funcionamiento administrativo y financiero de la institución, tal como lo indica la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia. Esta información puede estar disponible en el propio sitio de la institución o en el Portal de Transparencia.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Presenta información sobre las adquisiciones y contrataciones (compras públicas, actas de evaluación, contrataciones relativas a bienes inmuebles y otras compras)?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q7",
            "codigo": "16.1.1.7",
            "indicador": "Transparencia activa",
            "descripcion": "Presencia actualizada de la información pública relacionada con el funcionamiento administrativo y financiero de la institución, tal como lo indica la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia. Esta información puede estar disponible en el propio sitio de la institución o en el Portal de Transparencia.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Presenta información sobre transferencias de fondos y aportes económicos entregados?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q8",
            "codigo": "16.1.1.8",
            "indicador": "Transparencia activa",
            "descripcion": "Presencia actualizada de la información pública relacionada con el funcionamiento administrativo y financiero de la institución, tal como lo indica la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia. Esta información puede estar disponible en el propio sitio de la institución o en el Portal de Transparencia.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Presenta información sobre actos administrativos y resoluciones con efectos sobre terceras personas (patentes, permisos, derechos, concesiones, concursos otros)?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q9",
            "codigo": "16.1.1.9",
            "indicador": "Transparencia activa",
            "descripcion": "Presencia actualizada de la información pública relacionada con el funcionamiento administrativo y financiero de la institución, tal como lo indica la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia. Esta información puede estar disponible en el propio sitio de la institución o en el Portal de Transparencia.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Presenta información sobre trámites ante el organismo?  Por ejemplo: ChileAtiende.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q10",
            "codigo": "16.1.1.10",
            "indicador": "Transparencia activa",
            "descripcion": "Presencia actualizada de la información pública relacionada con el funcionamiento administrativo y financiero de la institución, tal como lo indica la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia. Esta información puede estar disponible en el propio sitio de la institución o en el Portal de Transparencia.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Presenta información sobre subsidios y beneficios (nómina de beneficiarios)?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q11",
            "codigo": "16.1.1.11",
            "indicador": "Transparencia activa",
            "descripcion": "Presencia actualizada de la información pública relacionada con el funcionamiento administrativo y financiero de la institución, tal como lo indica la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia. Esta información puede estar disponible en el propio sitio de la institución o en el Portal de Transparencia.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Presenta información sobre los mecanismos de participación ciudadana (normativa, actas y mecanismos)?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q12",
            "codigo": "16.1.1.12",
            "indicador": "Transparencia activa",
            "descripcion": "Presencia actualizada de la información pública relacionada con el funcionamiento administrativo y financiero de la institución, tal como lo indica la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia. Esta información puede estar disponible en el propio sitio de la institución o en el Portal de Transparencia.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Presenta su información presupuestaria (gastos de avisaje y publicidad, presupuesto del organismo, y gastos de representación, protocolo y ceremonial)?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q13",
            "codigo": "16.1.1.13",
            "indicador": "Transparencia activa",
            "descripcion": "Presencia actualizada de la información pública relacionada con el funcionamiento administrativo y financiero de la institución, tal como lo indica la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia. Esta información puede estar disponible en el propio sitio de la institución o en el Portal de Transparencia.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Presenta información sobre auditorías al ejercicio presupuestario y aclaraciones?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q14",
            "codigo": "16.1.1.14",
            "indicador": "Transparencia activa",
            "descripcion": "Presencia actualizada de la información pública relacionada con el funcionamiento administrativo y financiero de la institución, tal como lo indica la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia. Esta información puede estar disponible en el propio sitio de la institución o en el Portal de Transparencia.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Presenta información sobre la participación en otras entidades?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q15",
            "codigo": "16.1.1.15",
            "indicador": "Transparencia activa",
            "descripcion": "Presencia actualizada de la información pública relacionada con el funcionamiento administrativo y financiero de la institución, tal como lo indica la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia. Esta información puede estar disponible en el propio sitio de la institución o en el Portal de Transparencia.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Presenta información sobre los antecedentes preparatorios de normas jurídicas generales que afecten a empresas de menor tamaño?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q16",
            "codigo": "16.1.2",
            "indicador": "Declaración de patrimonio e intereses",
            "descripcion": "Información de las autoridades y funcionarios dando cuenta de dónde permanecen sus intereses y a cuánto asciende su patrimonio al asumir y mientras permanecen en sus cargos. Siguiendo el principio de probidad administrativa, la declaración busca transparentar las relaciones económicas y patrimoniales que pueden afectar la imparcialidad al momento de la toma de decisiones, y se encuentra regulada por la Ley sobre Probidad en la Función Pública y Prevención de los Conflictos de Intereses (Ley 20.880).",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio presenta las declaraciones de intereses y patrimonio (DIP) de sus autoridades y funcionarios? O, en su defecto, ¿cuenta con un contenido con información sobre las DIP enlazando el portal web de la Contraloría General de la República (declaracionjurada.cl)?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q17",
            "codigo": "16.1.3",
            "indicador": "Transparencia pasiva",
            "descripcion": "Disposición visible del canal de consulta o solicitud de información pública que cualquier persona puede realizar a la institución, tal como lo indica la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio cuenta con un canal de Transparencia de fácil identificación y acceso expedito para realizar las solicitudes de información pública de la institución?  Por ejemplo: mediante un correo electrónico o formulario.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q18",
            "codigo": "16.1.3.2",
            "indicador": "Transparencia pasiva",
            "descripcion": "Disposición visible del canal de consulta o solicitud de información pública que cualquier persona puede realizar a la institución, tal como lo indica la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Están expresamente publicados los requisitos y plazos para cumplir las solicitudes de información pública?  Por ejemplo: \"Una vez ingresada una solicitud de información pública, la institución cuenta con un plazo máximo de 20 días hábiles...\"",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q19",
            "codigo": "16.1.4",
            "indicador": "Banner de Transparencia",
            "descripcion": "Ícono, botón o sección ubicada en portada de la institución a través de la cual se accede de manera diferenciada a la información pública (Transparencia Activa) y al canal de consulta o solicitud de información pública (Solicitud de Acceso a Información).",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio posee un botón, banner o sección fija claramente diferenciable para acceder a la información de \"Transparencia\" y otro para \"Solicitar información\"?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q20",
            "codigo": "16.1.4.2",
            "indicador": "Banner de Transparencia",
            "descripcion": "Ícono, botón o sección ubicada en portada de la institución a través de la cual se accede de manera diferenciada a la información pública (Transparencia Activa) y al canal de consulta o solicitud de información pública (Solicitud de Acceso a Información).",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se encuentra ubicado en la parte inferior de cada página?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q21",
            "codigo": "16.1.4.3",
            "indicador": "Banner de Transparencia",
            "descripcion": "Ícono, botón o sección ubicada en portada de la institución a través de la cual se accede de manera diferenciada a la información pública (Transparencia Activa) y al canal de consulta o solicitud de información pública (Solicitud de Acceso a Información).",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El botón o banner posee algún ícono como ayuda diferenciadora?  Por ejemplo: que el botón de transparencia activa incluya un símbolo de una página de texto y que el botón para solicitar información incluya la letra i minúscula, tal como se sugiere en el sitio web del Consejo para la Transparencia y se muestra en la sección VIII) de la Guía",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q22",
            "codigo": "16.1.5",
            "indicador": "Acceso abierto",
            "descripcion": "Disponibilidad inmediata –sin requerimientos de registro, suscripción o pago– para acceder o descargar los datos, tablas y documentos con información relevante que deba generar la institución.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Las personas usuarias pueden acceder a los datos, tablas y documentos publicados en el sitio de manera abierta, sin necesidad de registro y de forma gratuita?  Por ejemplo: datos geográficos, meteorológicos, de tráfico, de la gestión del Gobierno, el uso de los recursos fiscales, de salud, permisos de circulación, patentes entregadas, listado de colegios, organizaciones comunitarias entre otros.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q23",
            "codigo": "16.2.1",
            "indicador": "Lobby y gestión de intereses",
            "descripcion": "Información sobre las audiencias y reuniones, viajes y donativos recibidos por las autoridades del organismo en la actividad de lobby y en la gestión de intereses particulares, con el objeto de fortalecer la transparencia y probidad en las relaciones con los órganos del Estado. Esta información puede estar disponible en el propio sitio de la institución o en la Plataforma de Ley del Lobby.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El sitio presenta información sobre sus autoridades y funcionarios (titulares, suplentes, subrogantes o transitorios) frente a los cuales se realiza lobby o gestión de intereses (sujetos pasivos)?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q24",
            "codigo": "16.2.1.2",
            "indicador": "Lobby y gestión de intereses",
            "descripcion": "Información sobre las audiencias y reuniones, viajes y donativos recibidos por las autoridades del organismo en la actividad de lobby y en la gestión de intereses particulares, con el objeto de fortalecer la transparencia y probidad en las relaciones con los órganos del Estado. Esta información puede estar disponible en el propio sitio de la institución o en la Plataforma de Ley del Lobby.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Presenta información sobre el listado de registro público de lobbistas y de gestores de intereses particulares (sujetos activos)?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q25",
            "codigo": "16.2.1.3",
            "indicador": "Lobby y gestión de intereses",
            "descripcion": "Información sobre las audiencias y reuniones, viajes y donativos recibidos por las autoridades del organismo en la actividad de lobby y en la gestión de intereses particulares, con el objeto de fortalecer la transparencia y probidad en las relaciones con los órganos del Estado. Esta información puede estar disponible en el propio sitio de la institución o en la Plataforma de Ley del Lobby.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Presenta información sobre las audiencias y reuniones llevadas a cabo por sus autoridades y funcionarios (sujetos pasivos) con personas o entidades, chilenas o extranjeras promotoras, defensoras o representantes de un interés particular (lobistas, sujetos activos)?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q26",
            "codigo": "16.2.1.4",
            "indicador": "Lobby y gestión de intereses",
            "descripcion": "Información sobre las audiencias y reuniones, viajes y donativos recibidos por las autoridades del organismo en la actividad de lobby y en la gestión de intereses particulares, con el objeto de fortalecer la transparencia y probidad en las relaciones con los órganos del Estado. Esta información puede estar disponible en el propio sitio de la institución o en la Plataforma de Ley del Lobby.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Presenta un contenido o formulario de solicitud de audiencia con sus autoridades o funcionarios?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q27",
            "codigo": "16.2.1.5",
            "indicador": "Lobby y gestión de intereses",
            "descripcion": "Información sobre las audiencias y reuniones, viajes y donativos recibidos por las autoridades del organismo en la actividad de lobby y en la gestión de intereses particulares, con el objeto de fortalecer la transparencia y probidad en las relaciones con los órganos del Estado. Esta información puede estar disponible en el propio sitio de la institución o en la Plataforma de Ley del Lobby.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Presenta información sobre los viajes realizados por sus autoridades y funcionarios en el ejercicio de sus funciones?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q28",
            "codigo": "16.2.1.6",
            "indicador": "Lobby y gestión de intereses",
            "descripcion": "Información sobre las audiencias y reuniones, viajes y donativos recibidos por las autoridades del organismo en la actividad de lobby y en la gestión de intereses particulares, con el objeto de fortalecer la transparencia y probidad en las relaciones con los órganos del Estado. Esta información puede estar disponible en el propio sitio de la institución o en la Plataforma de Ley del Lobby.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Presenta información sobre los donativos recibidos por sus autoridades y funcionarios en el ejercicio de sus funciones?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q29",
            "codigo": "16.2.1.7",
            "indicador": "Lobby y gestión de intereses",
            "descripcion": "Información sobre las audiencias y reuniones, viajes y donativos recibidos por las autoridades del organismo en la actividad de lobby y en la gestión de intereses particulares, con el objeto de fortalecer la transparencia y probidad en las relaciones con los órganos del Estado. Esta información puede estar disponible en el propio sitio de la institución o en la Plataforma de Ley del Lobby.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Presenta información sobre la normativa aplicable?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q30",
            "codigo": "16.2.2",
            "indicador": "Facilidad de lectura y usabilidad",
            "descripcion": "Disposición en el sitio web de la información pública de manera que facilite su lectura, comprensión y utilización, acogiendo buenas prácticas de orden, diseño y formato de los contenidos y documentos para que las personas usuarias puedan encontrar y entender la información sin necesidad de invertir una gran cantidad de tiempo y esfuerzos, o de tener conocimientos sobre la institución.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se dispone de la información de manera ordenada, simple y libre de restricciones técnicas?  Por ejemplo: las remuneraciones del personal a contrata se disponen por orden alfabético en una página de contenido y no como un archivo PDF.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q31",
            "codigo": "16.2.2.2",
            "indicador": "Facilidad de lectura y usabilidad",
            "descripcion": "Disposición en el sitio web de la información pública de manera que facilite su lectura, comprensión y utilización, acogiendo buenas prácticas de orden, diseño y formato de los contenidos y documentos para que las personas usuarias puedan encontrar y entender la información sin necesidad de invertir una gran cantidad de tiempo y esfuerzos, o de tener conocimientos sobre la institución.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se privilegia la publicación de contenido en formato HTML por sobre el formato PDF o conjunto de documentos comprimidos?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q32",
            "codigo": "16.2.2.3",
            "indicador": "Facilidad de lectura y usabilidad",
            "descripcion": "Disposición en el sitio web de la información pública de manera que facilite su lectura, comprensión y utilización, acogiendo buenas prácticas de orden, diseño y formato de los contenidos y documentos para que las personas usuarias puedan encontrar y entender la información sin necesidad de invertir una gran cantidad de tiempo y esfuerzos, o de tener conocimientos sobre la institución.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿La documentación en formato PDF corresponde a archivos abiertos (sin clave) y reutilizables, en vez de ser escaneos de otros documentos?  La opción \"No aplica\" es solo para el caso en que no se encuentren documentos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q33",
            "codigo": "16.2.2.4",
            "indicador": "Facilidad de lectura y usabilidad",
            "descripcion": "Disposición en el sitio web de la información pública de manera que facilite su lectura, comprensión y utilización, acogiendo buenas prácticas de orden, diseño y formato de los contenidos y documentos para que las personas usuarias puedan encontrar y entender la información sin necesidad de invertir una gran cantidad de tiempo y esfuerzos, o de tener conocimientos sobre la institución.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El diseño y formato de los documentos es igual y consistente con todos los documentos dispuestos?  Por ejemplo: que si la información del mes de marzo del ítem \"Otras transferencias\" se publicó en formato HTML, que la información de abril, mayo y todos los meses también se publique en el mismo formato.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q34",
            "codigo": "16.2.2.5",
            "indicador": "Facilidad de lectura y usabilidad",
            "descripcion": "Disposición en el sitio web de la información pública de manera que facilite su lectura, comprensión y utilización, acogiendo buenas prácticas de orden, diseño y formato de los contenidos y documentos para que las personas usuarias puedan encontrar y entender la información sin necesidad de invertir una gran cantidad de tiempo y esfuerzos, o de tener conocimientos sobre la institución.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El sitio informa un medio de contacto para notificar en caso de que exista alguna dificultad técnica respecto al sitio de Transparencia Activa?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q35",
            "codigo": "16.2.2.6",
            "indicador": "Facilidad de lectura y usabilidad",
            "descripcion": "Disposición en el sitio web de la información pública de manera que facilite su lectura, comprensión y utilización, acogiendo buenas prácticas de orden, diseño y formato de los contenidos y documentos para que las personas usuarias puedan encontrar y entender la información sin necesidad de invertir una gran cantidad de tiempo y esfuerzos, o de tener conocimientos sobre la institución.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El sitio incluye una sección que informe las personas usuarias que pueden presentar un reclamo por infracción a las normas sobre Transparencia Activa ante el Consejo para la Transparencia (en el caso de detectarse incumplimientos en la publicación)?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q36",
            "codigo": "16.3.1",
            "indicador": "Transparencia proactiva",
            "descripcion": "Información pública de la gestión administrativa de la institución que se publica de manera adicional a la requerida por la Ley de Transparencia de la Función Pública y de Acceso a la Información de la Administración del Estado (Ley 20.285), más conocida como Ley de Transparencia.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El sitio del organismo presenta información en la que dé cuenta de su gestión administrativa o financiera más allá de la contemplada en la Ley de Transparencia?  Por ejemplo: planes de gestión; comités de administración; estudios, publicaciones, encuestas; otros gastos o procedimientos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q37",
            "codigo": "16.3.2",
            "indicador": "Notas legales",
            "descripcion": "Presencia de una página que indique los aspectos legales concernientes al sitio web y presente a sus responsables o representantes legales.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El sitio web cuenta con un contenido sobre aspectos legales que presente a los responsables del sitio web?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-16-q38",
            "codigo": "16.3.3",
            "indicador": "Reutilización",
            "descripcion": "Disponibilidad de los datos en bruto –sin requerimientos de registro, suscripción o pago ni restricciones de copyright– para que puedan ser reutilizados de modo que puedan crearse nuevas formas de información, interrelación, reusabilidad y nuevos usos.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El sitio cuenta con una sección específica donde se publican sus datos abiertos, instrucciones para su uso y descarga de un conjunto de datos, o en su defecto, un enlace hacia el sitio de Gobierno https://datos.gob.cl/?  Por ejemplo: las bases de datos del Índice de Precios al Consumidor (IPC) en el sitio web del Instituto Nacional de Estadísticas (INE).",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-17",
        "orden": 17,
        "nombre": "Prevención de errores",
        "descripcion": "Eliminación de las condiciones del sistema que confundan o induzcan a errores a las personas usuarias. Es clave verificarlas, ofrecer ejemplos y presentar una opción de confirmación antes de comprometerse con una acción.",
        "sourceSheet": "17Pre",
        "preguntas": [
          {
            "id": "web-17-q1",
            "codigo": "17.1.1",
            "indicador": "Entrega de información oportuna",
            "descripcion": "Presentación de información sobre los procesos que busca realizar la persona usuaria.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se presenta información sobre la temática que está revisando la persona usuaria antes de entrar al trámite?  Por ejemplo: se señala con un enlace \"compra de bonos\" y al entrar se inicia el proceso para comprar bonos.  La opción \"No aplica\" es solo para el caso en que no se presente información sobre un trámite.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-17-q2",
            "codigo": "17.1.2",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de un formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Las etiquetas de los campos explican claramente cuáles datos debe entregar la persona usuaria?  Por ejemplo: el campo de texto tiene una etiqueta \"Teléfono\" al lado.  La opción \"No aplica\" es solo para el caso en que no exista ningún formulario en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-17-q3",
            "codigo": "17.1.2.2",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de un formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Las etiquetas para los campos explican claramente cuáles son requeridos (obligatorios)? Por ejemplo: se indica la obligatoriedad de un campo con un asterisco.  La opción \"No aplica\" es solo para el caso en que no exista ningún formulario en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-17-q4",
            "codigo": "17.1.2.3",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de un formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se presentan ejemplos o información contextual sobre el correcto modo de llenado de los campos?  Por ejemplo: \"RUT sin puntos y con guion: 12345789-0\".  La opción \"No aplica\" es solo para el caso en que no exista ningún formulario en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-17-q5",
            "codigo": "17.1.2.4",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de un formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sistema genera una alerta visual en tiempo real cuando un dato no se está ingresando correctamente?  Por ejemplo: la persona usuaria se equivocó al ingresar su RUT y el campo se marca con un borde de color rojo y abajo del señala \"RUT incorrecto\".  La opción \"No aplica\" es solo para el caso en que no exista ningún formulario en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-17-q6",
            "codigo": "17.1.2.5",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de un formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se informa a la persona usuaria cuál es el error en la información ingresada?  Por ejemplo: no se ingresó el RUT que era un campo obligatorio y al enviar el formulario este señala claramente \"Debe ingresar un RUT\"; o se indica \"La contraseña debe tener por lo menos 6 caracteres\" en vez de tan solo \"contraseña no válida\".  La opción \"No aplica\" es solo para el caso en que no exista ningún formulario en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-17-q7",
            "codigo": "17.1.2.6",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de un formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los formularios permiten cancelar o rehacer una acción? Por ejemplo, al avanzar en un formulario con múltiples pasos, existe un botón con la etiqueta \"Atrás\" para regresar a la ventana anterior.  La opción \"No aplica\" es sólo si el sitio web no tiene formularios o si estos son simples (de un solo paso) y no requieren navegación entre secciones.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-17-q8",
            "codigo": "17.1.2.7",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de un formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El formulario automáticamente introduce el formateo de los datos?  Por ejemplo: las personas usuarias no necesitan introducir caracteres como \".\" o \"-\" al ingresar su RUT. En el caso de ingresar estos caracteres el sistema lo reconoce de igual forma.  La opción \"No aplica\" es solo para el caso en que no exista ningún formulario en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-17-q9",
            "codigo": "17.1.2.8",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de un formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿En los campos del formulario solo se pueden ingresar los datos que se solicitan?  Por ejemplo: si en un campo solo se pide que ingrese números, el campo no aceptará otro tipo de caracteres.  La opción \"No aplica\" es solo para el caso en que no exista ningún formulario en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-17-q10",
            "codigo": "17.1.2.9",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de un formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Los formularios no contienen campos o datos duplicados. Por ejemplo: en un selector, cada elemento aparece una sola vez y no se repite ninguno.  La opción \"No aplica\" es solo para el caso en que no exista ningún formulario en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-17-q11",
            "codigo": "17.2.1",
            "indicador": "Prevención de errores",
            "descripcion": "Eliminación de las condiciones de la interfaz que induzcan a error en las personas usuarias. Los buenos mensajes de error son importantes, pero los mejores diseños evitan que los problemas ocurran.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Antes de enviar una información o finalizar una interacción avanzada, ¿aparece una opción para confirmar que la acción se realizará?  Por ejemplo: \"¿Está segura/o de eliminar el archivo\".  La opción \"No aplica\" es solo para el caso en que no exista ningún formulario en el sitio web o este sea sencillo sin interacción avanzada.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-17-q12",
            "codigo": "17.2.1.2",
            "indicador": "Prevención de errores",
            "descripcion": "Eliminación de las condiciones de la interfaz que induzcan a error en las personas usuarias. Los buenos mensajes de error son importantes, pero los mejores diseños evitan que los problemas ocurran.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Antes de enviar un formulario, ¿la persona usuaria puede ver un resumen con la información?  La opción \"No aplica\" es solo para el caso en que no exista ningún formulario en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-18",
        "orden": 18,
        "nombre": "Facilidad de acceso e independencia tecnológica",
        "descripcion": "Condición del sitio web que permite a las personas usuarias acceder a la información expedita y oportuna, independiente de la calidad o tipo de dispositivo a través del que se está conectando.",
        "sourceSheet": "18Fac",
        "preguntas": [
          {
            "id": "web-18-q1",
            "codigo": "18.1.1",
            "indicador": "Velocidad de acceso",
            "descripcion": "Rapidez con la que las personas usuarias pueden cargar y acceder al contenido de un sitio web. Es un factor crítico en la experiencia del usuario y puede influir significativamente en la retención de visitantes, la tasa de rebote y el posicionamiento en los motores de búsqueda.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio web puede ser navegado con la velocidad más baja de Internet móvil?  Por ejemplo: la página web carga en menos de 3 segundos con una conexión 3G de datos móviles.  1. Se puede realizar una prueba de rendimiento en Webpagetest, copiando la URL de la portada del sitio web y pegando en el sector que dice: \"Enter a website URL...\".  2. Más abajo seleccionar la opción: \"MOBILE 3G Mumbai, IN\". 3. Luego iniciar el test presionando el botón \"Start Test\".  4. Hay que esperar unos minutos y aparecerá el resultado. En el sector de \"Speed Index\" se verán los segundos aproximados que deben ser menores o iguales a 3.  La opción \"No aplica\" es solo para el caso en que no sea posible utilizar la herramienta externa.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-18-q2",
            "codigo": "18.1.2",
            "indicador": "Compatibilidad de navegadores",
            "descripcion": "Garantía de acceso y correcta visualización de los sitios web en los diversos navegadores de Internet.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio web carga correctamente en los navegadores web más utilizados?  Por ejemplo: Google Chrome, Mozilla Firefox, Safari y Microsoft Edge.  Se puede emular la visualización de una página web en otros navegadores con Google Chrome: 1. Primero presionar F12 para abrir el inspector 2. Luego, ir a los tres puntos verticales ubicados en el sector superior derecho y seleccionar \"Más herramientas\" (en inglés \"More tools\") 3. Seleccionar la opción que dice \"Condiciones de red\" (en inglés \"Network conditions\") 4. Después, buscar en lado izquierdo la opción \"Usuario-agente\" (en inglés \"User agent\"), y desmarcar la casilla de \"Usar la configuración predeterminada del navegador\" (en inglés \"Use browser default\") 5. Aparecerá un listado con varios navegadores, seleccione por ejemplo: Microsoft Edge (Chromium - Windows o Mac) y actualice el navegador con F5 para comprobar que la página visitada no presenta grandes cambios.  6. Puede realizar la prueba cuantas veces estime conveniente, seleccionando otro navegador de la lista y actualizando con F5.  7. Al terminar las pruebas, recuerde dejar los valores editados como estaban antes.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-18-q3",
            "codigo": "18.1.3",
            "indicador": "Accesibilidad técnica",
            "descripcion": "Capacidad de un sitio web para ser accesible y funcional en una amplia gama de dispositivos y tecnologías, sin importar las limitaciones técnicas o las preferencias de la persona usuaria. Esto implica que el sitio web debe ser diseñado y desarrollado de manera que pueda ser utilizado fácilmente por cualquier persona, independientemente del dispositivo que estén utilizando.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio web está diseñado para cargar correctamente en cualquier dispositivo?  Por ejemplo: que el sitio web sea correctamente visualizado en un celular de baja gama.  Se puede emular la visualización de una página web en otros dispositivos con Google Chrome: 1. Primero presionar F12 para abrir el inspector, luego ir al icono, que es un celular dentro de una pantalla de notebook, llamado \"Activar o desactivar la barra de herramientas del dispositivo\" (en inglés\"Toggle device toolbar\"), ubicado en el sector superior izquierdo y seleccionar. 2. De forma predeterminada, la barra de herramientas, ubicada en el centro superior de la pantalla, se abre con la opción \"Dimensiones\" (en inglés \"Dimensions\"), establecida en \"Respuesta inmediata\" o \"Reactivo\" (en inglés \"Responsive\"). 3. Aquí puede elegir entre diversos dispositivos, por ejemplo: el iPhone SE y examinar cómo se comporta la página web, luego puede elegir otro dispositivo y así sucesivamente.  4. Por otro lado, para emular una conexión más baja de Internet en el sector derecho está la opción \"No hay limitación\" (en inglés \"No throttling\"), aquí puede seleccionar \"Dispositivos móviles de gama baja\" (en inglés \"Low-end mobile\"). 5. Luego, actualizar la página con F5 y observar cómo se va cargando la estructura del sitio.  6. Con esto puede evaluar si la página web está diseñada para ser visualizada en los diversos dispositivos.  7. Al terminar las pruebas, recuerde dejar los valores editados como estaban antes, seleccionando el icono de \"Activar o desactivar la barra de herramientas del dispositivo\" (en inglés \"Toggle device toolbar\").",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-18-q4",
            "codigo": "18.1.4",
            "indicador": "Independencia de conectividad",
            "descripcion": "Grado de equidad con que el sitio web brinda acceso a la ciudadanía, independientemente de sus diversos dispositivos y la continuidad, la calidad de señal y la rapidez de su conexión a internet.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio muestra la misma información en todos los tipos de conexión?  Por ejemplo: el sitio web, independiente de que se utilicen datos móviles, wifi o por cable LAN (ethernet), carga todas las imágenes.  Para emular la visualización de una página web con una conexión lenta en Google Chrome: 1. Primero presionar F12 para abrir el inspector. 2. Luego, ir a los tres puntos verticales ubicados en el sector superior derecho y seleccionar \"Más herramientas\" (en inglés \"More tools\").  3. Seleccionar la opción que dice \"Condiciones de red\" (en inglés \"Network conditions\"). 4. Después, seleccionar \"Limitación de red\" (en inglés \"Network throttling\") y elegir la opción de \"3G\" o \"slow 3G\".  5. Finalmente, actualizar el navegador con F5 y para comprobar esto, la página visitada no debería presentar cambios.  7. Al terminar las pruebas, recuerde dejar los valores editados como estaban antes.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-18-q5",
            "codigo": "18.1.4.2",
            "indicador": "Independencia de conectividad",
            "descripcion": "Grado de equidad con que el sitio web brinda acceso a la ciudadanía, independientemente de sus diversos dispositivos y la continuidad, la calidad de señal y la rapidez de su conexión a internet.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio se comporta de igual manera desde diferentes ubicaciones geográficas?  Para emular la visualización de una página web desde diferentes ubicaciones geográficas: 1. En Webpagetest, copiando la URL de la portada del sitio web y pegando en el sector que dice: \"Enter a website URL...\".  2. Más abajo seleccionar la opción: \"DESKTOP Cable Toronto, CA\" y luego iniciar el test presionando el botón \"Start Test\".  3. Abrir otra pestaña y hacer lo mismo, pero seleccionando la opción: \"DESKTOP Cable Frankfurt, DE\".  4. Hay que esperar unos minutos y aparecerá el resultado. 5. Una vez finalizadas las pruebas, observe las capturas de pantalla en el sector derecho de cada pestaña. No debería haber cambios significativos en la visualización entre ambas ubicaciones.   La opción \"No aplica\" es solo para el caso en que no sea posible utilizar la herramienta externa.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-18-q6",
            "codigo": "18.1.5",
            "indicador": "Compatibilidad retroactiva",
            "descripcion": "Solidez del contenido para ser interpretado de manera confiable por una amplia variedad de navegadores. Es decir, que las personas usuarias sigan accediendo al contenido a medida que avanzan y evolucionan las tecnologías.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio web sigue siendo comprensible y funcional en navegadores más antiguos o menos comunes, asegurando su compatibilidad retroactiva?  Se puede emular la visualización de una página web en un navegador más antiguo en Google Chrome: 1. Primero presionar F12 para abrir el inspector. 2. Luego, ir a los tres puntos verticales ubicados en el sector superior derecho y seleccionar \"Más herramientas\" (en inglés \"More tools\"),  3. Seleccionar la opción que dice \"Condiciones de red\" (en inglés \"Network conditions\"). 4. Después, buscar en lado izquierdo la opción \"Usuario-agente\" (en inglés \"User agent\"), y desmarcar la casilla de \"Usar la configuración predeterminada del navegador\" (en inglés \"Use browser default\"). 5. Aparecerá un listado con varios navegadores, seleccione por ejemplo: Internet Explorer 11 y actualice el navegador con F5 para comprobar que la página visitada no presenta grandes cambios.  6. Puede realizar la prueba seleccionando otro navegador antiguo de la lista y actualizando con F5.  7. Al terminar las pruebas, recuerde dejar los valores editados como estaban antes.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-19",
        "orden": 19,
        "nombre": "Interacción y retroalimentación",
        "descripcion": "Comunicación entre la persona usuaria y las distintas interfaces que provee la plataforma que se le entrega al usuario para acceder a una información o servicio. Retroalimentación hace referencia a que la interfaz de usuario proporcione información sobre el estado del proceso en tiempo real, para poder tomar decisiones de forma efectiva.",
        "sourceSheet": "19Int",
        "preguntas": [
          {
            "id": "web-19-q1",
            "codigo": "19.1.1",
            "indicador": "Visibilidad del estado del sistema",
            "descripcion": "Información oportuna para las personas usuarias sobre lo que está sucediendo durante cada interacción y sus efectos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Existe un cambio visible cuando se selecciona o apunta a algún elemento cliqueable?  Por ejemplo: cuando el puntero del cursor pasa por sobre una zona cliqueable, este cambia de flecha a mano y además se percibe un cambio de diseño, como subrayado y/o color.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-19-q2",
            "codigo": "19.1.1.2",
            "indicador": "Visibilidad del estado del sistema",
            "descripcion": "Información oportuna para las personas usuarias sobre lo que está sucediendo durante cada interacción y sus efectos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se informa adecuadamente a las personas usuarias de la efectividad de sus interacciones?  Por ejemplo: en un formulario, al seleccionar una opción de una lista, esta queda marcada de manera visible; al escoger una fecha para una cita en un calendario, esta queda registrada de manera visible en la pantalla; al pulsar \"Reproducir\" (Play) en un reproductor de video, la imagen muestra el icono de un triángulo por algunos milisegundos sobre la imagen.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-19-q3",
            "codigo": "19.1.1.3",
            "indicador": "Visibilidad del estado del sistema",
            "descripcion": "Información oportuna para las personas usuarias sobre lo que está sucediendo durante cada interacción y sus efectos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Al completarse un formulario se indica que los datos registrados fueron enviados exitosamente?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-19-q4",
            "codigo": "19.1.1.4",
            "indicador": "Visibilidad del estado del sistema",
            "descripcion": "Información oportuna para las personas usuarias sobre lo que está sucediendo durante cada interacción y sus efectos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sistema le informa visualmente a la persona usuaria si algo sucede o sucederá tras sus interacciones?   La opción \"No aplica\" es solo para el caso en que no existan formularios en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-19-q5",
            "codigo": "19.1.2",
            "indicador": "Indicador de proceso",
            "descripcion": "Existencia de elementos de la interfaz de usuario que indica en qué parte del sitio web se encuentra la persona usuaria.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se informa a la persona usuaria claramente el área o página que está visitando?  Por ejemplo: se marca el elemento del menú que se está visitando o existe un menú de miga de pan (breadcrumb).",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-19-q6",
            "codigo": "19.3.1",
            "indicador": "Enlaces visitados",
            "descripcion": "Existe una diferencia perceptible entre enlaces visitados y por visitar.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El sitio web diferencia entre enlaces visitados y enlaces por visitar?  Por ejemplo: los enlaces por visitar son de color azul, mientras que los enlaces visitados son de un color morado.  La opción \"No aplica\" se utiliza solo si el sitio web no incluye enlaces.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-19-q7",
            "codigo": "19.3.2",
            "indicador": "Foros y encuestas",
            "descripcion": "Presencia de espacios que permitan la comunicación, el intercambio y la participación entre las personas usuarias y los responsables.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Existen foros o blogs que permitan la comunicación, intercambio y participación entre las personas usuarias y los responsables del sitio web?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-19-q8",
            "codigo": "19.3.3",
            "indicador": "Comunicación con responsable",
            "descripcion": "Posibilidad de comunicarse con la persona encargada, para realizar consultas, sugerencias o comentarios respecto del servicio digital.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Existen formas de comunicarse con la persona responsable o unidad de soporte técnico del sitio web?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-19-q9",
            "codigo": "19.3.3.2",
            "indicador": "Comunicación con responsable",
            "descripcion": "Posibilidad de comunicarse con la persona encargada, para realizar consultas, sugerencias o comentarios respecto del servicio digital.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El acceso a este contacto es fácil de encontrar?  La opción \"No aplica\" es solo para el caso en que no exista ninguna forma de comunicación con el responsable del sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "web-20",
        "orden": 20,
        "nombre": "Rapidez de respuesta",
        "descripcion": "Capacidad del servicio digital para entregar una experiencia usuaria rápida y con una navegación fluida, sobre todo en los trámites. También considera los tiempos de la institución para dar respuestas a las solicitudes en plazos breves y acotados.",
        "sourceSheet": "20Rap",
        "preguntas": [
          {
            "id": "web-20-q1",
            "codigo": "20.1.1",
            "indicador": "Tiempo de respuesta",
            "descripcion": "Velocidad con la que un sitio web puede procesar y responder a las solicitudes de las personas usuarias, proporcionando una experiencia de navegación ágil y eficiente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio web proporciona respuestas rápidas a las interacciones de la persona usuaria, como hacer clic en botones o enviar formularios?  Por ejemplo: los formularios se envían y procesan rápidamente, proporcionando una respuesta inmediata a la persona usuaria.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-20-q2",
            "codigo": "20.1.1.2",
            "indicador": "Tiempo de respuesta",
            "descripcion": "Velocidad con la que un sitio web puede procesar y responder a las solicitudes de las personas usuarias, proporcionando una experiencia de navegación ágil y eficiente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio web envía respuestas o confirmaciones de recepción automáticas e inmediatas?  Por ejemplo: al enviar un formulario de contacto se recibe una notificación inmediata al correo electrónico de que fue recibido correctamente.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-20-q3",
            "codigo": "20.1.1.3",
            "indicador": "Tiempo de respuesta",
            "descripcion": "Velocidad con la que un sitio web puede procesar y responder a las solicitudes de las personas usuarias, proporcionando una experiencia de navegación ágil y eficiente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿La portada del sitio web se carga completamente en menos de tres segundos?  Por ejemplo: al visitar desde un PC o notebook en el navegador Google Chrome la página principal con todo el contenido, incluidas las imágenes, las hojas de estilos y los scripts, estos se cargan en menos de tres segundos.   Para esto, se recomienda realizar una prueba de rendimiento en WebPageTest: 1. Pegar la URL de la página a revisar y elegir la opción: \"DESKTOP Cable Virginia, US\". 2. Luego iniciar el test.  3. Más abajo aparecerá el resultado en el sector de \"Speed Index\", se verán los segundos aproximados que deben ser menor o igual a 3.  La opción \"No aplica\" es solo para el caso en que no sea posible utilizar la herramienta externa.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "web-20-q4",
            "codigo": "20.1.1.4",
            "indicador": "Tiempo de respuesta",
            "descripcion": "Velocidad con la que un sitio web puede procesar y responder a las solicitudes de las personas usuarias, proporcionando una experiencia de navegación ágil y eficiente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿La portada del sitio web está diseñada y desarrollada para cargar rápidamente incluso en conexiones de Internet lentas o con límites de datos?  Por ejemplo: se recomienda que pese menos de 2 MB, en total, para garantizar que se visualice rápidamente en conexiones 3G.   Para saber el peso de la página web evaluada, se recomienda hacer un test con la herramienta Pingdom:  1. Pegar la URL de la página a revisar y elegir la opción \"South America - Brazil - São Paulo\". 2. Luego iniciar el test.  3. Más abajo aparecerá el resultado en \"Page size\", este debe ser menor a 2MB en total.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      }
    ]
  },
  "Servicio Digital": {
    "tipoInstrumento": "Servicio Digital",
    "sourceFile": "2.1 Servicios digitales - CalidadWeb 2.0 PUBLICABLE.xlsx",
    "dimensiones": [
      {
        "id": "svc-1",
        "orden": 1,
        "nombre": "Usabilidad",
        "descripcion": "Medida en que los usuarios pueden utilizar un sistema para lograr determinados objetivos con eficacia, eficiencia y satisfacción en un contexto de uso especificado.",
        "sourceSheet": "1Usa",
        "preguntas": [
          {
            "id": "svc-1-q1",
            "codigo": "1.1.1",
            "indicador": "Coherencia y estandarización",
            "descripcion": "Apego a las convenciones de los sitios web y servicios digitales, de manera tal que las personas usuarias no tengan que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo en cada plataforma.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se respeta la organización del servicio digital y se preserva su consistencia en todas las páginas? Por ejemplo: los enlaces del menú global o los pasos del trámite aparecen en la misma posición en todo el sitio.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-1-q2",
            "codigo": "1.1.1.2",
            "indicador": "Coherencia y estandarización",
            "descripcion": "Apego a las convenciones de los sitios web y servicios digitales, de manera tal que las personas usuarias no tengan que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo en cada plataforma.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En el caso de los sitios del gobierno central, ¿Se utilizan los componentes del UI Kit del Gobierno Digital?  La opción \"No aplica\" es solo para el caso en que el sitio web examinado no pertenezca al gobierno central.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-1-q3",
            "codigo": "1.1.1.3",
            "indicador": "Coherencia y estandarización",
            "descripcion": "Apego a las convenciones de los sitios web y servicios digitales, de manera tal que las personas usuarias no tengan que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo en cada plataforma.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los iconos son fácilmente comprensibles sin texto adicional y siguen convenciones o figuras reconocibles por cualquier persona? Por ejemplo: una casa para volver al inicio, una lupa para el buscador, líneas horizontales del ícono de menú de \"hamburguesa\" para colapsar o una \"X\" para cerrar.  La opción \"No aplica\" se debe seleccionar sólo si el sitio no utiliza iconos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-1-q4",
            "codigo": "1.1.2",
            "indicador": "Diseño estético y minimalista",
            "descripcion": "Simplicidad y limpieza de las interfaces, las que no deben contener información que sea irrelevante o que rara vez se necesite. Cada elemento en una interfaz compite con las unidades de información relevantes y disminuye su visibilidad relativa.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los llamados a la acción y botones están claramente destacados y se identifican fácilmente por su forma o color? Por ejemplo: los enlaces y botones se destacan visualmente, haciéndolos fáciles de reconocer a simple vista.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-1-q5",
            "codigo": "1.1.3",
            "indicador": "Diagnóstico y corrección de errores",
            "descripcion": "Asistencia a las personas usuarias ante errores, brindándoles una solución o un acceso directo que pueda resolver el error de inmediato. Redacción de los mensajes de error en un lenguaje sencillo (sin códigos de error), indicando con precisión el problema y sugerir una solución de manera constructiva.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los mensajes de alerta ante un error brindan información clara del problema y ofrecen una vía de solución?  Por ejemplo: ante una página no encontrada, en vez de indicar \"error 404\" el sitio muestra alternativas de enlaces para que la persona usuaria pueda seguir a un nuevo contenido o volver al anterior.   Para evaluar una página no encontrada es necesario escribir la URL del sitio y después del \"/\" final, agregar un texto falso, como: https://sitioejemplo.gob.cl/abcde",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-1-q6",
            "codigo": "1.1.3.2",
            "indicador": "Diagnóstico y corrección de errores",
            "descripcion": "Asistencia a las personas usuarias ante errores, brindándoles una solución o un acceso directo que pueda resolver el error de inmediato. Redacción de los mensajes de error en un lenguaje sencillo (sin códigos de error), indicando con precisión el problema y sugerir una solución de manera constructiva.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se puede verificar que los mensajes de error no interfieren con la navegación en la página?  Por ejemplo: las ventanas emergentes se pueden cerrar fácilmente con el teclado y no generan bloqueo de navegación. Esto se puede hacer con la tecla \"Esc\".  La opción \"No aplica\" es solo para el caso en que no se observen mensajes de error.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-1-q7",
            "codigo": "1.1.4",
            "indicador": "Ventanas modales o emergentes (pop-up)",
            "descripcion": "Cuidado de no utilizar excesiva o innecesariamente ventanas modales y emergentes (pop-up)",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio permite navegar sin interrupciones de modales o ventanas emergentes que tapen el contenido? Por ejemplo: no aparecen anuncios, mensajes de marketing o formularios de suscripción que bloqueen la visualización o navegación.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-1-q8",
            "codigo": "1.1.4.2",
            "indicador": "Ventanas modales o emergentes (pop-up)",
            "descripcion": "Cuidado de no utilizar excesiva o innecesariamente ventanas modales y emergentes (pop-up)",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Una vez cerrada la ventana emergente (pop-up) o modal, ¿queda guardada esa decisión para que no vuelva a aparecer al volver a ingresar, cargar o cambiar de página? Por ejemplo: al cerrar una ventana modal esta no vuelve a aparecer durante la navegación del sitio web.  La opción \"No aplica\" es solo para el caso en que no se observen ventanas emergentes o modales en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-1-q9",
            "codigo": "1.1.5",
            "indicador": "Mensajes de error",
            "descripcion": "Interrupción generada por el sistema que le informa a la persona usuaria de una situación incompleta, incompatible o indeseable dentro del flujo de navegación.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En caso de aparecer un mensaje de error, ¿se ofrecen soluciones claras y efectivas para que la persona usuaria pueda resolver el problema? Por ejemplo: las indicaciones del mensaje de error permiten realizar la acción correctamente sin que se repita el error.  La opción \"No aplica\" es solo para el caso en que no se observen mensajes de error.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-1-q10",
            "codigo": "1.1.5.2",
            "indicador": "Mensajes de error",
            "descripcion": "Interrupción generada por el sistema que le informa a la persona usuaria de una situación incompleta, incompatible o indeseable dentro del flujo de navegación.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En caso de aparecer un mensaje de error inesperado de origen técnico, ¿se entrega información clara en vez de mensajes ambiguos como \"Intente más tarde\" o \"Comuníquese con el administrador\"?  La opción \"No aplica\" es solo para el caso en que no se observen mensajes de error.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-1-q11",
            "codigo": "1.2.1",
            "indicador": "Similitud del sistema con el mundo real",
            "descripcion": "Utilización de conceptos, frases y diseños familiares para las personas usuarias. Correspondencia con las convenciones del mundo real, haciendo que la información aparezca en un orden natural y lógico.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El servicio digital presenta información en un orden lógico y con zonas bien delimitadas?  Por ejemplo: se diferencian las zonas de encabezado, menú, contenido y pie de página.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-1-q12",
            "codigo": "1.2.2",
            "indicador": "Control y libertad para la persona usuaria",
            "descripcion": "Alternativa claramente marcada para abandonar una acción no deseada o detener un proceso prolongado.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las páginas permiten avanzar o retroceder sin quedar atrapadas, ofreciendo opciones claras para continuar o finalizar? Por ejemplo: al completar un trámite, la página muestra una confirmación en lugar de quedar en blanco, y los formularios se envían sin que el sistema quede \"guardando\" indefinidamente.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-1-q13",
            "codigo": "1.2.2.2",
            "indicador": "Control y libertad para la persona usuaria",
            "descripcion": "Alternativa claramente marcada para abandonar una acción no deseada o detener un proceso prolongado.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Si al ingresar al servicio digital por primera vez aparece un mensaje que ocupe toda la pantalla (del tipo ventana modal, emergente o pop-up), ¿este tiene una opción de cerrarse fácilmente identificable?  Por ejemplo: un enlace que diga \"Cerrar\" o un botón con el icono de \"X\".  La opción \"No aplica\" es solo para el caso en que no se observan ventanas del tipo modal, emergente o pop-up.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-1-q14",
            "codigo": "1.3.1",
            "indicador": "Reducción del esfuerzo cognitivo",
            "descripcion": "Disminución de la carga de memoria a corto plazo para la persona usuaria, haciendo fácilmente reconocibles los elementos, acciones y opciones. El sistema debería ayudar a los usuarios a reconocer los elementos de la interfaz sin la necesidad de analizarlos cada vez al detalle, gastando más energía y tiempo.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Es visible el icono personalizado del sitio (favicon) en la pestaña del navegador?  Por ejemplo: aparece un cuadrado azul y rojo en los sitios del Gobierno de Chile.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-1-q15",
            "codigo": "1.3.1.2",
            "indicador": "Reducción del esfuerzo cognitivo",
            "descripcion": "Disminución de la carga de memoria a corto plazo para la persona usuaria, haciendo fácilmente reconocibles los elementos, acciones y opciones. El sistema debería ayudar a los usuarios a reconocer los elementos de la interfaz sin la necesidad de analizarlos cada vez al detalle, gastando más energía y tiempo.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Se ofrece ayuda en contexto, en lugar de presentar a las personas usuarias un largo tutorial para memorizar?  Por ejemplo: aparece una línea punteada bajo los acrónimos para acceder a su definición o un icono de interrogación (\"?\") al lado de una instrucción para acceder a una ayuda específica.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-1-q16",
            "codigo": "1.3.2",
            "indicador": "Flexibilidad y eficiencia de uso",
            "descripcion": "Oferta de distintas maneras de acceder al contenido y opción de aceleradores y acciones personalizadas tanto para personas usuarias avanzadas como menos experimentadas.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Las personas usuarias cuentan con opciones para ordenar y filtrar resultados y tablas de datos?  Por ejemplo: búsqueda avanzada con filtro alfabético o por fecha.  La opción \"No aplica\" es solo para el caso en que no se encuentren resultados o tablas de datos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-1-q17",
            "codigo": "1.3.2.2",
            "indicador": "Flexibilidad y eficiencia de uso",
            "descripcion": "Oferta de distintas maneras de acceder al contenido y opción de aceleradores y acciones personalizadas tanto para personas usuarias avanzadas como menos experimentadas.",
            "prioridad": "Deseable",
            "preguntaChequeo": "En los servicios en que la persona usuaria se encuentre autenticada, ¿se brinda la opción personalizada de destacar o anclar las interacciones más frecuentes?  La opción \"No aplica\" es solo para el caso en que el servicio evaluado no requiera autenticación.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-2",
        "orden": 2,
        "nombre": "Prevención de errores",
        "descripcion": "Eliminación de las condiciones del sistema que confundan o induzcan a errores a las personas usuarias. Es clave verificarlas, ofrecer ejemplos y presentar una opción de confirmación antes de comprometerse con una acción.",
        "sourceSheet": "2Pre",
        "preguntas": [
          {
            "id": "svc-2-q1",
            "codigo": "2.1.1",
            "indicador": "Entrega de información oportuna",
            "descripcion": "Presentación de información sobre los procesos que busca realizar la persona usuaria.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se presenta información sobre la temática que está revisando la persona usuaria antes de entrar al trámite?  Por ejemplo: se señala con un enlace \"compra de bonos\" y al entrar se inicia el proceso para comprar bonos.  La opción \"No aplica\" es solo para el caso en que el sitio web no tenga contenidos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-2-q2",
            "codigo": "2.1.2",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Las etiquetas de los campos explican claramente cuáles datos debe entregar la persona usuaria?  Por ejemplo: el campo de texto tiene una etiqueta \"Teléfono\" al lado.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-2-q3",
            "codigo": "2.1.2.2",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Las etiquetas para los campos explican claramente cuáles son requeridos (obligatorios)? Por ejemplo: se indica la obligatoriedad de un campo con un asterisco.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-2-q4",
            "codigo": "2.1.2.3",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se presentan ejemplos o información contextual sobre el correcto modo de llenado de los campos?  Por ejemplo: \"RUT sin puntos y con guión: 12345789-0\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-2-q5",
            "codigo": "2.1.2.4",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sistema genera una alerta visual en tiempo real cuando un dato no se está ingresando correctamente?  Por ejemplo: la persona usuaria se equivocó al ingresar su RUT y el campo se marca con un borde de color rojo y abajo se señala \"RUT incorrecto\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-2-q6",
            "codigo": "2.1.2.5",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se informa a la persona usuaria cuál es el error en la información ingresada?  Por ejemplo: no se ingresó el RUT que era un campo obligatorio, al enviar el formulario señala claramente \"Debe ingresar un RUT\" o se indica \"La contraseña debe tener por lo menos 6 caracteres\" en vez de tan solo \"contraseña no válida\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-2-q7",
            "codigo": "2.1.2.6",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los formularios permiten cancelar o rehacer una acción? Por ejemplo, al avanzar en un formulario con múltiples pasos, existe un botón con la etiqueta \"Atrás\" para regresar a la ventana anterior.  La opción \"No aplica\" es sólo si el sitio web no tiene formularios o si estos son simples (de un solo paso) y no requieren navegación entre secciones.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-2-q8",
            "codigo": "2.1.2.7",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El formulario automáticamente introduce el formateo de los datos?  Por ejemplo: las personas usuarias no necesitan introducir caracteres como \".\" o \"-\" al ingresar su RUT. En el caso de ingresar estos caracteres el sistema los reconoce de igual forma.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-2-q9",
            "codigo": "2.1.2.8",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿En los campos del formulario solo se pueden ingresar los datos que se solicitan?  Por ejemplo: si en un campo solo se pide que ingrese números, el campo no aceptará otro tipo de caracteres.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-2-q10",
            "codigo": "2.1.2.9",
            "indicador": "Diseño de formularios",
            "descripcion": "Entrega de información clara sobre los errores ocurridos durante el proceso de envío de formulario.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Los formularios no contienen campos o datos duplicados. Por ejemplo: en un selector, cada elemento aparece una sola vez y no se repite ninguno.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-2-q11",
            "codigo": "2.2.1",
            "indicador": "Prevención de errores",
            "descripcion": "Eliminación de las condiciones de la interfaz que induzcan a error en las personas usuarias. Los buenos mensajes de error son importantes, pero los mejores diseños evitan que los problemas ocurran.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Antes de enviar una información o finalizar una interacción avanzada, ¿aparece una opción para confirmar que la acción se realizará?  Por ejemplo: \"¿Está segura/o de eliminar el archivo\".  La opción \"No aplica\" es solo para el caso en que no exista ningún formulario en el sitio web o este sea sencillo sin interacción avanzada.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-2-q12",
            "codigo": "2.2.1.2",
            "indicador": "Prevención de errores",
            "descripcion": "Eliminación de las condiciones de la interfaz que induzcan a error en las personas usuarias. Los buenos mensajes de error son importantes, pero los mejores diseños evitan que los problemas ocurran.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Antes de enviar un formulario, ¿la persona usuaria puede ver un resumen con la información?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-2-q13",
            "codigo": "2.2.1.3",
            "indicador": "Prevención de errores",
            "descripcion": "Eliminación de las condiciones de la interfaz que induzcan a error en las personas usuarias. Los buenos mensajes de error son importantes, pero los mejores diseños evitan que los problemas ocurran.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El sistema permite acceder a un historial de acciones realizadas?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-3",
        "orden": 3,
        "nombre": "Accesibilidad web",
        "descripcion": "Especial cuidado de que todos los sitios web estén diseñados para que todos y todas puedan acceder. Pone foco principalmente en las personas con discapacidad para que puedan percibir, comprender, navegar, interactuar y contribuir con la web. Es importante destacar que esta dimensión no abarca de manera exhaustiva todas los criterios de accesibilidad. Para ello se recomienda utilizar la Plataforma de Reportabilidad de Accesibilidad Universal de SENADIS. Más información en: https://reportedeaccesibilidad.senadis.cl/sign.",
        "sourceSheet": "3Acc",
        "preguntas": [
          {
            "id": "svc-3-q1",
            "codigo": "3.1.1",
            "indicador": "Navegación por teclado",
            "descripcion": "Orden lógico y fluido al navegar el sitio web con el teclado en que se respeta el sentido de izquierda a derecha, de arriba hacia abajo, y sin una determinada velocidad de pulsación.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Al navegar con el teclado con la tecla \"Tab\" se respeta el orden de izquierda a derecha, de arriba hacia abajo?  En el punto VI de la guía, puede consultar cómo navegar el sitio web con el teclado.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-3-q2",
            "codigo": "3.1.1.2",
            "indicador": "Navegación por teclado",
            "descripcion": "Orden lógico y fluido al navegar el sitio web con el teclado en que se respeta el sentido de izquierda a derecha, de arriba hacia abajo, y sin una determinada velocidad de pulsación.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Es posible una navegación mediante el teclado fluida y sin saltarse ninguna información?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-3-q3",
            "codigo": "3.1.1.3",
            "indicador": "Navegación por teclado",
            "descripcion": "Orden lógico y fluido al navegar el sitio web con el teclado en que se respeta el sentido de izquierda a derecha, de arriba hacia abajo, y sin una determinada velocidad de pulsación.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Es posible navegar con el teclado sin una determinada velocidad de pulsación?  Por ejemplo: si se navega el sitio con la tecla \"Tab\" y la persona usuaria se detiene por más de 10 segundos para luego retomar la navegación, no debe empezar toda la navegación desde el inicio, sino que se mantiene donde había quedado.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-3-q4",
            "codigo": "3.1.2",
            "indicador": "Color como único medio de información",
            "descripcion": "Precaución de no entregar instrucciones o información utilizando el color como único medio de significado.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "El sitio web no presenta comandos o botones de instrucción que utilicen el color como único medio de información.  Por ejemplo: no se presentan botones rojos sin texto para la acción de \"cancelar\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-3-q5",
            "codigo": "3.1.3",
            "indicador": "Ajuste del tamaño de la fuente",
            "descripcion": "Posibilidad de agrandar el texto del sitio web en hasta un 200% cuidando de que se mantenga el diseño y no se pierda funcionalidad en el sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Existen botones para que el usuario pueda agrandar o achicar la fuente?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-3-q6",
            "codigo": "3.1.3.2",
            "indicador": "Ajuste del tamaño de la fuente",
            "descripcion": "Posibilidad de agrandar el texto del sitio web en hasta un 200% cuidando de que se mantenga el diseño y no se pierda funcionalidad en el sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Es posible agrandar el texto hasta un 200% (con \"Ctrl +\" o \"Cmd +\") sin que se pierda el contenido, diseño o funcionalidad?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-3-q7",
            "codigo": "3.1.4",
            "indicador": "Tiempo suficiente para realizar tareas",
            "descripcion": "Precaución de establecer tiempos más holgados en las sesiones, para que las personas usuarias puedan completar una tarea como llenar un formulario sin cambios inesperados por límite de tiempo.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Las personas usuarias pueden completar una tarea sin cambios inesperados por límite de tiempo (exceptuando casos donde se debe cerrar la sesión con un límite de tiempo por seguridad)?  Por ejemplo: completar un formulario sin que se borren los datos antes de terminar de completarlo o que el sistema impida guardar por tiempo de expiración.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-3-q8",
            "codigo": "3.1.5",
            "indicador": "Etiquetas en iconos",
            "descripcion": "Soporte textual que explique la función de los iconos utilizados para ejecutar una acción.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿En el sitio web se presenta alternativa de texto para iconografía que ejecuta una acción?  Por ejemplo: se presenta el botón \"A+\" para aumentar el tamaño del texto y al poner el cursor por encima se muestra el texto \"Agrandar tamaño de fuente\", o al ver un icono de lupa se muestra el texto \"Buscar\".  La opción \"No aplica\" es solo para el caso en que no exista  iconografía que ejecuta una acción.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-3-q9",
            "codigo": "3.1.6",
            "indicador": "Estructura de la interfaz",
            "descripcion": "Identificación clara de las diferentes zonas de una página para que los software de lectura pueden identificar las estructuras y relaciones del contenido.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El código HTML es semántico y sus etiquetas se usan adecuadamente en el sitio web? Por ejemplo: las etiquetas que se utilizan varían de acuerdo a su significado, un título principal se ve representado con una etiqueta \"h1\", subtítulos con \"h2\" o \"h3\", párrafos con \"p\" y texto destacado en negrita con \"strong\".  Esto se puede revisar abriendo al código fuente con los comandos \"Ctrl\" + \"U\" o \"Cmd\" + \"U\" y revisando la presencia del correcto uso de las etiquetas señaladas en el ejemplo.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-3-q10",
            "codigo": "3.1.7",
            "indicador": "Contraste mínimo",
            "descripcion": "Atención a los contrastes de color al diseñar la interfaz, los textos e imágenes de texto, que  deben tener un contraste mínimo de 4,5:1 entre el color de fondo y del texto o icono.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los textos tienen un contraste de color mayor a 4.5:1?  Por ejemplo: se evita el uso de texto gris sobre fondo blanco u otras combinaciones de color con bajo contraste.  En el punto III de la guía, puede consultar cómo verificar el contraste de textos con la herramienta \"Inspeccionar\". Si desea revisar en mayor detalle puede hacerlo con herramientas como Colour Contrast Analyser o Contrast Checker de WebAIM.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-3-q11",
            "codigo": "3.2.1",
            "indicador": "Componentes accesibles",
            "descripcion": "Información de estados, roles e información de valor en todos los componentes de interfaz de usuario para permitir la compatibilidad con la tecnología asistiva utilizada para acceder al contenido. Por ejemplo: personas que utilizan lectores de pantalla, ampliadores de pantalla y software de reconocimiento de voz.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se utilizan etiquetas semánticas HTML adecuadas para estructurar el contenido, facilitando la interpretación por parte de tecnologías de asistencia?  Por ejemplo: se utiliza código HTML semántico, es decir se usan etiquetas como \"header\", \"main\" y \"footer\".  Esto se puede verificar revisando el código fuente del sitio web o con la herramienta \"inspeccionar elemento\", utilizando la opción \"Selector de objetos\" (\"Ctrl\" + \"Shift\" + \"C\") se debe posicionar en los distintos elementos y revisar los ejemplos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-3-q12",
            "codigo": "3.2.2",
            "indicador": "Llamado a la acción claro",
            "descripcion": "Presencia de enlaces y botones con llamados a la acción claros y descriptivos.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los enlaces del sitio web tienen llamados a la acción claros?  Por ejemplo: para acceder a un formulario de registro el botón dice claramente la palabra \"Registrarse\" en vez de decir \"Haga clic aquí\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-3-q13",
            "codigo": "3.2.3",
            "indicador": "Predecible al recibir entrada",
            "descripcion": "Preocupación por que los cambios y acciones que ocurran en el sitio web sean predecibles, esto se hace al explicar la acción antes de que se ejecute.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los cambios y acciones que ocurren en el sitio son predecibles o están explicados antes de que ocurra una acción?  Por ejemplo: los enlaces externos cuentan con un icono identificador que indica a las personas usuarias que al hacer clic en el enlace este lo sacará de la navegación actual.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-3-q14",
            "codigo": "3.2.4",
            "indicador": "Autocompletado en formularios",
            "descripcion": "Opciones de autocompletado o que la información esté disponible para que la persona usuaria pueda utilizarla cuando ya ingresó algunos datos que se le piden en un formulario. Salvo en casos donde la información es para asegurar la seguridad del contenido o información.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Cuando se solicita completar la misma información en otra sección de un formulario, ¿se ofrecen opciones como autocompletar o la posibilidad de seleccionar texto previamente ingresado en el navegador? Por ejemplo: al ingresar una dirección, el navegador permite autocompletar con información proporcionada anteriormente.  La opción \"No aplica\" debe seleccionarse sólo cuando el formulario no requiere ingresar la misma información en más de una sección.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-3-q15",
            "codigo": "3.2.5",
            "indicador": "Foco visible",
            "descripcion": "Preocupación de que al navegar el sitio web por teclado se muestre de forma visible el indicador del foco donde está ubicado el usuario.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Al navegar por el teclado con la tecla \"Tab\", ¿el foco es claramente visible? Por ejemplo: el foco es marcado con una línea de color que contraste con el diseño del sitio.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-3-q16",
            "codigo": "3.3.1",
            "indicador": "Documentos accesibles",
            "descripcion": "Preocupación de ofrecer documentos descargables accesibles para todos los usuarios.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Los documentos descargables que están presentes en el sitio web son accesibles? Para comprobar accesibilidad en un documento Word debe dirigirse a la pestaña Revisar de Word, luego seleccionar la opción Comprobar accesibilidad, aparecerá una ventana que señalará que no presenta problemas de accesibilidad.  Para comprobar accesibilidad en un documento PDF puede utilizar la herramienta MAUVE++ seleccionando la opción para validar PDF, luego agregar el PDF con su URL o subiendo el archivo y revisar que los resultados entreguen 0 fallas.  La opción \"No aplica\" es solo para el caso en que no se encuentren documentos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-4",
        "orden": 4,
        "nombre": "Interoperabilidad",
        "descripcion": "Capacidad de los sistemas para intercambiar datos de manera segura y automática. Esto se traduce en una mejor experiencia usuaria gracias a que no es necesario completar datos de forma manual cuando se pueden obtener de una base de datos compartida.",
        "sourceSheet": "4Int",
        "preguntas": [
          {
            "id": "svc-4-q1",
            "codigo": "4.1.1",
            "indicador": "ClaveÚnica",
            "descripcion": "Iniciativa que busca proveer a los ciudadanos de una Identidad Electrónica Única (RUN y contraseña) para la realización de trámites en línea del Estado.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El servicio digital utiliza el sistema de ClaveÚnica para el ingreso de las personas usuarias si el sitio requiere algún tipo de autenticación?  La opción \"No aplica\" es solo para el caso en que el sitio web necesite otro sistema de autenticación para acceder a sus servicios.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-4-q2",
            "codigo": "4.2.1",
            "indicador": "Precarga y reutilización de datos",
            "descripcion": "Intercambio y obtención de información desde bases de datos centralizadas, que permita a las personas usuarias evitar tener que completar datos previamente entregados.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El servicio digital carga la máxima cantidad de información posible –albergada en las bases de datos de Estado– respecto de una persona usuaria, de manera tal que no tenga que volver a llenarla?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-4-q3",
            "codigo": "4.2.1.2",
            "indicador": "Precarga y reutilización de datos",
            "descripcion": "Intercambio y obtención de información desde bases de datos centralizadas, que permita a las personas usuarias evitar tener que completar datos previamente entregados.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Cuando la persona usuaria ingresa con ClaveÚnica, ¿los campos de los formularios aparecen prellenados con la información asociada a ella?  La opción \"No aplica\" es solo para el caso en que no se use ClaveÚnica para acceder.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-4-q4",
            "codigo": "4.2.1.3",
            "indicador": "Precarga y reutilización de datos",
            "descripcion": "Intercambio y obtención de información desde bases de datos centralizadas, que permita a las personas usuarias evitar tener que completar datos previamente entregados.",
            "prioridad": "Esperable",
            "preguntaChequeo": "En caso de tener información precargada, ¿los datos se pueden modificar?  La opción \"No aplica\" es solo para el caso en que no se use ClaveÚnica para acceder.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-5",
        "orden": 5,
        "nombre": "Contenido y lenguaje claro",
        "descripcion": "Información representada por texto, imagen, video, sonido u otros tipos de medios. Debe utilizarse un lenguaje comprensible para la ciudadanía, además de cumplir con criterios de relevancia, actualización, precisión, fiabilidad y legibilidad, entre otros.",
        "sourceSheet": "5Con",
        "preguntas": [
          {
            "id": "svc-5-q1",
            "codigo": "5.1.1",
            "indicador": "Fiabilidad",
            "descripcion": "Entrega de información veraz, segura y rigurosa.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Es fácil reconocer la fuente o autoría de la información publicada? Por ejemplo: se identifica claramente el nombre de la institución que publica en el encabezado o pie de cada página.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q2",
            "codigo": "5.1.2",
            "indicador": "Completitud",
            "descripcion": "Entrega de información con la cobertura y datos necesarios para divulgar un tema con exhaustividad.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los contenidos representan de manera fiel lo enunciado en su título?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q3",
            "codigo": "5.1.2.2",
            "indicador": "Completitud",
            "descripcion": "Entrega de información con la cobertura y datos necesarios para divulgar un tema con exhaustividad.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se cumple con la recomendación de no incluir páginas sin contenido, contenido incompleto o \"En construcción\"?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q4",
            "codigo": "5.1.2.3",
            "indicador": "Completitud",
            "descripcion": "Entrega de información con la cobertura y datos necesarios para divulgar un tema con exhaustividad.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El texto destaca los datos clave de la información? Por ejemplo: se presenta un resumen con las respuestas a las preguntas qué, cómo, dónde, cuándo y para quién o existe un recuadro con fechas importantes.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q5",
            "codigo": "5.1.2.4",
            "indicador": "Completitud",
            "descripcion": "Entrega de información con la cobertura y datos necesarios para divulgar un tema con exhaustividad.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En el caso de textos referidos a trámites, ¿se brinda información suficiente para que las personas usuarias puedan realizarlos autónomamente?  La opción \"No aplica\" es solo para el caso en que no se encuentren textos referidos a trámites.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q6",
            "codigo": "5.1.3",
            "indicador": "Lenguaje plano",
            "descripcion": "Estilo de redacción simple y centrado en las personas usuarias, alejado de jergas legales y tecnicismos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El lenguaje utilizado está orientado a que una persona pueda entender el contenido, aun aquellas con mayor dificultad de comprensión lectora? Por ejemplo: se recomienda revisar con alguna herramienta en línea como Legible (de los cinco indicadores evaluados que se visualizan en la tabla Legibilidad del texto, al menos tres deben indicar dificultad Normal para aprobar este indicador).",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q7",
            "codigo": "5.1.3.2",
            "indicador": "Lenguaje plano",
            "descripcion": "Estilo de redacción simple y centrado en las personas usuarias, alejado de jergas legales y tecnicismos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El tono y voz son amables, respetuosos y cercanos con las personas usuarias?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q8",
            "codigo": "5.1.3.3",
            "indicador": "Lenguaje plano",
            "descripcion": "Estilo de redacción simple y centrado en las personas usuarias, alejado de jergas legales y tecnicismos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿La redacción prescinde de la jerga técnica o legal? Por ejemplo: en el texto se evitan conceptos legales, administrativos o informáticos que tengan un equivalente más fácil de entender por parte de las personas usuarias (\"resolución\" en vez de \"acto administrativo\" o \"memoria temporal\" en vez de \"caché\") o se evitan referencias números de leyes y normativas sin una clara identificación del tema (\"Ley de acoso laboral\" en vez de \"Ley 21643\").",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q9",
            "codigo": "5.1.3.4",
            "indicador": "Lenguaje plano",
            "descripcion": "Estilo de redacción simple y centrado en las personas usuarias, alejado de jergas legales y tecnicismos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se evitan abreviaturas, extranjerismos, eufemismos, modismos o términos muy especializados o rebuscados en al menos un 50% de los contenidos revisados?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q10",
            "codigo": "5.1.3.5",
            "indicador": "Lenguaje plano",
            "descripcion": "Estilo de redacción simple y centrado en las personas usuarias, alejado de jergas legales y tecnicismos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se define cada sigla y acrónimo y se emplean solo si es necesario?  La opción \"No aplica\" es solo para el caso en que no se encuentren siglas o acrónimos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q11",
            "codigo": "5.1.3.6",
            "indicador": "Lenguaje plano",
            "descripcion": "Estilo de redacción simple y centrado en las personas usuarias, alejado de jergas legales y tecnicismos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los contenidos están escritos en tono positivo indicando lo que se puede hacer y evitando enfocar los mensajes desde el \"no se puede\"?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q12",
            "codigo": "5.1.4",
            "indicador": "Actualización",
            "descripcion": "Renovación permanente de los contenidos, con el objeto de garantizar la entrega de información eficaz y oportuna a la ciudadanía.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los contenidos están actualizados y muestran información vigente al año en curso? Por ejemplo: se indica expresamente su fecha de publicación o última fecha de actualización.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q13",
            "codigo": "5.1.5",
            "indicador": "Redacción y ortografía",
            "descripcion": "Correcta escritura de los textos publicados.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Son correctas la ortografía –literal, acentual y puntual– y la gramática en los contenidos?  Por ejemplo: para revisar este aspecto, se puede usar un corrector ortográfico y gramatical para revisar los contenidos de las páginas de muestra. Tanto Microsoft Word como Documentos de Google lo ofrecen; o bien utilizar herramientas en línea como LanguageTool.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q14",
            "codigo": "5.1.5.2",
            "indicador": "Redacción y ortografía",
            "descripcion": "Correcta escritura de los textos publicados.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los signos de puntuación empleados facilitan la lectura del documento?  Por ejemplo: se privilegia el uso de puntos seguidos, frente a las frases intercaladas entre comas.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q15",
            "codigo": "5.1.6",
            "indicador": "Propiedad intelectual",
            "descripcion": "Posesión de los derechos de uso de contenidos publicados en un sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio cuenta con información de permisos de uso de sus contenidos en algún lugar del sitio?  Por ejemplo: se señala en las condiciones de uso del sitio que ningún contenido se puede utilizar sin autorización (copyright o todos los derechos de autor reservados) o se indica un modelo de licencias flexibles de propiedad intelectual, como Creative Commons, que autorizan la reutilización bajo ciertas condiciones.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q16",
            "codigo": "5.1.7",
            "indicador": "Privacidad y datos personales",
            "descripcion": "Protección de los datos e información personal de las personas usuarias de un sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Existe información sobre cómo las personas usuarias pueden ejercer los derechos sobre acceso, rectificación, cancelación o eliminación, oposición (ARCO) y bloqueo de datos personales, incluidos en la Ley sobre Protección de la Vida Privada?  Por ejemplo: se menciona el procedimiento en la Política de Privacidad o se enlaza el formulario de solicitud en la sección de Transparencia.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q17",
            "codigo": "5.2.1",
            "indicador": "Claridad",
            "descripcion": "Redacción orientada hacia una facilidad de comprensión de los contenidos.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los contenidos están estructurados como respuestas a las preguntas frecuentes que podrían hacerse las personas usuarias?  La opción \"No aplica\" es solo para el caso en que el sitio web no tenga contenidos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q18",
            "codigo": "5.2.1.2",
            "indicador": "Claridad",
            "descripcion": "Redacción orientada hacia una facilidad de comprensión de los contenidos.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las palabras, frases y conceptos utilizados tienen un lenguaje claro para las personas usuarias?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q19",
            "codigo": "5.2.1.3",
            "indicador": "Claridad",
            "descripcion": "Redacción orientada hacia una facilidad de comprensión de los contenidos.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Predomina el tiempo presente simple y la voz activa de los verbos?  Por ejemplo: \"Este documento acredita cómo obtener el beneficio\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q20",
            "codigo": "5.2.1.4",
            "indicador": "Claridad",
            "descripcion": "Redacción orientada hacia una facilidad de comprensión de los contenidos.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las oraciones están ordenadas según la forma sujeto-verbo-predicado?  Por ejemplo: \"Las y los interesados deben dirigirse a la oficina comunal\" (correcto); \"A la oficina comunal deben dirigirse las y los interesados\" (incorrecto).",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q21",
            "codigo": "5.2.1.5",
            "indicador": "Claridad",
            "descripcion": "Redacción orientada hacia una facilidad de comprensión de los contenidos.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Cuando se listan requisitos en contenidos referidos a servicios a la ciudadanía, ¿se usa modo infinitivo? (Modo que engloba las formas no personales del verbo, puede terminar en  –ar, –er o –ir). Por ejemplo: \"Ser mayor de 18 años\", \"Enviar su solicitud a través de correo electrónico\".  La opción \"No aplica\" es solo para el caso en que no se listen requisitos referidos a servicios a la ciudadanía.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q22",
            "codigo": "5.2.2",
            "indicador": "Concisión",
            "descripcion": "Capacidad de los sitios de presentar sus contenidos de manera breve.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los textos, tanto de la página de inicio como del desarrollo del trámite, son breves y utilizan frases cortas en su redacción?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q23",
            "codigo": "5.2.2.2",
            "indicador": "Concisión",
            "descripcion": "Capacidad de los sitios de presentar sus contenidos de manera breve.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Al revisar el sitio web en versión de escritorio, ¿los párrafos son cortos, con menos de 8 líneas?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q24",
            "codigo": "5.2.2.3",
            "indicador": "Concisión",
            "descripcion": "Capacidad de los sitios de presentar sus contenidos de manera breve.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se explica una idea por párrafo?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q25",
            "codigo": "5.2.2.4",
            "indicador": "Concisión",
            "descripcion": "Capacidad de los sitios de presentar sus contenidos de manera breve.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las oraciones son simples y directas, evitando el exceso de palabras?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q26",
            "codigo": "5.2.2.5",
            "indicador": "Concisión",
            "descripcion": "Capacidad de los sitios de presentar sus contenidos de manera breve.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Si existe un texto extenso –de cuatro o más párrafos–, ¿existe un resumen al inicio?  La opción \"No aplica\" es solo para el caso en que no se encuentren textos de cuatro o más párrafos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q27",
            "codigo": "5.2.3",
            "indicador": "Legibilidad",
            "descripcion": "Facilidad de lectura de los contenidos publicados.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Hay espacio entre los párrafos?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q28",
            "codigo": "5.2.3.2",
            "indicador": "Legibilidad",
            "descripcion": "Facilidad de lectura de los contenidos publicados.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El texto está alineado a la izquierda?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q29",
            "codigo": "5.2.3.3",
            "indicador": "Legibilidad",
            "descripcion": "Facilidad de lectura de los contenidos publicados.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se utilizan listas numeradas, viñetas o tablas para presentar la información más ordenada?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q30",
            "codigo": "5.2.4",
            "indicador": "Escritura para la web",
            "descripcion": "Adaptación de la redacción optimizada para su lectoría en una interfaz digital.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los contenidos del sitio aplican el modelo de \"pirámide invertida\" que los estructura desde lo más a lo menos importante?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q31",
            "codigo": "5.2.4.2",
            "indicador": "Escritura para la web",
            "descripcion": "Adaptación de la redacción optimizada para su lectoría en una interfaz digital.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las páginas están bien organizadas, con títulos claros y subtítulos que facilitan la lectura y la búsqueda de información?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q32",
            "codigo": "5.2.4.3",
            "indicador": "Escritura para la web",
            "descripcion": "Adaptación de la redacción optimizada para su lectoría en una interfaz digital.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Es fácil escanear visualmente los contenidos?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q33",
            "codigo": "5.2.4.4",
            "indicador": "Escritura para la web",
            "descripcion": "Adaptación de la redacción optimizada para su lectoría en una interfaz digital.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se utilizan negritas para destacar palabras claves de cada párrafo?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q34",
            "codigo": "5.2.4.5",
            "indicador": "Escritura para la web",
            "descripcion": "Adaptación de la redacción optimizada para su lectoría en una interfaz digital.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se evitan las frases escritas únicamente en mayúsculas?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q35",
            "codigo": "5.2.4.6",
            "indicador": "Escritura para la web",
            "descripcion": "Adaptación de la redacción optimizada para su lectoría en una interfaz digital.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los textos de los enlaces (rótulos) son descriptivos del contenido o sitio al que dirigen o directos en el llamado a la acción que impulsan, evitando términos ambiguos como \"Haga clic aquí\" o \"Más\"?  Por ejemplo: \"Consultar fecha de pago\", \"Solicitar certificado\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q36",
            "codigo": "5.2.4.7",
            "indicador": "Escritura para la web",
            "descripcion": "Adaptación de la redacción optimizada para su lectoría en una interfaz digital.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Cuando se enlazan documentos, ¿se especifican el título, formato y peso? Por ejemplo: \"Informe sobre ciberseguridad en Chile 2024 (pdf, 345 KB)\".  Selecciona \"Sí\" solo si se cumplen los tres elementos (título, formato y peso) en todos los documentos enlazados. La opción \"No aplica\" corresponde únicamente si no hay documentos en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q37",
            "codigo": "5.2.4.8",
            "indicador": "Escritura para la web",
            "descripcion": "Adaptación de la redacción optimizada para su lectoría en una interfaz digital.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se entrega una breve descripción de los documentos enlazados para mejorar su capacidad de búsqueda, usabilidad y accesibilidad?  La opción \"No aplica\" es solo para el caso en que no se encuentren documentos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q38",
            "codigo": "5.3.1",
            "indicador": "Objetividad",
            "descripcion": "Imparcialidad y neutralidad de la información publicada.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Los contenidos tienen información objetiva y presentan una redacción neutra, sin reflejar la opinión de quién los escribió?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-5-q39",
            "codigo": "5.3.2",
            "indicador": "Archivo",
            "descripcion": "Conservación del contenido histórico del sitio web cuando se realice un reemplazo del mismo.",
            "prioridad": "Deseable",
            "preguntaChequeo": "Si el sitio presenta versiones anteriores de contenidos, ¿están rotuladas claramente como contenidos o documentos de archivo no vigentes? Por ejemplo: títulos del tipo \"Requisitos de postulación 2015\", donde señala claramente el año al que se refiera la información.  La opción \"No aplica\" está disponible si el sitio no presenta versiones anteriores de contenidos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-6",
        "orden": 6,
        "nombre": "Responsividad móvil",
        "descripcion": "Cualidad que posee un sitio web para adaptarse a todos los dispositivos y tamaños de pantalla, sin perder calidad ni información esencial.",
        "sourceSheet": "6Res",
        "preguntas": [
          {
            "id": "svc-6-q1",
            "codigo": "6.1.1",
            "indicador": "Visualización móvil",
            "descripcion": "Diseño responsivo, formulado y desarrollado para ser accesible desde cualquier dispositivo móvil en primer lugar.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio web se puede visualizar correctamente desde un teléfono celular o una tablet?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-6-q2",
            "codigo": "6.1.1.2",
            "indicador": "Visualización móvil",
            "descripcion": "Diseño responsivo, formulado y desarrollado para ser accesible desde cualquier dispositivo móvil en primer lugar.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Las funcionalidades del sitio se pueden usar correctamente desde un teléfono celular o una tablet?  Por ejemplo: si en un formulario se pide cargar documentos, esta funcionalidad no se ve interrumpida si se hace desde un teléfono celular o una tablet.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-6-q3",
            "codigo": "6.1.1.3",
            "indicador": "Visualización móvil",
            "descripcion": "Diseño responsivo, formulado y desarrollado para ser accesible desde cualquier dispositivo móvil en primer lugar.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El menú de navegación del sitio web se convierte en un menú desplegable o se reorganiza para mejorar la navegación en los diversos dispositivos móviles?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-6-q4",
            "codigo": "6.1.1.4",
            "indicador": "Visualización móvil",
            "descripcion": "Diseño responsivo, formulado y desarrollado para ser accesible desde cualquier dispositivo móvil en primer lugar.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Solo existe una versión del sitio y se evita la creación de una versión especial para dispositivos móviles paralela o una aplicación para descarga, que muestre otra información?  Por ejemplo: al navegar el sitio, este no debiera pedir descargar alguna aplicación para acceder a un contenido o servicio.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-6-q5",
            "codigo": "6.1.1.5",
            "indicador": "Visualización móvil",
            "descripcion": "Diseño responsivo, formulado y desarrollado para ser accesible desde cualquier dispositivo móvil en primer lugar.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los textos se ven enteros, sin cortarse o sobreponerse a otros elementos?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-6-q6",
            "codigo": "6.1.1.6",
            "indicador": "Visualización móvil",
            "descripcion": "Diseño responsivo, formulado y desarrollado para ser accesible desde cualquier dispositivo móvil en primer lugar.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En móvil, ¿se prioriza la presentación del logo institucional y menú por sobre otros enlaces? Por ejemplo: la primera franja que se ve en móvil es la imagen institucional y el menú de navegación.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-6-q7",
            "codigo": "6.2.1",
            "indicador": "Adaptabilidad",
            "descripcion": "Adecuación automática de un sitio web con sus elementos visuales y contenidos para que sean visualizados correctamente en cualquier dispositivo.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El sitio web se adapta y visualiza correctamente en diferentes tamaños de pantalla?  Por ejemplo: se visualiza de forma correcta tanto en un monitor de un notebook pequeño como en un monitor grande de un PC.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-6-q8",
            "codigo": "6.2.1.2",
            "indicador": "Adaptabilidad",
            "descripcion": "Adecuación automática de un sitio web con sus elementos visuales y contenidos para que sean visualizados correctamente en cualquier dispositivo.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los números telefónicos están enlazados o cuentan con el formato correcto para marcar directamente desde un celular?  La opción \"No aplica\" es solo para el caso en que no exista canal telefónico.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-7",
        "orden": 7,
        "nombre": "Seguridad",
        "descripcion": "Apego a estándares de desarrollo, compatibilidad y directrices para cautelar la seguridad de los sistemas. Esto protege la disponibilidad, integridad y confidencialidad de la información y datos institucionales y personales.",
        "sourceSheet": "7Seg",
        "preguntas": [
          {
            "id": "svc-7-q1",
            "codigo": "7.1.1",
            "indicador": "Certificado SSL válido y vigente",
            "descripcion": "Utilización de mecanismos SSL/TLS o los protocolos de seguridad que los reemplacen. El certificado debe ser válido y estar vigente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio web utiliza el protocolo seguro HTTPS en su URL? Para verificarlo, haga doble clic en la barra de direcciones y asegúrese de que la URL comience con \"https://\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-7-q2",
            "codigo": "7.1.1.2",
            "indicador": "Certificado SSL válido y vigente",
            "descripcion": "Utilización de mecanismos SSL/TLS o los protocolos de seguridad que los reemplacen. El certificado debe ser válido y estar vigente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El certificado SSL/TLS es válido?  Por ejemplo: al revisar en Google Chrome a través del ícono \"Consulta la información del sitio\", que se encuentra inmediatamente a la izquierda de la URL en la barra de direcciones del navegador, verificar que existe el texto \"La conexión es segura\".  En el punto VII de la guía, puede verificar la conexión segura y si el certificado es válido.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-7-q3",
            "codigo": "7.1.2",
            "indicador": "Redirección de HTTP a HTTPS",
            "descripcion": "Redirección de las solicitudes con protocolo HTTP a su equivalente con protocolo HTTPS.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Al acceder con el protocolo HTTP a las páginas del sitio se realiza la redirección a la versión con protocolo HTTPS?  Por ejemplo: al ingresar en la URL \"http://sitioejemplo.gob.cl/algo\" esta redirige a \"https://sitioejemplo.gob.cl/algo\". Se puede probar quitando la letra \"s\" del protocolo de la url  de la página que está probando.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-7-q4",
            "codigo": "7.1.3",
            "indicador": "Bloqueo de enmascarado",
            "descripcion": "Inhibición de la posibilidad de enmascarar el sitio dentro de un sitio externo a través de un \"frame\".",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio web tiene configurada la cabecera \"X-Frame-Options\" con los valores \"DENY\" o \"SAMEORIGIN\"?  Para la verificación se deben revisar las cabeceras de la página, usando la herramienta https://securityheaders.com: 1. Primero se debe ingresar la URL de una página diferente de la portada   2. Luego, dentro de los resultados, en el subtítulo \"Encabezados sin formato\" (Raw Headers en inglés), se encontrará la lista de cabeceras de la página, en la que se debe buscar la cabecera \"X-Frame-Options\" y verificar que tenga los valores \"DENY\" o \"SAMEORIGIN\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-7-q5",
            "codigo": "7.2.1",
            "indicador": "Política de privacidad",
            "descripcion": "Presencia de una política que describa cómo se recopila, utiliza, gestiona, protege y divulga la información de las personas usuarias que utilizan el sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se presenta un enlace a la política de privacidad en el sitio web?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-7-q6",
            "codigo": "7.2.1.2",
            "indicador": "Política de privacidad",
            "descripcion": "Presencia de una política que describa cómo se recopila, utiliza, gestiona, protege y divulga la información de las personas usuarias que utilizan el sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Este enlace está en el pie de cada página del sitio web?  La opción \"No aplica\" es solo para el caso en que no exista un enlace a la política de privacidad.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-7-q7",
            "codigo": "7.3.1",
            "indicador": "Prevención de ataques MIME",
            "descripcion": "Uso de la cabecera \"X-Content-Type-Options\" con el valor \"nosniff\" para así indicar a los navegadores que deben respetar el tipo MIME (Multipurpose Internet Mail Extensions) especificado por el servidor.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El sitio tiene configurada la cabecera \"X-Content-Type-Options\" con el valor \"nosniff\"?  Para la verificación se deben revisar las cabeceras de la página, usando la herramienta https://securityheaders.com: 1. Primero se debe ingresar la URL de una página diferente de la portada  2. Luego, dentro de los resultados, en el subtítulo \"Encabezados sin formato\" (Raw Headers en inglés) se encontrará la lista de cabeceras de la página, en la que se debe buscar la cabecera \"X-Content-Type-Options\" y verificar que tenga el valor \"nosniff\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-7-q8",
            "codigo": "7.3.2",
            "indicador": "Límite de referencias Referrer-Policy",
            "descripcion": "Utilización de la cabecera \"Referrer-Policy\" con el valor \"strict-origin\" para controlar la cantidad de información de referencia que se envía al realizar solicitudes desde una página.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El sitio web tiene configurada la cabecera \"Referrer-Policy\" con el valor \"strict-origin\"?   Para la verificación se deben revisar las cabeceras de la página, usando la herramienta https://securityheaders.com: 1. Primero se debe ingresar la URL de una página diferente de la portada 2. Luego, dentro de los resultados, en el subtítulo \"Encabezados sin formato\" (Raw Headers en inglés), se encontrará la lista de cabeceras de la página, en la que se debe buscar la cabecera \"Referrer-Policy\" y verificar que tenga el valor \"strict-origin\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-7-q9",
            "codigo": "7.3.3",
            "indicador": "Aviso de uso de cookies",
            "descripcion": "Información clara que informe al usuario sobre la política de uso de cookies.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Proporciona el sitio web información clara y comprensible sobre el tipo de cookies que utiliza, sus finalidades y las opciones de control disponibles para el usuario? Por ejemplo: en la Política de Privacidad del sitio web se indica que las cookies no almacenan datos personales ni el sitio web las comparte con terceros.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-8",
        "orden": 8,
        "nombre": "Resolutividad",
        "descripcion": "Capacidad exhibida por la institución pública de dar respuesta y atender las necesidades de las personas usuaria de forma completa.",
        "sourceSheet": "8Res",
        "preguntas": [
          {
            "id": "svc-8-q1",
            "codigo": "8.1.1",
            "indicador": "Acceso destacado a trámites",
            "descripcion": "Presentación de un acceso destacado al trámite en los contenidos que hablen del trámite en cuestión.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Las páginas que informan sobre un determinado trámite cuentan con un enlace al mismo? Por ejemplo: se informa sobre un nuevo bono y el contenido tiene un enlace para solicitarlo.  La opción \"No aplica\" es solo para el caso en que el sitio web no tenga contenidos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-8-q2",
            "codigo": "8.1.2",
            "indicador": "Funcionamiento de los sistemas",
            "descripcion": "Correcto rendimiento de los sistemas que sustentan los servicios y trámites digitales, los que deben funcionar desde el inicio hasta final de una sesión sin la presencia de errores técnicos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Durante la revisión, ¿los trámites y servicios en línea ofrecidos en el sitio web pueden realizarse de manera completa sin errores técnicos?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-8-q3",
            "codigo": "8.2.1",
            "indicador": "Oportunidad",
            "descripcion": "Capacidad exhibida por la institución pública de atender y dar respuesta a un trámite o servicio solicitado por una persona usuaria, en un plazo razonable.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿La institución ofrece tiempos de respuesta estimados para cada tipo de trámite o servicio en su sitio web?  Por ejemplo: al solicitar un pasaporte en el sitio web del Registro Civil, se informa que el trámite se completará en 10 días hábiles.  La opción \"No aplica\" es solo para el caso en que el sitio web no tenga contenidos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-8-q4",
            "codigo": "8.2.1.2",
            "indicador": "Oportunidad",
            "descripcion": "Capacidad exhibida por la institución pública de atender y dar respuesta a un trámite o servicio solicitado por una persona usuaria, en un plazo razonable.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Durante la realización del trámite no fue necesario acudir a otras fuentes para encontrar información sobre cómo completarlo.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-8-q5",
            "codigo": "8.2.1.3",
            "indicador": "Oportunidad",
            "descripcion": "Capacidad exhibida por la institución pública de atender y dar respuesta a un trámite o servicio solicitado por una persona usuaria, en un plazo razonable.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Existen canales de comunicación claros para que las personas usuarias puedan hacer seguimiento al estado de sus solicitudes?  Por ejemplo: verificar el estado de su solicitud de renovación de cédula de identidad a través del sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-8-q6",
            "codigo": "8.2.2",
            "indicador": "Eficiencia",
            "descripcion": "Reducción de tiempo empleado por las personas usuarias en acceder a la información y servicios, frente a la experiencia presencial.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El servicio digital estimula que las personas usuarias puedan realizar los trámites en línea? Por ejemplo: se le entrega a la persona usuaria toda la información y asistencia necesaria para que realice el trámite en línea de inicio a fin sin necesidad de que deba recurrir a buscar ayuda o documentación de forma presencial.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-8-q7",
            "codigo": "8.2.2.2",
            "indicador": "Eficiencia",
            "descripcion": "Reducción de tiempo empleado por las personas usuarias en acceder a la información y servicios, frente a la experiencia presencial.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se comunica que el o los trámites en línea se resuelven en menor tiempo que de manera presencial?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-8-q8",
            "codigo": "8.2.3",
            "indicador": "Estado de progreso del trámite",
            "descripcion": "Indicación a la persona usuaria del estado de avance de su trámite.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El trámite muestra en qué etapa de progreso está o se ha quedado la persona usuaria?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-8-q9",
            "codigo": "8.2.4",
            "indicador": "Resolutividad",
            "descripcion": "Capacidad de realizar el trámite en su totalidad sin necesidad de acudir a una oficina para terminarlo.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se puede resolver todo el trámite en línea sin necesidad de ir presencialmente a una oficina?  La opción \"No aplica\" es solo para el caso en que el servicio digital por su naturaleza legal requiera obligatoriamente la presencialidad para continuar o finalizar el trámite.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-8-q10",
            "codigo": "8.2.5",
            "indicador": "Cantidad de pasos limitada",
            "descripcion": "Proporción de pasos acotados para realizar un trámite.",
            "prioridad": "Esperable",
            "preguntaChequeo": "El trámite, ¿se resuelve en una cantidad de pasos acotada?, es decir, no pide más datos de los realmente necesarios para el trámite.  Por ejemplo: el formulario para la obtención de un beneficio no pregunta por el género de la persona usuaria si no es realmente relevante para que el beneficio sea otorgado.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-8-q11",
            "codigo": "8.2.6",
            "indicador": "Calidad de la respuesta entregada",
            "descripcion": "Medida en que las respuestas o interacciones proporcionadas por un servicio digital son precisas, relevantes, completas y útiles para la persona usuaria.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Al finalizar un trámite, ¿se entrega a la persona usuaria información clara y sin tecnicismos?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-9",
        "orden": 9,
        "nombre": "Facilidad de acceso e independencia tecnológica",
        "descripcion": "Condición del servicio digital que permite a las personas usuarias acceder a la información expedita y oportuna, independiente de la calidad o tipo de dispositivo a través del que se está conectando.",
        "sourceSheet": "9Fac",
        "preguntas": [
          {
            "id": "svc-9-q1",
            "codigo": "9.1.1",
            "indicador": "Prioridad de la web",
            "descripcion": "Preferencia de la web como canal para el desarrollo y entrega de servicios digitales, aunque también esté disponible a través de la aplicación móvil.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se puede realizar el trámite exitosamente o acceder al servicio completamente desde el sitio web a pesar de existir también una aplicación móvil para realizarlo?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-9-q2",
            "codigo": "9.1.2",
            "indicador": "Velocidad de acceso",
            "descripcion": "Rapidez con la que las personas usuarias pueden cargar y acceder al contenido de un servicio digital. Es un factor crítico en la experiencia del usuario y puede influir significativamente en la retención de visitantes, la tasa de rebote y el posicionamiento en los motores de búsqueda.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El servicio digital puede ser navegado con la velocidad más baja de Internet móvil?  Por ejemplo: la página web carga en menos de 3 segundos con una conexión 3G de datos móviles.  1. Se puede realizar una prueba de rendimiento en Webpagetest, copiando la URL de la portada del servicio digital y pegando en el sector que dice: \"Enter a website URL...\".  2. Más abajo seleccionar la opción: \"MOBILE 3G Mumbai, IN\". 3. Luego iniciar el test presionando el botón \"Start Test\".  4. Hay que esperar unos minutos y aparecerá el resultado. En el sector de \"Speed Index\" se verán los segundos aproximados que deben ser menores o iguales a 3.  La opción \"No aplica\" es solo para el caso en que no sea posible utilizar la herramienta externa.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-9-q3",
            "codigo": "9.1.3",
            "indicador": "Compatibilidad retroactiva",
            "descripcion": "Solidez del contenido para ser interpretado de manera confiable por una amplia variedad de navegadores. Es decir, que las personas usuarias sigan accediendo al contenido a medida que avanzan y evolucionan las tecnologías.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El servicio digital sigue siendo comprensible y funcional en navegadores más antiguos o menos comunes, asegurando su compatibilidad retroactiva?  Se puede emular la visualización de una página web en un navegador más antiguo en Google Chrome: 1. Primero presionar F12 para abrir el inspector  2. Luego, ir a los tres puntos verticales ubicados en el sector superior derecho y seleccionar \"Más herramientas\" (en inglés \"More tools\")  3. Seleccionar la opción que dice \"Condiciones de red\" (en inglés \"Network conditions\") 4. Después, buscar en lado izquierdo la opción \"Usuario-agente\" (en inglés \"User agent\"), y desmarcar la casilla de \"Usar la configuración predeterminada del navegador\" (en inglés \"Use browser default\") 5. Aparecerá un listado con varios navegadores, seleccione por ejemplo: Internet Explorer 11 y actualice el navegador con F5 para comprobar que la página visitada no presenta grandes cambios 6. Puede realizar la prueba seleccionando otro navegador antiguo de la lista y actualizando con F5 7. Al terminar las pruebas, recuerde dejar los valores editados como estaban antes",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-9-q4",
            "codigo": "9.1.4",
            "indicador": "Compatibilidad de navegadores",
            "descripcion": "Garantía de acceso y correcta visualización de los sitios web en los diversos navegadores de Internet.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El servicio digital carga correctamente en los navegadores web más utilizados?  Por ejemplo: Google Chrome, Mozilla Firefox, Safari y Microsoft Edge.  Se puede emular la visualización de una página web en otros navegadores con Google Chrome: 1. Primero presionar F12 para abrir el inspector 2. Luego, ir a los tres puntos verticales ubicados en el sector superior derecho y seleccionar \"Más herramientas\" (en inglés \"More tools\") 3. Seleccionar la opción que dice \"Condiciones de red\" (en inglés \"Network conditions\") 4. Después, buscar en lado izquierdo la opción \"Usuario-agente\" (en inglés \"User agent\"), y desmarcar la casilla de \"Usar la configuración predeterminada del navegador\" (en inglés \"Use browser default\") 5. Aparecerá un listado con varios navegadores, seleccione por ejemplo: Microsoft Edge (Chromium - Windows o Mac) y actualice el navegador con F5 para comprobar que la página visitada no presenta grandes cambios 6. Puede realizar la prueba cuantas veces estime conveniente, seleccionando otro navegador de la lista y actualizando con F5 7. Al terminar las pruebas, recuerde dejar los valores editados como estaban antes",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-9-q5",
            "codigo": "9.1.5",
            "indicador": "Accesibilidad técnica",
            "descripcion": "Capacidad de un sitio web para ser accesible y funcional en una amplia gama de dispositivos y tecnologías, sin importar las limitaciones técnicas o las preferencias de la persona usuaria. Esto implica que el sitio web debe ser diseñado y desarrollado de manera que pueda ser utilizado fácilmente por cualquier persona, independientemente del dispositivo que estén utilizando.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El servicio digital está diseñado para cargar correctamente en cualquier dispositivo?  Por ejemplo: que el sitio web sea correctamente visualizado en un celular de baja gama.  Se puede emular la visualización de una página web en otros dispositivos con Google Chrome: 1. Primero presionar F12 para abrir el inspector, luego ir al icono, que es un celular dentro de una pantalla de notebook, llamado \"Activar o desactivar la barra de herramientas del dispositivo\" (en inglés\"Toggle device toolbar\"), ubicado en el sector superior izquierdo y seleccionar.  2. De forma predeterminada, la barra de herramientas, ubicada en el centro superior de la pantalla, se abre con la opción \"Dimensiones\" (en inglés \"Dimensions\"), establecida en \"Respuesta inmediata\" o \"Reactivo\" (en inglés \"Responsive\"),  3. aquí puedes elegir entre diversos dispositivos, por ejemplo: el iPhone SE y examinar cómo se comporta la página web, luego puedes elegir otro dispositivo y así sucesivamente.  4. Por otro lado, para emular una conexión más baja de Internet en el sector derecho está la opción \"No hay limitación\" (en inglés \"No throttling\"), aquí puede seleccionar \"Dispositivos móviles de gama baja\" (en inglés \"Low-end mobile\"), 5. luego actualizar la página con F5 y observar cómo se va cargando la estructura del sitio.  6. Con esto puede evaluar si la página web está diseñada para ser visualizada en los diversos dispositivos.  7. Al terminar las pruebas, recuerde dejar los valores editados como estaban antes, seleccionando el icono de \"Activar o desactivar la barra de herramientas del dispositivo\" (en inglés \"Toggle device toolbar\").",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-9-q6",
            "codigo": "9.1.6",
            "indicador": "Independencia de conectividad",
            "descripcion": "Grado de equidad con que el sitio web brinda acceso a la ciudadanía, independientemente de sus diversos dispositivos y la continuidad, la calidad de señal y la rapidez de su conexión a Internet.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio muestra la misma información en todos los tipos de conexión?  Por ejemplo: el sitio web, independiente de que se utilicen datos móviles, wi-fi o por cable LAN (ethernet), carga todas las imágenes.  Para emular la visualización de una página web con una conexión lenta en Google Chrome: 1. Primero presionar F12 para abrir el inspector 2. Luego, ir a los tres puntos verticales ubicados en el sector superior derecho y seleccionar \"Más herramientas\" (en inglés \"More tools\") 3. Seleccionar la opción que dice \"Condiciones de red\" (en inglés \"Network conditions\") 4. Después, seleccionar \"Limitación de red\" (en inglés \"Network throttling\"), y elegir la opción de \"3G\"  o \"slow 3G\".  5. Finalmente, actualizar el navegador con F5 y para comprobar esto, la página visitada no debería presentar cambios.  7. Al terminar las pruebas, recuerde dejar los valores editados como estaban antes.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-9-q7",
            "codigo": "9.1.6.2",
            "indicador": "Independencia de conectividad",
            "descripcion": "Grado de equidad con que el sitio web brinda acceso a la ciudadanía, independientemente de sus diversos dispositivos y la continuidad, la calidad de señal y la rapidez de su conexión a Internet.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El servicio digital muestra la misma información desde diferentes ubicaciones geográficas?  Para emular la visualización de una página web desde diferentes ubicaciones geográficas: 1. En Webpagetest, copiando la URL de la portada del servicio digital y pegando en el sector que dice: \"Enter a website URL...\".  2. Más abajo seleccionar la opción: \"DESKTOP Cable Toronto, CA\" y luego iniciar el test presionando el botón \"Start Test\".  3. Abrir otra pestaña y hacer lo mismo, pero seleccionando la opción: \"DESKTOP Cable Frankfurt, DE\".  4. Hay que esperar unos minutos y aparecerá el resultado. 5. Una vez finalizadas las pruebas, observe las capturas de pantalla en el sector derecho de cada pestaña. No debería haber cambios significativos en la visualización entre ambas ubicaciones.   La opción \"No aplica\" es solo para el caso en que no sea posible utilizar la herramienta externa.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-9-q8",
            "codigo": "9.1.7",
            "indicador": "Uso del dominio principal",
            "descripcion": "Utilización de directorios o subdominios hijos del dominio principal para los servicios digitales.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿La URL del servicio digital utiliza un directorio interno o subdominio hijo del dominio principal del sitio? Por ejemplo: para un trámite de una institución cuyo dominio principal es https://sitioejemplo.cl, se espera que se utilice una URL como https://sitioejemplo.cl/nombre-tramite/ o https://nombre-tramite.sitioejemplo.cl",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-10",
        "orden": 10,
        "nombre": "Arquitectura de información",
        "descripcion": "Práctica de decidir cómo organizar y rotular de forma lógica el contenido y la navegación de un producto digital para que sea comprensible y que las personas usuarias localicen fácilmente lo que buscan.",
        "sourceSheet": "10Arq",
        "preguntas": [
          {
            "id": "svc-10-q1",
            "codigo": "10.1.1",
            "indicador": "Similitud de criterio de organización",
            "descripcion": "Organización de los contenidos según el criterio más adecuado para el contexto, nivel cultural, hábitos informacionales y estructuras mentales de su público objetivo.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los pasos del trámite o secciones del formulario están clasificados con criterios que les sean intuitivos y familiares para las personas usuarias?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-10-q2",
            "codigo": "10.1.2",
            "indicador": "Jerarquización de la portada",
            "descripcion": "Consonancia entre la distribución de las secciones de la página de inicio y las necesidades de las personas usuarias.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿La portada o el primer paso del trámite anticipa los documentos que serán requeridos en las etapas siguientes?  La opción \"No aplica\" es solo para el caso en que no se requieren documentos o no haya etapas siguientes.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-10-q3",
            "codigo": "10.1.2.2",
            "indicador": "Jerarquización de la portada",
            "descripcion": "Consonancia entre la distribución de las secciones de la página de inicio y las necesidades de las personas usuarias.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Existe información institucional en el pie de página?  Por ejemplo: aparece el nombre completo de la institución, su dependencia o dirección física.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-10-q4",
            "codigo": "10.1.3",
            "indicador": "Consistencia del rotulado",
            "descripcion": "Coherencia en el uso y estilo de las etiquetas en todo el sitio.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se mantienen constantes los rótulos o etiquetas?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-10-q5",
            "codigo": "10.1.4",
            "indicador": "Claridad del rotulado",
            "descripcion": "Facilidad de comprensión de las etiquetas del menú.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los rótulos o etiquetas describen de forma clara y directa el contenido requerido de cada campo del formulario?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-10-q6",
            "codigo": "10.1.5",
            "indicador": "Notoriedad de la navegación",
            "descripcion": "Presencia y visibilidad del menú de navegación, sus opciones, localización del usuario, estado del sistema y etapa o paso del trámite.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se advierten claramente las opciones del menú de navegación con las etapas del proceso?  La opción \"No aplica\" es solo para el caso en que el proceso tenga una sola etapa.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-10-q7",
            "codigo": "10.1.5.2",
            "indicador": "Notoriedad de la navegación",
            "descripcion": "Presencia y visibilidad del menú de navegación, sus opciones, localización del usuario, estado del sistema y etapa o paso del trámite.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El menú está en una posición destacada?  La opción \"No aplica\" es solo para el caso en que el proceso tenga una sola etapa.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-10-q8",
            "codigo": "10.1.5.3",
            "indicador": "Notoriedad de la navegación",
            "descripcion": "Presencia y visibilidad del menú de navegación, sus opciones, localización del usuario, estado del sistema y etapa o paso del trámite.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se identifican fácilmente los elementos cliqueables en el menú?  La opción \"No aplica\" es solo para el caso en que el proceso tenga una sola etapa.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-10-q9",
            "codigo": "10.1.5.4",
            "indicador": "Notoriedad de la navegación",
            "descripcion": "Presencia y visibilidad del menú de navegación, sus opciones, localización del usuario, estado del sistema y etapa o paso del trámite.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Existen elementos que contextualizan a la persona usuaria respecto de su ubicación, nivel de avance en la navegación y estado del sistema?  La opción \"No aplica\" es solo para el caso en que el proceso tenga una sola etapa.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-10-q10",
            "codigo": "10.2.1",
            "indicador": "Marca o nombre de fantasía",
            "descripcion": "Identificación formal de la institución que usa un nombre de fantasía.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Si la institución cuenta con una marca o nombre de fantasía, ¿su significado se explica con un texto complementario? Por ejemplo: \"ChileAtiende: trámites y beneficios del Estado\", \"Salud Responde: asistencia telefónica y vía redes sociales\", \"IFE Laboral Apoya: incentivo al empleo formal\".  La opción \"No aplica\" es solo para el caso en que la institución no cuente con una marca o nombre de fantasía.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-10-q11",
            "codigo": "10.2.2",
            "indicador": "Precisión del rotulado",
            "descripcion": "Capacidad de los rótulos para expresar su significado de manera directa y concisa.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se evita el uso de siglas, eufemismos o términos rebuscados en los rótulos o etiquetas?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-10-q12",
            "codigo": "10.2.2.2",
            "indicador": "Precisión del rotulado",
            "descripcion": "Capacidad de los rótulos para expresar su significado de manera directa y concisa.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se evita el exceso de palabras?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-10-q13",
            "codigo": "10.2.2.3",
            "indicador": "Precisión del rotulado",
            "descripcion": "Capacidad de los rótulos para expresar su significado de manera directa y concisa.",
            "prioridad": "Esperable",
            "preguntaChequeo": "No se presentan rótulos o etiquetas del tipo \"Haga clic aquí\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-10-q14",
            "codigo": "10.2.3",
            "indicador": "Concisión del rotulado",
            "descripcion": "Brevedad y economía de palabras en las etiquetas, de cara al tiempo de lectura en Internet y al espacio reducido en dispositivos móviles.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los textos se ajustan correctamente a la pantalla en dispositivos móviles? Para verificar la visualización en diferentes dispositivos, presiona F12 para abrir las herramientas del navegador y ajusta la vista seleccionando diferentes tamaños de pantalla en la opción \"Dimensiones\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-10-q15",
            "codigo": "10.2.4",
            "indicador": "Pertinencia de la navegación",
            "descripcion": "Adecuada ubicación de los enlaces, de manera tal que aparezcan en contexto y brinden acceso oportuno a la información.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los botones de llamado a la acción están situados en una posición que estimule su uso?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-10-q16",
            "codigo": "10.2.4.2",
            "indicador": "Pertinencia de la navegación",
            "descripcion": "Adecuada ubicación de los enlaces, de manera tal que aparezcan en contexto y brinden acceso oportuno a la información.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Existen enlaces contextuales al contenido de la página que se está visitando?  Por ejemplo: en la descripción de un trámite, aparecen accesos del tipo \"Otros trámites relacionados\" o \"Ver también\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-11",
        "orden": 11,
        "nombre": "Atención a la ciudadanía",
        "descripcion": "Recursos y documentación que ayuden a la persona usuaria a responder sus consultas y necesidades que surjan al utilizar un producto digital. Es recomendable contar con múltiples canales de comunicación para satisfacer las necesidades de soporte.",
        "sourceSheet": "11Ate",
        "preguntas": [
          {
            "id": "svc-11-q1",
            "codigo": "11.1.1",
            "indicador": "Contacto",
            "descripcion": "Oferta de múltiples vías de comunicación de las personas usuarias con los puntos de contacto del organismo.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se presentan vías de comunicación entre las personas usuarias y el organismo?  Por ejemplo: formulario de contacto, correo electrónico y/o teléfono.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-11-q2",
            "codigo": "11.2.1",
            "indicador": "Recursos de apoyo y documentación",
            "descripcion": "Presencia de recursos y documentación de ayuda a las personas usuarias a responder sus consultas y necesidades de información que les surjan al utilizar un sitio web o servicios digitales.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Ofrece un área de preguntas frecuentes con datos de ayuda a las personas usuarias?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-11-q3",
            "codigo": "11.2.1.2",
            "indicador": "Recursos de apoyo y documentación",
            "descripcion": "Presencia de recursos y documentación de ayuda a las personas usuarias a responder sus consultas y necesidades de información que les surjan al utilizar un sitio web o servicios digitales.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se presentan documentos o recursos de información para que la persona usuaria entienda los trámites y procesos?  Por ejemplo: guías, tutoriales, videos explicativos y/o manuales descargables.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-11-q4",
            "codigo": "11.2.2",
            "indicador": "Sección de ayuda",
            "descripcion": "Existencia de una sección especialmente dedicada a la ayuda para las personas usuarias, que reúna tanto los canales de atención como la documentación.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Existe una sección o mesa de ayuda en el sitio web?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-11-q5",
            "codigo": "11.2.2.2",
            "indicador": "Sección de ayuda",
            "descripcion": "Existencia de una sección especialmente dedicada a la ayuda para las personas usuarias, que reúna tanto los canales de atención como la documentación.",
            "prioridad": "Esperable",
            "preguntaChequeo": "El enlace a la sección de ayuda, ¿está ubicado en una zona visible y destacada?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-11-q6",
            "codigo": "11.2.3",
            "indicador": "Asistencia en línea",
            "descripcion": "Canales de atención al ciudadano de manera sincrónica para satisfacer las necesidades de soporte que tengan las personas usuarias.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se presentan canales de atención interactivos o en tiempo real para las personas usuarias?  Por ejemplo: chat, teléfono de atención, videollamada y/o asistentes virtuales.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-11-q7",
            "codigo": "11.2.3.2",
            "indicador": "Asistencia en línea",
            "descripcion": "Canales de atención al ciudadano de manera sincrónica para satisfacer las necesidades de soporte que tengan las personas usuarias.",
            "prioridad": "Esperable",
            "preguntaChequeo": "En el caso de los chatbots generados con inteligencia artificial, ¿se le advierte al usuario claramente que es una herramienta automatizada y no una persona real?  La opción \"No aplica\" es solo para el caso en que no existan chatbots.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-11-q8",
            "codigo": "11.2.3.3",
            "indicador": "Asistencia en línea",
            "descripcion": "Canales de atención al ciudadano de manera sincrónica para satisfacer las necesidades de soporte que tengan las personas usuarias.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se evita denominar estos chatbots con nombres propios para minimizar el riesgo de confusión para las personas usuarias? Por ejemplo: SofIA o ClaudIA.  La opción \"No aplica\" es solo para el caso en que no existan chatbots.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-11-q9",
            "codigo": "11.3.1",
            "indicador": "Ayuda contextual",
            "descripcion": "Opción de ayuda en contexto para la realización de tareas e interacciones complejas.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Es fácil contactarse con alguien para ser asistido ante una consulta?  Por ejemplo: hacer una pregunta de prueba en un chat, contactar a través de un teléfono o correo electrónico.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-12",
        "orden": 12,
        "nombre": "Diseño e imagen institucional",
        "descripcion": "Elementos visuales y gráficos para comunicar mensajes de forma efectiva que permitan proyectar la imagen institucional dentro del contexto de nuestro país, velando por un mensaje y contenido claro. Es importante mantener conectores visuales que vinculen e identifiquen a las instituciones, como tipografías, colores y algunas definiciones gráficas.",
        "sourceSheet": "12Dis",
        "preguntas": [
          {
            "id": "svc-12-q1",
            "codigo": "12.1.1",
            "indicador": "Imagen gubernamental",
            "descripcion": "Conectores visuales que vinculan e identifican a los organismos de administración del Estado, como tipografías, colores y definiciones gráficas.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se visualiza claramente que el sitio web se identifica como un Órgano de la Administración del Estado?  Por ejemplo: se visualiza el logo del Gobierno, sus elementos icónicos, algún texto de referencia o enlace en la cabecera o el pie del sitio.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q2",
            "codigo": "12.1.1.2",
            "indicador": "Imagen gubernamental",
            "descripcion": "Conectores visuales que vinculan e identifican a los organismos de administración del Estado, como tipografías, colores y definiciones gráficas.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En el caso de los organismos gubernamentales, ¿los elementos gráficos del sitio web son elaborados a partir de las directrices del Gobierno?  Por ejemplo: se usan y aplican los fundamentos de diseño del UI Kit del Gobierno Digital como \"colores, tipografías, espaciado\" y elementos gráficos como \"botones, alertas, etc..\"  La opción \"No aplica\" es solo para el caso en que el sitio web examinado no pertenezca al gobierno central.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q3",
            "codigo": "12.1.1.3",
            "indicador": "Imagen gubernamental",
            "descripcion": "Conectores visuales que vinculan e identifican a los organismos de administración del Estado, como tipografías, colores y definiciones gráficas.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El texto del logo de la institución es totalmente legible?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q4",
            "codigo": "12.1.2",
            "indicador": "Enlaces perceptibles",
            "descripcion": "Condición de los enlaces del sitio web, que se deben diferenciar claramente de un párrafo de texto o títulos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los textos que son enlaces se diferencian claramente de otro texto que no sea enlace?  Por ejemplo: se utilizan enlaces subrayados o en un color notoriamente contrastante.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q5",
            "codigo": "12.1.3",
            "indicador": "Integridad estética",
            "descripcion": "Coherencia de los elementos visuales, los que deben disponerse de la misma manera y permitir mantener una apariencia consistente en todo el sitio, que brinde una experiencia visual unificada para las personas usuarias.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio web mantiene un diseño gráfico consistente en todas sus secciones, utilizando colores, tipografías y estilos gráficos homogéneos para ofrecer una experiencia visual coherente? Por ejemplo: los contenidos interiores mantienen una apariencia similar a la portada, utilizando elementos gráficos, paletas de colores y tipografía consistentes.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q6",
            "codigo": "12.2.1",
            "indicador": "Tipografía",
            "descripcion": "Uso de tipografías que faciliten la legibilidad, con un tamaño adaptable a las diferentes condiciones de las personas usuarias y dispositivos. Adopción de las familias tipográficas establecidas en el sistema de diseño gubernamental.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se utilizan familias tipográficas optimizadas para la lectura en pantalla, especialmente las de palo seco (sin conectores visuales entre las letras) o sin \"serif\"?  Por ejemplo: Roboto, Verdana, Arial. En la guía se puede consultar cómo se identifica el tipo de fuente.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q7",
            "codigo": "12.2.1.2",
            "indicador": "Tipografía",
            "descripcion": "Uso de tipografías que faciliten la legibilidad, con un tamaño adaptable a las diferentes condiciones de las personas usuarias y dispositivos. Adopción de las familias tipográficas establecidas en el sistema de diseño gubernamental.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Su tamaño permite una adecuada legibilidad?   Por ejemplo: igual o superior a 16 puntos, con un espaciado de al menos 1,5 veces del tamaño de la fuente y alto contraste, evitando letras grises sobre fondos blancos.   En la guía se puede consultar cómo se identifica el tamaño de fuente.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q8",
            "codigo": "12.2.1.3",
            "indicador": "Tipografía",
            "descripcion": "Uso de tipografías que faciliten la legibilidad, con un tamaño adaptable a las diferentes condiciones de las personas usuarias y dispositivos. Adopción de las familias tipográficas establecidas en el sistema de diseño gubernamental.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Su tamaño se adapta automáticamente al dispositivo?  Esto se puede verificar revisando la estructura jerárquica adecuada entre los tamaños de los títulos, subtítulos y párrafos de texto y que el interlineado de cada párrafo facilite la lectura. También puede reducir el ancho de su navegador y evaluar si se adapta al nuevo espacio.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q9",
            "codigo": "12.2.1.4",
            "indicador": "Tipografía",
            "descripcion": "Uso de tipografías que faciliten la legibilidad, con un tamaño adaptable a las diferentes condiciones de las personas usuarias y dispositivos. Adopción de las familias tipográficas establecidas en el sistema de diseño gubernamental.",
            "prioridad": "Esperable",
            "preguntaChequeo": "En el caso de organismos del Gobierno central, ¿el sitio web utiliza las tipografías recomendadas en el sistema de diseño gubernamental?  Por ejemplo: las tipografías las tipografías  Roboto Sans y Roboto Slab (solo para títulos)  La opción \"No aplica\" es solo para el caso en que el sitio web examinado no pertenezca al gobierno central.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q10",
            "codigo": "12.2.2",
            "indicador": "Uso del color",
            "descripcion": "Definición de una paleta de colores formulada para afianzar la imagen de la institución, sobre la base de criterios de una adecuada combinación, atractivo visual, coherencia y contraste. Estos deberán estar sujetos a las normas de accesibilidad y, si corresponde, adoptar los lineamientos del sistema de diseño gubernamental.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los colores apoyan el reconocimiento visual de la institución?  Por ejemplo: los colores azul y rojo oficiales del Gobierno.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q11",
            "codigo": "12.2.2.2",
            "indicador": "Uso del color",
            "descripcion": "Definición de una paleta de colores formulada para afianzar la imagen de la institución, sobre la base de criterios de una adecuada combinación, atractivo visual, coherencia y contraste. Estos deberán estar sujetos a las normas de accesibilidad y, si corresponde, adoptar los lineamientos del sistema de diseño gubernamental.",
            "prioridad": "Esperable",
            "preguntaChequeo": "En el caso de organismos del Gobierno central, ¿se consideran los colores de la paleta del UI Kit del Gobierno Digital?  La opción \"No aplica\" es solo para el caso en que el sitio web examinado no pertenezca al gobierno central.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q12",
            "codigo": "12.2.3",
            "indicador": "Uso de imágenes",
            "descripcion": "Selección cuidadosa de imágenes, fotografías y visualizaciones para afianzar la identidad institucional y complementar la información entregada. Tratamiento y optimización técnica para el soporte web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se incorpora el logo o elemento icónico de la institución en el encabezado?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q13",
            "codigo": "12.2.3.2",
            "indicador": "Uso de imágenes",
            "descripcion": "Selección cuidadosa de imágenes, fotografías y visualizaciones para afianzar la identidad institucional y complementar la información entregada. Tratamiento y optimización técnica para el soporte web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las imágenes tienen la calidad adecuada para su correcta visualización y se evita que se vean pixeladas a primera vista?  La opción \"No aplica\" es solo para el caso en que no existan imágenes en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q14",
            "codigo": "12.2.3.3",
            "indicador": "Uso de imágenes",
            "descripcion": "Selección cuidadosa de imágenes, fotografías y visualizaciones para afianzar la identidad institucional y complementar la información entregada. Tratamiento y optimización técnica para el soporte web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las imágenes tienen títulos, descripciones o pies de fotos apropiados? El pie de foto es una explicación breve que se sitúa bajo cada ilustración, foto o figura en una publicación. Aunque sea el pie lo que le da nombre, también puede ubicarse en otros lugares, como en la parte superior.  La opción \"No aplica\" es solo para el caso en que no existan imágenes en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q15",
            "codigo": "12.2.3.4",
            "indicador": "Uso de imágenes",
            "descripcion": "Selección cuidadosa de imágenes, fotografías y visualizaciones para afianzar la identidad institucional y complementar la información entregada. Tratamiento y optimización técnica para el soporte web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las fotografías están bien recortadas y tienen un encuadre adecuado?  Por ejemplo: los banners tienen un contenedor rectangular. Para minimizar o evitar recortes, hay que asegurarse de que la forma de la imagen coincida con la forma del contenedor y no quede recortada la información visual importante.  La opción \"No aplica\" es solo para el caso en que no existan imágenes en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q16",
            "codigo": "12.2.3.5",
            "indicador": "Uso de imágenes",
            "descripcion": "Selección cuidadosa de imágenes, fotografías y visualizaciones para afianzar la identidad institucional y complementar la información entregada. Tratamiento y optimización técnica para el soporte web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se privilegia el uso de fotografías en el que aparezcan personas usuarias, lugares y situaciones reales en vez de usar imágenes de bancos de fotos comerciales?  La opción \"No aplica\" es solo para el caso en que no existan imágenes en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q17",
            "codigo": "12.2.3.6",
            "indicador": "Uso de imágenes",
            "descripcion": "Selección cuidadosa de imágenes, fotografías y visualizaciones para afianzar la identidad institucional y complementar la información entregada. Tratamiento y optimización técnica para el soporte web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los elementos que contienen texto informativo, como botones de acción e infografías, se disponen como texto seleccionable en vez de presentarlos dentro de una imagen?  La opción \"No aplica\" corresponde solo cuando no hay botones de acción, infografías u otros elementos con texto informativo en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q18",
            "codigo": "12.2.4",
            "indicador": "Distribución de los elementos",
            "descripcion": "Jerarquía de los elementos que se deben comprender a primera vista, sin ruido visual ni sobrecarga informativa.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los elementos de la interfaz se pueden identificar claramente a primera vista?  Por ejemplo: se puede encontrar fácilmente donde está el menú principal, el pie de página o el buscador.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q19",
            "codigo": "12.2.4.2",
            "indicador": "Distribución de los elementos",
            "descripcion": "Jerarquía de los elementos que se deben comprender a primera vista, sin ruido visual ni sobrecarga informativa.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Es una interfaz limpia, sin ruido visual?  Por ejemplo: los elementos visuales como figuras o colores, no están demasiado saturados y se evitan las ventanas emergentes que no aportan a la navegación del sitio.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q20",
            "codigo": "12.2.5",
            "indicador": "Atractivo visual",
            "descripcion": "Apariencia atractiva y armoniosa que logra captar la atención del usuario.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿La presentación visual del sitio es armoniosa, limpia y minimalista, orientada a la funcionalidad?  Por ejemplo: mantener sólo unos pocos componentes necesarios en la interfaz del sitio y dejar espacios en blanco o aires, para permitir centrar la atención en el contenido principal con más facilidad.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q21",
            "codigo": "12.2.6",
            "indicador": "Expresividad de iconos",
            "descripcion": "Capacidad de los iconos para ser claros y precisos en lo que quieren expresar, sin llevar a una interpretación o confusión.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿La iconografía es clara y ayuda a llamar a la acción de manera más rápida?  Por ejemplo: el icono de \"flecha a la derecha\" significa \"siguiente\" o \"continuar\".  La opción \"No aplica\" corresponde solo cuando no iconografía.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-12-q22",
            "codigo": "12.3.1",
            "indicador": "Familiaridad",
            "descripcion": "Cercanía y capacidad de reconocimiento a simple vista del diseño, sin necesidad de un aprendizaje previo.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El diseño y la distribución de los elementos siguen un orden familiar para las personas usuarias, similar a otros sitios web? Por ejemplo: el menú principal está en el encabezado, el logo en la esquina superior izquierda y el buscador a la derecha.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-13",
        "orden": 13,
        "nombre": "Tecnología",
        "descripcion": "Conjunto de herramientas y estándares para la creación y funcionamiento de productos digitales. Se deben priorizar las herramientas y tecnologías que faciliten crear un servicio de alta calidad de forma rentable y que permitan minimizar el costo de cambiar en el futuro.",
        "sourceSheet": "13Tec",
        "preguntas": [
          {
            "id": "svc-13-q1",
            "codigo": "13.1.1",
            "indicador": "Disponibilidad y estabilidad",
            "descripcion": "Capacidad de un sitio web para estar accesible y operativo en todo momento. Además de mantener su funcionamiento sin caídas, errores o interrupciones, proporcionando una experiencia consistente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El servicio o sitio web estuvo disponible durante todo el período de evaluación?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-13-q2",
            "codigo": "13.1.1.2",
            "indicador": "Disponibilidad y estabilidad",
            "descripcion": "Capacidad de un sitio web para estar accesible y operativo en todo momento. Además de mantener su funcionamiento sin caídas, errores o interrupciones, proporcionando una experiencia consistente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los multicanales digitales para realizar consultas generales o solicitar información personalizada estuvieron disponibles durante la evaluación?  Por ejemplo: asistentes virtuales o chats.  La opción \"No aplica\" es solo para el caso en que no existan multicanales digitales para realizar consultas o solicitar información.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-13-q3",
            "codigo": "13.1.1.3",
            "indicador": "Disponibilidad y estabilidad",
            "descripcion": "Capacidad de un sitio web para estar accesible y operativo en todo momento. Además de mantener su funcionamiento sin caídas, errores o interrupciones, proporcionando una experiencia consistente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Las funcionalidades del sitio web están disponibles las 24 horas los 7 días de la semana? Por ejemplo: un formulario de contacto se puede completar y enviar cualquier día a cualquier hora.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-13-q4",
            "codigo": "13.1.2",
            "indicador": "Codificación de caracteres",
            "descripcion": "Definición del set de caracteres del sitio web, la que debe ser preferentemente \"UTF-8\".",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se explicita el juego de caracteres UTF-8 a través de un metadato en el código fuente de la página?  Por ejemplo: es posible encontrar la referencia \"<meta charset=\"utf-8\">\" en las primeras líneas del código fuente.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-13-q5",
            "codigo": "13.1.3",
            "indicador": "Hojas de estilo en cascada (CSS)",
            "descripcion": "Utilización de código CSS (hojas de estilo en cascada), en la diagramación y diseño de las páginas, separando el contenido, la estructura y la presentación.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio web se presenta completamente sin diseño al deshabilitar las hojas de estilo?  Una opción para la verificación: 1. Ingresar al inspector de código de Google Chrome (opción \"Inspeccionar\" con el botón secundario del mouse), específicamente a la pestaña \"Consola\" (\"Console\" si se está en inglés) 2. En el inspector se verá la consola en la que se pueden escribir comandos, se podrá reconocer una fila que comienza con el signo \">\", en el caso de haber más de una fila esta se verá en la parte inferior del listado, en esta fila se debe pegar el comando \"document.querySelectorAll('link[rel=stylesheet]').forEach(link => link.disabled = true)\" (sin las comillas) y luego ejecutar con el botón Enter. 3. Es probable que al copiar y pegar el comando en la consola, el navegador haga una advertencia que comienza así: \"No pegues en la consola de Herramientas para desarrolladores código que no entiendas….\". Para habilitar pegar comandos en la consola antes deberás escribir el texto : \"permitir el pegado\" (\"allow pasting\" si está en inglés) y a continuación presionar Enter para permitir pegar comandos.  Se recomienda luego de la comprobación cerrar el inspector y actualizar la página (F5 o Control + F5 para Mac) para seguir con la revisión.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-13-q6",
            "codigo": "13.1.4",
            "indicador": "Especificación de idioma",
            "descripcion": "Uso del atributo HTML \"lang\" para especificar el idioma del sitio o los textos del mismo.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Está presente en la etiqueta \"html\" del código fuente el atributo \"lang\"?  Por ejemplo: al buscar esta referencia lang=\"es\" en el código fuente, deberá aparecer de una manera equivalente a esta: <html lang=\"es\">.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-13-q7",
            "codigo": "13.1.5",
            "indicador": "Funcionamiento de los enlaces",
            "descripcion": "Ausencia de enlaces rotos, enlaces redirigidos y enlaces inválidos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Todos los enlaces del sitio web funcionan correctamente?  Por ejemplo: al utilizar la herramienta de revisión de la W3C Check Link Validator sobre todo el sitio, en la tabla de resultados no aparece ningún resultado con código de error 404 .",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-13-q8",
            "codigo": "13.1.6",
            "indicador": "Soporte a URLs con y sin prefijo www",
            "descripcion": "Habilitación de acceso utilizando o no el prefijo \"www\". Los sitios web deberán visualizarse independiente de la utilización de este prefijo, redirigiendo a la URL final del sitio.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿La URL del sitio funciona sin y con \"www\" como prefijo de dominio?  Por ejemplo: verificar que las URLs \"https://www.sitioejemplo.gob.cl\" y \"https://sitioejemplo.gob.cl\" llevan al mismo contenido del sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-13-q9",
            "codigo": "13.1.7",
            "indicador": "Dominio \".gob.cl\"",
            "descripcion": "Utilización del dominio \".gob.cl\", registrándolo previamente ante la División de Informática del Ministerio del Interior y Seguridad Pública, y en el sitio web Administración de Dominios gob.cl (nic.gob.cl)",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Si se trata un sitio web del gobierno central, ¿utiliza el dominio .gob.cl?   La opción \"No aplica\" es solo para el caso en que el sitio web examinado no pertenezca al gobierno central.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-13-q10",
            "codigo": "13.1.7.2",
            "indicador": "Dominio \".gob.cl\"",
            "descripcion": "Utilización del dominio \".gob.cl\", registrándolo previamente ante la División de Informática del Ministerio del Interior y Seguridad Pública, y en el sitio web Administración de Dominios gob.cl (nic.gob.cl)",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Si existen otros dominios desde los que se pueda acceder al servicio, ¿estos redirigen al sitio web que utiliza el dominio .gob.cl?  La opción \"No aplica\" es solo para el caso en que no exista o no se tenga conocimiento de otras urls alternativas a la oficial .gob.cl.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-13-q11",
            "codigo": "13.2.1",
            "indicador": "Lenguaje HTML5",
            "descripcion": "Utilización del lenguaje de marcado HTML5 para la creación y estructuración de contenido en las páginas web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se encuentra la identificación de HTML5 en la primera línea del código fuente?  Por ejemplo: la referencia \"<!DOCTYPE html>\" está presente en la primera línea del código fuente HTML.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-13-q12",
            "codigo": "13.2.2",
            "indicador": "Compatibilidad HTML",
            "descripcion": "Validación del código HTML en el validador de la W3C, el código debe cumplir o cumplir con reparos.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El código HTML del sitio web no presenta errores al comprobarlo en el validador de la W3C?  La opción \"No aplica\" es solo para el caso en que no sea posible utilizar la herramienta externa.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-13-q13",
            "codigo": "13.2.3",
            "indicador": "Compatibilidad CSS",
            "descripcion": "Validación de la escritura y compatibilidad del código CSS, el que no debe tener errores.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El código CSS del sitio web no presenta errores al comprobarlo en el validador de la W3C?  La opción \"No aplica\" es solo para el caso en que no sea posible utilizar la herramienta externa.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-13-q14",
            "codigo": "13.2.4",
            "indicador": "Optimización y rendimiento",
            "descripcion": "Capacidad de un sitio web para manejar el aumento en el tráfico y la demanda sin comprometer la estabilidad o la rapidez de respuesta.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿La portada del sitio cumple con un resultado sobre 60 en el parámetro rendimiento de Google PageSpeed Insights para la opción escritorio (ordenador)?   Para verificar se debe entrar en el sitio web PageSpeed Insights, ingresar la URL de la portada del sitio y accionar el botón \"Analizar\". Luego del análisis se podrá ver el valor que otorga para el indicador \"Rendimiento\", bajo el subtítulo \"Diagnostica problemas de rendimiento\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-13-q15",
            "codigo": "13.2.4.2",
            "indicador": "Optimización y rendimiento",
            "descripcion": "Capacidad de un sitio web para manejar el aumento en el tráfico y la demanda sin comprometer la estabilidad o la rapidez de respuesta.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿La portada del sitio cumple con un resultado sobre 60 en el parámetro rendimiento de Google PageSpeed Insights para la opción celulares (móvil)?   Para verificar se debe entrar en el sitio web PageSpeed Insights, ingresar la URL de la portada del sitio y accionar el botón \"Analizar\". Luego del análisis se podrá ver el valor que otorga para el indicador \"Rendimiento\", bajo el subtítulo \"Diagnostica problemas de rendimiento\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-13-q16",
            "codigo": "13.2.5",
            "indicador": "Versión de impresión",
            "descripcion": "Adaptación del contenido para una óptima impresión. La finalización de un trámite, sea ésta una página de entrega de información o un certificado, debe poder imprimirse sin dificultad o alteraciones significativas de su apariencia.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los contenidos tienen una versión de impresión optimizada? Por ejemplo, al revisar con Ctrl + P, el contenido se muestra sin elementos que dificulten su lectura. La navegación del sitio no aparece, pero sí el nombre o logo institucional.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-13-q17",
            "codigo": "13.2.5.2",
            "indicador": "Versión de impresión",
            "descripcion": "Adaptación del contenido para una óptima impresión. La finalización de un trámite, sea ésta una página de entrega de información o un certificado, debe poder imprimirse sin dificultad o alteraciones significativas de su apariencia.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los certificados o documentos descargables están optimizados para imprimirse sin dificultades o alteraciones significativas de su apariencia?  La opción \"No aplica\" es solo para el caso en que no se encuentren documentos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-13-q18",
            "codigo": "13.3.1",
            "indicador": "Javascript sin errores",
            "descripcion": "Ausencia de errores de JavaScript en la consola del navegador.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El código JavaScript está libre de errores en la consola del navegador?  Por ejemplo: no figuran errores en la consola del navegador.   Para la verificación se ingresa en la pestaña \"Consola\" (en inglés \"Console\") del inspector de código de Google Chrome (opción \"Inspeccionar\" en el botón secundario o derecho del mouse). En la consola pueden aparecer filas horizontales que muestren advertencias y errores, en el caso de aparecer filas resaltadas con un fondo de color rojo pálido significa que existen errores.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-14",
        "orden": 14,
        "nombre": "Interacción y retroalimentación",
        "descripcion": "Comunicación entre la persona usuaria y las distintas interfaces que provee la plataforma que se le entrega al usuario para acceder a una información o servicio. Retroalimentación hace referencia a que la interfaz de usuario proporcione información sobre el estado del proceso en tiempo real, para poder tomar decisiones de forma efectiva.",
        "sourceSheet": "14Int",
        "preguntas": [
          {
            "id": "svc-14-q1",
            "codigo": "14.1.1",
            "indicador": "Visibilidad del estado del sistema",
            "descripcion": "Información oportuna para las personas usuarias sobre lo que está sucediendo durante cada interacción y sus efectos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Existe un cambio visible cuando se selecciona o apunta a algún elemento clickable?  Por ejemplo: cuando el puntero del cursor pasa por sobre una zona clickable, este cambia de flecha a mano y además se percibe un cambio de diseño, como subrayado y/o color.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-14-q2",
            "codigo": "14.1.1.2",
            "indicador": "Visibilidad del estado del sistema",
            "descripcion": "Información oportuna para las personas usuarias sobre lo que está sucediendo durante cada interacción y sus efectos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se informa adecuadamente a las personas usuarias de la efectividad de sus interacciones?  Por ejemplo: en un formulario, al seleccionar una opción de una lista, esta queda marcada de manera visible; al escoger una fecha para una cita en un calendario, esta queda registrada de manera visible en la pantalla; al pulsar \"Reproducir\" (Play) en un reproductor de video, la imagen muestra el icono de un triángulo por algunos milisegundos sobre la imagen.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-14-q3",
            "codigo": "14.1.1.3",
            "indicador": "Visibilidad del estado del sistema",
            "descripcion": "Información oportuna para las personas usuarias sobre lo que está sucediendo durante cada interacción y sus efectos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Al completarse un formulario se indica que los datos registrados fueron enviados exitosamente?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-14-q4",
            "codigo": "14.1.1.4",
            "indicador": "Visibilidad del estado del sistema",
            "descripcion": "Información oportuna para las personas usuarias sobre lo que está sucediendo durante cada interacción y sus efectos.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sistema le informa visualmente a la persona usuaria si algo sucede o sucederá tras sus interacciones?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-14-q5",
            "codigo": "14.1.2",
            "indicador": "Indicador de proceso",
            "descripcion": "Existencia de elementos de la interfaz de usuario que indica en qué parte del servicio digital se encuentra la persona usuaria.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se informa a la persona usuaria claramente el área o página que está visitando?  Por ejemplo: se marca el elemento del menú que se está visitando o existe un menú de miga de pan (breadcrumb).",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-14-q6",
            "codigo": "14.1.2.2",
            "indicador": "Indicador de proceso",
            "descripcion": "Existencia de elementos de la interfaz de usuario que indica en qué parte del servicio digital se encuentra la persona usuaria.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Existen señales claras para indicar en qué etapa de un proceso se encuentra la persona usuaria? Por ejemplo: las barras de carga o progreso, o el número del paso en un trámite.  La opción \"No aplica\" es solo cuando el proceso no implique múltiples etapas.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-14-q7",
            "codigo": "14.2.1",
            "indicador": "Botones y pasarelas de pago",
            "descripcion": "Plataforma que conecta una cuenta bancaria con un procesador de pagos, haciendo posible el pago por medios electrónicos en sitios web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El sitio informa claramente a las personas usuarias que serán redirigidos a una pasarela de pago y que esta puede ser un servicio externo?  La opción \"No aplica\" es solo para el caso en que no existan pasarelas de pago en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-14-q8",
            "codigo": "14.2.1.2",
            "indicador": "Botones y pasarelas de pago",
            "descripcion": "Plataforma que conecta una cuenta bancaria con un procesador de pagos, haciendo posible el pago por medios electrónicos en sitios web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se informa expresamente que las condiciones de pago dependen del banco en que la persona tenga su cuenta?  Por ejemplo: pago en cuotas a precio contado es una opción que ofrecen algunas tarjetas bancarias y, por tanto, no aplica para todas las personas usuarias.  La opción \"No aplica\" es solo para el caso en que no existan pasarelas de pago en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-14-q9",
            "codigo": "14.2.1.3",
            "indicador": "Botones y pasarelas de pago",
            "descripcion": "Plataforma que conecta una cuenta bancaria con un procesador de pagos, haciendo posible el pago por medios electrónicos en sitios web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se informa claramente el detalle y costo total del pago, evitando cobros inesperados al llegar al último paso del proceso? Por ejemplo: se explicitan los cobros de comisión de la pasarela utilizada, costos de cancelación o gastos de gestión.  La opción \"No aplica\" es solo para el caso en que no existan pasarelas de pago en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-14-q10",
            "codigo": "14.3.1",
            "indicador": "Enlaces visitados",
            "descripcion": "Existe una diferencia perceptible entre enlaces visitados y por visitar.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El sitio web diferencia entre enlaces visitados y enlaces por visitar?  Por ejemplo: los enlaces por visitar son de color azul, mientras que los enlaces visitados son de un color morado.  La opción \"No aplica\" se utiliza solo si el sitio web no incluye enlaces.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-14-q11",
            "codigo": "14.3.2",
            "indicador": "Descarga de documentos",
            "descripcion": "Posibilidad de descargar los documentos asociados a un trámite en diferentes formatos.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Se pueden descargar los documentos asociados a un trámite, a modo de respaldo y comprobación?  Por ejemplo: una versión completa de toda la documentación aportada en PDF.  La opción \"No aplica\" se utiliza solo si el trámite no incluye documentos descargables.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-14-q12",
            "codigo": "14.3.3",
            "indicador": "Foros y encuestas",
            "descripcion": "Presencia de espacios que permitan la comunicación, el intercambio y la participación entre las personas usuarias y los responsables del servicio digital.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Existen foros o blogs que permitan la comunicación, intercambio y participación entre las personas usuarias y los responsables del servicio digital?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-14-q13",
            "codigo": "14.3.3.2",
            "indicador": "Foros y encuestas",
            "descripcion": "Presencia de espacios que permitan la comunicación, el intercambio y la participación entre las personas usuarias y los responsables del servicio digital.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Existen encuestas de evaluación de la calidad del servicio digital para conocer las opiniones de los usuarios, que permitan mejorar el servicio ofrecido?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-14-q14",
            "codigo": "14.3.4",
            "indicador": "Recuperación ante fallos",
            "descripcion": "Capacidad de un sitio web para funcionar de manera consistente y correcta, asegurando que las personas usuarias puedan acceder, utilizar los servicios y la información sin interrupciones ni errores.",
            "prioridad": "Deseable",
            "preguntaChequeo": "Si durante la evaluación del servicio digital se produce una interrupción, ¿el sistema se recupera rápidamente, manteniendo la continuidad del servicio?  Por ejemplo: menos de 3 minutos.  La opción \"No aplica\" es solo para el caso en que no ocurra ninguna interrupción.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-14-q15",
            "codigo": "14.3.4.2",
            "indicador": "Recuperación ante fallos",
            "descripcion": "Capacidad de un sitio web para funcionar de manera consistente y correcta, asegurando que las personas usuarias puedan acceder, utilizar los servicios y la información sin interrupciones ni errores.",
            "prioridad": "Deseable",
            "preguntaChequeo": "Si durante la evaluación del servicio digital se produce una interrupción, ¿el sistema no vuelve a pedir los datos llenados previamente?  Por ejemplo: no se pierde toda la información ingresada a un formulario.  La opción \"No aplica\" es solo para el caso en que no ocurra ninguna interrupción.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-14-q16",
            "codigo": "14.3.5",
            "indicador": "Comunicación con responsable",
            "descripcion": "Posibilidad de comunicarse con la persona encargada, para realizar consultas, sugerencias o comentarios respecto del servicio digital.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Existen formas de comunicarse con la persona responsable o unidad de soporte técnico del servicio digital específico?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-14-q17",
            "codigo": "14.3.5.2",
            "indicador": "Comunicación con responsable",
            "descripcion": "Posibilidad de comunicarse con la persona encargada, para realizar consultas, sugerencias o comentarios respecto del servicio digital.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El acceso a este contacto es fácil de encontrar?  La opción \"No aplica\" es solo para el caso en que no exista ninguna forma de comunicación con el responsable del sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-15",
        "orden": 15,
        "nombre": "Rapidez de respuesta",
        "descripcion": "Capacidad del servicio digital para entregar una experiencia usuaria rápida y con una navegación fluida, sobre todo en los trámites. También considera los tiempos de la institución para dar respuestas a las solicitudes en plazos breves y acotados.",
        "sourceSheet": "15Rap",
        "preguntas": [
          {
            "id": "svc-15-q1",
            "codigo": "15.1.1",
            "indicador": "Tiempo de respuesta",
            "descripcion": "Velocidad con la que un sitio web puede procesar y responder a las solicitudes de las personas usuarias, proporcionando una experiencia de navegación ágil y eficiente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se puede avanzar por cada paso del trámite de manera fluida sin esperas mayores a 3 segundos al cargar las páginas del proceso?   La opción \"No aplica\" es solo para el caso en que el trámite se realice en un formulario único sin carga de nuevas páginas.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-15-q2",
            "codigo": "15.1.1.2",
            "indicador": "Tiempo de respuesta",
            "descripcion": "Velocidad con la que un sitio web puede procesar y responder a las solicitudes de las personas usuarias, proporcionando una experiencia de navegación ágil y eficiente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El servicio digital envía respuestas o confirmaciones de recepción automáticas e inmediatas?  Por ejemplo: al enviar un formulario de contacto se recibe una notificación inmediata al correo electrónico de que fue recibido correctamente.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-15-q3",
            "codigo": "15.1.1.3",
            "indicador": "Tiempo de respuesta",
            "descripcion": "Velocidad con la que un sitio web puede procesar y responder a las solicitudes de las personas usuarias, proporcionando una experiencia de navegación ágil y eficiente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿La portada del sitio web se carga completamente en menos de tres segundos?  Por ejemplo: al visitar desde un PC o notebook en el navegador Google Chrome la página principal con todo el contenido, incluidas las imágenes, las hojas de estilos y los scripts, estos se cargan en menos de tres segundos.   Para esto se recomienda realizar una prueba de rendimiento en WebPageTest: 1. Pegar la URL de la página a revisar y elegir la opción: \"DESKTOP Cable Virginia, US\". 2. Luego iniciar el test.  3. Más abajo aparecerá el resultado en el sector de \"Speed Index\", se verán los segundos aproximados que deben ser menor o igual a 3.  La opción \"No aplica\" es solo para el caso en que no sea posible utilizar la herramienta externa.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-15-q4",
            "codigo": "15.1.1.4",
            "indicador": "Tiempo de respuesta",
            "descripcion": "Velocidad con la que un sitio web puede procesar y responder a las solicitudes de las personas usuarias, proporcionando una experiencia de navegación ágil y eficiente.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿La portada del sitio web está diseñada y desarrollada para cargar rápidamente incluso en conexiones de Internet lentas o con límites de datos?  Por ejemplo: se recomienda que pese menos de 2 MB, en total, para garantizar que se visualice rápidamente en conexiones 3G.   Para saber el peso de la página web evaluada, se recomienda hacer un test con la herramienta Pingdom:  1. Pegar la URL de la página a revisar y elegir la opción \"South America - Brazil - São Paulo\". 2. Luego iniciar el test.  3. Más abajo aparecerá el resultado en \"Page size\", este debe ser menor a 2MB en total.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-16",
        "orden": 16,
        "nombre": "Audiovisualidad",
        "descripcion": "Conjunto de objetos interactivos o no interactivos que contienen información representada por texto, imagen, video, animación, sonido u otro tipo de medios.",
        "sourceSheet": "16Aud",
        "preguntas": [
          {
            "id": "svc-16-q1",
            "codigo": "16.1.1",
            "indicador": "Derechos de uso de imágenes, videos y archivos de audio",
            "descripcion": "Posesión de los derechos de uso de imágenes, videos o audios publicados en un sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El sitio presenta imágenes, videos y archivos de audio propios?  Por ejemplo: una manera de comprobar autoría es buscando una imagen del sitio en el buscador de imágenes de Google.  La opción \"No aplica\" es solo para el caso en que no existan imágenes, videos o audios en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-16-q2",
            "codigo": "16.1.1.2",
            "indicador": "Derechos de uso de imágenes, videos y archivos de audio",
            "descripcion": "Posesión de los derechos de uso de imágenes, videos o audios publicados en un sitio web.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Si se utiliza contenido ajeno, ¿se declara la fuente o autoría y se menciona el respectivo permiso de uso del autor o propietario?  Por ejemplo: \"Foto: Juan Pérez, licenciada bajo CC BY 4.0 Internacional\", \"Video cortesía de Memoria Chilena\".  La opción \"No aplica\" es solo para el caso en que no exista contenido ajeno.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-16-q3",
            "codigo": "16.2.1",
            "indicador": "Complementariedad",
            "descripcion": "Uso de imágenes, videos y audios para complementar la información publicada en los contenidos.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las imágenes, videos y audios publicados en el sitio web complementan (representan elementos de apoyo) los contenidos publicados?  Por ejemplo: en un contenido referente a cómo obtener la Clave Única, además del texto explicando secuencialmente los pasos que se deben seguir, se puede agregar un video mostrando el paso a paso en la pantalla de un computador, tablet o celular al realizar el trámite. De este modo, el material audiovisual complementa lo expresado a través de texto.  La opción \"No aplica\" es solo para el caso en que no existan imágenes, videos o audios en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-16-q4",
            "codigo": "16.2.2",
            "indicador": "Formato de imágenes",
            "descripcion": "Especificaciones técnicas de las imágenes publicadas en un sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Predomina el uso de imágenes en formato de nueva generación como WebP que proporciona una mejor compresión que JPG, PNG o GIF?  En el punto V de la guía, puede consultar cómo verificar el formato de las imágenes.   La opción \"No aplica\" es solo para el caso en que no existan imágenes en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-16-q5",
            "codigo": "16.2.2.2",
            "indicador": "Formato de imágenes",
            "descripcion": "Especificaciones técnicas de las imágenes publicadas en un sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las imágenes pesan menos de 600 KB para no ralentizar la carga de la página?  En el punto V de la guía, puede consultar cómo verificar el peso de las imágenes.  La opción \"No aplica\" es solo para el caso en que no existan imágenes en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-16-q6",
            "codigo": "16.2.3",
            "indicador": "Formato de videos",
            "descripcion": "Especificaciones técnicas de los videos publicados en un sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los videos tienen la calidad adecuada para su correcta visualización?  Por ejemplo: el video no demora en cargar y la imagen se ve nítida.  La opción \"No aplica\" es solo para el caso en que no existan videos en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-16-q7",
            "codigo": "16.2.3.2",
            "indicador": "Formato de videos",
            "descripcion": "Especificaciones técnicas de los videos publicados en un sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los videos tienen título y descripción?  La opción \"No aplica\" es solo para el caso en que no existan videos en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-16-q8",
            "codigo": "16.2.3.3",
            "indicador": "Formato de videos",
            "descripcion": "Especificaciones técnicas de los videos publicados en un sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Se usa streaming adaptable para adecuar la calidad del video según el dispositivo y velocidad de conexión?  Por ejemplo: el video demora menos de 2 segundos en comenzar a reproducirlo.  La opción \"No aplica\" es solo para el caso en que no existan videos en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-17",
        "orden": 17,
        "nombre": "Enfoque de género",
        "descripcion": "Incorporación de la perspectiva de género en un sitio web, a través de acciones como el uso de lenguaje inclusivo y la proporcionalidad de representación en contenidos o materiales audiovisuales, para evitar reproducir desigualdades e inequidades.",
        "sourceSheet": "17Gen",
        "preguntas": [
          {
            "id": "svc-17-q1",
            "codigo": "17.1.1",
            "indicador": "Lenguaje inclusivo",
            "descripcion": "Expresión verbal, escrita o visual que visibiliza lo femenino y masculino, elimina estereotipos, el sexismo, el androcentrismo y el masculino como genérico universal. Se fundamenta en una comunicación institucional basada en los principios de igualdad, respeto y no discriminación.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se utiliza un lenguaje inclusivo, respetuoso de la diversidad y que no reproduzca estereotipos de género?  Por ejemplo: - Aplicar sustitutos de las palabras que pueden incluir algún sesgo de género, duplicando artículos que determinan el sustantivo (\"Las y los beneficiarios\"). - Prescindir de la referencia al sujeto y recurrir a formas pasivas (\"Se deben cumplir los requisitos de postulación\"). - Usar formas no personales del verbo (\"Es necesario considerar\"). - Usar pronombres sin marca de género (\"Quien suscribe\", \"Cada postulante\", \"Cada persona puede postular\"). - Quitar el artículo y usar determinantes sin marca de género (\"Cualquier funcionario puede acceder\"). - Reemplazar genéricos masculinos comúnmente utilizados (en vez de \"Niños\", usar \"Infancia\", en vez de \"Beneficiarios\", usar \"Personas beneficiarias\", en vez de \"Ciudadanos\", usar \"Ciudadanía\").",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-17-q2",
            "codigo": "17.1.1.2",
            "indicador": "Lenguaje inclusivo",
            "descripcion": "Expresión verbal, escrita o visual que visibiliza lo femenino y masculino, elimina estereotipos, el sexismo, el androcentrismo y el masculino como genérico universal. Se fundamenta en una comunicación institucional basada en los principios de igualdad, respeto y no discriminación.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Los contenidos del sitio están libres de palabras o términos discriminatorios?  Por ejemplo: frases o términos sexistas o discriminatorios como \"El que te quiere te aporrea\", \"Calladita te ves más bonita\", \"Los hombres no lloran\".",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-17-q3",
            "codigo": "17.2.1",
            "indicador": "Fotografías y videos con enfoque de género",
            "descripcion": "Uso de imágenes y videos con perspectiva de género, respetando principios de igualdad, respeto y no discriminación.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Las imágenes del sitio están libres de sexismo y estereotipos de género? Por ejemplo: no se identifican profesiones ni actividades exclusivamente como femeninas o masculinas (como representar la ingeniería con fotos sólo masculinas o en el caso de la educación parvularia, con fotos solo femeninas); se evita asociar a través de las imágenes las tareas domésticas y de cuidado solo a mujeres.  La opción \"No aplica\" es solo para el caso en que no existan imágenes en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-17-q4",
            "codigo": "17.2.1.2",
            "indicador": "Fotografías y videos con enfoque de género",
            "descripcion": "Uso de imágenes y videos con perspectiva de género, respetando principios de igualdad, respeto y no discriminación.",
            "prioridad": "Esperable",
            "preguntaChequeo": "Cuando se utiliza musicalización en videos o archivos de audios, ¿las letras de canciones utilizadas están libres de sexismo y de palabras o términos discriminatorios?  La opción \"No aplica\" es solo para el caso en que no existan videos o audio en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-17-q5",
            "codigo": "17.2.2",
            "indicador": "Representatividad",
            "descripcion": "Proporcionalidad de género en los contenidos, imágenes, vídeos y audios publicados en un sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Es proporcional por género la representatividad en contenidos, imágenes, vídeos y audios publicados?  La opción \"No aplica\" es solo para el caso en que no existan contenidos, imágenes, videos o audios en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-17-q6",
            "codigo": "17.3.1",
            "indicador": "Formularios representativos",
            "descripcion": "Diseño de formularios con perspectiva de género, respetando principios de igualdad, respeto, diversidad y no discriminación.",
            "prioridad": "Deseable",
            "preguntaChequeo": "En los formularios cuando se pregunta el género de quien responde, ¿además de \"Femenino\" y \"Masculino\", se incluye también a lo menos el campo \"Otro\"?  La opción \"No aplica\" se debe utilizar únicamente cuando no exista un formulario o el campo de género no esté presente.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-18",
        "orden": 18,
        "nombre": "Imparcialidad e igualdad de trato",
        "descripcion": "Disposición a entregar la mejor experiencia de usuario a todas las personas, independiente de sus habilidades, identidad, antecedentes o situación en la que se encuentren.",
        "sourceSheet": "18Imp",
        "preguntas": [
          {
            "id": "svc-18-q1",
            "codigo": "18.1.1",
            "indicador": "Prescindencia de RUN",
            "descripcion": "Entrega de alternativas de identificación —además del RUN— para que todas las personas usuarias puedan acceder a los servicios personalizados.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El servicio digital cuenta con un mecanismo oficial de autenticación que permita autenticar personas sin RUT?  Los mecanismos se pueden revisar en la Norma Técnica de Autenticación",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-18-q2",
            "codigo": "18.2.1",
            "indicador": "Diversidad en formularios",
            "descripcion": "Especial cuidado en la redacción de preguntas en formularios para considerar la diversidad de personas usuarias y evitar discriminaciones.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿En los campos de los formularios se considera una amplia diversidad de personas usuarias? Por ejemplo: evitar que personas queden fuera de los rangos etarios del selector de un formulario; cautelar que aparezcan todas las comunas, pueblos originarios o credos religiosos.  La opción \"No aplica\" es solo para el caso en que no existan formularios en el sitio web y/o sean personas jurídicas",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-18-q3",
            "codigo": "18.3.1",
            "indicador": "Versiones en otros idiomas",
            "descripcion": "Presencia de información en otros idiomas, especialmente para personas de pueblos originarios y migrantes que no hablen español.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Existe una versión o información en otro idioma?  Por ejemplo: inglés, mapudungún, creole u otros.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-18-q4",
            "codigo": "18.3.1.2",
            "indicador": "Versiones en otros idiomas",
            "descripcion": "Presencia de información en otros idiomas, especialmente para personas de pueblos originarios y migrantes que no hablen español.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿La página de entrada al trámite permite ser traducida con la opción de traducción automática del navegador?   Para verificar este aspecto, en Google Chrome al hacer clic con el botón secundario elegir la opción \"Traducir al español\" (aunque ya esté en ese idioma). Con ello se activa el icono de traducción al lado derecho de la URL en la barra de navegación, donde podemos añadir otro idioma y comprobar.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-18-q5",
            "codigo": "18.3.2",
            "indicador": "Descentralización",
            "descripcion": "Especial cuidado en la redacción de los contenidos y acceso a los servicios para evitar un sesgo desde la centralización.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Los servicios y formularios están confeccionados considerando igualdad de oportunidades de acceso para personas usuarias de todas las regiones?  Por ejemplo: que la persona usuaria pueda finalizar el trámite en línea sin necesidad de acudir a una oficina en la Región Metropolitana. O bien, evitar que los selectores de región de los formularios comiencen con la Región Metropolitana.  La opción \"No aplica\" debe seleccionarse solo en caso de que el formulario o servicio no contemple preguntas relacionadas con la región de la persona usuaria.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-19",
        "orden": 19,
        "nombre": "Inclusión",
        "descripcion": "Incorporación de un enfoque inclusivo que responda a la diversidad y diferencias individuales, garantizando igualdad de acceso a políticas y servicios públicos para todas y todos, sin importar características, habilidades u origen.",
        "sourceSheet": "19Inc",
        "preguntas": [
          {
            "id": "svc-19-q1",
            "codigo": "19.1.1",
            "indicador": "Menús desplegables",
            "descripcion": "Cautela en el uso de menús desplegables, porque para algunas personas usuarias pueden significar una barrera de acceso, por ejemplo, personas con motricidad reducida.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En el caso de existir menús desplegables en el sitio web, ¿se pueden utilizar sin problemas?  Por ejemplo: se puede navegar fácilmente por el menú desplegable sin que se cierre inesperadamente, no flotan sobre otros menús o imágenes en movimiento.  La opción \"No aplica\" es solo para el caso en que no existan menús desplegables en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-19-q2",
            "codigo": "19.2.1",
            "indicador": "Interpretación en lengua de señas chilena",
            "descripcion": "Presencia de interpretación en lengua de señas chilena para los contenidos audiovisuales.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿Los videos cuentan con interpretación en lengua de señas chilena en un tamaño y formato entendible? Por ejemplo: el video cuenta con un recuadro ubicado en el costado inferior derecho de la pantalla en el que el intérprete se ve claramente, diferenciándose del fondo y las señas se pueden distinguir y reconocer.  La opción \"No aplica\" es solo para el caso en que no existan videos en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-19-q3",
            "codigo": "19.2.2",
            "indicador": "Lector de texto incorporado",
            "descripcion": "Herramienta para la lectura de texto incorporada en el sitio web.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El sitio web o servicio digital cuenta con una opción de lector de texto?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-19-q4",
            "codigo": "19.3.1",
            "indicador": "Apto para daltonismo",
            "descripcion": "Preocupación en el diseño por considerar contrastes y combinaciones de color aptos para personas con daltonismo.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El diseño considera contrastes y combinaciones de color aptos para el daltonismo?  Por ejemplo: esto se puede evaluar sacando una captura de pantalla del sitio web y revisando en el simulador de daltonismo del sitio web de Color Lite Lens: luego de subir la imagen, seleccionar los distintos tipos de daltonismo y revisar uno a uno si con los cambios de color se pueden identificar correctamente los elementos y no se pierde información importante.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-19-q5",
            "codigo": "19.3.2",
            "indicador": "Lectura fácil",
            "descripcion": "Método de creación y adaptación de textos que los hace más fáciles de comprender a personas con dificultades de comprensión lectora.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Se presenta al menos un texto redactado con la técnica de Lectura Fácil?  Por ejemplo: es posible observar texto organizado con frases sencillas y cortas, en caso de existir palabras poco comunes, estas cuentan con un cuadro con la definición al costado derecho. Los contenidos deben verse como los del sitio Planeta Inclusión.  La opción \"No aplica\" es solo para el caso en que el sitio web no tenga contenidos.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-19-q6",
            "codigo": "19.3.3",
            "indicador": "Escala de grises y alto contraste",
            "descripcion": "Opción para que las personas usuarias puedan cambiar los colores del sitio a escala de grises y alto contraste.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿Las personas usuarias pueden modificar el diseño del sitio web o servicio digital para verlo en escala de grises o alto contraste por medio de un botón presente en el sitio?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      },
      {
        "id": "svc-20",
        "orden": 20,
        "nombre": "Promoción",
        "descripcion": "Conjunto de acciones orientadas a extender los contenidos del sitio web a la ciudadanía, como la optimización para el posicionamiento en buscadores y difusión en redes sociales.",
        "sourceSheet": "20Pro",
        "preguntas": [
          {
            "id": "svc-20-q1",
            "codigo": "20.1.1",
            "indicador": "Indexación en buscadores",
            "descripcion": "Habilitación del acceso de los robots de búsqueda para indexar el sitio mediante el metadato \"robots\" o el archivo \"robots.txt\".",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Está presente la meta etiqueta \"robots\" sin los parámetros \"noindex\", \"nofollow\" o \"none\"?  Por ejemplo: al buscar la palabra \"robots\" con CTRL+F en el código fuente de la página, la referencia \"<meta name='robots' content='noindex'>\" no está presente. Tampoco cuando está con más de un valor: \"<meta name='robots' content='noindex,nofollow'/>\"  Si la meta etiqueta robots no está presente se debe responder afirmativamente a la pregunta.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-20-q2",
            "codigo": "20.1.1.2",
            "indicador": "Indexación en buscadores",
            "descripcion": "Habilitación del acceso de los robots de búsqueda para indexar el sitio mediante el metadato \"robots\" o el archivo \"robots.txt\".",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Si existe un archivo denominado \"robots.txt\" en la raíz del sitio web, ¿este permite la indexación?  Por ejemplo: si está presente el archivo \"robots.txt\" en la raíz del sitio web –es decir en la URL: \"https://sitioejemplo.gob.cl/robots.txt\"–, este no deniega el acceso.   La denegación de acceso se podría ver de esta manera:  User-agent: *  Disallow: / Si al ingresar a la URL https://sitioejemplo.gob.cl/robots.txt el navegador arroja un error, esto significa que el archivo no existe y se debe marcar que esta pregunta no aplica.  La opción \"No aplica\" es solo para el caso en que no exista el archivo \"robots.txt\" en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-20-q3",
            "codigo": "20.1.2",
            "indicador": "Títulos indexables",
            "descripcion": "Presencia del tema principal de cada página del sitio en su título (etiqueta \"title\") para garantizar que el propósito de cada una sea claro para los motores de búsqueda.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Al revisar el código fuente, ¿el texto dentro de la etiqueta \"title\" utiliza el título o las palabras claves para identificar el contenido que la página contiene?  Por ejemplo: en las primeras líneas se puede reconocer un código del tipo \"<title>Ministerio de Salud - Gobierno de Chile</title>\" (sin comillas).",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-20-q4",
            "codigo": "20.1.3",
            "indicador": "Título principal en \"h1\"",
            "descripcion": "Uso de la etiqueta \"h1\" para describir el contenido principal de la página; ésta debe estar presente solo una vez en cada una.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Está presente en la página el título principal dentro de la etiqueta \"h1\"?  Por ejemplo: se puede buscar la referencia \"<h1\" en el código fuente de la página.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-20-q5",
            "codigo": "20.1.3.2",
            "indicador": "Título principal en \"h1\"",
            "descripcion": "Uso de la etiqueta \"h1\" para describir el contenido principal de la página; ésta debe estar presente solo una vez en cada una.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿El título \"h1\" utiliza las palabras claves para identificar el contenido que la página contiene?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-20-q6",
            "codigo": "20.1.3.3",
            "indicador": "Título principal en \"h1\"",
            "descripcion": "Uso de la etiqueta \"h1\" para describir el contenido principal de la página; ésta debe estar presente solo una vez en cada una.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Existe solo un título identificado con la etiqueta \"h1\" dentro del código fuente de la página?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-20-q7",
            "codigo": "20.1.4",
            "indicador": "Facilitar compartir en redes sociales",
            "descripcion": "Facilidad de compartir a través de redes sociales con el uso de metadatos apropiados para que las páginas de contenidos del sitio web se comparten con una previsualización.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "¿Se genera una pre visualización que muestra una imagen y el título del contenido al compartir la página de inicio del trámite por redes sociales?  Por ejemplo: al pegar la URL de la página de inicio en una conversación en WhatsApp el mensaje genera una vista previa con una foto y título del contenido.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-20-q8",
            "codigo": "20.1.5",
            "indicador": "Publicidad en sitio y videos",
            "descripcion": "Precaución de no mostrar publicidad que anuncie o promocione productos, servicios o marcas externas a la organización en el sitio web o videos incrustados.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "Durante la revisión del sitio web no se observa publicidad externa a la organización.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-20-q9",
            "codigo": "20.1.5.2",
            "indicador": "Publicidad en sitio y videos",
            "descripcion": "Precaución de no mostrar publicidad que anuncie o promocione productos, servicios o marcas externas a la organización en el sitio web o videos incrustados.",
            "prioridad": "Imprescindible",
            "preguntaChequeo": "En caso de haber algún video en el sitio web, no se observa publicidad externa a la organización.  La opción \"No aplica\" es solo para el caso en que no existan videos en el sitio web.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-20-q10",
            "codigo": "20.2.1",
            "indicador": "Metadescripción de páginas",
            "descripcion": "Correcta descripción de cada página al entregar información sobre su contenido en la meta etiqueta \"description\".",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿La metaetiqueta \"description\" de la página de inicio del trámite utiliza las palabras claves para identificar el contenido que esta contiene y lo hace en menos de 160 caracteres?  Por ejemplo: al revisar el código fuente del sitio del Ministerio de Salud, se podría leer una línea del tipo \"<meta name=\"description\" content=\"El Minsal fija políticas de salud pública y prevención de enfermedades y coordina las redes asistenciales de Chile\">\". Para medir la extensión de caracteres con espacio, puede usar la opción \"Contar palabras\" de Microsoft Word o la herramienta en línea Word Counter.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-20-q11",
            "codigo": "20.2.2",
            "indicador": "Patrones engañosos",
            "descripcion": "Estrategias y técnicas poco éticas que se utilizan en los sitios web, que obligan a las personas usuarias a realizar una acción que no desean, cómo comprar un producto o registrarse en algún servicio.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El sitio web está libre de preguntas que parecen plantear una cosa, pero al leerlas detenidamente se revela una pregunta totalmente distinta? Por ejemplo: la persona usuaria puede ser manipulada para proporcionar una respuesta que no pretendía ofrecer (mientras completa un formulario, responde a una pregunta que la engaña para dar una respuesta no deseada).",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-20-q12",
            "codigo": "20.2.2.2",
            "indicador": "Patrones engañosos",
            "descripcion": "Estrategias y técnicas poco éticas que se utilizan en los sitios web, que obligan a las personas usuarias a realizar una acción que no desean, cómo comprar un producto o registrarse en algún servicio.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El sitio web evita testimonios de personas usuarias cuyo origen no está claro o no son creíbles y confiables?",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-20-q13",
            "codigo": "20.2.2.3",
            "indicador": "Patrones engañosos",
            "descripcion": "Estrategias y técnicas poco éticas que se utilizan en los sitios web, que obligan a las personas usuarias a realizar una acción que no desean, cómo comprar un producto o registrarse en algún servicio.",
            "prioridad": "Esperable",
            "preguntaChequeo": "¿El sitio no obliga a realizar acciones forzadas a la persona usuaria para completar su tarea u obtener un servicio? Por ejemplo: registrar una cuenta o suscribirse a un boletín informativo.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          },
          {
            "id": "svc-20-q14",
            "codigo": "20.3.1",
            "indicador": "Dominio representativo",
            "descripcion": "Representatividad del tema principal de la institución en el dominio del sitio web.",
            "prioridad": "Deseable",
            "preguntaChequeo": "¿El dominio incorpora el nombre, palabra clave o tema más representativo de la institución? Por ejemplo: se privilegian URLs del tipo \"concepto.gob.cl\" o \"tema.gob.cl\" por sobre una sigla o el tipo de organización o plataforma.",
            "ejemploAyuda": "Revise el sitio o servicio, capture evidencia y registre la observaci?n seg?n la gu?a del instrumento Calidad Web 2.0."
          }
        ]
      }
    ]
  }
} satisfies Record<QualityInstrumentType, QualityInstrumentDefinition>;
