import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Recommendation = props => {
  const { id, nome } = props.game

  return (
    <Link to={{ pathname: `/game/${id}`, state: { game: props.game } }}>
      <a>{nome}</a>
    </Link>
  )
}

export default Recommendation
