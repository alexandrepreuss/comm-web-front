import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import './GameCard.css'

const GameCard = props => {
  const { id, nome, descricao, url_imagem } = props.game

  return (
    <>
      <Card style={{ width: '12rem', height: '22rem' }} className="game-list__card">
        <Card.Img variant="top" src={url_imagem} style={{ height: '40%' }} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{nome}</Card.Title>
          <Card.Text>{descricao.length > 55 ? descricao.slice(0, 55) + `...` : descricao}</Card.Text>
          <diva className="mt-auto">
            <Link to={{ pathname: `/game/${id}`, state: { game: props.game } }}>
              <Button variant="dark">Acessar jogo</Button>
            </Link>
          </diva>
        </Card.Body>
      </Card>
    </>
  )
}

export default GameCard
