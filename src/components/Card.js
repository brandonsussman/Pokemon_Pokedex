import React from "react";
import PokemonStats from "./PokemonStats";
import PokemonAbilities from "./PokemonAbilities";
import PokemonTypes from "./PokemonTypes";
const Card = ({ pokemon, loading }) => (

    <>
        {loading ? <h1>Loading...</h1> :

            pokemon.map((item) => (



                <div className="flip-card" key={item.id}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <div>
                            <div className="pokeName">
                            <h2 >{item.name}</h2>
                            </div>
                                <div className="imageDiv">
                        <img className="image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`} alt="" />
                        </div>
                          
                            <div>
                            <h2 className="pokeNumber">{item.id}</h2>
                            </div>
                            </div>
                        </div>
                        <div className="flip-card-back">
                             <h1>-moves</h1>
                            <PokemonAbilities data={item} />
                            <h1>-type</h1>
                            <PokemonTypes data={item}/>
                            <h1>-stats</h1>
                            <PokemonStats data={item} />

                        </div>
                    </div>
                </div>





            ))}


    </>
)
export default Card;
