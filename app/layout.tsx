import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Tajawal } from 'next/font/google'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['200', '500'],
  variable: '--font-tajawal',
});

export const metadata: Metadata = {
  title: 'Alphadhad x - AX',
  description: 'Be part of Alphadhad x community - Be BOLD!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className={`${geistSans.variable} ${geistMono.variable} ${tajawal.variable}`}>
      <body className="rtl">{children}</body>
    </html>
  )
}
