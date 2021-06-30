import pokemon from "../data/pokemon/pokemon.js"; 

function recortarLista(lista) {// Solo se mostrarán 3 elementos del array de pokemones 
  const listaRecortada = [];
  for (let index = 0; index < 3; index++) {
    const element = lista[index];
    listaRecortada.push(element, element); //aquí se duplica un elemento de la lista, hasta llegar al index 3 (los tres primeros elemento
  }
  return listaRecortada;
}
function match (cartasEscogidas,cards) {
  if(cartasEscogidas[0] == cartasEscogidas[1]) {
    paresEncontrados = paresEncontrados +1;
    for (let index = cartasEscogidas.length -1; index > -1; index--) {
      cards[index].style.visibility = "hidden"; 
      }
      if(paresEncontrados === 3){
        document.getElementById("nextLevel").style.display = "block";
       }
    }
      cartasEscogidas.length = 0;
   } 
const shuffle = (arr) =>{// Función para barajear las cartas 
    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) );
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    return arr;    
  }
/* Creación de contenedores de juego */
const gameBoard = document.createElement("div"); //Aquí creamos el contenedor padre que anexa a todos los contenedores hijos
gameBoard.className = ("contenedor"); // Le damos un class al contenedor para darle estilo con CSS
gameBoard.id = ("gameBoard");// y le damos un id para poder tener el nombre del contenedor
gameBoard.style.display = ("none");//indicamos como queremos que se muestre en el navegador. En este caso queremos que esté escondido hasta que lo llamemos
 
const gameContainer = document.createElement("div"); // Aquí creamos el elemento que va a contener el juego y que será hijo del elemento anterior
gameContainer.className = ("containerBox1");
gameContainer.id = ("gameContainer");
 
const level1 = document.createElement("div");
const textLevel1 = document.createTextNode("Nivel 1");
level1.className = ("nivel1");
level1.id = ("nivel1");
 
const memoryGame = document.createElement("div"); 
memoryGame.className = ("memoryGame");
memoryGame.id = ("memoryGame");
 
const nextLevel = document.createElement("button");
nextLevel.style.display = ("none");
const textNextLevel = document.createTextNode ("SIGUIENTE NIVEL");
nextLevel.className = ("nextLevelText");
nextLevel.id = ("nextLevel");

// con este evento pasamos de nivel 1 a 2
nextLevel.addEventListener("click", ()=> {
  document.getElementById("root2").style.display=("flex");
  document.getElementById("gameBoard2").style.display=("flex");
  document.getElementById("root").style.display=("none");
}); 
 
// funcionamiento del juego
let listaPokemon = pokemon.items; // esto lo del for ya recorrido
listaPokemon = shuffle(listaPokemon); // toma la lista y la barajea 
listaPokemon = recortarLista(listaPokemon, 3);// recorta esa lista a solo 3 item y los hace doble 
listaPokemon = shuffle(listaPokemon); // vuelve a barajear lo anterior.
let cartasEscogidas = [];
let cards = [];
let paresEncontrados = 0;
 
const App = () => {
  for (let index = 0; index < listaPokemon.length; index++) {
    let card = document.createElement ("div");
    card.className = ("card");
    card.id = listaPokemon.id;
    let imagenFrontal = document.createElement ("img"); 
    imagenFrontal.src = "../img/QUEUE.png";
    imagenFrontal.className ="imagenFrontal";
    
    card.appendChild(imagenFrontal);
  
    imagenFrontal.addEventListener("click", ()=> {
    if (cartasEscogidas.length < 2){     
      imagenFrontal.src = listaPokemon[index].image;
      imagenFrontal.className ="imagenPokemon";
      card.appendChild(imagenFrontal);
      cartasEscogidas.push(listaPokemon[index].id);
      cards.push(card);
      
    if (cartasEscogidas.length == 2){
      setTimeout(()=>{
      match(cartasEscogidas,cards)
      let reemplazoOne = cards[0].lastChild;
    reemplazoOne.src = "../img/QUEUE.png";
    reemplazoOne.className = "imagenFrontal";

    let reemplazoTwo = cards[1].lastChild;
    reemplazoTwo.src = "../img/QUEUE.png";
    reemplazoTwo.className = "imagenFrontal";
    cards.length = 0;
    },1000);
    } 
    }
    }); 

// Aquí anexamos todos los contenedores padres a sus respectivos contenedores hijos
  gameBoard.appendChild(gameContainer);
  gameContainer.appendChild(level1);
  level1.appendChild(textLevel1);
  gameContainer.appendChild(memoryGame);
  gameBoard.appendChild(gameContainer);
  gameContainer.appendChild(nextLevel);
  nextLevel.appendChild(textNextLevel);
  memoryGame.appendChild(card);
}  
  return gameBoard;
}

 export default App;
