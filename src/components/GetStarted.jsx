import React from 'react'
import GetStartedCard from '../cards/GetStartedCard'

const GetStarted = () => {
  return (
    <div id='started'>
      <h1>How To Get Started</h1>
      <div className="how-to">
        <GetStartedCard/>
      </div>
      <button>GET STARTED</button>
    </div>
  )
}

export default GetStarted
