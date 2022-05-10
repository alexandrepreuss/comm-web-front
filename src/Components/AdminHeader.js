import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">CommWeb Admin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link to="/">
                <Nav.Link href="#home">Home</Nav.Link>
              </Link>
              <Link to="/admin">
                <Nav.Link href="#games">Jogos</Nav.Link>
              </Link>
              <Link to="/categories">
                <Nav.Link href="#category">Categorias</Nav.Link>
              </Link>
              <Nav.Link href="#link">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default AdminHeader
