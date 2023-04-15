//Creation des Card pour la page Accueil

import styled from "styled-components";
import logements from "../datas/logements.json";
import { Link} from "react-router-dom";


const SectionCard = styled.section`
    display:grid;
    grid-template-columns: 340px 340px 340px;
    gap: 50px 60px;
    fontfamily:Montserrat;
    fontweight:500;
    fontsize:18px;
    background: #F7F7F7;
    border-radius: 25px;
    margin-left: 14%;
    padding-top:50px;
    padding-bottom:50px;
`
const LinkCard = styled(Link)`
    text-decoration:none;
`

const ArticleCard = styled.article`
    width:340px;
    height:340px;
    border-radius: 10px;
    background:#FF6060 linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);   
    color:#fff;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 142.6%;
    display: flex;
    flex-wrap:wrap;
    align-items: flex-end;
    color: #FFFF;
`
const ParagrapheArticle = styled.p`
    inline-size:200px;
    margin-left:20px;
`

function Card(){
    return(
        <SectionCard>
            {logements.map((item)=> 
                <LinkCard key={item.id} to={`/Logements/${item.id}`}>
                    <ArticleCard>
                        <ParagrapheArticle >{item.title}</ParagrapheArticle>
                    </ArticleCard>
                </LinkCard>)}
        </SectionCard>)      
};
export default Card;