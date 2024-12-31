import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  details: string;
}

export const EmailTemplate = ({
  name,
  email,
  phone,
  details,
}: EmailTemplateProps) => (
  <div>
    <h3>
      {name}, is working on {details}. They can be contacted at {email} and{' '}
      {phone}
    </h3>
  </div>
);
