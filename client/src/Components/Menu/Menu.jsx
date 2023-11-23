import React, { useState } from 'react'
import './Menu.css'
function Menu({setopenProfile,setopenHome,setopenPost}) {
  return (
    <div className='menu-width'>
      <div className='menu-content' onClick={()=>{setopenHome(true); setopenProfile(false); setopenPost(false) }}>
        <p className='menu-para'>HOME</p>
      </div>
      <div className='menu-content' onClick={()=>{setopenHome(false); setopenProfile(true); setopenPost(false) }}>
        <p className='menu-para'>PROFILE</p>
      </div>
      <div className='menu-content' onClick={()=>{setopenHome(false); setopenProfile(false); setopenPost(true) }}>
        <p className='menu-para'>POST</p>
      </div>
    </div>
  )
}

export default Menu
