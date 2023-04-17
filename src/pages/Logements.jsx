//construction de la page logements

import styled from "styled-components";
import Slider from "../components/Slideshow";
import logements from "../components/datas/logements.json";
import { useNavigate, useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import { VscStarFull } from "react-icons/vsc";
import { useEffect } from "react";

const StylePage = styled.div`
    display:flex;
    width: 86%;
    justify-content:center;
    margin-top: 1rem;
    margin:auto;
    @media (max-width: 768px){
        flex-direction:column;
    }    
`
const StyleDivTitle= styled.div`
    width:100%;
`
const StyleTitle = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 142.6%;
    color: #FF6060;
    margin:0;
    @media (max-width: 768px){
        font-size: 18px;
    } 
`
const StyleLocation = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    color: #FF6060;
    margin:0;
    @media (max-width: 768px){
        font-size: 14px;
    } 
`
const StyleDivParagraphe = styled.div`
    display:flex;
    justify-content:center;
    width:20%;
`
const StyleDivTag = styled.div`
    display:flex;
    width:100%;    
    @media (max-width: 768px){
        flex-wrap:wrap;
        margin-left: 0rem;
    } 
`
const StyleTag = styled.p`
    background: #FF6060;
    border-radius: 10px;
    width:115px;
    height:25px;
    color:#fff;
    text-align:center;
    margin-bottom:1.5rem;
    margin-right:7px;
    @media (max-width: 768px){
        font-size: 10px;
        border-radius: 5px;
        width:84px;
        height:18px;
        padding-top: 1px;
    } 
`
const StyleDivStar = styled.div`
    width:63%;
    display:flex;
    justify-content:flex-end;
    margin-right:3.5rem;
    @media (max-width: 768px){
        margin-right:0;
        justify-content:flex-start;
        margin-bottom:1.5rem;
    }
    @media (max-width: 992px){
        margin-right:0;
    }  
`
const StyleDivHost= styled.div`
    display:flex;
    width: 30%;
    justify-content: flex-end;
    @media (max-width: 768px){
        justify-content:flex-end;
        position: absolute;
        left: 70%;
        top: 60%;
    } 
`
const StyleHost = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    color: #FF6060;
    width:93px;
    height:52px;
    margin-top: 10px;
    margin-bottom: 0;
    @media (max-width: 768px){
        font-size:12px;
        height:33px;
        width:48px;
    } 
`
const StyleImg = styled.img`
    border-radius:100px;
    width:64px;
    height:64px;
    @media (max-width: 768px){
        width:32px;
        height:32px;
        margin-top:0.8rem;
    } 
`
const StyleStarFull = {color:"#FF6060", width:"24.75px", height:"24px"}; 

const StyleStarEmpty ={width:"24.75px", height:"24px", color: "grey", border: "grey"};

const StyleCollapseDiv=styled.div`
    width:100%;
    display:flex;
    margin-bottom:5rem;
    @media (max-width: 768px){
        flex-direction:column;
        margin-bottom:2rem;
    } 
`
const StyleDivDescription = styled.div`
    width:50%;
    @media (max-width: 768px){
        width:100%;
        border-radius: 5px;
    } 
`
const LogementParagraphe =styled.p`
    @media (max-width: 768px){
        font-size:12px;
    }  
`
const StyleDivEquipements = styled.div`
    width:50%;
    @media (max-width: 768px){
        width:100%;
        border-radius: 5px;
    } 

`

function Logements(){

let {id} = useParams();

const range = [1,2,3,4,5];

const navigate = useNavigate();

const LogementFind = logements.find(logement =>
    logement.id === id);

useEffect(() =>{
    if (LogementFind === undefined){
        navigate("/Error");
    }
})

return(<div>
            <div key={LogementFind.id}>
                <Slider slide={LogementFind.pictures} />
                    <StylePage>
                        <StyleDivTitle>
                            <StyleTitle>{LogementFind.title}</StyleTitle>
                            <StyleLocation>{LogementFind.location}</StyleLocation>
                        </StyleDivTitle>
                        <StyleDivHost key={LogementFind.host}>
                            <StyleHost>{LogementFind.host.name}</StyleHost>
                            <StyleImg src= {LogementFind.host.picture} alt=""></StyleImg>
                        </StyleDivHost>
                    </StylePage>
                    <StyleDivTag>
                        <StyleDivParagraphe>
                            {LogementFind.tags.map((element) =>{
                                return <StyleTag>
                                    {element}
                                </StyleTag>
                            })}
                        </StyleDivParagraphe>
                        <StyleDivStar >
                            {range.map((start) => {
                                return (parseInt(LogementFind.rating) >= start?
                                <VscStarFull style = {StyleStarFull} />:
                                <VscStarFull style = {StyleStarEmpty} />)
                            })}                                                                                                            
                        </StyleDivStar>  
                    </StyleDivTag>
                    <StyleCollapseDiv>
                        <StyleDivDescription>
                            <Collapse label="Description">
                                <LogementParagraphe>{LogementFind.description}</LogementParagraphe>
                            </Collapse>
                        </StyleDivDescription>
                        <StyleDivEquipements>
                            <Collapse label="Équipements">
                                <LogementParagraphe>{LogementFind.equipments}</LogementParagraphe>
                            </Collapse>
                        </StyleDivEquipements>
                    </StyleCollapseDiv>
            </div>         
        </div>)      
}

export default Logements;




