import React from 'react'
import logo from "../assets/img/logo.png";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div style={{ padding: "40px 0px", backgroundColor: "#1F3971" }} className="container-fluid">
        <div className="container">
          <div style={{color:"white"}} className="row">
            <div className="col-md-4">
              <img style={{ width: "200px", marginBottom:"15px" }} src={logo} alt="" />
              <p >Register on SmartExam for a secure, seamless, and efficient online examination experience with real-time monitoring and advanced proctoring features.</p>
              <ul>
                <a href="#" className="text-light me-2" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#" className="text-light me-2" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-square-x-twitter"></i>
                </a>
                <a href="#" className="text-light" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-square-instagram"></i>
                </a>
              </ul>
            </div>

            <div className="col-md-4">
              <h3>USEFUL LINKS</h3>
              <ul className='footerli' >
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/'>Home</Link></li>
              </ul>
            </div>

            <div className="col-md-4">
            <h3>CONTACT US</h3>
            <ul className='footerli'>
              <li>1234567895</li>
              <li>info@exam.com</li>
              <li>Hinjewadi phase 3 wakad pune </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
