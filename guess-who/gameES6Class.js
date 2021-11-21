const random = (max) => {
    return Math.floor(Math.random()*max);
};

class Game{
    constructor(){
        this.characters = generatedCharacters;
        this.selectedCharacter = null;
        this.handleCharacters()
    }

    onCharacterClicked(event){
        event.target.classList.add("hide");
    } 

    handleCharacters(){
        document.querySelectorAll(".character").forEach((character, index) =>{
            character.id = this.characters[index].name;
            character.addEventListener("click",this.onCharacterClicked);
        });
    }

    createSelectedCharacterCard(){
        const character = document.getElementById(this.selectedCharacter.name);
        const position = window.getComputedStyle(character)["background-position"];
        document.getElementById("selected").style.backgroundPosition = position;
    }

    selectRandomCharacter(){
        const randomCharacterIndex = random(this.characters.length);
        this.selectedCharacter = this.characters[randomCharacterIndex];
    }

    removeHideClasses() {
        document.querySelectorAll(".hide").forEach((element) => {
          element.classList.remove("hide");
        });
      }

    start(){
        this.removeHideClasses();
        this.selectRandomCharacter();
        console.log("Se seleccionó:", this.selectedCharacter);
        this.createSelectedCharacterCard();
    }

    removeSelectedCard() {
        document.getElementById("selected")?.remove();
      }

    seleccionarPersonaje() {
        alert("Selecciona el jugador dado su color de cabello");
        const hairColor = this.selectedCharacter.hairColor;
        const response = prompt(
          `El color del cabello del personaje es ${hairColor}. Cual es el jugador?`
        );
        if (
          response &&
          response.toLowerCase().replaceAll(" ", "") === this.selectedCharacter.name
        ) {
          alert("Ganastee");
        } else {
          const mensaje = "El jugador era: " + this.selectedCharacter.name;
          const mensajeES6 = `El jugador era ${this.selectedCharacter.name.toUpperCase()}`;
          alert(mensajeES6);
        }
      }
    
      game2() {
        console.clear();
        this.removeHideClasses();
        this.removeSelectedCard();
        this.selectRandomCharacter();
    
        setTimeout(this.seleccionarPersonaje.bind(this), 500);
      }   
}

const game = new Game();

game.start();