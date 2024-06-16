
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ProjectCards";
import pokedex from "../assets/pokedex.png";
import project from "../assets/project.png";


export function Projects() {
  return (

    <div className='md:h-screen p-4'>
    <h1 className='text-center mt-6 text-[#3368fa] md:text-5xl sm:text-4xl text-3xl font-bold md:py-6' >My Projects</h1>
    <div className="grid md:grid-cols-2 grid-cols-1 justify-center text-center max-w-[1240px] mx-auto">
        
      <CardContainer className="inter-var ">
        <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl hover:shadow-gray-800 border-white/[0.2]  w-auto sm:w-[30rem] md:h-[32rem] h-auto rounded-xl p-6 border   ">
          <CardItem
            translateZ="50"
            className="text-2xl font-bold text-neutral-600 dark:text-white"
          >
            Pokédex React
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300"
          >
            FrontEnd App fetching PokeApi to get the data.
            </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={pokedex}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="pokedex"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="a"
              href="https://github.com/destrada-2018259/pokedex-react"
              target="__blank"
              className="px-4 py-2 rounded-xl md:text-xl font-normal text-white"
            >
              Repo →
            </CardItem>
            <CardItem
               translateZ={20}
               as="a"
               href="https://pokedex-react-lemon.vercel.app/"
               target="__blank"
               className="px-4 py-2 rounded-xl md:text-xl font-bold bg-white text-black"
            >
              Demo
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <CardContainer className="inter-var h-[40rem]">
        <CardBody className="relative group/card  dark:hover:shadow-2xl hover:shadow-gray-800 border-white/[0.2] bg-black w-auto sm:w-[30rem] md:h-[32rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-2xl font-bold text-neutral-600 dark:text-white"
          >
            React + Tailwind Responsive Web App
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300"
          >
            Responsive Web App using tailwind
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={project}
    
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="react-web-app"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-20">
            <CardItem
              translateZ={20}
              as="a"
              href="https://github.com/destrada-2018259/react-tailwind-app"
              target="__blank"
              className="px-4 py-2 rounded-xl md:text-xl font-normal text-white"
            >
              Repo →
            </CardItem>
            <CardItem
               translateZ={20}
               as="a"
               href="https://react-tailwind-app-pi.vercel.app/"
               target="__blank"
               className="px-4 py-2 rounded-xl md:text-xl font-bold bg-white text-black"
            >
              Demo
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
    </div>
  );
}
