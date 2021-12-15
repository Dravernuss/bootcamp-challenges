
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


  const getInfo = async () => {
    const response = await axios.get(`${url}`);
    const posts = await response.data;
    // console.log(posts);

    if (posts.types.length === 2) {
      pokemonTipoHTML.innerText = "Type: " + posts.types[0].type.name.charAt(0).toUpperCase() + posts.types[0].type.name.slice(1) + " / "
        + posts.types[1].type.name.charAt(0).toUpperCase() + posts.types[1].type.name.slice(1);
    } else {
      pokemonTipoHTML.innerText = "Type: " + posts.types[0].type.name.charAt(0).toUpperCase() + posts.types[0].type.name.slice(1)
    }

    pokemonNameHTML.innerText = "#"+posts.id+".- "+name.toUpperCase();
    pokemonImageHTML.setAttribute("src", posts.sprites.front_default);

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

const init = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20');
  const pokemons = await response.data;
  console.log(pokemons.results);
  pokemonsContainer.classList.add('pokemonsContainer');
  myApp.append(pokemonsContainer);
  pokemonsHTML(pokemons.results);

};


init();