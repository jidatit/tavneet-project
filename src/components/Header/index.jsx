import React, { useState } from 'react';
import weblogo from "../../assets/web.svg"
import Grow from '@mui/material/Grow';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [lang, setlang] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  if (showMenu === true) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[999] backdrop-blur-2xl">
        <div className="w-full flex items-center justify-between py-4 px-5 md:px-20">

          {/* Icon */}
          <div className="max-w-[125px]">
            <p className='text-white'>Reign</p>
            <p className='text-white font-semibold'>Skyrise Group</p>
          </div>

          {/* Hamburger menu icon */}
          <div className="block lg:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <div className='flex flex-col justify-center items-center px-2 py-2 rounded-full bg-white'>
                <svg className={`h-6 w-6 fill-current ${showMenu ? 'hidden' : ''}`} viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
          {/* Menu items */}
          <div className="hidden lg:flex gap-6 uppercase text-white">
            <div className="cursor-pointer group">
              <p className="mb-1 px-2">Apartments</p>
              <div className="w-full h-[1px] bg-white group-hover:block hidden"></div>
            </div>
            <div className="cursor-pointer group">
              <p className="mb-1 px-2">Map</p>
              <div className="w-full h-[1px] bg-white group-hover:block hidden"></div>
            </div>
            <div className="cursor-pointer group">
              <p className="mb-1 px-2">Gallery</p>
              <div className="w-full h-[1px] bg-white group-hover:block hidden"></div>
            </div>
          </div>
          {/* Contact button */}
          <div className='hidden lg:block'>

            <div className="relative hidden mr-2 lg:inline-block">
              <button onClick={() => setlang(!lang)} className="text-white bg-transparent border-[2px] py-3 px-5 flex flex-row justify-center items-center gap-1 shadow-md rounded-full">ENG <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" class="styled__DropdownIcon-sc-1tnrbxg-1 dGFIsG" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg></button>

              {lang && (<div className='absolute p-2 top-[60px] left-0 w-[163px] min-h-[200px] rounded-3xl bg-white'>
                <div className='flex flex-col transition-all ease-in-out delay-100 justify-center items-start py-3 px-2 rounded-[40px] group bg-white hover:bg-black'>
                  <p className='group-hover:text-white text-black tracking-widest ml-2 font-bold text-[14px]'>English</p>
                </div>
                <div className='flex flex-col transition-all ease-in-out delay-100 justify-center items-start py-3 px-2 rounded-[40px] group bg-white hover:bg-black'>
                  <p className='group-hover:text-white text-black tracking-widest ml-2 font-bold text-[14px]'>English</p>
                </div>
                <div className='flex flex-col transition-all ease-in-out delay-100 justify-center items-start py-3 px-2 rounded-[40px] group bg-white hover:bg-black'>
                  <p className='group-hover:text-white text-black tracking-widest ml-2 font-bold text-[14px]'>English</p>
                </div>
                <div className='flex flex-col transition-all ease-in-out delay-100 justify-center items-start py-3 px-2 rounded-[40px] group bg-white hover:bg-black'>
                  <p className='group-hover:text-white text-black tracking-widest ml-2 font-bold text-[14px]'>English</p>
                </div>
              </div>)}

            </div>

            <div className="hidden lg:inline-block">
              <button className="text-black bg-white py-3 px-5 shadow-md rounded-full">Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      {/* small header */}
      <Grow
        in={showMenu}
        style={{ transformOrigin: 'right top' }}
        {...(showMenu ? {} : {})}
      >
        <div className={`pop z-[1000] transition-all duration-500 fixed top-0 left-0 right-0 bottom-0 bg-white overflow-y-auto ${showMenu ? ' opacity-100' : 'opacity-0'}`}>
          <div className="max-w-[1350px] mx-auto flex gap-5 flex-col items-center justify-center p-4">

            <div className='w-full flex flex-row justify-between items-center'>
              <div className='text-black'>
                <p>Reign</p>
                <p className='font-semibold'>Skyrise Group</p>
              </div>
              <button onClick={toggleMenu} className="text-white bg-black py-4 px-4 shadow-md rounded-full">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
              </button>
            </div>

            <div className='w-full flex mt-[30px] flex-row justify-end gap-3 items-center'>
              <div className='group border-black hover:bg-black transition-all ease-in-out delay-200 border-[1px] px-2 py-3 rounded-full flex flex-col justify-center items-center'>
                <p className='group-hover:text-white uppercase font-semibold'>ENG</p>
              </div>
              <div className='group border-black hover:bg-black transition-all ease-in-out delay-200 border-[1px] px-4 py-3 rounded-full flex flex-col justify-center items-center'>
                <p className='group-hover:text-white uppercase font-semibold'>PL</p>
              </div>
              <div className='group border-black hover:bg-black transition-all ease-in-out delay-200 border-[1px] px-3 py-3 rounded-full flex flex-col justify-center items-center'>
                <p className='group-hover:text-white uppercase font-semibold'>ESP</p>
              </div>
              <div className='group border-black hover:bg-black transition-all ease-in-out delay-200 border-[1px] px-4 py-3 rounded-full flex flex-col justify-center items-center'>
                <p className='group-hover:text-white uppercase font-semibold'>PT</p>
              </div>
            </div>

            <div className='w-full flex flex-col justify-center gap-0 items-center'>
              <div className='w-full flex flex-col justify-center items-start border-t-[2px] border-b-[2px] border-[#e5e7eb] py-3 '>
                <h1 className='text-[28px] text-black text-start font-extrabold'>Apartments</h1>
              </div>
              <div className='w-full flex flex-col justify-center items-start py-3 '>
                <h1 className='text-[28px] text-black text-start font-extrabold'>Map</h1>
              </div>
              <div className='w-full flex flex-col justify-center items-start border-t-[2px] border-b-[2px] border-[#e5e7eb] py-3 '>
                <h1 className='text-[28px] text-black text-start font-extrabold'>Gallery</h1>
              </div>
            </div>

            <div className='w-full flex mt-[30px] flex-row gap-3 justify-center items-center'>
              <button className='w-[70%] uppercase rounded-[30px] text-[14px] font-semibold text-white bg-[#333333] py-3'>contact us</button>

              <div className="rounded-full bg-transparent border-black border-[1px] flex flex-col justify-center items-center p-3">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"></path><path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path></svg>
              </div>

              <div className="rounded-full bg-transparent border-black border-[1px] flex flex-col justify-center items-center p-3">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Mail"><path d="M19.435,4.065H4.565a2.5,2.5,0,0,0-2.5,2.5v10.87a2.5,2.5,0,0,0,2.5,2.5h14.87a2.5,2.5,0,0,0,2.5-2.5V6.565A2.5,2.5,0,0,0,19.435,4.065Zm-14.87,1h14.87a1.489,1.489,0,0,1,1.49,1.39c-2.47,1.32-4.95,2.63-7.43,3.95a6.172,6.172,0,0,1-1.06.53,2.083,2.083,0,0,1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26-1.14-.6-2.3-1.21-3.44-1.82A1.491,1.491,0,0,1,4.565,5.065Zm16.37,12.37a1.5,1.5,0,0,1-1.5,1.5H4.565a1.5,1.5,0,0,1-1.5-1.5V7.6c2.36,1.24,4.71,2.5,7.07,3.75a5.622,5.622,0,0,0,1.35.6,2.872,2.872,0,0,0,2-.41c1.45-.76,2.89-1.53,4.34-2.29,1.04-.56,2.07-1.1,3.11-1.65Z"></path></g></svg>
              </div>

            </div>

          </div>
        </div>
      </Grow>
    </>
  );
}

export default Header;




