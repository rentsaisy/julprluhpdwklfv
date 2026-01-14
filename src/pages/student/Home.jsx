import React from 'react'
import Hero from '../../components/student/Hero'
import CourseSection from '../../components/student/CourseSection'
import SearchBar from '../../components/student/SearchBar'
import Companies from '../../components/student/Companies'
import Testimonials from '../../components/student/Testimonials'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <CourseSection />
      <Companies />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home