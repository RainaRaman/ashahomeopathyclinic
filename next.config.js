/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // This allows build to succeed even with ESLint warnings
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY',
    NEXT_PUBLIC_CLINIC_PHONE: '9999999999',
    NEXT_PUBLIC_CLINIC_WHATSAPP: '919999999999',
  },
};

module.exports = nextConfig;
