import { cn } from "../utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/BentoGrid";
import ippo from "../assets/ippo.jpeg"
import celtics from "../assets/celtics.jpeg"
import nihongo from "../assets/nihongo.jpeg"
import progra from "../assets/progra.jpeg"
import rubik from "../assets/rubik.jpeg"
import chess from "../assets/chess.jpeg"
import anime from "../assets/anime.jpeg"
import mk1 from "../assets/mk1.jpeg"


export function Grid() {
    return (
        <div className="p-4">
            <BentoGrid className="max-w-4xl mx-auto mt-5">

                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </div>
    );
}

const items = [
    {
        header: <img className="size-full self-center rounded-lg justify-center m-auto md:mt-auto mt-6 opacity-80 hover:opacity-100" src={progra} alt="" />,
    },
    {
        header: <img className="size-full self-center rounded-lg md:mt-auto mt-6 opacity-80 hover:opacity-100" src={mk1} alt="" />,

    },
    {
        header: <img className="size-full self-center rounded-lg md:mt-auto mt-6 opacity-80 hover:opacity-100" src={celtics} alt="" />,
    },
    {
        title: "Hi there! I'm Daniel Rojo",
        description:
        <>
            I began my journey as a developer in 2021, initially diving into basic programming concepts with simple algorithms. As I progressed, I embraced new technologies and developed a passion for web development. I have hands-on experience with NodeJS and Spring Boot for backend solutions, and React is my go-to framework for building responsive and dynamic frontends. I am well-versed in managing databases. <br/><br/> I also have a solid grasp of Git, and a deep understanding of various architectural patterns and design principles. Continuous learning drives me, and I thrive on expanding my knowledge and skills. Outside of development, I have a diverse range of interests, including videogames, basketball, solving Rubik's cubes, and exploring Japanese culture and language.

        </>
    },
    {
        header: <img className="size-full self-center rounded-lg md:mt-auto mt-6 opacity-80 hover:opacity-100" src={nihongo} alt="" />,

    },
    {  
        header: <img className="size-auto self-center rounded-lg md:mt-auto mt-6 opacity-80 hover:opacity-100" src={rubik} alt="" />,

    },
    {
        header: <img className="size-full self-center rounded-lg md:mt-auto mt-6 opacity-80 hover:opacity-100" src={anime} alt="" />,

    },
];
