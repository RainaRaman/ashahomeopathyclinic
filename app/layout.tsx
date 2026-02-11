import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Asha Homeopathy clinic - Homeopathy Services',
  description: 'Leading homeopathy clinic providing expert care and treatment for various diseases. Book your appointment today.',
  keywords: 'homeopathy, clinic, doctor, appointment, healing',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#2d5016" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
