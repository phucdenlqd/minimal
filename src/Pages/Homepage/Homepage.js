import React, {Component} from 'react';

import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import ShopType from '../../Components/ShopType/ShopType'
import Popular from '../../Components/Popular/Popular'
import Collections from '../../Components/Collections/Collections'
import Newsletter from '../../Components/Newsletter/Newsletter'
import './Homepage.scss';
import Footer from '../../Components/Footer/Footer'

class Homepage extends Component{
  render(){
    return(
      <div>
        <Header/>
        <div className="body-container container">
          <Menu/>
          <ShopType/>
          <Popular/>
          <Collections/>
          <Newsletter/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Homepage
