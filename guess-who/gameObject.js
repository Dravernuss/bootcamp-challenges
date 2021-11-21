const random = (max) => {
    return Math.floor(Math.random() * max);
  };
  
  const Game = {
    characters: generatedCharacters,
    selectedCharacter: null,
    onCharacterClicked: function (event) {
      event.target.classList.add("hide");
    },
    handleCharacters: function () {
      document.querySelectorAll(".character").forEach((character, index) => {
        character.id = this.characters[index].name;
        character.addEventListener("click", this.onCharacterClicked);
      });
    },
    createSelectedCharacterCard: function () {
      const character = document.getElementById(this.selectedCharacter.name);
      const position = window.getComputedStyle(character)["background-position"];
      document.getElementById("selected").style.backgroundPosition = position;
    },
    selectRandomCharacter: function () {
      const randomCharacterIndex = random(this.characters.length);
      this.selectedCharacter = this.characters[randomCharacterIndex];
    },
    start: function () {
      this.handleCharacters();
      this.selectRandomCharacter();
      console.log("Se seleccionó:", this.selectedCharacter);
      this.createSelectedCharacterCard();
    },
  };