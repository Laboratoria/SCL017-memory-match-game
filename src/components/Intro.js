import GameDisplay from './GameDisplay.js'


const Intro = () => {

    // funcion de click jugar
    const play = () => {
        // se esconde caja de intro
        introBox.style.display = 'none';

        // archivo GameDisplay en acción
        document.getElementById('root').appendChild(GameDisplay());
    }
    
    const content = document.createElement('div');
    const header = document.createElement('header');
    header.className = 'header';
    content.appendChild(header);

    const introBox = document.createElement('section');
    introBox.className = 'introBox';
    content.appendChild(introBox); //introBox es hijo de content

    const castle = document.createElement('img');
    castle.className = 'castleOne';
    castle.src = '/images/castleplay.png';
    castle.addEventListener('click', play);
    introBox.appendChild(castle);   //castillo es hijo de introbox

    // const btn = document.createElement('button');
    // btn.innerHTML = 'Jugar';
    // btn.className = 'buttonPlay';
    // introBox.appendChild(btn);  //btn es hijo de introBox

    
    return content;

};

export default Intro;