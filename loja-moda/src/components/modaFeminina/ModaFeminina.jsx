
import {Inicio, Itens } from "../../styled";
import Cards from "../cards/Cards";

import Camisaf0 from "../img/camisaf0.png"
import Camisaf1 from "../img/camisaf1.png"
import Camisaf2 from "../img/camisaf2.png"

import Calcaf0 from "../img/calcaf0.png"
import Calcaf1 from "../img/calcaf1.png"
import Calcaf2 from "../img/calcaf2.png"

export default function ModaFeminina(){

    return(
        <Inicio>
            <h1>Moda Feminina</h1>

            <h1>Camisas</h1>

            <Itens>
                <Cards foto={Camisaf0} alt="Camisa Rosa" descricao="Camisa Rosa - R$ 99,90"/>
                <Cards foto={Camisaf1} alt="Camisa Branca" descricao="Camisa Branca - R$ 79,90"/>
                <Cards foto={Camisaf2} alt="Camisa Rosa 2" descricao="Camisa Rosa(Básica) - R$ 89,90"/>
            </Itens>            
            <h1>Calças</h1>
            <Itens>
                <Cards foto={Calcaf0} alt="Calça Marrom" descricao="Calça Marrom  - R$ 109,90"/>
                <Cards foto={Calcaf1} alt="Calça Azul" descricao="Calça Azul - R$ 119,90"/>
                <Cards foto={Calcaf2} alt="Calça vermelha" descricao="Calça vermelha - R$ 129,90"/>
            </Itens>
            
        </Inicio>
    )
}