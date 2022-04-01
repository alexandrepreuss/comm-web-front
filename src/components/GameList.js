import React from 'react'
import { Link } from 'react-router-dom'

const GameList = props => {
  const { id, name, url_game, url_img, description, category } = props.game
  return (
    <>
      <tr>
        <td title={name}>{name.length > 18 ? name.slice(0, 18) + `...` : name}</td>
        <td title={url_game}>{url_game.length > 12 ? url_game.slice(0, 12) + `...` : url_game}</td>
        <td title={url_img}>{url_img.length > 12 ? url_img.slice(0, 10) + `...` : url_img}</td>
        <td title={description}>{description.length > 18 ? description.slice(0, 19) + `...` : description}</td>
        <td>{category}</td>
        <td>
          <Link to={{ pathname: '/edit', state: { game: props.game } }}>
            <a href="#" className="btn btn-dark">
              editar
            </a>
          </Link>
        </td>
        <td>
          <a href="#" className="btn btn-danger" onClick={() => props.clickHandler(id)}>
            deletar
          </a>
        </td>
      </tr>
    </>
  )
}

export default GameList
