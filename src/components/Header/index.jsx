import { Link } from "react-router-dom";
import LOGO1 from '../images/LOGO1.png';
import styled from "styled-components"

const HeaderDiv = styled.div`
    display:flex;
    margin-top:2rem;
    width:100%;
    padding-left:7rem;
    
`
const LinkDiv = styled.div`
    width:50%;
    display:flex;
    justify-content:flex-end;
    align-self:center;
    text-align: right;
    padding-left:23rem;
`

const LinkStyle = styled(Link)`
    display:flex;
    justify-content:flex-end;
    color:#ff6060;
    width:25%;
    font-size:24px;
    font-family:Montserrat;
    font-style: normal;
    font-weight: 500;
    
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