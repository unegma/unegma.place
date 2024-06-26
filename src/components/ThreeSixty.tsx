import PropertyGrid from "@/components/PropertyGrid";
import * as React from "react";
import Link from 'next/link';

/**
 * DiscoverOurHomes
 * This template is used on the /where-to-stay page
 *
 * @constructor
 */
export default function ThreeSixty({properties}: any) {
  return (
    <section className="" aria-labelledby="spaces-heading">
      <div className="mx-auto px-6 md:px-20 py-6">
        <header className="flex justify-center items-center pt-12 pb-4">
          <h1 id="spaces-heading" className="text-center leading-10 text-3xl sm:text-2xl md:text-3xl lg:text-4xl">
            Digital Reconstructions
          </h1>
        </header>

        <PropertyGrid properties={properties.digital} />

        {/*<div className="flex justify-center items-center pb-6 pt-4">*/}
        {/*  <Link aria-label="See all homes available at our locations" href="/where-to-stay" className="button-black text-xl">*/}
        {/*    All Homes*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}
