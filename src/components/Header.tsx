import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full flex flex-row justify-center items-center bg-amber-700 h-[70px]">
      <ul className="w-full flex flex-row justify-evenly item-center">
        <li><Link href="/">Logo here</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/resources">Resources</Link></li>
        <li><Link href="/prevention">Prevention</Link></li>
        <li><Link href="/blog">Blog</Link></li>
      </ul>
    </header>
  )
}
