import React, {Component} from 'react';
import './Addproduct.css';

class Addproduct extends Component{
    onAddProduct(event){
        event.preventDefault();
        var title = event.target['title'].value;
        var price = event.target['price'].value;
        
        var product = {
            title: title,
            price: price
        }

        var products = JSON.parse(localStorage.getItem("ds_products"));
        if(!products){
            products = [];
        }
        products.push(product);
        localStorage.setItem("ds_products", JSON.stringify(products));

        console.log(products);
    }

    render(){
        return(
        
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <form className="Addpduct" onSubmit={this.onAddProduct}>
            <legend><h1>Thêm sách</h1> </legend>
            <div className="form-group">
              <label >Title</label>
              <input type="text" className="form-control" name ="title" placeholder="Input Title" />
            </div>
            <div className="form-group">
              <label >Price</label>
              <input type="text" className="form-control" name ="price" placeholder="Input Price" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>   
        );
    }
}

export default Addproduct;