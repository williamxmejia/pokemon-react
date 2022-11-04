import {useState} from "react";
import Axios from "axios";


function IndividualPoke(){
    const [individual, setIndividual] = useState([]);
    const onSubmit = async () => {
        try{
            const url = "https://pokeapi.co/api/v2/pokemon/ditto";
            const response = await Axios(url)
            const results = response.data
            setIndividual(response.data)
        } catch (err){
            console.log(err)
        }
    }
    return(
        <div>
            <h1>Hi</h1>
        </div>
    )
}

export default IndividualPoke