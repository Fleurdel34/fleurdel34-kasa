/*import styled from "styled-components"*/
import logements from "../components/datas/logements.json"
import { useParams } from "react-router-dom"



function Logements(){

let {id} = useParams();

const found = logements.find(function(item) {

    if (item.id === id){
        return item;
    }
    return item
    }) 

    return(
            <div key = {found.id}>
                <img src={found.cover} alt={found.title}/>
                <img src={found.pictures} alt={found.title}></img>
                <h1>{found.title}</h1>
                <div>
                    <p>{found.location}</p>
                    <p>{found.tag}</p>
                    <span>
                        {found.host}
                        {found.rating}
                    </span>
                    <p>{found.description}</p>
                    <p>{found.equipments}</p>
                </div>
            </div>)

       
}

export default Logements




