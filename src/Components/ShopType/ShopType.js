import React,{Component} from 'react';
import Type from './Type.js'

import './ShopType.scss'
//data
import {dataShopType} from '../../data/data';

class ShopType extends Component{
    render(){
        // all the type of shop, in this case INDOOR and OUTDOOR
        var TypeToShow= dataShopType.map((ele,index)=>{
            return (<Type data={ele} index={index} key={index} />)
        })

        return(
            <div className="row shoptype-container">
                {TypeToShow}
            </div>
        )
    }
}

export default ShopType