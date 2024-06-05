import * as React from 'react';
import Markdown from '../../components/Markdown';
import terms from '../../components/terms.md';

export default function TasksPage() {
  return (
    <div className="container mt-8 lg:mt-20">
      <header>
        <h1 className="mb-6">Terms and Conditions</h1>
      </header>
      <section>
        <article>
          <Markdown className="p-1">{terms}</Markdown>
        </article>
      </section>
    </div>
  );
}
