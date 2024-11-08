import React from 'react'
import tabler from '../assets/images/tabler_window-maximize.png'
const Footer = () => {
  return (
    <footer>
             <div className="wrapper">
          
            <div className="links">
                <h3>Libraries & Plugins</h3>
                <ul>
                    <li>SDKs</li>
                    <li>WHMCS Plugin</li>
                    <li>WordPress Plugin</li>
                </ul>
            </div>
            <div className="links">
                <h3>Community</h3>
                <ul className='comm'>
                    <li>Facebook <img src={tabler} alt="" /></li>
                    <li>Developer Forums <img src={tabler} alt="" /></li>
                    <li>Twitter <img src={tabler} alt="" /></li>
                </ul>
            </div>
            <div className="links">
                <h3>More</h3>
                <ul>
                    <li>Blogs</li>
                    <li>Docs</li>
                    <li>About Us</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
       
    </footer>
  )
}

export default Footer
