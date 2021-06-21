import App from './components/App.js';

document.getElementById("botonComprar").onclick=function(){

document.getElementById("pag2").style.display = "none";

document.getElementById("pag1").style.display = "flex";
}


document.getElementById('root').appendChild(App());

