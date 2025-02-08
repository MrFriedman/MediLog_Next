import React from 'react'
import Link from 'next/link'

function Menu() {
  return (
    <div className="flex justify-center mb-8 border border-white gap-5">
      <Link href="/" className="bg-gray-300 text-black font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline">
        Home
      </Link>
      <Link href="/medilog" className="bg-gray-300 text-black font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline">
      MediLog
      </Link>
      <Link href="/passports" className="bg-gray-300 text-black font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline">
        Medical Passports
      </Link>
    </div>
  )
}

export default Menu