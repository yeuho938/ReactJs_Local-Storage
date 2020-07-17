import React, { Component} from 'react';
import './Addproduct.css';
import { Link } from 'react-router-dom';

class Productitem extends Component{
    
    constructor (){
        super();
        this.state = {
            event: "form",
            eventdetail: "",
            products: JSON.parse(localStorage.getItem("ds_products")),
        }
        if(!this.state.products){
            this.state.products = [];
        }
        this.clickButtonEdit=this.clickButtonEdit.bind(this);
        this.clickButtonDetail=this.clickButtonDetail.bind(this);
    }
    clickButtonEdit(){
       this.setState({
           event: "edit"
       })
        console.log(this.state.event);
    }
render(){
    if(this.state.event === "edit"){
        return(
            <div className="ProductItem">
                <div id ='content'>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <center>
                      <div className="thumbnail">
                          <img src= {'image/' + this.props.item.image} />
                        <div className="caption">
                            <h3>{this.props.item.title}</h3>
                            <p>
                            </p><h3>{this.props.item.price}</h3>
                            <p />
                            <p>
                            <div>
                            <form>
                            <input name="editName" type="text" value={this.props.item.title}/>
                            <button>save</button>
                            </form>
                        </div>
                            </p>
                           
                        </div>
                        </div>
                        </center>
                    </div>
                </div>  
            </div> 
            );
    }
    else{
    return(
    <div className="ProductItem">
        <div id ='content'>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" >
            <center>
              <div className="thumbnail">
                  <img src= {'image/'+ this.props.item.image} />
                <div className="caption">
                    <h3>{this.props.item.title}</h3>
                    <h3>{this.props.item.id}</h3>
                    <p>
                    </p><h3>{this.props.item.price}</h3>
                    <p />
                    <p>
                    <div>
                <button onClick={this.props.onItemClick} className="btn btn-danger"> Buy </button> <button className="btn btn-danger" onClick={this.clickButtonEdit}>Edit</button>
                 <button  className="btn btn-danger"><Link to ={'/product/' + this.props.item.id}> Detail</Link> </button>
                 </div>
                    </p>
                   
                </div>
                </div>
                </center>
            </div>
        </div>  
    </div> 
    );
}}
}
export default Productitem;
