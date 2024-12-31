import { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '@/components/email-components';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

interface RequestBody {
  name: string;
  email: string;
  phone: string;
  details: string;
}

// Assign the function to a named constant before exporting
const sendEmailHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, phone, details } = req.body as RequestBody;

    try {
      // Only extract the `error` from the result, since `data` is unused
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
        return res
          .status(400)
          .json({ message: 'Failed to send email', details: error });
      }

      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error: unknown) {
      // Use `unknown` for better typing and validate error structure
      if (error instanceof Error) {
        return res
          .status(500)
          .json({ error: 'Internal Server Error', details: error.message });
      }

      return res.status(500).json({ error: 'Unknown error occurred' });
    }
  } else {
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
};

// Named export avoids the anonymous default export issue
export default sendEmailHandler;
