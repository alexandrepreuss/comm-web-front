import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const Welcome = () => {
  const { user, isAuthenticated } = useAuth0()
  //console.log(JSON.stringify(user, null, 2))

  return (
    isAuthenticated && (
      <>
        <h3>Bem vindo {user.name} !</h3>
        <p>Id de usuário: {user.sub}</p>
        <p>{JSON.stringify(user, null, 2)}</p>
      </>
    )
  )
}

export default Welcome
