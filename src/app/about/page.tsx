import * as React from 'react';
import Link from 'next/link';
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col content-between">

      {/* Hero Section */}
      <section className="mx-auto" aria-labelledby="hero-heading">
        <div className="flex justify-center items-center">
          {/*todo this might need fixing on edge and chrome on windows*/}
          {/*<Image*/}
          {/*  priority*/}
          {/*  placeholder="blur"*/}
          {/*  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="*/}
          {/*  src="https://assets.unegma.net/mycoastalhost.com/dave.jpg"*/}
          {/*  className="min-w-full h-auto lg:px-8"*/}
          {/*  height={626}*/}
          {/*  width={1600}*/}
          {/*  alt="A picture of the founder Dave sitting on some stairs"*/}
          {/*  // style={{*/}
          {/*  //   maxWidth: "100%",*/}
          {/*  //   height: "auto"*/}
          {/*  // }}*/}
          {/*/>*/}
        </div>
      </section>

      {/* Section 1: About */}
      <section className="container mx-auto pt-10 lg:pt-20 mb-10" aria-labelledby="about-heading">
        <header className="flex flex-row justify-center">
          <h1 id="about-heading" className="mb-4">About</h1>
        </header>
        <article className="flex flex-col text-center justify-center">

          <br/>
          {/*<p>*/}
          {/*  We are committed to providing our guests with the best possible stay at our homes.<br />*/}
          {/*  Feel free to <a className="underline" href={`tel:${process.env.PHONE_NUMBER_INTERNATIONAL}`}>drop us a call</a>, we would love to share our passion for this beautiful part of the United Kingdom.<br />*/}
          {/*  We hope you will enjoy your stay, make unforgettable memories, and have plenty of great stories to tell for years to come.<br /><br />*/}
          {/*</p>*/}
          {/*<p className="meow text-4xl">Dave Holden</p>*/}
          {/*<p className="mt-4">*/}
          {/*  <Link href="/terms"><span className="underline">Click here</span> to read our terms and conditions.</Link><br /><br />*/}
          {/*</p>*/}
        </article>
      </section>

      {/* Section 2: Where to Find Us */}
      <section className="container mx-auto pt-20 mb-2" aria-labelledby="location-heading">
        <div className="flex flex-row justify-center">
          {/*<h2 id="location-heading" className="mb-8 pt-2">Where to find us</h2>*/}
        </div>
        <div className="flex flex-row justify-center">
          {/*<iframe*/}
          {/*  height={400}*/}
          {/*  className="w-full"*/}
          {/*  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174266.9322733805!2d-0.9877210517101149!3d50.77977447780302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48745125eca04c5b%3A0x6bd424999330e5b3!2sEast%20Wittering%2C%20Chichester!5e0!3m2!1sen!2suk!4v1716056535450!5m2!1sen!2suk"*/}
          {/*  loading="lazy"*/}
          {/*  referrerPolicy="no-referrer-when-downgrade"*/}
          {/*  aria-label="Map showing location of West Wittering"*/}
          {/*></iframe>*/}
        </div>
      </section>

      {/* Section 3: Contact Form */}
      <section className="flex justify-center items-center py-10 flex-col">
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="bg-secondary">
        <div className="flex justify-center items-center py-10 flex-col">
          <p className="albert">
            <Link target="_blank" href="https://unegma.com">made and hosted by <span className="underline">unegma</span></Link>
            <span> - our&nbsp;
              <Link href="/privacy" className="underline">privacy policy</Link>
            </span>
          </p>
        </div>
      </footer>

    </div>
  );
}
