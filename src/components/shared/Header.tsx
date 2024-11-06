"use client"
import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { navItems } from '@/constants/navItems'
import Image from 'next/image'
import Logo from '../../public/assets/images/logo.png'
import CustomSearchBar from './CustomSearchBar'
import { HoveredLink, Menu, MenuItem } from '../ui/navbar-menu'
import { ChevronDown, MenuIcon, XIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/cn'

const Header = () => {
    const [active, setActive] = useState<string | null>(null);
    const [open, setOpen] = useState<boolean>(false)
    return (
        <header className='w-full pt-2'>
            <div className='container max-sm:px-4'>
                <nav className=' relative flex items-center gap-2' style={{ borderStyle: "double" }}>
                    <button className='size-8 absolute md:hidden  top-16  left-0' onClick={() => setOpen((prev) => !prev)}>
                        <MenuIcon />
                    </button>
                    <Image src={Logo} width={500} height={500} alt='the executive headlines' className='mx-auto' />
                    <div className='absolute max-md:top-14 -right-4 md:right-0'>
                        <CustomSearchBar />
                    </div>
                </nav>
                <div className='mt-10 z-[2000]'>
                    <MobileNav open={open} setOpen={setOpen} />
                </div>
                <div className="relative w-full  flex items-center justify-center border-y-4 border-double border-gray-300 mt-2 max-md:hidden">
                    <div
                        className={(" inset-x-0 max-w-2xl mx-auto z-50 max-lg:tracking-tight")}
                    >
                        <Menu setActive={setActive}>
                            {
                                navItems.map((item, i) => (
                                    <MenuItem setActive={setActive} active={active} item={item.label} path={item.path ?? ""} key={i}>
                                        {item.subMenu && item.subMenu.length !== 0 && <div className="flex flex-col space-y-4 text-xs">
                                            {
                                                item.subMenu.map((subItem, idx) => (
                                                    <HoveredLink href={subItem.path} key={idx}>{subItem.label}</HoveredLink>
                                                ))
                                            }
                                        </div>}
                                    </MenuItem>
                                ))
                            }
                        </Menu>
                    </div>
                </div>

            </div>
            <Navbar navItems={navItems} />
        </header>
    )
}

const MobileNav = ({ open, setOpen }: { open: boolean, setOpen: (val: boolean) => void }) => {
    const [expanded, setExpanded] = useState<number | null>(null)

    const toggleExpand = (index: number) => {
        setExpanded(expanded === index ? null : index)
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: open ? 1 : 0, x: open ? 0 : '-100%' }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="fixed border-2 inset-y-0 left-0 w-full max-w-sm bg-white z-[4000] md:hidden overflow-y-auto"
        >
            <div className='flex items-center justify-between py-4 pr-4'>
                <Image src={Logo} alt='logo' width={300} height={200} />
                <button
                    className=""
                    onClick={() => setOpen(false)}
                >
                    <XIcon size={24} />
                </button>
            </div>
            <ul className="py-4 space-y-2 text-lg px-4">
                {navItems.map((item, i) => (
                    <li key={i} className="relative">
                        <div
                            className={cn("flex justify-between items-center py-2 px-4 rounded-lg cursor-pointer hover:text-gray-700 transition-colors hover:bg-slate-100 ", expanded === i && "bg-slate-100 text-gray-700")}
                            onClick={() => item.subMenu ? toggleExpand(i) : setOpen(false)}
                        >
                            <Link href={item.path ?? "#"}>{item.label}</Link>
                            {item.subMenu && item.subMenu.length !== 0 && (
                                <ChevronDown
                                    size={18}
                                    className={`transform transition-transform ${expanded === i ? "rotate-180" : ""}`}
                                />
                            )}
                        </div>
                        <AnimatePresence>
                            {item.subMenu && expanded === i && (
                                <motion.ul
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 25
                                    }}
                                    className="pl-6 space-y-2 overflow-hidden mt-4"
                                >
                                    {item.subMenu.map((subItem, idx) => (
                                        <li key={idx} className="text-base">
                                            <Link
                                                href={subItem.path}
                                                className="block  hover:text-gray-700 transition-colors hover:bg-slate-100 rounded-lg p-2"
                                                onClick={() => setOpen(false)}
                                            >
                                                {subItem.label}
                                            </Link>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </li>
                ))}
            </ul>
        </motion.div>
    )
}

export default Header