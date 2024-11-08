import React from 'react'
import Header from "@/components/header";

const Contact = () => {
  return (
    <div className='bg-black'>
        <Header/>

        <section className="flex flex-col justify-center items-center mt-48">
            <div className="flex flex-col bg-white text-black h-[250px] w-[900px] rounded-xl">
                <h2 className="flex flex-col items-center mt-7 text-3xl font-semibold">Contact Me</h2>
                <p className="mt-6 text-lg m-5">Email: zohairm344@gmail.com</p>
                <p className="text-lg ml-5">Phone: 03353532659</p>        
            </div>
        </section>

        <footer className='pt-[251px]'> 
            <div className="bg-slate-600 p-9 mt-10">
                <p className="flex flex-col justify-center items-center text-lg">&copy; 2024 My Portfolio</p>
            </div>
        </footer>
        </div>
  )
}

export default Contact