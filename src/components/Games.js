import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import GameList from './GameList'

const Games = props => {
  const renderGameList = props.games.map(game => {
    const deleteGameHandler = id => {
      props.getGameId(id)
    }

    return <GameList game={game} clickHandler={deleteGameHandler} key={game.id} />
  })

  return (
    <>
      <div className="col-md-7 offset-md-2" style={{ marginTop: '3%' }}>
        <div className="main d-flex" style={{ justifyContent: 'space-between', marginBottom: '2%' }}>
          <h2>Lista de Jogos</h2>
          <Link to="/add">
            <Button>Adicionar jogo</Button>
          </Link>
        </div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              {/* <th>ID</th> */}
              <th>Nome</th>
              <th>URL</th>
              <th>Imagem</th>
              <th>Descrição</th>
              <th>Categoria</th>
            </tr>
          </thead>
          <tbody>{renderGameList}</tbody>
        </table>
      </div>
    </>
  )
}

export default Games
