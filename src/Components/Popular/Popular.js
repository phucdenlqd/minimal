import React,{Component} from 'react';
import './Popular.scss';
import Product from '../Product/Product'

// data -- get top 10 popular (most sold)
import {dataProducts} from '../../data/data'

const dataPopularProducts = dataProducts.sort((ele,nextEle)=>{
    return nextEle.sold-ele.sold
}).slice(0,10)

// Max number of items showed in a page
const NUMBER_MAX = 8 ;
const NUMBER_OF_PAGES = Math.ceil(dataPopularProducts.length/NUMBER_MAX)

class Popular extends Component{
    constructor(props){
        super(props);
        this.state={
            currentPage:1 /* current page that is showed */
        }
    }
    // Previous and next page
    goPrevious=()=>{
        let currentPage=Math.max(this.state.currentPage-1,1);
        this.setState({currentPage:currentPage})
    }
    goNext=()=>{
        let currentPage=Math.min(this.state.currentPage+1,NUMBER_OF_PAGES);
        this.setState({currentPage:currentPage})
    }

    render(){
        let currentPage = this.state.currentPage;
        // get the components to show, depend on number of page
        let productsToShow= dataPopularProducts.filter((ele,index)=>{
            return (index<NUMBER_MAX*currentPage && index>=NUMBER_MAX*(currentPage-1))
        }).map((ele,index)=>{
            return (<Product key={index} data={ele} index={index}/>)
        })

        return(
            <div className="popular-container">
                <div className="popular-header">
                    <div className="popular-header__title">Popular</div>
                    <div className="popular-header__switch-page">
                        <span onClick={this.goPrevious}>Previous</span> | <span onClick={this.goNext}>Next</span>
                    </div>
                </div>
                <div className="popular-products row">
                    {productsToShow}
                </div>
            </div>
        )
    }
}

export default Popular;