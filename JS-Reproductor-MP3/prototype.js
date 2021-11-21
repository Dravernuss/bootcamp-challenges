const ReproductorPrototype = function(){
    this.nombreAudio = document.getElementById("mp3");
}

ReproductorPrototype.prototype.play = function(){
    const botonPlay=document.getElementById("play");
    const botonPause=document.getElementById("pause");

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
}

ReproductorPrototype.prototype.start = function(){
    this.play();
    console.log("Reproduciendo por Prototype")
}