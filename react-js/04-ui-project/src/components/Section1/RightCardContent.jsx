import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full p-8
        flex flex-col justify-between '>
            <h2 className='bg-white rounded-full h-15 w-15 text-2xl font-semi-bold flex justify-center items-center'>1</h2>
            <div>
                <p className=' text-shadow-2xs text-lg leading-normal text-white mb-14'>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Nemo id adipisci similique 
                    accusantium reiciendis atque Lorem ipsum dolor sit amet.? </p>
                    <div>
                        <button style ={{backgroundColor:props.color}}
                        className=' text-white font-medium px-8 py-3 rounded-full text-gray'>{props.tag}</button>
                        <button className=' text-white font-medium px-4 py-3 rounded-full text-lg' > <i className =" ri-arrow-right-line"></i></button>
                    </div>
            </div>

        </div>

    </div>
  )
}

export default RightCardContent