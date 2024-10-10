import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { BadgeCheck, Lock, CheckCircle, Globe, TrendingUp, ShoppingBag, X } from 'lucide-react'


const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
}

const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const WhyBanjulo = () => {
    const [selectedProduct, setSelectedProduct] = useState(null)

    const reasons = [
        {
            icon: CheckCircle,
            title: "Empower Local Sellers",
            description: "Support Gambian businesses and individuals by buying directly from local sellers, helping boost the local economy."
        },
        {
            icon: TrendingUp,
            title: "Diverse Range of Products",
            description: "From household items and electronics to handmade crafts and services, find a variety of unique products for every need."
        },
        {
            icon: Globe,
            title: "Local Focus, Regional Reach",
            description: "Whether you're in The Gambia or neighboring countries, Banjulo.com connects buyers and sellers across the region with ease."
        },
        {
            icon: Lock,
            title: "Secure Transactions",
            description: "Shop with confidence using our trusted and secure payment methods for a seamless buying experience."
        },
        {
            icon: ShoppingBag,
            title: "Real-Time Order Tracking",
            description: "Keep track of your purchases from the moment you place your order until it's delivered."
        },
        {
            icon: BadgeCheck,
            title: "Dedicated Customer Support",
            description: "Our team is always ready to assist you with any inquiries or issues, ensuring a smooth shopping experience."
        }
    ];
    


    const featuredProducts = [
        { id: 1, name: "Handwoven Basket", price: 250, image: "https://images.pexels.com/photos/28617395/pexels-photo-28617395/free-photo-of-handcrafted-woven-baskets-and-bird-nests.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 2, name: "Traditional Gambian Dress", price: 699, image: "/fp2.jpeg" },
        { id: 3, name: "Phone", price: 3500, image: "/phone.webp" },
        { id: 4, name: "Gambia Shirt", price: 150, image: "/fp1.jpeg" },
        { id: 5, name: "Recycled Glass Bead Necklace", price: 499, image: "https://i.etsystatic.com/20263357/r/il/a56f44/3862659697/il_600x600.3862659697_b33n.jpg" },
        { id: 6, name: "Traditional Shoes", price: 799, image: "/fp3.jpeg" },
        { id: 7, name: "African Drum (Djembe)", price: 1199, image: "https://i.etsystatic.com/30640062/r/il/ea0d1d/6162141198/il_600x600.6162141198_l6j0.jpg" },
        { id: 8, name: "Car For Sale", price: 299999, image: "/car.webp" }
    ];


    return (
        <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
                className="max-w-7xl mx-auto"
            >
                <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-navy-500 text-center mb-12">
                    Why Choose Banjulo?
                </motion.h2>

                <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn}
                            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
                        >
                            <reason.icon className="w-12 h-12 text-teal-600 mb-4" />
                            <h3 className="text-xl font-semibold text-navy-500 mb-2">{reason.title}</h3>
                            <p className="text-gray-600">{reason.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.h3 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-navy-500 text-center  mb-8">
                    Featured Products
                </motion.h3>

                <motion.div variants={staggerChildren} className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {featuredProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={fadeIn}
                            className="relative group"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-60 object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                <button
                                    onClick={() => setSelectedProduct(product)}
                                    className="bg-white text-navy-500 px-4 py-2 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition-colors duration-300"
                                >
                                    Quick View
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center py-4 z-50"
                    >
                        <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                className="w-[95%] h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold text-navy-500 mb-2">{selectedProduct.name}</h3>
                            <p className="text-gray-600 mb-4">{selectedProduct.price.toFixed()} GMD</p>

                        </div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}

export default WhyBanjulo;