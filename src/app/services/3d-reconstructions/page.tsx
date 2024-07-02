import * as React from 'react';
import {properties} from "@/app/variables";
import WhereTemplate from "@/components/ServicesTemplate";
import {Metadata} from "next";

const property = properties.digital[0];

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_TITLE} - ${property.name} ${process.env.NEXT_PUBLIC_TITLE_POSTFIX}`,
  description: `${property.miniDescription}`,
  // charset: 'UTF-8', // todo check this is added automatically
  // viewport: 'width=device-width, initial-scale=1',
  // todo check this is added automatically from original metadata
  // icons: {
  //   icon: [
  //     { url: '/favicon.ico' },
  //     { url: `${(process.env.NODE_ENV === 'production') ? process.env.NEXT_PUBLIC_BASE_URL : process.env.NEXT_PUBLIC_DEV_BASE_URL}/android-chrome-192x192.png`, type: 'image/png', sizes: '192x192' },
  //     { url: `${(process.env.NODE_ENV === 'production') ? process.env.NEXT_PUBLIC_BASE_URL : process.env.NEXT_PUBLIC_DEV_BASE_URL}/android-chrome-384x384.png`, rel: 'apple-touch-icon' },
  //     { url: `${process.env.NEXT_PUBLIC_ASSETS_URL}/logo-small.png`, rel: 'apple-touch-icon' },
  //   ],
  // },
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_TITLE} - ${property.name}`,
    description: `${property.miniDescription}`,
    url: `${(process.env.NODE_ENV === 'production') ? process.env.NEXT_PUBLIC_BASE_URL : process.env.NEXT_PUBLIC_DEV_BASE_URL}${property.url}`,
    type: 'website',
    locale: 'en_GB',
    siteName: `${process.env.NEXT_PUBLIC_TITLE}`,
    images: [
      {
        url: ``,
        width: 700,
        height: 460,
        alt: `${property.name} - ${property.miniDescription}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: `${process.env.NEXT_PUBLIC_TWITTER_HANDLE}`,
    creator: '@unegma',
    title: `${process.env.NEXT_PUBLIC_TITLE} - ${property.name}`,
    description: `${property.miniDescription}`,
    images: [
      {
        url: ``,
        width: 700,
        height: 460,
        alt: `${property.name} - ${property.miniDescription}`,
      },
    ],
  },
};

export default function ThreeDReconstructions() {

  return (
    <section>
      <WhereTemplate property={property} />
    </section>
  );
}
