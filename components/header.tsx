import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-white'>
        <div className='container mx-auto items-center flex px-8 py-2'>
            <h1 className='text-[45px] font-bold'><Link href="/">IT Portfolio</Link></h1>
            <div className='grow'>
            <div className='flex justify-end gap-6 font-semibold '>
            <Link href="/" className='hover:underline'>Home</Link>
            <Link href="/contact" className='hover:underline'>Contact</Link>
            <Link href="/project" className='hover:underline'>Projects</Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header