import React from 'react'
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGolang ,
    FaNodeJs ,
    FaGitAlt ,
    FaDatabase 
} from 'react-icons/fa6'
import { SiMongodb,
    SiSpring ,
    SiTypescript ,
    SiTailwindcss ,
    SiDotnet 
 } from "react-icons/si";

export const Skills = () => {
    return (

        <div className="text-[#f1f1f1] max-w-[1240px] h-screen mx-auto">
            <h1 className='text-center mt-4 text-[#3368fa] md:text-5xl sm:text-4xl text-3xl font-bold md:py-6' >My Skills</h1>

            <div className='grid grid-cols-4 justify-center items-center text-center my-10 gap-y-10'>

                <div className='flex flex-col justify-center items-center hover:scale-105 duration-300 gap-y-2 '><FaHtml5 size={70} className=' hover:text-[#E34F26] transition-colors duration-300' />Html</div>
                <div className='flex flex-col justify-center items-center hover:scale-105 duration-300 gap-y-2 '><FaCss3Alt size={70} className=' hover:text-[#1572B6] transition-colors duration-300' />Css</div>
                <div className='flex flex-col justify-center items-center hover:scale-105 duration-300 gap-y-2 '><FaJs size={70} className=' hover:text-[#F7DF1E] transition-colors duration-300' />JavaScript</div>
                <div className='flex flex-col justify-center items-center hover:scale-105 duration-300 gap-y-2 '><FaReact size={70} className=' hover:text-[#61DAFB] transition-colors duration-300' />ReactJs</div>
                <div className='flex flex-col justify-center items-center hover:scale-105 duration-300 gap-y-2 '><SiMongodb  size={70} className=' hover:text-[#47A248] transition-colors duration-300' />MongoDB</div>
                <div className='flex flex-col justify-center items-center hover:scale-105 duration-300 gap-y-2 '><SiSpring  size={70} className=' hover:text-[#6DB33F] transition-colors duration-300' />Springboot</div>
                <div className='flex flex-col justify-center items-center hover:scale-105 duration-300 gap-y-2 '><FaGolang  size={70} className=' hover:text-[#00ADD8] transition-colors duration-300' />Golang</div>
                <div className='flex flex-col justify-center items-center hover:scale-105 duration-300 gap-y-2 '><FaNodeJs  size={70} className=' hover:text-[#339933] transition-colors duration-300' />NodeJs</div>
                <div className='flex flex-col justify-center items-center hover:scale-105 duration-300 gap-y-2 '><SiTypescript  size={70} className=' hover:text-[#3178C6] transition-colors duration-300' />TypeScript</div>
                <div className='flex flex-col justify-center items-center hover:scale-105 duration-300 gap-y-2 '><FaGitAlt  size={70} className=' hover:text-[#F05032] transition-colors duration-300' />Git</div>
                <div className='flex flex-col justify-center items-center hover:scale-105 duration-300 gap-y-2 '><SiTailwindcss  size={70} className=' hover:text-[#38B2AC] transition-colors duration-300' />Tailwind</div>
                <div className='flex flex-col justify-center items-center hover:scale-105 duration-300 gap-y-2 '><FaDatabase  size={70} className=' hover:text-[#F29111] transition-colors duration-300' />SQL</div>
            </div>
        </div>
    )
}
