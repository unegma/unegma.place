'use client';

import Image, { StaticImageData } from "next/image";
import Lightbox, {
  useLightboxProps,
  useLightboxState,
} from "yet-another-react-lightbox";
import * as React from "react";

export function NextJsImage({ slide, offset }: any) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();

  const { currentIndex } = useLightboxState();

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Image
        fill
        alt={slide.description}
        src={slide.url}
        loading="eager"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNkM2QzZDMiIC8+Cjwvc3ZnPgo="
        placeholder="blur"
        draggable={false}
        style={{
          objectFit: "contain",
          cursor: click ? "pointer" : undefined,
        }}
        // todo may need this for different screen sizes
        // sizes={`${Math.ceil((100 / window.innerWidth) * 100)}vw`}
        onClick={
          offset === 0 ? () => click?.({ index: currentIndex }) : undefined
        }
      />
    </div>
  );
}


export default function LightBoxSlides({name, thumbnails, mainImage, description}: any) {
  const [open, setOpen] = React.useState(false);
  const [slideIndex, setSlideIndex] = React.useState(0);

  // todo for some reason, the sub properties don't seem to show if I pass `property` (property.thumbnails is undefined)

  return (
    <>
      {/*{ thumbnails && (*/}
        <>

          {thumbnails.map((thumbnail: any, index: any) => (
            <Image
              onClick={() => { setSlideIndex(index), setOpen(true)}}
              key={index}
              src={thumbnail.url}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="
              className="w-full h-auto cursor-pointer"
              height={460}
              width={700}
              alt={`${name} Image ${thumbnail.description}`}
            />
          ))}


          {/*cant have this in front of the auto generated thumbnails because the slides themselves are passed to lightbox. this slide might not show when using left and right through the slides*/}
          <Image
            onClick={() => { setSlideIndex(9), setOpen(true)}}
            key={9}
            src={mainImage}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDEwIDEwIj4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItNTAlIiB5PSItNTAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAiPgogICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMyIgLz4KICA8L2ZpbHRlcj4KICA8cmVjdCB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNjY2NjY2MiIGZpbHRlcj0idXJsKCNibHVyKSIgLz4KPC9zdmc+Cg=="
            className="w-full h-auto cursor-pointer md:hidden"
            height={460}
            width={700}
            alt={`${name} Image ${description}`}
          />

          <Lightbox
            open={open}
            index={slideIndex}
            on={{ view: ({ index: currentIndex }) => setSlideIndex(currentIndex) }}
            close={() => setOpen(false)}
            slides={[...thumbnails, {description: description, url: mainImage}]}
            render={{ slide: NextJsImage }}
          />
        </>
      {/*)}*/}
    </>
  )
}
