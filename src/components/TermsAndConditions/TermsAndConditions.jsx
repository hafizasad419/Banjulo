import React from 'react'
import { motion } from 'framer-motion'
import { Book, Shield, User, ShoppingBag, Truck, RotateCcw, AlertTriangle, Scale, Phone, Mail, MapPin } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const TermsAndConditions = () => {
  const sections = [
    { title: "Introduction", icon: Book, content: "Welcome to Banjulo.com. By accessing and using our website, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using the platform. If you do not agree with any of these terms, you should not use Banjulo.com." },
    { title: "Use of the Website", icon: Shield, content: "You agree to use Banjulo.com for lawful purposes only. Any violation of these terms may result in immediate termination of your account and access to the platform. Banjulo.com reserves the right to change or update these terms at any time, and it is your responsibility to review them regularly." },
    { title: "User Accounts", icon: User, content: "To access certain features of Banjulo.com, you may need to create a user account. You are responsible for maintaining the confidentiality of your account information and for any activity that occurs under your account. You agree to provide accurate and current information during the registration process and to update this information if it changes." },
    { title: "Product Listings and Descriptions", icon: ShoppingBag, content: "Banjulo.com provides a platform for Gambian artisans to sell their products. While we strive to ensure the accuracy of product descriptions and listings, we do not warrant that the product descriptions, images, or other content are accurate, complete, or error-free. If a product offered by a vendor is not as described, your sole remedy is to return the product in accordance with the return policy." },
    { title: "Shipping and Delivery", icon: Truck, content: "Vendors on Banjulo.com are responsible for shipping and delivering their products. Delivery times and shipping costs may vary depending on the location and shipping methods chosen. Banjulo.com does not take responsibility for any delays or issues related to shipping. Please review the vendor's shipping policies before making a purchase." },
    { title: "Return and Refund Policy", icon: RotateCcw, content: "Our return and refund policies may vary depending on the vendor from whom you purchase. Before making a purchase, please review the individual vendor's return policy. If a product is defective or not as described, you may be eligible for a refund or exchange. All return requests must be made within the timeframe specified by the vendor." },
    { title: "Limitation of Liability", icon: AlertTriangle, content: "Banjulo.com is a marketplace that connects buyers and sellers. We are not directly involved in the transactions between users. As such, we do not take responsibility for the quality, safety, or legality of the products listed by vendors. In no event shall Banjulo.com be liable for any indirect, incidental, or consequential damages arising from your use of the platform." },
    { title: "Governing Law", icon: Scale, content: "These Terms and Conditions are governed by and construed in accordance with the laws of The Gambia. Any disputes arising out of or related to the use of Banjulo.com shall be subject to the exclusive jurisdiction of the courts of The Gambia." },
  ]

  return (
    <div className="bg-white min-h-screen">
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-teal-600 text-white py-20 px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Please read these terms carefully before using Banjulo.com
        </p>
      </motion.header>

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
          className="space-y-12"
        >
          {sections.map((section, index) => (
            <motion.section key={index} variants={fadeIn} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <section.icon className="w-8 h-8 text-teal-600 mr-4" />
                <h2 className="text-2xl font-bold text-navy-500">{section.title}</h2>
              </div>
              <p className="text-gray-700">{section.content}</p>
            </motion.section>
          ))}

          <motion.section variants={fadeIn} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-navy-500 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">If you have any questions or concerns about these Terms and Conditions, please contact us:</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-teal-600 mr-2" />
                <a href="mailto:contact@banjulo.com" className="text-teal-600 hover:underline">contact@banjulo.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-teal-600 mr-2" />
                <a href="tel:+2201234567" className="text-teal-600 hover:underline">+220 1234 567</a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-teal-600 mr-2" />
                <span className="text-gray-700">123 Banjul Street, Banjul, The Gambia</span>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>

      <motion.footer
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-navy-500 text-white py-8 px-4 text-center"
      >
        <p className="text-sm">
          By using Banjulo.com, you agree to these Terms and Conditions. Last updated: {new Date().toLocaleDateString()}
        </p>
      </motion.footer>
    </div>
  )
}

export default TermsAndConditions