import React from 'react'
import { menu_list } from '../../assets/assets'
import './ExploreMenu.css'
import { StoreContext } from '../../context/StoreContext'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1><b>Explore our Menu</b> </h1>
        <p className='explore-menu-text'> <h4><i>Tell me what you eat, and I will tell you what you are.</i> </h4></p>
        <p className='explore-menu-text'><h4><i>If an event is meant to matter emotionally, symbolically, or mystically - Food will be close at hand to sanctify and bind it.</i></h4></p>
        <div className='explore-menu-list'>
            {menu_list.map((item, index)=>{
                return(
                    <div onClick={()=> setCategory(category=>category===item.menu_name?'All':item.menu_name )} key={index}className='explore-menu-list-item'>
                        <img className={category===item.menu_name?'active':''} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu