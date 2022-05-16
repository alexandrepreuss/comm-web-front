import React from 'react'
import { Button, Container } from 'react-bootstrap'
import './GameDetail.css'
import Header from '../Header'
import api from '../../Api/axios'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import RateGame from '../RateGame/RateGame'
import Comments from '../Comments/Comments'

const GameDetail = props => {
  const { user, isAuthenticated } = useAuth0()
  const { id, nome, descricao, url_jogo, url_imagem, url_demo, id_categoria } = props.location.state.game

  const submitHandler = e => {
    e.preventDefault()
  }

  return (
    <>
      <Header />
      <Container>
        <div className="d-flex">
          <div className="mb-4 col-6">
            <h2 className="mt-5">{nome}</h2>
            <img src={url_imagem} alt={nome} className="mb-4" />
            <p>{descricao}</p>

            <div className="mb-3">
              <a href={url_jogo} className="btn btn-primary">
                Jogue agora!
              </a>
            </div>
          </div>
          <Comments />
        </div>

        {isAuthenticated && <RateGame />}
        <Link to="/welcome">
          <Button>Voltar para home!</Button>
        </Link>
      </Container>
    </>
  )
}

export default GameDetail
