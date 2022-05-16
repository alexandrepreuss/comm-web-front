import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import AdminHeader from '../../../Components/AdminHeader'

class EditCategory extends Component {
  constructor(props) {
    super(props)
    const { id, nome } = props.location.state.category
    this.update = this.update.bind(this)
    this.state = {
      id,
      nome,
    }
  }

  update(e) {
    e.preventDefault()

    this.props.updateCategoryHandler(this.state)
    this.setState({
      nome: '',
    })
    console.log(this.state)

    this.props.history.push('/categories')
  }

  render() {
    return (
      <>
        <AdminHeader />
        <div className="col-md-7 offset-md-2" style={{ marginTop: '3%' }}>
          <h2>Atualizar informações</h2>
          <Form onSubmit={this.update} autoComplete="off">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={e => this.setState({ nome: e.target.value })}
            >
              <Form.Label>Nome da categoria:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira aqui o nome da categoria"
                name="title"
                value={this.state.nome}
              />
            </Form.Group>
            <Button className="w-100" style={{ marginTop: '16px' }} type="submit">
              Salvar alterações
            </Button>
          </Form>
        </div>
      </>
    )
  }
}

export default EditCategory
