"use client"
import React, { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menu, setMenu] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [mobileDrop, setMobileDrop] = useState(false)

  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMenu(!menu)
  }

  const toggleDropLarge = () => {
    setDropdown(!dropdown)
  }

  const toggleDropMobile = () => {
    setMobileDrop(!mobileDrop)
  }
  return (
    <header className="w-full flex flex-row justify-center items-center bg-amber-700 min-h-[70px]">
      <div className="container mx-auto px-4 md:flex items-center gap-6">
        {/* Mobile logo and hamburger */}
        <div className="flex items-center justify-between md:w-auto w-full">
          <Link href="#" className="py-5 px-5 flex-1 font-bold">Forests on Fire</Link>
          <div className="md:hidden flex items-center">
            <span onClick={ toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </span>
          </div>
        </div>
        {/* Dropdown Mobile Navbar */}
       
        <div className="hidden md:flex md:flex-row  items-center justify-start md:space-x-1 pb-3 md:pb-0 navigation-menu">
          <Link href="/" className="py-2 px-3 block">Home</Link>
          <Link href="about" className="py-2 px-3 block">About</Link>
          <div className="relative">
            <button type="button" className="dropdown-toggle px-3 py-2 hover:bg-sky-800 flex items-center gap-2 rounded">
              <span className="ponter-events-none select-none">Resources</span>
              <svg  onClick={toggleDropMobile}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ponter-events-none">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {/* Dropdown menu */}
            {mobileDrop &&
            <div className="dropdown-menu absolute bg-gray-700 rounded-b-lg pb-2 w-48">
              <Link href="#" className="block px-6 py-2 hover:bg-sky-800">Govt Agencies</Link>
              <Link href="#" className="block px-6 py-2 hover:bg-sky-800">State Agencies</Link>
              <Link href="#" className="block px-6 py-2 hover:bg-sky-800">Tracking Apps</Link>
              <Link href="#" className="block px-6 py-2 hover:bg-sky-800">Social Media Accounts</Link>
            </div>
            }
          </div>
          <Link href="about" className="py-2 px-3 block">Prevention</Link>
          <Link href="about" className="py-2 px-3 block">Blog</Link>
        </div>

        {menu && /*mobile hidden until click*/
          <div className="md:hidden flex-col items-center justify-start pb-3 navigation-menu">
          <Link href="/" className="py-2 px-3 block">Home</Link>
          <Link href="about" className="py-2 px-3 block">About</Link>
          <div className="relative">
            <button onClick={toggleDropLarge}  type="button" className="dropdown-toggle px-3 py-2 hover:bg-sky-800 flex items-center gap-2 rounded">
              <span className="ponter-events-none select-none">Resources</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ponter-events-none">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {/* Dropdown menu */}
            { dropdown && 
            <div className="dropdown-menu absolute bg-gray-700 rounded-b-lg pb-2 w-48">
              <Link href="#" className="block px-6 py-2 hover:bg-sky-800">Govt Agencies</Link>
              <Link href="#" className="block px-6 py-2 hover:bg-sky-800">State Agencies</Link>
              <Link href="#" className="block px-6 py-2 hover:bg-sky-800">Tracking Apps</Link>
              <Link href="#" className="block px-6 py-2 hover:bg-sky-800">Social Media Accounts</Link>
            </div>
}
          </div>
          <Link href="about" className="py-2 px-3 block">Prevention</Link>
          <Link href="about" className="py-2 px-3 block">Blog</Link>
        </div>
        }
      </div>
    </header>
  )
}

