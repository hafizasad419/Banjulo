import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqData = [
    {
      question: "How can I sell on Banjulo?",
      answer: `To sell on Banjulo, simply create an account and post your product or service by following these steps:\n
      1. Sign up for an account.\n
      2. Go to the "Sell" section and fill out the required details for your product or service.\n
      3. Upload clear images, set a price, and write a description.\n
      4. Once approved, your ad will be live on Banjulo, and you can start reaching buyers!`
    },
    {
      question: "How to buy something on Banjulo?",
      answer: `Buying on Banjulo is simple and secure:\n
      1. Create an account or log in if you already have one.\n
      2. Use the search bar or browse categories to find the product or service you need.\n
      3. Click on the listing, review the details, and proceed to contact the seller or add the item to your cart.\n
      4. Follow the checkout process and pay securely using one of the available payment methods.`
    },
    {
      question: "How do I contact the Support Team?",
      answer: `You can easily reach our Support Team by:\n
      1. Clicking on the “Contact Us” link at the bottom of the website.\n
      2. Sending an email to contact@banjulo.com.\n
      3. Using the in-app chat for quick assistance with any issues or inquiries.`
    },
    {
      question: "What can I do to sell better?",
      answer: `To improve your chances of selling on Banjulo:\n
      1. Use high-quality images and clear descriptions of your products or services.\n
      2. Set competitive prices and offer promotions when possible.\n
      3. Respond quickly to buyer inquiries to build trust.\n
      4. Maintain a verified ID badge for added credibility.`
    },
    {
      question: "How can I protect myself from being scammed?",
      answer: `Banjulo takes security seriously. To protect yourself:\n
      1. Always communicate through the Banjulo platform.\n
      2. Verify the seller’s profile and ID badge before purchasing.\n
      3. Avoid making payments outside of the platform.\n
      4. Report any suspicious activity to our Support Team immediately.`
    },
    {
      question: "What does a “Verified ID” badge mean, and how can I get it?",
      answer: `A "Verified ID" badge means that the seller has completed identity verification, adding credibility to their account. To get it:\n
      1. Upload a clear selfie and valid ID during the verification process.\n
      2. Once verified, the badge will appear on your profile, letting buyers know you're a trusted seller.`
    },
    {
      question: "How can I be sure that I'll get what I requested?",
      answer: `Banjulo ensures a secure buying process. Here’s how we protect you:\n
      1. Sellers with Verified IDs are more trustworthy.\n
      2. Review the seller’s ratings and feedback before making a purchase.\n
      3. Use our secure payment methods, and track your order from dispatch to delivery.`
    }
  ];
  
  
  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    // Splitting answer by '\n' and mapping it to include line breaks
    const formattedAnswer = answer.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  
    return (
      <div className="border-b border-gray-200 py-4">
        <button
          className="flex justify-between items-center w-full text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lg font-medium text-navy-500">{question}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-teal-600" />
          </motion.div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="mt-2 text-gray-600">{formattedAnswer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  

const FAQ = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-navy-500 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  )
}

export default FAQ