import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import PokemonOne from './Components/PokemonOne';
import PokemonTwo from './Components/PokemonTwo';
import StartScreen from './Components/StartScreen';

function App() {
  const [inGame, setInGame] = useState("Start");
  const [score, setScore] = useState(0);
  const [tie, setTie] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [pokemonOne, setPokemonOne] = useState({});
  const [pokemonTwo, setPokemonTwo] = useState({});
  const pokemonURL = 'https://pokeapi.co/api/v2/pokemon/';
  const randomPokemonOne = Math.floor(Math.random() * 898) + 1;
  const randomPokemonTwo = Math.floor(Math.random() * 898) + 1;
  let stat = "";
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
  };

  function onStartClick() {
    setInGame("Yes");
  }

  function buttonOneClick() {
    switch(stat) {
      case "HP":
        if (pokemonOne.hp > pokemonTwo.hp) {
          setScore(score + 1);
        } else if (pokemonOne.hp < pokemonTwo.hp){
          setScore(0);
          setInGame("Start");
        } else {
          setTie(true);
          setTie(false);
        }
        break;
      case "Attack":
        if (pokemonOne.attack > pokemonTwo.attack) {
          setScore(score + 1);
        } else if (pokemonOne.attack < pokemonTwo.attack){
          setScore(0);
          setInGame("Start");
        } else {
          setTie(true);
          setTie(false);
        }
        break;
      case "Defence":
        if (pokemonOne.defence > pokemonTwo.defence) {
          setScore(score + 1);
        } else if (pokemonOne.defence < pokemonTwo.defence){
          setScore(0);
          setInGame("Start");
        } else {
          setTie(true);
          setTie(false);
        }
        break;
      case "Special Attack":
        if (pokemonOne.specialAttack > pokemonTwo.specialAttack) {
          setScore(score + 1);
        } else if (pokemonOne.specialAttack < pokemonTwo.specialAttack){
          setScore(0);
          setInGame("Start");
        } else {
          setTie(true);
          setTie(false);
        }
        break;
      case "Special Defence":
        if (pokemonOne.specialDefence > pokemonTwo.specialDefence) {
          setScore(score + 1);
        } else if (pokemonOne.specialDefence < pokemonTwo.specialDefence){
          setScore(0);
          setInGame("Start");
        } else {
          setTie(true);
          setTie(false);
        }
        break;
      case "Speed":
        if (pokemonOne.speed > pokemonTwo.speed) {
          setScore(score + 1);
        } else if (pokemonOne.speed < pokemonTwo.speed){
          setScore(0);
          setInGame("Start");
        } else {
          setTie(true);
          setTie(false);
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
          setScore(0);
          setInGame("Start");
        } else {
          setTie(true);
          setTie(false);
        }
        break;
      case "Attack":
        if (pokemonTwo.attack > pokemonOne.attack) {
          setScore(score + 1);
        } else if (pokemonTwo.attack < pokemonOne.attack){
          setScore(0);
          setInGame("Start");
        } else {
          setTie(true);
          setTie(false);
        }
        break;
      case "Defence":
        if (pokemonTwo.defence > pokemonOne.defence) {
          setScore(score + 1);
        } else if (pokemonTwo.defence < pokemonOne.defence){
          setScore(0);
          setInGame("Start");
        } else {
          setTie(true);
          setTie(false);
        }
        break;
      case "Special Attack":
        if (pokemonTwo.specialAttack > pokemonOne.specialAttack) {
          setScore(score + 1);
        } else if (pokemonTwo.specialAttack < pokemonOne.specialAttack){
          setScore(0);
          setInGame("Start");
        } else {
          setTie(true);
          setTie(false);
        }
        break;
      case "Special Defence":
        if (pokemonTwo.specialDefence > pokemonOne.specialDefence) {
          setScore(score + 1);
        } else if (pokemonTwo.specialDefence < pokemonOne.specialDefence){
          setScore(0);
          setInGame("Start");
        } else {
          setTie(true);
          setTie(false);
        }
        break;
      case "Speed":
        if (pokemonTwo.speed > pokemonOne.speed) {
          setScore(score + 1);
        } else if (pokemonTwo.speed < pokemonOne.speed){
          setScore(0);
          setInGame("Start");
        } else {
          setTie(true);
          setTie(false);
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
                                  stat={stat} />
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
    case "Lose":
      return (
        <div>
          
        </div>
      );
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
