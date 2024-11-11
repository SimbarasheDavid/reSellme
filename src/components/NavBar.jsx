import React from 'react'
import logo from '../assets/images/resellme-logo 2.png'
import dark from '../assets/images/darkmode.png'
import port from '../assets/images/tabler_window-maximize.png'
import search from '../assets/images/search.png'
import Darkmode from '../Dark mode/Darkmode'
import { useState } from 'react';
import ham from '../assets/images/bars-solid.svg'
import { RxHamburgerMenu } from 'react-icons/rx'

import '../styles/ham.scss'
const NavBar = () => {
    const [active, setActive] = useState(false);
    function toggleModal() {
        const modal = document.getElementById('modal');
        const overlayo = document.querySelector('.overlayo');
        modal.classList.toggle('open');
        overlayo.classList.toggle('active');
    }
    return (
        <div id='nav-bar'>
            <nav>
                <ul id='first'>
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav-links">
                        <li>Docs</li>
                        <li>Blog</li>
                        <li>About-us</li>
                    </div>

                </ul>
                <ul id='second'>
                    <div className='suport'>
                        <li>Support</li>
                        <div className="sup-img">
                            <img src={port} alt="" />
                        </div>
                    </div>
                    <div className='portal'>
                        <li>Portal</li>
                        <div className="portal-img">
                            <img src={port} alt="" />
                        </div>
                    </div>
                    <div className='Register'>
                        <li>Support</li>
                        <div className="reg-img">
                            <img src={port} alt="" />
                        </div>
                    </div>
                    <div className="dark">
                        <Darkmode onClick={() => { setActive(!active) }} />
                    </div>
                    <div className="search">
                        <li><img src={search} alt="" /></li>
                        <li>Search</li>
                    </div>

                </ul>
                <ul>
                    <button className='hamburger' onClick={() => { toggleModal() }}><RxHamburgerMenu className='menu' /></button>
                    <div className="overlayo active" onClick={() => { toggleModal() }}></div>
                    <div className="modal" id='modal'>
                        <span class="close" onClick={() => { toggleModal() }}>&times;</span>
                        <h2>Menu</h2>
                        <div className="logo">
                            <img src={logo} alt="" />
                            <div className="nav-links">
                                <li>Docs</li>
                                <li>Blog</li>
                                <li>About-us</li>
                                <div className='suport'>
                                    <li>Support</li>
                                    <div className="sup-img">
                                        <img src={port} alt="" />
                                    </div>
                                </div>
                                <div className='portal'>
                                    <li>Portal</li>
                                    <div className="portal-img">
                                        <img src={port} alt="" />
                                    </div>
                                </div>
                                <div className='Register'>
                                    <li>Support</li>
                                    <div className="reg-img">
                                        <img src={port} alt="" />
                                    </div>
                                </div>
                                <div className="dark">
                                    
                                    <Darkmode onClick={() => { setActive(!active) }} />
                                </div>
                                <div className="search">
                                    <li><img src={search} alt="" /></li>
                                    <li>Search</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>

            </nav>
        </div>
    )
}

export default NavBar
