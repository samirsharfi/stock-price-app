import Image from 'next/image'
import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-16 flex items-center bg-slate-200 border-b border-slate-300 absolute top-0 pl-4'>
        <Image src="/stocklogo.png" alt="logo" width={100} height={100} className="w-12 h-12" />
    </div>
  )
}

export default Navbar