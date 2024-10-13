import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { SiPaypal, SiVisa, SiMastercard } from 'react-icons/si'
import logo from "../../assets/logos/logo.png"


const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { name: 'About Us', path: '/about' },
      { name: 'Mission & Vision', path: '/mission-and-vision' },
      { name: 'How It Works', path: '/how-it-works' },
      { name: 'Contact', path: '/contact' },
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Help Center', path: '/contact' },
      { name: 'Terms & Conditions', path: '/terms' },
    ]
  },
  {
    title: 'Follow Us',
    socialLinks: [
      { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/banjulo.gambia' },
      { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/banjulo.gambia/' },
      { name: 'Linkedin', icon: Linkedin, url: 'https://www.linkedin.com/company/banjulo' },
    ]
  }
]

const paymentIcons = [
  { name: 'PayPal', icon: <SiPaypal className="w-8 h-8" /> },
  { name: 'Visa', icon: <SiVisa className="w-8 h-8" /> },
  { name: 'MasterCard', icon: <SiMastercard className="w-8 h-8" /> },
]

export default function Footer() {
  return (
    <footer className="bg-navy-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="mb-8 lg:mb-0">
            <Link to="/">
              <img
                className='w-36 md:w-40'
                src={logo} alt="" />

            </Link>
            <p className='text-left md:text-center text-orange-500 font-semibold text-xs md:text-lg'>Shop Smart - Sell Smart!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                {section.links && (
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link to={link.path} className="hover:text-teal-400 transition-colors duration-300">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {section.socialLinks && (
                  <div className="flex space-x-4">
                    {section.socialLinks.map((social, socialIndex) => (
                      <a key={socialIndex}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="hover:text-teal-400 transition-colors duration-300">
                        <social.icon className="h-6 w-6" />
                        <span className="sr-only">{social.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="my-12 md:mt-8 flex flex-col items-center">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
            <div className="flex space-x-4">
              {paymentIcons.map((icon, index) => (
                <div key={index} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {icon.icon}
                  <span className="sr-only">{icon.name}</span>
                </div>
              ))}
            </div>
          </div>
          <p>&copy; {new Date().getFullYear()} Banjulo.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}