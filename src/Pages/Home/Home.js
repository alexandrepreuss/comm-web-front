import React from 'react'
import { Container } from 'react-bootstrap'
import CardList from '../../Components/CardsList/CardList'
import Header from '../../Components/Header'
import Welcome from '../../Components/Welcome/Welcome'

const Home = props => {
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

export default Home
