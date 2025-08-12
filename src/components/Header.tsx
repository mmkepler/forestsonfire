"use client"
import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const [menu, setMenu] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [mobileDrop, setMobileDrop] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null); 
  const mobileNavDropdownRef = useRef<HTMLDivElement>(null);
  const largeNavDropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter()
  
//toggle mobile nav menu, also closes small dropdown if open
  const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if(dropdown){
      setDropdown(false)
    }
    setMenu(true)
  }

  //toggle resources dropdown in desktop/larger nav
  const toggleDropLarge = () => {
    setDropdown(!dropdown)
  }

  //toggles resources dropdown in mobile nav
  const toggleDropMobile = () => {
    setMobileDrop(!mobileDrop)
  }

  const closeMenu = () => {
    setMenu(false)
  }

  //for use on anchor/link to close menu and then navigate
  const closeMobileMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const location = e.currentTarget.href;
    setMenu(false)
    setMobileDrop(false)
    router.push(location)
  }

  //put code to close resource dropdown on outside click here
  useEffect(() => {
    function outsideMobileNav(e:MouseEvent){
      if(mobileMenuRef && !mobileMenuRef.current?.contains(e.target as Node)){
        setMenu(false)
      }
    }
    function outsideMobileDrop(e: MouseEvent){
      if(mobileNavDropdownRef && !mobileNavDropdownRef.current?.contains(e.target as Node)){
        setMobileDrop(false)
      }
    }
    function outsideLargeDrop(e: MouseEvent){
      if(largeNavDropdownRef && !largeNavDropdownRef.current?.contains(e.target as Node)){
        setDropdown(false)
      }
    }

    document.addEventListener("mousedown", outsideMobileNav)
    document.addEventListener("mousedown", outsideMobileDrop)
    document.addEventListener("mousedown", outsideLargeDrop)
    return () => {
      document.removeEventListener("mousedown", outsideMobileNav)
      document.removeEventListener("mousedown", outsideMobileDrop)
      document.removeEventListener("mousedown", outsideLargeDrop)
    }
  })


  return (
    <header className="w-full flex flex-row justify-center items-center bg-zinc-800 text-white min-h-[70px] border-b-1 border-gray-200 shadow-[0_3px_4px_0_rgb(184,91,85)] absolute top-0 left-0">
      <div className="container mx-auto px-4 md:flex items-center gap-6">
        {/* Mobile logo and hamburger and close button */}
        <div className="flex items-center justify-between md:w-auto w-full">
          <Link href="/" className="py-5 px-5 flex-1 font-bold">Forests on Fire</Link>
          {!menu &&
          <div className="md:hidden flex items-center">
            <span onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            </span>
          </div>
          }
          {menu &&
            <div className="md:hidden flex items-center">
              <span onClick={closeMenu} className="text-xl">X</span>
            </div>
          }
        </div>
       
        <div className="hidden md:flex md:flex-row  items-center justify-start md:space-x-1 pb-3 md:pb-0 navigation-menu">
          <Link href="/about" className="py-2 px-3 block hover:bg-[#B85B0F] rounded-sm">About</Link>
          <div className="relative">
            <button type="button" className="dropdown-toggle px-3 py-2 hover:bg-[#B85B0F] flex items-center gap-2 rounded">
              <span className="ponter-events-none select-none">Resources</span>
              <svg  onClick={toggleDropLarge}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ponter-events-none">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {/* Dropdown menu on desktop sized nav */}
            {dropdown &&
            <div ref={largeNavDropdownRef} className="dropdown-menu absolute bg-zinc-800 rounded-b-lg pb-2 w-48">
              <Link href="/resources/govagencies" onClick={toggleDropLarge} className="block px-6 py-2 hover:bg-[#B85B0F]">Govt Agencies</Link>
              <Link href="/resources/stateagencies" onClick={toggleDropLarge} className="block px-6 py-2 hover:bg-[#B85B0F]">State Agencies</Link>
              <Link href="/resources/apps" onClick={toggleDropLarge} className="block px-6 py-2 hover:bg-[#B85B0F]">Tracking Apps</Link>
              <Link href="/resources/socialmedia" onClick={toggleDropLarge} className="block px-6 py-2 hover:bg-[#B85B0F]">Social Media Accounts</Link>
            </div>
            }
          </div>
          <Link href="/prevention" className="py-2 px-3 block hover:bg-[#B85B0F] rounded-sm">Prevention</Link>
          <Link href="/blog" className="py-2 px-3 block hover:bg-[#B85B0F] rounded-sm">Blog</Link>
        </div>

        {menu && /*mobile nav menu*/
          <div ref={mobileMenuRef} className="md:hidden relative flex-col items-center justify-start pb-3 navigation-menu">
          <Link href="/about" onClick={closeMobileMenu} className="py-2 px-3 block">About</Link>
          <div className="relative">
            <button onClick={toggleDropMobile}  type="button" className="dropdown-toggle px-3 py-2 hover:bg-zinc-800 flex items-center gap-2 rounded">
              <span className="ponter-events-none select-none">Resources</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ponter-events-none">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            {/* Dropdown menu  in mobile nav*/}
            { mobileDrop && 
              <div ref={mobileNavDropdownRef} onClick={toggleDropMobile} className="dropdown-menu absolute bg-zinc-800 rounded-b-lg pb-2 w-48">
                <Link href="/resources/govagencies" onClick={closeMobileMenu} className="block px-6 py-2 hover:bg-[#B85B0F]">Govt Agencies</Link>
                <Link href="/resources/stateagencies" onClick={closeMobileMenu} className="block px-6 py-2 hover:bg-[#B85B0F]">State Agencies</Link>
                <Link href="/resources/apps" onClick={closeMobileMenu} className="block px-6 py-2 hover:bg-[#B85B0F]">Tracking Apps</Link>
                <Link href="/resources/socialmedia" onClick={closeMobileMenu} className="block px-6 py-2 hover:bg-[#B85B0F]">Social Media Accounts</Link>
              </div>
            }           
          </div>
          <Link href="/prevention" onClick={closeMobileMenu} className="py-2 px-3 block">Prevention</Link>
          <Link href="/blog" onClick={closeMobileMenu} className="py-2 px-3 block">Blog</Link>
        </div>
        }
      </div>
    </header>
  )
}


/* Add outside click to close mobile menu, to close either dropdown menu 

*/