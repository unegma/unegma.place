import * as React from 'react';
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Link from 'next/link';
import VideoComponent from "@/components/VideoComponent";
import Flythroughs from "@/components/Flythroughs";
import LidarScans from "@/components/LidarScans";
import ThreeSixty from "@/components/ThreeSixty";

export default function HomePage() {

  return (
    <>
      {/* Hero Section */}
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

          <header className="text-white absolute px-10 md:px-40 z-10">
            <h1 id="hero-heading" className="uppercase bold mb-5 text-center text-2xl leading-snug sm:text-3xl sm:leading-snug md:text-5xl md:leading-snug lg:text-6xl ">
              {process.env.NEXT_PUBLIC_TITLE_POSTFIX}
            </h1>
            <p className="montserrat hidden sm:block text-center text-sm sm:text-lg md:text-2xl lg:text-2xl">
              {process.env.NEXT_PUBLIC_DESCRIPTION}
            </p>
          </header>

          <div className="opacity-100 brightness-50 w-full">
            <VideoComponent src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/flythrough2.mp4`} />
          </div>
        </div>
      </section>

      {/* Discover Our Homes Section */}
      <Flythroughs />
      <LidarScans />
      <ThreeSixty />

      {/* Contact Form Section */}
      <section className="bg-secondary" aria-labelledby="contact-form-heading">
        <div className="flex justify-center items-center py-10 flex-col">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
