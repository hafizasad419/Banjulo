import React from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

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

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Fatou Ceesay",
      role: "Local Seller",
      image: "https://images.unsplash.com/photo-1507152927179-bc4ebfef7103?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwcGVyc29ufGVufDB8fDB8fHww",
      productImage: "/placeholder.svg?height=200&width=200",
      quote: "Banjulo has transformed how I sell my products. I can now reach customers across The Gambia and beyond, showcasing my items to a wider audience.",
      rating: 5
    },
    {
      id: 2,
      name: "John Smith",
      role: "Buyer",
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8fDA%3D",
      productImage: "/placeholder.svg?height=200&width=200",
      quote: "I found unique and high-quality products on Banjulo that I couldn’t get anywhere else. The variety and convenience make it my go-to platform.",
      rating: 5
    },
    {
      id: 3,
      name: "Amie Bojang",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBwZXJzb258ZW58MHx8MHx8fDA%3D",
      productImage: "/placeholder.svg?height=200&width=200",
      quote: "Banjulo is making a real impact, not just for artisans but for local businesses and individuals. It’s empowering people to sell and thrive in the digital marketplace.",
      rating: 5
    },
    {
      id: 4,
      name: "David Lee",
      role: "Buyer",
      image: "https://media.istockphoto.com/id/2085204192/photo/african-american-student-with-dental-braces-wearing-jacket-posing-on-street-and-looking-at.webp?a=1&b=1&s=612x612&w=0&k=20&c=0eQ9qwn1UR31BBoePDEikT17k_Vt1Jqz-qd6g5xeTWA=",
      productImage: "/placeholder.svg?height=200&width=200",
      quote: "The service at Banjulo is top-notch. They made sure my order arrived smoothly, and the entire experience was seamless.",
      rating: 5
    }
  ]

  return (
    <div className="bg-gray-100 px-4 pb-16 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-bold text-navy-500 text-center mb-6">
          What Our Users Are Saying?
        </motion.h2>

        <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeIn}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-navy-500">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              {/* <img
                src={testimonial.productImage}
                alt={`Product by ${testimonial.name}`}
                className="w-full h-48 object-cover"
              /> */}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Testimonials