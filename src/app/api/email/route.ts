import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { z } from 'zod';

// Define schema for request validation
const schema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(100),
  message: z.string().min(1).max(5000),
});

// todo think of additional security concerns such as rate limiting
// todo still doesn't seem to be using the production envirionment variables on the backend when deploying to dev. May need to add .env.prod
// todo this actually works on local version, so NODE_ENV will be related to production build (dev server is production build)

export async function POST(request: NextRequest) {
  try {
    // Parse and validate the request body
    const body = await request.json();
    const { email, name, message } = schema.parse(body);

    // Create transport using a secure email service
    const transport = nodemailer.createTransport({
      /*
       setting service as 'gmail' is same as providing these setings:
       host: "smtp.gmail.com",
       port: 465,
       secure: true
       If you want to use a different email provider other than gmail, you need to provide these manually.
       Or you can go use these well known services and their settings at
       https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
      */
      service: 'gmail',
      auth: {
        // todo check this is working on the backend
        user: process.env.NODE_ENV === 'production' ? process.env.MY_EMAIL : process.env.MY_EMAIL_DEV,
        pass: process.env.NODE_ENV === 'production' ? process.env.MY_PASSWORD : process.env.MY_PASSWORD_DEV,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.NODE_ENV === 'production' ? process.env.MY_EMAIL : process.env.MY_EMAIL_DEV,
      to: process.env.NODE_ENV === 'production' ? process.env.MY_EMAIL : process.env.MY_EMAIL_DEV,
      bcc: "tim+unegmaplace@unegma.com",
      // cc: email, (uncomment this line if you want to send a copy to the sender)
      subject: `[Unegma.Place] Message from ${name} (${email})`,
      text: message,
    };

    // Send email
    await transport.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json({ error: 'An error occurred while sending the email.' }, { status: 500 });
  }
}
