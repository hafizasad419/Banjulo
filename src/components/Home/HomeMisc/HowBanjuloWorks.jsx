import React from 'react';
import { Link } from 'react-router-dom';

const steps = [
    {
        id: 1,
        title: 'Sign Up',
        description: 'Creating an account is quick, free, and takes less than a minute.'
    },
    {
        id: 2,
        title: 'Browse Unique Products',
        description: 'Discover a wide range of items, organized by category, price, or seller.'
    },
    {
        id: 3,
        title: 'Shop Confidently',
        description: 'Complete your purchase using our secure payment options, with peace of mind.'
    },
    {
        id: 4,
        title: 'Get It Delivered',
        description: 'Products are shipped   with real-time tracking for your convenience.'
    }
];


function HowBanjuloWorks() {
    return (
        <section id="how-it-works" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-navy-500 mb-8 text-center">How Banjulo Works</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map(step => (
                        <div key={step.id} className="text-center">
                            <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-teal-600">{step.id}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center pt-16">
                <Link
                    to={"/contact"}
                    className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 hover:bg-orange-700"
                >
                    Get Early Access!
                </Link>
            </div>
        </section>
    );
}

export default HowBanjuloWorks;
