import React from 'react'
import LeftText from './LeftText.jsx';
import RightContent from './RightContent.jsx';

const Page1Context = (props) => {
  return (
    <div className='py-3  h-[90vh] flex items-center gap-10 '>
    <LeftText/>
    <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Context