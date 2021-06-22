import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AnimatedNumber from 'react-animated-number';
import './App.css';
import PokemonOne from './Components/PokemonOne';
import PokemonTwo from './Components/PokemonTwo';
import StartScreen from './Components/StartScreen';
import LoseScreen from './Components/LoseScreen';

function App() {
  const [inGame, setInGame] = useState("Start");
  const [score, setScore] = useState(0);
  const [prevScore, setPrevScore] = useState(0);
  const [tie, setTie] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [pokemonOne, setPokemonOne] = useState({});
  const [pokemonTwo, setPokemonTwo] = useState({});
  const [showStatOne, setShowStatOne] = useState(false);
  const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/';
  const randomPokemonOne = Math.floor(Math.random() * 898) + 1;
  const randomPokemonTwo = Math.floor(Math.random() * 898) + 1;
  let stat = "";
  let pokemonOneStat = null;
  let pokemonTwoStat = null;
  const randomStat = Math.floor(Math.random() * 6);

  let gameDiv = null;

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
    setInGame("Yes");
  }

  function onHomeClick() {
    setInGame("Start");
  }

  function buttonOneClick() {
    switch(stat) {
      case "HP":
        if (pokemonOne.hp > pokemonTwo.hp) {
          setScore(score + 1);
        } else if (pokemonOne.hp < pokemonTwo.hp){
          if (score > highScore) {
            setHighScore(score);
          }
          setPrevScore(score);
          setScore(0);
          setInGame("Lose");
        } else {
          setTie(tie + 1);
        }
        break;
      case "Attack":
        if (pokemonOne.attack > pokemonTwo.attack) {
          setScore(score + 1);
        } else if (pokemonOne.attack < pokemonTwo.attack){
          if (score > highScore) {
            setHighScore(score);
          }
          setPrevScore(score);
          setScore(0);
          setInGame("Lose");
        } else {
          setTie(tie + 1);
        }
        break;
      case "Defence":
        if (pokemonOne.defence > pokemonTwo.defence) {
          setScore(score + 1);
        } else if (pokemonOne.defence < pokemonTwo.defence){
          if (score > highScore) {
            setHighScore(score);
          }
          setPrevScore(score);
          setScore(0);
          setInGame("Lose");
        } else {
          setTie(tie + 1);
        }
        break;
      case "Special Attack":
        if (pokemonOne.specialAttack > pokemonTwo.specialAttack) {
          setScore(score + 1);
        } else if (pokemonOne.specialAttack < pokemonTwo.specialAttack){
          if (score > highScore) {
            setHighScore(score);
          }
          setPrevScore(score);
          setScore(0);
          setInGame("Lose");
        } else {
          setTie(tie + 1);
        }
        break;
      case "Special Defence":
        if (pokemonOne.specialDefence > pokemonTwo.specialDefence) {
          setScore(score + 1);
        } else if (pokemonOne.specialDefence < pokemonTwo.specialDefence){
          if (score > highScore) {
            setHighScore(score);
          }
          setPrevScore(score);
          setScore(0);
          setInGame("Lose");
        } else {
          setTie(tie + 1);
        }
        break;
      case "Speed":
        if (pokemonOne.speed > pokemonTwo.speed) {
          setScore(score + 1);
        } else if (pokemonOne.speed < pokemonTwo.speed){
          if (score > highScore) {
            setHighScore(score);
          }
          setPrevScore(score);
          setScore(0);
          setInGame("Lose");
        } else {
          setTie(tie + 1);
        }
        break;
      default:
        return;
    };
  }

  function buttonTwoClick() {
    switch(stat) {
      case "HP":
        if (pokemonTwo.hp > pokemonOne.hp) {
          setScore(score + 1);
        } else if (pokemonTwo.hp < pokemonOne.hp){
          if (score > highScore) {
            setHighScore(score);
          }
          setPrevScore(score);
          setScore(0);
          setInGame("Lose");
        } else {
          setTie(tie + 1);
        }
        break;
      case "Attack":
        if (pokemonTwo.attack > pokemonOne.attack) {
          setScore(score + 1);
        } else if (pokemonTwo.attack < pokemonOne.attack){
          if (score > highScore) {
            setHighScore(score);
          }
          setPrevScore(score);
          setScore(0);
          setInGame("Lose");
        } else {
          setTie(tie + 1);
        }
        break;
      case "Defence":
        if (pokemonTwo.defence > pokemonOne.defence) {
          setScore(score + 1);
        } else if (pokemonTwo.defence < pokemonOne.defence){
          if (score > highScore) {
            setHighScore(score);
          }
          setPrevScore(score);
          setScore(0);
          setInGame("Lose");
        } else {
          setTie(tie + 1);
        }
        break;
      case "Special Attack":
        if (pokemonTwo.specialAttack > pokemonOne.specialAttack) {
          setScore(score + 1);
        } else if (pokemonTwo.specialAttack < pokemonOne.specialAttack){
          if (score > highScore) {
            setHighScore(score);
          }
          setPrevScore(score);
          setScore(0);
          setInGame("Lose");
        } else {
          setTie(tie + 1);
        }
        break;
      case "Special Defence":
        if (pokemonTwo.specialDefence > pokemonOne.specialDefence) {
          setScore(score + 1);
        } else if (pokemonTwo.specialDefence < pokemonOne.specialDefence){
          if (score > highScore) {
            setHighScore(score);
          }
          setPrevScore(score);
          setScore(0);
          setInGame("Lose");
        } else {
          setTie(tie + 1);
        }
        break;
      case "Speed":
        if (pokemonTwo.speed > pokemonOne.speed) {
          setScore(score + 1);
        } else if (pokemonTwo.speed < pokemonOne.speed){
          if (score > highScore) {
            setHighScore(score);
          }
          setPrevScore(score);
          setScore(0);
          setInGame("Lose");
        } else {
          setTie(tie + 1);
        }
        break;
      default:
        return;
    };
  }

  switch(inGame) {
    case "Start":
      gameDiv = <div>
                  <StartScreen highScore={highScore}
                               onStartClick={onStartClick} />
                </div>
      break;
    case "Yes":
      gameDiv = <div>
                  <div className="stat">
                    <h3>Which of these two Pokémon has the higher:</h3>
                    <h2>{stat}</h2>
                  </div>
                  <div className='Pokemon_Cards'>
                    <div className='Pokemon_One'>
                      <PokemonOne pokemonOne={pokemonOne}
                                  buttonOneClick={buttonOneClick}
                                  pokemonOneStat={pokemonOneStat} />
                    </div>
                    <div className='Pokemon_Two'>
                      <PokemonTwo pokemonTwo={pokemonTwo}
                                  buttonTwoClick={buttonTwoClick} />
                    </div>
                  </div>
                  <div className="Score">
                      <h4>Score: {score}</h4>
                  </div>
                  <div className="HighScore">
                    <h4>Current High Score: {highScore}</h4>
                  </div>
                </div>;
      break;
    case "Lose":
        gameDiv = <div>
                    <LoseScreen prevScore={prevScore}
                                highScore={highScore}
                                onStartClick={onStartClick}
                                onHomeClick={onHomeClick} />
                  </div>;
      break;
  }

  return (
    <div>
      <div className="header">
        <h1>Who's STAT Pokémon?!</h1>
      </div>
      {gameDiv}
      <div className="Credits">
        <p>Made by Jason Mannin / KryllYGO <br /> <br />
        This is a purely educational project. <br />
        Not affiliated with Pokémon in any way.</p>
      </div>
    </div>
  );
}

export default App;
