import React, {useEffect, useState} from "react"
import Axios from "axios"
import {BrowserRouter as Router,Link} from "react-router-dom";


function AllPoke() {
    const [pokemons, setPokemons] = useState([])
    const [filteredResuts, setFilteredResults] = useState([])
    const [search, setSearch] = useState('')
    const [individual, setIndividual] = useState([])

    const getPokemons = async () => {
        const url = "https://pokeapi.co/api/v2/pokemon/?Limit=1000";
        const response = await Axios(url)
        const results = response.data.results
        console.log(url)

        let pokemons = []

        for (let result of results) {
            const individualPokemonUrl = result.url
            const pokemonResponse = await Axios(individualPokemonUrl)
            pokemons.push(pokemonResponse.data)
        }
        setPokemons(pokemons)
    };


    useEffect(() => {
        getPokemons();
    }, []);

    useEffect(() => {
        if (search !== '') {
            const filteredPokemon = pokemons.filter((item) => {
                return item.name.includes(search.toLowerCase());
            })
            setFilteredResults(filteredPokemon)
        } else {
            setFilteredResults(pokemons)
        }
    }, [search, pokemons])

    return (
        <div className="_abc">
            <div className="navbar p-3">
                <input className="mx-auto form-control" type="text" placeholder="Search Pokemon" value={search}
                       onChange={(e) => setSearch(e.target.value)}/>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
                {
                    filteredResuts.map((x) => {
                        return (
                            <div>
                                <Link to={"/poke"}  key={x.id} className="d-flex justify-content-center row mx-5 my-5 _d321">
                                    <img src={x.sprites.front_default}></img>
                                    <p className="text-center _b111">{capitalizeFirstLetter(x.name)}</p>
                                </Link>
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

function test() {
}

export default AllPoke;