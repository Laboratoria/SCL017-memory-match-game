import App from "./components/App.js";
import nivel2 from "./components/nivel2.js";
import nivel3 from "./components/nivel3.js";

// Con estas funciones permitimos ocultar y mostrar paginas de la interfaz

document.getElementById("botonComprar").onclick = function () {
  document.getElementById("pag2").style.display = "flex";
  document.getElementById("pag1").style.display = "none";
};

document.getElementById("juegaAqui").onclick = function () {
  document.getElementById("gameBoard").style.display = "flex";
  document.getElementById("pag2").style.display = "none";
};

document.getElementById("root").appendChild(App());
document.getElementById("root").appendChild(nivel2());
document.getElementById("root").appendChild(nivel3());
