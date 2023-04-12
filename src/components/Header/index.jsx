import { Link } from "react-router-dom";
import LOGO1 from '../images/LOGO1.png';
import styled from "styled-components"

const HeaderDiv = styled.div`
    display:flex;
    justify-content:space-between;
    margin-top:2rem;
   margin-left:7%;
    
`

const LinkDiv = styled.div`
    width:25%;
    display:flex;
    justify-content:flex-start;
    align-self:center;
    text-align: right;
    margin-right:1%;
    
`

const LinkStyle = styled(Link)`
    display:flex;
    justify-content:flex-start;
    color:#ff6060;
    width:50%;
    font-size:24px;
    font-family:Montserrat;
    font-style: normal;
    font-weight: 500;
    text-decoration:none;
    &:hover{
        cursor: pointer;
        text-decoration:underline;
    }
    
`


function Header(){
    return(
        <HeaderDiv>
           
            <img src= {LOGO1} alt="Logo"/>
    
            <LinkDiv>
                <LinkStyle to="/">Accueil</LinkStyle>
                <LinkStyle to="/apropos">A propos</LinkStyle>
            </LinkDiv>
    </HeaderDiv>
    )
}
export default Header