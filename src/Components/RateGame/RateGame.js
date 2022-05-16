import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { saveEvaluation } from '../../Utils/rate'

const RateGame = () => {
  const { user } = useAuth0()

  const allowedScore = [1, 2, 3, 4, 5]
  const [rate, setRate] = useState([])
  const [comment, setComment] = useState([])

  const evaluation = {
    userId: user.sub,
    rate: rate,
    comment: comment,
  }

  const rateHandler = e => {
    e.preventDefault()
    //enviar post para API
    console.log(evaluation)
  }

  return (
    <>
      <h3>Avalie o jogo!</h3>
      <Form onSubmit={rateHandler} className="mb-3">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" onChange={e => setRate(e.target.value)}>
          <Form.Label>Deixe sua nota!</Form.Label>
          <Form.Select style={{ width: 'auto' }}>
            {allowedScore.map(score => (
              <option value={score}>{score}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Deixe seu comentário</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Deixe um comentário de até 250 caracteres."
            maxlength="250"
            onChange={e => setComment(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Avaliar!</Button>
      </Form>
    </>
  )
}

export default RateGame
