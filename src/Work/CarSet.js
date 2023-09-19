import React from 'react'
import Burger from '../Image/burgesale.jpg'
import Pizzas from '../Image/pizzas.jpg'
import Swal from 'sweetalert2'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function CarSet() {


    const Alert = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this !",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            confirmButtonColor: '#28a745',
            confirmButtonText: 'Yes,Submit!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Submitted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                confirmButtonMarginLeft:'ml-3',
                cancelButton: 'btn btn-danger'
               
            },
            buttonsStyling: true
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert when submitted!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            confirmButtonMarginLeft: '2%',
            cancelButtonText: ' Cancel',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Submitted!',
                    'Thank your for patronizing us!.',
                    'success'
                )
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }
    return (
        <div className='container-md ' style={{ marginTop: '7%' }}>
            <div class="row">
                <div class="col-sm-6 mb-3 mb-sm-0">

                    <div class="card">
                        <div class="card-body">
                            <div className='row'>
                                <div className='col-md-5'>
                                    <img src={Burger} className='img-fluid center-block d-block mx-auto CardSet' alt='burgar' />
                                </div>

                                <div className='col-md-7'>
                                    <h5 class="card-title text-light fw-bolder">Tasty Thursdays</h5>
                                    <div className='d-flex'>
                                        <h6 class="card-text fw-bolder text-center text-light">20%</h6>
                                        <p class="  text-light">off</p>
                                    </div>
                                    <p class="card-text"></p>
                                    <a href="#" class="btn btn-primary fw-bolder text-center" onClick={Alert} style={{ backgroundColor: '#ffbe33', border: 'none', height: '42px', width: '56%', borderRadius: '45px' }}>Order now &nbsp;
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="col-sm-6 mb-3 mb-sm-0">

                    <div class="card">
                        <div class="card-body">
                            <div className='row'>
                                <div className='col-md-5'>
                                    <img src={Pizzas} className='img-fluid center-block d-block mx-auto CardSet' alt='burgar' />
                                </div>

                                <div className='col-md-7'>
                                    <h5 class="card-title text-light fw-bolder">Tasty Thursdays</h5>
                                    <div className='d-flex'>
                                        <h6 class="card-text fw-bolder text-center text-light">15%</h6>
                                        <p class="  text-light text-center">off</p>
                                    </div>
                                    <p class="card-text"></p>
                                    <a href="#" class="btn btn-primary fw-bolder " onClick={Alert} style={{ backgroundColor: '#ffbe33', border: 'none', height: '42px', width: '56%', borderRadius: '45px' }}>Order now &nbsp;
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarSet