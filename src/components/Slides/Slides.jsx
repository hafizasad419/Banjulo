import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const defaultSettings = {
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false
};



function Slides({ slides, settings }) {
    return (
        <div className="md:w-1/2 w-full">
            <div className="rounded-xl">
                <Slider {...defaultSettings}{...settings}>
                    {slides?.map((slide, index) => (
                        <div key={index} className="w-full">
                            <img
                                loading="lazy"
                                src={slide.image}
                                alt={slide.alt}
                                className="w-full object-cover rounded-xl max-h-[200px] md:max-h-[350px]"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Slides