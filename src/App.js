import React, { Component } from 'react';
import './App.css';
import Addproduct from './components/Addproduct';
import Product from './components/Product';
import Cart from './components/Cart';
import Footerpage from './components/Footerpage';
class App extends Component {
  constructor(){
    super();
    this.state ={
      menu: "product"
    }
    this.onProduct = this.onProduct.bind(this);
    this.onAddProduct = this.onAddProduct.bind(this);
    this.onCart = this.onCart.bind(this);
  }
  onProduct(){
    this.setState({
      menu: "product"
    })
  }
  onAddProduct(){
    this.setState({
      menu: "add-product"
    })
  }
  onCart(){
    this.setState({
      menu: "cart"
    })
  }
  render(){
    return (
      <div className="container">
        <div className="row">
          <button className="btn btn-danger" onClick={this.onProduct}>Product</button>
          <button className="btn btn-danger" onClick={this.onAddProduct}>Add Product</button>
          <button className="btn btn-danger" onClick={this.onCart}> Cart</button>
         
        </div>
        <div className="row">
          {this.state.menu ==="product"? <Product />:null}
          {this.state.menu ==="add-product"? <Addproduct />:null}
          {this.state.menu ==="cart"?<Cart />:null}
        </div>
         
       <hr />
        <div className ="row" id = "footer" >
          <Footerpage />
        </div>
        
    </div>
    
    );
  }
  
}

export default App;
