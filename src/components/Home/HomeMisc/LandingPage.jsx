import React, { useState } from 'react'
import { motion } from 'framer-motion'
import bg from "../../../assets/bg/bg.jpg"

export default function LandingPage() {
  const [email, setEmail] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    // handle submit from formspree
    console.log('Email submitted:', email)
  }

  return (
    <main className="flex-grow">
      <section className="relative min-h-screen flex items-center justify-center bg-gray-100">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={bg}
            alt="Gambian artisans and products"
            className="absolute w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg"
          >
            <span className='text-teal-400'>BANJULO</span> - Shop Smart,
            <div>Sell Smart</div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 font-bold"
          >
            Empowering Local Businesses, <span className="text-teal-400">
              Connecting Gambia.</span>
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            onSubmit={handleFormSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 w-full sm:w-64 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300"
            >
              Notify Me
            </motion.button>
          </motion.form>
        </motion.div>
      </section>
    </main>
  )
}