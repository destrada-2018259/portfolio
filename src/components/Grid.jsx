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


export function Grid() {
    return (
        <div>
            <h1 className='text-center text-white mt-6 md:text-5xl sm:text-4xl text-3xl font-bold md:py-6' >About Me</h1>
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
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        // title: "The Dawn of Innovation",
        // description: "Explore the birth of groundbreaking ideas and inventions.",
        header: <img className="size-full self-center rounded-lg" src={progra} alt="" />,

    },
    {
        // title: "The Digital Revolution",
        // description: "Dive into the transformative power of technology.",
        header: <img className="size-full self-center rounded-lg" src={chess} alt="" />,

    },
    {
        // title: "The Art of Design",
        // description: "Discover the beauty of thoughtful and functional design.",
        header: <img className="size-full self-center rounded-lg" src={celtics} alt="" />,

    },
    {
        title: "Hi there! I'm Daniel Rojo",
        description:
            "Understand the impact of effective communication in our lives.",

    },
    {
        // title: "The Pursuit of Knowledge",
        // description: "Join the quest for understanding and enlightenment.",
        header: <img className="size-full self-center rounded-lg" src={nihongo} alt="" />,

    },
    {
        // title: "The Joy of Creation",
        // description: "Experience the thrill of bringing ideas to life.",
        header: <img className="size-auto self-center rounded-lg" src={rubik} alt="" />,

    },
    {
        // title: "The Spirit of Adventure",
        // description: "Embark on exciting journeys and thrilling discoveries.",
        header: <img className="size-full self-center rounded-lg " src={anime} alt="" />,

    },
];
