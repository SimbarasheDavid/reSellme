import React from 'react'
import background from '../assets/images/backgroung-img.png'
import laptop from '../assets/images/laptop.png'
const Hero = () => {
  return (
    <div id='hero'>
      <div className="back-img">
        <img src={background} alt="" />
      </div>
      <div className="overlay"></div>
      <div className="head-text">
        <h1>Buy and sell domains <span><br /></span> with no capital!</h1>
        <p>Resellme allows you to buy and sell domains keeping the profits, all in under 5 minutes.</p>
        <div className="btn">
            <button className='bt1'>SIGN UP FOR FREE</button>
            <button className='bt2'>READ ABOUT US</button>
        </div>
      </div>
      <div className="tv-tube">
        <img src={laptop} alt="" />
      </div>
    </div>
  )
}

export default Hero
