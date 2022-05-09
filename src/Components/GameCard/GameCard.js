import React from 'react'
import './GameCard.css'
import { Card, Button } from 'react-bootstrap'

const GameCard = props => {
  const { id, nome, descricao, url_jogo, url_imagem } = props.game

  return (
    <Card style={{ width: '12rem' }} className="game-list__card">
      <Card.Img variant="top" src={url_imagem} />
      <Card.Body>
        <Card.Title>{nome}</Card.Title>
        <Card.Text>{descricao.length > 55 ? descricao.slice(0, 55) + `...` : descricao}</Card.Text>
        <Button variant="primary">Ver jogo</Button>
      </Card.Body>
    </Card>
  )
}

export default GameCard
