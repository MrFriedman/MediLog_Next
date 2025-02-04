import React from 'react'
import Menu from '../Menu'

{/*TO DO;
  - Need to create and setup the backend 1. Create the Recording logic; 2. Api Endpoints; 3. Database; 4. Set up Container; 5. Set up deployment env
*/}
function UserProfileCard() {
  return (
    <div className="">
      <Menu />
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <img alt="A detailed medical passport with patient information and medical history" className="w-full h-48 object-cover rounded-t-lg" src="https://placehold.co/300x200" />
        <h2 className="text-xl font-bold mt-4">
          John Doe
        </h2>
        <p className="mt-2 text-black">
          Age: 30
        </p>
        <p className="mt-2 text-black">
          Blood Type: O+
        </p>
        <p className="mt-2 text-black">
          Allergies: None
        </p>
        <p className="mt-2 text-black">
          Medications: None
        </p>
      </div>
    </div>
  )
}

export default UserProfileCard