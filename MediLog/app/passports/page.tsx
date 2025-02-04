import UserProfileCard from '@/components/navigation/Cards/UserProfileCard'
import React from 'react'

function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <UserProfileCard />
    </div>
  )
}

export default page