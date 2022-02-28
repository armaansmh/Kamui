import React from 'react'
import "./Navbar.scss"

export default function Navbar() {
  return (
    <div className='navbar flex-col lg:flex-row lg:p-0'>
      <div className="navbar-title-container mt-4mb-4">

        <a href="/" className='navbar-title'>KAMUI.</a>
      </div>
      <ul className="flex p-4 gap-4">
        <a href="#home" className='text-white text-3xl'>Home</a>
        <a href="#roadmap" className='text-white text-3xl'>Roadmap</a>
        <a href="#faq" className='text-white text-3xl'>FAQs</a>
      </ul>
    </div>
  )
}
