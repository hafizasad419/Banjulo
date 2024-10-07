import React, { useState } from 'react'
import { ChevronDown, Facebook, Instagram, Twitter } from 'lucide-react'
import {Link} from "react-router-dom"

export default function BanjuloLandingPage() {
  const [email, setEmail] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email)
    setEmail('')
    alert('Thank you for signing up! We\'ll notify you when we launch.')
  }

  return (
    <div className="min-h-screen flex flex-col font-poppins text-gray-800">
      <header className="bg-white shadow-md md:py-4">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-teal-600">BANJULO</Link>

          <nav className="text-xl font-semibold hidden md:flex space-x-4">
            <Link to="#about" className="text-gray-600 hover:text-teal-600 pr-16">About</Link>
            <Link to="#mission" className="text-gray-600 hover:text-teal-600 pr-16">Mission & Vision</Link>
            <Link to="#how-it-works" className="text-gray-600 hover:text-teal-600 pr-16">How It Works</Link>
            <Link to="#contact" className="text-gray-600 hover:text-teal-600 pr-16">Contact</Link>
          </nav>

          
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${isMenuOpen ? 'transform rotate-180' : ''}`} />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <Link href="#about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</Link>
            <Link href="#mission" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Mission & Vision</Link>
            <Link href="#how-it-works" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">How It Works</Link>
            <Link href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center bg-gray-100">
          <img
            src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Gambian artisans and products"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Banjulo.com - Shop Smart, Sell Smart</h1>
            <p className="text-xl md:text-2xl mb-8">Connecting Gambian artisans with the world</p>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 w-full md:w-64 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-600"
                required
              />
              <button type="submit" className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300">
                Notify Me
              </button>
            </form>
          </div>
        </section>

        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Banjulo.com</h2>
            <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
              Banjulo.com aims to empower Gambian artisans and businesses by creating a vibrant online marketplace that celebrates the rich cultural heritage of Gambian products. Our commitment is to foster economic growth and support the unique talents of Gambian artisans by creating an inclusive and accessible platform.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Assan Jeng: Founder & CEO</h3>
                <p>Assan Jeng is a Gambian entrepreneur who grew up in Norway. With extensive experience in international sales at Deel, Alteryx, New Relic, and Oracle, he returned to The Gambia after 30 years to revolutionise local e-commerce.</p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Suhayl Patel: Co-founder</h3>
                <p>Based in Dubai, Suhayl Patel brings nearly 20 years of extensive experience in enterprise software, SaaS, and AI from roles at Kong Inc., Udacity, and Intel. His expertise in strategic account management and value selling is crucial for driving Banjulo.com's growth.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="mission" className="py-16 bg-teal-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Mission</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Empowering local artisans and businesses by providing a platform to showcase and sell their products.</li>
                  <li>Fostering economic growth and development in The Gambia through e-commerce.</li>
                  <li>Connecting buyers   with unique, high-quality Gambian products.</li>
                  <li>Promoting and preserving the rich cultural heritage of The Gambia through a vibrant online marketplace.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Vision</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To be the leading e-commerce platform in The Gambia.</li>
                  <li>Championing local artisans and businesses.</li>
                  <li>Driving economic growth within The Gambia.</li>
                  <li>Celebrating the unique cultural heritage of Gambian products.</li>
                  <li>Establishing a sustainable and inclusive digital marketplace that benefits the entire Gambian community.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
                <p>Create a secure account quickly and easily.</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Find What You Love</h3>
                <p>Discover products using intuitive search filters by category, price, location, and artisan.</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Shop Securely</h3>
                <p>Enjoy secure payment gateways, real-time currency conversion, and transparent shipping information.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="max-w-lg mx-auto">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                  <input type="text" id="subject" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600" required />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600" required></textarea>
                </div>
                <button type="submit" className="w-full px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors duration-300">Send Message</button>
              </form>
              <div className="mt-8 text-center">
                <p className="mb-2">Email: contact@banjulo.com</p>
                <p className="mb-2">Phone: +220 1234 5678</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-600 hover:text-teal-600"><Facebook className="h-6 w-6" /></a>
                  <a href="#" className="text-gray-600 hover:text-teal-600"><Instagram className="h-6 w-6" /></a>
                  <a href="#" className="text-gray-600 hover:text-teal-600"><Twitter className="h-6 w-6" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#about" className="hover:text-teal-400">About Us</Link></li>
                <li><Link href="#contact" className="hover:text-teal-400">Contact</Link></li>
                <li><Link href="#" className="hover:text-teal-400">Help Center</Link></li>
                <li><Link href="#" className="hover:text-teal-400">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-teal-400"><Facebook className="h-6 w-6" /></a>
                <a href="#" className="hover:text-teal-400"><Instagram className="h-6 w-6" /></a>
                <a href="#" className="hover:text-teal-400"><Twitter className="h-6 w-6" /></a>
              </div>
            </div>

            
            
            <div>
              {/* <h3 className="text-lg font-semibold mb-4">Secure Payments</h3>
              <div className="flex space-x-2">
                <img src="/placeholder.svg?height=30&width=50" alt="Visa" width={50} height={30} />
                <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" width={50} height={30} />
                <img src="/placeholder.svg?height=30&width=50" alt="PayPal" width={50} height={30} />
              </div> */}

            </div>




            <div>
              <p>&copy; {new Date().getFullYear()} Banjulo.com. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}