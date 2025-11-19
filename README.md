# FirstAidPro - Professional First Aid Product Showcase Website

A modern, professional, and SEO-optimized website for showcasing first aid products with an enquiry-based system (no e-commerce checkout). Built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## Features

### Core Functionality
- **Product Showcase**: Comprehensive product catalog with 12+ featured first aid products
- **Enquiry Cart System**: Add products to cart for bulk enquiry (no payment processing)
- **Product Filtering**: Filter products by category and search functionality
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern Animations**: Smooth animations powered by Framer Motion
- **SEO Optimized**: Long-form content pages for better search engine visibility

### Pages Included

1. **Homepage** (`/`)
   - Hero section with CTAs
   - Featured products showcase
   - Product categories
   - Stats and trust indicators
   - Why choose us section
   - Customer testimonials
   - Call-to-action section

2. **Products Listing** (`/products`)
   - All products with filtering
   - Category-based filtering
   - Search functionality
   - Responsive grid layout

3. **Product Detail** (`/products/[slug]`)
   - Detailed product information
   - Multiple product images
   - Key features and specifications
   - Related products
   - Add to enquiry cart

4. **Cart** (`/cart`)
   - View all items in enquiry cart
   - Adjust quantities
   - Remove items
   - Proceed to enquiry

5. **Enquiry Form** (`/enquiry`)
   - Submit bulk enquiry with cart items
   - Contact information form
   - Cart summary
   - Success confirmation

6. **About** (`/about`)
   - Company story
   - Mission, vision, values
   - Leadership team
   - Why choose us

7. **Services** (`/services`)
   - Service offerings
   - Industries served
   - Process workflow
   - Call-to-action

8. **Contact** (`/contact`)
   - Contact form
   - Contact information
   - Business hours
   - Google Maps integration

### Design Features

- **Modern UI/UX**: Clean, professional, and minimal design
- **Premium Typography**: Google Fonts (Inter + Playfair Display)
- **Custom Color Scheme**: Professional blue and neutral tones
- **Smooth Animations**: Framer Motion for engaging user experience
- **Shadow Effects**: Premium shadow effects for depth
- **Glass Morphism**: Modern glass effects where applicable
- **Responsive Navigation**: Mobile-friendly menu with smooth transitions

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Image Optimization**: Next.js Image component

## Project Structure

```
website-2/
├── src/
│   ├── app/
│   │   ├── about/          # About page
│   │   ├── cart/           # Cart page
│   │   ├── contact/        # Contact page
│   │   ├── enquiry/        # Enquiry form page
│   │   ├── products/       # Products pages
│   │   │   ├── [slug]/     # Dynamic product detail
│   │   │   └── page.tsx    # Products listing
│   │   ├── services/       # Services page
│   │   ├── globals.css     # Global styles + Tailwind
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Footer component
│   ├── context/
│   │   └── CartContext.tsx # Shopping cart state management
│   ├── data/
│   │   └── products.ts     # Product and category data
│   └── types/
│       └── index.ts        # TypeScript interfaces
├── public/                 # Static assets
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies

```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   - Navigate to `http://localhost:3000` (or the port shown in terminal)

### Build for Production

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features Overview

### Cart System
- **Local Storage Persistence**: Cart items saved in browser
- **Quantity Management**: Adjust quantities easily
- **Remove Items**: Delete unwanted products
- **Cart Badge**: Shows total items in cart

### Product Data
All products include:
- Multiple high-quality images
- Detailed descriptions
- Key features list
- Technical specifications
- Stock status
- Category classification

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### SEO Optimization
- Semantic HTML structure
- Meta tags and descriptions
- Open Graph tags
- Long-form content pages
- Internal linking
- Fast loading times

## Customization

### Colors
Edit color scheme in `src/app/globals.css`:
```css
@theme {
  --color-primary-600: #0284c7;  /* Primary brand color */
  --color-secondary-900: #0f172a; /* Text color */
  /* ... more colors */
}
```

### Typography
Fonts are configured in `src/app/layout.tsx`:
```typescript
const inter = Inter({ ... });
const playfair = Playfair_Display({ ... });
```

### Products
Update product data in `src/data/products.ts`:
- Add new products
- Modify categories
- Update product details

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Font Optimization**: Google Fonts with display swap
- **CSS Optimization**: Tailwind CSS with JIT compilation

## Future Enhancements

Potential features to add:
- [ ] Product comparison tool
- [ ] Wishlist functionality
- [ ] Live chat support
- [ ] Blog/Resources section
- [ ] Multi-language support
- [ ] Advanced filtering (price range, ratings)
- [ ] Product reviews
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Analytics integration

## Support

For questions or support, please contact:
- Email: info@firstaidpro.com
- Phone: +1 (234) 567-890

## License

This project is created for demonstration purposes.

---

**Built with** ❤️ **using Next.js, TypeScript, and Tailwind CSS**
