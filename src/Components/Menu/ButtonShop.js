import React,{Component} from 'react';
import './ButtonShop.scss'

class ButtonShop extends Component{
    render(){
        return(
            <div className="button-container">
                <button className='button-shop' onClick={()=>{window.location = "/products"}}>Shop Now</button>
            </div>
        )
    }
}

export default ButtonShop