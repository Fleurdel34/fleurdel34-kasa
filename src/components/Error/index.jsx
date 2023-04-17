//Creation du composant Footer
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center; 
`

const ErrorTitle = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 288px;
    color: #FF6060;
    margin-top:3rem;
    margin-bottom:0;
    @media (max-width: 768px){
        font-size: 96px;  
        margin-top:9rem;      
    } 
`

const ErrorParagraphe = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    color: #FF6060;
    margin-bottom:5rem;
    @media (max-width: 768px){
        font-size: 18px; 
        width: 175px;
        text-align: center;
        margin-top:0;
        margin-bottom:1rem;
      }
    } 
`
const ErrorLink = styled(Link)`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #FF6060;
    margin-top:5rem;
    margin-bottom:7rem;
    @media (max-width: 768px){
        font-size: 14px; 
        margin-bottom:9rem;       
    } 
`

function Error(){
    return(
        <ErrorDiv>
            <ErrorTitle>404</ErrorTitle>
            <ErrorParagraphe>Oups! La page que vous demandez n'existe pas.</ErrorParagraphe>
            <ErrorLink to="/">Retourner sur la page d’accueil</ErrorLink>
        </ErrorDiv>
    )
};
export default Error;



