import React from 'react'
import { motion } from 'framer-motion'
import { UserPlus, Search, ShoppingCart, Truck, Store, BarChart, Globe, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Slides } from '../'
import EarnMoney from "../Home/HomeMisc/EarnMoney"


import slide1 from "../../assets/slides/slide6.jpg"
// import slide2 from "../../assets/slides/slide3.jpeg"
import slide3 from "../../assets/About/artisans2.jpeg"
import slide4 from "../../assets/About/online-shopping-ai.png"


const slides = [
  { image: slide1, alt: "Slide 1" },
  // { image: slide2, alt: "Slide 2" },
  { image: slide3, alt: "Slide 3" },
  { image: slide4, alt: "Slide 4" },
];
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

const HowItWorks = () => {
  const steps = [
    { icon: UserPlus, title: "Sign Up", description: "Create an account quickly and securely" },
    {
      icon: Search, title: "Discover", description: "Use advanced search filters to browse categories like electronics, fashion, handcrafted items, or services"
    },
    {
      icon: ShoppingCart, title: "Shop Confidently",
      description: " Secure payment methods and real-time shipping information ensure a smooth shopping experience."
    },
    { icon: Truck, title: "Delivery", description: "Track your order in real-time" }
  ]

  const features = [
    { icon: Store, title: "Create Your Shop", description: "Anyone can easily set up their own online store, whether you’re selling products or offering services." },
    { icon: BarChart, title: "Sell with Ease", description: "Effortlessly list items, set prices, and manage inventory with user-friendly tools." },
    { icon: Globe, title: "Expand Your Reach", description: "Connect with customers across The Gambia and beyond, giving your business more visibility." },
    { icon: Heart, title: "Support Local Sellers", description: "Every purchase helps local businesses and individuals grow, supporting the community as a whole." }
  ]

  return (
    <div className="bg-white min-h-screen">
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-teal-600 text-white py-20 px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">How Banjulo.com Works</h1>
        <p className="text-xl md:text-2xl mx-auto">
          Connecting Gambians to buy, sell, and offer services with a seamless online experience.
        </p>
      </motion.header>

      <main className="container mx-auto px-4 py-12">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-navy-500 mb-6 text-center">
            For Buyers
          </motion.h2>
          <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              >
                <div className="bg-teal-100 rounded-full p-4 mb-4">
                  <step.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-500 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-navy-500 mb-6 text-center">
            For Sellers
          </motion.h2>
          <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-lg shadow-lg p-6 flex items-start"
              >
                <div className="bg-teal-100 rounded-full p-3 mr-4">
                  <feature.icon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-500 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <EarnMoney />

        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-navy-500 mb-6 text-center">
            Why Choose Banjulo.com?
          </motion.h2>
          <motion.div variants={fadeIn} className="bg-gray-100 rounded-lg px-8">
            <ul className="space-y-4">
              {[
                "Empower Local Sellers: Support Gambian businesses and individuals by buying directly from local sellers, helping boost the local economy.",
                "Diverse Range of Products: From household items and electronics to handmade crafts and services, find a variety of unique products for every need.",
                "Local Focus, Regional Reach: Whether you're in The Gambia or neighboring countries, Banjulo.com connects buyers and sellers across the region with ease.",
                "Secure Transactions: Shop with confidence using our trusted and secure payment methods for a seamless buying experience.",
                "Real-Time Order Tracking: Keep track of your purchases from the moment you place your order until it's delivered.",
                "Dedicated Customer Support: Our team is always ready to assist you with any inquiries or issues, ensuring a smooth shopping experience."
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-500 mb-6">Ready to Get Started?</h2>

          <div className="flex justify-center my-4">
            <img
              className='md:w-1/3 w-full rounded-full'
              src={slide3} alt="Gmabian Artisans Smiling" /></div>
          <p className="text-left text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Whether you're a local seller looking to showcase your products or a buyer searching for quality items and services, <span className="text-teal-500 font-bold">Banjulo.com</span> is your gateway to a wide variety of offerings from across The Gambia.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0">
            <Link
              to={"/contact"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 hover:bg-orange-700"
            >
              Start Shopping
            </Link>
            <Link
              to={"/contact"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-orange-500 font-semibold py-3 md:px-8 px-10 rounded-full text-lg  transition duration-300 hover:bg-gray-100 border border-orange-700"
            >
              Start Selling
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default HowItWorks