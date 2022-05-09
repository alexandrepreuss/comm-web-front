import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import CardList from '../../Components/CardsList/CardList'
import Header from '../../Components/Header'

const Home = props => {
  return (
    <>
      <Header />
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
