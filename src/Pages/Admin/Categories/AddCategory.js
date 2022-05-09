import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class AddCategory extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    nome: '',
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.addCategoryHandler(this.state)
    this.setState({
      nome: '',
    })

    this.props.history.push('/categories')
  }

  render() {
    return (
      <>
        <div className="col-md-7 offset-md-2" style={{ marginTop: '3%' }}>
          <h2>Adicionar categoria</h2>
          <Form onSubmit={this.handleSubmit} autoComplete="off">
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
              Salvar
            </Button>
          </Form>
        </div>
      </>
    )
  }
}
export default AddCategory
