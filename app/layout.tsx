import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import ClientOnly from './components/ClientOnly';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
