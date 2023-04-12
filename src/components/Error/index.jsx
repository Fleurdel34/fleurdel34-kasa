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
`

const ErrorParagraphe = styled.p`

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    color: #FF6060;
    margin-bottom:5rem;
`
const ErrorLink = styled(Link)`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #FF6060;
    margin-top:5rem;
    margin-bottom:7rem;
`

function Error(){
    return(
        <ErrorDiv>
            <ErrorTitle>404</ErrorTitle>
            <ErrorParagraphe>Oups! La page que vous demandez n'existe pas.</ErrorParagraphe>
            <ErrorLink to="/">Retourner sur la page d’accueil</ErrorLink>
        </ErrorDiv>

        
    )
}
export default Error



