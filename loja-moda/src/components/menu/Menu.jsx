
import {Link} from "react-router-dom"
import { Navegacao } from "../../styled"

export default function Menu(){

    return(
        <Navegacao>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/ModaMasculina">ModaMasculina</Link></li>
                <li><Link to="/ModaFeminina">ModaFeminina</Link></li>
                <li><Link to="/ModaInfantil">ModaInfantil</Link></li>
                <li><Link to="/Sobre">Sobre</Link></li>
            </ul>
        </Navegacao>
    )
}