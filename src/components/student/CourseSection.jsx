import React from 'react'
import { dummyCourses } from '../../assets/assets'
import CourseCard from './CourseCard'

const CourseSection = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-36 py-12 bg-white'>
      <h2 className='text-3xl font-bold text-gray-800 mb-2'>Featured Courses</h2>
      <p className='text-gray-600 mb-8'>Explore our most popular courses</p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {dummyCourses.slice(0, 4).map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  )
}

export default CourseSection