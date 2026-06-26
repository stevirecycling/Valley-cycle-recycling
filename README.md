# Valley Cycle Recycling

A modern, responsive website for Valley Cycle Recycling - providing convenient recycling pickup services in Stevensville and the Bitterroot Valley.

## Features

- **Fast Pickup Service**: Quick and reliable recycling collection
- **Online Ordering**: Easy-to-use order form with multiple steps
- **Flexible Payment**: Pay online or pay in person options
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Professional UI**: Green, white, and brown color scheme

## Getting Started

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/stevirecycling/valley-cycle-recycling.git
cd valley-cycle-recycling
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website

## Build for Production

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout
│   └── page.js           # Home page
├── components/
│   ├── Header.js         # Navigation header
│   ├── Hero.js           # Hero section
│   ├── Features.js       # Features showcase
│   ├── WhatWeCollect.js  # Items collected section
│   ├── Pricing.js        # Pricing information
│   ├── OrderForm.js      # Multi-step order form
│   └── Footer.js         # Footer section
├── package.json          # Project dependencies
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md             # This file
```

## Technologies Used

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library

## Color Scheme

- **Primary Green**: #16a34a, #15803d
- **Brown**: #6b4423 (main), #8b5a3c (light), #3d2817 (dark)
- **White**: #ffffff
- **Neutral Grays**: Various shades for text and backgrounds

## Features

### Homepage
- Hero banner with call-to-action
- Features highlight section
- Items collected showcase
- Pricing information
- Multi-step order form

### Order Form
- Step 1: Payment type selection (Online/In Person)
- Step 2: Item selection with quantity and pricing
- Step 3: Pickup address and contact information
- Real-time total calculation
- Form validation

## Contact Information

- **Phone**: (406) 561-4274
- **Email**: stevi.valley.cycling@gmail.com
- **Service Area**: Stevensville and Bitterroot Valley, Montana

## License

This project is proprietary software for Valley Cycle Recycling.

## Future Enhancements

- Integration with payment gateway (Stripe, PayPal)
- Email confirmation system
- Admin dashboard for order management
- Customer account system
- SMS notifications
- Integration with mapping API for service area verification
