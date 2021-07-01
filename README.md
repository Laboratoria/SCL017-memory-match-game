# Memory Match Game

## Índice

* [Preámbulo](#preámbulo)
* [Investigación temática](#Investigación-temática)
* [Historias de usuarios](#Historias-de-usuarios)
* [Prototipos y Diagrama de flujo](#Prototipos-de-baja-y-alta-fidelidad)
* [Test de Usabilidad](#Test-de-usabilidad)
***
Developers: Vania Venegas-Viviana Moya.
Link del juego: 
***

## Preámbulo

El juego *Memory Match* es un juego de cartas en el que todas las cartas se ponen cara abajo sobre una superficie y se da la vuelta a dos cartas en cada turno. El objetivo del juego es destapar parejas de cartas que coincidan y sacarlas del tablero; se gana cuando se descubren todas las cartas.

Es sabido que este tipo de juegos tiene múltiples beneficios  🙂 tales como:
- Entrenar la memoria visual.
- Potenciar las habilidades cognitivas.
- Ejercitar el cerebro de una forma saludable.
- Mejorar la concentración.
- Aumentar la memoria a corto plazo.

Habilidades como las mencionada se van consiguiendo usualmente desde la infancia, pero ¿qué hay de los niños con necesidades especiales? ¿niños con TEA por ejemplo?

Según la Confederación Autismo España, el TEA (Trastorno del Espectro Autista) es un trastorno de origen neurobiológico que afecta a la configuración del sistema nervioso y al funcionamiento cerebral, dando lugar a dificultades en dos áreas principalmente: la comunicación e interacción social y la flexibilidad del pensamiento y de la conducta; un niño con esta condición se caracteriza por evitar el contacto visual y querer estar solito. Tener dificultades para comprender los sentimientos de otras personas y para hablar de sus propios sentimientos y emociones. Presentan además  retrasos en las destrezas del habla y el lenguaje, entre otras. En estos casos particulares, un juego como el Memory Match sirve para mucho más que entretener: es toda una herramienta educativa y -pensando en ello- MemoPlay fue concebido para apoyar en la gestión emocional de niños que tienen esta condición. por ello, lo que busca lograr MemoPlay es ayudar en el reconocimientos de ciertas emociones de una manera lúdica y creativa, ya que el juego presenta una buena cantidad de ilustraciones que activan de mayor manera su atención, asociación y concentración. 

## Investigación temática.

 Previo al desarrollo de este juego se hizo una investigación concienzuda respecto a esta condición y al
 proceso de aprendizaje de los niños que la padecen; dicha investigación involucró:

- Investigación en la web sobre el trastorno.
- Investigación del juego como método de enseñanza.
- Entrevista a educadora diferencial y a directora de colegio especializado en niños con TEA.
- Entrevista a madre con hijo que asiste a terapias de fonoaudióloga experta en autismo.
- Entrevista a madre con hijo que no asiste a terapias.

gracias a esta investigación nacieron nuestras Historias de Usuario.

  ## Historias de usuarios

  ![HISTORIAS DE USUARIO](../master/src/images/HU.jpg)

MemoPlay, aunque está diseñado idealmente puede ser usado como una herramienta de apoyo para que un Adulto (padre, docente u otro) pueda ayudar a un niño con TEA en el entendimiento y gestión de las emociones, puede ser usado por cualquier persona de cualquier edad. 

### Historia de usuario 1, 2 y 3 "juego simple e intuitivo que Fortalecer la autodefinición y reconocimiento de emociones"

DESCRIPCIÓN: Los niños con trastorno del espectro autista comprenden más tardíamente y con mayor dificultades qué son y qué sienten; además les abruma las páginas sobrecargadas de contenido.

CRITERIOS MÍNIMOS DE ACEPTACIÓN: 
Crear un diseño ameno y no sobrecargado de color ni de estímulos, con un título y un botón que inicie el juego inmediatamente.

DEFINICIÓN DE REALIZADO:
- Escoger paletas de colores sencillas que no sobrecargen la página de estímulos innecesarios. 
- Un título simple que le anime a interactuar con lo que se presenta bajo él.
- Botones grandes con caritas de niño y niña para que el niño escoja con cuál se representa y que lo lleve al juego sin necesidad de registrarse. 
- Se seleccionan tarjetas con niños de diferentes características mostrando de forma notoria diferentes emociones tales como: susto, enojo, felicidad, preocupación, aburrimiento, vergüenza,sorpresa, cansancio y enamorado. 

ITERACIONES SUGERIDAS: 
Al mostrar el resultado de esta historia de usuario se recibieron varios feedbacks:
- Los niños escogidos para los botones son muy estereotipados (niños rubios o con ojos claros). 
- Aunque potencia la autodefinición no hace mucho en aporte a la gestión emocional.
- El título es un poco "discriminador" no refleja una potencial variedad.
- Corregir bordes para que no se vea agresivo.

SE CONSIDERARON TODAS LAS SUGERENCIAS, AQUÍ EL ANTES Y EL DESPUÉS: 

![HISTORIAS DE USUARIO 1,2 y 3](../master/src/images/historia.png)

### Historia de usuario 4 y 5 "juego simple e intuitivo, sin distractores y que muestre el avance"

DESCRIPCIÓN: El trabajar la ansiedad y la tolerancia a la frustración es complejo en cualquier niño, pero es un desafío especialmente complejo en un niño con TEA, por ello el juego debe ser lo más sencillo posible sin elementos distractores que potencialmente terminen abrumando o irritando al niño, que muestre avance y el resultado al ganar.

CRITERIOS MÍNIMOS DE ACEPTACIÓN: 
lograr que la página tenga el mínimo de información posible y aún así muestre al niño su avance y, al ganar, que le haga saber que lo logró.

DEFINICIÓN DE REALIZADO:
- Se eliminan las cartas que hacen match así el niño sabrá cuánto ha avanzado (sin necesidad de cuadros informativos). 
- Se incluye un mensaje de felicidades al acabar la partida.
- Se incluye un boton de volver a jugar.  

ITERACIONES SUGERIDAS: 
Luego de varios feedback y de evaluar el proyecto decidimos el siguiente cambio: 
- Se coloca un título que especifique el nivel e que se juega.
- Se crea un dibujo para la parte de atrás de la carta más rústico para que se vea mejor en función del background.

NUESTRA HISTORIA 4 Y 5 ANTES Y DESPUÉS DE ITERAR:
![HISTORIAS DE USUARIO 4 y 5](../master/src/images/avance.png)

### Historia de usuario 6 "jugar en distintos dispositivos"

DESCRIPCIÓN: Hoy los artículos electrónicos están muy generalizados, por ello necesitamos un juego que se adapte a diferentes pantallas.

CRITERIOS MÍNIMOS DE ACEPTACIÓN: 
Debe ser responsive.

DEFINICIÓN DE REALIZADO:
- Los botones de carita se agrupan cuando la pantalla es más pequeña (como la de un celular).
- Se puede jugar en tablet y en varios equipos móviles.


![HISTORIAS DE USUARIO 1,2 y 3](../master/src/images/responsive.png)

## Prototipos de baja y alta fidelidad.

A partir de las historias de usuario generamos algunos prototipos que fueron evolucionando a medida avanzaba el proyecto según los feedbacks recibidos: 

![PROTOTIPOS](../master/src/images/Prototipos.jpg)

![PROTOTIPOS](../master/src/images/diagrama.jpg)

## Test de Usabilidad.

Con el testeo de usabilidad notamos que el diseño a pesar de ser simple es instuitivo y fácil de seguir y que las imágenes escogidas son entretenidas y demostrativas. 