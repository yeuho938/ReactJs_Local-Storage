import React, { Component } from 'react';
import Productitem from './Productitem';

class Product extends Component {
    constructor(){
        super();
        this.products =  JSON.parse(localStorage.getItem("ds_products"));
        if(!this.products){
            this.products =[];
        }
      }
      onItemClick(item){
          return(event)=>{
              let cart = JSON.parse(localStorage.getItem('cart'));
              if(!cart){
                  cart =[];
                
              }
              let oldItem = cart.find((element)=> element.title === item.title);
              if(oldItem){
                  oldItem.quantity+= 1;
              }
              else{
                  item.quantity = 1;
                  cart.push(item)
              }
              localStorage.setItem('cart',JSON.stringify(cart));
              console.log(cart);
          }
      }
    render() {
        return (
            <div>
                { this.products.map((item, index) => <Productitem 
                                                key={index} 
                                                item = {item}
                                                onItemClick = {this.onItemClick(item)}
                                                /> ) 
                }
            </div>
        );
    }
}

export default Product;