import React from 'react'
import { HoverEffect } from './Card';

export const Experience = () => {
    return (
        <div className="text-[#f1f1f1] max-w-[1240px] h-screen mx-auto">
            <h1 className='text-center mt-6 text-[#3368fa] md:text-5xl sm:text-4xl text-3xl font-bold md:py-6' >My Experience</h1>

            <div className='w-full  flex flex-col p-4  text-center justify-center'>

                <div className="max-w-[1240px] mx-auto px-8 ">
                    <HoverEffect items={projects} />
                </div>
            </div>
        </div>
    )
}

export const projects = [
    {
        title: <>
            <p className='md:text-6xl text-3xl md:mt-20 '>is4Tech</p>
            <p className='text-slate-500 mt-1'>August - October 2023</p>
            <p className='text-slate-300 text-xl text-bold mt-3 md:mb-20'>Backend Developer</p>

        </>,
        description: "REST API service development using Java with SpringBoot, Docker, PostgreSQL and Liquibase, applying the microservice architecture.",
        link: "",
    },
    {
        title: <>
             <p className='md:text-6xl text-3xl md:mt-20 '>is4Tech</p>
            <p className='text-slate-500 mt-1'>August - October 2023</p>
            <p className='text-slate-300 text-xl text-bold mt-3 md:mb-20'>Backend Developer</p>

        </>,
        description: "REST API service development using Java with SpringBoot, Docker, PostgreSQL and Liquibase, applying the microservice architecture.",
        link: "a",
    },

];