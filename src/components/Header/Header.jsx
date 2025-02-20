import React from 'react'
import { assets } from '../../assets/assets'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="top-head">
            <div className="profile"><img src={assets.profilepic} alt="" /></div>
            <div className="username">@reykayanti</div>
        </div>
        <div className="icon-links">
            <div className="linkedin"><img src={assets.linkedin} alt="" /></div>
            <div className="instagram"><img src={assets.ig} alt="" /></div>
        </div>
        <div className="bio">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </div>
        <div className="line">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>

        </div>
    </div>
  )
}

export default Header