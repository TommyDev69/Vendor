import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import '../StylePage/NavbarStyling.css';

class ProductNav extends Component {
    render() {
        return (
            <div>

                <Container>


                    <Nav className=" items justify-content-center pt-3">
                        <Link to={''} className='listItems' active>All</Link>
                        <Link to={'/burgar'} className='listItems'>Burger</Link>
                        <Nav.Link href="#link" className='listItems'>Pizza</Nav.Link>
                        <Nav.Link href="#link" className='listItems'>Pasta</Nav.Link>
                        <Nav.Link href="#link" className='listItems'>Fries</Nav.Link>


                    </Nav>

                </Container>
            </div>
        )
    }
}

export default ProductNav;

