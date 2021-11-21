const random = (max) => {
    return Math.floor(Math.random() * max);
  };
  
  const characters = generatedCharacters;
  let selectedCharacter = null;
  
  const onCharacterClicked = (event) => {
    event.target.classList.add("hide");
  };
  
  const handleCharacters = () => {
    document.querySelectorAll(".character").forEach((character, index) => {
      character.id = characters[index].name;
      character.addEventListener("click", onCharacterClicked);
    });
  };
  
  const createSelectedCharacterCard = () => {
    const character = document.getElementById(selectedCharacter.name);
    const position = window.getComputedStyle(character)["background-position"];
    document.getElementById("selected").style.backgroundPosition = position;
  };
  
  const selectRandomCharacter = () => {
    const randomCharacterIndex = random(characters.length);
    selectedCharacter = characters[randomCharacterIndex];
  };
  
  const removeHideClasses = () => {
    document.querySelectorAll(".hide").forEach((element) => {
      element.classList.remove("hide");
    });
  };
  
  const start = () => {
    removeHideClasses();
    handleCharacters();
    selectRandomCharacter();
    console.log("Se seleccionó:", selectedCharacter);
    createSelectedCharacterCard();
  };