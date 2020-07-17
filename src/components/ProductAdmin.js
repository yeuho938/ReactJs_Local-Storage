import React, { Component } from 'react';
import ProductAdminItem from './ProductAdminItem';

class ProductAdmin extends Component {
    constructor(){
        super();
        this.state = {
            products: JSON.parse(localStorage.getItem("ds_products")),
            sortType: "asc"
        }
        if(!this.products){
            this.products =[];
        }
        this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
      }
    sortByPriceAsc(){
         const {products,sortType} = this.state;
         const productsort = products.sort((a, b)=>{
             const sapx = (sortType ==="asc") ? 1: -1;
             return sapx * a.title.localeCompare(b.title)
         })
         this.setState({
             products: productsort
         })
    }
    onDeleteItem(key){
        return(event)=>{
        let products = JSON.parse(localStorage.getItem("ds_products"));
        products.splice(key,1);

        localStorage.setItem("ds_products", JSON.stringify(products));
        this.setState({
            products: JSON.parse(localStorage.getItem("ds_products"))
        })
        }   
    }
    // onEditItem(item){
    //     return(event)=>{
    //         console.log();
    //         // let products = JSON.parse(localStorage.getItem('ds_products'));
    //         // let product = products.find((element)=> element.title === item.title);
    //         // localStorage.setItem("ds_products", JSON.stringify(product));
    //         //  this.setState({
    //         //     products: products,
    //         //  });
    //     }
    // }
  
    render() {
        return (
            <div className='container'>
                 <center><h3> List product</h3></center>
                 <button id ='sort' onClick = { this.sortByPriceAsc } className='btn btn-outline-info'>SortByTitle(ASC)</button>
                    <table border = "1"  className="table table-hover">
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        { this.state.products.map((item, key) =><ProductAdminItem 
                                                key={key} 
                                                item = {item}
                                                onDelete = {this.onDeleteItem(key)}
                                              
                                                /> ) 
                          }
                    </table>
            </div>
        );
    }
}
export default ProductAdmin;

  