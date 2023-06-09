// Création du composant Collapse
import styled from "styled-components";
import { useState } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";


const CollapseDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    margin-bottom:20px;
`

const CollapseDivArrow=styled.div`
    display:flex;
    justify-content:space-between;
    background: #FF6060;
    border-radius: 5px;
    height:50px;
    width:71%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 142.6%;
    color: #FFFFFF;
    padding-left:10px;
    padding-top:10px;
    @media (max-width: 768px){
        font-size: 13px;
        height:30px;
        width:84%;
    }     
`
const StyleButton = styled.button`
    width:30px;
    border:none;
    background-color:#FF6060;
    margin-right:1rem;
    margin-bottom:0.3rem;
    @media (max-width: 768px){
        margin-right:0.6rem;
        margin-bottom:0.5rem;
        width:30px;
    } 
`
const style = {
    "width": "40px",
    "height": "20px", 
    "color": "#fff",
    "weight":"700"
}      
const ParagrapheDiv=styled.div`    
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #FF6060;
    width:68%;
    word-break: break-word; 
`

function Collapse(props){
const [isOpen, setisOpen] = useState(false);


return (
    <CollapseDiv>
        <CollapseDivArrow onClick={() => setisOpen(!isOpen)}>
            {props.label}
            <StyleButton>
                {isOpen ?
                <VscChevronUp style = {style} /> :
                <VscChevronDown style = {style} />}
            </StyleButton>
        </CollapseDivArrow> 
        {isOpen && <ParagrapheDiv>
            {props.children}
        </ParagrapheDiv>}
    </CollapseDiv>
)          
};
export default Collapse;


