import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Recommendation from './Recommendation'

const RecommendationList = props => {
  const renderRecommendations = props.games.slice(0, 5).map(game => {
    return (
      <ul>
        <li>
          <Recommendation game={game} key={game.id} />
        </li>
      </ul>
    )
  })

  return (
    <>
      <Card>
        <Card.Body>
          <p>Baseado no que você curtiu:</p>
          <ul>{renderRecommendations}</ul>
        </Card.Body>
      </Card>
    </>
  )
}

export default RecommendationList
