import { Inicio, Itens } from "../../styled";
import Cards from "../cards/Cards";

import Pedro from "../img/pedro.png";
import Joao from "../img/joao.png";
import Jordan from "../img/jordan.png";
import Matheus from "../img/matheus.png";
import Leandro from "../img/leandro.jpeg";

export default function Sobre() {
  return (
    <Inicio>
      <h1>Quem Somos</h1>
      <Itens>
        <Cards foto={Pedro} alt="Pedro" descricao="Pedro" />
        <Cards foto={Joao} alt="João" descricao="João Pedro" />
        <Cards foto={Jordan} alt="Jordan" descricao="Jordan" />
      </Itens>
      <Itens>
        <Cards foto={Matheus} alt="Matheus" descricao="Matheus" />
        <Cards foto={Leandro} alt="Leandro" descricao="Leandroyyy" />
      </Itens>
    </Inicio>
  );
}
