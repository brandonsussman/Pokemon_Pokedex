import React from "react";

const PokemonStats = ({ data }) =>



    <div className="base-stat">
        {
            data.stats.map((pokemonDetails,index) =>
                
                <h3 key={index}>{pokemonDetails.stat.name}:{pokemonDetails.base_stat}</h3>)
        }
          
    </div>


export default PokemonStats