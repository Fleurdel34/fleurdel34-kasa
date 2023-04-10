/*import styled from "styled-components"*/

import { useParams } from "react-router-dom";

function Logements(){
   const { id } = useParams()

   return(
        <div>
            <h1> Titre du logement { id } </h1>
        </div>
        
   )
    


}

export default Logements