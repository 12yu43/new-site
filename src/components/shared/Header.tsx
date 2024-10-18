import React from 'react'
import { Navbar } from './Navbar'
import CustomSearchBar from './CustomSearchBar'
import { navItems } from '@/constants/navItems'

const Header = () => {
    return (
        <header className='flex fixed top-8 items-center justify-between w-full px-8'>
            <h1>logo</h1>
            <Navbar navItems={navItems} />
            <CustomSearchBar />
        </header>
    )
}

export default Header