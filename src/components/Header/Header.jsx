import React, { useEffect } from 'react'
import { assets } from '../../assets/assets'
import './Header.css'
import MyLink from '../MyLinks/MyLinks'
import Aos from 'aos';
import 'aos/dist/aos.css'; 



const Header = () => {

  useEffect(() => {
    Aos.init(); 
  }, []);

  const handleClick = () => {
    window.open("https://www.instagram.com/reykayanti/", '_blank', 'noopener,noreferrer')
  }

  return (
    <div className='header'>
        <div className="top-head">
            <div data-aos="fade-up" data-aos-duration="1000" className="profile"><img src={assets.profilepic} alt="" /></div>

            <div data-aos="fade-up" data-aos-duration="1600" className="username">@reykayanti</div>
        </div>
        <div className="icon-links">
            <div data-aos="fade-up" data-aos-duration="1600" className="linkedin"><img src={assets.linkedin} alt="" /></div>
            <div data-aos="fade-up" data-aos-duration="1500" className="instagram" onClick={handleClick}><img src={assets.ig} alt="" /></div>
        </div>
        <div className="bio" data-aos="fade-up" data-aos-duration="1400">
          Holla dear.. i'm software engineer🚀 <br/> 
          Welcome to tree of me!! <br/>
          Let's grow, innovate, and create together 🫶 <br />

        </div>
        <div className="line" data-aos="fade-up" data-aos-duration="1000">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
        </div>
        <MyLink/>        
    </div>
  )
}

export default Header