import React from 'react'

export default function PokemonOne({ pokemonOne, buttonOneClick }) {
    return (
        <button className="Pokemon_One_Button" onClick={buttonOneClick}>
            <div className="PokemonOne">
                <div className="Card_Name">
                    {pokemonOne.name}
                </div>
                <div className="Card_Image">
                    <img src={pokemonOne.sprite} alt="" width="400px"/>
                </div>
            </div>
        </button>
    )
}