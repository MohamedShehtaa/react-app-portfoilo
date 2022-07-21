import React  from 'react'
import heroImg from "../images/uncode1.jpg"

export default function Hero(){
 
    return (
      <>
        <div className='hero'>
          <div className='hero-body'>

          <h1>Mohamed shehta </h1>
          <h5>Web Developer</h5>
          <button>
            Contact Me
          </button>
          </div>
          <img style={{ objectFit: "cover", width: "100vw", height: "70vh" , opacity:"0.8"}} src={heroImg} alt="Hero images" />
        </div>
      </>
    )
  }

