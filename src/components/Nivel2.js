import pokemon from "../data/pokemon/pokemon.js";

function recortarLista(lista) {
  const listaRecortada = [];
  for (let index = 0; index < 6; index++) {
    const element = lista[index];
    listaRecortada.push(element, element);
  }
  return listaRecortada;
}
function match(cartasEscogidas, cards) {
  if (cartasEscogidas[0] == cartasEscogidas[1]) {
    paresEncontrados = paresEncontrados + 1;
    for (let index = cartasEscogidas.length - 1; index > -1; index--) {
      cards[index].style.visibility = "hidden";
    }
    if (paresEncontrados === 6) {
      document.getElementById("modalNextLevel1").style.display = "flex";
      document.getElementById("nivel2").style.display = "none";
    }
  }
  cartasEscogidas.length = 0;
}

const shuffle = (arr) => {
  // Función para barajear las cartas
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const gameBoard2 = document.createElement("div");
gameBoard2.className = "contenedor";
gameBoard2.id = "gameBoard2";
gameBoard2.style.display = "none";

const gameContainer = document.createElement("div");
gameContainer.className = "containerBox1";
gameContainer.id = "gameContainer2";

const level1 = document.createElement("div");
const textLevel1 = document.createTextNode("NIVEL 2");
level1.className = "nivel1";
level1.id = "nivel2";

const memoryGame = document.createElement("div");
memoryGame.className = "memoryGame2";
memoryGame.id = "memoryGame";

const modalNextLevel = document.createElement("modal");
modalNextLevel.id = "modalNextLevel1";
modalNextLevel.className = "modal-bg";
modalNextLevel.style.display = "none";
const modalNextLevelText = document.createTextNode("¡NIVEL SUPERADO!");

const nextLevel = document.createElement("button");
const textNextLevel = document.createTextNode("SIGUIENTE NIVEL");
nextLevel.className = "nextLevel";
nextLevel.id = "nextLevel";

nextLevel.addEventListener("click", () => {
  document.getElementById("gameBoard3").style.display = "flex";
  document.getElementById("gameBoard2").style.display = "none";
});

let listaPokemon = pokemon.items;
listaPokemon = shuffle(listaPokemon);
listaPokemon = recortarLista(listaPokemon, 6);
listaPokemon = shuffle(listaPokemon);
let cartasEscogidas = [];
let cards = [];
let paresEncontrados = 0;

const nivel2 = () => {
  for (let index = 0; index < listaPokemon.length; index++) {
    let card = document.createElement("div");
    card.className = "card2";
    card.id = listaPokemon.id;
    let imagenFrontal = document.createElement("img");
    imagenFrontal.src = "../img/QUEUE.png";
    imagenFrontal.className = "imagenFrontal2";

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
            reemplazoOne.className = "imagenFrontal2";

            let reemplazoTwo = cards[1].lastChild;
            reemplazoTwo.src = "../img/QUEUE.png";
            reemplazoTwo.className = "imagenFrontal2";
            cards.length = 0;
          }, 1000);
        }
      }
    });
    memoryGame.appendChild(card);

    gameBoard2.appendChild(gameContainer);
    gameContainer.appendChild(level1);
    level1.appendChild(textLevel1);
    gameContainer.appendChild(memoryGame);
    gameContainer.appendChild(modalNextLevel);
    modalNextLevel.appendChild(modalNextLevelText);
    modalNextLevel.appendChild(nextLevel);
    nextLevel.appendChild(textNextLevel);
    memoryGame.appendChild(card);
  }
  return gameBoard2;
};
export default nivel2;
