import React,{Component} from 'react';
import Category from './Category.js';
import Slideshow from './Slideshow';
import Description from './Description';
import ButtonShop from './ButtonShop';

import './Menu.scss';
//data, get name, image, category for eachc ategory
import {dataMenu} from '../../data/data'
const categories = dataMenu.map((ele)=>(ele.category))
const images=dataMenu.map((ele)=>(ele.image))
const descriptions=dataMenu.map((ele)=>(ele.description))

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            chosedIndex:0 /* index the chosed category ( the highlighted category in slideshow  ) */
        }
    }

    setChosed=(index)=>{
        this.setState({
            chosedIndex:index
        })
    }

    render(){
        return(
            <div className='menu-container row' >
                <div className='col-xs-12 col-md-2 '>
                    <Category 
                        setChosed={this.setChosed} 
                        chosedIndex={this.state.chosedIndex} 
                        categories={categories}
                    />
                </div>
                <div className='col-xs-12 col-md-7 '>
                    <Slideshow 
                        setChosed={this.setChosed} 
                        chosedIndex={this.state.chosedIndex} 
                        images={images}
                    />
                </div>
                <div className='col-xs-12 col-md-3 '>
                    <Description
                        chosedIndex={this.state.chosedIndex}
                        descriptions={descriptions}
                    />
                </div>
                <ButtonShop/>
            </div>
        )
    }
}

export default Menu;