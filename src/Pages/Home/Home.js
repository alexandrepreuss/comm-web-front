import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import CardList from '../../Components/CardsList/CardList'
import Header from '../../Components/Header'
import Welcome from '../../Components/Welcome/Welcome'
import Signup from './Signup'

const Home = props => {
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

  if (!firstLogin) {
    return (
      <>
        <Header retrieveFilteredGames={props.retrieveFilteredGames} />
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
        <Header retrieveFilteredGames={props.retrieveFilteredGames} />
        <Signup {...props} addUserHandler={props.addUserHandler} />
      </>
    )
  }

  // if (!isAuthenticated) {
  //   return (
  //     <>
  //       <Header />
  //       <Welcome />
  //       <Container>
  //         <div style={{ marginTop: '32px' }}>
  //           <h2 style={{ marginBottom: '24px' }}>Catálogo de jogos</h2>
  //           <CardList {...props} />
  //         </div>
  //       </Container>
  //     </>
  //   )
  // }

  // if (isAuthenticated) {
  //   return (
  //     <>
  //       <Header />
  //       <Welcome />
  //     </>
  //   )
  // }
}

export default Home
