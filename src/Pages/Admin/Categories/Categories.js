import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import CategoryList from '../../../components/CategoryList'

const Categories = props => {
  const inputEl = useRef('')
  const renderCategoryList = props.categories.map(category => {
    const deleteCategoryHandler = id => {
      props.getCatId(id)
    }
    return <CategoryList category={category} clickHandler={deleteCategoryHandler} key={category.id} />
  })

  const refreshPage = () => {
    window.location.reload(false)
  }

  return (
    <>
      <div className="col-md-7 offset-md-2" style={{ marginTop: '3%' }}>
        <div className="main d-flex" style={{ justifyContent: 'space-between', marginBottom: '2%' }}>
          <h2>Lista de Jogos</h2>
          <Link to="/addcat">
            <Button>Adicionar categoria</Button>
          </Link>
        </div>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Id</th>
              <th className="d-none d-sm-table-cell">Categoria</th>
            </tr>
          </thead>
          <tbody>{renderCategoryList.length > 0 ? renderCategoryList : 'Nenhum resultado encontrado'}</tbody>
        </table>
        <Button onClick={refreshPage}>Atualizar Lista</Button>
      </div>
    </>
  )
}

export default Categories
