import Image from "next/image";
import { properties } from "@/app/variables";
import Link from 'next/link';
import VideoComponent from "@/components/VideoComponent";
import * as React from "react";

/**
 * PropertyGrid
 * This template is used on the home page and at the bottom of explore the witterings.
 * @constructor
 */
export default function PropertyGrid() {
  return (
    <section className="mx-auto px-0 py-8" aria-labelledby="property-grid-heading">
      <header>
        <h2 id="property-grid-heading" className="sr-only">Property Listings</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {properties.map((property, index) => (
          <article key={index} className="relative overflow-hidden" aria-labelledby={`property-title-${index}`}>
            <div className="flex flex-col justify-center p-1 bg-white text-center">
              <div className="opacity-100 brightness-50">
                <VideoComponent src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/flythrough2.mp4`} />
              </div>

              <header className="absolute flex flex-col justify-center items-center w-full">
                <h3 id={`property-title-${index}`} className="inline-block leading-10 mt-2 text-3xl text-white">{property.name}</h3>
                <h4 className="mb-3 text-gray-100">{property.description}</h4>
              </header>
              {/*<p className="text-gray-400">{property.price}</p>*/}
              {/*<p className="text-gray-600">{property.guests} • {property.beds} • {property.features}</p>*/}
              {/*<div className="flex justify-center">*/}
              {/*  <Link className="block button mt-8 mb-2 max-w-fit" href={property.url} aria-label={`View more information about the ${property.name} location`}>*/}
              {/*    View*/}
              {/*  </Link>*/}
              {/*</div>*/}
            </div>
            <div className="relative w-full">
              {/*<Link href={property.url} aria-label={`View details of ${property.name}`}>*/}
              {/*  <Image*/}
              {/*    src={property.imageMainUrlT}*/}
              {/*    placeholder="blur"*/}
              {/*    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="*/}
              {/*    alt={`${property.name} Image ${property.miniDescription}`}*/}
              {/*    width={700}*/}
              {/*    height={460}*/}
              {/*    style={{*/}
              {/*      minWidth: "100%",*/}
              {/*      height: "auto"*/}
              {/*    }}*/}
              {/*  />*/}
              {/*</Link>*/}
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}
