import React from 'react'
import './GameCard.css'
import { Card, Button } from 'react-bootstrap'

const GameCard = props => {
  const { nome, descricao, url_imagem } = props.game

  return (
    <>
      <Card style={{ width: '12rem', height: '22rem' }} className="game-list__card">
        <Card.Img variant="top" src={url_imagem} style={{ height: '40%' }} />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{nome}</Card.Title>
          <Card.Text>{descricao.length > 55 ? descricao.slice(0, 55) + `...` : descricao}</Card.Text>
          <Button variant="dark" className="mt-auto">
            Acessar jogo
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default GameCard
