import SkeletonCard from '@/components/SkeletonCard';
import React from 'react'

export default function Loading() {
  const nineBox = "123456789";
  return (
    <main>
      <div className='grid grid-cols-3 gap-8'>
        {/* loading... */}
        {nineBox.split('').map(i=>(
          <SkeletonCard key={i}/>
        ))}
      </div>

    </main>
    
  )
}
