import styled from "styled-components"
import Home from '../images/Home.png'

const BannerDiv = styled.div`
    display:flex;
    justify-content:center; 
    align-items:center;
    margin-top:5rem;
    margin-bottom:5rem;
`
const BannerImg = styled.img`
    position:absolute;
    object-fit:cover;
    width:86%;
    height:29%;
    border-radius:25px;
    filter: brightness(0.65);
    -webkit-filter: brightness(0.65);
    
`
const BannerTitle = styled.h1`
    position:relative;
    color:#fff; 
    font-size:48px; 
    font-family:Montserrat;
    font-weight:500;
    font-style:normal;
    line-height:68px;       
`

function Banner(){
    return(
        <BannerDiv>
            <BannerImg src= {Home} alt="Paysage"/>
            <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
        </BannerDiv>
    )
}
export default Banner