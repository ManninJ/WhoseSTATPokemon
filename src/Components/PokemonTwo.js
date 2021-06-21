import React from 'react'

export default function PokemonTwo({ pokemonTwo, buttonTwoClick }) {
    return (
        <button className="Pokemon_Two_Button" onClick={buttonTwoClick}>
            <div className="PokemonTwo">
                <div className="Card_Name">
                    {pokemonTwo.name}
                </div>
                <div className="Card_Image">
                    <img src={pokemonTwo.sprite} alt="" width="400px"/>
                </div>
            </div>
        </button>
    )
}