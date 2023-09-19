
// import CarSet from './Work/CarSet';

// import {Routes, Route} from 'react-router-dom'

// import Homepage from './Work/Homepage';
import './App.css';
import { Route, Routes } from 'react-router-dom'

import NavbarDisplay from './Work/NavbarDisplay';
import CarSet from './Work/CarSet';
import Product from './Work/Product';
import ProductMarket from './Work/ProductMarket';
import ProductMarketSec from './Work/ProductMarketSec';
import ProductBoardcast from './Work/ProductBoardcast';
import Table from './Work/Table';
import Testimony from './Work/Testimony';
import './StylePage/NavbarStyling.css'

function App() {
  return (
    <div className="App">
      <NavbarDisplay />
      <CarSet />
      <Product />

      <Routes>
        <Route path='' element={<ProductMarket />} />

        <Route path='/burgar' element={<ProductMarketSec />} />
      </Routes>

      <ProductBoardcast />
      <Table />
      <Testimony />

    </div>
  );
}

export default App;
