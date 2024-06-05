'use client'
import { FormatQuote } from "@mui/icons-material";
import * as React from "react";
import { useState } from "react";

export default function ReviewsTemplate({ reviews }: any) {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-tertiary">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 py-20">
        {reviews.map((review: any, index: any) => (
          <article key={index} className={`${index >= 1 && !isExpanded ? 'hidden md:block' : 'block'}`}>
            <div className="p-6">
              <p aria-hidden="true"><FormatQuote /></p>
              <blockquote className="albert bold text-lg">{review.content}</blockquote>
            </div>
          </article>
        ))}
        <div className="text-center">
          {reviews.length > 1 && !isExpanded && (
            <button
              onClick={toggleExpansion}
              className="md:hidden button"
              aria-expanded={isExpanded}
              aria-controls="review-list"
            >
              Read More
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
