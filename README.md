
REMEMBER TO PUT SSL TO FULL-STRICT (using custom rewrite matching hostname to strict)
Custom Domain Name for Next.js App on AWS
https://www.freecodecamp.org/news/how-to-deploy-a-next-js-app-with-custom-domain-on-aws-using-sst/
https://docs.sst.dev/start/nextjs

based on this
https://mui.com/premium-themes/onepirate/forgot-password/

---

## How to set it up (migrating)

ensure new favicon isnt in the public folder, but in src/app (no duplicate or there will be an error)

delete nextjs and sst folders (but not the sst config)
dont run `npx create-sst@latest`
do run `npm run-script dev` for local development (can use timhc22 as local - need to do after main deploy?)

create certificate in us-east-1 (N. Viginia) region (use for *.unegma.ai and unegma.ai)
use dns provider and add to cloudflare
add the certificate id to sst.config.ts

run `npm run-script deploy`

go to cloudfront and get the distribution domain name. add to cloudfare as a CNAME

leave ssl on flexible, but add config rule:
https://dash.cloudflare.com/ab8feb6f7b259f1cabdcd3c60a5a9aef/unegma.ai/rules/configuration-rules

rule name: Strict Rewrite, custom field expression, field hostname, equals unegma.x (can add ORs), then SSL to strict (might need to do the same for y.unegma.x)

---

output directory tree to ask chatgpt how it can be improved: 
`ls -R | grep -v -E '(\.next|\.open-next|\.sst|node_modules)' | awk '
/:$/&&f{s=$0;f=0}
/:$/&&!f{sub(/:$/,"");s=$0;f=1;next}
NF&&f{ print s"/"$0 }
'`

---


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Image Standards

the-dodo-main.jpg:      3200x2120
the-dodo-main-t.jpg:    2800x1840
the-dodo-main-sm2.jpg:  3200x1252
the-dodo-t1.jpg:        2800x1840
the-dodo-t9.jpg:        2800×1840

WHEN CHANGING IMAGES, REMEMBER TO UPDATE DESCRIPTIONS IN THE VARIABLES (FOR ALT TAGS AND SCREENREADERS)

Main Image
3200x2120: 1600x1060 pixels (high quality jpg) (grid)
3200x1252: 1600x626 (location header)


Thumbnail Image
2800x1840: 1400x920: 700x460 pixels (med quality jpg)

## todo

~~404 page~~
~~add aria stuff~~
add image optimisation for mobiles (Image component different sizes)

~~check the automatic sitemap generator is working~~

~~replace generate metadata https://nextjs.org/docs/app/api-reference/functions/generate-metadata~~

~~replace favicons https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons~~

~~serve fonts locally~~

check the suggestions from lighthouse

~~fix all bugs and suggestions in console~~

~~add priority to above fold images~~

add dynamic metadata so the pages share with different images

~~go over styles on individual property pages~~

~~aria checker https://www.experte.com/accessibility~~


~~delete unused classes from package.json~~

~~tidy code and maybe prettifier~~

do terms and conditions

~~final check of all todos~~

copyright?

~~go over main layout page and check things like meta tags~~

show dave the benchmarking


mobile menu: inject.js:1 [Deprecation] Listener added for a 'DOMNodeInserted' mutation event. This event type is deprecated, and will be removed from this browser very soon. Usage of this event listener will cause performance issues today, and represents a large risk of future site breakage. Consider using MutationObserver instead. See https://chromestatus.com/feature/5083947249172480 for more information.

add google analytics and register site to page insights or whatever it is called

add proper sizing to images?

~~add auto commit and version number change  after deploy~~

~~make google analytics only on production build, and make sure robots.txt blocks crawlers on dev version~~

double check that robots.txt is working correctly on prod build


~~dave needs to create an app password in google for the contact form~~

change the price to light grey on where to stay pages

fix the dev server link

ocean lodge text size
https://mycoastalhost.com/where-to-stay/ocean-grove

height of discover our homes on firefox

add contact form details for dev server

the bed for the ocean 

add lightbox so can open images in full screen

add the booking widget for downsea

pick out the best bits on the reviews?

make sure the share links are working with the separate pages

jack () kian


leading on disover our homes


might have some issues if wanting to deploy to prod whilst doing dev work (unless switch to another branch, but then there might be issues with the .sst folder, unless the prod and dev environments are set differently)

why is the 'thank you for your message' coming through in meow font on dev, maybe just a caching issue on firefox?

fix the share stuff for different pages and devices and platforms


MIGHT WANT TO TURN OFF CACHE ON CLOUDFLARE WHEN DEVELOPING


look into google tag manager and how to do google ads and in metaverse


redirect www.


add facebook app id and update previews in telegram and facebook etc


---


link google search console to analytics
https://analytics.google.com/analytics/web/?pli=1#/a314491645p441845473/admin/integrations/search-console/new
