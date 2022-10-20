import {Button, Container, Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../styling/Navbar.css'

function NavbarComponent() {
    return (
        <div>
            <Navbar bg="black" variant="black">
                <Container style={{display:'flex', justifyContent:'start'}}>
                    <Navbar style={{color: 'white', paddingRight: '10px'}}>
                        <Link to='/' className='links'>
                            <Button variant="light">Tucows</Button>
                        </Link>
                    </Navbar>
                    <Nav className="me-2" >
                        <Nav style={{color: 'white'}}>
                            <Link to='/form' className='links'>
                                <Button variant="light">Local Board</Button>
                            </Link>
                        </Nav>
                    </Nav>
                    <Nav className="me-2">
                        <Nav style={{color: 'white'}}>
                            <Link to='/globalBoard' className='links'>
                                <Button variant="light">Global Board</Button>
                            </Link>
                        </Nav>
                    </Nav>
                </Container>
            </Navbar>
        </div>

    );
  }

export default NavbarComponent;