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
import CauDisplay from './CauDisplay';

import { Link } from 'react-router-dom';

// import {Link} from "react-router-dom";
// import NavbarDisplay from './CauDisplay';
import '../StylePage/NavbarStyling.css';
class NavbarDisplay extends Component {
	render() {
		let nameDropdrown = {

			color: 'white',
			padding:'1px 7px',
			fontSize: '20px',
     textDecoration: 'none'

		};
		return (
			<div className='heroAre Body'>
				<Navbar expand="xl" className="bg-tertiary " >
					<Container >
						<Navbar.Brand href="#" style={{ marginTop: '1px' }}>Navbar scroll</Navbar.Brand>
						<Navbar.Toggle aria-controls="navbarScroll" />
						<Navbar.Collapse id="navbarScroll">
							<Nav className="justify-content-center flex-grow-1 navContent " style={{ marginTop: '8px' }} navbarScroll>
								<Link to={''} className='point  active' style={{ color: '#ffffff', backgrouncdColor:'blue' }}>HOME</Link>
								<Link href="#action2" className='point' >MENU</Link>
								<Nav.Link href="#action2" className='point' >ABOUT</Nav.Link>
								<Nav.Link href="#action2" className='point' >BOOK TABLE</Nav.Link>
								<div className='styleaDropdown'>
									<NavDropdown title="REGISTER" style={nameDropdrown}>
										<NavDropdown.Item href="#action3" >Action</NavDropdown.Item>
										<NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
										<NavDropdown.Divider />
										<NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
									</NavDropdown>
								</div>
								&nbsp;&nbsp;&nbsp;&nbsp;
									<Row claswsName='  ff '  >
										<Col className=" yy"  >
								<div className='justify-content-end' style={{ fontSize: '16px', padding: '12px 0px 12px 10px' }}>

											<FontAwesomeIcon icon={faUser} className=" text-white" />&nbsp;&nbsp;&nbsp;
											<FontAwesomeIcon icon={faShoppingCart} className=" text-white" /> &nbsp;&nbsp;&nbsp;
											<FontAwesomeIcon icon={faSearch} className=" text-white" />
								</div>

										</Col>
										<Col style={{ width: '200px', paddingBottom: '8px', height: '45px' }}>
											<Button className='text-light rounded-pill bg-warning' style={{ width: '200px', backgroundColor: '#ffbe33', marginBottom: '5px', height: '40px', fontSize: '16px' }}>Search</Button>

										</Col>
									</Row>


							</Nav>



						</Navbar.Collapse>
					</Container>
				</Navbar>

				<CauDisplay />
			</div>
		)
	}
}

export default NavbarDisplay