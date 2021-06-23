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

const App = () => {
  const mostrarGameBoard = document.createElement("div");
  mostrarGameBoard.className = "listaDePokemones";

  let lista = recortarLista(pokemon.items, 3);
  shuffle(lista);
  let cartasEscogidas = [];

  function flipCard(target) {
    cartasEscogidas.push(target);
    if(cartasEscogidas.length === 2) {
      setTimeout(match, 1000);
    }
    console.log(target);
    console.log(cartasEscogidas)
  }
  
  function match () {
    if(cartasEscogidas[0] === cartasEscogidas[1]) {
      alert('hiciste match');
    } else {
      alert('te equivocaste');
      cartasEscogidas.length = 0;
    }
  }

  for (let i = 0; i < lista.length; i++) {
  
    let card = document.createElement("div");
    card.className = "card";
    let imageFront = document.createElement("img");
    imageFront.id = i+"";
    imageFront.src = "ImageFront1.png";
    imageFront.classname = "cardFrontImage";
    card.appendChild(imageFront);

    let imagenBack = document.createElement('img');
    imagenBack.id = i;
    let cardId = imagenBack.id;
    imagenBack.className = "card-back-img";
    
    imagenBack.setAttribute("src", lista[cardId].image);
    card.appendChild(imagenBack);

    card.addEventListener("click", (event)=> {
      card.classList.toggle('is-flipped');
      flipCard(event.target);
    });        
  mostrarGameBoard.appendChild(card)
  }
  // return mostrarGameBoard;
};

function recortarLista(lista) {
  const listaRecortada = [];
  for (let index = 0; index < 3; index++) {
    const element = lista[index];
    listaRecortada.push(element, element); //aquí se duplica un elemento de la lista, hasta llegar al index 3 (los tres primeros elemento
  }
  return listaRecortada;
}
const shuffle = (arr) =>{
    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) );
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
    //return arr;    

  }
/*let im =  shuffle;



  )
}*/

export default App;
