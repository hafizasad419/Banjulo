import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Mission & Vision', path: '/mission-and-vision' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-teal-600 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-gold-500 transition-colors duration-300">
          BANJULO
        </Link>

        <nav className="hidden md:flex space-x-4 py-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-xl font-semibold px-4 py-2 rounded-md transition-all duration-300 ${isActive ? 'text-gold-500 bg-teal-700' : 'text-white hover:text-gold-500 hover:bg-teal-500'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-teal-600 overflow-hidden"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-3 text-lg font-medium transition-all duration-300 ${isActive
                    ? 'text-gold-500 bg-teal-700' 
                    : 'text-white hover:text-gold-500 hover:bg-teal-700'  // 
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>

            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}