import React from "react";

const PokemonTypes = ({ data }) => 

    
        <div className="abilities">
            {
                
                data.types.map((pokemonDetails,index) =>
                    
                    <h2 className="group" key={index}>{pokemonDetails.type.name}</h2>)
            }

        </div>

export default PokemonTypes