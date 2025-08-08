import React from 'react'
import Image from 'next/image'


export default function Footer() {
  const now = new Date()
  const year = now.getFullYear()
  return (
    <footer className="w-full text-center h-[70px] flex flex-row items-center bg-red-800">
      <span className="grow-3">© {year} M M Kepler</span>
      <span className="grow-4"></span>
      <span className="grow-3 flex flex-row justify-around items-center">
        <a href="" target="_blank" rel="noopener noreferrer">
          <Image src="/img/Bluesky_logo.png" alt="" width="34" height="25"/>
        </a>
      
        <a href="" target="_blank" rel="noopener noreferrer">
          <Image src="/img/youtube-icon-sm.png" alt="" width="34" height="34"/>
        </a>

        <a href="" target="_blank" rel="noopener noreferrer">
          <Image src="/img/facebook-black.png" alt="" width="34" height="34"/>
        </a>

        <a href="" target="_blank" rel="noopener noreferrer">
          <Image src="/img/x-social-media-black-icon-sm.png" alt="" width="34" height="34"/>
        </a>
      </span>
    </footer>
  )
}
