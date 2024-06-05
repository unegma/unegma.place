import * as React from 'react';
import Link from 'next/link';
import Image from "next/image";
import { properties } from "@/app/variables";
import ContactForm from "@/components/ContactForm";

export default function WhereToStayPage() {
  return (
    <>

      <section className="bg-secondary">
        <article className="flex flex-col justify-center items-center container py-20 leading-6 xl:leading-8">
          <h1 className="mb-5">Homes</h1>
          <p className="text-center mb-6 xl:mb-0">
            Our homes are thoughtfully furnished and equipped with everything you need for a comfortable stay.
          </p>
          <p className="text-center mb-6 xl:mb-0">
            Whether you’re a lone traveller, looking for a romantic getaway or bringing the whole family, each property will make you feel at home.
          </p>
          <p className="text-center mb-6 xl:mb-0">
            We prioritise cleanliness, convenience, and a touch of luxury, ensuring you can unwind and enjoy every moment of your time here.
          </p>
        </article>
      </section>

      {/* Main Section */}
      <section className="container mx-auto pt-10 lg:pt-20">

        {properties.map((property, index) => (
          <article key={index} className="flex justify-center items-center mb-20" aria-labelledby={`property-title-${index}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <div className="mb-2">
                  <Link href={property.url}>
                    <Image
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="
                      className="w-full h-auto"
                      src={property.imageMainUrlT}
                      // layout="fill"
                      // objectFit="cover"
                      height={1060}
                      width={1600}
                      alt={`${property.name} Image ${property.miniDescription}`}
                      // style={{
                      //   maxWidth: "100%",
                      //   height: "auto"
                      // }}
                    />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Link href={property.url}>
                    <Image
                      src={property.thumbnails[1].url}
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="
                      className="w-full h-auto"
                      height={1060}
                      width={1600}
                      alt={`${property.name} Image ${property.thumbnails[1].description}`}
                    />
                  </Link>
                  <Link href={property.url}>
                    <Image
                      src={property.thumbnails[2].url}
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="
                      className="w-full h-auto"
                      height={1060}
                      width={1600}
                      alt={`${property.name} Image ${property.thumbnails[2].description}`}
                    />
                  </Link>
                </div>
              </div>

              <div className="md:pl-10">
                <h1 id={`property-title-${index}`} className="pb-2 mt-3 md:mt-0 uppercase text-gray-700">
                  <Link href={property.url}>{property.name}</Link>
                </h1>
                <div className="mb-3">
                  <p className="pb-6 text-gray-700 albert leading-7 md:leading-6 lg:leading-7 xl:leading-8">{property.description}</p>
                  <p className="text-gray-500 pb-5">{property.price}</p>
                  <p className="pb-3 prata text-xl md:text-xl lg:text-lg xl:text-xl md:leading-6 leading-8 lg:leading-7 xl:leading-8 text-gray-700">
                    {property.guests}<br />{property.beds}<br />{property.features}
                  </p>
                </div>
                <Link className="button" href={property.url}>
                  More Info
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Contact Form Section */}
      <section className="bg-secondary">
        <div className="flex justify-center items-center py-10 flex-col">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
