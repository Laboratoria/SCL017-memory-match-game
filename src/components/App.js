//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// import pokemon from '../data/pokemon/pokemon.js';
// console.log(pokemon);
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//


import pokemon from "../data/pokemon/pokemon.js";
console.log(pokemon);


const App = () => {
  const gameBoard = document.createElement("div"); //Aquí creamos el contenedor padre que anexa a todos los contenedores hijos
  gameBoard.className = ("contenedor"); // Le damos un class al contenedor para darle estilo con CSS
  gameBoard.id = ("gameBoard");// y le damos un id para poder tener el nombre del contenedor
  gameBoard.style.display = ("none");

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

  const nextLevel = document.createElement("div");
  nextLevel.style.display = ("none");
  const textNextLevel = document.createTextNode ("¡LO LOGRASTE!")
  nextLevel.className = ("nextLevelText");

  

// Aquí anexamos todos los contenedores padres a sus respectivos contenedores hijos
  gameBoard.appendChild(gameContainer);
  gameContainer.appendChild(level1);
  level1.appendChild(textLevel1);
  gameContainer.appendChild(memoryGame);
  gameContainer.appendChild(nextLevel);
  nextLevel.appendChild(textNextLevel);


  return gameBoard;
};




export default App;
// import pokemon from "../data/pokemon/pokemon.js";

// const App = () => {
//   const mostrarGameBoard = document.createElement("div");
//   mostrarGameBoard.className = "listaDePokemones";

//   let lista = recortarLista(pokemon.items, 3);
//   shuffle(lista);
//   let cartasEscogidas = [];

//   function flipCard(target) {
//     cartasEscogidas.push(target);
//     if(cartasEscogidas.length === 2) {
//       setTimeout(match, 1000);
//     }
//     console.log(target);
//     console.log(cartasEscogidas)
//   }
  
//   function match () {
//     if(cartasEscogidas[0] === cartasEscogidas[1]) {
//       alert('hiciste match');
//     } else {
//       alert('te equivocaste');
//       cartasEscogidas.length = 0;
//     }
//   }

//   for (let i = 0; i < lista.length; i++) {
  
//     let card = document.createElement("div");
//     card.className = "card";
//     let imageFront = document.createElement("img");
//     imageFront.id = i+"";
//     imageFront.src = "ImageFront1.png";
//     imageFront.classname = "cardFrontImage";
//     card.appendChild(imageFront);

//     let imagenBack = document.createElement('img');
//     imagenBack.id = i;
//     let cardId = imagenBack.id;
//     imagenBack.className = "card-back-img";
    
//     imagenBack.setAttribute("src", lista[cardId].image);
//     card.appendChild(imagenBack);

//     card.addEventListener("click", (event)=> {
//       card.classList.toggle('is-flipped');
//       flipCard(event.target);
//     });        
//   mostrarGameBoard.appendChild(card)
//   }
//   // return mostrarGameBoard;
// };

// function recortarLista(lista) {
//   const listaRecortada = [];
//   for (let index = 0; index < 3; index++) {
//     const element = lista[index];
//     listaRecortada.push(element, element); //aquí se duplica un elemento de la lista, hasta llegar al index 3 (los tres primeros elemento
//   }
//   return listaRecortada;
// }
// const shuffle = (arr) =>{
//     for(var i =arr.length-1 ; i>0 ;i--){
//         var j = Math.floor( Math.random() * (i + 1) );
//         [arr[i],arr[j]]=[arr[j],arr[i]];
//     }
//     //return arr;    

//   }
// /*let im =  shuffle;



//   )
// }*/

// export default App;
