import { Metadata } from 'next';
import {
  Database,
  FileText,
  LockKeyhole,
  ShieldCheck,
} from 'lucide-react';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';





export const metadata: Metadata = {
  title: {
    absolute: 'Privacy Policy | Sanova Web Solutions',
  },

  description:
    'Read the Sanova Web Solutions Privacy Policy to learn how we collect, use, store, disclose, and protect personal information when you visit our website or use our services.',

  authors: [
    {
      name: 'Sanova Web Solutions',
    },
  ],

  creator: 'Sanova Web Solutions',

  publisher: 'Sanova Web Solutions',

  category: 'Legal Information',

  alternates: {
    canonical: '/privacy-policy',
  },

  openGraph: {
    title: 'Privacy Policy | Sanova Web Solutions',

    description:
      'Learn how Sanova Web Solutions collects, uses, stores, discloses, and protects personal information across our website and services.',

    url: '/privacy-policy',

    siteName: 'Sanova Web Solutions',

    type: 'website',

    locale: 'en_CA',
  },

  twitter: {
    card: 'summary',

    title: 'Privacy Policy | Sanova Web Solutions',

    description:
      'Review how Sanova Web Solutions handles, stores, uses, and protects personal information.',
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const sections = [
  { label: 'Definitions', href: '#definitions' },
  { label: 'Data We Collect', href: '#data-collected' },
  { label: 'How We Use Data', href: '#data-use' },
  { label: 'Data Retention', href: '#retention' },
  { label: 'Your Rights', href: '#rights' },
  { label: 'Data Security', href: '#security' },
  { label: 'Policy Updates', href: '#changes' },
];

export default function PrivacyPolicyPage() {
  return (
    <main className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
      {/* Background atmosphere */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute left-1/2 top-[-18rem] h-[42rem] w-[50rem] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[160px]' />

        <div className='absolute right-[-16rem] top-[45%] h-[32rem] w-[32rem] rounded-full bg-blue-600/[0.04] blur-[150px]' />

        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
      </div>

      <MaxWidthWrapper className='relative'>
        {/* Header */}
        <div className='mx-auto max-w-4xl text-center'>
          <div className='mb-5 flex items-center justify-center gap-3'>
            <span className='h-px w-8 bg-violet-400' />

            <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
              Legal
            </span>

            <span className='h-px w-8 bg-violet-400' />
          </div>

          <h1 className='text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl'>
            Privacy Policy
          </h1>

          <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
            This policy explains how Sanova Web Solutions may collect, use,
            store, and protect information when you interact with our website
            and services.
          </p>

          <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
            <LegalBadge
              icon={ShieldCheck}
              label='Privacy focused'
            />
            <LegalBadge
              icon={LockKeyhole}
              label='Secure handling'
            />
            <LegalBadge
              icon={Database}
              label='Transparent data use'
            />
          </div>
        </div>

        {/* Layout */}
        <div className='mx-auto mt-16 grid max-w-6xl gap-12 lg:mt-24 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 xl:gap-20'>
          {/* Contents */}
          <aside className='hidden lg:block'>
            <div className='sticky top-32'>
              <p className='mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25'>
                On this page
              </p>

              <nav className='space-y-1'>
                {sections.map((section) => (
                  <a
                    key={section.href}
                    href={section.href}
                    className='block rounded-lg px-3 py-2 text-sm text-white/35 transition-all hover:bg-white/[0.04] hover:text-white'
                  >
                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Policy */}
          <article className='min-w-0'>
            <div className='rounded-[2rem] border border-white/[0.08] bg-white/[0.025] px-6 py-8 shadow-2xl shadow-black/20 sm:px-8 sm:py-10 lg:px-12 lg:py-12'>
              <div className='mb-10 flex items-start gap-4 rounded-[1.25rem] border border-violet-400/15 bg-violet-400/[0.05] p-5'>
                <FileText className='mt-0.5 size-5 shrink-0 text-violet-300' />

                <p className='text-sm leading-7 text-white/45'>
                  Words with capitalized initial letters carry specific meanings
                  as defined below, regardless of whether they appear in
                  singular or plural form.
                </p>
              </div>

              <div
                className='
                  prose
                  prose-invert
                  prose-lg
                  max-w-none

                  prose-headings:scroll-mt-32
                  prose-headings:font-semibold
                  prose-headings:tracking-[-0.035em]
                  prose-headings:text-white

                  prose-h2:mt-14
                  prose-h2:text-3xl

                  prose-h3:mt-8
                  prose-h3:text-xl

                  prose-p:leading-8
                  prose-p:text-white/45

                  prose-li:leading-8
                  prose-li:text-white/45

                  prose-strong:font-semibold
                  prose-strong:text-white/80

                  prose-a:text-violet-300
                  prose-a:no-underline
                  hover:prose-a:text-violet-200

                  prose-hr:border-white/[0.08]
                '
              >
                <section id='definitions'>
                  <h2>Definitions</h2>

                  <ul>
                    <li>
                      <strong>Account:</strong> A unique identifier created for
                      you to access parts of our Service.
                    </li>

                    <li>
                      <strong>Affiliate:</strong> Any entity under common control
                      with, controlling, or controlled by a party, where
                      &quot;control&quot; involves owning at least 50% of voting
                      shares or similar interests.
                    </li>

                    <li>
                      <strong>Company:</strong> Refers to Sanova Web Solutions
                      (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                    </li>

                    <li>
                      <strong>Cookies:</strong> Small files placed on your device
                      that help track browsing activity and improve user
                      experience.
                    </li>

                    <li>
                      <strong>Country:</strong> Refers to Canada.
                    </li>

                    <li>
                      <strong>Device:</strong> Any technology used to access the
                      Service, such as smartphones, tablets, or computers.
                    </li>

                    <li>
                      <strong>Personal Data:</strong> Information identifying an
                      individual, either directly or indirectly.
                    </li>

                    <li>
                      <strong>Service:</strong> Refers to our website and related
                      offerings.
                    </li>

                    <li>
                      <strong>Service Provider:</strong> Third-party
                      organizations or individuals processing data on our behalf
                      to support Service functionality.
                    </li>

                    <li>
                      <strong>Usage Data:</strong> Automatically collected data
                      related to how the Service is accessed and used.
                    </li>

                    <li>
                      <strong>Website:</strong> Refers to Sanova Web Solutions,
                      accessible at sanovawebsolutions.com.
                    </li>

                    <li>
                      <strong>You:</strong> Any individual or organization
                      accessing or utilizing our Service.
                    </li>
                  </ul>
                </section>

                <section id='data-collected'>
                  <h2>Collecting and Using Your Personal Data</h2>

                  <h3>Types of Data Collected</h3>

                  <p>
                    <strong>Personal Data</strong>
                  </p>

                  <p>
                    We may request personal details to contact or identify you,
                    such as:
                  </p>

                  <ul>
                    <li>
                      Name and contact information, including email, phone
                      number, and mailing address.
                    </li>
                    <li>Usage Data.</li>
                  </ul>

                  <h3>Usage Data</h3>

                  <p>Collected automatically, this may include:</p>

                  <ul>
                    <li>
                      Device information such as IP address, browser type, and
                      browser version.
                    </li>
                    <li>
                      Details of your interactions with the Service, including
                      pages visited and time spent.
                    </li>
                    <li>
                      Diagnostic information used to improve Service
                      performance.
                    </li>
                  </ul>

                  <p>
                    When accessing the Service through a mobile device,
                    additional information such as operating system, unique
                    device ID, and browser type may also be collected.
                  </p>

                  <h3>Tracking Technologies and Cookies</h3>

                  <p>
                    We may use cookies and similar technologies to analyze and
                    improve your experience and understand activity across our
                    Service.
                  </p>

                  <p>
                    <strong>Types of Cookies</strong>
                  </p>

                  <ul>
                    <li>
                      <strong>Session Cookies:</strong> Deleted when your browser
                      closes.
                    </li>

                    <li>
                      <strong>Persistent Cookies:</strong> Remain stored until
                      they expire or are manually deleted.
                    </li>
                  </ul>

                  <p>
                    <strong>Examples include:</strong>
                  </p>

                  <ul>
                    <li>
                      <strong>Essential Cookies:</strong> Help ensure proper
                      Service functionality.
                    </li>

                    <li>
                      <strong>Preference Cookies:</strong> Save user preferences
                      and settings.
                    </li>

                    <li>
                      <strong>Analytics Cookies:</strong> Help us understand
                      usage patterns and trends.
                    </li>
                  </ul>

                  <p>
                    You may modify your browser settings to disable cookies,
                    although doing so may affect certain website functionality.
                  </p>
                </section>

                <section id='data-use'>
                  <h2>Use of Your Personal Data</h2>

                  <p>We may use Personal Data for purposes including:</p>

                  <ul>
                    <li>
                      <strong>Service Delivery:</strong> Maintaining and
                      improving our services.
                    </li>

                    <li>
                      <strong>Account Management:</strong> Facilitating access
                      to registered-user features.
                    </li>

                    <li>
                      <strong>Communication:</strong> Sending relevant updates,
                      notifications, or promotional communications.
                    </li>

                    <li>
                      <strong>Legal Compliance:</strong> Meeting regulatory and
                      contractual obligations.
                    </li>

                    <li>
                      <strong>Business Transactions:</strong> Evaluating
                      potential mergers, acquisitions, or business transfers.
                    </li>
                  </ul>

                  <h3>Sharing of Personal Data</h3>

                  <p>Your information may be shared:</p>

                  <ul>
                    <li>
                      <strong>With Service Providers:</strong> To support,
                      analyze, or improve the Service.
                    </li>

                    <li>
                      <strong>During Business Transfers:</strong> In connection
                      with a merger, acquisition, or sale.
                    </li>

                    <li>
                      <strong>With Affiliates and Partners:</strong> Where
                      appropriate to provide services or communications.
                    </li>

                    <li>
                      <strong>With Your Consent:</strong> For other purposes you
                      have agreed to.
                    </li>
                  </ul>
                </section>

                <section id='retention'>
                  <h2>Retention of Your Data</h2>

                  <p>
                    We retain Personal Data only for as long as reasonably
                    necessary for the purposes described in this policy,
                    including legal and regulatory obligations. Usage Data may
                    be retained for shorter periods unless required for
                    security, functionality, or legal purposes.
                  </p>

                  <h2>Data Transfers</h2>

                  <p>
                    Your information may be stored or processed in locations
                    outside your jurisdiction. Where applicable, we take steps
                    intended to protect information during such transfers.
                  </p>
                </section>

                <section id='rights'>
                  <h2>Your Rights</h2>

                  <h3>Access and Deletion</h3>

                  <p>Depending on the circumstances, you may be able to:</p>

                  <ul>
                    <li>Review or update information associated with you.</li>
                    <li>
                      Request deletion of Personal Data, subject to applicable
                      legal or retention requirements.
                    </li>
                  </ul>

                  <h2>Disclosure of Your Personal Data</h2>

                  <h3>Legal Obligations</h3>

                  <p>We may disclose information when necessary to:</p>

                  <ul>
                    <li>Comply with applicable laws or court orders.</li>
                    <li>Protect our rights or the safety of users.</li>
                    <li>Investigate suspected misuse of our Service.</li>
                  </ul>
                </section>

                <section id='security'>
                  <h2>Data Security</h2>

                  <p>
                    While we use reasonable measures intended to protect
                    information, no method of online transmission or electronic
                    storage is completely secure. We therefore cannot guarantee
                    absolute security.
                  </p>

                  <h2>Children&apos;s Privacy</h2>

                  <p>
                    Our Service is not intended for users under 13. If we become
                    aware that Personal Data has been collected from a child
                    without appropriate authorization, we will take reasonable
                    steps to remove it.
                  </p>

                  <h2>Third-Party Links</h2>

                  <p>
                    Our Website may contain links to websites operated by third
                    parties. We are not responsible for their privacy practices,
                    and we encourage you to review their privacy policies.
                  </p>
                </section>

                <section id='changes'>
                  <h2>Changes to This Privacy Policy</h2>

                  <p>
                    We may update this Privacy Policy periodically. Changes will
                    be posted on this page and will take effect when published.
                    We encourage you to review this policy from time to time.
                  </p>
                </section>
              </div>
            </div>
          </article>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}

function LegalBadge({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className='flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs text-white/40'>
      <Icon
        className='size-3.5 text-violet-300'
        strokeWidth={1.8}
      />

      {label}
    </div>
  );
}