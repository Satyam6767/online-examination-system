import React from 'react'
import about from '../assets/img/about.jpg'

function AboutUsHome() {
  return (
    <div>
      <div className="container aboutus123">
        <div className="row text-center mt-5 mb-5">
            <h2>About Us</h2>
            <h5>This is about us</h5>
        </div>
        <div  className="row">
            <div style={{display:"flex", justifyContent:"center"}} className="col-lg-6">
                <img className='img-thumbnail' src={about} alt="" />
            </div>

            <div style={{display:"flex", flexDirection:"column", alignItmes:"center", justifyContent:"center"}} className="col-lg-6">
                <h1>Excel in Your Exams with Confidence</h1>

                <p>Dedicated to your success, we provide a seamless online exam experience with accuracy and reliability. Your learning journey is our priority. Through advanced technology and user-friendly features, we ensure a smooth and stress-free assessment process.
<br /> <br />
At our core, we are committed to your growth. Our platform offers secure, flexible, and efficient exams, empowering you to achieve your best results. Trust us to support your learning every step of the way.</p>
<button className='btn btn-warning'>Know More</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsHome
