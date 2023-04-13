/*import styled from "styled-components"*/
import logements from "../components/datas/logements.json"
import { useParams } from "react-router-dom"
import Slideshow from "../components/Slideshow"


function Logements(){

let {id} = useParams();

const found = logements.find(function(item) {

    if (item.id === id){
        return item;
    }
    return item
    });

const host = found.host;

    return(
            <div key = {found.id}>
                <div>
                <Slideshow />
                </div>
                <div>
                    <h1>{found.title}</h1>
                    <p>{found.location}</p>
                    <p>{found.tags}</p>
                </div>
                <div>
                    <span>{host.name}</span>
                    <img src ={host.picture} alt = {host.name}></img>
                </div>
                <div>    
                    <span>{found.rating}</span>
                </div>
                <div>
                    <p>{found.description}</p>
                </div>
                <div>
                    <p>{found.equipments}</p>
                </div>
            </div>)

       
}

export default Logements




