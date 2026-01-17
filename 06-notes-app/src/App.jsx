import React, { useState } from 'react';


function App() {
  const submitHandler=(e)=>{
    e.preventDefault()
    const copyTask=[...task];
    copyTask.push({title,details})
    setTask(copyTask)
    console.log(title,details)
    setTitle('')
    setDetails('')
  }
  const[title, setTitle]=useState('')
  const[details, setDetails]=useState('')

  const[task, setTask]=useState([])

  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1)
    setTask(copyTask)

  }
  return (
    <div className="min-h-screen lg:flex bg-gray-700 text-white p-10">
      
      <form  onSubmit={(e)=>
        {
          submitHandler(e)
        }
      } className="flex gap-4 flex-col  lg:w-1/2 items-start p-10  ">
       <h1 className='text-3xl font-bold'> Add Notes</h1>
      { /* first input */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className=" px-5 w-full py-2  font-medium border-2 outline-none  rounded bg-transparent"
         value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />
         {
          /* second detaild input */
         }
        <textarea
          type="text"
          placeholder="Write Details"
          className=" px-5 w-full h-32 py-2 h-20 border-2 rounded bg-transparent"
        value={details} 
        onChange={(e)=>{
          setDetails(e.target.value)
        }}
         
        />

        <button
          type="submit"
          className=" bg-white active:bg-gray-400 font-medium text-black px-5 py-2 rounded hover:bg-gray-200"
        >Add Note</button>
        
      </form>
      <div className=' gap-5 lg:border-l-2 flex-wrap lg:w-1/2 bg-gray-800 p-10'>
      <h1 className='text-3xl font-bold'> Recent Notes</h1>
      <div className='flex gap-5 items-start justify-start flex-wrap overflow-auto h-full mt-5'>
        
         {task.map(function(elem,idx){
          return <div key={idx} className=" h-52 w-50 rounded-xl flex flex-col py-8  px-4 text-black p-4 justify-between bg-white">
            <div>
            <h3 className='leading-tight text-lg font-bold'>{ elem.title}</h3>
            <p className='mt-2 leading-tight text-small font-medium text-gray-500 '>{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className='bg-red-500 cursor-pointer text-white active:scale-95 py-1 text-x font-medium rounded-2xl'> Delete </button>
         </div>
        
         })}
        </div>
      </div>
    </div>
  );
}

export default App;
