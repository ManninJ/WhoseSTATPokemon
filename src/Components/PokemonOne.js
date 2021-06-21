import React from 'react'

export default function PokemonOne({ pokemonOne }) {
    return (
        <div className="PokemonOne">
            <div className="Card_Name">
                {pokemonOne.name}
            </div>
            <div className="Card_Image">
                <img src={pokemonOne.sprite} alt="" />
            </div>
        </div>
    )
}