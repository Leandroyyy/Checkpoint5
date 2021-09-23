import './App.css';
import Cabecalho from './components/cabecalho/Cabecalho';
import Corpo from './components/corpo/Corpo';
import Rodape from './components/rodape/Rodape';
import { Html } from './styled';

function App() {
  return (
    <Html>
        <Cabecalho/>
        <Corpo/>
        <Rodape/>      
    </Html>
  );
}

export default App;
