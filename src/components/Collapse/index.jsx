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
    display:flex;
    justify-content:space-between;
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
const CollapseArrow=styled.div`
    width: 32px;
    height: 20px;
    background-color: #fff;
    clip-path: polygon(100% 0, 0 0, 50% 50%);
    margin-right:1rem;
    transform: rotate(0deg);
    transform-origin: center;
    overflow: hidden;
    transition: all 0.3s ease-out;
    margin-top:1rem;
    ${({ rotate }) => rotate && `transform: rotate(180deg)`} 
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
    const [rotate, setRotate] = useState(false);
    const handleClick = () => setRotate((prevState) => (!prevState ))

    return (
        <CollapseDiv>
            <CollapseButton onClick={() => setisOpen(!isOpen)}>
                {props.label} 
                <CollapseArrow rotate={rotate} onClick={handleClick}></CollapseArrow> 
            </CollapseButton> 
            {isOpen && <ParagrapheDiv>
                {props.children}
            </ParagrapheDiv>}
        </CollapseDiv>
    )     
        
}
export default Collapse