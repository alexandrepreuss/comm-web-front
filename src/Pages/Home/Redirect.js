import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header'

const Redirect = props => {
  return (
    <>
      <Header retrieveFilteredGames={props.retrieveFilteredGames} />
      <Container>
        <div className="h-100 d-flex justify-content-center align-items-center flex-column mt-5">
          <h2>Olá! Seja bem vindo!</h2>
          <Link to="/">
            <a className="btn btn-primary mt-5">Ir para o Comm Web App!</a>
          </Link>
        </div>
      </Container>
    </>
  )
}

export default Redirect
