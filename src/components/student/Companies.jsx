import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-36 py-12 bg-gray-50'>
      <h2 className='text-center text-2xl font-bold text-gray-800 mb-8'>Trusted by leading companies</h2>
      <div className='flex flex-wrap items-center justify-center gap-8'>
        <img src={assets.microsoft_logo} alt="Microsoft" className='h-8 opacity-70 hover:opacity-100 transition' />
        <img src={assets.walmart_logo} alt="Walmart" className='h-8 opacity-70 hover:opacity-100 transition' />
        <img src={assets.accenture_logo} alt="Accenture" className='h-8 opacity-70 hover:opacity-100 transition' />
        <img src={assets.adobe_logo} alt="Adobe" className='h-8 opacity-70 hover:opacity-100 transition' />
        <img src={assets.paypal_logo} alt="PayPal" className='h-8 opacity-70 hover:opacity-100 transition' />
      </div>
    </div>
  )
}

export default Companies