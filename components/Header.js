import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row justify-center items-center py-5 bg-pink-600 '>
      <Image src="/logo.png" width={150} height={50} alt="logo" />
    </div>
  )
}

export default Header