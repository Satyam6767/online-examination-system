import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Breadcrumb from '../components/Breadcrumb'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
      <Header />
      <Navbar />
      <Breadcrumb />

      <div className="container">
        <div className="row">
            

            <div style={{backgroundColor:"#1F3971", color:"white", padding:"90px 60px"}} className="contactLeft col-md-6 ">
                <h2>You can contact with us</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sit minus nihil at inventore nostrum iusto qui modi necessitatibus natus quis excepturi, expedita voluptates nulla, et quos id obcaecati quod?</p>

                <p><strong>Address:</strong> <div>2nd floor, above HDFC Bank, Dange Chowk, Bhumkar Chowk Rd, near Pandit Petrol Pump, Tathawade, Pune, Maharashtra 411033</div> </p>
                <p><strong>Phone:</strong> <div>1234567895</div></p>
                <p><strong>Web:</strong> <div>info@exam.com</div> </p>
            </div>

            <div style={{backgroundColor:"#FFAE27" , color:"white", }} className="col-md-6 contactRight">
            <h2>Send You Messages</h2>

            <form className='contactform'>
                <input type="text" placeholder='Enter name' />
                <input type="text" placeholder='Enter phone' />
                <input type="text" placeholder='Enter email' />
                <input type="text" placeholder='Enter message' />
                <button className='btn btn-danger' style={{backgroundColor:"#1F3971"}}>Send Email</button>
            </form>
            </div>
        </div>
      </div>

      <div className="container">
  <div className="row">
    <div className="col-12">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.70906702869!2d73.69815139367944!3d18.524870612673507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1741260351228!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
        </div>

     <Footer />
    </div>
  )
}

export default Contact
