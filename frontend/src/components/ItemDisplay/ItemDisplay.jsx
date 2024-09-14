import React, { useContext } from 'react'
import './ItemDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import Products from '../Products/Products'
const ItemDisplay = ({category}) => {
    const {item_list}=useContext(StoreContext)
  return (
    <div className='item-display' id='food-display' >
        <h2>Popular Choices</h2>
        <div className='item-display-list'>
          {item_list.map((item,index)=>{
            if(category==="All"||category===item.category)
                {
                    return <Products key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                }
            

          })}
        </div>
    </div>
  )
}

export default ItemDisplay