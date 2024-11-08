import React from 'react'
import { useSwiper } from 'swiper/react'
import {GoArrowLeft} from 'react-icons/go'
import { GoArrowRight } from 'react-icons/go'
const SwiperButtons = () => {
    const swiper = useSwiper()
  return (
    <div className='swiper-nav'>
      <GoArrowLeft className='left arrow' onClick={() => swiper.slidePrev()}/>
      <GoArrowRight className='right arrow'onClick={() => swiper.slideNext()}/>
    </div>
  )
}

export default SwiperButtons
