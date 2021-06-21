import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import PokemonOne from './Components/PokemonOne';
import PokemonTwo from './Components/PokemonTwo';

function App() {
  const [pokemonOne, setPokemonOne] = useState({});
  const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/';
  const randomPokemon = Math.floor(Math.random() * 899);

  useEffect(() => {
    axios.get(pokemonURL + randomPokemon).then(res => {
      setPokemonOne({
        name: res.data.name,
        sprite: res.data.sprites.front_default,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defence: res.data.stats[2].base_stat,
        specialAttack: res.data.stats[3].base_stat,
        specialDefence: res.data.stats[4].base_stat,
        speed: res.data.stats[5].base_stat
      });
    })
  }, []);

  return (
    <PokemonOne pokemonOne={pokemonOne}/>
  );
}

export default App;
