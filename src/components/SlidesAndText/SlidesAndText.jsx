import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlidesAndText = ({ title, textContent, slides }) => {
    const settings = {
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="md:flex md:items-cente md:space-x-8 lg:space-x-16">
                    {/* Text Section */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-teal-600 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-center md:text-left">
                            {title}
                        </h2>
                        <div className="space-y-4 text-navy-500 text-lg md:text-xl">
                            {textContent?.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}
                        </div>
                    </div>

                    {/* Slider Section */}
                    <div className="md:w-1/2">
                        <div className="rounded-xl">
                            <Slider {...settings}>
                                {slides?.map((slide, index) => (
                                    <div key={index} className="w-full">
                                        <img
                                            loading="lazy"
                                            src={slide.image}
                                            alt={slide.alt}
                                            className="w-full h-auto object-cover rounded-xl"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlidesAndText;
