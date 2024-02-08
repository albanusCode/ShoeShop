import React from 'react'
import {footerLinks, socialMedia} from '../constants'
import logo from '../assets/images/logo.png'
import headerLogo from '../assets/images/headerLogo.png'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap'>
        <div className='flex flex-col items-start'>
          <a href="/">
            <img src={logo} alt="" width={200} height={46}/>
          </a>
          <p className=' text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest ShopperSlide store. 
            Find your perfect size in store. Get Rewards
          </p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div className='flex justify-center items-center w-7 h-7 bg-white rounded-full'>
                <img src={icon.src} alt={icon.alt} width={20} height={20}/>
              </div>
            ))}
          </div>
          <div className='flex w-auto mt-6 justify-between lg:gap-10  sm:gap-5 flex-wrap'>
            {footerLinks.map((section) => (
              <div key={section}>
                <h4 className='text-white max-sm:mt-4 font-montserrat text-2xl leading-normal font-medium'>{section.title}</h4>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.name} className='mt-4 text-white-400 font-montserrat leading-normal hover:text-coral-red cursor-pointer'>
                      <a href="">{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-center text-white-400 mt-10 max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
            <img src={copyrightSign} alt='copy right'width={20} height={20}  className='rounded-full m-0'/>
            <p className='hover:text-coral-red'>Copyright. All rights reserved</p>
        </div>
        <p className='font-montserrat cursor-pointer hover:text-coral-red'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer