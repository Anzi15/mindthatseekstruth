import { NextResponse } from 'next/server';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);

export async function POST(req) {
  try {
    // Get the Mailgun API key from headers
    const apiKey = req.headers.get('x-mailgun-api-key');
    console.log(apiKey)
    
    if (!apiKey) {
      return NextResponse.json(
        { message: 'Missing API key in headers' },
        { status: 400 }
      );
    }

    const mg = mailgun.client({
      username: 'api',
      key: apiKey,  // Use the API key from headers
    });

    const body = await req.json();
    const { recipient, subject, content } = body;

    if (!recipient || !subject || !content) {
      return NextResponse.json(
        { message: 'Missing required fields: recipient, subject, or content.' },
        { status: 400 }
      );
    }

    const response = await mg.messages.create('mindthatseekstruth.com', {
      from: 'Mehran Dadhbeh <noreply@mindthatseekstruth.com>',
      to: [recipient],
      subject,
      text: content,
      html: `<p>${content}</p>`,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', response },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: error.message },
      { status: 500 }
    );
  }
}
