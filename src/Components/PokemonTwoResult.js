import React from 'react';
import './PokemonTwoResult.css';
import AnimatedNumber from 'react-animated-number';

export default function PokemonTwoResult({ pokemonTwo, pokemonTwoStat, showStatTwo, buttonTwoClick }) {
    return (
            <div className="PokemonTwo">
                <div className="Card_Name">
                    {pokemonTwo.name}
                </div>
                <div className="PokemonTwo_Info">
                    <div className="Card_Image">
                        <img src={pokemonTwo.sprite} alt="" className="pokeTwoSprite"/>
                    </div>
                    <AnimatedNumber className="PokemonTwo_Stat" 
                                    value={pokemonTwoStat}
                                    formatValue={n => n.toFixed(0)} />
                </div>
            </div>
    )
}