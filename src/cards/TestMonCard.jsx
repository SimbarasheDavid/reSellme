import React from 'react'
import data from '../../data/testmonials'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperButtons from '../components/SwiperButtons'
const TestMonCard = () => {
    return (
        <div>



            <Swiper
                className='wrapper part-carousel'
                slidesPerView='auto'
                spaceBetween={30}
                clickable='true'
                draggable='true'
            >
              
            {data && data.TestMonies.map(card => {
                return (
                    <SwiperSlide className="card">
                    <div className="client">
                        <div className="client-img">
                            <img src={card.image} alt="" />
                        </div>
                        <div className="client-text">
                            <h2>{card.tittle}</h2>
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                        </div>

                    </div>
                    </SwiperSlide>
                )
            })}
                <SwiperButtons />
            </Swiper>

        </div>
    )
}

export default TestMonCard
