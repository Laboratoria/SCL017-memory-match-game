import App from './components/App.js';



document.getElementById('buttonPlay').addEventListener("click", ()=>{
    document.getElementById("firstPage").style.display = "none";
    
    document.getElementById("container").appendChild(App());
});

