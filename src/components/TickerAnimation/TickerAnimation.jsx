// TickerAnimation.jsx
import React from 'react';
import Marquee from 'react-fast-marquee';

const TickerAnimation = ({ title, logos, speed = 80, height = 'h-20', gradient = false }) => {
    return (
        <div className="bg-white py-10 md:my-16">
            <h2 className="text-darkBlue text-3xl md:text-6xl font-bold text-center">
                {title}
            </h2>
            <div className="overflow-hidden w-full mt-12">
                <Marquee gradient={gradient} speed={speed}>
                    {logos.map((logo, index) => (
                        <div key={index} className="px-4">
                            <img src={logo} alt={`Company Logo ${index + 1}`} className={`${height} md:h-28 object-contain`} />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default TickerAnimation;
