import type { Metadata } from 'next'
import * as React from 'react';
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

// remember to add any new fonts to the html tag and tailwind config and globals.css
import {Inter, Montserrat, Albert_Sans, Prata, Meow_Script} from 'next/font/google';
const inter = Inter({ variable: '--font-inter', display: 'swap', subsets: ['latin'] })
const montserrat = Montserrat({ variable: '--font-montserrat', display: 'swap', subsets: ['latin'] });
const prata = Prata({ variable: '--font-prata', display: 'swap', weight: "400", subsets:['latin']});
const albertSans = Albert_Sans({ variable: '--font-albert-sans', display: 'swap', subsets: ['latin'] });
const meow = Meow_Script({ weight: "400",variable: '--font-meow', display: 'swap', subsets: ['latin'] });

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Head from "next/head";

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_TITLE} | ${process.env.NEXT_PUBLIC_TITLE_POSTFIX}`,
  description: `${process.env.NEXT_PUBLIC_DESCRIPTION}`,
  // charset: 'UTF-8', // todo check this is added automatically
  // viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: `${(process.env.NODE_ENV === 'production') ? process.env.NEXT_PUBLIC_BASE_URL : process.env.NEXT_PUBLIC_DEV_BASE_URL}/android-chrome-192x192.png`, type: 'image/png', sizes: '192x192' },
      { url: `${(process.env.NODE_ENV === 'production') ? process.env.NEXT_PUBLIC_BASE_URL : process.env.NEXT_PUBLIC_DEV_BASE_URL}/android-chrome-384x384.png`, rel: 'apple-touch-icon' },
      { url: `${process.env.NEXT_PUBLIC_ASSETS_URL}/logo-small.png`, rel: 'apple-touch-icon' },
    ],
  },
  // themeColor: '#000000', // todo is this added automatically?
  // stylesheet: [
  //   // 'https://rsms.me/inter/inter.css',
  //   // todo check if this is needed
  //   '/globals.css'
  // ],
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_TITLE}`,
    description: `${process.env.NEXT_PUBLIC_DESCRIPTION}`,
    url: `${(process.env.NODE_ENV === 'production') ? process.env.NEXT_PUBLIC_BASE_URL : process.env.NEXT_PUBLIC_DEV_BASE_URL}`,
    type: 'website',
    locale: 'en_GB',
    siteName: `${process.env.NEXT_PUBLIC_TITLE}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SHARED_ASSETS_URL}/unegma-logos/unegma-place-logo.png`,
        width: 400,
        height: 400,
        alt: `${process.env.NEXT_PUBLIC_TITLE} Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: `${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`,
    creator: '@unegma',
    title: `${process.env.NEXT_PUBLIC_TITLE}`,
    description: `${process.env.NEXT_PUBLIC_DESCRIPTION}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SHARED_ASSETS_URL}/unegma-logos/unegma-place-logo.png`,
        width: 400,
        height: 400,
        alt: `${process.env.NEXT_PUBLIC_TITLE} Logo`,
      },
    ],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`flex flex-col min-h-screen ${inter.variable} ${albertSans.variable} ${prata.variable} ${montserrat.variable} ${meow.variable}`}>

    {process.env.NODE_ENV === 'production' && (
      <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
    )}

    {/* todo can also set the base font color in globals.css, but have set on the body tag */}
    {/*inter.className is applying inter to everything in that case. the others are added in globals.css*/}
    <body className={`flex flex-col flex-grow text-grey-700`}>

    {/*this div is a quick fix for the menu bar to close properly when clicking outside of it*/}
      <div>
        <Header />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </div>

      <CookieConsent />
      {/* Google Tag Manager (noscript) */}
      {process.env.NODE_ENV === 'production' && (
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                  height="0" width="0" className="hidden invisible"></iframe>
        </noscript>
      )}
    </body>
    </html>
  );
}
