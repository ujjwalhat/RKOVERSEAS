import React from 'react'
import NCard from './NCard'

const FeaturedProducts = () => {
  return (
    <div className='h-auto pt-8  sm:pt-8'>
      <h1 className='font-extrabold text-4xl text-center mb-12'>Our Top Products</h1>
      <div className='flex flex-row flex-wrap gap-4 justify-center'>
        <NCard/>
        <NCard/>
        <NCard/>
        <NCard/>
        <NCard/>
        <NCard/>
        <NCard/>
        <NCard/>
      </div>
    </div>
  )
}

export default FeaturedProducts
