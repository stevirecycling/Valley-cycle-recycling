import './globals.css'

export const metadata = {
  title: 'Valley Cycle Recycling - Fast Pickup. Clean Communities.',
  description: 'Convenient recycling pickup in Stevensville and the Bitterroot Valley',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
