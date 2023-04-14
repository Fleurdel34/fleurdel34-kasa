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
                                <Slider slide={item.pictures} />
                                <h1>{item.title}</h1>
                                <p>{item.location}</p>
                                <p>{item.tags}</p>
                                <div key={item.host}>
                                    <p>{item.host.name}</p>
                                    <img src= {item.host.picture} alt=""></img>
                                </div>
                                <span>{item.rating}</span>
                                <p>{item.description}</p>
                                <p>{item.equipments}</p>
                            </div>}})}
            </div>)       
}

export default Logements




