import React from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperButtons from './SwiperButtons'
import UseCaseCard from '../../src/cards/UseCaseCard'

const UseCases = () => {
  return (
    <div id='usecase'>
      <h1>Resellme’s Use Cases</h1>

      <Swiper
        className="wrapper"
        spaceBetween={0}
        slidesPerView='auto'
        clickable='true'
        draggable='true'>

        <SwiperSlide className='use'>
          <UseCaseCard />
        </SwiperSlide>
        
      </Swiper>

    </div>)
}

export default UseCases
