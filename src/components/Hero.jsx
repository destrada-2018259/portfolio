import React from 'react'

import {
    FaGithub,
    FaLinkedin,
    FaFilePdf
} from 'react-icons/fa6'

export const Hero = () => {
    return (
        <div className='text-[#f1f1f1] max-w-[1240px] h-screen mx-auto grid grid-cols-2'>

            <div className='w-full  flex flex-col p-4 text-center justify-center'>
              
                    
                    <h1 className=' text-[#f1f1f1] md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>Creating bugs since 2021</h1>

                    <div className='text-[#3368fa] flex justify-center items-center'>
                        <p className='md:text-5xl sm:text=4xl text-xl font-bold'>Daniel Rojo</p>
                    </div>
                    <p className='md:text-2xl text-xl font-medium text-gray-400 mt-2'>Web Developer</p>

                    <div className="flex flex-row mx-auto text-lg gap-x-4">

                        <a href='https://www.linkedin.com/in/daniel-rojo-dev/' target='blank' className='bg-[#3368fa] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-[#f1f1f1] hover:cursor-pointer hover:scale-105 duration-300 flex justify-center ' ><FaLinkedin size={30} className='mx-1' /><span className='mx-1'> LinkedIn</span></a>
                        <a href='https://github.com/destrada-2018259' target='blank' className='bg-[#3368fa] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-[#f1f1f1] hover:cursor-pointer hover:scale-105 duration-300 flex justify-center' > <FaGithub size={30} className='mx-1' /><span className='mx-1'> Github</span>  </a>
                        <a href='../../cv-es.pdf' download  className='bg-[#3368fa] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-[#f1f1f1] hover:cursor-pointer hover:scale-105 duration-300 flex justify-center mx-2' ><FaFilePdf size={30} className='mx-1' /><span className='mx-1'> Resume</span></a>
                    </div>
                
            </div>

            <div className='w-full  flex flex-col p-4  text-center justify-center'>
                Img
            </div>

        </div>
    )
}
