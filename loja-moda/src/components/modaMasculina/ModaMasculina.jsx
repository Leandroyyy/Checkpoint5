
import { Inicio, Itens } from "../../styled";
import Cards from "../cards/Cards";

import Camisa0 from "../img/Camisa0.png"
import Camisa1 from "../img/Camisa1.png"
import Camisa2 from "../img/Camisa2.png"

import Calca0 from "../img/calca0.png"
import Calca1 from "../img/calca1.png"
import Calca2 from "../img/calca2.png"


export default function ModaMasculina(){

    return(
        
             <Inicio>
            <h1>Moda Masculina</h1>

            <h1>Camisas</h1>

            <Itens>
                <Cards foto={Camisa0} alt="Camisa Azul" descricao="Camisa Azul - R$ 39,90"/>
                <Cards foto={Camisa1} alt="Camisa Rosa" descricao="Camisa Rosa - R$ 39,90"/>
                <Cards foto={Camisa2} alt="Camisa Branca" descricao="Camisa Branca - R$ 49,90"/>
            </Itens>            
            <h1>Calças</h1>
            <Itens>
                <Cards foto={Calca0} alt="Calça verde" descricao="Calça verde - R$ 59,90"/>
                <Cards foto={Calca1} alt="Calça jeans" descricao="Calça jeans - R$ 79,90"/>
                <Cards foto={Calca2} alt="Calça jeans escura" descricao="Calça jeans escura - R$ 79,90"/>
            </Itens>
        </Inicio>
        
    )
}