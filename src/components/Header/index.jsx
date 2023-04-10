import { Link } from "react-router-dom";
/*import styled from "styled-components"*/

function Header(){
    return(
       /*{<div>
        <img src "../images/LOGO1.png" alt="image du logo de Kasa"/>
         </div>}
         */
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/apropos">A propos</Link>
        </nav>
    )
}
export default Header