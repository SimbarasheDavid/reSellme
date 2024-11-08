import React from 'react'
import cheap from '../assets/images/Rectangle 5.png'
const SuperCheap = () => {
  return (
    <div id='cheap'>
      <div className="cheap-img">
        <img src={cheap} alt="" />
      </div>
      <div className="text-box">
        <h1>Wait, What?</h1>
        <p className='resell'>Resellme allows for you to purchase domains through our <span><br /></span> platform without paying money upfront. All you need to <span><br /></span> do is have a client who will pay for the domain and you <span><br /></span> get to keep the profit deducted from the domain <span><br /></span> purchase price!</p>
        <p className='dom'>Buying domains through the platforms is <span>SUPER CHEAP</span></p>
        <button>READ MORE</button>
      </div>
    </div>
  )
}

export default SuperCheap
