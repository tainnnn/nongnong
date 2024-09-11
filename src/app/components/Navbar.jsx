'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navbar() {

  return (
    <nav className="navbar bg-neutral-600 shadow-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image alt="NongNong Logo" src="/images/nongnong.png" width={40} height={40} />
            <span className="text-2xl font-bold text-white">NongNong</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/backboard">
            <span className="text-white hover:text-gray-400 transition">Backboard</span>
          </Link>
          <Link href="/bmi">
            <span className="text-white hover:text-gray-400 transition">BMI</span>
          </Link>
          <Link href="/temperature">
            <span className="text-white hover:text-gray-400 transition">Temperature</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
