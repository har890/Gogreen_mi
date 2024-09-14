import React, { useContext } from 'react'
import './Products.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const Products = ({id,name,price,description,image}) => {

    
    const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext)

  return (
    <div className='organic-item'>
        <div className='organic-item-img-container'>
            <img className='organic-item-image' src={url+"/images/"+image} alt=""/>
             {
                !cartItems[id]
                   ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""/>
                   :<div className='org-item-counter'>
                       <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=""/>
                       <p>{cartItems[id]}</p>
                       <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=""/>
                   </div>
             }
        </div>
        <div className="organic-item-info">
            <div className='organic-item-name-rating'>
                <p>{name}</p>
                <img src={assets.rating_starts} alt=""/>
            </div>
            <p className="org-item-desc">{description}</p>
            <p className="org-item-price">${price}</p>
        </div>

    </div>
  )
}

export default Products