import {useEffect, useState} from "react";
import Axios from "axios";
import {useParams} from "react-router-dom";


function IndividualPoke(){
    const [individual, setIndividual] = useState([]);
    const { name } = useParams();
    //


    const onClick = async () => {
        try{
            const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
            const response = await Axios(url)
            const results = response.data
            console.log(results)
            setIndividual(response.data)
        } catch (err){
            console.log(err)
        }
    }

    useEffect(() =>{
        onClick()
    }, [])
    return(
        <div>
            <div key={individual.id}>{individual.name}</div>
        </div>
    )
}

export default IndividualPoke