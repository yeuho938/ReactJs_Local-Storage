import React, { Component } from 'react';
import CartItem from './CartItem';

class Cart extends Component {
    constructor(){
        super();
        this.state= {
            carts: JSON.parse(localStorage.getItem("cart"))
        }
    }
    onItemClick(key){
        return(event)=>{
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.splice(key,1);
        localStorage.setItem("cart", JSON.stringify(cart));
        this.setState({
            carts: JSON.parse(localStorage.getItem("cart"))
        })
        console.log(cart);
        }   
    }
    // this.state
    render() {
        return (
            <div>
                { this.state.carts.map((item,key) => <CartItem 
                                                key={key} 
                                                item = {item}
                                                onDelete = {this.onItemClick(key)}
                                                /> ) 
                }
            </div>
        );
    }
}

export default Cart;