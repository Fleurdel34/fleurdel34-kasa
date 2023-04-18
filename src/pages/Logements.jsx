//construction de la page logements

import styled from "styled-components";
import Slider from "../components/Slideshow";
import logements from "../components/datas/logements.json";
import { useNavigate, useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import { VscStarFull } from "react-icons/vsc";
import { useEffect } from "react";
import"../styles/Logements.css";

const StylePage = styled.div`
    display:flex;
    width: 86%;
    justify-content:center;
    margin:1rem auto auto;
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
    
`
const StyleDivTag = styled.div`
    display:flex;
    justify-center:center;
    width:86%;
    margin:auto;    
    @media (max-width: 768px){
        flex-wrap:wrap;
        margin-left: 0rem;
        margin:auto;
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
    width:100%;
    display:flex;
    justify-content:flex-end;
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
    margin-bottom:15px;
    @media (max-width: 768px){
        justify-content:flex-end;
        position: absolute;
        transform: translate(180%, 90px);
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

let logementFind = undefined;

logementFind = logements.find(logement =>
    logement.id === id)

useEffect(() => {

    if(logementFind === undefined){
        navigate("/Error");
    }
})

return(<div>
            <Slider slide= {logementFind.pictures} />
                <StylePage>
                    <StyleDivTitle>
                        <StyleTitle>{logementFind.title}</StyleTitle>
                        <StyleLocation>{logementFind.location}</StyleLocation>
                    </StyleDivTitle>
                    <StyleDivHost>
                        <StyleHost>{logementFind.host.name}</StyleHost>
                        <StyleImg src= {logementFind.host.picture} alt=""></StyleImg>
                    </StyleDivHost>
                </StylePage>
                <StyleDivTag>
                    <StyleDivParagraphe>
                        {logementFind.tags.map((element) =>{
                            return <StyleTag>
                                {element}
                            </StyleTag>
                        })}
                    </StyleDivParagraphe>
                    <StyleDivStar >
                        {range.map((start) => {
                            return (parseInt(logementFind.rating) >= start?
                            <VscStarFull className="iconFull" />:
                            <VscStarFull className="iconEmpty" />)
                        })}                                                                                                            
                    </StyleDivStar>  
                </StyleDivTag>
                <StyleCollapseDiv>
                    <StyleDivDescription>
                        <Collapse label="Description">
                            <LogementParagraphe>{logementFind.description}</LogementParagraphe>
                        </Collapse>
                    </StyleDivDescription>
                    <StyleDivEquipements>
                        <Collapse label="Équipements">
                            <LogementParagraphe>{logementFind.equipments}</LogementParagraphe>
                        </Collapse>
                    </StyleDivEquipements>
                </StyleCollapseDiv>
                  
        </div>)      
}

export default Logements;




