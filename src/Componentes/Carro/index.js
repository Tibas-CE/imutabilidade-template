import { CarroContainer } from './styles'

export function Carro(props) {

  const mudaCarro = () => {
    props.setCarro(props.novoCarro)
  }

  return (
    <CarroContainer>
      <h2>Modelo</h2>
      <ul>
        <li>Cor: {props.automovel.cor}</li>
        <li>Ano: {props.automovel.ano}</li>
        <li>Flex: {props.automovel.flex ? 'Sim' : 'Não'}</li>
        {/* <li>Adicionado: {adicionadoPor}</li> */}
        <button onClick={mudaCarro}>Muda carro</button>
      </ul>
    </CarroContainer>
  )
}
