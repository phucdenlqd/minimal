import React,{Component} from 'react'
import './Collection.scss'
class Collection extends Component{
    render(){
        return(
            <div className="collection-container col-xs-12 col-md-6 ">
                <div className="collection-image">
                    <img src={this.props.data.image} alt={"collection"+this.props.index} width="100%"/>
                </div>
                <div className="collection-title">
                    <p>COLLECTION</p>
                    <p className="collection-title__name">{this.props.data.name}</p>
                </div>
            </div>
        )
    }
}

export default Collection