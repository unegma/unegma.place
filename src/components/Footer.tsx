import Image from "next/image"
import Link from 'next/link';
import * as React from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Email, Facebook, Instagram, LocationOn } from "@mui/icons-material";
import {date} from "zod";

export default function Footer() {
  return (
    <footer className="py-4 mt-auto" aria-labelledby="footer-heading">
      <div className="container mx-auto px-4 pt-8">

        {/* Footer Heading for ARIA */}
        <h2 id="footer-heading" className="sr-only">Footer</h2>

        {/* Social Media Links */}
        <section className="container mx-auto px-4 mb-8 text-gray-700" aria-labelledby="social-media-heading">
          <header>
            <h3 id="social-media-heading" className="sr-only">Social Media Links</h3>
          </header>
          <nav className="flex justify-center items-center gap-4" aria-label="Social Media Links">
            {/*<Link*/}
            {/*  target="_blank"*/}
            {/*  href={`${process.env.NEXT_PUBLIC_FACEBOOK_LINK}`}*/}
            {/*  aria-label="My Coastal Host Facebook link"*/}
            {/*  className="flex justify-center items-center p-2 rounded-full border-2 border-gray-800"*/}
            {/*>*/}
            {/*  <Facebook style={{ fontSize: '1.5rem' }} className="text-gray-800" />*/}
            {/*</Link>*/}
            {/*<Link*/}
            {/*  target="_blank"*/}
            {/*  href={`${process.env.NEXT_PUBLIC_INSTAGRAM_LINK}`}*/}
            {/*  aria-label="My Coastal Host Instagram link"*/}
            {/*  className="flex justify-center items-center p-2 rounded-full border-2 border-gray-800"*/}
            {/*>*/}
            {/*  <Instagram style={{ fontSize: '1.5rem' }} className="text-gray-800" />*/}
            {/*</Link>*/}
          </nav>
        </section>

        {/* Contact Information */}
        {/*todo move to global font color (they arent being applied somehow)*/}
        <section className="pb-3 my-5 md:my-4 text-gray-800" aria-labelledby="contact-info-heading">
          <header>
            <h3 id="contact-info-heading" className="sr-only">Contact Information</h3>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/*<Link className="flex flex-col items-center" href={`/about#where-to-find-us`}>*/}
            {/*  <LocationOn style={{ fontSize: '1.6rem' }} className="mx-2 mb-2" />*/}
            {/*  <span className="text-lg text-center"></span>*/}
            {/*</Link>*/}
            {/*<Link className="flex flex-col items-center" href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER_INTERNATIONAL}`}>*/}
            {/*  <PhoneIphoneIcon style={{ fontSize: '1.6rem' }} className="mx-2 mb-2" />*/}
            {/*  <span className="text-lg">{process.env.NEXT_PUBLIC_PHONE_NUMBER}</span>*/}
            {/*</Link>*/}
            {/*<Link className="flex flex-col items-center" href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}>*/}
            {/*  <Email style={{ fontSize: '1.6rem' }} className="mx-2 mb-2" />*/}
            {/*  <span className="text-lg">{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</span>*/}
            {/*</Link>*/}
          </div>
        </section>

        {/* Logo */}
        <section className="flex justify-center items-center" aria-labelledby="logo-heading">
          <header>
            <h3 id="logo-heading" className="sr-only">Logo</h3>
          </header>
          <Link href="/#top">
            <Image
              src={`https://assets.unegma.net/shared/unegma-logos/unegma-logo-wide.png`}
              className="pb-1 pt-4 mb-10"
              height={57}
              width={250}
              alt={`${process.env.NEXT_PUBLIC_TITLE} Logo`}
              // todo this needs fixing on edge and chrome on windows
              style={{
                maxWidth: "100%",
                height: "auto"
              }}
            />
          </Link>
        </section>

        {/* Contact Information */}
        {/*todo move to global font color (they arent being applied somehow)*/}
        <section className="pb-3 my-5 md:my-4 text-gray-800" aria-labelledby="contact-info-heading">
          <header>
            <h3 id="contact-info-heading" className="sr-only">Contact Information</h3>
          </header>
          <div className="flex justify-end items-end">
            {/*todo add extra info to this tag, or maybe even use Link?*/}
            <p><span className="underline">unegma.place</span> &copy; is a subsidiary of <a className="underline" href="https://unegma.com" target="_blank">unegma.com</a></p>
          </div>
        </section>
      </div>
    </footer>
  );
}
