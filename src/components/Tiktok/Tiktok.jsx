import React from 'react'
import './Tiktok.css'
import { assets } from '../../assets/assets'

const Tiktok = () => {
  return (
    <div className='tiktok'>
        <div className="capt">
            <p data-aos="fade-up" data-aos-duration="1200" >Got<br/>CODING<br/>on your<br/>mind?</p>
            <div className='checkout' data-aos="fade-up" data-aos-duration="1300" >Check out here</div>
            <img className='arrow-capt' src={assets.arrow2} alt="" data-aos="fade-up" data-aos-duration="1700"/>
        </div>
        <div className="tiktok-preview" data-aos="fade-up" data-aos-duration="1000">
            <img src={assets.tiktokimg} alt="" />
        </div>
    </div>
  )
}

export default Tiktok