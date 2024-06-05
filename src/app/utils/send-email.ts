import { FormData } from '@/components/ContactForm';

export async function sendEmail(data: FormData): Promise<boolean> {
  const apiEndpoint = '/api/email';

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result.message === 'Email sent';
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}
