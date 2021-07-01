import pokemon from "../data/pokemon/pokemon.js";

// Solo se mostrarán 3 elementos del array de pokemones
function recortarLista(lista) {
  const listaRecortada = [];
  for (let index = 0; index < 3; index++) {
    const element = lista[index];
    listaRecortada.push(element, element); //aquí se duplica un elemento de la lista, hasta llegar al index 3 (los tres primeros elementos
  }
  return listaRecortada;
}
// Función para encontrar el par de la carta
function match(cartasEscogidas, cards) {
  if (cartasEscogidas[0] == cartasEscogidas[1]) {
    paresEncontrados = paresEncontrados + 1;
    for (let index = cartasEscogidas.length - 1; index > -1; index--) {
      cards[index].style.visibility = "hidden";
    }
    if (paresEncontrados === 3) {
      document.getElementById("modalNextLevel").style.display = "flex";
        document.getElementById("nivel1").style.display = "none";

    }
  }
  cartasEscogidas.length = 0; // permite escoger más de 1 par
}

// Función para barajear las cartas
const shuffle = (arr) => {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

/* Creación de contenedores de juego */
const gameBoard = document.createElement("div"); // Contiene la imagen y la disposición Grid
gameBoard.className = "contenedor"; 
gameBoard.id = "gameBoard"; 
gameBoard.style.display = "none"; //indicamos como queremos que se muestre en el navegador. En este caso queremos que esté escondido hasta que sea usado

const gameContainer = document.createElement("div"); // El es contenedor que guarda al juego
gameContainer.className = "containerBox1";
gameContainer.id = "gameContainer";

const level1 = document.createElement("div"); // TRexto que indica el nivel actual
const textLevel1 = document.createTextNode("NIVEL 1");
level1.className = "nivel1";
level1.id = "nivel1";

const memoryGame = document.createElement("div"); // Contenedor que posee el juego
memoryGame.className = "memoryGame";
memoryGame.id = "memoryGame";

const modalNextLevel = document.createElement("modal");
modalNextLevel.id = ("modalNextLevel");
modalNextLevel.className = ("modal-bg");
modalNextLevel.style.display = ("none");
const modalNextLevelText = document.createTextNode ("¡NIVEL SUPERADO!");

const nextLevel = document.createElement("button");
const textNextLevel = document.createTextNode ("SIGUIENTE NIVEL");
nextLevel.className = ("nextLevel");
nextLevel.id = ("nextLevel");

// con este evento pasamos de nivel 1 a 2
nextLevel.addEventListener("click", () => {
  document.getElementById("gameBoard2").style.display = "flex";
  document.getElementById("gameBoard").style.display = "none";
});

// funcionamiento del juego
let listaPokemon = pokemon.items; // Esto exporta a Data 
listaPokemon = shuffle(listaPokemon); // toma la lista y la barajea
listaPokemon = recortarLista(listaPokemon, 3); // recorta esa lista a solo 3 item y los hace doble
listaPokemon = shuffle(listaPokemon); // vuelve a barajear pero ahora con más items. 
let cartasEscogidas = []; // guarda las cartas escogidas por el usuario
let cards = [];
let paresEncontrados = 0;

const App = () => {
  for (let index = 0; index < listaPokemon.length; index++) {
    let card = document.createElement("div");
    card.className = "card";
    card.id = listaPokemon.id;
    let imagenFrontal = document.createElement("img");
    imagenFrontal.src = "../img/QUEUE.png";
    imagenFrontal.className = "imagenFrontal";

    card.appendChild(imagenFrontal);

    imagenFrontal.addEventListener("click", () => {
      if (cartasEscogidas.length < 2) {
        imagenFrontal.src = listaPokemon[index].image;
        imagenFrontal.className = "imagenPokemon";
        card.appendChild(imagenFrontal);
        cartasEscogidas.push(listaPokemon[index].id);
        cards.push(card);

        if (cartasEscogidas.length == 2) {
          setTimeout(() => {
            match(cartasEscogidas, cards);
            let reemplazoOne = cards[0].lastChild;
            reemplazoOne.src = "../img/QUEUE.png";
            reemplazoOne.className = "imagenFrontal";

            let reemplazoTwo = cards[1].lastChild;
            reemplazoTwo.src = "../img/QUEUE.png";
            reemplazoTwo.className = "imagenFrontal";
            cards.length = 0;
          }, 1000);
        }
      }
    });

    // Aquí anexamos todos los contenedores padres a sus respectivos contenedores hijos
    gameBoard.appendChild(gameContainer);
    gameContainer.appendChild(level1);
    level1.appendChild(textLevel1);
    gameContainer.appendChild(memoryGame);
    gameContainer.appendChild(modalNextLevel);
    modalNextLevel.appendChild(modalNextLevelText);
    modalNextLevel.appendChild(nextLevel);
    nextLevel.appendChild(textNextLevel);
    memoryGame.appendChild(card);
  
  }
  return gameBoard;
};

export default App;
