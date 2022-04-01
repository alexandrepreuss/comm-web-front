import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    id: '',
    name: '',
    url_game: '',
    url_img: '',
    description: '',
    category: '',
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.addGameHandler(this.state)
    this.setState({
      name: '',
      url_game: '',
      url_img: '',
      description: '',
      category: '',
    })

    this.props.history.push('/')
  }

  render() {
    return (
      <>
        <div className="col-md-7 offset-md-2" style={{ marginTop: '3%' }}>
          <h2>Adicionar novo jogo</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome do jogo:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira aqui o nome do game"
                name="name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Insira aqui a descrição do jogo"
                name="description"
                value={this.state.description}
                onChange={e => this.setState({ description: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Url da imagem:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Url da imagem do jogo"
                value={this.state.url_img}
                onChange={e => this.setState({ url_img: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Link do jogo:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Url da página do jogo"
                value={this.state.url_game}
                onChange={e => this.setState({ url_game: e.target.value })}
              />
            </Form.Group>
            <Form.Label>Categoria:</Form.Label>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={e => this.setState({ category: e.target.value })}
              value={this.state.description}
            >
              <Form.Select aria-label="Default select example">
                <option value="">Selecione a categoria</option>
                <option value="Shooter">Shooter</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Arcade">Arcade</option>
                <option value="RPG">Role Playing Game (RPG)</option>
                <option value="Sports">Sports</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
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

export default RegisterForm
