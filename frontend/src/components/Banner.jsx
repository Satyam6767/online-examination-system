import React from 'react'

import carousel1 from '../assets/carousel/carousel1.jpg'
import carousel2 from '../assets/carousel/carousel2.jpg'
import carousel3 from '../assets/carousel/carousel3.jpg'

function Banner() {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carousel1} class="d-block w-100" alt="..." />
      <div class="carousel-caption  d-md-block">
        <h1>Smart Exam</h1>
        <h4>Best Plateform For Online Exam</h4>
        <button className='btn btn-warning'>Know More</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={carousel2} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
      <h1>Smart Exam</h1>
      <h4>Best Plateform For Online Exam</h4>
      <button className='btn btn-warning'>Know More</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={carousel3} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
      <h1>Smart Exam</h1>
      <h4>Best Plateform For Online Exam</h4>
      <button className='btn btn-warning'>Know More</button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Banner
