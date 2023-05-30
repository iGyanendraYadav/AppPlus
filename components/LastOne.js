import React from 'react'
import { AiFillApple, AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

const LastOne = () => {
  return (
    <div className='bg-pink-600 text-white flex flex-col justify-center items-center'>
        <span className='text-lg pt-10 font-bold'>START USING THE BEST APP</span>

        <span className='text-3xl lg:text-7xl text-center py-10 mx-16 lg:mx-32 uppercase font-extrabold tracking-wider'>Join the millions<br/>using AppPlus </span>

        {/* <div className='flex flex-col lg:flex-row justify-around items-center space-x-0 lg:space-x-6 space-y-5 lg:space-y-0'>
            <button className='bg-transparent hover:bg-white border-2 border-white rounded-3xl text-xl px-4 py-2 text-white  hover:text-blue-500 flex flex-row justify-center items-center space-x-2'><span><AiFillApple/></span> Apple Store</button>
            <button className='bg-transparent hover:bg-white border-2 border-white rounded-3xl text-xl px-4 py-2 text-white  hover:text-blue-500 flex flex-row justify-center items-center space-x-5'><span><FaGooglePlay/></span>Google Play</button>
        </div> */}

<div className="flex flex-col lg:flex-row justify-center items-center space-x-0 lg:space-x-5 space-y-3 lg:space-y-0 pt-10">
        <button
          className="bg-transparent border-2 border-white text-white hover:text-blue-600 hover:bg-white rounded-3xl flex flex-row justify-center items-center space-x-2 px-5 py-2 text-xl"
          type="button"
        >
          {" "}
          <AiFillApple /> <span>App Store</span>{" "}
        </button>
        <button
          className="bg-transparent border-2 border-white text-white hover:text-blue-600 hover:bg-white rounded-3xl flex flex-row justify-center items-center space-x-2 px-5 py-2 text-xl "
          type="button"
        >
          {" "}
          <FaGooglePlay /> <span>Play Store</span>{" "}
        </button>
      </div>

        <span className='text-sm pt-10 pb-5'>Copyright @ 2023 || All rights reserved.</span>
    </div>
  )
}

export default LastOne