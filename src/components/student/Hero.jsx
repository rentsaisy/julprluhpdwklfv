import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 min-h-96 bg-gradient-to-b from-cyan-100/70 to-white'>
      <div className='w-full md:w-1/2'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
          Learn from the best educators
        </h1>
        <p className='text-gray-600 text-lg mb-6'>
          Discover thousands of courses from world-class instructors and experts
        </p>
        <Link to='/course-list' className='bg-blue-600 text-white px-8 py-3 rounded-full inline-block hover:bg-blue-700 transition'>
          Explore Courses
        </Link>
      </div>
      <div className='hidden md:flex w-1/2 justify-end'>
        <img src={assets.sketch} alt="Learning" className='max-w-sm' />
      </div>
    </div>
  )
}

export default Hero