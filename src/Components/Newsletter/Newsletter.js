import React,{Component} from 'react'
import './Newsletter.scss'
class Newsletter extends Component{
    render(){
        return(
            <div className='newsletter-container '>
                <div className='newsletter-content '>
                    <div className='newsletter-content__title'>Newsletter</div>
                    <div className='newsletter-content__text'>Register now with our newsletter and get the lastest updates available</div>
                </div>
                <form className='newsletter-form '>
                    <input className='newsletter-form__input-name ' type='text' name='name' placeholder="Name"/>
                    <input className='newsletter-form__input-email ' type='email' name='email' placeholder="Email"/>
                    <input className='newsletter-form__input-submit' value='Send' type='submit'/>
                </form>
            </div>
        )
    }
}

export default Newsletter;