import React from 'react'
import './LinkItem.css'


const LinkItem = ({caption, url}) => {

  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className='link-container' onClick={handleClick}> 
      {caption}
    </div>
  )
}

export default LinkItem