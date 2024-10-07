import React from 'react'
import { LandingPage, Testimonials, WhyBanjulo, HowBanjuloWorks } from '../'
import EarnMoney from './HomeMisc/EarnMoney'

export default function Home() {
  return (
    <>
      <LandingPage />
      <WhyBanjulo />
      <Testimonials />
      <EarnMoney/>
      <HowBanjuloWorks />
    </>
  )
}

