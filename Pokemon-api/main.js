const myApp = document.getElementById('app');
const pokemonsContainer = document.createElement('div');
let pokemons = [];

const createPokemonHtml = ({ url, name }) => {
  const pokemonContainer = document.createElement('div');
  pokemonContainer.classList.add('pokemon');

  const pokemonTipoHTML = document.createElement('p');
  const pokemonImageHTML = document.createElement('img');
  const pokemonNameHTML = document.createElement('p');
  pokemonImageHTML.classList.add('pokemon__image');
  const linkprueba = document.createElement("a");
  linkprueba.innerText = "Details";
  linkprueba.setAttribute("href", `info.html?name=${name}`);

  /*fetch(`${url}`)
    .then(response => response.json())
    .then(json =>{ 
        // console.log(json);
        
        pokemonAbilityHTML.innerText = json.abilities[0].ability.name;
        pokemonNameHTML.innerText = name.toUpperCase();
        pokemonImageHTML.setAttribute("src",json.sprites.front_default);
        pokemonContainer.append(pokemonImageHTML, pokemonNameHTML, pokemonAbilityHTML);
        // console.log(pokemonAbilityHTML);
        // console.log(pokemonNameHTML);
        // console.log(pokemonImageHTML);
    })
    .catch((e) => console.log(e));
    return pokemonContainer;*/

  const getInfo = async () => {
    const response = await fetch(`${url}`);
    const json = await response.json();
    // console.log(json);

    if (json.types.length === 2) {
      pokemonTipoHTML.innerText = "Type: " + json.types[0].type.name.charAt(0).toUpperCase() + json.types[0].type.name.slice(1) + " / "
        + json.types[1].type.name.charAt(0).toUpperCase() + json.types[1].type.name.slice(1);
    } else {
      pokemonTipoHTML.innerText = "Type: " + json.types[0].type.name.charAt(0).toUpperCase() + json.types[0].type.name.slice(1)
    }

    //pokemonAbilityHTML.innerText = json.abilities[0].ability.name;
    pokemonNameHTML.innerText = "#"+json.id+".- "+name.toUpperCase();
    pokemonImageHTML.setAttribute("src", json.sprites.front_default);
    // console.log(pokemonAbilityHTML);
    // console.log(pokemonNameHTML);
  }
  getInfo();
  pokemonContainer.append(pokemonImageHTML, pokemonNameHTML, pokemonTipoHTML, linkprueba);
  return pokemonContainer;
};

const pokemonsHTML = (pokemons = []) => {
  pokemons.forEach(pokemon => {
    const pokemonHtml = createPokemonHtml(pokemon);
    pokemonsContainer.append(pokemonHtml);
  });
};

/* const init = () =>{
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
      .then(response => response.json())
      .then(json =>{ 
        pokemons = [...json.results];
        // console.log(pokemons);
        pokemonsContainer.classList.add('pokemonsContainer');
        myApp.append(pokemonsContainer);
        pokemonsHTML(pokemons);
      })
      .catch((e) => console.log(e));
}; */


const init = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=891');
  const pokemons = await response.json();
  // console.log(pokemons.results);
  pokemonsContainer.classList.add('pokemonsContainer');
  myApp.append(pokemonsContainer);
  pokemonsHTML(pokemons.results);

  /*const getServerData = async url =>{
    const response = await fetch(url);
  
    if(response.ok){
      return response.json();
    }else{
      throw Error(response.status);
    }
  }; 

   try{
    pokemons = await getServerData(
      'https://pokeapi.co/api/v2/pokemon/?limit=20'
    );
    pokemonsContainer.classList.add('pokemonsContainer');
    myApp.append(pokemonsContainer);
    pokemonsHTML(pokemons.results);
  }catch(e){
    const error = document.createElement('p');
    error.innerText = `${e} - No fue posible obtener los pokemones`;
    myApp.append(error);
  } */
};


init();