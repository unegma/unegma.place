'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  return (
    <section
      aria-live="polite"
      aria-label="Cookie Consent"
      className={`flex flex-col fixed w-full bottom-0 sm:w-auto sm:bottom-4 sm:right-4 bg-white p-4 shadow-lg rounded-lg transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <p className="text-sm text-center">
        We use minimal cookies to help us understand where our<br/>
        visitors are travelling from in order to help improve our services.<br/>
        See more on our <Link className="underline" href={`/privacy`}>Privacy Policy</Link> and <Link className="underline" href={`/terms`}>Terms and Conditions</Link>.<br/>
        Made and hosted by <Link className="underline" href="https://unegma.com">Unegma LTD.</Link>
      </p>
      <button
        onClick={handleAccept}
        className="mt-2 px-4 py-2 button-black text-sm rounded"
        aria-label="Accept cookies"
      >
        Accept
      </button>
    </section>
  );
};

export default CookieConsent;
