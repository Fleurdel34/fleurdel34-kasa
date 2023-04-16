//construction de la page Apropos

import styled from "styled-components";
import kalen from '../components/images/kalen.png';
import Collapse from "../components/Collapse";

const AproposDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    margin-bottom:2rem;
    @media (max-width: 768px){
        margin-bottom:0;
    } 
`
const AproposImg = styled.img`
    object-fit:cover;
    width:86%;
    height:223px;
    border-radius:25px;
    margin-top:2.5rem;
    margin-bottom:2rem;
    @media (max-width: 768px){
        border-radius:10px;
        margin-top:1rem;
        margin-bottom:1rem;
    } 
    
`
const AproposParagraphe =styled.p`
    @media (max-width: 768px){
        font-size:12px;
    }  
`
function Apropos(){

    return (
        <AproposDiv>
            <AproposImg src= {kalen} alt="Paysage"/>
            <Collapse label="Fiable">
                <AproposParagraphe> Les annonces postées sur Kasa garantissent une fiabilité totale. 
                Les photos sont conformes aux logements, et toutes les informations 
                sont régulièrement vérifiées par nos équipes.</AproposParagraphe>
            </Collapse>

            <Collapse label="Respect">
                <AproposParagraphe>La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage 
                entraînera une exclusion de notre plateforme. </AproposParagraphe>
            </Collapse>

            <Collapse label="Service">
                <AproposParagraphe> Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                N'hésitez pas à nous contacter si vous avez la moindre question.</AproposParagraphe>
            </Collapse>

            <Collapse label="Sécurité">
                <AproposParagraphe> La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                chaque logement correspond aux critères de sécurité établis par nos services. En laissant 
                une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les 
                standards sont bien respectés. Nous organisons également des ateliers sur la sécurité 
                domestique pour nos hôtes.</AproposParagraphe>
            </Collapse>

        </AproposDiv>
       
    )
};

export default Apropos;