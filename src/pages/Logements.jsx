import styled from "styled-components";
import Slider from "../components/Slideshow";
import logements from "../components/datas/logements.json";
import { useParams } from "react-router-dom";
import Collapse from "../components/Collapse";

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
    margin-bottom:0;
    margin-right:7px;
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
  }

`
const StyleImg = styled.img`
    border-radius:100px;
    width:64px;
    height:64px
`

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

    return(<div>
            {logements.map((item, index) => { 
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
                                    </StyleDivTag>
                                    <div>
                                        <span>{item.rating}</span>
                                    </div>
                                
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
                               
                                
                            </div>}})}
            </div>)       
}

export default Logements




