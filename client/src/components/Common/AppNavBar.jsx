import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import { NavLink }from 'react-router-dom'


const AppNavBar = () => {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="">CRUD</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to='/' className='mx-2' >List</NavLink>
                    <NavLink to='/create' >Create</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default AppNavBar