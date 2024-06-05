import * as React from 'react';
import Image from "next/image";
import DiscoverOurHomes from "@/components/DiscoverOurHomes";
import ContactForm from "@/components/ContactForm";
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="mx-auto" aria-labelledby="hero-heading">
        <div className="flex justify-center items-center">
          {/*todo this might need fixing on edge and chrome on windows*/}
          <Image
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="
            src="https://assets.unegma.net/mycoastalhost.com/mycoastalhost-hero-sm2.jpg"
            className="min-w-full h-auto lg:px-8"
            height={626}
            width={1600}
            alt="My Coastal Host Hero Image, a view of the witterings"
            // style={{
            //   maxWidth: "100%",
            //   height: "auto"
            // }}
          />
        </div>

        <header className="flex justify-center items-center pt-14 pb-8">
          <h1 id="hero-heading" className="text-center text-3xl sm:text-3xl md:text-3xl lg:text-4xl">
            Creating unforgettable experiences<br className="hidden sm:inline-block" /> in the Witterings, West Sussex
          </h1>
        </header>

        <div className="flex justify-center items-center pb-12">
          <Link
            aria-label="Read more about the witterings as an area in general"
            href="/explore-the-witterings"
            className="button text-xl"
          >
            Explore the Witterings
          </Link>
        </div>
      </section>

      {/* Discover Our Homes Section */}
      <DiscoverOurHomes />

      {/* Images Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 py-0 md:py-4">
        <div className="col-span-1">
          <Image
            src="https://assets.unegma.net/mycoastalhost.com/witterings1.jpg"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="
            className="px-4 pt-6 md:p-0 w-full h-auto"
            height={700}
            width={700}
            alt="Witterings beach Image"
          />
        </div>
        <div className="col-span-1">
          <Image
            src="https://assets.unegma.net/mycoastalhost.com/witterings2.jpg"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="
            className="px-4 pt-2 md:p-0 w-full h-auto"
            height={700}
            width={700}
            alt="Witterings sign post image"
          />
        </div>
        <div className="col-span-1">
          <Image
            src="https://assets.unegma.net/mycoastalhost.com/witterings3.jpg"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="
            className="px-4 pt-2 md:p-0 w-full h-auto"
            height={700}
            width={700}
            alt="Witterings beach image with sign"
          />
        </div>
        <div className="col-span-1">
          <Image
            src="https://assets.unegma.net/mycoastalhost.com/witterings4.jpg"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="
            className="px-4 pt-2 pb-6 md:p-0 w-full h-auto"
            height={700}
            width={700}
            alt="Beach image with sunset"
          />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-secondary" aria-labelledby="contact-form-heading">
        <div className="flex justify-center items-center py-10 flex-col">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
