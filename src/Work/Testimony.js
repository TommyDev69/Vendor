import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Client from '../Image/client1.jpg'
import '../StylePage/NavbarStyling.css';

function Testimony() {
    return (
        <Container>
            <Row>


                <Col>
                <div className='bg-dark text-light p-3'>

                    <p id='slip'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                    </p>
                    <h6 id='slip-head'>
                        Moana Michell
                    </h6>
                    <p id='slips'>
                        magna aliqua
                    </p>
                    </div>

                    <div class="img-box bg-icnfo">
                       
                    </div>
                    <img src={Client} alt="" class="img-fluid" id='img-chart' />
                   
                </Col>

                <Col>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <h6>
                    Moana Michell
                </h6>
                <p>
                    magna aliqua
                </p>
                <div class="img-box">
                    <img src={Client} alt="" class="img-fluid " style={{ width: '20%', height: '80px' }} />
                </div>

            </Col>

        </Row>
        </Container >

    )
}

export default Testimony


    