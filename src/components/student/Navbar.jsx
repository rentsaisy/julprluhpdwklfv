import React from 'react'
import { assets } from '../../assets/assets'  
import { Link, useLocation } from 'react-router-dom'
import { useClerk, useUser } from '@clerk/clerk-react'

const Navbar = () => {

  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');

  const {openSignIn} = useClerk();
  const {user} = useUser();

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 
    lg:px-36 border-b border-purple-200 py-4 ${isCourseListPage ? 'bg-white' 
    : 'bg-purple-50'}`}>
        <img src ={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
        <div className='hidden md:flex items-center gap-5 text-gray-500'>
            <div className='flex items-center gap-5'>
              <button>Become educator</button>
              |  <Link to='/my-enrollments' className='text-purple-900 hover:text-purple-700 transition-colors'> My Enrollments</Link>
            </div>
            <button onClick={()=> openSignIn()} className='bg-purple-600 text-white px-5 py-2 rounded-full'>
              Create Account</button>
        </div>
        {/* For phone screens */}
        <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
          <div>
            <button>Become educator</button>
            |  <Link to='/my-enrollments'> My Enrollments</Link>
          </div>
          <button><img src={assets.user_icon} alt="" /></button>
        </div>
    </div>
  )
}

export default Navbar