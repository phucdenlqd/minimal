import React,{Component} from 'react'
import Collection from './Collection'
import './Collections.scss'
// data
import {dataCollections} from '../../data/data'

// number collection max in a page
const NUMBER_MAX = 4 ;
const NUMBER_OF_PAGES = Math.ceil(dataCollections.length/NUMBER_MAX)

class Collections extends Component{
    constructor(props){
        super(props);
        this.state={
            currentPage:1
        }
    }
    goPrevious=()=>{
        let currentPage=Math.max(this.state.currentPage-1,1);
        this.setState({currentPage:currentPage})
    }
    goNext=()=>{
        let currentPage=Math.min(this.state.currentPage+1,NUMBER_OF_PAGES);
        this.setState({currentPage:currentPage})
    }

    render(){
        var currentPage = this.state.currentPage;
        // Collection to show, depend on the page to show
        var collectionsToShow= dataCollections.filter((ele,index)=>{
            return (index<NUMBER_MAX*currentPage && index>=NUMBER_MAX*(currentPage-1))
        }).map((ele,index)=>{
            return (<Collection key={index} data={ele} index={index} />)
        })
        
        return(
            <div className="collections-container">
                <div className="collections-header">
                    <div className="collections-header__title">Collections</div>
                    <div className="collections-header__switch-page">
                        <span onClick={this.goPrevious}>Previous</span> | <span onClick={this.goNext}>Next</span>
                    </div>
                </div>
                <div className="collections-intro">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras iaculis lobortis orci nec vestibulum. Mauris ullamcorper tellus quis ipsum dictum, vitae condimentum massa pretium.</div>
                <div className="collections-see-all">See all collections</div>
                <div className="collections-item row">
                    {collectionsToShow}
                </div>
                
            </div>
        )
    }

}

export default Collections