import react from 'react';
import { useState } from 'react';
import { Carro } from '../Carro';
import { Botao, Estacionamento, GaragemContainer } from './styles';

export function Garagem(props) {

  const [automovel, setAutomovel] = useState({
    cor: "preto", 
    ano: 1991, 
    flex: false
  });

  const carro = {
    cor: "prata",
    ano: 2004,
    flex: false
  }

  const carro2 = {
    cor: "Azul",
    ano: 1985,
    flex: false
  }

  const carro3 = {
    cor: "Branco",
    ano: 2015,
    flex: true
  }

  const mudaNomeNoBotao = () => {
    props.setNomedaGaragem("Nevinha")
  }

  return (
    <GaragemContainer>
      <h1>Garagem da {props.nomeTitulo}</h1>
      <button onClick={mudaNomeNoBotao}>Mudar nome</button>
      <Botao>Muda nome</Botao>

      <Estacionamento>
        <Carro automovel={automovel} setCarro={setAutomovel.automovel}/>
        <Carro automovel={automovel} setCarro={setAutomovel.carro}/>
        <Carro automovel={automovel} setCarro={setAutomovel.carro2}/>
        <Carro automovel={automovel} setCarro={setAutomovel.carro3}/>
      </Estacionamento>
    </GaragemContainer>
  )
}
