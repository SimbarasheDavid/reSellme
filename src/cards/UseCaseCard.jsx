import React from 'react'
import data from '../../data/useCase'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperButtons from '../components/SwiperButtons'
const UseCaseCard = () => {
  return (
    <div>
      <Swiper
        className='wrapper part-carousel'
        slidesPerView='auto'
        spaceBetween={-780}
        clickable='true'
        draggable='true'
      >
        {data && data.UseCases.map(card => {
          return (
<SwiperSlide>
            <div className="card">
              <div className={card.class}>
              <div className="case-img">
                <img src={card.icon} alt="" />
              </div>
              <div className="text">
                <h2>{card.title}</h2>
                <p>{card.text}</p>
              </div>
              <button>READ MORE</button>
            </div>
              </div>
            
            </SwiperSlide>
      )
      })}
      <SwiperButtons/>
       </Swiper>
    </div>
  )
}

export default UseCaseCard
