{/*PEDRO LUCAS MS CUNHA - ID 301.376.268 2024-01-28   */}
import React from 'react'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        
        {/*Container*/}

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full' >
          <p className='text-red-500'> Hi, my name is </p>
          <h1 className='text-4xl sm:text-7x1 font-bold text-white'>Pedro Cunha</h1>
          <h2 className='text-3xl sm:text-7x1 font-bold text-gray-400'>I'm a game developer.</h2>
          <p className='text-gray-400 py-4 max-w-[700px]'>As a game developer, my interests goes beyond programming, coding, and designing; The stories we can tell and create connects us 
             beyond the screen.</p>
      


        </div>
    </div>
  )
}

export default Home