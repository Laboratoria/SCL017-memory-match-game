import emotions from '../data/emotions/emotions.js';



const App = () => {

  //                    LLAMAR IMAGENES NUESTRAS 
  let listEmotions = [];
  for (let i = 0; i < emotions.items.length; i++) {
    listEmotions.push(emotions.items[i], emotions.items[i]);
  }


  //                  BARAJAR CARTAS
  function shuffle(array) {
    let lastIndex = array.length -1;
    let value = array.length;
    while (lastIndex > 0) {
      let lastValue = array[lastIndex];
      let randonIndex = Math.floor(Math.random() * value);
      array[lastIndex] = array[randonIndex];
      array[randonIndex] = lastValue;
      lastIndex = lastIndex - 1;
      value = value - 1;
    }
    return array;
  }


listEmotions = shuffle(listEmotions);


  // CREAR LA PÁGINA DEL JUEGO
  let secondPage = document.createElement("div");
  secondPage.className = "secondPage";


  // CREAR TABLERO DE JUEGO
  let gameBoard = document.createElement("div");
  gameBoard.className = "game-Board";

// CREAMOS UN HEADER EN LA SEGUNDA PÁGINA
let divHeader = document.createElement('div');
divHeader.className= 'containerHeader';
divHeader.id= 'containerHeader';
let level= document.createElement('span');
level.className ='headerSecondPage';
let textHeader = document.createTextNode('NIVEL 1');

divHeader.appendChild(level);
level.appendChild(textHeader);
secondPage.appendChild(divHeader);
 

  // VARIABLES GLOBALES QUE USAREMOS
  let cardsFlipped = 0;
  let cartaOne = "";
  let cartaTwo = "";
  let cardsFound = 0;

// CREAMOS LAS CARTAS CON SUS IMÁGENES FRONTAL Y TRASERA
  let chosenCard = [];
  for (let i = 0; i < listEmotions.length; i++) {
    let card = document.createElement("div");
    card.id = listEmotions[i].id;
    chosenCard.push(card.id);

    card.className = "card";

    let imgFront = document.createElement("img");
    imgFront.id = listEmotions[i].id;
    imgFront.src = "./images/pregunta.png";
    imgFront.className = "img-front";
    card.appendChild(imgFront);

    let check = document.getElementsByClassName("card");
    let imgBack = document.createElement("img");
    card.appendChild(imgBack);

    imgFront.addEventListener("click", () => {
      card.removeChild(imgBack)

      let imagenId = imgFront.getAttribute("id");
      let image = listEmotions[i].image;

      imgBack.id = imagenId;
      imgBack.setAttribute("class", "img-back");
      imgBack.setAttribute("src", image);
      card.appendChild(imgBack);



      if (cardsFlipped < 2) {
        if (cardsFlipped == 0) {
          cartaOne = imagenId;
        }

        if (cardsFlipped == 1) {
          cartaTwo = imagenId;
        }

        card.style.transform = "rotateY(180deg)";
        cardsFlipped = cardsFlipped + 1;
        if (cardsFlipped == 2) {


          setTimeout(() => {

            if (cartaOne == cartaTwo) {
              cardsFound = cardsFound + 1;

  // CREAREMOS UNA CARTA INVISIBLE QUE REEMPLACE A LA QUE HAGA MATCH
              let cardImage = [];
              let substitutionOne = document.createElement("div");
              substitutionOne.className = "card-equal";
              let substitutionTwo = document.createElement("div");
              substitutionTwo.className = "card-equal";
              let substitution = [substitutionOne, substitutionTwo];
              let k = 0;


              for (let j = check.length-1; j > -1; j--) {
                cardImage[j] = check[j].getAttribute("id");
                if (cardImage[j] == cartaOne) {

                  gameBoard.replaceChild(substitution[k], check[j]);
                  k = k + 1;

                }
              }

              if (cardsFound == 9) {

// CREAMOS UNA VENTANA EN LA SEGUNDA PÁGINA PARA ESPECIFICAR EL NIVEL
let divWinner = document.createElement('div');
divWinner.className= 'containerWinnerMessage';
let imgWinner = document.createElement("img");
    imgWinner.src = "./images/felicidades.jpg";
    imgWinner.className = "imgWinner";
let replayButton = document.createElement("button");
    replayButton.innerHTML = "JUGAR OTRA VEZ";
    replayButton.className = "replay-button";
   
    replayButton.addEventListener("click", function() {
      location.reload();
    })
    divWinner.appendChild(imgWinner);
    divWinner.appendChild(replayButton);
secondPage.appendChild(divWinner);



     
              }
            }
            for (let cardd of check) {
              cardd.style.transform = "";

              cardsFlipped = 0;
            }
          }, 700);

        }

      }

    });

    gameBoard.appendChild(card);

  }

  secondPage.appendChild(gameBoard);

  return secondPage;
}

export default App;