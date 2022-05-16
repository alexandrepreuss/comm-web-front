import React from 'react'
import { Container, Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import retrieveFilteredGames from '../Utils/filtered-games'

const Header = props => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0()

  const searchGames = async name => {
    retrieveFilteredGames(name)
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Link to="/">
            <Navbar.Brand>COMMWEB</Navbar.Brand>
          </Link>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              {/* <Link to="/">
                <Nav.Link href="#action1">Home</Nav.Link>
              </Link> */}
              {/* <Link to="/admin">
                <Nav.Link href="#action2">Admin</Nav.Link>
              </Link> */}
              {!isAuthenticated && (
                <Nav.Link href="#login" onClick={() => loginWithRedirect()}>
                  Login
                </Nav.Link>
              )}
              {isAuthenticated && (
                <Nav.Link href="#logout" onClick={() => logout()}>
                  Sair
                </Nav.Link>
              )}
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="outline-success" onClick={() => searchGames('mario')}>
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
