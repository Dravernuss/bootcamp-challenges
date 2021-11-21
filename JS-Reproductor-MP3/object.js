const ReproductorObjeto = {
    botonPlay: document.getElementById("play"),
    botonPause:document.getElementById("pause"),
    nombreAudio: document.getElementById("mp3"),

    play: function(){

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
    },

    start: function(){
        this.play();
        console.log("Reproduciendo por Objeto");
    }
}