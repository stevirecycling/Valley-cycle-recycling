'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import WhatWeCollect from '@/components/WhatWeCollect'
import Pricing from '@/components/Pricing'
import OrderForm from '@/components/OrderForm'
import Footer from '@/components/Footer'

export default function Home() {
  const [showOrder, setShowOrder] = useState(false)

  return (
    <main>
      <Header onOrderClick={() => setShowOrder(!showOrder)} />
      <Hero onOrderClick={() => setShowOrder(true)} />
      <Features />
      <WhatWeCollect />
      <Pricing />
      {showOrder && <OrderForm onClose={() => setShowOrder(false)} />}
      <Footer />
    </main>
  )
}
