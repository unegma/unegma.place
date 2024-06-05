import * as React from 'react';
import Markdown from '../../components/Markdown';
import privacy from '../../components/privacy.md';

export default function TasksPage() {
  return (
    <div className="container mt-8 lg:mt-20">
      <header>
        <h1 className="mb-6">Privacy Policy (<a className="underline" target="_blank" href="https://unegma.com" rel="noopener noreferrer">Unegma LTD</a>)</h1>
      </header>
      <section>
        <article>
          <Markdown className="p-1">{privacy}</Markdown>
        </article>
      </section>
    </div>
  );
}
