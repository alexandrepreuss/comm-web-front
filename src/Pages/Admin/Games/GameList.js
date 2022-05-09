import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const GameList = props => {
  const { id, nome, descricao, url_imagem, url_jogo, url_demo, id_categoria, categoria } = props.game

  return (
    <>
      <tr>
        <td title={nome} style={{ fontWeight: 'bold' }}>
          <p>{nome.length > 18 ? nome.slice(0, 18) + `...` : nome}</p>
        </td>
        <td className="d-none d-sm-table-cell" title={url_jogo}>
          {url_jogo}
        </td>
        <td className="d-none d-sm-table-cell" title={url_imagem}>
          {url_imagem.length > 12 ? url_imagem.slice(0, 10) + `...` : url_imagem}
        </td>
        <td className="d-none d-sm-table-cell" title={descricao}>
          {descricao.length > 18 ? descricao.slice(0, 19) + `...` : descricao}
        </td>
        <td className="d-none d-sm-table-cell">{categoria.nome}</td>
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
