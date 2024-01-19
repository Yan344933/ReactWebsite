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
                                        <NavDropdown.Item to="/experiment/weather" as={Link}>Weather Forecast</NavDropdown.Item>
                                        <NavDropdown.Item to="/experiment/task" as={Link}>Task Tracker</NavDropdown.Item>
                                        <NavDropdown.Item to="/experiment/XXOO" as={Link}>XXOO Game</NavDropdown.Item>
                                        <NavDropdown.Item to="/experiment/converter" as={Link}>Converter</NavDropdown.Item>
                                        <NavDropdown.Item to="/experiment/bus-map-compare" as={Link}>Bus Map Compare</NavDropdown.Item>
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