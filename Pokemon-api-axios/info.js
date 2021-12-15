
const myInfo = document.getElementById('info');
const pokemonInformation = document.createElement('div');
const params = window.location.search;
const urlParams = new URLSearchParams(params);
const pokeName = urlParams.get('name');
//console.log(pokeName);

const createInfoHtml = ({ abilities, weight, height, sprites, types }) => {
    const pokemonInfoContainer = document.createElement('div');
    pokemonInfoContainer.classList.add('pokemon');

    const pokemonNameHTML = document.createElement('p');
    const pokemonAbility1HTML = document.createElement('p');
    const pokemonAbility2HTML = document.createElement('p');
    const pokemonWeightHTML = document.createElement('p');
    const pokemonHeightHTML = document.createElement('p');
    const NormalFormHTML = document.createElement('span');
    const ShinyFormHTML = document.createElement('span');
    const EspacioHTML = document.createElement('span');
    const pokemonFrontNormalHTML = document.createElement('img');
    const pokemonBackNormalHTML = document.createElement('img');
    const pokemonFrontShinyHTML = document.createElement('img');
    const pokemonBackShinyHTML = document.createElement('img');
    const pokemonTipoHTML = document.createElement('p');

    NormalFormHTML.innerText="Normal Form:\n"
    EspacioHTML.innerText="\n"
    ShinyFormHTML.innerText="Shiny Form:\n"

    pokemonNameHTML.innerText = pokeName.toUpperCase();
    pokemonNameHTML.id = "Titulo";

    if(abilities.length > 1){
        pokemonAbility1HTML.innerText = "Abilities: \n\n- "+ abilities[0].ability.name.charAt(0).toUpperCase()+abilities[0].ability.name.slice(1);
        pokemonAbility2HTML.innerText =  " - "+abilities[1].ability.name.charAt(0).toUpperCase()+abilities[1].ability.name.slice(1);
    }else{
        pokemonAbility1HTML.innerText = "Abilities: \n\n- "+ abilities[0].ability.name.charAt(0).toUpperCase()+abilities[0].ability.name.slice(1);
    }

    pokemonWeightHTML.innerText = "Weight: " + weight;
    pokemonHeightHTML.innerText = "Height: " + height;
    pokemonFrontNormalHTML.setAttribute("src", sprites.front_default);
    pokemonFrontShinyHTML.setAttribute("src", sprites.front_shiny);
    pokemonBackNormalHTML.setAttribute("src", sprites.back_default);
    pokemonBackShinyHTML.setAttribute("src", sprites.back_shiny);

    if (types.length === 2) {
        pokemonTipoHTML.innerText = "Type: " + types[0].type.name.charAt(0).toUpperCase()  +types[0].type.name.slice(1)  + " / "
         + types[1].type.name.charAt(0).toUpperCase() +types[1].type.name.slice(1);
    } else {
        pokemonTipoHTML.innerText = "Type: " + types[0].type.name.charAt(0).toUpperCase()  +types[0].type.name.slice(1)
    }

    pokemonInfoContainer.append(pokemonNameHTML, NormalFormHTML, pokemonFrontNormalHTML, pokemonBackNormalHTML,
        EspacioHTML,ShinyFormHTML, pokemonFrontShinyHTML, pokemonBackShinyHTML, pokemonTipoHTML,
        pokemonWeightHTML, pokemonHeightHTML,pokemonAbility1HTML, pokemonAbility2HTML);
    return pokemonInfoContainer;
};


const init = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    const information = await response.data;
    //console.log(pokemons);
    pokemonInformation.classList.add('pokemonInformation');
    myInfo.append(pokemonInformation);


    const informationHtml = createInfoHtml(information);
    pokemonInformation.append(informationHtml);
}


init();