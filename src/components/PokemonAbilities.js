import React from "react";

const PokemonAbilities = ({ data }) => 

    
        <div className="abilities">
            {
                
                data.abilities.map((pokemonDetails,index) =>
                    
                    <h2 className="group" key={index} >{pokemonDetails.ability.name}</h2>)
            }

        </div>

export default PokemonAbilities