'use client'

import Image from "next/image";
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import * as React from "react";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Email, Facebook, Instagram } from "@mui/icons-material";
import { properties } from "@/app/variables";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header id="top" aria-labelledby="site-header" className="">
      <nav className="mx-auto flex max-w-full justify-between items-center px-6 lg:px-8 py-5" aria-label="Global">
        <div className="flex">
          <Link href="/" onClick={closeMobileMenu} className="">
            <span id="site-header" className="sr-only">{process.env.NEXT_PUBLIC_TITLE}</span>
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/tiny-logo.png`}
              className="mr-6 -mt-1 opacity-80"
              height={40}
              width={40}
              alt={`${process.env.NEXT_PUBLIC_TITLE} Logo`}
              // leave this here to prevent warning
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            {/*<p className="mr-10 text-center">unegma.place</p>*/}
          </Link>
        </div>

        {/*hamburger button*/}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>

        {/*dropdown menu*/}
        {/*todo have set this to black just in case something changes, but it seems like the black is being added from somewhere and not sure where */}
        <Popover.Group className="hidden items-center lg:grow lg:justify-between lg:flex lg:gap-x-12">
          <div className="flex space-x-4">
            {/*<Popover className="relative">*/}
            {/*  {({ close }) => (*/}
            {/*    <>*/}
            {/*      <Popover.Button className="flex items-center gap-x-1 leading-6 hover:text-gray-400">*/}
            {/*        Where to Stay*/}
            {/*        <ChevronDownIcon className="h-5 w-5 flex-none" aria-hidden="true" />*/}
            {/*      </Popover.Button>*/}

            {/*      <Transition*/}
            {/*        as={Fragment}*/}
            {/*        enter="transition ease-out duration-200"*/}
            {/*        enterFrom="opacity-0 translate-y-1"*/}
            {/*        enterTo="opacity-100 translate-y-0"*/}
            {/*        leave="transition ease-in duration-150"*/}
            {/*        leaveFrom="opacity-100 translate-y-0"*/}
            {/*        leaveTo="opacity-0 translate-y-1"*/}
            {/*      >*/}
            {/*        <Popover.Panel className="absolute text-black -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-1xl bg-white shadow-lg ring-1 ring-gray-900/5">*/}
            {/*          <div className="p-4">*/}
            {/*            <div className="group relative flex items-center gap-x-6 rounded-lg p-4 leading-6 hover:bg-gray-50">*/}
            {/*              <div className="flex-auto">*/}
            {/*                <Link href="/where-to-stay" className="block border-b-2" onClick={() => close()}>*/}
            {/*                  All Homes*/}
            {/*                  <span className="absolute inset-0" />*/}
            {/*                </Link>*/}
            {/*              </div>*/}
            {/*            </div>*/}
            {/*            {properties.map((property) => (*/}
            {/*              <div*/}
            {/*                key={property.name}*/}
            {/*                className="group relative flex items-center gap-x-6 rounded-lg p-4 leading-6 hover:bg-gray-50"*/}
            {/*              >*/}
            {/*                <div className="flex-auto">*/}
            {/*                  <Link href={property.url} className="block" onClick={() => close()}>*/}
            {/*                    {property.name}*/}
            {/*                    <span className="absolute inset-0" />*/}
            {/*                  </Link>*/}
            {/*                </div>*/}
            {/*              </div>*/}
            {/*            ))}*/}
            {/*          </div>*/}
            {/*        </Popover.Panel>*/}
            {/*      </Transition>*/}
            {/*    </>*/}
            {/*  )}*/}
            {/*</Popover>*/}

            {/*<Link href="/explore-the-witterings" className="leading-6 hover:text-gray-400" onClick={closeMobileMenu}>*/}
            {/*  Explore the Witterings*/}
            {/*</Link>*/}

            <Link href="/about" className="leading-6 hover:text-gray-400" onClick={closeMobileMenu}>
              About
            </Link>
          </div>

          {/*right menu*/}
          <div className="flex space-x-4">
            <Link href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER_INTERNATIONAL}`} className="flex flex-row leading-6 hover:text-gray-400" onClick={closeMobileMenu}>
              <PhoneIphoneIcon className="mx-2" />
              <span className="hidden md:block text-gray-700">{process.env.NEXT_PUBLIC_PHONE_NUMBER}</span>
            </Link>
            <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`} className="flex flex-row leading-6 hover:text-gray-400" onClick={closeMobileMenu}>
              <Email className="mx-2" />
              <span className="hidden md:block text-gray-700">{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</span>
            </Link>
          </div>
        </Popover.Group>
      </nav>

      {/*mobile menu*/}
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        {/*todo have set this to black just in case something changes, but it seems like the black is being added from somewhere and not sure where */}
        <Dialog.Panel className="fixed text-black inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 text-xl">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={closeMobileMenu} className="">
              <span className="sr-only">{process.env.NEXT_PUBLIC_TITLE}</span>
              {/*<Image*/}
              {/*  height={30}*/}
              {/*  width={30}*/}
              {/*  src="https://assets.unegma.net/mycoastalhost.com/logo-small-nopadding.png"*/}
              {/*  className="-mt-1"*/}
              {/*  alt="{process.env.NEXT_PUBLIC_TITLE} Logo"*/}
              {/*  // leave this here to prevent warning*/}
              {/*  style={{*/}
              {/*    maxWidth: "100%",*/}
              {/*    height: "auto",*/}
              {/*  }}*/}
              {/*/>*/}
            </Link>
            <button
              type="button"
              // the padding and margin trick is to give more clickable area
              className="-m-2.5 rounded-md p-2.5"
              onClick={closeMobileMenu}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/*<Disclosure as="div" className="-mx-3">*/}
                {/*  {({ open }) => (*/}
                {/*    <>*/}
                {/*      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 leading-7 hover:bg-gray-50">*/}
                {/*        Where to Stay*/}
                {/*        <ChevronDownIcon*/}
                {/*          className={classNames(open ? 'rotate-180' : '', 'h-7 w-7 flex-none')}*/}
                {/*          aria-hidden="true"*/}
                {/*        />*/}
                {/*      </Disclosure.Button>*/}
                {/*      <Disclosure.Panel className="mt-2 space-y-2">*/}
                {/*        <Disclosure.Button*/}
                {/*          as="a"*/}
                {/*          href="/where-to-stay"*/}
                {/*          className="block rounded-lg py-2 pl-6 pr-3 leading-7 hover:bg-gray-50 border-b-2"*/}
                {/*          onClick={closeMobileMenu}*/}
                {/*        >*/}
                {/*          All Homes*/}
                {/*        </Disclosure.Button>*/}
                {/*        {[...properties].map((property) => (*/}
                {/*          <Disclosure.Button*/}
                {/*            key={property.name}*/}
                {/*            as="a"*/}
                {/*            href={property.url}*/}
                {/*            className="block rounded-lg py-2 pl-6 pr-3 leading-7 hover:bg-gray-50"*/}
                {/*            onClick={closeMobileMenu}*/}
                {/*          >*/}
                {/*            {property.name}*/}
                {/*          </Disclosure.Button>*/}
                {/*        ))}*/}
                {/*      </Disclosure.Panel>*/}
                {/*    </>*/}
                {/*  )}*/}
                {/*</Disclosure>*/}
                {/*<Link*/}
                {/*  href="/explore-the-witterings"*/}
                {/*  className="-mx-3 block rounded-lg px-3 py-2 leading-7 hover:bg-gray-50"*/}
                {/*  onClick={closeMobileMenu}*/}
                {/*>*/}
                {/*  Explore the Witterings*/}
                {/*</Link>*/}
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 leading-7 hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER_INTERNATIONAL}`}
                  className="-mx-3 block rounded-lg px-3 py-2 leading-7 hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  <PhoneIphoneIcon className="mr-2" />
                  <span>{process.env.NEXT_PUBLIC_PHONE_NUMBER}</span>
                </Link>
                <Link
                  href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
                  className="-mx-3 block rounded-lg px-3 py-2 leading-7 hover:bg-gray-50"
                  onClick={closeMobileMenu}
                >
                  <Email className="mr-2" />
                  <span>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</span>
                </Link>
              </div>

              <div className="py-6">
                <div className="flex justify-start items-center gap-4">
                  <Link
                    target="_blank"
                    href={`${process.env.NEXT_PUBLIC_FACEBOOK_LINK}`}
                    aria-label="{process.env.NEXT_PUBLIC_TITLE} Facebook link"
                    className="flex justify-center items-center p-2 rounded-full border-2 border-gray-800"
                    onClick={closeMobileMenu}
                  >
                    <Facebook style={{ fontSize: '2rem' }} className="text-gray-800" />
                  </Link>
                  <Link
                    target="_blank"
                    href={`${process.env.NEXT_PUBLIC_INSTAGRAM_LINK}`}
                    aria-label="{process.env.NEXT_PUBLIC_TITLE} Instagram link"
                    className="flex justify-center items-center p-2 rounded-full border-2 border-gray-800"
                    onClick={closeMobileMenu}
                  >
                    <Instagram style={{ fontSize: '2rem' }} className="text-gray-800" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
