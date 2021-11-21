const random = (max) => {
    return Math.floor(Math.random() * max);
  };
  
  const Reproductor = function () {
   // selecciono a traves el audio 
  };
  
  Reproductor.prototype.play = function (event) {
   // play al audio
  };
  
  Game.prototype.handleCharacters = function () {
    document.querySelectorAll(".character").forEach((character, index) => {
      character.id = this.characters[index].name;
      character.addEventListener("click", this.onCharacterClicked);
    });
  };
  
  Game.prototype.createSelectedCharacterCard = function () {
    const character = document.getElementById(this.selectedCharacter.name);
    const position = window.getComputedStyle(character)["background-position"];
    document.getElementById("selected").style.backgroundPosition = position;
  };
  
  Game.prototype.selectRandomCharacter = function () {
    const randomCharacterIndex = random(this.characters.length);
    this.selectedCharacter = this.characters[randomCharacterIndex];
  };
  
  Game.prototype.start = function () {
    this.selectRandomCharacter();
    console.log("Se seleccionó:", this.selectedCharacter);
    this.createSelectedCharacterCard();
  };