import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/email-components';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

interface RequestBody {
  name: string;
  email: string;
  phone: string;
  details: string;
}

export const POST = async (req: NextRequest) => {
  try {
    const body = (await req.json()) as RequestBody;

    const { name, email, phone, details } = body;

    const { error } = await resend.emails.send({
      from: 'aidanmarroyo@gmail.com',
      to: ['sanovasoftwareinc@gmail.com'],
      subject: 'Project Inquiry',
      react: EmailTemplate({
        name,
        email,
        phone,
        details,
      }),
    });

    if (error) {
      return NextResponse.json(
        { message: 'Failed to send email', details: error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { error: 'Internal Server Error', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Unknown error occurred' },
      { status: 500 }
    );
  }
};
