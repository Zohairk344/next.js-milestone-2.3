import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Header from "@/components/header";

const about = () => {
  return (
    <div className='bg-black'>
        <Header/>

        <section className="flex flex-col justify-center items-center mt-10" >
            <div className="flex flex-col  items-center bg-white text-black h-[500px] w-[900px] rounded-xl">
            <h2 className="text-2xl font-semibold mt-10 mb-14">Projects</h2>
                <div className="">
                    <h3 className="flex flex-col justify-center items-center text-2xl font-semibold">Github Links</h3>
                    <p className="flex flex-col justify-center items-center mt-6 text-lg mb-8">Github Links Of The Projects I have Worked On</p>
                    <Link href="https://github.com/Zohairk344/GIAIC-100-day-coding-challenge" className="mx-2 font-semibold text-white bg-emerald-500 rounded-lg p-3">100 Days Coding Challenge</Link>
                    <Link href="https://github.com/Zohairk344/2024-Hackathon-milestone1" className="mx-2 font-semibold text-white bg-emerald-500 rounded-lg p-3">Hackathon Milestone 1</Link>
                    <Link href="https://github.com/Zohairk344/2024-Hackathon-milestone3" className="mx-2 font-semibold text-white bg-emerald-500 rounded-lg p-3">Hackathon Milestone 3</Link>
                    <h3 className="flex flex-col justify-center items-center text-2xl font-semibold mt-10 mb-9">Vercel Links</h3>
                    <Link href="https://2024-hackathon-ruby.vercel.app/" className="mx-5 ml-36 font-semibold text-white bg-emerald-500 rounded-lg p-3 ">Hackathon Milestone 1</Link>
                    <Link href="https://2024-hackathon-milestone3.vercel.app/" className="mx-5  font-semibold text-white bg-emerald-500 rounded-lg p-3">Hackathon Milestone 3</Link>
                </div>
            </div>
        </section>
    
    
        <section className="flex flex-col justify-center items-center mt-9">
            <div className="flex flex-col justify-center bg-white text-black h-[250px] w-[900px] rounded-xl ">
                <ul className="m-10 text-lg">
                    <li className="">Typescript</li>
                    <li className="mt-4"> HTML and CSS</li>
                    <li className="mt-4"> little bit LUA</li>
                    <li className="mt-4"> Learning Next.JS</li>
                </ul>
            </div>
        </section>

        <footer>
            <div className="bg-slate-600 p-9 mt-10 text-white">
                <p className="flex flex-col justify-center items-center text-lg">&copy; 2024 My Portfolio</p>
            </div>
        </footer>
    </div>
  )
}

export default about