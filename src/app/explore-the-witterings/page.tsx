import * as React from 'react';
import Image from "next/image";
import DiscoverOurHomes from "@/components/DiscoverOurHomes";

export default function ExploreTheWitteringsPage() {
  return (
    <>
      <div className="container mx-auto pt-10 lg:pt-20">
        <header className="flex items-center mb-10 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl uppercase">Explore<br />The Witterings</h1>
        </header>

        {/* Section: The Beach */}
        <section aria-labelledby="the-beach" className="mb-20">
          <div className="flex items-center mb-8">
            <Image
              src={"https://assets.unegma.net/mycoastalhost.com/explore1.jpg"}
              priority
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="
              className="w-full h-auto"
              height={1060}
              width={1600}
              alt={`Explore the Witterings Image of a bench and the sea`}
            />
          </div>
          <article className="flex flex-col">
            <h2 id="the-beach" className="mb-3 uppercase">The Beach</h2>
            <p>Be honest, this is the reason you’re heading to the Witterings. Our stretch of sand joins together Bracklesham & East Wittering with the stunning blue flag beach at West Wittering. Enjoy a stroll and take in the view across The Solent to the Isle of Wight.</p>
          </article>
        </section>

        {/* Section: Watersports */}
        <section aria-labelledby="watersports" className="mb-20">
          <div className="flex items-center mb-8">
            <Image
              src={"https://assets.unegma.net/mycoastalhost.com/explore2.jpg"}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="
              className="w-full h-auto"
              height={1060}
              width={1600}
              alt={`Image of a person surfing on the ocean with a sign in the background`}
            />
          </div>
          <article className="flex flex-col">
            <h2 id="watersports" className="mb-3 uppercase">Watersports</h2>
            <p>The surf season generally spans from October – February, with the occasional odd fun day during the summer. It’s often calm and flat during the warmer months so the perfect time to launch a paddleboard or kayak.</p>
          </article>
        </section>

        {/* Section: Food & Drink */}
        <section aria-labelledby="food-and-drink" className="mb-20">
          <div className="flex items-center mb-8">
            <Image
              src={"https://assets.unegma.net/mycoastalhost.com/explore3.jpg"}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="
              className="w-full h-auto"
              height={1060}
              width={1600}
              alt={`Image of drifters bar in the shade of the day`}
            />
          </div>
          <article className="flex flex-col">
            <h2 id="food-and-drink" className="mb-3 uppercase">Food & Drink</h2>
            <p>You don’t have to go far to find some great places for eating out. You’ll find a mixture of classic seafood spots and more artisan options with a couple of fantastic coffee shops thrown in.</p>
          </article>
        </section>

        {/* Section: Holiday in Comfort */}
        <section aria-labelledby="holiday-in-comfort" className="mb-20">
          <div className="flex items-center mb-8">
            <Image
              src={"https://assets.unegma.net/mycoastalhost.com/explore4.jpg"}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="
              className="w-full h-auto"
              height={1060}
              width={1600}
              alt={`Image of a cosy bed in a pink room with a skylight`}
            />
          </div>
          <article className="flex flex-col">
            <h2 id="holiday-in-comfort" className="mb-3 uppercase">Holiday in Comfort</h2>
            <p>On that much needed break, you&apos;re going to want somewhere to retreat to each evening. A place to relax, recharge, and get that all-important goodnight&apos;s rest. Each of our Witterings homes come with comfort in mind so go ahead and see what we have to offer.</p>
          </article>
        </section>

        {/* Section: Sunsets */}
        <section aria-labelledby="sunsets" className="mb-20">
          <div className="flex items-center mb-8">
            <Image
              src={"https://assets.unegma.net/mycoastalhost.com/explore5.jpg"}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="
              className="w-full h-auto"
              height={1060}
              width={1600}
              alt={`Image of a surfboard with hire written on it and the sea in the background`}
            />
          </div>
          <article className="flex flex-col">
            <h2 id="sunsets" className="mb-3 uppercase">Sunsets</h2>
            <p>If you’re visiting during those warm summer evenings, then make sure to head down to the beach to enjoy the final hours of daylight. There’s nothing quite like being in the sea at sunset, whether you’re taking a dip or sat on a paddleboard, it certainly is a unique experience every time.</p>
          </article>
        </section>
      </div>

      <DiscoverOurHomes />
    </>
  );
}
