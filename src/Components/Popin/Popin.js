import React,{Component} from 'react'
import './Popin.scss'
import img1 from '../../img/contact/1.jpg'

class Popin extends Component{
    exitPopinHandle=()=>{
        this.props.exitPopinHandle()
    }
    render(){
        return(
            <div className='popin-container'>
                <div className='popin-content'>
                    <div className="popin-content__image">
                        <img src={img1} alt='contact' width='100%'/>
                    </div>
                    <div className='popin-content__wrap'>
                        <div className='popin-content__title'>Need Help ?</div>
                        <div className='popin-content__text'>Start a live call with us now to have us attend to any of your enqueries</div>
                        <div className='popin-content__action'>
                            <button className='popin-content__chat'>Start Live Chat</button>
                            <span className='popin-content__call'>Resquest for call back</span>
                        </div>
                    </div>
                    <div className='popin-content__exit-button' onClick={this.exitPopinHandle} />
                </div>
            </div>
        )
    }
}

export default Popin