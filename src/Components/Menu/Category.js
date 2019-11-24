import React , {Component} from 'react';
import './Category.scss'

class Category extends Component{
    setChosed(index){
        this.props.setChosed(index);
    }
    render(){
        // list elements of categories to show, chosed or not chosed
        var listCategories=this.props.categories.map((item,index)=>{
            var itemShow = index === this.props.chosedIndex?
            (<li key={index} className='category__list-item category__list-item--chosed' onClick={()=>this.setChosed(index)}>{item}</li>)
            :(<li key={index} className='category__list-item' onClick={()=>this.setChosed(index)}>{item}</li>)
            return itemShow;
        })
        return(
            <div className='category-container'>
                <div className='category__title'>Shop</div>
                <div className='category__space'></div>
                <ul className='category__list'>
                    {listCategories}
                </ul>
            </div>
        )
    }
}

export default Category;