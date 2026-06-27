'use client'

import { useState } from 'react'

const OrderForm = ({ onClose }) => {
  const [step, setStep] = useState(1)
  const [paymentType, setPaymentType] = useState('online')
  const [items, setItems] = useState({ aluminum: 0, tin: 0, cardboard: 0, boxes: 0 })
  const [formData, setFormData] = useState({ fullName: '', phoneNumber: '', address: '', city: '', state: 'Montana', notes: '' })

  const prices = { aluminum: 10, tin: 10, cardboard: 20, boxes: 10 }

  const calculateTotal = () => {
    return items.aluminum * prices.aluminum + items.tin * prices.tin + items.cardboard * prices.cardboard + items.boxes * prices.boxes
  }

  const handleItemChange = (key, value) => {
    setItems({ ...items, [key]: Math.max(0, value) })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Order submitted:', { paymentType, items, formData, total: calculateTotal() })
    alert('Order submitted! We will contact you soon to confirm.')
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-screen overflow-y-auto">
        <div className="bg-accent-brown text-white p-6 flex justify-between items-center sticky top-0">
          <h2 className="text-3xl font-bold">ORDER YOUR PICKUP</h2>
          <button onClick={onClose} className="text-2xl font-bold hover:text-gray-200">×</button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-8">
          {step >= 1 && (
            <div>
              <h3 className="text-2xl font-bold text-accent-brown mb-4"><span className="bg-accent-brown text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">1</span>CHOOSE PAYMENT TYPE</h3>
              <p className="text-gray-600 mb-4">Select how you would like to pay.</p>
              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary-600">
                  <input type="radio" name="payment" value="online" checked={paymentType === 'online'} onChange={(e) => setPaymentType(e.target.value)} className="w-4 h-4" />
                  <span className="ml-4"><span className="font-bold text-gray-800">💳 Pay Online</span><p className="text-sm text-gray-600">Pay securely online when you place your order.</p></span>
                </label>
                <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-primary-600">
                  <input type="radio" name="payment" value="inperson" checked={paymentType === 'inperson'} onChange={(e) => setPaymentType(e.target.value)} className="w-4 h-4" />
                  <span className="ml-4"><span className="font-bold text-gray-800">💵 Pay In Person</span><p className="text-sm text-gray-600">Pay with cash when we pick up your recyclables.</p></span>
                </label>
              </div>
            </div>
          )}

          {step >= 2 && (
            <div>
              <h3 className="text-2xl font-bold text-accent-brown mb-4"><span className="bg-accent-brown text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">2</span>SELECT ITEMS & QUANTITY</h3>
              <p className="text-gray-600 mb-4">Enter how much of each item you have.</p>
              <div className="space-y-4">
                {[{ key: 'aluminum', label: '🥫 Aluminum Cans', price: 10 }, { key: 'tin', label: '🥫 Tin Cans', price: 10 }, { key: 'cardboard', label: '📦 Cardboard & Newspaper', price: 20 }, { key: 'boxes', label: '📦 Unflattened Boxes', price: 10 }].map(item => (
                  <div key={item.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div><p className="font-bold text-gray-800">{item.label}</p><p className="text-sm text-gray-600">${item.price} {item.key === 'cardboard' ? 'per load' : 'per trash bag'}</p></div>
                    <div className="flex items-center gap-2">
                      <button type="button" onClick={() => handleItemChange(item.key, items[item.key] - 1)} className="px-2 py-1 bg-gray-300 rounded">−</button>
                      <input type="number" value={items[item.key]} onChange={(e) => handleItemChange(item.key, parseInt(e.target.value) || 0)} className="w-12 text-center border border-gray-300 rounded" />
                      <button type="button" onClick={() => handleItemChange(item.key, items[item.key] + 1)} className="px-2 py-1 bg-gray-300 rounded">+</button>
                      <span className="text-primary-600 font-bold ml-2">${items[item.key] * item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                <p className="text-right text-xl font-bold text-accent-brown">Estimated Total: <span className="text-primary-600">${calculateTotal()}</span></p>
              </div>
            </div>
          )}

          {step >= 3 && (
            <div>
              <h3 className="text-2xl font-bold text-accent-brown mb-4"><span className="bg-accent-brown text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-2">3</span>PICKUP INFORMATION</h3>
              <p className="text-gray-600 mb-4">Please enter your pickup address.</p>
              <div className="space-y-4">
                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600" required />
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="Phone Number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600" required />
                <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Street Address" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600" required />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600" required />
                  <select name="state" value={formData.state} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"><option>Montana</option><option>Other</option></select>
                </div>
                <textarea name="notes" value={formData.notes} onChange={handleInputChange} placeholder="Any special instructions for pickup?" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600" rows="3" />
              </div>
            </div>
          )}

          <div className="flex justify-between items-center pt-8 border-t">
            <button type="button" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1} className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-400">Back</button>
            <p className="text-gray-600">Step {step} of 3</p>
            {step < 3 ? (
              <button type="button" onClick={() => setStep(step + 1)} className="btn-primary">Next</button>
            ) : (
              <button type="submit" className="btn-primary">PLACE ORDER</button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default OrderForm
