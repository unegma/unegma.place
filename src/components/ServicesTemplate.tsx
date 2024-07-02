import * as React from 'react';
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import LightBoxSlides from "./LightBoxSlides";
import {Metadata} from "next";
import VideoComponent from "@/components/VideoComponent";


export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_TITLE} ${process.env.NEXT_PUBLIC_TITLE_POSTFIX}`,
  description: `${process.env.NEXT_PUBLIC_DESCRIPTION} - Our Services`
}

/**
 * WhereTemplate
 *
 * This is the template for the Where page.
 * /where-to-stay/downsea
 *
 * @param property
 * @constructor
 */
export default function ServicesTemplate({ property }: any) {
  return (
    <>
      {/* Hero Section */}
      {/*<section className="mx-auto" aria-labelledby="property-image-heading">*/}
      {/*  <header className="flex justify-center items-center">*/}
      {/*    <h2 id="property-image-heading" className="sr-only">{property.name} Image</h2>*/}
      {/*    <Image*/}
      {/*      className="min-w-full h-auto lg:px-8"*/}
      {/*      src={property.imageMainUrlSm2}*/}
      {/*      placeholder="blur"*/}
      {/*      blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="*/}
      {/*      height={626}*/}
      {/*      width={1600}*/}
      {/*      alt={`${property.name} Image ${property.miniDescription}`}*/}
      {/*    />*/}
      {/*  </header>*/}
      {/*</section>*/}



      <section className="mx-auto" aria-labelledby="hero-heading">
        <div className="flex justify-center items-center">
          {/*todo this might need fixing on edge and chrome on windows*/}
          {/*<Image*/}
          {/*  priority*/}
          {/*  placeholder="blur"*/}
          {/*  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="*/}
          {/*  src="https://assets.unegma.net/mycoastalhost.com/mycoastalhost-hero-sm2.jpg"*/}
          {/*  className="min-w-full h-auto lg:px-8"*/}
          {/*  height={626}*/}
          {/*  width={1600}*/}
          {/*  alt="My Coastal Host Hero Image, a view of the witterings"*/}
          {/*  // style={{*/}
          {/*  //   maxWidth: "100%",*/}
          {/*  //   height: "auto"*/}
          {/*  // }}*/}
          {/*/>*/}
        </div>

        {/*<header className="flex justify-center items-center pt-14 pb-8">*/}
        {/*  <h1 id="hero-heading" className="text-center text-3xl sm:text-3xl md:text-3xl lg:text-4xl">*/}
        {/*  </h1>*/}
        {/*</header>*/}

        <div className="flex justify-center items-center pb-0">
          {/*<Link*/}
          {/*  aria-label="Read more about the witterings as an area in general"*/}
          {/*  href="/explore-the-witterings"*/}
          {/*  className="button text-xl"*/}
          {/*>*/}
          {/*  Explore the Witterings*/}
          {/*</Link>*/}

          <header className="text-white absolute px-10 md:px-40 z-10 w-full">
            <h1 id="hero-heading" className="uppercase bold mb-5 text-center text-2xl leading-snug sm:text-3xl sm:leading-snug md:text-5xl md:leading-snug lg:text-5xl ">
              {property.name}
            </h1>
            <p className="montserrat hidden sm:block text-center text-sm sm:text-lg md:text-2xl lg:text-2xl">
              {property.description}
            </p>
          </header>

          <div className="opacity-100 brightness-50 w-full">
            <VideoComponent src={property.video} />
          </div>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="container mx-auto" aria-labelledby="property-details-heading">
        <header>
          <h2 id="property-details-heading" className="sr-only">{property.name} Details</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:p-10 gap-2 md:gap-10">
          <div className="text-left md:text-right md:px-4">
            <h1 className="pb-2 uppercase text-4xl md:text-3xl lg:text-3xl xl:text:4xl" aria-labelledby="property-name-heading">{property.name}</h1>
            <h2 id="property-name-heading" className="pb-2 leading-9 text-2xl">{property.miniDescription}</h2>
          </div>
          <div>
            {property.titleDescription.map((part: any, index: any) => (
              <p key={index} className="pb-6">{part}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-row items-center justify-center mb-12 -mt-5">
          <Link className="button" href="#contact">
            Get in Touch for Info
          </Link>
        </div>
      </section>





      {/* Contact Form Section */}
      {/* Contact Form Section */}
      <section className="bg-secondary">
        <div className="flex justify-center items-center py-10 flex-col">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
