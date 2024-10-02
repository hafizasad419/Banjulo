import React from 'react'
import { Link } from 'react-router-dom'

function HowBanjuloWorks() {
    return (
        <section id="how-it-works" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-navy-500 mb-8 text-center">How Banjulo Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-teal-600">1</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                        <p>Create a secure account quickly and easily.</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-teal-600">2</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Find What You Love</h3>
                        <p>Discover products using intuitive search filters by category, price, location, and artisan.</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-teal-600">3</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Shop Securely</h3>
                        <p>Enjoy secure payment gateways, real-time currency conversion, and transparent shipping information.</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center py-16">
                <Link
                    to={"/contact"}
                    className="inline-block bg-teal-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 hover:bg-teal-700"
                >
                    Get Early Access!
                </Link>
            </div>
        </section>
    )
}

export default HowBanjuloWorks