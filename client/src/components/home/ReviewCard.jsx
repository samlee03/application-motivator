import React from 'react'
import "../../styles/home/ReviewCard.css"
const ReviewCard = ({name, subtitle, quote, img}) => {
  return (
    <div className="ReviewCard">

        <img className="review-card-image" src={img} />
        <div className="review-card-content">
            <div>
                <h2 className="review-card-name">{name}</h2>
                <p className="review-card-subtitle">{subtitle}</p>
            </div>
            <p className="review-card-quote">{quote}</p>

        </div>
    </div>
  )
}

export default ReviewCard