import { ContactEmail } from '@/components/contact-email';
import { ContactFormSchema } from '@/lib/validation';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      message,
    } = ContactFormSchema.parse(body);

    const fullName = `${firstName} ${lastName}`.trim();

    const { data, error } = await resend.emails.send({
      from: 'Sanova Project Inquiry <inquiry@sanovawebsolutions.com>',

      to: ['aidanmarroyo@gmail.com'],

      replyTo: email,

      subject: `New Project Inquiry — ${fullName}`,

      react: ContactEmail({
        firstName,
        lastName,
        email,
        phone,
        message,
      }),

      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        Importance: 'high',
      },
    });

    if (error) {
      console.error('Resend error:', error);

      return NextResponse.json(
        {
          error: 'Failed to send inquiry.',
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        message: 'Email sent successfully.',
        id: data?.id,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    return NextResponse.json(
      {
        error: 'Invalid request or email could not be sent.',
      },
      {
        status: 500,
      }
    );
  }
}