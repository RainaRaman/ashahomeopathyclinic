# aaaa ggggg clinic - Modern Homeopathy Clinic Website

🌿 A beautiful, modern, and responsive website for a homeopathy clinic built with **Next.js**, **React**, and **Tailwind CSS**.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Image Replacements](#image-replacements)
- [Troubleshooting](#troubleshooting)

---

## ✨ Features

### Core Features
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Hero Section** - Eye-catching landing area with call-to-action
- ✅ **About Section** - Clinic information and highlights
- ✅ **Doctor Profiles** - Display of expert doctors with contact info
- ✅ **Services** - Comprehensive list of treatments and conditions
- ✅ **Appointment Booking** - Interactive form for scheduling consultations
- ✅ **Google Maps Integration** - Embedded clinic location
- ✅ **WhatsApp Integration** - Quick messaging button for instant contact
- ✅ **Patient Testimonials** - Social proof with patient reviews
- ✅ **Modern UI** - Elegant design with smooth animations
- ✅ **WCAG Compliant** - Accessible to users with disabilities
- ✅ **SEO Optimized** - Meta tags and proper HTML structure

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3
- **Icons**: react-icons
- **Forms**: react-hook-form
- **Maps**: Google Maps Embed API
- **Notifications**: react-toastify
- **Language**: TypeScript

---

## 📁 Project Structure

```
asha-homeo/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page (combines all sections)
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── Hero.tsx            # Landing section with CTA
│   ├── About.tsx           # Clinic information
│   ├── Doctors.tsx         # Doctor profiles and information
│   ├── Services.tsx        # Medical services offered
│   ├── Appointment.tsx     # Booking form
│   ├── Map.tsx             # Google Maps integration
│   ├── Testimonials.tsx    # Patient reviews
│   ├── Footer.tsx          # Footer with links
│   └── WhatsAppButton.tsx  # Floating WhatsApp button
├── public/                 # Static assets (images, etc.)
├── .env.local              # Environment variables
├── package.json            # Dependencies
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
├── .eslintrc.json          # ESLint configuration
└── .gitignore              # Git ignore rules
```

---

## 🚀 Installation

### Prerequisites
- Node.js 18+ or higher
- npm or yarn package manager

### Step 1: Clone/Download the Project

```bash
cd /path/to/asha-homeo
```

### Step 2: Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

Or using pnpm:
```bash
pnpm install
```

### Step 3: Verify Installation

```bash
npm list next react tailwindcss
```

You should see the versions of these packages.

---

## ⚙️ Configuration

### 1. Environment Variables

Create or update `.env.local` in the root directory:

```bash
# Google Maps API Key (Required for Map Section)
# Get free key: https://console.cloud.google.com/
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY_HERE

# Clinic Contact Information
NEXT_PUBLIC_CLINIC_PHONE=9999999999
NEXT_PUBLIC_CLINIC_WHATSAPP=919999999999
NEXT_PUBLIC_CLINIC_EMAIL=test@gmail.com

# Optional: Backend API Endpoint
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 2. Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable **Maps JavaScript API**
4. Create an **API Key** (Credentials → Create Credentials)
5. Add the key to `.env.local`
6. Restrict API key usage (Restrict to HTTP referrers)

### 3. Clinic Information

Update clinic details in components:
- **Clinic Name**: Edit in `components/Header.tsx` and `components/Footer.tsx`
- **Doctors**: Edit in `components/Doctors.tsx`
- **Services**: Edit in `components/Services.tsx`
- **Contact Info**: Update in `components/Map.tsx` and `.env.local`
- **Testimonials**: Edit in `components/Testimonials.tsx`

---

## 🎯 Running the Project

### Development Mode

Start the development server:

```bash
npm run dev
```

Your application will be available at: **http://localhost:3000**

The browser will auto-refresh when you make changes.

### Production Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

### Linting

Check code quality:

```bash
npm run lint
```

---

## 🎨 Customization Guide

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#2d5016',      // Main green (clinic theme)
  secondary: '#4CAF50',    // Light green
  accent: '#81C784',       // Accent green
  light: '#E8F5E9',        // Light background
  dark: '#1B5E20',         // Dark green
}
```

### Fonts

Fonts are configured in `app/globals.css`:
- **Heading Font**: Playfair Display (serif)
- **Body Font**: Inter (sans-serif)

To change fonts, edit the `@import` URL in globals.css.

### Spacing and Layout

- Tailwind spacing and gap utilities are used throughout
- Edit `max-w-6xl` in components to change max container width
- Modify `px-4 sm:px-6 lg:px-8` for responsive padding

### Animations

Custom animations are in `app/globals.css`. Add more keyframes for additional animations.

### Content Updates

1. **Header/Logo**: `components/Header.tsx` (lines 18-24)
2. **Hero Section**: `components/Hero.tsx`
3. **About Section**: `components/About.tsx`
4. **Doctor Profiles**: `components/Doctors.tsx` (update the `doctors` array)
5. **Services**: `components/Services.tsx` (update the `services` array)
6. **Contact Info**: `components/Map.tsx` and `.env.local`
7. **Testimonials**: `components/Testimonials.tsx` (update the `testimonials` array)

---

## 🖼️ Image Replacements

### Where Images Are Needed

Dummy images are used as placeholders. Replace them with actual images:

1. **Hero Section Image** (`components/Hero.tsx`, line 54-64)
   - Location: Right side of hero section
   - Recommended size: 400x400px
   - File type: PNG/JPG

2. **About Section Image** (`components/About.tsx`, line 12-23)
   - Location: Left side of about section
   - Recommended size: 400x400px
   - File type: PNG/JPG

3. **Doctor Photos** (`components/Doctors.tsx`, line 32-41 for each doctor)
   - Location: Top of doctor card
   - Recommended size: 400x500px (portrait)
   - File type: PNG/JPG

### How to Replace Images

**Option 1: Use External URLs**

Replace the placeholder div with an Image component:

```tsx
import Image from 'next/image';

<Image
  src="https://your-image-url.jpg"
  alt="Description"
  width={400}
  height={400}
  priority
  className="rounded-3xl shadow-2xl object-cover w-full h-full"
/>
```

**Option 2: Use Local Images**

1. Create a `public/images/` folder
2. Add your images there
3. Reference them:

```tsx
<Image
  src="/images/hero.jpg"
  alt="Hero Image"
  width={400}
  height={400}
  priority
  className="rounded-3xl shadow-2xl object-cover w-full h-full"
/>
```

---

## 📝 Content Customization Details

### Update Doctor Information

Edit `components/Doctors.tsx`:

```typescript
const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Dsfsdff dffgrgth',
    specialization: 'Chief Homeopathy Doctor',
    experience: '12+ Years',
    bio: 'Your bio here...',
    phone: '9999999999',
    email: 'test@gmail.com',
  },
  // Add second doctor...
];
```

### Update Services

Edit `components/Services.tsx`:

```typescript
const services: Service[] = [
  {
    id: 1,
    name: 'Service Name',
    description: 'Service description',
    icon: <FiHeart className="w-8 h-8" />,
    conditions: ['Condition 1', 'Condition 2', ...],
  },
  // Add more services...
];
```

### Update Testimonials

Edit `components/Testimonials.tsx`:

```typescript
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Patient Name',
    condition: 'Treatment Type',
    text: 'Patient testimonial text...',
    rating: 5,
  },
  // Add more testimonials...
];
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Select your repository
5. Add environment variables in Vercel dashboard
6. Click "Deploy"

### Deploy to Netlify

1. Build the project: `npm run build`
2. Create `netlify.toml` in root:

```toml
[build]
  command = "npm run build"
  functions = "api"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

3. Connect your Git repository to Netlify
4. Deploy

### Deploy to Self-Hosted Server

```bash
# Build the project
npm run build

# Transfer files to server
scp -r .next/ package.json package-lock.json user@server:/path/to/app/

# On server, install and start
npm install --production
npm start
```

---

## 📞 WhatsApp Integration

The WhatsApp button is in `components/WhatsAppButton.tsx`. It automatically uses the phone number from environment variables.

To customize the message:

```tsx
const message = encodeURIComponent(
  'Custom message here...'
);
```

---

## 🗺️ Google Maps Integration

The map section uses Google Maps Embed API (no API calls, just embedded iframe).

**To enable the map:**

1. Get API key from Google Cloud Console
2. Add to `.env.local`: `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_KEY`
3. Update location in `components/Map.tsx`:

```typescript
const clinicLocation = {
  lat: 28.7041,
  lng: 77.1025,
  address: 'Your actual address',
  name: 'aaaa ggggg clinic',
};
```

---

## 🐛 Troubleshooting

### Issue: Port 3000 already in use

```bash
# Use a different port
npm run dev -- -p 3001
```

### Issue: Google Maps not loading

1. Check API key in `.env.local`
2. Verify API key has Maps JavaScript API enabled
3. Check API restrictions (allow all referrers for testing)
4. Restart dev server after changing env variables

### Issue: Images not loading

1. Check image URLs are correct
2. Verify images exist in `public/` folder
3. Check file permissions
4. Clear Next.js cache: `rm -rf .next`

### Issue: Styles not applying

1. Clear Next.js cache: `rm -rf .next`
2. Restart dev server
3. Check Tailwind config is correct
4. Verify CSS is imported in layout.tsx

### Issue: Form not submitting

1. Check browser console for errors
2. Verify form fields have `register` from react-hook-form
3. Check API endpoint if using backend

---

## 📱 Responsive Design Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px and above

---

## ♿ Accessibility Features

- WCAG 2.2 Level AA compliant
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliant
- Focus indicators
- Alt text for images

---

## 🔐 Security Notes

- Never commit `.env.local` to version control
- Use HTTPS in production
- Validate form inputs on backend
- Use CSRF tokens if needed
- Keep dependencies updated: `npm update`

---

## 📊 Performance Tips

1. Optimize images using Next.js Image component
2. Use Code splitting for better load times
3. Enable caching headers
4. Minify CSS and JavaScript (auto in production)
5. Use CDN for static assets
6. Monitor Core Web Vitals

---

## 🤝 Support & Help

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React: https://react.dev
- Google Maps: https://developers.google.com/maps

---

## 📄 License

Feel free to use this template for your project.

---

## 🎓 Learning Resources

### Next.js App Router
- [Routing Documentation](https://nextjs.org/docs/app)
- [Data Fetching Guide](https://nextjs.org/docs/app/building-your-application/data-fetching)

### React Hooks
- [useState](https://react.dev/reference/react/useState)
- [useCallback](https://react.dev/reference/react/useCallback)
- [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

### Tailwind CSS
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Utility-First](https://tailwindcss.com/docs/utility-first)

---

## ✅ Checklist Before Launching

- [ ] Update clinic name and details
- [ ] Replace all dummy images with real photos
- [ ] Add Google Maps API key
- [ ] Update doctor information
- [ ] Update services and conditions
- [ ] Add testimonials (real patient reviews)
- [ ] Test appointment form submission
- [ ] Test WhatsApp integration
- [ ] Test responsive design on mobile
- [ ] Set up analytics (Google Analytics)
- [ ] Configure domain and HTTPS
- [ ] Set up email notifications for appointments
- [ ] Test on different browsers
- [ ] Run lighthouse audit

---

## 🚀 Quick Start Summary

```bash
# 1. Install dependencies
npm install

# 2. Create .env.local with your API key
echo "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=YOUR_KEY" > .env.local

# 3. Start development server
npm run dev

# 4. Open http://localhost:3000 in browser

# 5. Make changes and they'll auto-refresh

# 6. Build for production
npm run build
npm start
```

---

**Created with ❤️ for aaaa ggggg clinic**
