import React from 'react'
import { motion } from 'framer-motion'
import { ShoppingBag, Globe, Heart, Users, Zap, Award } from 'lucide-react'
import assanJeng from "../../assets/avatar/assan-jeng-pfp.png"
import { Link } from 'react-router-dom'

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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Banjulo.com</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Empowering Gambian artisans and preserving cultural heritage through e-commerce
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
          <motion.p variants={fadeIn} className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-left md:text-center">
            Banjulo.com is more than just an e-commerce platform; it's a movement dedicated to empowering Gambian artisans and preserving the rich cultural heritage of The Gambia.
            <br />
            <br />
            By providing a global marketplace, we enable local artisans to share their crafts with the world, promoting economic growth and celebrating unique traditions.
          </motion.p>
          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: ShoppingBag, title: "Global Marketplace", description: "Connect Gambian artisans with customers worldwide" },
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
            <p className="text-lg text-gray-700 mb-4">
              Banjulo.com was founded by <a href='https://www.linkedin.com/in/assanjeng/' target='_blank' className='text-teal-500 font-bold'>Assan Jeng,</a> a Gambian entrepreneur with extensive international experience in companies like Deel, Alteryx, and Oracle. Assan recognized the untapped potential of Gambian artisans and the lack of an efficient platform to connect their work with buyers worldwide.
            </p>
            <p className="text-lg text-gray-700">
              Assan's vision was to create a marketplace that empowers these artisans and highlights the unique beauty of Gambian craftsmanship. What started as an idea has now blossomed into a thriving platform that connects Gambian artisans to a global audience, fostering economic growth and cultural preservation.
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="text-center">
            <img
              src={assanJeng}
              alt="Assan Jeng"
              className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
            />
            <a href='https://www.linkedin.com/in/assanjeng/' target='_blank' className='text-2xl mb-2 text-teal-500 font-bold'>Assan Jeng</a>
            <p className="text-lg text-gray-600 mb-4">Founder & CEO</p>
            <blockquote className="italic text-lg text-gray-700 max-w-2xl mx-auto">
              "Banjulo.com is more than just a business—it's a way to give back to the community that shaped me. I want the world to see the beauty and skill that Gambian artisans bring to their craft, and I want to create opportunities for these artisans to thrive in the global marketplace."
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
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Whether you're looking to purchase unique handmade goods or support Gambian artisans, Banjulo.com offers a one-of-a-kind experience that connects people across borders and celebrates the beauty of The Gambia.
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