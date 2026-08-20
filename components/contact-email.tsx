import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export function EmailTemplate({
  firstName,
  lastName,
  email,
  phone,
  message,
}: EmailTemplateProps) {
  const fullName = `${firstName} ${lastName}`.trim();

  return (
    <div
      style={{
        margin: 0,
        padding: '40px 16px',
        backgroundColor: '#050505',
        fontFamily:
          'Arial, Helvetica, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
        }}
      >
        {/* Top brand */}
        <div
          style={{
            marginBottom: '24px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-block',
              marginBottom: '12px',
              padding: '7px 12px',
              border: '1px solid rgba(167, 139, 250, 0.25)',
              borderRadius: '999px',
              backgroundColor: 'rgba(139, 92, 246, 0.08)',
              color: '#c4b5fd',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}
          >
            Sanova Web Solutions
          </div>

          <h1
            style={{
              margin: '0',
              color: '#ffffff',
              fontSize: '30px',
              lineHeight: '1.2',
              fontWeight: 700,
              letterSpacing: '-0.8px',
            }}
          >
            New project inquiry
          </h1>

          <p
            style={{
              margin: '10px auto 0',
              maxWidth: '460px',
              color: '#8f8f98',
              fontSize: '14px',
              lineHeight: '22px',
            }}
          >
            Someone just reached out through the Sanova Web Solutions contact
            form.
          </p>
        </div>

        {/* Main card */}
        <div
          style={{
            overflow: 'hidden',
            border: '1px solid #242429',
            borderRadius: '20px',
            backgroundColor: '#0b0b0d',
          }}
        >
          {/* Lead header */}
          <div
            style={{
              padding: '28px 28px 24px',
              borderBottom: '1px solid #242429',
              background:
                'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(59,130,246,0.04))',
            }}
          >
            <div
              style={{
                marginBottom: '8px',
                color: '#a78bfa',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1.4px',
                textTransform: 'uppercase',
              }}
            >
              New lead
            </div>

            <h2
              style={{
                margin: 0,
                color: '#ffffff',
                fontSize: '24px',
                lineHeight: '32px',
                fontWeight: 700,
              }}
            >
              {fullName}
            </h2>

            <p
              style={{
                margin: '6px 0 0',
                color: '#85858d',
                fontSize: '14px',
              }}
            >
              Interested in working with Sanova
            </p>
          </div>

          {/* Contact info */}
          <div
            style={{
              padding: '28px',
            }}
          >
            <h3
              style={{
                margin: '0 0 18px',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 700,
              }}
            >
              Contact information
            </h3>

            <InfoRow
              label='Name'
              value={fullName}
            />

            <InfoRow
              label='Email'
              value={email}
              href={`mailto:${email}`}
            />

            <InfoRow
              label='Phone'
              value={phone || 'Not provided'}
              href={phone ? `tel:${phone.replace(/[^\d+]/g, '')}` : undefined}
            />

            {/* Message */}
            <div
              style={{
                marginTop: '28px',
              }}
            >
              <div
                style={{
                  marginBottom: '10px',
                  color: '#a78bfa',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                }}
              >
                Project message
              </div>

              <div
                style={{
                  padding: '18px',
                  border: '1px solid #242429',
                  borderRadius: '14px',
                  backgroundColor: '#111114',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: '#d6d6db',
                    fontSize: '14px',
                    lineHeight: '24px',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {message}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div
              style={{
                marginTop: '28px',
              }}
            >
              <a
                href={`mailto:${email}?subject=${encodeURIComponent(
                  `Re: Your inquiry with Sanova Web Solutions`
                )}`}
                style={{
                  display: 'inline-block',
                  padding: '14px 22px',
                  borderRadius: '12px',
                  backgroundColor: '#ffffff',
                  color: '#050505',
                  fontSize: '14px',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                Reply to {firstName}
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            padding: '24px 16px 0',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              margin: 0,
              color: '#55555f',
              fontSize: '11px',
              lineHeight: '18px',
            }}
          >
            This inquiry was submitted through sanovawebsolutions.com.
          </p>

          <p
            style={{
              margin: '5px 0 0',
              color: '#3f3f46',
              fontSize: '11px',
            }}
          >
            Sanova Web Solutions · Ontario, Canada
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div
      style={{
        padding: '13px 0',
        borderBottom: '1px solid #1d1d21',
      }}
    >
      <div
        style={{
          marginBottom: '5px',
          color: '#676770',
          fontSize: '10px',
          fontWeight: 700,
          letterSpacing: '1px',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </div>

      {href ? (
        <a
          href={href}
          style={{
            color: '#c4b5fd',
            fontSize: '14px',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          {value}
        </a>
      ) : (
        <div
          style={{
            color: '#f4f4f5',
            fontSize: '14px',
            fontWeight: 600,
          }}
        >
          {value}
        </div>
      )}
    </div>
  );
}