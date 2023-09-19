import React, { Component } from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import Pizza1 from '../Image/delicious pizza.png'
import Burgar1 from '../Image/delicious Burgar.png'
import Deli1 from '../Image/deli pizza.png'
import ProductMarketSec from './ProductMarketSec';
import ProductMarketThir from './ProductMarketThir';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../StylePage/NavbarStyling.css';
class ProductMarket extends Component {
    constructor(props) {
        super(props)

        this.state = {
            burgar: true,
        }
    }
    render() {
        return (
            <div>
                <Container>

                    <Row className='mt-5'>
                        <Col sm={6} lg={4}>
                            <Card className='cardmarket'>
                                <div className='img-fluid innerPhoto'>
                                    <Card.Img variant="top" className='center-block d-block mx-auto imagePiz' src={Pizza1} alt='burgar1' />
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
                                    <Card.Img variant="top" className='center-block d-block mx-auto image-Piz' src={Burgar1} alt='burgar1' />
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
                                <div className='img-fluid inner-Photo ' >
                                    <Card.Img variant="top" className=' img-fluid center-block d-block mx-auto image_Piz' src={Deli1} alt='burgar1' />
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

                <ProductMarketSec />

                <ProductMarketThir />
                <div className='justify-content-center m-auto d-flex text-center'>
                    <Button className='text-light  rounded-pill ' style={{ width: '200px', backgroundColor: '#ffbe33', marginTop: '7%', border:'none' }}>Search</Button>
                </div>

            </div>
        )
    }
}

export default ProductMarket