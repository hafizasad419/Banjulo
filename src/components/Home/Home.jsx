import React from 'react'
import { LandingPage, Testimonials, WhyBanjulo, HowBanjuloWorks } from '../'
import EarnMoneyPreview from './HomeMisc/EarnMoneyPreview'

export default function Home() {
  return (
    <>
      <LandingPage />
      <WhyBanjulo />
      <EarnMoneyPreview/>
      <HowBanjuloWorks />
      <Testimonials />
    </>
  )
}

