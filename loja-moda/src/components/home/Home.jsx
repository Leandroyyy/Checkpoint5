import { Card, Inicio } from "../../styled";
import Cards from "../cards/Cards";

import Masculino from "../img/modaMasculino.jpg"
import Feminino from "../img/modaFeminina.png"
import Infantil from "../img/modaInfantil.png"


export default function Home(){
    return(
        <Inicio>
            <h1>Boutique do Leandro</h1>

            <Card>
                <Cards foto={Masculino} alt="Moda Masculina" descricao="Moda Masculina" link="/ModaMasculina" />
                <Cards foto={Feminino} alt="Moda Feminina" descricao="Moda Feminina" link="/ModaFeminina"/>
                <Cards foto={Infantil} alt="Moda Infantil" descricao="Moda Infantil" link="/ModaInfantil"/>
            </Card>
        </Inicio>
    )
}