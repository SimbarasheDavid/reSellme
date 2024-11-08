import React from 'react'
import TestMonCard from '../cards/TestMonCard'
import SwiperButtons from './SwiperButtons'

const Testmonials = () => {
    return (
        <div id='testmony'>
            <div className="testmo">
                <div className="test-text">
                    <h1>Client Testimonials</h1>
                    <p>We value client feedback to help keep making revisions to our product to give more value to you the end user. These are some of the awesome reviews we got from some of our clients.</p>
                </div>
                <div className="container">
                    <TestMonCard />
                </div>
            </div>

        </div>
    )
}

export default Testmonials
