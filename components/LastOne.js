import React from 'react'

const LastOne = () => {
  return (
    <div className='bg-pink-600 text-white flex flex-col justify-center items-center'>
        <span className='text-lg pt-32'>START USING THE BEST APP</span>

        <span className='text-3xl lg:text-5xl text-center py-20 mx-16 lg:mx-32 '>Join the millions of people using AppPlus</span>

        <div className='flex flex-col lg:flex-row justify-around items-center space-x-0 lg:space-x-10 space-y-5 lg:space-y-0'>
            <button className='bg-transparent hover:bg-white border-2 border-white rounded-2xl text-xl px-4 py-2 text-white  hover:text-blue-500'>App Store</button>
            <button className='bg-transparent hover:bg-white border-2 border-white rounded-2xl text-xl px-4 py-2 text-white  hover:text-blue-500'>Google Play</button>
        </div>

        <span className='text-sm pt-24 pb-10'>Copyright @ 2023 || All rights reserved.</span>
    </div>
  )
}

export default LastOne