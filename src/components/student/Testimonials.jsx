import React from 'react'
import { dummyTestimonial, assets } from '../../assets/assets'

const Testimonials = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-36 py-12 bg-white'>
      <h2 className='text-3xl font-bold text-gray-800 mb-2 text-center'>What students say</h2>
      <p className='text-gray-600 text-center mb-8'>Hear from learners who have transformed their careers</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {dummyTestimonial.map((testimonial, index) => (
          <div key={index} className='bg-gray-50 p-6 rounded-lg shadow-md'>
            <div className='flex items-center gap-4 mb-4'>
              <img src={testimonial.image} alt={testimonial.name} className='w-12 h-12 rounded-full' />
              <div>
                <h4 className='font-semibold text-gray-800'>{testimonial.name}</h4>
                <p className='text-sm text-gray-600'>{testimonial.role}</p>
              </div>
            </div>
            <div className='flex gap-1 mb-3'>
              {[...Array(5)].map((_, i) => (
                <img key={i} src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} alt="star" className='w-4 h-4' />
              ))}
            </div>
            <p className='text-gray-700 text-sm'>"{testimonial.feedback}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials