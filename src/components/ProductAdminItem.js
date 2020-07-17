import React, { Component } from 'react';

class ProductAdminItem extends Component {
    render() {
        return (
            <tr>
            <td>{this.props.item.title}</td>
            <td><img src ={'image/' + this.props.item.image} width='150px' height='150px' /> </td>
            <td>{this.props.item.price}</td>
            <td>{this.props.item.quantity}</td>
            <td> <button onClick= {this.props.onDelete} className ='btn btn-danger' > Delete </button></td>
            <td> <button onClick= {this.props.onDelete} className ='btn btn-danger' > Edit </button></td>
            </tr>
        );
    }
}

export default ProductAdminItem;