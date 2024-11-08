import React from 'react'
import bill from '../assets/images/bill.png'
import pay from '../assets/images/pay.png'
import calender from '../assets/images/calendar.png'
import robot from '../assets/images/robot.png'
const Features = () => {
  return (
    <div id='automation'>
      <div className="left-side">
        <h1>Resellme’s Features</h1>
        <p>The Resellme platform has a wide range of features which make it stand out from all competitors. Here we have just a few of those.</p>
      </div>
      <div className="right-side">
        <div className="bill">
            <div className="bill-img">
                <img src={bill} alt="" />
            </div>
            <h2>Best Purchase Rates</h2>
            <p>You might think, with the service type, we would charge a looot for domain purchase. But no, our domains are actually quite cheap as compared to our competitors</p>
        </div>
        <div className="pay">
            <div className="pay-img">
                <img src={pay} alt="" />
            </div>
            <h2>Instant Payouts</h2>
            <p>USD payout for every client you get to purchase a domain. We don’t ask you to get to 50 clients to get a payout, its 2022 after all, who has all the time right? </p>
        </div>
        <div className="calender">
            <div className="calender-img">
                <img src={calender} alt="" />
            </div>
            <h2>No Monthly Commitments</h2>
            <p>As long as you have an account, you only can use the platform when you get a client to sell the service to. Your client pays for the service and you keep the profit.</p>
        </div>
        <div className="robot">
            <div className="robot-img">
                <img src={robot} alt="" />
            </div>
            <h2>Business Automation</h2>
            <p>Place your business on autopilot by making use of our plugins. Head over to our plugins & intergrations panel to get started</p>
        </div>
      </div>
    </div>
  )
}

export default Features
