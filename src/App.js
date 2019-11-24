import React,{Component} from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage'
import ProductsList from './Pages/ProductsList/ProductsList'

class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/products" component={ProductsList}/>
                </Switch>
            </Router>
        )
    }
}

export default App