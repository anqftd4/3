# InternetOne.live

A production-ready Next.js website for comparing internet and TV service providers. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🚀 **18+ Pages** - Complete website with home, comparison, provider pages, legal pages, and more
- 🎨 **Animated UI** - Extensive Framer Motion animations throughout
- 🌓 **Dark/Light Theme** - System-aware theme with manual toggle
- 📱 **Mobile Responsive** - Fully responsive design with mobile-specific CTAs
- 🔍 **ZIP Code Search** - Location-based service availability checking
- 📊 **Comparison Tables** - Interactive filtering, sorting, and expandable details
- ♿ **Accessibility** - Keyboard navigation, screen reader support, reduced motion support
- 📋 **Google Ads Compliant** - Proper disclosures, no provider logos, independence statements

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/internetone-live.git
cd internetone-live
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
internetone-live/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── compare/           # Comparison page
│   ├── deals/             # Deals page
│   ├── tv/                # TV packages page
│   ├── bundles/           # Bundles page
│   ├── why-us/            # Why choose us page
│   ├── faq/               # FAQ page
│   ├── contact/           # Contact page
│   ├── about/             # About page
│   ├── providers/         # Provider pages
│   │   ├── verizon/
│   │   ├── spectrum/
│   │   ├── att/
│   │   └── optimum/
│   ├── privacy-policy/    # Privacy policy
│   ├── terms-and-conditions/
│   ├── disclosures/       # How we make money
│   ├── accessibility/     # Accessibility statement
│   └── sitemap/           # Sitemap page
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   ├── ComparisonTable.tsx
│   ├── ProviderPopup.tsx
│   ├── ZipSearchModule.tsx
│   └── ...
├── lib/                   # Utilities and config
│   ├── siteConfig.ts     # Site configuration
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Configuration

### Site Configuration

Edit `lib/siteConfig.ts` to customize:

- Site name and URL
- Contact information (phone, email, hours)
- Provider data and colors
- Plan information
- Disclaimers

### Styling

- Global styles in `app/globals.css`
- Tailwind configuration in `tailwind.config.ts`
- Custom CSS variables for theming

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/internetone-live.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub

3. Click "New Project" and import your repository

4. Configure your project:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)

5. Click "Deploy"

6. Once deployed, configure your custom domain:
   - Go to Project Settings > Domains
   - Add `internetone.live`
   - Follow DNS configuration instructions

### Environment Variables (if needed)

If you add any environment variables, configure them in Vercel:
- Project Settings > Environment Variables

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Google Ads Compliance

This website is designed to be compliant with Google Ads policies for comparison services:

1. **Independence Disclosure**: Every page clearly states we are not the providers
2. **No Provider Logos**: Uses text-based provider badges instead of logos
3. **Pricing Disclaimers**: All prices noted as subject to change
4. **Call to Confirm**: Users encouraged to call for current pricing
5. **Dedicated Disclosures Page**: Explains how we earn money

## Customization

### Adding a New Provider

1. Add provider data to `lib/siteConfig.ts`:
```typescript
providers: [
  // ... existing providers
  {
    name: 'New Provider',
    slug: 'new-provider',
    color: '#123456',
  },
]
```

2. Create provider page at `app/providers/new-provider/page.tsx`

3. Update navigation and sitemap

### Modifying Plans

Edit the `plans` and `bundlePlans` arrays in `lib/siteConfig.ts`

### Changing Contact Info

Update the `contact` object in `lib/siteConfig.ts`:
```typescript
contact: {
  phone: '8885240250',
  phoneFormatted: '(888) 524-0250',
  email: 'support@Internetone.live',
  hours: 'Mon–Fri 9AM–6PM EST',
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary. All rights reserved.

## Support

For support, contact support@Internetone.live or call (888) 524-0250.
