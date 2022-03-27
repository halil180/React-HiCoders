import React from 'react'
import { Navbar,Container } from 'react-bootstrap';
const Nav = () => {
  return (
    <>
    <Navbar className='header-color'>
  <Container>
    <Navbar.Brand href="#home" className='text-danger'>Molex Watches</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text className='text-danger'>
        Your selections
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}
export default Nav