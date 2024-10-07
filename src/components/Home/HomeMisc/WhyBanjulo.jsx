import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Globe, TrendingUp, ShoppingBag, X } from 'lucide-react'

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
            title: "Authenticity at Your Fingertips",
            description: "Banjulo.com connects you with genuine products crafted by local artisans and businesses, reflecting the rich culture and creativity of The Gambia."
        },
        {
            icon: TrendingUp,
            title: "Empowering Local Entrepreneurs",
            description: "Each purchase supports Gambian artisans, small businesses, and communities, fostering economic growth and promoting sustainable development by giving local entrepreneurs a global stage."
        },
        {
            icon: Globe,
            title: "Beyond Gambia",
            description: "We provide secure shipping to Senegal and neighboring countries, with easy tracking and dependable delivery to ensure a hassle-free experience for customers in the region."
        }
    ];


    const featuredProducts = [
        { id: 1, name: "Handwoven Basket", price: 9.99, image: "https://images.pexels.com/photos/28617395/pexels-photo-28617395/free-photo-of-handcrafted-woven-baskets-and-bird-nests.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 2, name: "Traditional Gambian Dress", price: 14.99, image: "https://i.etsystatic.com/20855353/r/il/16f081/6011032382/il_600x600.6011032382_dhqr.jpg" },
        { id: 3, name: "Carved Wooden Mask", price: 4.99, image: "https://images.pexels.com/photos/9540964/pexels-photo-9540964.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { id: 4, name: "Gambia Shirt", price: 9.99, image: "https://i.etsystatic.com/36226661/r/il/db01c8/4325988175/il_300x300.4325988175_ijqq.jpg" },
        { id: 5, name: "Recycled Glass Bead Necklace", price: 12.99, image: "https://i.etsystatic.com/20263357/r/il/a56f44/3862659697/il_600x600.3862659697_b33n.jpg" },
        { id: 6, name: "Hand-Carved Soapstone Elephant", price: 19.99, image: "https://i.etsystatic.com/45956111/r/il/ceec3a/5618540282/il_600x600.5618540282_o99x.jpg" },
        { id: 7, name: "African Drum (Djembe)", price: 29.99, image: "https://i.etsystatic.com/30640062/r/il/ea0d1d/6162141198/il_600x600.6162141198_l6j0.jpg" },
        { id: 8, name: "Kente Cloth Fabric", price: 24.99, image: "https://i.etsystatic.com/17686157/r/il/68d6c8/4433536748/il_600x600.4433536748_6p4b.jpg" }
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
                                className="w-full h-48 object-cover rounded-lg"
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
                            <p className="text-gray-600 mb-4">${selectedProduct.price.toFixed(2)}</p>

                        </div>
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}

export default WhyBanjulo;