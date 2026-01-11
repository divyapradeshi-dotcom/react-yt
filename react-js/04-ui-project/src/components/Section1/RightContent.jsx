import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard';
const RightContent = (props) => {
  console.log(props.users)
  return (
    <div className='h-full flex overflow-x-auto gap-5 w-2/3 p-6 '>
    {props.users.map(function(elem,idx){
     return <RightCard key={ idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} />
    })}
    
    
    </div>
  )
}

export default RightContent;