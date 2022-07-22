import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Clock } from './clock';

const Menu = () => {

        return (
            <div>
                <Navbar bg="dark" expand="sm" variant="dark">
                    <Container>
                        <Navbar.Brand className='ml-3'><Link className="navbar-brand" to="/">Yan's Laboratory</Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">

                                <Container className='ml-sm-3'>
                                    <Link className="nav-link" to='/'>Home</Link>
                                </Container>

                                <Container className='ml-sm-3'>
                                    <NavDropdown title="Experiment" id="basic-nav-dropdown">
                                        <Link className="dropdown-item" to="/experiment/weather">Weather Forecast</Link>
                                        <Link className="dropdown-item" to="/experiment/task">Task Tracker</Link>
                                        <Link className="dropdown-item" to="/experiment/XXOO">XXOO Game</Link>
                                        <Link className="dropdown-item" to="/experiment/converter">Converter</Link>
                     {/*                   <NavDropdown.Divider />
                                        <Link href="#action/3.4">Separated link</Link>*/}
                                        </NavDropdown>
                                </Container>
                                
                                <Container className='ml-sm-3'>
                                    <Link className="nav-link" to="/component">Components</Link>
                                </Container>

                                <Container className='ml-sm-3'>
                                    <Link className="nav-link" to="/reference">Reference</Link>
                                </Container>
                            </Nav>
                                
                                <Clock />

                        </Navbar.Collapse>
                    </Container>
                </Navbar>   
            </div>
        )
    }

export default Menu