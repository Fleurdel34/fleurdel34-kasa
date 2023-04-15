//construction de la page logements

import styled from "styled-components";
import Slider from "../components/Slideshow";
import logements from "../components/datas/logements.json";
import { Navigate, useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import { VscStarFull } from "react-icons/vsc";


const StylePage = styled.div`
    display:flex;
    width: 86%;
    margin-top: 1rem;
    margin-left: 7rem;
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
`
const StyleLocation = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;
    color: #FF6060;
    margin:0;
`
const StyleDivTag = styled.div`
    display:flex;
    width:86%;
    margin-left: 7rem;
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
`
const StyleDivStar = styled.div`
    width:85%;
    display:flex;
    justify-content:flex-end;
    margin-right:3.5rem;
`
const StyleDivHost= styled.div`
    display:flex;
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
`
const StyleImg = styled.img`
    border-radius:100px;
    width:64px;
    height:64px
`
const StyleStarFull = {color:"#FF6060", width:"24.75px", height:"24px"};

const StyleStarEmpty ={ width:"24.75px", height:"24px", color: "grey", border: "grey"};

const StyleCollapseDiv=styled.div`
    width:100%;
    display:flex;
    margin-bottom:5rem;
`
const StyleDivDescription = styled.div`
    width:50%;
`
const StyleDivEquipements = styled.div`
    width:50%;
`

function Logements(){

let {id} = useParams();

const range = [1,2,3,4,5];

    return(<div>
            {logements.map((item) => { 
                    if(item.id === id){
                        return <div key={item.id}>
                            <Slider slide={item.pictures} />
                                <StylePage>
                                    <StyleDivTitle>
                                        <StyleTitle>{item.title}</StyleTitle>
                                        <StyleLocation>{item.location}</StyleLocation>
                                    </StyleDivTitle>
                                    <StyleDivHost key={item.host}>
                                        <StyleHost>{item.host.name}</StyleHost>
                                        <StyleImg src= {item.host.picture} alt=""></StyleImg>
                                    </StyleDivHost>
                                </StylePage>
                                <StyleDivTag>
                                    {item.tags.map((element) =>{
                                        return <StyleTag>
                                            {element}
                                        </StyleTag>
                                    })}
                                    <StyleDivStar  key ={item.rating}>
                                        {range.map((start) => {
                                           return (parseInt(item.rating) >= start?
                                            <VscStarFull style = {StyleStarFull} />:
                                            <VscStarFull style = {StyleStarEmpty} />)
                                        })}                                                                                                            
                                    </StyleDivStar>  
                                </StyleDivTag>
                                <StyleCollapseDiv>
                                    <StyleDivDescription>
                                        <Collapse label="Description">
                                            <p>{item.description}</p>
                                        </Collapse>
                                    </StyleDivDescription>
                                    <StyleDivEquipements>
                                        <Collapse label="Équipements">
                                            <p>{item.equipments}</p>
                                        </Collapse>
                                    </StyleDivEquipements>
                                </StyleCollapseDiv>
                            </div>
                    }
                    else{<Navigate to="/Error" replace={true} />}
                    })}
        </div>)      
}

export default Logements;




