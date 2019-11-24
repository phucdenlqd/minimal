// THe defined data

//images for menu
import menuImg0 from '../img/menu/0.jpg'
import menuImg1 from '../img/menu/1.jpg'
import menuImg2 from '../img/menu/2.jpg'
import menuImg3 from '../img/menu/3.jpg'

//images for shop type
import shoptypeImg0 from '../img/shoptype/0.jpg'
import shoptypeImg1 from '../img/shoptype/1.jpg'

// images for product
import productImg0 from '../img/product/product0.jpg'
import productImg1 from '../img/product/product1.jpg'
import productImg2 from '../img/product/product2.jpg'
import productImg3 from '../img/product/product3.jpg'
import productImg4 from '../img/product/product4.jpg'
import productImg5 from '../img/product/product5.jpg'
import productImg6 from '../img/product/product6.jpg'
import productImg7 from '../img/product/product7.jpg'
import productImg8 from '../img/product/product8.jpg'
import productImg9 from '../img/product/product9.jpg'
import productImg10 from '../img/product/product10.jpg'
import productImg11 from '../img/product/product11.jpg'
import productImg12 from '../img/product/product12.jpg'
import productImg13 from '../img/product/product13.jpg'
import productImg14 from '../img/product/product14.jpg'

// images for collections
import collectionImg0 from '../img/collections/collection0.jpg'
import collectionImg1 from '../img/collections/collection1.jpg'
import collectionImg2 from '../img/collections/collection2.jpg'
import collectionImg3 from '../img/collections/collection3.jpg'
import collectionImg4 from '../img/collections/collection4.jpg'
import collectionImg5 from '../img/collections/collection5.jpg'
// ------ DATA --------
//data for menu
const dataMenu=[
    {category:'Home Furnishings',image:menuImg0,description: 'Home Furnishings descrpition'},
    {category:'Accessoiries',image:menuImg1,description: 'Accessoiries descrpition'},
    {category:'Sports',image:menuImg2,description: 'Sports descrpition'},
    {category:'Clothing Wear',image:menuImg3,description: 'Clothing Wear descrpition'},
]
//data for shop type , here indoor and outdoor
const dataShopType=[
    {type:"Indoors",image:shoptypeImg0},
    {type:"Outdoors",image:shoptypeImg1},
]
// data list products with their infomations
const dataProducts=[
    {name:"Prod A", brand: "Frank Pliot", price :150, rating:1, sold:150, image:productImg0 },
    {name:"Prod B", brand: "Frank Pliot", price :52, rating:2, sold:123, image:productImg1 },
    {name:"Prod C", brand: "Next Pito", price :54, rating:9, sold:453, image:productImg2 },
    {name:"Prod D", brand: "John Doel", price :78, rating:4, sold:150, image:productImg3 },
    {name:"Prod E", brand: "John Doel", price :39, rating:2, sold:453, image:productImg4 },
    {name:"Prod F", brand: "Frank Pliot", price :145, rating:4, sold:72, image:productImg5 },
    {name:"Prod G", brand: "John Doel", price :78, rating:9, sold:150, image:productImg6 },
    {name:"Prod H", brand: "Frank Pliot", price :28, rating:4, sold:25, image:productImg7 },
    {name:"Prod J", brand: "Next Pito", price :452, rating:5, sold:150, image:productImg8 },
    {name:"Prod K", brand: "Frank Pliot", price :2, rating:4, sold:12, image:productImg9 },
    {name:"Prod LL", brand: "John Doel", price :78, rating:6, sold:150, image:productImg10 },
    {name:"Prod M", brand: "John Doel", price :8, rating:7, sold:12, image:productImg11 },
    {name:"Prod N", brand: "Next Pito", price :78, rating:4, sold:150, image:productImg12 },
    {name:"Prod O", brand: "John Doel", price :287, rating:6, sold:21, image:productImg13 },
    {name:"Prod P", brand: "Next Pito", price :785, rating:4, sold:46, image:productImg14 },
]
// data list of collections
const dataCollections = [
    {name : "Hang Lamp", image:collectionImg0},
    {name : "Wood Mug", image:collectionImg1},
    {name : "Wood Bottle", image:collectionImg2},
    {name : "Wall Clock", image:collectionImg3},
    {name : "Wood Table", image:collectionImg4},
    {name : "Recycle Shoes", image:collectionImg5},
]

export {dataMenu,dataShopType,dataProducts,dataCollections}