import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Globe, Heart, Users, Zap, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import SlidesAndText from '../SlidesAndText/SlidesAndText'
import { Slides } from '../'
import slide1 from "../../assets/About/slide1.jpeg"
import slide2 from "../../assets/About/slide2.jpeg"
import slide3 from "../../assets/About/slide3.jpeg"
import slide4 from "../../assets/About/slide4.jpeg"
import slide5 from "../../assets/About/slide5.jpeg"
import slide6 from "../../assets/About/slide6.jpeg"
import slide7 from "../../assets/About/slide7.jpeg"


const slides = [
  { image: slide3, alt: "Slide 3" },
  { image: slide1, alt: "Slide 1" },
  { image: slide2, alt: "Slide 2" },
  { image: slide4, alt: "Slide 4" },
  { image: slide5, alt: "Slide 5" },
  { image: slide6, alt: "Slide 6" },
  { image: slide7, alt: "Slide 7" },
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

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-teal-600 text-white py-20 px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About <span> Banjulo.com</span></h1>
        <p className="text-xl md:text-2xl mx-auto">
          Empowering Gambian artisans and preserving cultural heritage through e-commerce
          {/* TODO */}
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
            Who are we?
          </motion.h2>
          {/* Slider Section */}
          <div className="py-8 flex justify-center">
            <Slides slides={slides} />
          </div>
          <motion.p variants={fadeIn} className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-left md:text-xl font-semibold">

            <span className="text-teal-600 font-bold"> Banjulo.com</span> is a versatile platform that caters to everyone. Whether you're an
            artisan, a business, or an individual, our marketplace provides the tools you need to reach a
            global audience. By combining local culture with global e-commerce trends, <span > Banjulo.com </span>
            helps foster economic growth while celebrating Gambian heritage.
          </motion.p>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: ShoppingBag, title: "Global Marketplace", description: "Connect Gambian artisans and Businesses with customers  " },
              { icon: Globe, title: "Cultural Preservation", description: "Promote and preserve Gambian cultural heritage" },
              { icon: Heart, title: "Artisan Empowerment", description: "Support local artisans in growing their businesses" },
              { icon: Users, title: "Community Building", description: "Foster a community of artisans and art enthusiasts" },
              { icon: Zap, title: "Economic Growth", description: "Drive sustainable economic development in The Gambia" },
              { icon: Award, title: "Quality Assurance", description: "Ensure authentic, high-quality Gambian products" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              >
                <item.icon className="w-12 h-12 text-teal-600 mb-4" />
                <h3 className="text-xl font-semibold text-navy-500 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
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
            Our Story
          </motion.h2>
          <motion.div variants={fadeIn} className="bg-gray-100 rounded-lg py-8 px-4 mb-8">
            <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto font-semibold">

              <span className="text-teal-600 font-bold"> Banjulo.com</span> was founded to empower local Gambian businesses and artisans by providing a platform for them to showcase their products and skills. Our team, with expertise in sales, marketing, social media, advertising, startup growth, and management, recognized the need for a space that connects Gambians, making it easy to buy and sell within the country.
              <br />
              <br />

              What began as an idea has evolved into a dynamic marketplace that drives economic growth and celebrates Gambian craftsmanship. Whether you're selling household items, offering services, or showcasing handmade goods, <span className="text-teal-600 font-bold"> Banjulo.com</span> helps you reach the right audience and thrive locally.
            </p>

          </motion.div>
          <motion.div variants={fadeIn} className="text-center">
            <img
              src={`/story.jpg`}
              alt="Assan Jeng"
              className="w-56 h-56 rounded-full mx-auto mb-4 object-cover"
            />
            <a href='https://www.linkedin.com/company/banjulo' target='_blank' className='text-2xl mb-2 text-teal-500 font-bold'>The Banjulo Team</a>
            <blockquote className="italic text-lg text-gray-700 max-w-3xl mx-auto my-2  text-left">
              <span className="text-teal-600 font-bold"> Banjulo.com</span> is more than just a business. It's a way of supporting and uplifting the Gambian community. Our mission is to shine a light on the talent and skills of local artisans and create new opportunities for businesses to succeed.
            </blockquote>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-navy-500 mb-6 text-center">
            Our Commitment
          </motion.h2>
          <motion.ul variants={staggerChildren} className="space-y-4 max-w-3xl mx-auto">
            {[
              "Empowering artisans with tools for success in the digital age",
              "Supporting sustainable growth of The Gambia's artisan economy",
              "Providing exceptional shopping experiences for our customers",
              "Promoting ethical business practices and fair compensation",
              "Preserving and promoting Gambian cultural heritage"
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={fadeIn}
                className="flex items-start"
              >
                <svg className="w-6 h-6 text-teal-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg text-gray-700">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-500 mb-6">Join Us on Our Journey</h2>

          <p className="text-lg md:text-xl font-semibold text-gray-700 mb-8 text-left max-w-3xl mx-auto">
            Whether you're looking to purchase unique handmade goods or support Gambian artisans, <span className="text-teal-600 font-bold"> Banjulo.com</span> offers a one-of-a-kind experience that connects people and enable them to celebrates the beauty of The Gambia.
          </p>


          <Link
            to={"/contact"}
            className="inline-block bg-teal-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 hover:bg-teal-700"
          >
            Get Early Access!
          </Link>
        </motion.section>
      </main>
    </div>
  )
}

export default About