import React, { useState } from 'react'
import './Menu.css'
function Menu({setopenProfile,setopenHome,setopenPost,setopenhamburger}) {
  return (
    <div className='menu-width'>
      <div className='menu-content' onClick={()=>{setopenHome(true); setopenProfile(false); setopenPost(false); setopenhamburger(false) }}>
        <p className='menu-para'>HOME</p>
      </div>
      <div className='menu-content' onClick={()=>{setopenHome(false); setopenProfile(true); setopenPost(false); setopenhamburger(false) }}>
        <p className='menu-para'>PROFILE</p>
      </div>
      <div className='menu-content' onClick={()=>{setopenHome(false); setopenProfile(false); setopenPost(true); setopenhamburger(false) }}>
        <p className='menu-para'>POST</p>
      </div>
    </div>
  )
}

export default Menu
