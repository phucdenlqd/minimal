import React,{Component} from 'react';
import './Type.scss'

class Type extends Component{
    render(){
        return(
            <div className="col-xs-12 col-sm-6 type-container">
                <img width='100%' src={this.props.data.image} alt={"img"+this.props.index} />
                <div className='type__title--top'>
                    <span>{this.props.data.type}</span>
                    <p>Shop</p>
                </div>
                <div className='type__title--bot'><span>{"Shop " + this.props.data.type}</span></div>
            </div>
        )
    }
}

export default Type