import React from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Wrench, ShoppingBag, Globe, Truck, CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'
import Slides from '../../Slides/Slides'

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

const slides =[
  {
    image:"/guitar.jpg",
    alt:"guitar"
  },
  {
    image:"/services.jpg",
    alt:"services"
  },
 
  {
    image:"/money.jpg",
    alt:"money"
  },
 
]

const EarnMoney = () => {
  const sections = [
    {
      title: "Sell What You Don't Need",
      icon: DollarSign,
      content: "Take a look around your home—maybe you've got an old phone lying around, a guitar you don't play anymore, or even some jewelry that's just collecting dust. On Banjulo, you can sell practically anything to people in your area. In tough times, people often look for used items because they're more affordable. This is your chance to turn unused stuff into cash! Whether it's an old chair, home decor, or electronics, your pre-loved items are valuable to someone else."
    },
    {
      title: "Turn Your Skills into Income",
      icon: Wrench,
      content: "Think about the skills you have—whether you can sew, drive, tutor kids, or even repair electronics. You can offer these services on Banjulo and get paid for what you're good at. Just post an advert in the Services section, and start earning by putting your talents to work!"
    },
    {
      title: "Grow Your Business with E-Commerce",
      icon: ShoppingBag,
      content: "If you own a business or are looking to start one, Banjulo provides the perfect platform to reach a wider audience. Whether you're running a small local shop or selling handcrafted products, Banjulo lets you set up an online storefront and sell directly to customers, with no need for complex technical setups."
    }
  ]

  const benefits = [
    { title: "Open Your Online Store", icon: Globe, description: "Showcase your products and services to a large customer base, locally and internationally." },
    { title: "Reach More Customers", icon: ShoppingBag, description: "With Banjulo, you get exposure to buyers actively looking for products like yours." },
    { title: "Seamless Transactions", icon: CreditCard, description: "Our secure payment system ensures smooth, reliable transactions so you can focus on growing your business." },
    { title: "Shipping & Tracking", icon: Truck, description: "Offer shipping with real-time tracking, giving your customers confidence in their orders." }
  ]

  return (
    <div className="bg-white pb-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 variants={fadeIn} className="md:text-5xl text-3xl font-bold text-navy-500 text-center mb-12">
          Earn Money with Banjulo
        </motion.h2>


        <div className="flex justify-center items-center my-8">
          <Slides slides={slides}/>
        </div>


        <motion.div variants={staggerChildren} className="space-y-16">
          {sections.map((section, index) => (
            <motion.div key={index} variants={fadeIn} className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex-shrink-0">
                <div className="bg-teal-100 rounded-full p-4">
                  <section.icon className="w-8 h-8 text-teal-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-500 mb-4">{section.title}</h3>
                <p className="text-gray-600">{section.content}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* 
        <motion.h3 variants={fadeIn} className="text-2xl font-bold text-navy-500 text-center mt-16 mb-8">
          Here's how Banjulo helps businesses:
        </motion.h3> */}

        {/* <motion.div variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4"
            >
              <div className="bg-teal-100 rounded-full p-3 flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-navy-500 mb-2">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        <motion.div variants={fadeIn} className="mt-16 text-center">
          <Link
            to={"/contact"}
            className="inline-block bg-orange-500 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 hover:bg-orange-700"
          >
            Start Earning Today!
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default EarnMoney