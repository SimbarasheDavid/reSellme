import React from 'react'
import { useState } from 'react'
const Faqs = () => {
    const [toogleState, setToggleState] = useState();
    const toggleTab = (index) => {
        ``
        setToggleState(index)
    }
    return (
        <div id='faq'>
            <div className="faq-left">
                <h1>Frequently Asked Questions</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="faq-right">
                <div>
                    <h1  className={toogleState === 1 ? 'get active':'get'} onClick={() => toggleTab(1)}>What Do I Need To Get Started?</h1>
                    <p className={toogleState === 1 ? 'dolor active': 'dolor'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div >
                    <h1 className={toogleState === 2 ? 'paid active':'paid'} onClick={() => toggleTab(2)}>How Do I Get Paid After Referring A Client?</h1>
                    <p className={toogleState === 2 ? 'dolor active': 'dolor'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div >
                    <h1 className={toogleState === 3 ? 'refer active':'refer'} onClick={() => toggleTab(3)}>How many People can i refer in a day?</h1>
                    <p className={toogleState === 3 ? 'dolor active': 'dolor'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div>
                    <h1  className={toogleState === 4 ? 'visa active':'visa'} onClick={() => toggleTab(4)}>Do I need a visa card to get paid?</h1>
                    <p className={toogleState === 4 ? 'dolor active': 'dolor'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div >
                    <h1 className={toogleState === 5 ? 'can active':'can'} onClick={() => toggleTab(5)}>Can i refer people to resellme for commission?</h1>
                    <p className={toogleState === 5 ? 'dolor active': 'dolor'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>


            </div>
        </div>
    )
}

export default Faqs
