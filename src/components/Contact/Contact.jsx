import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, Facebook, Instagram, Linkedin, CheckCircle } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'
import FAQs from "../FAQs/FAQs.jsx"

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
  const [state, handleSubmit] = useForm("mjkvbddg")
  const [submitting, setSubmitting] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    await handleSubmit(event)
    setSubmitting(false)
    setShowPopup(true)
    //clear all form fields
    event.target.reset()


  }

  const handlePopupClose = () => {
    setShowPopup(false)
  }

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
            <form onSubmit={handleFormSubmit} className="space-y-6">
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
                <ValidationError prefix="Email" field="email" errors={state.errors} />
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
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-orange-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-orange-700 transition-colors duration-300"
                disabled={state.submitting || submitting}
              >
                {submitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.section>
<FAQs/>
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
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                  <Facebook className="w-8 h-8" />
                </a>
                <a
                  href="https://www.instagram.com/banjulo.gambia/"
                  target='_blank'
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                  <Instagram className="w-8 h-8" />
                </a>
                <a
                  target='_blank'
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/banjulo"
                  className="text-gray-600 hover:text-teal-600 transition-colors duration-300">
                  <Linkedin className="w-8 h-8" />
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-75 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-md w-full m-4"
            >
              <CheckCircle className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h2 className="text-2xl text-navy-500 dark:text-white font-bold mb-2 text-center">Thank You!</h2>
              <p className="text-center mb-6 text-gray-600 dark:text-gray-300">Your message has been successfully submitted. We'll get back to you soon.</p>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePopupClose}
                  className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-300"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Contact