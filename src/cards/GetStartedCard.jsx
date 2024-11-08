import React from 'react'
import data from '../../data/getStarted'
const GetStartedCard = () => {
  return (
    <>
      {data && data.GetStartedCard.map(card =>{
        return(
            <div className="getstart">
                <h1 className={card.class}>{card.num}</h1>
                <div className="start-img">
                    <img src={card.image} alt="" />
                </div>
                <div className="textBox">
                    <h2>{card.tittle}</h2>
                    <p>{card.desc}</p>
                    <p>{card.desc1}</p>
                    <p>{card.desc2}</p>
                </div>
            </div>
        )
      })}
    </>
  )
}

export default GetStartedCard
