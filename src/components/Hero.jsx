import React from 'react'
import pfp from '../assets/pfp.png'

import {
    FaGithub,
    FaLinkedin,
    FaFilePdf
} from 'react-icons/fa6'
import { Typewriter } from './TypeWriter'

export const Hero = () => {
    return (
        <div className='text-[#f1f1f1] max-w-[1240px] md:h-screen mx-auto grid md:grid-cols-2'>

            <div className='w-full  flex flex-col p-4 text-center justify-center'>
              
                    
                    <Typewriter/>
                    <div className='text-[#3368fa] flex justify-center items-center'>
                        <p className='md:text-5xl sm:text=4xl text-3xl font-bold'>Daniel Rojo</p>
                    </div>
                    <p className='md:text-2xl text-2xl font-medium text-gray-400 mt-2'>Web Developer</p>

                    <div className="flex md:flex-row flex-col mx-auto text-lg gap-x-4 md:my-3  ">

                        <a href='https://www.linkedin.com/in/daniel-rojo-dev/' target='blank' className='bg-[#3368fa] hover:bg-[#2d3dcc] md:w-[150px] w-[300px] rounded-md font-medium md:my-6 my-2 mt-10 mx-auto py-3 text-[#f1f1f1] hover:cursor-pointer hover:scale-105 duration-300 flex justify-center ' ><FaLinkedin size={30} className='mx-1' /><span className='mx-1'> LinkedIn</span></a>
                        <a href='https://github.com/destrada-2018259' target='blank' className='bg-[#3368fa] hover:bg-[#2d3dcc] md:w-[150px] w-[300px] rounded-md font-medium md:my-6 my-2 mx-auto py-3 text-[#f1f1f1] hover:cursor-pointer hover:scale-105 duration-300 flex justify-center' > <FaGithub size={30} className='mx-1' /><span className='mx-1'> Github</span>  </a>
                        <a href='../../cv-es.pdf' download  className='bg-[#3368fa] hover:bg-[#2d3dcc] md:w-[150px] w-[300px] rounded-md font-medium md:my-6 my-2 mx-auto py-3 text-[#f1f1f1] hover:cursor-pointer hover:scale-105 duration-300 flex justify-center ' ><FaFilePdf size={30} className='mx-1' /><span className='mx-1'> Resume</span></a>
                    </div>
                
            </div>

            <div className='w-full  flex flex-col p-4  text-center justify-center'>
                <img className='size-auto hover:scale-105 hover:drop-shadow-2xl duration-300 ' src={pfp} alt="" />
            </div>

        </div>
    )
}
