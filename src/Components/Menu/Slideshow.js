import React, {Component} from 'react';
import {Slide} from 'react-slideshow-image'

import './Slideshow.scss'
class Slideshow extends Component{
    // go to slide of the chosed category
    goToSlide=()=>{
        if(this.refs.refSlide){
            this.refs.refSlide.goTo(this.props.chosedIndex)
        }
    }
    setChosed =(index)=>{
        this.props.setChosed(index);
    }
    render(){
        // properties of slideshow
        let properties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            indicators: true,
            arrows: false,
            onChange: (oldIndex, newIndex) => {
                this.setChosed(newIndex)
            }
        }
        this.goToSlide()
        const slideImages = this.props.images
        return(
            <div className="slide-container">
                <Slide ref="refSlide" {...properties}>
                    {slideImages.map((image,index)=>{
                        return (
                            <div key={index} className='slide__element'>
                                <img src={image} alt={"img"+index} width="100%" />
                            </div>
                        )
                    })}
                </Slide>
            </div>
        )
    }
    
}  

export default Slideshow;