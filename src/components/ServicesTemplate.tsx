import * as React from 'react';
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import LightBoxSlides from "./LightBoxSlides";
import {Metadata} from "next";


export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_TITLE} ${process.env.NEXT_PUBLIC_TITLE_POSTFIX}`,
  description: `${process.env.NEXT_PUBLIC_DESCRIPTION} - Where to Stay`
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
      <section className="mx-auto" aria-labelledby="property-image-heading">
        <header className="flex justify-center items-center">
          <h2 id="property-image-heading" className="sr-only">{property.name} Image</h2>
          <Image
            className="min-w-full h-auto lg:px-8"
            src={property.imageMainUrlSm2}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="
            height={626}
            width={1600}
            alt={`${property.name} Image ${property.miniDescription}`}
          />
        </header>
      </section>

      {/* Property Details Section */}
      <section className="container mx-auto" aria-labelledby="property-details-heading">
        <header>
          <h2 id="property-details-heading" className="sr-only">{property.name} Details</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:p-10 gap-2 md:gap-10">
          <div className="text-left md:text-right md:px-4">
            <h1 className="pb-2 uppercase text-6xl md:text-5xl lg:text-6xl" aria-labelledby="property-name-heading">{property.name}</h1>
            <h2 id="property-name-heading" className="pb-2 leading-9">{property.miniDescription}</h2>
            <h3 className="text-gray-500 pb-3">{property.price}</h3>
          </div>
          <div>
            {/*{property.titleDescription.map((part: any, index: any) => (*/}
            {/*  <p key={index} className="pb-6">{part}</p>*/}
            {/*))}*/}
          </div>
        </div>
        <div className="flex flex-row items-center justify-center mb-12 -mt-5">
          <Link className="button" href="#contact">
            Get in Touch to Book
          </Link>
        </div>
      </section>

      {/* Reviews Section */}
        { property.reviews && property.reviews.length > 0 && (
        <section aria-labelledby="reviews-heading">
          <header>
            <h2 id="reviews-heading" className="sr-only">Reviews</h2>
          </header>
        </section>
      )}

      {/* Thumbnails Section */}
      <section aria-labelledby="thumbnails-heading">
        <header>
          <h2 id="thumbnails-heading" className="sr-only">Thumbnails</h2>
        </header>
        <div className="container grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-3 gap-4 py-20">
          {/*<LightBoxSlides name={property.name} thumbnails={property.thumbnails} mainImage={property.imageMainUrl} description={property.description} />*/}
        </div>
      </section>

      {/* Amenities Section */}
      <section className="bg-tertiary" aria-labelledby="amenities-heading">
        <header>
          <h2 id="amenities-heading" className="sr-only">Amenities</h2>
        </header>
        <div className="container grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-3 gap-4 py-20">
          {/*{property.amenities.map((amenity: any, index: any) => (*/}
          {/*  <article key={index} className="py-2 md:py-6">*/}
          {/*    <Image*/}
          {/*      className="pb-2"*/}
          {/*      src={amenity.icon}*/}
          {/*      placeholder="blur"*/}
          {/*      blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlvdj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="*/}
          {/*      height={60}*/}
          {/*      width={60}*/}
          {/*      alt={`${amenity.title} ${amenity.description}`}*/}
          {/*    />*/}
          {/*    <h3 className="leading-7 mb-1 mt-2 md:leading-9">{amenity.title}</h3>*/}
          {/*    <p className="">{amenity.description}</p>*/}
          {/*  </article>*/}
          {/*))}*/}
        </div>
      </section>

      {/* Map Section */}
      <section aria-labelledby="map-heading">
        <header>
          <h2 id="map-heading" className="sr-only">Location Map</h2>
        </header>
        <div className="container py-20">
          <iframe
            height={400}
            className="w-full"
            title={`${property.name} Location Map`}
            src={property.mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
