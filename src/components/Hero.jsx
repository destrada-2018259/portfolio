import React from 'react'

import {
    FaGithub,
    FaLinkedin,
    FaFilePdf
} from 'react-icons/fa6'

export const Hero = () => {
    return (
        <div className='text-[#f1f1f1] max-w-[1240px] h-screen mx-auto grid grid-cols-2'>

            <div className='w-full  flex flex-col p-4 my-4 text-center'>
                <div className='max-w[800px]  w-full h-screen mx-auto text-center flex flex-col justify-center'>
                    
                    <h1 className=' text-[#f1f1f1] md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>Creating bugs since 2021</h1>

                    <div className='text-[#3368fa] flex justify-center items-center'>
                        <p className='md:text-5xl sm:text=4xl text-xl font-bold'>Daniel Rojo</p>
                    </div>
                    <p className='md:text-2xl text-xl font-medium text-gray-400 mt-2'>Web Developer.</p>
                    

                    <div className="flex flex-row mx-auto text-lg">

                        <button className='bg-[#3368fa] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-[#f1f1f1] hover:scale-105 duration-300 flex justify-center mx-2' ><FaLinkedin size={30} className='mx-1' /><span className='mx-1'> LinkedIn</span></button>
                        <button className='bg-[#3368fa] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-[#f1f1f1] hover:scale-105 duration-300 flex justify-center mx-2' > <FaGithub size={30} className='mx-1' /><span className='mx-1'> Github</span>  </button>
                        <button className='bg-[#3368fa] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-[#f1f1f1] hover:scale-105 duration-300 flex justify-center mx-2' ><FaFilePdf size={30} className='mx-1' /><span className='mx-1'> Resume</span></button>
                    </div>
                    
                </div>
            </div>

            <div className='w-full  flex flex-col p-4 my-4 text-center'>
                Img
            </div>

        </div>
    )
}
