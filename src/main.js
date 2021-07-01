import App from './components/App.js';
import App2 from './components/App2.js';
import App3 from './components/App3.js';

// Con estas funciones permitimos ocultar y mostrar paginas de la interfaz

document.getElementById("botonComprar").onclick=function(){

document.getElementById("pag2").style.display = "flex";

document.getElementById("pag1").style.display = "none";
}


document.getElementById("juegaAqui").onclick=function(){
       document.getElementById("gameBoard").style.display = "flex";               
    document.getElementById("pag2").style.display = "none";
}
 


document.getElementById('root').appendChild(App());
document.getElementById('root').appendChild(App2());
document.getElementById('root').appendChild(App3());







