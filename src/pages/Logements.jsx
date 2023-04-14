import styled from "styled-components";
import Slider from "../components/Slideshow";
import logements from "../components/datas/logements.json";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";

const StyleTitle = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 142.6%;
    color: #FF6060;
`
const StyleLocation = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    color: #FF6060;
`
const StyleTag = styled.p`
    background: #FF6060;
    border-radius: 10px;
    width:115px;
    height:25px;
    color:#fff;

`
const StyleHost = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    color: #FF6060;

`
const StyleImg = styled.img`
    border-radius:100px;


`

function Logements(){

let {id} = useParams();

    return(<div>
            {logements.map((item) => { 
                if(item.id === id){
                    return <div key={item.id}>
                                <Slider slide={item.pictures} />
                                <StyleTitle>{item.title}</StyleTitle>
                                <StyleLocation>{item.location}</StyleLocation>
                                <StyleTag>{item.tags}</StyleTag>
                                <div key={item.host}>
                                    <StyleHost>{item.host.name}</StyleHost>
                                    <StyleImg src= {item.host.picture} alt=""></StyleImg>
                                </div>
                                <span>{item.rating}</span>
                                <Collapse label="Respect">
                                    <p>{item.description}</p>
                                </Collapse>
                                <Collapse label="Respect">
                                    <p>{item.equipments}</p>
                                </Collapse>
                                
                            </div>}})}
            </div>)       
}

export default Logements




