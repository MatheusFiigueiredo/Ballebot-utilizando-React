import Cabecalho from "./componentes/Cabecalho";
import ConteudoPrincipal from "./componentes/ConteudoPrincipal";
import ConteudoSecundario from "./componentes/ConteudoSecundario";
import Rodape from "./componentes/Rodape";


function App() {
  return (
    <div className="App">
      <Cabecalho />
      <ConteudoPrincipal />
      <ConteudoSecundario />
      <Rodape />
    </div>
  );
}

export default App;
