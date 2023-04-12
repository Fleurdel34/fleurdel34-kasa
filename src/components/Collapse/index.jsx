import styled from "styled-components"
import { useState } from "react"


const CollapseDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    margin-bottom:20px;
`

const CollapseButton=styled.div`
    background: #FF6060;
    border-radius: 5px;
    height:47px;
    width:71%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 142.6%;
    color: #FFFFFF;
    padding-left:10px;
    padding-top:10px;

`
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
            <CollapseButton onClick={() => setisOpen(!isOpen)}>{props.label}</CollapseButton> 
            {isOpen && <ParagrapheDiv>
                {props.children}
            </ParagrapheDiv>}
        </CollapseDiv>)
            
        
}
export default Collapse