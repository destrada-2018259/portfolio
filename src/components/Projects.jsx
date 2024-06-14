
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ProjectCards";


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
              src="https://private-user-images.githubusercontent.com/106627911/328312614-a5fc8cb4-f27f-49cd-91b7-000b69773e2e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgzMzk5MzQsIm5iZiI6MTcxODMzOTYzNCwicGF0aCI6Ii8xMDY2Mjc5MTEvMzI4MzEyNjE0LWE1ZmM4Y2I0LWYyN2YtNDljZC05MWI3LTAwMGI2OTc3M2UyZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYxNFQwNDMzNTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hOTYwM2Q2OGJkMGYxZGNiODMzNTA3NDc2YmQzZjcyMTM1ZjdmM2E1NDNiZjkyNjc1MDk4MmFmNDk1MGI5MDg4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.ZM7j33VjLkeRKP5CAikmyMveAyRXASs41TYM30j4gxw"
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
              src="https://private-user-images.githubusercontent.com/106627911/329125626-1c8cfa24-c4a2-4f7f-b1d7-702c0e386486.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTgzNDExODQsIm5iZiI6MTcxODM0MDg4NCwicGF0aCI6Ii8xMDY2Mjc5MTEvMzI5MTI1NjI2LTFjOGNmYTI0LWM0YTItNGY3Zi1iMWQ3LTcwMmMwZTM4NjQ4Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYxNFQwNDU0NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02ZDVkYWI1YzRlZWZkNmJiMWEwZTA5NzkxNGM1MjZkOTZiZjJiMjY2OGY2MzBmMmQ4ZThmMGZkYzYxYzNkN2YyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.xIv0LMDy3pPdclMc-CqMs4hhM3UmNkNnXPzQUEP-yWc"
    
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
