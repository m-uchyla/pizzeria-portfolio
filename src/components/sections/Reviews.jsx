import React from 'react'
import {BsStarFill, BsStarHalf, BsStar} from "react-icons/bs"
import { reviews } from '../../constants'

const Reviews = () => {

    const maxReview = 5;

    function sumbitStars(rating){
        let content = [];
        if(rating >= 0){
            for(let i=0; i<maxReview; i++){
                if(rating == 0)content.push(<BsStar  />);
                if(rating>0 && rating<1){
                    content.push(<BsStarHalf  />);
                    rating = 0;
                }
                if(rating>=1){
                    content.push(<BsStarFill  />);
                    rating--;
                }
            }
        }
        return content;
    }

  return (
    <section id="reviews">
        <h2 className='text-center font-bold md:text-[38px] sm:text-[22px] text-[24px] text-zinc-600'>Opinie naszych klientów</h2>
        <div className='flex flex-col md:flex-row gap-10 items-center lg:justify-evenly md:justify-between mt-16'>
            {reviews.map((review, index) => (
                <div className='sm:w-[400px]' key={index+"|"+review.name}>
                <div className='flex gap-3'>
                    <h3 className='font-semibold'>{review.name}</h3>
                    <div className='flex items-center gap-1 text-primary'>
                        {sumbitStars(review.rating)}
                    </div>
                </div>
                <p className='text-justify'>{review.desc}</p>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Reviews