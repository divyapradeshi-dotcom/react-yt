import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  let navigate=useNavigate()
    const btnClicked=()=>{
      navigate('/')
    }
  
  return (
    <div>
      <button onClick={btnClicked}
      className='bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active'> Login</button>
        <h1>About page</h1>
    </div>
  )
}

export default About