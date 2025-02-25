import React from 'react'
import './Saweria.css'
import { assets } from '../../assets/assets'

const Saweria = () => {

    const handleClick = () => {
        window.open("https://saweria.co/reykayanti", '_blank', 'noopener,noreferrer')
      }

  return (
    <div className='saweria'>
        <div className="ico">
            <div className="coffe1">
                <img className='bg' src={assets.cofffe} alt="" data-aos="fade-up" data-aos-duration="900"/>
                <img className='lin' src={assets.lineCoffe} alt="" data-aos="fade-up" data-aos-duration="3000"/>
            </div>
            <div className="coffe2">
                <img className='bg' src={assets.cofffe} alt="" data-aos="fade-up" data-aos-duration="1000"/>
                <img className='lin' src={assets.lineCoffe} alt="" data-aos="fade-up" data-aos-duration="3000"/>
            </div>
        </div>
        <div className="cta">
            <p data-aos="fade-up" data-aos-duration="1000">If you'd like, you can support me with a cup of coffee</p>
            <div className="to-saweria" data-aos="fade-up" data-aos-duration="1500" onClick={handleClick}>
                <img src={assets.saweria} alt="" />
                Saweria
            </div>
        </div>
    </div>
  )
}

export default Saweria