import React, { Component } from 'react';
import Productitem from './Productitem';
import './ProductItem.css';
import Detail from './Detail';
class Product extends Component {
    constructor(){
        super();
        this.state={
            products: JSON.parse(localStorage.getItem("ds_products")),
            sortType: "asc",
            currentPage: 1,
            todosPerPage: 3,
            detailItem: "detail",
            search: ''
        }
        if(!this.state.products){
            this.state.products = [];
        }
        this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onchange = this.onchange.bind(this);
      }
  
      handleClick(event){
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
      onItemClick(item){
          return(event)=>{
            alert(" Thêm vào giỏ hàng thành công");
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
      onClickEdit(id){

      }
      onchange(event) {
        event.preventDefault();
        var search = event.target["search"].value;
        this.setState({ search: search });
        console.log(this.state.search);
       };

    showProduct() {
        const { search } = this.state;
        const filteredProducts = this.state.products.filter(product => {
            return product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });

        var listProduct = filteredProducts.map((item, index) =>
            <Productitem
                key={index}
                item={item}
                onItemClick = {this.onItemClick(item)}
                onEditClick = {this.onClickEdit(index)} 
            />);

        return listProduct;
    }

      sortByPriceAsc(){
       
           const {products,sortType} = this.state;
           const productsort = products.sort( (a, b)=>{ 
               const sapx = (sortType ==="asc") ? 1: -1;
               return sapx * a.title.localeCompare(b.title)
           })
           this.setState({
               products: productsort
           })
      }
      onDetail(){
          return(event)=>{
              this.setState({
                detailItem: "detail"
              })
          }
      }
    // cd

    render() {
        // const { products, currentPage, productsPerPage } = this.state;

        // const indexOfLastProduct = currentPage * productsPerPage;
        // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
        // const currentproducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
        
        // const renderProducts = currentproducts.map((item, index) => {
        //     return <li key={index} item ={item}></li>;
        //   });

        //   const pageNumbers = [];
        //   for (let i = 1; i <= Math.ceil(products.length/productsPerPage); i++) {
        //     pageNumbers.Push(i);
        //   }
        //     const d = "ywue";
        //   const renderPageNumbers = pageNumbers.map(number => {
        //     return (
        //       <li
        //         key={number}
        //         id={number}
        //         onClick={this.handleClick}
        //       >
        //         {number}
        //       </li>
        //     );
        //   });   {renderProducts}    <ul id="page-numbers">
               // {renderPageNumbers}
               // </ul> 
       
            return (
              <div>
                <form  onSubmit={this.onchange}>
                <button className='btn btn-info' id="icon"><i class="fas fa-search"></i></button>
                 <input id="inputsearch" name ='search' type='text' placeholder='Search...'></input>
                </form>
                
                <ul>
                <button id ='sort' onClick = {this.sortByPriceAsc} className='btn btn-outline-info' >SortByTitle(ASC)</button>
               
                  {this.showProduct()}
                </ul>
              
              </div>
            );
         
    }
}

export default Product;