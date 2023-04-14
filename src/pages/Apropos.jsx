import styled from "styled-components";
import kalen from '../components/images/kalen.png';
import Collapse from "../components/Collapse";


const AproposDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    margin-bottom:2rem;
`
const AproposImg = styled.img`
    object-fit:cover;
    width:86%;
    height:223px;
    border-radius:25px;
    margin-top:2.5rem;
    margin-bottom:2rem;
`

function Apropos(){

    return (
        <AproposDiv>
            <AproposImg src= {kalen} alt="Paysage"/>
            <Collapse label="Fiable">
                <p> Les annonces postées sur Kasa garantissent une fiabilité totale. 
                Les photos sont conformes aux logements, et toutes les informations 
                sont régulièrement vérifiées par nos équipes.</p>
            </Collapse>

            <Collapse label="Respect">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage 
                entraînera une exclusion de notre plateforme. </p>
            </Collapse>

            <Collapse label="Service">
                <p> Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                    N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </Collapse>

            <Collapse label="Sécurité">
                <p> La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
                chaque logement correspond aux critères de sécurité établis par nos services. En laissant 
                une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les 
                standards sont bien respectés. Nous organisons également des ateliers sur la sécurité 
                domestique pour nos hôtes.</p>
            </Collapse>

        </AproposDiv>
       
    )
}

export default Apropos