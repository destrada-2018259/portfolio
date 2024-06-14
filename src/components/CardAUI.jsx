import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}) => {
    let [hoveredIndex, setHoveredIndex] = useState  (null);

    return (
        <div
            className={cn(
                "grid grid-cols-1  md:grid-cols-2 py-10 max-w-[1240px]",
                className
            )}
        >
            {items.map((item, idx) => (
                <div key={item?.link}    className="relative group  block p-2 h-full w-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}>
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-[#2b2b2b] block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card className='md:h-[40rem] h-auto my-5'>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                    </Card>

                </div>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-white/[0.2] group-hover:border-[#161616] duration-300 hover:scale-95 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
    className,
    children,
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}) => {
    return (
        <p
            className={cn(
                "md:mt-8 mt-3 text-zinc-400 tracking-wide leading-relaxed text-left md:text-xl text-sm",
                className
            )}
        >
            {children}
        </p>
    );
};
