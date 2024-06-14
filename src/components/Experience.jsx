import React from 'react'
import { HoverEffect } from './CardAUI';

export const Experience = () => {
    return (
        <div className="text-[#f1f1f1] max-w-[1240px] md:h-screen mx-auto">
            <h1 className='text-center mt-6 text-[#3368fa] md:text-5xl sm:text-4xl text-3xl font-bold md:py-6' >My Experience</h1>

            <div className='w-full  flex flex-col p-4  text-center justify-center'>

                <div className="max-w-[1240px] mx-auto px-8 ">
                    <HoverEffect items={experience} />
                </div>
            </div>
        </div>
    )
}

export const experience = [
    {
        title: <>
            <p className='md:text-6xl text-2xl md:mt-20 '>is4Tech</p>
            <p className='text-slate-500 md:mt-3 mt-1'>August - October 2023</p>
            <p className='text-slate-300 md:text-3xl text-lg text-bold mt-3 md:mb-20'>Backend Developer</p>

        </>,
        description: "REST API service development using Java with SpringBoot, Docker, PostgreSQL and Liquibase, applying the microservice architecture, also implementing unit test and SonarLint.",
        link: "",
    },
    {
        title: <>
              <p className='md:text-6xl text-2xl md:mt-20 '>Synergia</p>
            <p className='text-slate-500 md:mt-3 mt-1'>April 2024 - Present</p>
            <p className='text-slate-300 md:text-3xl text-lg text-bold mt-3 md:mb-20'>Backend Developer</p>

        </>,
        description: "Web and Desktop apps for financial entities, using Azure DevOps, DotNet, C#, SQL Server. Implementation of efficient solutions and clean code to provide a better product",
        link: "a",
    },

];