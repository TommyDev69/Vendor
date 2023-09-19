import React, { Component } from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons'
import '../StylePage/NavbarStyling.css';
class Jet extends Component {
    render() {
        let dropDrown = {
            color: 'red',
            background:'blue',
            fontSize:'26px'
        };
        return (
            <Navbar expand="xl" className="bg-tertiary Body">
                <Container >
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-2 mx-auto  navContent" navbarScroll>
                            <Nav.Link href="#action1" style={{ color: 'white', fontSize: '16px' }}>HOME</Nav.Link>
                            <Nav.Link href="#action2" style={{ color: 'white', paddingLeft: '30px', fontSize: '16px' }}>MENU</Nav.Link>
                            <Nav.Link href="#action2" style={{ color: 'white', paddingLeft: '30px', fontSize: '16px' }}>ABOUT</Nav.Link>
                            <Nav.Link href="#action2" style={{ color: 'white', paddingLeft: '30px', fontSize: '16px' }}>BOOK TABLE</Nav.Link>
                            <div className='styleaDropdown'>
                                <NavDropdown title="REGISTER" style={dropDrown}>
                                    <NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                </NavDropdown>
                            </div>

                            <Row claswsName='container-fluid' style={{ MarginLeqft: 'auto' }}>
                                <Col className=" bg-danqger" >
                                    <FontAwesomeIcon icon={faUser} className=" text-white" style={{ fontSize: '16px', paddaingLeft: '35px', masrginLeft: '10px', paddingTop: '10px' }} />
                                    <FontAwesomeIcon icon={faShoppingCart} className=" text-white" style={{ fontSize: '16px', paddingLeft: '7px', paddingTop: '10px' }} />
                                    <FontAwesomeIcon icon={faSearch} className=" text-white" style={{ fontSize: '16px', paddingLeft: '7px', paddingTop: '10px' }} />
                                </Col>
                                <Col>
                                    <Button className=' col-6 	text-light rounded-pill' style={{ width: '100px', height: '50px', fontSize: '18px', marginLeft: '15px' }}>Search</Button>

                                </Col>
                            </Row>


                        </Nav>



                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Jet