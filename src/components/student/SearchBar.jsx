import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchInput.trim()) {
      navigate(`/course-list/${searchInput}`)
    }
  }

  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-36 py-8 bg-white'>
      <form onSubmit={handleSearch} className='flex items-center gap-2 bg-gray-100 rounded-full px-4 py-3 max-w-2xl mx-auto'>
        <img src={assets.search_icon} alt="search" className='w-5 h-5' />
        <input
          type="text"
          placeholder='Search for courses...'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className='flex-1 bg-transparent outline-none text-gray-700'
        />
        <button type='submit' className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition'>
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar