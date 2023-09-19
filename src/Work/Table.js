import React, { Component } from 'react'
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import Map from '../Image/maplocation.png'
import Swal from 'sweetalert2'
import '../StylePage/NavbarStyling.css';

class Table extends Component {
    constructor(props) {
        super(props)

        this.state = {
            names: '',
            phone: '',
            email: '',
            select:''
        }
    }
    enterName = (event) => {
        this.setState({
            names: event.target.value
        })
    }

    enterPhone = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    enterEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    setList = (e) =>{
        this.setState({
            select:e.target.value
        })
    }

    Finish = (event) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                confirmButtonMarginLeft: 'ml-3',
                cancelButton: 'btn btn-danger'

            },
            buttonsStyling: true
        })
        swalWithBootstrapButtons.fire({
            title: 'Make a Reservation',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            confirmButtonMarginLeft: '2%',
            cancelButtonText: ' Cancel',
            reverseButtons: true,
            showClass: {
                popup: 'animate__animated animate__fadeInDown',


            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp',


            }

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Submission Successful',
                    showConfirmButton: true,
                    timer: 3500
                })
            }
           
        })

        
        // setInterval (() =>{
        //     alert('Submission Successful')
        // })

    }
    render() {
    const validate = ['Enter The Person','2', '3', '4', '5', '6']

    let list = validate.map(set =><option key='unique' value={validate}>{set}</option> )




        return (
            <div>
            <Container>
                <Row>
                    <Col >
                        <div style={{ paddingLdeft: '10%' }}>
                            <h4 className='text-dark fw-bold booking '>Book A Table</h4>
                            <Form onSubmit={this.Finish}>
                                <Form.Group className="mt-4" controlId="formBasicEmail">

                                    <Form.Control type="text" className='field' size="lg" value={this.state.names} onChange={this.enterName} placeholder="Enter Your Name" />

                                </Form.Group>

                                <Form.Group className="mt-5" controlId="formBasicEmail">
                                    <Form.Control type="number" className='field' size="lg" value={this.state.value} onChange={this.enterPhone} placeholder="Enter Your Mobile" />

                                </Form.Group>

                                <Form.Group className="mt-5" controlId="formBasicEmail">
                                    <Form.Control type="email" className='field' size="lg" alue={this.state.value} onChange={this.enterEmail} placeholder="Enter Your Email" />

                                </Form.Group>

                                <Form.Group className="mt-5" controlId="formBasicEmail">
                                    <Form.Select type="text" className='field' value={this.state.value} onChange={this.setList} size="lg" alue={this.state.value}  placeholder="Enter Your Email" >
                                    
                                        {list}
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group className="mt-5" controlId="formBasicEmail">
                                    <Form.Control type="date" className='field' size="lg" value={this.state.value} onChange={this.enterEmail} placeholder="Enter email" />

                                </Form.Group>

                                <Button className='text-light rounded-pill fw-bold' onClick={this.Finish}  style={{ width: '160px', height: '50px', fontSize: '15px', backgroundColor: '#ffbe33', marginTop: '5%', border: 'none' }}>Read More</Button>
                            </Form>
                        </div>

                    </Col>

                    <Col>
                        <div style={{ marginTop: '29%',  height: '441px', width:'93%'}}>
                                <img src={Map} alt='...' className='img-fluid h-100 ' style={{ marginLeft:'10%', borderRadius:'15px'}} />
                        </div>
                    </Col>

                </Row>
                </Container>

            </div>
        )
    }
}

export default Table