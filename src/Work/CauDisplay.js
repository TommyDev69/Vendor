import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import '../StylePage/NavbarStyling.css';



function CauDisplay() {
    return (

        <div className='container'>

            <Carousel className='d' controls={false} indicators={true} >

                <Carousel.Item interval={1000} active>
                    <div className='row indicator'>
                        <div className='col-md-7 col-lg-7 active'>
                            <h3 className='text-white  caurolDisplay'>fast food restaurant</h3>

                            <p className='text-white   caurolDisplays'> Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia
                                laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste
                                magni quos nihil ducimus libero ipsam.
                                <div>
                                    <Button className='text-light rounded-pill bg-warning' style={{ width: '150px', border: 'none', backgroundColor: '#ffbe33', marginTop: '12px', height: '40px', fontSize: '16px' }}>Search</Button>

                                </div>

                            </p>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <div className='row indicator'>
                        <div className='col-md-7 col-lg-7 active'>
                            <h3 className='text-white  caurolDisplay'>fast food restaurant</h3>

                            <p className='text-white   caurolDisplays'> Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia
                                laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste
                                magni quos nihil ducimus libero ipsam.
                                <div>
                                    <Button className='text-light rounded-pill bg-warning' style={{ width: '150px', border: 'none', backgroundColor: '#ffbe33', marginTop: '12px', height: '40px', fontSize: '16px' }}>Search</Button>

                                </div>

                            </p>
                        </div>
                    </div>
                </Carousel.Item>

                <Carousel.Item interval={300}>
                    <div className='row indicator'>
                        <div className='col-md-7 col-lg-7 active'>
                            <h3 className='text-white  caurolDisplay'>fast food restaurant</h3>

                            <p className='text-white   caurolDisplays'> Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia
                                laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste
                                magni quos nihil ducimus libero ipsam.
                                <div>
                                    <Button className='text-light rounded-pill bg-warning' style={{ width: '150px', border: 'none', backgroundColor: '#ffbe33', marginTop: '12px', height: '40px', fontSize: '16px' }}>Search</Button>

                                </div>

                            </p>
                        </div>
                    </div>
                </Carousel.Item>


            </Carousel>
        </div>
    );
}

export default CauDisplay;