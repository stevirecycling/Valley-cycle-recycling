'use client'

const Features = () => {
  const features = [
    { icon: '⚡', title: 'FAST & RELIABLE', description: 'Quick pickup when you need it.' },
    { icon: '🏠', title: 'CONVENIENT', description: 'We come to you. No extra time needed.' },
    { icon: '♻️', title: 'ECO-FRIENDLY', description: 'Keeping recyclables out of landfills.' },
    { icon: '🏞️', title: 'LOCAL SERVICE', description: 'Proudly serving Stevensville and the Bitterroot Valley.' },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-accent-brown mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
