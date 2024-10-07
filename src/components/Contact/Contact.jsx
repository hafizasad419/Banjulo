import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react'

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

const Contact = () => {
  return (
    <div className="bg-white min-h-screen">
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-teal-600 text-white py-20 px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          We're here to help. Reach out to us with any questions or concerns.
        </p>
      </motion.header>

      <main className="container mx-auto md:px-48 px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="flex flex-col space-y-12"
        >
          <motion.section variants={fadeIn}>
            <h2 className="text-3xl font-bold text-navy-500 mb-6">Send Us a Message</h2>
            <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-teal-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-teal-700 transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.section>

          <motion.section variants={fadeIn} className="space-y-8">
            <h2 className="text-3xl font-bold text-navy-500 mb-6">Get in Touch</h2>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-teal-600" />
              <a href="mailto:contact@banjulo.com" className="text-lg text-gray-700 hover:text-teal-600 transition-colors duration-300">
                contact@banjulo.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-teal-600" />
              <a href="tel:+2201234567" className="text-lg text-gray-700 hover:text-teal-600 transition-colors duration-300">
                +220 1234 567
              </a>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-navy-500">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/banjulo.gambia"
                  target='_blank'
                  className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                  <Facebook className="w-8 h-8" />
                </a>
                <a
                  href="https://www.instagram.com/banjulo.gambia/"
                  target='_blank'
                  className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                  <Instagram className="w-8 h-8" />
                </a>
                <a
                  target='_blank'
                  href="https://www.linkedin.com/company/banjulo"
                  className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                  <Linkedin className="w-8 h-8" />
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
}

export default Contact