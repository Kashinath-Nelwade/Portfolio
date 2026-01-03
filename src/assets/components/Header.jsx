import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div
      className="
        fixed top-0 right-0 w-full z-50
        flex justify-end
        px-8 sm:px-12 md:px-16 lg:px-20
        py-12 sm:py-8 md:py-12
      "
    >
      {/* Right side wrapper */}
      <div className="relative flex items-center   gap-2 sm:gap-4">
        {/* Resume Button */}
        <a
          href="/resume/Kashinath_Nelwade_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-4 sm:px-6 md:px-8 lg:px-10
            py-2 sm:py-2.5 md:py-3
          
            font-bold
            text-xs sm:text-sm md:text-base lg:text-lg
            border-2 border-white
            rounded-full
            bg-black/30 text-white
            shadow-lg
            hover:bg-zinc-600 hover:shadow-xl
            transition-all
            whitespace-nowrap
          "
        >
          Get my resume offline
        </a>

        {/* Menu Icon (optional) */}
        {/* 
        <i className="ri-menu-3-line text-white text-2xl sm:text-3xl cursor-pointer"></i> 
        */}
      </div>
    </div>
  )
}

export default Header
