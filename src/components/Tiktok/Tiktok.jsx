import React from 'react'
import './Tiktok.css'
import { assets } from '../../assets/assets'

const Tiktok = () => {
  return (
    <div className='tiktok'>
        <div className="capt">
            <p>Got<br/>CODING<br/>on your<br/>mind?</p>
            <div className='checkout'>Check out here</div>
            <img className='arrow-capt' src={assets.arrow2} alt="" />
        </div>
        <div className="tiktok-preview">
            <img src={assets.tiktokimg} alt="" />
        </div>
    </div>
  )
}

export default Tiktok