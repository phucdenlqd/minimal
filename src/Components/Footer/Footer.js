import React,{Component} from 'react';
import Popin from '../Popin/Popin';
import './Footer.scss'

class Footer extends Component{
    constructor(props){
        super(props);
        this.state={
            showPopin:false /* ShowP popin or not */
        }
    }
    togglePopin=()=>{
        this.setState({
            ...this.state,
            showPopin:!this.state.showPopin
        })
    }
    render(){
        return(
            <footer>
                <div className='footer-help' onClick={this.togglePopin}>Help</div>
                {this.state.showPopin && <Popin exitPopinHandle={this.togglePopin} />}
            </footer>
        )
    }
}

export default Footer