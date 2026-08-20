import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate = ({
  firstName,
  lastName,
  email,
  phone,
  message,
}: EmailTemplateProps) => (
  <div>
    <h3>
      {firstName} {lastName}, is working on {message}. They can be contacted at{' '}
      {email} and {phone}
    </h3>
  </div>
);
