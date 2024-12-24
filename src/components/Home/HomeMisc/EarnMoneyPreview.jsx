import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import {Link} from 'react-router-dom'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const EarnMoneyPreview = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-white p-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-navy-500 mb-4">
              Earn Money with Banjulo
            </h2>
            <p className="text-gray-600 mb-6">
              Discover how you can turn your skills and unused items into cash. Whether you're selling products or offering services, Banjulo provides the platform to reach customers and grow your business.
            </p>
            <Link to="/how-it-works">
              <span
               
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 duration-300"
              >
                Learn How It Works
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </span>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              // src="/money.jpg"
              src="https://images.pexels.com/photos/6693643/pexels-photo-6693643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Earn Money with Banjulo"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default EarnMoneyPreview