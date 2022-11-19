import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import styles from "../styles/Home.module.css";
const fetch = require('node-fetch2');

function Home() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nbClickStart, setNbClickStart] = useState(1);

  console.log("pokemonData", pokemonData);

  const getPokemons = async () => {
    const newPokemonsArray = [];
    for (let i = nbClickStart; i < nbClickStart + 15; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      newPokemonsArray.push(data);
    }
    setPokemonData([...pokemonData, ...newPokemonsArray]);
  };

  useEffect(() => {
    getPokemons();
  }, [nbClickStart]);

  const pokeMap = pokemonData.map((data, i) => {

  const pokeNameMaj = data.name.charAt(0).toUpperCase()
  + data.name.slice(1)

    return (
      <Pokemon
        key={i}
        pokemonType={data.types[0].type.name}
        image={data.sprites.front_default}
        name={pokeNameMaj}
        type={data.types[0].type.name}
      />
    );
  });
  return (
    <div>
      <h1 className={styles.h1}>Pokedex</h1>

      <div className={styles.pokemonContainer}>{pokeMap}</div>

      <button
        onClick={() => setNbClickStart(nbClickStart + 15)}
        className={styles.next}
      >
        Next
      </button>
    </div>
  );
}

export default Home;
