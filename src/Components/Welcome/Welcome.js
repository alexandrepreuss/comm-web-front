import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Container } from 'react-bootstrap'
import './Welcome.css'

const Welcome = () => {
  const { user, isAuthenticated } = useAuth0()
  //console.log(JSON.stringify(user, null, 2))

  return (
    isAuthenticated && (
      <div className="welcome">
        <Container>
          <h2 className="mt-4">Seja bem-vindo, {user.name} !</h2>
          <p>Id de usuário: {user.sub}</p>
        </Container>
      </div>
    )
  )
}

export default Welcome
