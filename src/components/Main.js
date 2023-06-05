import React from "react";
import Card from "./Card";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Main=()=>{
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    

    const loadFromApi=async()=>{
        setLoading(true);
        const res=await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
    }
    
    const getPokemon=async(res)=>{
       res.map(async(item)=>{
          const result=await axios.get(item.url)
          setPokeData(pokemonArray=>{
              pokemonArray=[...pokemonArray,result.data]
              pokemonArray.sort((a,b)=>a.id>b.id?1:-1)
              return pokemonArray;
          })
       })   
    }
    useEffect(()=>{
    loadFromApi();
    },[url])
    return(
        <>
       
        <h1 className="welcome">Welcome To The Pokedex</h1>
                                   

            <div className="content">
               
                    <Card pokemon={pokeData} loading={loading} />
            </div>
            
            <div className="btn-group">
                        {  prevUrl && <button onClick={()=>{
                            setPokeData([])
                           setUrl(prevUrl) 
                        }}>Previous</button>}

                        { nextUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}

                    </div>   
        </>
        
    )
}
export default Main;