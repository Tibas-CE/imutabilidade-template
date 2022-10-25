import { useState } from 'react';
import { Garagem } from './Componentes/Garagem'
import { GlobalStyled } from './GlobalStyled'

export default function App() {
  //como usar o useState
  // const [num, setNum] = useState(1);
  // const mudaNumero = () => {
  //   setNum(num + 1)
  // }

  const [nome, setNome] = useState("Dani")

  return (
    <div className="App">
      <GlobalStyled />
      {/* uso do useState
      <button onClick={mudaNumero}>Muda numero</button>
      <p>{num}</p> */}

      <Garagem nomeTitulo={nome} setNomedaGaragem={setNome}/>
    </div>
  )
}
