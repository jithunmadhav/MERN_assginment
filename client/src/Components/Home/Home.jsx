import React, { useState } from 'react'
import './Home.css'
import Menu from '../Menu/Menu'
import ViewPost from '../ViewPost/ViewPost'
import ProfileSetting from '../ProfileSetting/ProfileSetting'
import Posts from '../Posts/Posts'

function Home() {
  const [openProfile, setopenProfile] = useState(false)
  const [openHome, setopenHome] = useState(false)
  const [openPost, setopenPost] = useState(false)
  console.log(openProfile,openHome,openPost);
    return (
    <div className='Home-align'>
    <Menu setopenHome={setopenHome}
    setopenPost={setopenPost}
    setopenProfile={setopenProfile}
    />
    {openPost ?
    <Posts setopenHome={setopenHome} 
    setopenPost={setopenPost} /> 
    : openProfile? <ProfileSetting/>:<ViewPost/>
}
    </div>
  )
}

export default Home
