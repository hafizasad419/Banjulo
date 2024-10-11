import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'
import logo from "../../assets/logos/logo.png"
const navLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Mission & Vision', path: '/mission-and-vision' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-navy-500 shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/">
          <img
            className='w-28 md:w-40'
            src={logo} alt="" />

        </Link>

        <nav className="hidden md:flex space-x-4 py-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-xl font-semibold px-4 py-2 rounded-md transition-all text-white hover:bg-teal-600 duration-300 ${isActive ? 'bg-teal-600' : ''
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
            className="md:hidden bg-navy-500 overflow-hidden"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block px-4 py-3 text-lg font-medium transition-all duration-300 text-white ${isActive
                    ? 'bg-teal-600'
                    : ''
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