import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CategoryList = props => {
  const { id, nome } = props.category

  return (
    <>
      <tr>
        <td title={id} style={{ fontWeight: 'bold' }}>
          <p>{id}</p>
        </td>
        <td className="d-none d-sm-table-cell">{nome}</td>

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

export default CategoryList
