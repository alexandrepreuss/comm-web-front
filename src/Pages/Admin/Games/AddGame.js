import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import AdminHeader from '../../../Components/AdminHeader'

class AddGame extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    nome: '',
    url_jogo: '',
    url_imagem: '',
    url_demo: '',
    descricao: '',
    id_categoria: '',
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.addGameHandler(this.state)
    this.setState({
      nome: '',
      url_jogo: '',
      url_imagem: '',
      url_demo: '',
      descricao: '',
      id_categoria: '',
    })

    console.log(this.state)
    this.props.history.push('/admin')
  }

  render() {
    return (
      <>
        <AdminHeader />
        <div className="col-md-7 offset-md-2" style={{ marginTop: '3%' }}>
          <h2>Adicionar novo jogo</h2>
          <Form onSubmit={this.handleSubmit} autoComplete="off">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome do jogo:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira aqui o nome do game"
                name="nome"
                value={this.state.nome}
                onChange={e => this.setState({ nome: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Insira aqui a descrição do jogo"
                name="descricao"
                value={this.state.descricao}
                onChange={e => this.setState({ descricao: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Url da imagem:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Url da imagem do jogo"
                value={this.state.url_imagem}
                onChange={e => this.setState({ url_imagem: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Link do jogo:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Url da página do jogo"
                value={this.state.url_jogo}
                onChange={e => this.setState({ url_jogo: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Link da demo:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Url da demo do jogo"
                value={this.state.url_demo}
                onChange={e => this.setState({ url_demo: e.target.value })}
              />
            </Form.Group>

            <Form.Label>Categoria:</Form.Label>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={e => this.setState({ id_categoria: e.target.value })}
              value={this.state.id_categoria}
            >
              <Form.Select aria-label="Default select example">
                <option value="">Selecione a categoria</option>
                {this.props.categories.map(category => (
                  <option value={category.id}>{category.nome}</option>
                ))}
                {/* <option value="">Selecione a categoria</option>
                <option value={1}>Ação</option>
                <option value={2}>Luta</option>
                <option value={3}>Tiro</option>
                <option value={4}>Corrida</option> */}
              </Form.Select>
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

export default AddGame
