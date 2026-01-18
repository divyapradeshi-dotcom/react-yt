import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from './components/Card'
const App = () => {
  const [userdata,setUserdata]=useState([])
  const [index, setIndex]=useState(1)
  const getData=async ()=>{
   const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
   setUserdata(response.data)
   console.log(response.data)
   
  }

  useEffect(function(){
    getData()
  },[index])




  let printUserData=<h3 className='text-gray-400 absolute top-1/2 left-1/2 -translate-x-1/2 
  -translate-y-1/2 text-xs'>Loading...</h3>
   if(userdata.length>0){

    printUserData=userdata.map(function(elem,idx){
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
   }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
       <h1 className='fixed bg-gray-600 text-xl'>{index}</h1>
      <div className='flex flex-wrap p-2 gap-4'>
       {printUserData}

      </div >
      <div className='flex justify-center gap-6 items-center p-4'>
      <button 
      style={{ opacity: index==1 ? 0.5 :1}}
      className='bg-amber-400 cursor-pointer active:scale-95 text-sm text-black rounded px-4 py-2 font-semibold'
      onClick={()=>{
        if(index>1){
          setIndex(index-1)
        }
      }}
      >Prev
      </button>
      <h2>Page {index}</h2>
      <button className='bg-amber-400 cursor-pointer active:scale-95 text-sm text-black rounded px-4 py-2 font-semibold'
      onClick={()=>{
        setIndex(index+1)
      }}
      >
        Next</button>
      </div>
    </div>
  )
}

export default App