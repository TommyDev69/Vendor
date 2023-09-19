import React from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

import MarketBur from '../Image/market bugar.png'

import '../StylePage/NavbarStyling.css';

function ProductBoardcast() {
    return (
        <div className='comtainer-fluid ' style={{ backgroundColor: '#222831', marginTop: '7%', hecight: '790px' }}>
            <Container>
                <Row>
                    <div className='col-md order-2 order-md-1'>
                        <div className='justify-content-center m-auto d-flex text-center '>
                            <img src={MarketBur} className='img-fluid h-100 ' alt='bugar broadcast' style={{ heijght: '220px', width: '100%', maxWidth: '445px', paddingTop: '17%' }} />
                        </div>
                    </div>
                    <Col className='text-light order-1 order-md-2 '>
                        <h4 className='text-light fw-bold business' > We Are Open For Business</h4>
                        <div>
                            <p className='text-light  businex'>There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't look
                                even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be
                                sure there isn't anything embarrassing hidden in the middle of text. All
                            </p>
                        </div>
                        <Button className='text-light  rounded-pill fw-bold' style={{ width: '160px', height: '50px', fontSize: '15px', backgroundColor: '#ffbe33', marginTop: '5%', border: 'none' }}>Read More</Button>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductBoardcast