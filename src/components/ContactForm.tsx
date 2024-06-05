'use client'
import { sendEmail } from '@/app/utils/send-email';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export type FormData = {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errored, setErrored] = useState<boolean>(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const result = await sendEmail(data);

      if (result) {
        setSubmitted(true);
      } else {
        setErrored(true);
      }
    } catch (error) {
      setErrored(true);
    } finally {
      // dont do this or the form shows again
      // setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-form-heading" className="w-full max-w-lg mx-auto mt-10 mb-12 px-6 sm:px-0">
      <header>
        <h1 id="contact-form-heading" className="text-center mb-6">Get In Touch</h1>
      </header>
      <article>
        {(!isSubmitting && !submitted) && (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6" aria-live="polite">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                {...register('name', { required: "Don't forget your name!" })}
                type="text"
                placeholder="Name"
                className="w-full text-xl bg-transparent border-0 border-b-2 border-gray-700 focus:border-black focus:outline-none placeholder-black"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                id="email"
                {...register('email', { required: `If you'd prefer to call us, our number is at the top of the page!` })}
                type="email"
                placeholder="Email Address"
                className="w-full text-xl bg-transparent border-0 border-b-2 border-gray-700 focus:border-black focus:outline-none placeholder-black"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                {...register('message', { required: "Don't forget to let us know what you want to say!" })}
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full text-xl bg-transparent border-0 border-b-2 border-gray-700 focus:border-black focus:outline-none placeholder-black"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <button type="submit" className="button-black px-4 py-2 text-xl" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}

        {isSubmitting && !submitted && (
          <p className="text-center" aria-live="polite">Submitting...</p>
        )}

        {submitted && !errored && (
          <p className="text-center" aria-live="polite">Thank you for your message. We will be in touch! <br/><br/><span className="meow text-3xl">Dave</span></p>
        )}

        {errored && (
          <p className="text-center text-red-500" aria-live="polite">An error occurred (sorry about that). Please email us directly at {process.env.NEXT_PUBLIC_EMAIL_ADDRESS}.</p>
        )}
      </article>
    </section>
  );
};

export default ContactForm;
