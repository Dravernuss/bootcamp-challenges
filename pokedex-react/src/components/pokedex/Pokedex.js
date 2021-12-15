import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./_Pokedex.scss";

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join("");

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemonsFromApi = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon").then(
      (res) => res.json()
    );

    response.results.forEach(async (poke) => {
      const response = await fetch(poke.url).then((res) => res.json());

      const newElement = {
        id: response.id,
        name: capitalize(response.name),
        image: response.sprites.back_default,
        ability: capitalize(response.abilities[0].ability.name),
      };

      setPokemons((oldPokemons) => [...oldPokemons, newElement]);
    });
  };

  useEffect(() => {
    getPokemonsFromApi();
  }, []);

  return (
    <div className="pokedex">
      {pokemons.map(({ image, name, ability, id }) => {
        return (
          <figure className="pokemon__container" key={id}>
            <img src={image} alt={name} />
            <figcaption>
              <Link to={`/pokemon/${id}`}>
                <p>{name}</p>
              </Link>
              <p>{ability}</p>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
};

export default Pokedex;
