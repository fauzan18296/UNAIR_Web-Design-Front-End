import {Navbar, Container, Nav} from 'react-bootstrap'

const NavbarComp = () => {
  return (
    <Navbar fixed='top' className='glass-navbar navbar-nav d-flex align-items-center'>
      <Container className='d-flex justify-content-center'>
          <Navbar.Brand href='/' className='fs-4 fw-bold'>
            <span className='fw-bold'>ASAFY</span>
          </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto fw-bold   fw-semibold fs-5'>
            <Nav.Link href="/about">About</Nav.Link>
             <Nav.Link href="/category">Categories</Nav.Link>
        </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavbarComp