import React, { Component } from 'react'
import ProductNav from './ProductNav'

// import ProductMarket from './ProductMarket'
// import {Routes, Route} from 'react-rounter-dom'
import '../StylePage/NavbarStyling.css'
import '../App.css'
class Product extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className='text-center fw-bold' style={{ paddingTop: '10%', fontSize: '40px', font:'Roboto Condensed  , sans-serif' }}>Our Menu</h3>

        <ProductNav />

       

      </div>
    )
  }
}

export default Product