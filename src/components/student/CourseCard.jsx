import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
  const discountedPrice = (course.coursePrice * (1 - course.discount / 100)).toFixed(2);
  
  return (
    <Link to={`/course/${course._id}`} className='hover:shadow-lg transition rounded-lg overflow-hidden'>
      <div className='bg-white rounded-lg shadow-md overflow-hidden'>
        <img src={course.courseThumbnail} alt={course.courseTitle} className='w-full h-40 object-cover' />
        <div className='p-4'>
          <h3 className='font-semibold text-gray-800 mb-2 line-clamp-2'>{course.courseTitle}</h3>
          <div className='flex items-center gap-2 mb-3'>
            <img src={assets.star} alt="rating" className='w-4 h-4' />
            <span className='text-sm text-gray-600'>4.5 (200 reviews)</span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-lg font-bold text-gray-800'>${discountedPrice}</span>
            <span className='text-sm text-gray-500 line-through'>${course.coursePrice}</span>
            <span className='text-xs bg-red-100 text-red-700 px-2 py-1 rounded'>{course.discount}% off</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CourseCard