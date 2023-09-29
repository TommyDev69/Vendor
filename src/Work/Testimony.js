import { useState } from 'react';
import {Carousel,Container,Row,Col} from 'react-bootstrap';


import Client from '../Image/client1.jpg'
import Client2 from '../Image/client2.jpg'
import '../StylePage/NavbarStyling.css';

function Testimony() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return (
        <Container>

            <Carousel activeIndex={index}  className='conc' onSelect={handleSelect} indicators={false} controls={true}>

                <Carousel.Item>
                      
                    <Row>
                    
                        <Col>
                            <div className='bg-dark text-white' id='slips'>
                                <p id='slip'>   
                                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <h6 id='slipping'>
                                Moana Michell
                                </h6>
                                <p id='slippings'>
                                    magna aliqua
                                </p>
                            </div>
                            <div className='gunny'>
                                <div className='img-box'></div>
                                <img src={Client} alt="" class="img-fluid" id='img-chart' />
                            </div>
                        </Col>

                        <Col>
                            <div className='bg-dark text-white' id='slips'>
                                <p id='slip'>   
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <h6 id='slipping'>
                                    Mike Hamell
                                </h6>
                                <p id='slippings'>
                                    magna aliqua
                                </p>
                            </div>
                            <div className='gunny'>
                                <div className='img-box'></div>
                                <img src={Client} alt="" class="img-fluid" id='img-chart' />
                            </div>
                        </Col>
                    </Row>
                </Carousel.Item>

                <Carousel.Item>
                    
                        
                    <Row>
                        
                        <Col>
                            <div className='bg-dark text-white' id='slips'>
                                <p id='slip'>   
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <h6 id='slipping'>
                                    Moana Michell
                                </h6>
                                <p id='slippings'>
                                    magna aliqua
                                </p>
                            </div>
                            <div className='gunny'>
                                <div className='img-box'></div>
                                <img src={Client} alt="" class="img-fluid" id='img-chart' />
                            </div>
                        </Col>

                        <Col>
                            <div className='bg-dark text-white' id='slips'>
                                <p id='slip'>   
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <h6 id='slipping'>
                                    Mike Hamell
                                </h6>
                                <p id='slippings'>
                                    magna aliqua
                                </p>
                            </div>
                            <div className='gunny'>
                                <div className='img-box'></div>
                                <img src={Client} alt="" class="img-fluid" id='img-chart' />
                            </div>
                        </Col>

                    </Row>
                </Carousel.Item>

                <Carousel.Item>
                  
                       
                    <Row>
                        
                        <Col>
                            <div className='bg-dark text-white' id='slips'>
                                <p id='slip'>   
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <h6 id='slipping'>
                                    Moana Michell
                                </h6>
                                <p id='slippings'>
                                    magna aliqua
                                </p>
                            </div>
                            <div className='gunny'>
                                <div className='img-box'></div>
                                <img src={Client} alt="" class="img-fluid" id='img-chart' />
                            </div>
                        </Col>
                        <Col>
                            <div className='bg-dark text-white' id='slips'>
                                <p id='slip'>   
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                </p>
                                <h6 id='slipping'>
                                    Mike Hamell
                                </h6>
                                <p id='slippings'>
                                    magna aliqua
                                </p>
                            </div>
                            <div className='gunny'>
                                <div className='img-box'></div>
                                <img src={Client} alt="" class="img-fluid" id='img-chart' />
                            </div>
                        </Col>
                </Row>
                </Carousel.Item>
            </Carousel>
            
            <div className='bg-dark text-white' id='slips'>
                <p id='slip'>   
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <h6 id='slipping'>
                    Moana Michell
                </h6>
                <p id='slippings'>
                    magna aliqua
                </p>
            </div>
            <div className='img-box'></div>
            <img src={Client} alt="" class="img-fluid" id='img-chart' />
            <div className='bg-dark text-white' id='slips'>
                <p id='slip'>   
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <h6 id='slipping'>
                    Moana Michell
                </h6>
                <p id='slippings'>
                    magna aliqua
                </p>
            </div>
            <div className='gunny'>
            <div className='img-box'></div>
            <img src={Client} alt="" class="img-fluid" id='img-chart' />
</div>
        </Container>

    )
}

export default Testimony
