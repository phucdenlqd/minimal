import React,{Component} from 'react';
import './Description.scss'

class Description extends Component{
    render(){
        const descriptionToShow=this.props.descriptions[this.props.chosedIndex]
        return(
            <div className='description-container'>
                {descriptionToShow}
            </div>
        )
    }
}

export default Description