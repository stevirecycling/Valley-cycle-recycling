'use client'

const Pricing = () => {
  const pricingItems = [
    { title: 'ALUMINUM CANS', price: '$10', description: 'per trash bag' },
    { title: 'TIN CANS', price: '$10', description: 'per trash bag' },
    { title: 'FLATTENED CARDBOARD & NEWSPAPER', price: '$20', description: 'per load', note: 'Must fit within 27 gallon volume' },
    { title: 'UNFLATTENED BOXES', price: '+ $10', description: 'Additional fee', note: 'Please flatten boxes to avoid extra charge' },
  ]

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">PRICING</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {pricingItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-accent-brown mb-2 text-sm">{item.title}</h3>
              <p className="text-3xl font-bold text-primary-600 mb-2">{item.price}</p>
              <p className="text-gray-600 text-sm mb-2">{item.description}</p>
              {item.note && <p className="text-xs text-gray-500 italic">{item.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
