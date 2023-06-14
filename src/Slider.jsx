import React, { useState } from 'react'
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";

const Slider = () => {
    const Slides = [
        {
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },

        {
            url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
    ];

    const [count, setCount] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = count === 0
        const newCount = isFirstSlide ? Slides.length - 1 : count - 1;
        setCount(newCount)
    }
    const nextSlide = () => {
        const isLastSlide = count === Slides.length - 1
        const newCount = isLastSlide ? 0 : count + 1;
        setCount(newCount)
    }
    const goToSlide = (slideIndex) => {
        setCount(slideIndex);
    }

    return (
        <div className='max-w-[1400px] h-[680px] w-full m-auto py-16 px-4 relative group'>
            <div style={{ backgroundImage: `url(${Slides[count].url})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
            </div>
            {/* Left arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BiLeftArrow onClick={prevSlide} size={30} />
            </div>
            {/* Right arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BiRightArrow onClick={nextSlide} size={30} />
            </div>
            <div className='flex justify-center top-4 py-2'>
                {Slides.map((slide, slideIndex) => (
                    <div 
                    key={slideIndex} onClick={() =>  goToSlide(slideIndex) } 
                    className='text-2xl cursor-pointer'>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Slider