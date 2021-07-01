import pokemon from "../data/pokemon/pokemon.js";

// En nivel 3 todos los elementos
function recortarLista(lista) {
  const listaRecortada = [];
  for (let index = 0; index < 9; index++) {
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
    if (paresEncontrados === 9) {
      document.getElementById("pagFinal").style.display = "flex";
      document.getElementById("gameBoard3").style.display = "none";
    }
  }
  cartasEscogidas.length = 0;
}

const shuffle = (arr) => {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const gameBoard3 = document.createElement("div"); 
gameBoard3.className = "contenedor"; 
gameBoard3.id = "gameBoard3"; 
gameBoard3.style.display = "none";

const gameContainer = document.createElement("div");
gameContainer.className = "containerBox1";
gameContainer.id = "gameContainer3";

const level1 = document.createElement("div");
const textLevel1 = document.createTextNode("NIVEL 3");
level1.className = "nivel3";
level1.id = "nivel1";

const memoryGame = document.createElement("div");
memoryGame.className = "memoryGame3";
memoryGame.id = "memoryGame";

const nextLevel = document.createElement("button");
nextLevel.style.display = "none";
const textNextLevel = document.createTextNode("¡SIGUIENTE NIVEL!");
nextLevel.className = "nextLevel";
nextLevel.id = "nextLevel3";

nextLevel.addEventListener("click", () => {
  document.getElementById("pagFinal").style.display = "flex";
});


let listaPokemon = pokemon.items; 
listaPokemon = shuffle(listaPokemon); 
listaPokemon = recortarLista(listaPokemon, 9); 
listaPokemon = shuffle(listaPokemon); 
let cartasEscogidas = [];
let cards = [];
let paresEncontrados = 0;

const nivel3 = () => {
  for (let index = 0; index < listaPokemon.length; index++) {
    let card = document.createElement("div");
    card.className = "card3";
    card.id = listaPokemon.id;
    let imagenFrontal = document.createElement("img");
    imagenFrontal.src = "../img/QUEUE.png";
    imagenFrontal.className = "imagenFrontal3";

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
            reemplazoOne.className = "imagenFrontal3";

            let reemplazoTwo = cards[1].lastChild;
            reemplazoTwo.src = "../img/QUEUE.png";
            reemplazoTwo.className = "imagenFrontal3";
            cards.length = 0;
          }, 1000);
        }
      }
    });
    memoryGame.appendChild(card);

    
    gameBoard3.appendChild(gameContainer);
    gameContainer.appendChild(level1);
    level1.appendChild(textLevel1);
    gameContainer.appendChild(memoryGame);
    gameContainer.appendChild(nextLevel);
    nextLevel.appendChild(textNextLevel);
  }
  return gameBoard3;
};
export default nivel3;
