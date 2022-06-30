import React, {useState, useEffect} from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const Menu = (props) => {

    const [today, setToday] = useState(new Date());
    const intervalId = setInterval(() => setToday(new Date()),30000);

    useEffect(() => {

        return () => {
            clearInterval(intervalId)
        }
    })

    const formatDateTime = (date) => {
        const month = date.getMonth() + 1 < 10? '0' + (date.getMonth() + 1) : date.getMonth();

        return `${date.getFullYear()}/${month}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    }

    const clickRef = () => {
        props.onSelectDropdown('ref')
    }

    const clickWeather = () => {
        props.onSelectDropdown('weather')
    }

    const clickHome = () => {
        props.onSelectDropdown('')
    }

        return (
            <div>
                <Navbar bg="dark" expand="sm" variant="dark">
                    <Container>
                        <Navbar.Brand className='ml-3' onClick={clickHome}>Yan's Laboratory</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">

                                <Container className='ml-sm-3'>
                                    <Nav.Link onClick={clickHome}>Home</Nav.Link>
                                </Container>

                                <Container className='ml-sm-3'>
                                    <NavDropdown title="Experiment" id="basic-nav-dropdown">
                                        <NavDropdown.Item onClick={clickWeather}>Weather Forecast</NavDropdown.Item>
                                        <NavDropdown.Item href="">Coming...</NavDropdown.Item>
                                        <NavDropdown.Item href="">Coming...</NavDropdown.Item>
                     {/*                   <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                                        </NavDropdown>
                                </Container>

                                <Container className='ml-sm-3'>
                                    <Nav.Link onClick={clickRef}>Reference</Nav.Link>
                                </Container>
                            </Nav>

                            <Navbar.Text>
                                <Container className='ml-sm-3 mt-1 mt-sm-0'>
                                    Today: {formatDateTime(today)}
                                </Container>
                            </Navbar.Text>     

                        </Navbar.Collapse>
                    </Container>
                </Navbar>   
            </div>
        )
    }
export default Menu;