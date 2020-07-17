import React, {Component} from 'react';
import './Addproduct.css';
import Select  from "react-select";

const options = [
  { value: 'Horror', label: 'Horror' },
  { value: 'Fantasy', label: 'Fantasy' },
  { value: 'Comic', label: 'Comic' },
  { value: 'Action', label: 'Action' },
];
class Addproduct extends Component{
    constructor(props){
      super(props);
      this.state = {
        selectedOption: null,
      };
    }
   
    handleChange = selectedOption => {
        this.setState({ 
          selectedOption: selectedOption ,
        });
    };
    onAddProduct(event){
        let id = 0;
        event.preventDefault();
        let title = event.target['title'].value;
        let price = event.target['price'].value;
        let image = event.target['image'].files.item(0).name;
        let cate = event.target["select"].value;
        

        let products = JSON.parse(localStorage.getItem("ds_products"));
        if(!products){
            products = [];
            id = 0;
        }else
        {
           id = products[products.length -1].id+1;
        }
        let product = {
            id : id,
            title: title,
            price: price,
            image: image,
            category: cate,
        }     
        products.push(product);
        localStorage.setItem("ds_products", JSON.stringify(products));

        console.log(products);
    }

    render(){
      const { selectedOption } = this.state;
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
            <div className="form-group">
              <label >Image</label>
              <input type="file" className="form-control" name ="image" placeholder="Input link Image" />
            </div>
            <div className="form-group">
              <label >Category</label>
              <Select name="select"
                        value={ selectedOption }
                        onChange={this.handleChange}
                        options={options}
                    />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>   
        );
    }
}

export default Addproduct;
