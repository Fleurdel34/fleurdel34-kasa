//Creation du composant banner
import styled from "styled-components";
import Home from '../images/Home.png';

const BannerDiv = styled.div`
    display:flex;
    justify-content:center; 
    align-items:center;
    margin-top:5rem;
    margin-bottom:5rem;
    @media (max-width: 768px){
        margin-top:1rem;
        height:111px;
        flex-wrap:wrap;
        margin-bottom:0;
    }  
`
const BannerImg = styled.img`
    position:absolute;
    object-fit:cover;
    width:86%;
    height:29%;
    border-radius:25px;
    filter: brightness(0.65);
    -webkit-filter: brightness(0.65);
    @media (max-width: 768px){
        height:111px;
        border-radius:10px;
        width:89%;
    }   
`
const BannerTitle = styled.h1`
    position:relative;
    color:#fff; 
    font-size:48px; 
    font-family:Montserrat;
    font-weight:500;
    font-style:normal;
    line-height:68px; 
    @media (max-width: 768px){
       font-size:24px;
       width:45%;
       height:60px;
       line-height:20px;
       right:18%;
       top:10%;
    }         
`

function Banner(){
    return(
        <BannerDiv>
            <BannerImg src= {Home} alt="Paysage"/>
            <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
        </BannerDiv>
    )
};
export default Banner;