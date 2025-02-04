import React from 'react'
import Link from 'next/link'

function Menu() {
  return (
    <div className="flex justify-center mb-8 border border-white">
      <h1 className="text-4xl font-bold text-center mb-8">
        MediLog
        <Link href="/medilog" className="bg-black text-white font-bold py-2 px-6 rounded-l focus:outline-none focus:shadow-outline">
          MediLog
        </Link>
        <Link href="/passports" className="bg-gray-300 text-black font-bold py-2 px-6 rounded-r focus:outline-none focus:shadow-outline">
          Medical Passports
        </Link>
      </h1>
    </div>
  )
}

export default Menu