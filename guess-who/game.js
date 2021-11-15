function random(max){
    return Math.floor(Math.random()*max);
};

class Game{
    constructor(){
        this.characters = generatedCharacters;
        this.selectedCharacter = null;
        this.randomCharacterIndex = random(this.characters.length)
    
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
        this.selectedCharacter  = this.characters[this.randomCharacterIndex];
        this.createSelectedCharacterCard();
    }

    start(){
        this.selectRandomCharacter();
        console.log("Se selecciono: ", this.selectedCharacter);
    }
}

const game = new Game();

game.start();