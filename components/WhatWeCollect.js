'use client'

const WhatWeCollect = () => {
  const items = [
    { title: 'ALUMINUM CANS & TIN CANS', emoji: '🥫', verified: true },
    { title: 'FLATTENED CARDBOARD & NEWSPAPER', emoji: '📦', verified: true },
    { title: 'NEWSPAPER', emoji: '📰', verified: true },
    { title: 'ADDITIONAL FEES', emoji: '📋', verified: false },
  ]

  return (
    <section className="py-16 bg-accent-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-white mb-12">WHAT WE COLLECT</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{item.emoji}</div>
              <h3 className="font-bold text-accent-brown mb-2">{item.title}</h3>
              {item.verified && <div className="text-green-600 text-lg">✓</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeCollect
