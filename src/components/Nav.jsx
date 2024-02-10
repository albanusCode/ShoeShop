import React from 'react'
import { useState } from 'react';
import headerLogo from '../assets/images/headerLogo.png'
import {hamburger} from '../assets/icons';
import {navLinks} from '../constants'

const Nav = () => {

    const[open, setOpen] = useState(false)
    const handleOnClick = () => {
        setOpen(!open)
    }

  return (
    <header className='fixed padding-x py-4 md:py-4 z-20 w-full bg-black'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="Logo" width={60} height={29} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-md:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href}
                        className='font-monsterrat leading-normal text-lg text-slate-gray'
                        >{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-md:block cursor-pointer transition duration-500'>
                <img src={hamburger} alt="humbrger" width={25} height={25} 
                onClick={handleOnClick}
                />
            </div>
        </nav>
        {open &&
        <div className='pt-2'>
             {navLinks.map((item) => (
                <div key={item.label}>
                    <a href={item.href}
                    className='
                        hidden max-md:block font-monsterrat 
                        leading-normal justify-center p-4 
                        text-lg text-slate-gray
                        hover:text-coral-red
                        cursor-pointer
                        '
                    >{item.label}</a>
                </div>
             ))}
            </div>}
    </header>
  )
}

export default Nav