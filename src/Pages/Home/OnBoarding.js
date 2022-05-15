import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CardList from '../../Components/CardsList/CardList'
import Header from '../../Components/Header'
import Welcome from '../../Components/Welcome/Welcome'
import Signup from './Signup'

const HomeOnBoarding = props => {
  const { user, isAuthenticated } = useAuth0()
  const [firstLogin, setFirstLogin] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      props.showOnBoarding({ id: user.sub }).then(value => {
        if (value) {
          console.log('User found porra!')
          console.log(`é primeiro login: ` + firstLogin)
        } else {
          setFirstLogin(true)
          console.log('New user!')
          console.log('é o primeiro login: ' + firstLogin)
        }
        console.log(value)
      })
    }
  }, [firstLogin])

  //   return (
  //     <>
  //       <h2>Seja bem vindo!</h2>
  //       <Link to="/">
  //         <Button>Voltar para o site!</Button>
  //       </Link>
  //     </>
  //   )
  // }
  if (!firstLogin) {
    return (
      <>
        <Header />
        <Welcome />
        <Container>
          <div style={{ marginTop: '32px' }}>
            <h2 style={{ marginBottom: '24px' }}>Catálogo de jogos</h2>
            <CardList {...props} />
          </div>
        </Container>
      </>
    )
  }

  if (firstLogin) {
    return (
      <>
        <Header />
        <Signup {...props} addUserHandler={props.addUserHandler} />
      </>
    )
  }
}

export default HomeOnBoarding
