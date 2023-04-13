/*import styled from "styled-components"*/
import logements from "../datas/logements.json"
import { Link } from "react-router-dom";

/*import { useParams } from "react-router-dom";*/

function Logements(){
   /*const { id } = useParams()*/

   return(
        <div>
            {logements.map((item)=>(
                <li key={item.id}>
                    <Link to={`/Logements/${item.id}`}></Link>
                    <img src={item.cover} alt={item.title}/>
                    <h1>{item.title}</h1>
                </li>))}
        </div>) 
}

export default Logements




