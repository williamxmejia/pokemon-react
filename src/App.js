import Header from "./components/Header";
import "./bootstrap.css";
// import Api from "./components/PokemonApi";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredResuts, setFilteredResults] = useState([])
  const [search, setSearch] = useState('');

  const getPokemons = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const response = await Axios(url);
    const results = response.data.results;

    let pokemons = [];

    for (let result of results) {
      const individualPokemonUrl = result.url;
      const pokemonResponse = await Axios(individualPokemonUrl);
      pokemons.push(pokemonResponse.data);
    }
    setPokemons(pokemons);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    if(search !== ''){
      const filteredPokemon = pokemons.filter((item) =>{
        return item.name.includes(search.toLowerCase());
      })
      setFilteredResults(filteredPokemon)
    }
    else {
      setFilteredResults(pokemons)
    }
  }, [search, pokemons])

  return (
    <div className="container">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
        </Routes>
      </BrowserRouter> */}

      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />

      <div className="d-flex flex-wrap">
        {
            filteredResuts.map((x) =>{
              return(
                <div key={x.id} className="card mx-5 my-5">
                  <img src={x.sprites.front_default}></img>
                  <p className="text-center">{capitalizeFirstLetter(x.name)}</p>
                </div>
              )
            })
        }
      </div>
    </div>
  );
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function test() {}

export default App;
