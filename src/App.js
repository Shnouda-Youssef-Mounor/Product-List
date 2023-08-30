import './App.css';
import React, {Component} from 'react';

import ProductList from './components/productList/prouctList';

class App extends Component {
  state = {
   
  }


  render() {
    return (
      <div className="container">
        <h1 className='th h1'>Product List React App</h1>
        <div className="table">
         <ProductList/>
        </div>
      </div>
    )
  }
}

export default App;
