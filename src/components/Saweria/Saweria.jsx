import React from 'react'
import './Saweria.css'
import { assets } from '../../assets/assets'

const Saweria = () => {
  return (
    <div className='saweria'>
        <div className="ico">
            <div className="coffe1">
                <img className='bg' src={assets.cofffe} alt="" />
                <img className='lin' src={assets.lineCoffe} alt="" />
            </div>
            <div className="coffe2">
                <img className='bg' src={assets.cofffe} alt="" />
                <img className='lin' src={assets.lineCoffe} alt="" />
            </div>
        </div>
        <div className="cta">
            <p>If you'd like, you can support me with a cup of coffee</p>
            <div className="to-saweria">
                <img src={assets.saweria} alt="" />
                Saweria
            </div>
        </div>
    </div>
  )
}

export default Saweria