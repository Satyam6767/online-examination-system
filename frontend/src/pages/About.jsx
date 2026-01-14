import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Breadcrumb from '../components/Breadcrumb'
import AboutUsHome from '../components/AboutUsHome'
import Footer from '../components/Footer'
function About() {
  return (
    <div>
      <Header />
      <Navbar />
      <Breadcrumb />
      <AboutUsHome />
      <div className="container">
        <div className="row" style={{margin:"50px 0px"}}>
        <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/mJgBOIoGihA?si=LKQ3QTEFG_K7ZbLc"
  title="YouTube video player"
  
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
