import React from 'react'
import './MyLinks.css'
import LinkItem from '../LinkItem/LinkItem'
import { assets } from '../../assets/assets'

const MyLinks = () => {

  const links = [
    { caption: "Reyka's Vlog on Youtube", url: "https://www.youtube.com/@reykayanti" },
    { caption: "Twitter or X??", url: "https://x.com/masareylagisih" },
    { caption: "Here if you want to see my articles on medium", url: "https://medium.com/@reykayanti" },
    { caption: "Github as a my repositories", url: "https://github.com/reykayanti" }

  ];

  return (
    <div className='my-link'>
        <div className="icon-fly">
          <img src={assets.star} alt="" />
        </div>
        {links.map((link, index) => (
          <div key={index}>
            <LinkItem caption={link.caption} url={link.url} />
          </div>
        ))}
    </div>
  )
}

export default MyLinks