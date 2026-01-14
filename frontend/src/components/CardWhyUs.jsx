import React from 'react'

function CardWhyUs(p) {
  return (
    <div>
      <div className="container">
        <div className="box1234">
          <img src={p.img} alt="" />
          <h3> {p.h3} </h3>
          <p className='text-center'> {p.para} </p>
        </div>
      </div>

    </div>
  )
}

export default CardWhyUs
