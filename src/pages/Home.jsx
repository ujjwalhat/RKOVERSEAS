import React from 'react'
import NNavbar from '../components/NNavbar'
import Hero from '../components/Hero'
import AboutComp from '../components/AboutComp'
import FeaturedProducts from '../components/FeaturedProducts'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Home = () => {
  return (
    <>
      <NNavbar/>
      <Hero/>
      <FeaturedProducts/>
      <AboutComp/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Home
