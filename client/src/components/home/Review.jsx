import React from 'react'
import Titles from './Titles'
import ReviewCard from "./ReviewCard"
import "../../styles/home/Review.css"
const Review = () => {
  return (
    <>
        <Titles title="Reviews" subtitle="What our users has to say" />
        <div className="review-cards">
            <ReviewCard name="Jasmine Noa" subtitle="Sales Consultant @Macys" quote="“Job hunting has never been so fulfilling! I can’t stop recommending Motivator to everyone.”" img="https://placehold.co/120x120"/>
            <ReviewCard name="Mark Doghman" subtitle="Civil Engineer @Foundry" quote="“This app was a game changer. I genuinely wish I found it sooner, but it is amazing how well it works!“" img="https://placehold.co/120x120"/>
            <ReviewCard name="Rachel Gin" subtitle="Product Manager @Meta" quote="“ I landed a job faster than I expected! This made job hunting simple and effortless.”" img="https://placehold.co/120x120"/>
        </div>
    </>
  )
}

export default Review