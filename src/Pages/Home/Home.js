import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import CardList from '../../Components/CardsList/CardList'
import Header from '../../Components/Header'
import RecommendationList from '../../Components/Recommendation/RecommendationList'
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
        <Container className="d-flex">
          <div style={{ marginTop: '32px' }} className="col-md-10">
            <h2 style={{ marginBottom: '24px' }}>Catálogo de jogos</h2>
            <CardList {...props} />
          </div>
          <div className="col-md-3" style={{ marginTop: '90px' }}>
            <RecommendationList {...props} />
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
}

export default Home
