import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import PokemonOne from './Components/PokemonOne';
import PokemonOneResult from './Components/PokemonOneResult';
import PokemonTwo from './Components/PokemonTwo';
import PokemonTwoResult from './Components/PokemonTwoResult';
import StartScreen from './Components/StartScreen';
import LoseScreen from './Components/LoseScreen';

function App() {
  const [inGame, setInGame] = useState("No");
  const [page, setPage] = useState("Start");
  const [score, setScore] = useState(0);
  const [prevScore, setPrevScore] = useState(0);
  const [tie, setTie] = useState(0);
  const [beatHighScore, setBeatHighScore] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [pokemonOne, setPokemonOne] = useState({});
  const [pokemonTwo, setPokemonTwo] = useState({});
  const [randomStat, setRandomStat] = useState(Math.floor(Math.random() * 6));
  const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/';
  const [randomPokemonOne, setRandomPokemonOne] = useState(132);
  const [randomPokemonTwo, setRandomPokemonTwo] = useState(132);
  let stat = "";
  let pokemonOneStat = null;
  let pokemonTwoStat = null;

  let gameDiv = null;
  let showHighScore = null;
  let showCredits = null;

  useEffect(() => {
    setRandomPokemonOne(Math.floor(Math.random() * 898) + 1);
    setRandomPokemonTwo(Math.floor(Math.random() * 898) + 1);

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

    setRandomStat(Math.floor(Math.random() * 6));
  }, [inGame, score, tie]);

  switch(randomStat) {
    case 0:
      stat = "HP";
      pokemonOneStat = pokemonOne.hp;
      pokemonTwoStat = pokemonTwo.hp;
      break;
    case 1:
      stat = "Attack";
      pokemonOneStat = pokemonOne.attack;
      pokemonTwoStat = pokemonTwo.attack;
      break;
    case 2:
      stat = "Defence";
      pokemonOneStat = pokemonOne.defence;
      pokemonTwoStat = pokemonTwo.defence;
      break;
    case 3:
      stat = "Special Attack";
      pokemonOneStat = pokemonOne.specialAttack;
      pokemonTwoStat = pokemonTwo.specialAttack;
      break;
    case 4:
      stat = "Special Defence";
      pokemonOneStat = pokemonOne.specialDefence;
      pokemonTwoStat = pokemonTwo.specialDefence;
      break;
    case 5:
      stat = "Speed";
      pokemonOneStat = pokemonOne.speed;
      pokemonTwoStat = pokemonTwo.speed;
      break;
    default:
      stat = "";
  };

  function onStartClick() {
    setPage("Game")
    setInGame("Yes");
  }

  function onHomeClick() {
    setPage("Start");
  }

  function buttonOneClick() {
    setPage("Info");
    setTimeout(() => {
      if (pokemonOneStat > pokemonTwoStat) {
        setScore(score + 1);
        setPage("Game");
      } else if (pokemonOneStat < pokemonTwoStat) {
        if (score > highScore) {
          setBeatHighScore(true);
          setHighScore(score);
        } else if (score < highScore) {
          setBeatHighScore(false);
        }
        setPrevScore(score);
        setScore(0);
        setInGame("No");
        setPage("Lose");
      } else {
        setTie(tie + 1);
        setPage("Game");
      }
    }, 2000);
  }

  function buttonTwoClick() {
    setPage("Info");
    setTimeout(() => {
      if (pokemonTwoStat > pokemonOneStat) {
        setScore(score + 1);
        setPage("Game");
      } else if (pokemonTwoStat < pokemonOneStat) {
        if (score > highScore) {
          setBeatHighScore(true);
          setHighScore(score);
        } else if (score < highScore) {
          setBeatHighScore(false);
        }
        setPrevScore(score);
        setScore(0);
        setInGame("No");
        setPage("Lose");
      } else {
        setTie(tie + 1);
        setPage("Game");
      }
    }, 2000);
  }

  switch(page) {
    case "Start":
      gameDiv = <div>
                  <StartScreen highScore={highScore}
                               onStartClick={onStartClick} />
                </div>
      break;
    case "Game":
      gameDiv = <div>
                  <div className="stat">
                    <h3>Which of these two Pokémon has the higher:</h3>
                    <h2>{stat}</h2>
                  </div>
                  <div className='Pokemon_Cards'>
                    <div className='Pokemon_One'>
                      <PokemonOne pokemonOne={pokemonOne}
                                  buttonOneClick={buttonOneClick} />
                    </div>
                    <div className='Pokemon_Two'>
                      <PokemonTwo pokemonTwo={pokemonTwo}
                                  buttonTwoClick={buttonTwoClick} />
                    </div>
                  </div>
                  <div className="Score">
                    <h4>Score: {score}</h4>
                  </div>
                </div>;
      break;
    case "Info":
      gameDiv = <div>
                  <div className="stat">
                    <h3>Which of these two Pokémon has the higher:</h3>
                    <h2>{stat}</h2>
                  </div>
                  <div className='Pokemon_Cards'>
                    <div className='Pokemon_One'>
                      <PokemonOneResult pokemonOne={pokemonOne}
                                  buttonOneClick={buttonOneClick}
                                  pokemonOneStat={pokemonOneStat} />
                    </div>
                    <div className='Pokemon_Two'>
                      <PokemonTwoResult pokemonTwo={pokemonTwo}
                                  buttonTwoClick={buttonTwoClick}
                                  pokemonTwoStat={pokemonTwoStat} />
                    </div>
                  </div>
                  <div className="Score">
                    <h4>Score: {score}</h4>
                  </div>
                </div>;
      break;
    case "Lose":
        gameDiv = <div>
                    <LoseScreen prevScore={prevScore}
                                highScore={highScore}
                                beatHighScore={beatHighScore}
                                onStartClick={onStartClick}
                                onHomeClick={onHomeClick} />
                  </div>;
      break;
  }

  if (page === "Game" || page === "Info") {
    showHighScore = <h4>High Score: {highScore}</h4>;
  }

  if (page === "Start" || page === "Lose") {
    showCredits = <p>Made by Jason Mannin <br /> <br />
    This is a purely educational project. <br />
    Not affiliated with Pokémon in any way.</p>;
  }

  return (
    <div className="Content_Body">
      <div className="header">
        <h1>Who's STAT Pokémon?!</h1>
      </div>
      <div className="Content">
        {gameDiv}
      </div>
      <div className="Bottom">
        <div className="Credits">
          {showCredits}
        </div>
        <div className="HighScore">
          {showHighScore}
        </div>
      </div>
    </div>
  );
}

export default App;
