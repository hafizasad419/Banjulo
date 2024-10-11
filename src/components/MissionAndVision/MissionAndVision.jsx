import React from 'react'
import { motion } from 'framer-motion'
import { Compass, Target, Globe, Users, BriefcaseBusiness, Palette } from 'lucide-react'
import slide1 from '../../assets/slides/slide1.jpeg'
import slide2 from '../../assets/slides/slide2.jpeg'
import slide3 from '../../assets/slides/slide3.jpeg'
import slide4 from '../../assets/slides/slide4.png'
import slide5 from '../../assets/slides/slide5.png'
import slide6 from '../../assets/slides/slide6.jpg'
import slide7 from '../../assets/slides/slide7.jpeg'
import slide8 from '../../assets/slides/slide8.jpeg'
import slide9 from '../../assets/slides/slide9.jpeg'
import slide10 from '../../assets/slides/slide10.jpeg'
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

const slides = [
  { image: slide1, alt: 'Gambian Artisans at Work' },
  { image: slide2, alt: 'Traditional Gambian Textiles' },
  { image: slide3, alt: 'Handcrafted Jewelry' },
  { image: slide4, alt: 'Market Stalls with Local Products' },
  { image: slide5, alt: 'Packaging Gambian Crafts' },
  { image: slide6, alt: 'Gambian Artisans' },
  { image: slide7, alt: 'Gambian Artisans' },
  { image: slide8, alt: 'Gambian Artisans' },
  { image: slide9, alt: 'Gambian Artisans' },
  { image: slide10, alt: 'Gambian Artisans' },
]

const MissionAndVision = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white min-h-screen">
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-teal-600 text-white py-20 px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Mission & Vision</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Empowering Gambian artisans, Individuals and Businesses
        </p>
      </motion.header>

      <main className="container mx-auto px-4 py-12">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="mb-16"
        >
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-500 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Banjulo.com aims to revolutionize e-commerce in The Gambia by empowering local artisans, Individuals and Businesses to drive economic growth through innovative solutions.
            </p>
          </motion.div>
          <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Compass, title: "Empower Artisans & Businesses", description: "Empower Gambian artisans, individuals, and businesses by offering them a platform to sell their products and services locally and globally." },
              { icon: Target, title: "Preserve Culture", description: "Showcase and preserve Gambian culture while providing an online space for all types of products." },
              { icon: BriefcaseBusiness, title: "Drive Growth", description: "Promote economic growth by facilitating digital commerce in The Gambia" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              >
                <div className="bg-teal-100 rounded-full p-4 mb-4">
                  <item.icon className="w-8 h-8 text-teal-600" />
                </div>
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
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-500 mb-6">Our Vision</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              To be the leading e-commerce platform in The Gambia, empowering individuals and businesses to succeed while showcasing the country’s vibrant culture and opportunities.

            </p>
          </motion.div>
          <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Wider Reach", description: "Connect Gambians—individuals, entrepreneurs, and businesses—with customers both locally and globally." },
              { icon: Users, title: "Community Building", description: "Foster a thriving ecosystem where sellers and buyers come together to grow, share, and support local commerce." },
              { icon: Palette, title: "Cultural Showcase", description: "Highlight the rich diversity and creativity of Gambian products and services, celebrating local craftsmanship and innovation." }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              >
                <div className="bg-teal-100 rounded-full p-4 mb-4">
                  <item.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-500 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-500 mb-6 text-center">Our Impact</h2>
          <div className="relative h-96 rounded-lg overflow-hidden">
            {slides.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
              </motion.div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Transforming Lives</h3>
              <p className="text-lg">Through our platform, we're creating opportunities and preserving traditions.</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-500 mb-6">Join Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Whether you're a seller looking to grow your business or a buyer seeking quality Gambian products and services, you can be part of our mission to empower communities, support local businesses, and celebrate Gambian culture.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 hover:bg-orange-700"
          >
            Get Involved
          </Link>
        </motion.section>
      </main>
    </div>
  )
}

export default MissionAndVision