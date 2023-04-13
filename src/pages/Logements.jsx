/*import styled from "styled-components"*/
import Slider from "../components/Slideshow";
import logements from "../components/datas/logements.json"
import { useParams } from "react-router-dom"

function Logements(){

let {id} = useParams();

    return(<div>
            {logements.map((item) => { 

                if(item.id === id){
                    return <div key={item.id}>
                                <Slider />
                                <img src={item.pictures} alt=""></img>
                                <Slider />
                                <h1>{item.title}</h1>
                                <p>{item.location}</p>
                                <p>{item.tags}</p>
                                <span>{item.rating}</span>
                                <p>{item.description}</p>
                                <p>{item.equipments}</p>
                            </div>}})}
            </div>)       
}

export default Logements




