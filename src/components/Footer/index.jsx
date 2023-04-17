// Creation du composant footer
import styled from "styled-components";
import LOGO from '../images/LOGO.png';

const FooterDiv = styled.div`
    background:#000000;
    display:column;
    justify-content:space-around;
    height:209px;
    text-align:center;
    @media (max-width: 768px){
        height:245px;        
    } 
`
const FooterImg = styled.img`
    margin-top:4rem;
    @media (max-width: 768px){
        height:37px;
        margin-top:6rem;        
    } 
`
const FooterParagraph = styled.p`
    color:#fff;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    @media (max-width: 768px){
        font-size: 12px;
        margin-top:2rem;        
    } 
`

function Footer(){
    return(
        <FooterDiv>
            <FooterImg src= {LOGO} alt="Logo"/>
            <FooterParagraph>© 2020 Kasa. All rights reserved</FooterParagraph> 
        </FooterDiv> 
    )
};
export default Footer;