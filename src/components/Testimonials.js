import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"


function Testimonials(props) {
    let review = props.reviews;
    const [index, setIndex] = useState(0);

    function leftHandler() {
        if (index - 1 < 0) {
            setIndex(review.length - 1)
        }
        else setIndex(index - 1)
    }

    function supriseHandler() {
        setIndex(Math.floor(Math.random() * review.length));
    }

    function RightHandler() {
        if (index + 1 > review.length - 1) {
            setIndex(0)
        }
        else setIndex(index + 1)
    }

    return (
        <div className='card  md:w-[700px] hover:shadow-xl "'>
            <Card review={review[index]} />
            <div className='slider-arrow'>
                <button className='arrow-div'>
                    <FiChevronLeft onClick={leftHandler} />
                </button>
                <button className='arrow-div'>
                    <FiChevronRight onClick={RightHandler} />
                </button>
            </div>

            <div>
                <button className='suprise-button' onClick={supriseHandler} >Suprise Me</button>
            </div>
        </div >
    )
}

export default Testimonials