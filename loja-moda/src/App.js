import "./App.css";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import ModaMasculina from "./components/modaMasculina/ModaMasculina";
import ModaFeminina from "./components/modaFeminina/ModaFeminina";
import ModaInfantil from "./components/ModaInfantil/ModaInfantil";
import Sobre from "./components/sobre/Sobre";
import Rodape from "./components/rodape/Rodape";

function App() {
  return (
    <>
      <Menu />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ModaMasculina" component={ModaMasculina} />
        <Route path="/ModaFeminina" component={ModaFeminina} />
        <Route path="/ModaInfantil" component={ModaInfantil} />
        <Route path="/Sobre" component={Sobre} />
      </Switch>
      <Rodape />
    </>
  );
}

export default App;
