import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-36 py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg mx-4 sm:mx-10 md:mx-14 lg:mx-36 my-8'>
      <div className='text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Ready to start learning?</h2>
        <p className='text-blue-100 mb-8 text-lg'>Join thousands of students and begin your learning journey today</p>
        <Link to='/course-list' className='bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition inline-block'>
          Browse Courses
        </Link>
      </div>
    </div>
  )
}

export default CallToAction