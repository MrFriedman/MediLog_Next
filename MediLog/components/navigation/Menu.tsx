import React from 'react'

function Menu() {
  {/*ToDo:
    - Use Next Links for buttons to different pages
    - Have visual clues for which page is selected
    - Add relevant pages for users etc
  */}
  return (
    <div className="flex justify-center mb-8 border border-white">
      <button className="bg-black text-white font-bold py-2 px-6 rounded-l focus:outline-none focus:shadow-outline">
        MediLog
      </button>
      <button className="bg-gray-300 text-black font-bold py-2 px-6 rounded-r focus:outline-none focus:shadow-outline">
        Medical Passports
      </button>
    </div>
  )
}

export default Menu