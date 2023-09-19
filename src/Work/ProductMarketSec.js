import React, { Component } from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap';
import Pasta from '../Image/delicious pasta.png'
import French_Fries from '../Image/french fries.png'
import Del_Piz from '../Image/rounded pizza.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../StylePage/NavbarStyling.css';
class ProductMarketSec extends Component {
    render() {
        return (
            <Container>

                <Row className='mt-5'>
                    <Col sm={6} lg={4}>
                        <Card className='cardmarket'>
                            <div className='img-fluid inner-Photo'>
                                <Card.Img variant="top" className='center-block d-block mx-auto imagePas' src={Pasta} alt='burgar1' />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <h4 className='text-white Dept'>Delicious Pizzas</h4>
                                </Card.Title>
                                <Card.Text>
                                    <p className='text-white marketpro' style={{ fontSize: '18px' }}>Veniam debitis quaerat officiis quasi cupiditate quo,
                                        quisquam velit, magnam voluptatem repellendus sed eaque
                                    </p>
                                </Card.Text>
                                <div className=' d-flex justify-content-between'>
                                    <p style={{ fontSize: '21px', color: 'white' }}>$20</p>
                                    <FontAwesomeIcon icon={faShoppingCart} className='awesome' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={6} lg={4}>
                        <Card className='cardmarket'>
                            <div className='img-fluid inner-Photo' >
                                <Card.Img variant="top" className='center-block d-block mx-auto  image-Fries' src={French_Fries} alt='burgar1' />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <h4 className='text-white Dept'>Delicious Burgar</h4>
                                </Card.Title>
                                <Card.Text>
                                    <p className='text-white marketpro' style={{ fontSize: '18px' }}>Veniam debitis quaerat officiis quasi cupiditate quo,
                                        quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                </Card.Text>
                                <div className=' d-flex justify-content-between'>
                                    <p style={{ fontSize: '21px', color: 'white' }}>$20</p>
                                    <FontAwesomeIcon icon={faShoppingCart} className='awesome' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} lg={4}>
                        <Card className='cardmarket' >
                            <div className='img-fluid inner-Photo '>
                                <Card.Img variant="top" className=' img-fluid center-block d-block mx-auto image_Bur' src={Del_Piz} alt='burgar1' />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <h4 className='text-white Dept'>Delicious Pizza</h4>
                                </Card.Title>
                                <Card.Text>
                                    <p className='text-white marketpro' style={{ fontSize: '18px' }}>Veniam debitis quaerat officiis quasi cupiditate quo,
                                        quisquam velit, magnam voluptatem repellendus sed eaque</p>
                                </Card.Text>
                                <div className=' d-flex justify-content-between'>
                                    <p style={{ fontSize: '21px', color: 'white' }}>$20</p>
                                    <FontAwesomeIcon icon={faShoppingCart} className='awesome' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </Container>
        )
    }
}

export default ProductMarketSec