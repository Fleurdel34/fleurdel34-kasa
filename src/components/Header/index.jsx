import { Link } from "react-router-dom";
import LOGO1 from '../images/LOGO1.png';
/*import styled from "styled-components"*/

function Header(){
    return(
        <div className="header">
            <div className="image_logo">
             <img src= {LOGO1} alt="Logo"/>
            </div>
            <div className="menu_nav">
                <nav>
                    <Link to="/">Accueil</Link>
                    <Link to="/apropos">A propos</Link>
                </nav>
            </div>
        </div>
    )
}
export default Header