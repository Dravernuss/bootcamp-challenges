const botonPlay=document.getElementById("play");
const botonPause=document.getElementById("pause");
const nombreAudio = document.getElementById("mp3");

const play = ()=>{
    botonPlay.addEventListener('click',()=>{
        nombreAudio.play();
        console.log(`Reproduciendo: ${nombreAudio.src}`)
        botonPlay.style.display="none"
        botonPause.style.display="block"
    });
    botonPause.addEventListener("click",()=>{
       nombreAudio.pause();
       console.log(`Se detuvo la cancion`)
       botonPlay.style.display="block"
       botonPause.style.display="none"
    }); 
};

const start = () =>{
    play();
    console.log("Reproduciendo por funciones");
}
