import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./_Pokemon.scss";

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join("");

const Pokemon = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState([]);
  console.log("Primer render");

  const getPokemonFromApi = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    ).then((res) => res.json());
    console.log(response);

    const newElement = {
      id: response.id,
      name: capitalize(response.name),
      image: response.sprites.back_default,
      height: response.height,
      ability: capitalize(response.abilities[0].ability.name),
    };

    setPokemon(newElement);
  };

  useEffect(() => {
    getPokemonFromApi();
  }, []);

  return (
    <div className="pokemon">
      <h1>Id: {pokemonId} </h1>
      <h1>Name: {pokemon.name}</h1>
      <h1>Height: {pokemon.height}</h1>
    </div>
  );
};

export default Pokemon;
