import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card(props) {
    let review = props.review;
    return (
        <div >
            <div className='image-div'>
                <img className='image' src={review.image} alt="" />
            </div>

            <div>
                <p className='name'>{review.name}</p>
            </div>

            <div>
                <p className='job'>{review.job}</p>
            </div>

            <div >
                <FaQuoteLeft className='quote' />
            </div>

            <div >
                <p className='text'>{review.text}</p>
            </div>
            <div >
                <FaQuoteRight className='quote' />
            </div>


        </div>
    )
}

export default Card