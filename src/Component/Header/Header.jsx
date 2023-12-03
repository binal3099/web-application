import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <Navbar className='bg' data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <NavLink to="/" className={"li"}>Home</NavLink>
                        <NavLink to="/" className={"li"}>Add Emp</NavLink>
                        <NavLink to="/View" className={"li"}>View Emp</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header