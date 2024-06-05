import Image from "next/image";
import { properties } from "@/app/variables";
import Link from 'next/link';

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
          <article key={index} className="overflow-hidden" aria-labelledby={`property-title-${index}`}>
            <div className="relative w-full">
              <Link href={property.url} aria-label={`View details of ${property.name}`}>
                <Image
                  src={property.imageMainUrlT}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="
                  alt={`${property.name} Image ${property.miniDescription}`}
                  width={700}
                  height={460}
                  style={{
                    minWidth: "100%",
                    height: "auto"
                  }}
                />
              </Link>
            </div>
            <div className="flex flex-col justify-center p-4 bg-white text-center min-h-80">
              <header>
                <h3 id={`property-title-${index}`} className="leading-10 mt-2 text-3xl">{property.name}</h3>
                <h4 className="mb-3">{property.location}</h4>
              </header>
              <p className="text-gray-400">{property.price}</p>
              <p className="text-gray-600">{property.guests} • {property.beds} • {property.features}</p>
              <div className="flex justify-center">
                <Link className="block button mt-8 mb-2 max-w-fit" href={property.url} aria-label={`View more information about the ${property.name} location`}>
                  View
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
