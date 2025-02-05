import UserProfileCard from '@/components/navigation/Cards/UserProfileCard'
import Menu from '@/components/navigation/Menu'
import React from 'react'

function page() {
  return (
    <div className="container mx-auto p-4 border border-white">
      <Menu />
      <div>
        <UserProfileCard />
      </div>
    </div>
  )
}

export default page