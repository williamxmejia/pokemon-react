import React, {useEffect, useState} from "react";
import Axios from "axios";
import {Link, useParams} from "react-router-dom";


function IndividualPoke() {
    const [individual, setIndividual] = useState([]);
    const {name} = useParams();
    //


    const onClick = async () => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
            const response = await Axios(url)
            const results = response.data
            console.log(results)
            console.log(results.types.map(x => {
                return x.type.name
            }))
            setIndividual(results)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        onClick()
    }, [])
    return (
        <div>
            <div className="container" key={individual.id}>
                <nav className="navbar bg-light mt-5">
                    <Link className="navbar-brand" to={"/"}>PokeDex</Link>
                </nav>
                <div className="container d-flex mt-5">
                    {/*<img className="_ffb12 card" src={individual.sprites.front_default}></img>*/}
                    <div className="mx-5">
                        <ul><h2>About</h2>
                            {/*<li>Species Name: {capitalizeFirstLetter(individual.name)}</li>*/}
                            <li>Species Name: {individual.name}</li>
                            {/*<li>Base Experience: {individual.base_experience}</li>*/}
                            {/*<li className="">Types: {*/}
                            {/*    individual.types.map((x) => {*/}
                            {/*        return (*/}
                            {/*            <div className="mx-1">{x.type.name}</div>*/}
                            {/*        )*/}
                            {/*    })*/}
                            {/*}</li>*/}
                            {/*<li>Abilities: {*/}
                            {/*    individual.abilities.map(x => {*/}
                            {/*        return (*/}
                            {/*            <div>{x.ability.name}</div>*/}
                            {/*        )*/}

                            {/*    })*/}
                            {/*}</li>*/}
                        </ul>


                    </div>
                </div>


            </div>
        </div>
    )
}

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export default IndividualPoke