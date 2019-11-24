import React, {Component} from 'react'
import Header from '../../Components/Header/Header'
import Product from '../../Components/Product/Product'
import Footer from '../../Components/Footer/Footer'

import {ReactComponent as UpArrow} from '../../img/icon/up-arrow.svg'
import {ReactComponent as DownArrow} from '../../img/icon/down-arrow.svg'

import './ProductsList.scss'

// data
import {dataProducts} from '../../data/data'

// sorted data according to field (in ['price','rating','brand']) and type (in ['ASC',DESC])
const sortedData = (field,type) =>{
    if(['price','rating','brand'].includes(field)){

        var sorted = dataProducts.sort((ele,nextEle)=>{
            let valueReturned = ele[field]>nextEle[field]? 1 
                                : ele[field]<nextEle[field]? -1
                                : 0
            
            valueReturned=type==='ASC'?valueReturned:(0-valueReturned)
            return valueReturned
        })
        return sorted;
    }
    return dataProducts;
}

// Max number of items showed in a page
const NUMBER_MAX = 12 ;
const NUMBER_OF_PAGES = Math.ceil(dataProducts.length/NUMBER_MAX)

class ProductsList extends Component{
    constructor(props){
        super(props)
        this.state={
            sortBy:'price', /* field of sort*/
            sortType:'ASC', /* type of sort */
            currentPage:1 /* current page to show */
        }
    }
    // previous, next page
    goPrevious=()=>{
        let currentPage=Math.max(this.state.currentPage-1,1);
        this.setState({currentPage:currentPage})
    }
    goNext=()=>{
        let currentPage=Math.min(this.state.currentPage+1,NUMBER_OF_PAGES);
        this.setState({currentPage:currentPage})
    }

    setSortBy=(field)=>{
        if(['price','rating','brand'].includes(field)){
            this.setState({
                sortBy:field,
                currentPage:1
            })
        }
    }

    toogleSortType=()=>{
        let sortType=this.state.sortType==='ASC'?'DESC':'ASC'
        this.setState({sortType:sortType})
    }

    render(){
        let currentPage = this.state.currentPage;

        // get sorted components
        let sortedProducts= sortedData(this.state.sortBy,this.state.sortType)

        // get components to show according to page number
        let productsToShow= sortedProducts.filter((ele,index)=>{
            return (index<NUMBER_MAX*currentPage && index>=NUMBER_MAX*(currentPage-1))
        }).map((ele,index)=>{
            return (<Product key={index} data={ele} index={index}/>)
        })

        return(
            <div className="product-list-container">
                <Header/>
                <div className="products-list" >
                    <div className="products-list__sort-bar row">
                        <div className='col-xs-3 products-list__title products-list__title--small'>Home</div>
                        <div className='col-xs-9 products-list__sort'>
                            Sort by: 
                            <span onClick={()=>this.setSortBy('price')}>Price</span>| 
                            <span onClick={()=>this.setSortBy('rating')}>Rating</span>| 
                            <span onClick={()=>this.setSortBy('brand')}>Brand</span>
                            <span onClick={this.toogleSortType}>
                                {this.state.sortType ==='ASC' && <UpArrow width='1.2rem' height='1.2rem'/>}
                                {this.state.sortType ==='DESC' && <DownArrow width='1.2rem' height='1.2rem'/>}
                            </span>
                        </div>
                    </div>
                    <div className="products-list__content container">
                        <div className='products-list__filter-bar'>
                            <div className='col-xs-6 products-list__title products-list__title--big'>
                                Home Decor
                            </div>
                            <div className='col-xs-6 products-list__filter'>
                                <button className='products-list__filter-button' >Filter By</button>
                            </div>
                        </div>
                        <div className='products-list__products row'>
                            {productsToShow}
                        </div>
                    </div>
                    <div className='products-list__page-bar row'>
                        <span className='products-list__previous col-xs-4' onClick={this.goPrevious}>Previous</span>
                        <span className='products-list__page-number col-xs-4'>{currentPage+'/'+NUMBER_OF_PAGES}</span>
                        <span className='products-list__next col-xs-4' onClick={this.goNext}>Next</span>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default ProductsList