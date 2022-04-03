import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GameList = props => {
  const { id, nome, descricao, url_imagem, url_jogo, url_demo, id_categoria, categoria } = props.game

  return (
    <>
      <tr>
        <td title={nome}>{nome.length > 18 ? nome.slice(0, 18) + `...` : nome}</td>
        <td title={url_jogo}>{url_jogo.length > 12 ? url_jogo.slice(0, 12) + `...` : url_jogo}</td>
        <td title={url_imagem}>{url_imagem.length > 12 ? url_imagem.slice(0, 10) + `...` : url_imagem}</td>
        <td title={descricao}>{descricao.length > 18 ? descricao.slice(0, 19) + `...` : descricao}</td>
        <td>{categoria.nome}</td>
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
