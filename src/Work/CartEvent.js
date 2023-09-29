import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../StylePage/NavbarStyling.css';

import NavbarDisplay from './NavbarDisplay';
class CartEvent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });

        console.log(this.state.count);
    }
    render() {
        return (
<div>
<NavbarDisplay Handle={this.state.count} />
</div>,
            <div className='awesome text-white'>

                <FontAwesomeIcon icon={faShoppingCart} Handle={this.state.count} onClick={() => this.increment()} />
                <span className='badge badge-warning' id='lblCartCount'>{this.state.count}</span>
            </div>

        )
    }
}

export default CartEvent