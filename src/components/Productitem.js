import React, { Component} from 'react';
import Product from './Product';
import './Addproduct.css';
class Productitem extends Component{

render(){
    return(
    <div className="ProductItem">
        <div id ='content'>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
              <div className="thumbnail">
                <img data-src="#" alt="" />
                <div className="caption">
                    <h3>{this.props.item.title}</h3>
                    <p>
                    </p><h3>{this.props.item.price}</h3>
                    <p />
                    <p>
                    <button onClick={this.props.onItemClick} className="btn btn-danger"> Add </button>
                    </p>
                </div>
                </div>
            </div>
        </div>  
    </div> 
    );
}
}

export default Productitem;
