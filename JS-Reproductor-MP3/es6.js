class Reproductor{
    constructor(){
        this.nombreAudio = document.getElementById("mp3");
        this.botonPlay = document.getElementById("play");
        this.botonPause =document.getElementById("pause");
    }

    play(){
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

    iniciar(){
        this.play();
        console.log("Reproduciendo por ES6");
    };
    
}
