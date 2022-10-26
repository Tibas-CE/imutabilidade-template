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

  const [automovel2, setAutomovel2] = useState({
    cor: "prata",
    ano: 2004,
    flex: false
  })

  const [automovel3, setAutomovel3] = useState({
    cor: "Azul",
    ano: 1985,
    flex: false
  })

  const [automovel4, setAutomovel4] = useState({
    cor: "Branco",
    ano: 2015,
    flex: true
  })

  const mudaNomeNoBotao = () => {
    props.setNomedaGaragem("Nevinha")
  }

  const auto ={
    cor: "Vermelho",
    ano: 2020,
    flex: true
  }

  const auto2 ={
    cor: "Verde",
    ano: 2015,
    flex: true
  }

  const auto3 ={
    cor: "Amarelo",
    ano: 1985,
    flex: false
  }
  
  const auto4 ={
    cor: "Preto",
    ano: 2021,
    flex: true
  }

  return (
    <GaragemContainer>
      <h1>Garagem da {props.nomeTitulo}</h1>
      <button onClick={mudaNomeNoBotao}>Mudar nome</button>
      <Botao>Muda nome</Botao>

      <Estacionamento>
        <Carro automovel={automovel} setCarro={setAutomovel} novoCarro={auto}/>
        <Carro automovel={automovel2} setCarro={setAutomovel2} novoCarro={auto2}/>
        <Carro automovel={automovel3} setCarro={setAutomovel3} novoCarro={auto3}/>
        <Carro automovel={automovel4} setCarro={setAutomovel4} novoCarro={auto4}/>
      </Estacionamento>
    </GaragemContainer>
  )
}
