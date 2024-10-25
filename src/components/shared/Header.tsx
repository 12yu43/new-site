"use client"
import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { navItems } from '@/constants/navItems'
import Image from 'next/image'
import Logo from '../../public/assets/images/logo.png'
import CustomSearchBar from './CustomSearchBar'
import { HoveredLink, Menu, MenuItem } from '../ui/navbar-menu'

const Header = () => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <header className='w-full pt-2'>
            <div className='container '>
                <nav className=' relative flex items-center justify-center  border-black' style={{ borderStyle: "double" }}>
                    <Image src={Logo} width={500} height={500} alt='the executive headlines' className='mx-auto' />
                    <div className='absolute right-0'>
                        <CustomSearchBar />
                    </div>
                </nav>
                <div className="relative w-full  flex items-center justify-center border-y-2 border-black mt-2 max-md:hidden">
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

export default Header