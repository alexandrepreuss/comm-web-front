import React from 'react'
import { Button, Container } from 'react-bootstrap'
import './GameDetail.css'
import Header from '../Header'
import { Link } from 'react-router-dom'

const GameDetail = props => {
  const { nome, descricao, url_jogo, url_imagem, url_demo, id_categoria } = props.location.state.game
  return (
    <>
      <Header />
      <Container>
        <h2 className="mt-5">{nome}</h2>
        <img src={url_imagem} alt={nome} className="mb-4" />
        <p>{descricao}</p>
        <p>Link jogo: {url_jogo}</p>
        <Link to="/">
          <Button>Voltar</Button>
        </Link>
      </Container>
    </>
  )
}

export default GameDetail
