import React, {Component} from 'react'
import './Product.scss'

// had props is data: object with keys: index, image, name, brand,price  
class Product extends Component{
    render(){
        return(
            <div className="product-container col-xs-6 col-md-3">
                <div className="product-image">
                    <img src={this.props.data.image} alt={"product"+this.props.index} />
                </div>
                <div className="product-info">
                    <p className="product-info__title">
                        <span className="product-info__name">{this.props.data.name}</span>
                        <span className="product-info__brand">{this.props.data.brand}</span>
                    </p>
                    <p className="product-info__price">{"$"+this.props.data.price}</p>
                </div>
            </div>
        )
    }
}
export default Product