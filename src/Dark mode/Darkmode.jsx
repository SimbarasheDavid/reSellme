import React from 'react'
import dark from '../assets/images/Sun.svg'
import moon from '../assets/images/Moon.svg'
import "./DarkMode.css";

const Darkmode = () => {
    const setDarkMode = () => {
        document.querySelector("body").setAttribute("data-theme", "dark");
        localStorage.setItem("selectedTheme", "dark");
    };
    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light");
        localStorage.setItem("selectedTheme", "light");
    };
    const selectedTheme = localStorage.getItem("selectedTheme");
    if(selectedTheme=== "dark"){
        setDarkMode()
    }
    const toggleTheme = (e) => {
        if(e.target.checked){
            setDarkMode();
        }else setLightMode()
    };
  return (
    <div className='dark_mode'>
    <input
        className='dark_mode_input'
        type='checkbox'
        id='darkmode-toggle'
        onChange={toggleTheme}
        defaultChecked={selectedTheme==="dark"}
    />
    <label className='dark_mode_label' for='darkmode-toggle'>
       <img src={dark} alt="" />
<img src={moon} alt="" />
    </label>
</div>
  )
}

export default Darkmode
