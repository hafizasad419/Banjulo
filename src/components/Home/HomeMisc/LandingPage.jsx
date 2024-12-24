import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { CheckCircle } from 'lucide-react';
import bg from '/new-bg-img.jpeg';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [state, handleSubmit] = useForm("mjkvbddg");
  const [submitting, setSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await handleSubmit(e); // Handles submission via Formspree
    setSubmitting(false);
    setShowPopup(true);
    e.target.reset(); // Clear form fields
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <main className="flex-grow">
      <section className="relative min-h-screen flex items-center justify-center bg-gray-100">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={bg}
            alt="Gambian artisans and products"
            className="absolute w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[3.5rem] leading-[4rem] md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg"
          >
            Empowering Gambians to
            <p>Buy & Sell Online<span className="text-teal-400">.</span></p>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-4xl mb-8 font-bold"
          >
            <span className="text-teal-400">Banjulo</span>. Shop Smart - Sell Smart<span className="text-teal-400">.</span>
          </motion.p>

          {/* Call-to-Action Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            onSubmit={handleFormSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email here."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Enter your email"
              className="px-4 py-2 w-full sm:w-64 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300"
              disabled={state.submitting || submitting}
            >
              {submitting ? "Sending..." : "Stay Informed"}
            </motion.button>
          </motion.form>
        </motion.div>
      </section>

      {/* Success Popup */}
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
              className="bg-white p-8 rounded-lg max-w-md w-full m-4"
            >
              <CheckCircle className="w-16 h-16 text-teal-600 mx-auto mb-4" />
              <h2 className="text-2xl text-navy-500 font-bold mb-2 text-center">Thank You!</h2>
              <p className="text-center mb-6 text-gray-600">
                Your email has been successfully submitted. <br /> We'll keep you informed.
              </p>
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
    </main>
  );
}
