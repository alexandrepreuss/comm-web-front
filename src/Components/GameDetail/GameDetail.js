import React from 'react'
import { Button, Container } from 'react-bootstrap'
import './GameDetail.css'
import Header from '../Header'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const GameDetail = props => {
  const { user, isAuthenticated } = useAuth0()

  const { nome, descricao, url_jogo, url_imagem, url_demo, id_categoria } = props.location.state.game
  return (
    <>
      <Header />
      <Container>
        <h2 className="mt-5">{nome}</h2>
        <img src={url_imagem} alt={nome} className="mb-4" />
        <p>{descricao}</p>

        <p>
          <a href={url_jogo} className="btn btn-primary">
            Jogue agora!
          </a>
        </p>
        <Link to="/">
          <Button>Voltar</Button>
        </Link>

        {isAuthenticated && <p>Componente de comentários</p>}
      </Container>
    </>
  )
}

export default GameDetail
