import React from 'react'

function Header() {
  return (
    <div>
      
      <div class="header d-md-block d-none">
        <div className="container">
          <div className="row">
          <ul class="left col-11">
            <li><i class="fa-solid fa-envelope"></i>info@onlineexam.com</li>
            <li><i class="fa-solid fa-phone"></i>+9112345678</li>
        </ul>



        <ul class="right col-1">
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
        
        </div>

    </div>
    </div>
  )
}

export default Header
