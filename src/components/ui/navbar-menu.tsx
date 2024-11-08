"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    path,
    children,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    path?: string
    children?: React.ReactNode;
}) => {
    const pathName = usePathname()
    return (
        <div onMouseEnter={() => setActive(item)} className="relative ">
            {
                !path ? <motion.p
                    transition={{ duration: 0.3 }}
                    className="cursor-pointer  hover:opacity-[0.9] "
                >
                    {item}
                </motion.p> : <HoveredLink href={path} className={cn("cursor-pointer ", (pathName === path || pathName.includes(path)) && "text-black")}>{item} </HoveredLink>
            }

            {active !== null && !!children && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_0.1rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active"
                                className="bg-white  backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
                            >
                                <motion.div
                                    layout
                                    className="w-max h-full p-4 "
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className="relative rounded-full border border-white/[0.2] text-base text-nowrap shadow-input flex justify-center space-x-4 px-6 py-4 text-neutral-700 "
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <Link href={href} className="flex space-x-2">
            <Image
                src={src}
                width={140}
                height={70}
                alt={title}
                className="flex-shrink-0 rounded-md shadow-2xl"
            />
            <div>
                <h4 className="text-xl font-bold mb-1 text-black ">
                    {title}
                </h4>
                <p className="text-neutral-700 text-sm max-w-[10rem] ">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, className, ...rest }: any) => {
    return (
        <Link
            className={cn("hover:opacity-[0.9] text-base ", className)}
            {...rest}
        >
            {children}
        </Link>
    );
};
