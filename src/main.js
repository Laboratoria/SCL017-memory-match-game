import App from './components/App.js';

// Con estas funciones permitimos ocultar y mostrar paginas de la interfaz

document.getElementById("botonComprar").onclick=function(){

document.getElementById("pag2").style.display = "flex";

document.getElementById("pag1").style.display = "none";
}


document.getElementById("juegaAqui").onclick=function(){

         document.getElementById("pagFinal").style.display = "flex";               
        document.getElementById("pag2").style.display = "none";
 }
                
document.getElementById('root').appendChild(App());







