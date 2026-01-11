import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroText from './HeroText';
import Arrow from './Arrow';
const LeftText = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/4  '>
      
    <HeroText/>
    <Arrow/>
    
    </div>
  )
}

export default LeftText;