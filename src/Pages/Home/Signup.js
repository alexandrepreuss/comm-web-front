import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Signup = props => {
  const { user } = useAuth0()
  const [username, setUsername] = useState(user.nickname)
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [birthdate, setBirthdate] = useState('')
  const [uf, setUf] = useState('')
  const [country, setCountry] = useState('')

  const allStates = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MS',
    'MT',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ]

  const userData = {
    id: user.sub,
    username: username,
    nome_completo: name,
    email: user.email,
    data_nascimento: birthdate,
    estado: uf,
    pais: country,
  }

  let history = useHistory()

  const signupHandler = e => {
    e.preventDefault()
    props.addUserHandler(userData)
    console.log(userData)
    history.push('/welcome')
  }

  useEffect(() => {
    console.log(user)
    console.log(username)
  }, [username, name, email, birthdate, uf, country])

  return (
    <>
      <div className="col-md-7 offset-md-2" style={{ marginTop: '3%' }}>
        <h1>Olá {user.given_name},</h1>
        <h4 className="mb-4">por gentileza, complete seu cadastro!</h4>
        <Form onSubmit={signupHandler} autoComplete="off">
          <Form.Group className="mb-3">
            <Form.Label>Nome de usuário: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Atualize seu nome de usuário"
              value={username}
              onChange={e => setUsername(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nome completo: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Atualize seu nome"
              value={name}
              onChange={e => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Data de nascimento </Form.Label>
            <Form.Control type="date" value={birthdate} onChange={e => setBirthdate(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Label>Estado:</Form.Label>
          <Form.Group className="mb-3" onChange={e => setUf(e.target.value)}>
            <Form.Select>
              <option value=""></option>
              {allStates.map(uf => (
                <option value={uf}>{uf}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>País: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Informe seu País"
              value={country}
              onChange={e => setCountry(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Button className="mt-2" type="submit">
            Salvar
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Signup
