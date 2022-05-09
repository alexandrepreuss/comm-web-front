import React from 'react'
import GameCard from '../GameCard/GameCard'
import './CardList.css'

const CardsList = props => {
  const renderCardList = props.games.map(game => {
    return <GameCard game={game} key={game.id} />
  })

  return <div className="game-list">{renderCardList}</div>
}

export default CardsList
