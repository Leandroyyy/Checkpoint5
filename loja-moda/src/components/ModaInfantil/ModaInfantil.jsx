import { Inicio, Itens } from "../../styled";
import Cards from "../cards/Cards";


import Inf1 from "../img/menino1.png"
import Inf2 from "../img/menino2.png"
import Inf3 from "../img/menina.png"
    
import Infc1 from "../img/calca1c.png"
import Infc2 from "../img/calca2c.png"
import Infc3 from "../img/calca3c.png"

export default function ModaInfantil(){

 
 
    return(
        <Inicio>
        <h1>Moda Infantil</h1>

        <h1>Camisas</h1>

        <Itens>
            <Cards foto={Inf1} alt="Camiseta Azul Masculina" descricao="Camisa Azul - R$ 39,90"/>
            <Cards foto={Inf2} alt="Camisa Azul Masculina" descricao="Camisa Azul Comprida - R$ 59,90"/>
            <Cards foto={Inf3} alt="Camiseta Preta Feminina " descricao="Camisa Feminina Infanil - R$ 49,90"/>
        </Itens>            
        <h1>Calças</h1>
        <Itens>
            <Cards foto={Infc1} alt="Calça Azul Masculina" descricao="Calça Azul Masculina - R$ 59,90"/>
            <Cards foto={Infc2} alt="Calça Azul Feminina" descricao="Calça Azul Feminina - R$ 79,90"/>
            <Cards foto={Infc3} alt="Calça Branca Feminina" descricao="Calça Branca Feminina- R$ 79,90"/>
        </Itens>
    </Inicio>
    )
}