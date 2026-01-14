import React from 'react'
import g from "../assets/img/g.svg"

function ReviewInner(p) {
    return (
        <div>
              <div className="review-card ">
                <p>{p.para}</p>
                <div className='main-top'>
                <div className="main-left">
                <h3>{p.name}</h3>
                <h4>{p.role}</h4>
                </div>
                <div className="main-right">
                    <img src={g} alt="" />
                </div>
                </div>
                
            </div> 
            
        </div>
    )
}

export default ReviewInner
