import React from 'react'
import Link from 'next/link'
import {Button, Container, Form, FormControl, Nav, NavDropdown, Offcanvas, Navbar, Image} from "react-bootstrap";

const nfaDependencyVersion =
  require('../package.json').dependencies['next-firebase-auth']
const nextDependencyVersion = require('../package.json').dependencies.next
const firebaseDependencyVersion =
  require('../package.json').dependencies.firebase

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 16,
  },
  versionsContainer: {
    marginLeft: 0,
    marginRight: 'auto',
  },
  button: {
    marginLeft: 16,
    cursor: 'pointer',
  },
}

const Header = ({ email, signOut , avatar}) => (
    <Navbar bg="light" expand="lg">
        <Container >
          <Navbar.Brand href="/" >UA Jobs Seackers</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0 me-auto"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>

            </Nav>
            <Nav>
              <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      <Container>
        {email ? (
            <>
              <Image src={avatar} roundedCircle={true} thumbnail={true} width={40} height={40} />
              <Navbar.Text>Signed in as {email}</Navbar.Text>
              <Button variant="secondary" onClick={() => {
                signOut()
              }}>Sign out</Button>
            </>
        ) : (
            <>
              <Button variant="primary" href="/auth">Sign in</Button>
            </>
        )}
      </Container>
      </Navbar>

);

export default Header
