import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white px-4 sm:px-10 md:px-14 lg:px-36 py-12'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
        <div>
          <img src={assets.logo_dark} alt="Logo" className='w-28 mb-4' />
          <p className='text-gray-400 text-sm'>Making education accessible to everyone</p>
        </div>
        <div>
          <h4 className='font-semibold mb-4'>Quick Links</h4>
          <ul className='space-y-2 text-sm text-gray-400'>
            <li><a href="#" className='hover:text-white transition'>Browse Courses</a></li>
            <li><a href="#" className='hover:text-white transition'>My Learning</a></li>
            <li><a href="#" className='hover:text-white transition'>Become Instructor</a></li>
          </ul>
        </div>
        <div>
          <h4 className='font-semibold mb-4'>Company</h4>
          <ul className='space-y-2 text-sm text-gray-400'>
            <li><a href="#" className='hover:text-white transition'>About Us</a></li>
            <li><a href="#" className='hover:text-white transition'>Privacy Policy</a></li>
            <li><a href="#" className='hover:text-white transition'>Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h4 className='font-semibold mb-4'>Follow Us</h4>
          <div className='flex gap-4'>
            <img src={assets.facebook_icon} alt="Facebook" className='w-5 h-5 cursor-pointer hover:opacity-70 transition' />
            <img src={assets.instagram_icon} alt="Instagram" className='w-5 h-5 cursor-pointer hover:opacity-70 transition' />
            <img src={assets.twitter_icon} alt="Twitter" className='w-5 h-5 cursor-pointer hover:opacity-70 transition' />
          </div>
        </div>
      </div>
      <div className='border-t border-gray-800 pt-8 text-center text-gray-400 text-sm'>
        <p>&copy; 2025 Grimoire Mathics. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer