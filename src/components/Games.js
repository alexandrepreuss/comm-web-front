import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import GameList from './GameList'

const Games = props => {
  const inputEl = useRef('')
  const renderGameList = props.games.map(game => {
    const deleteGameHandler = id => {
      props.getGameId(id)
    }

    return <GameList game={game} clickHandler={deleteGameHandler} key={game.id} />
  })

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value)
  }

  return (
    <>
      <div className="col-md-7 offset-md-2" style={{ marginTop: '3%' }}>
        <div className="main d-flex" style={{ justifyContent: 'space-between', marginBottom: '2%' }}>
          <h2>Lista de Jogos</h2>
          <Link to="/add">
            <Button>Adicionar jogo</Button>
          </Link>
        </div>
        <Form>
          <Form.Group>
            <Form.Control
              ref={inputEl}
              type="text"
              placeholder="Buscar jogos"
              value={props.term}
              onChange={getSearchTerm}
            />
          </Form.Group>
        </Form>
        <table className="table">
          <thead className="thead-light">
            <tr>
              {/* <th>ID</th> */}
              <th>Nome</th>
              <th className="d-none d-sm-table-cell">URL</th>
              <th className="d-none d-sm-table-cell">Imagem</th>
              <th className="d-none d-sm-table-cell">Descrição</th>
              <th className="d-none d-sm-table-cell">Categoria</th>
            </tr>
          </thead>
          <tbody>{renderGameList.length > 0 ? renderGameList : 'Nenhum resultado encontrado'}</tbody>
        </table>
      </div>
    </>
  )
}

export default Games
