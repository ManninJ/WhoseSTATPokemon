import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import PokemonOne from './Components/PokemonOne';
import PokemonTwo from './Components/PokemonTwo';

function App() {
  const [score, setScore] = useState(0);
  const [pokemonOne, setPokemonOne] = useState({});
  const [pokemonTwo, setPokemonTwo] = useState({});
  const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/';
  const randomPokemonOne = Math.floor(Math.random() * 898) + 1;
  const randomPokemonTwo = Math.floor(Math.random() * 898) + 1;
  let stat = "";
  const randomStat = Math.floor(Math.random() * 6);

  useEffect(() => {
    axios.get(pokemonURL + randomPokemonOne).then(res => {
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

    axios.get(pokemonURL + randomPokemonTwo).then(res => {
      setPokemonTwo({
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

  switch(randomStat) {
    case 0:
      stat = "HP";
      break;
    case 1:
      stat = "Attack";
      break;
    case 2:
      stat = "Defence";
      break;
    case 3:
      stat = "Special Attack";
      break;
    case 4:
      stat = "Special Defence";
      break;
    case 5:
      stat = "Speed";
      break;
    default:
      stat = "";
  }

  return (
    <div>
      <div className="header">
        <h1>Who's STAT Pokémon?!</h1>
      </div>
      <div className="stat">
        <h3>Which of these two Pokémon has the higher:</h3>
        <h2>{stat}</h2>
      </div>
      <div className='Pokemon_Cards'>
        <div className='Pokemon_One'>
          <button className="Pokemon_One_Button">
            <PokemonOne pokemonOne={pokemonOne} />
          </button>
        </div>
        <div className='Pokemon_Two'>
          <button className="Pokemon_Two_Button">
            <PokemonTwo pokemonTwo={pokemonTwo} />
          </button>
        </div>
      </div>
      <div className="Score">
          <h4>Score: {score}</h4>
      </div>
      <div className="Credits">
        <p>Made by Jason Mannin / KryllYGO <br /> <br />
        This is a purely educational project. <br />
        Not affiliated with Pokémon in any way.</p>
      </div>
    </div>
  );
}

export default App;
