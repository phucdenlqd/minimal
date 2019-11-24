import React,{Component} from 'react';
import './Header.scss';

import {ReactComponent as MenuLogo} from '../../img/icon/menu-button.svg'
import {ReactComponent as SearchLogo} from '../../img/icon/search.svg'
import {ReactComponent as UserLogo} from '../../img/icon/user.svg'
import {ReactComponent as CartLogo} from '../../img/icon/shopping-cart.svg'

class Header extends Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-fixed-top navbar-container">
                    <div className='navbar-content row'>
                        <div className="navbar-content__menu-logo col-xs-2 col-md-1"><MenuLogo width="2rem"/></div>
                        <div className="navbar-content__search-logo col-xs-2 col-md-1"><SearchLogo width="2rem" /></div>
                        <div className="navbar-content__site-name col-xs-4 col-md-8" onClick={()=>{window.location = "/"}}>Minim</div>
                        <div className="navbar-content__user-logo col-xs-2 col-md-1"><UserLogo width="2rem"/></div>
                        <div className="navbar-content__cart-logo col-xs-2 col-md-1"><CartLogo width="2rem" /></div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;