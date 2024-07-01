import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen -mt-10" aria-labelledby="not-found-heading">
      <header>
        <h1 id="not-found-heading" className="text-4xl">
          Not sure how you got here!
        </h1>
      </header>
      <div className="mt-4">
        <Link className="px-4 py-2 button" href="/" aria-label="Go back to the home page">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
