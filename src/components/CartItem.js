import React, { Component } from 'react';
import './CartItem.css';
class CartItem extends Component {
    render() {
        return (
            <div>
                {/* <div id ='content'>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className="thumbnail">
                    <img data-src="#" alt="" />
                    <div className="caption">
                        <h3>{this.props.item.title}</h3>
                        <p>
                        </p>
                        <h3>{this.props.item.price}</h3>
                        <h3>{this.props.item.quantity}</h3>
                      
                        <p />
                        <p>
                    <button onClick= {this.props.onDelete} > Delete </button>
                    </p>
                </div>
                </div>
             </div>
        </div>   */}
                <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1" id ="box">
                    <div className="cart_container">
                        <div className="cart_title">Shopping Cart<small> (1 item in your cart) </small></div>
                        <div className="cart_items">
                        <ul className="cart_list">
                            <li className="cart_item clearfix">
                            <div className="cart_item_image"><img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560924153/alcatel-smartphones-einsteiger-mittelklasse-neu-3m.jpg" alt="" /></div>
                            <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                <div className="cart_item_name cart_info_col">
                                <div className="cart_item_title">Name</div>
                                <div className="cart_item_text">Samsung C7 Pro</div>
                                </div>
                                <div className="cart_item_color cart_info_col">
                                <div className="cart_item_title">Color</div>
                                <div className="cart_item_text"><span style={{backgroundColor: '#999999'}} />Silver</div>
                                </div>
                                <div className="cart_item_quantity cart_info_col">
                                <div className="cart_item_title">Quantity</div>
                                <div className="cart_item_text">1</div>
                                </div>
                                <div className="cart_item_price cart_info_col">
                                <div className="cart_item_title">Price</div>
                                <div className="cart_item_text">₹22000</div>
                                </div>
                                <div className="cart_item_total cart_info_col">
                                <div className="cart_item_title">Total</div>
                                <div className="cart_item_text">₹22000</div>
                                </div>
                            </div>
                            </li>
                        </ul>
                        </div>
                        <div className="order_total">
                        <div className="order_total_content text-md-right">
                            <div className="order_total_title">Order Total:</div>
                            <div className="order_total_amount">₹22000</div>
                        </div>
                        </div>
                        <div className="cart_buttons"> 
                        <button type="button" className="button cart_button_clear">Continue Shopping</button>
                        <button type="button" className="button cart_button_checkout">Add to Cart</button> 
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default CartItem;