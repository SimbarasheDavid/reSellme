import React from 'react'
import back from '../assets/images/Rectangle 82.png'
const AnyCredit = () => {
  return (
    <div id='credit'>
      <div className="overlay">
        <img src={back} alt="" />
      </div>
      <div className="textbo">
        <h1>You Don’t Need Any Credit To Get Started</h1>
        <p>Resellme allows you to buy and sell domains keeping the profits, all in under 5 minutes.</p>
        <button>SIGN UP FOR FREE</button>
      </div>
    </div>
  )
}

export default AnyCredit
