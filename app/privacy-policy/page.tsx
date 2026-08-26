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
  { label: 'Cookies & Analytics', href: '#cookies' },
  { label: 'How We Share Data', href: '#share' },
  { label: 'Data Security', href: '#security' },
  { label: 'Data Retention', href: '#retention' },
  {label: 'Marketing & Communication', href: '#marketing'},
  {label: 'Privacy Rights', href: '#privacy-rights'},
  {label: 'Children\'s Privacy', href: '#children'},
  {label: 'External Websites', href: '#external'},
  {label: 'Client Websites', href: '#client'},
  {label: 'Privacy Incidents', href: '#incidents'},
  {label: 'Changes to Privacy Policy', href: '#changes'},
  {label: 'Contact Us', href: '#contact'},
  {label: 'Governing Privacy Requirements', href: '#governing'}

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

                  <p>
                    Sanova Web Solutions ("Sanova," "we," "us," or "our") respects your privacy and is committed to handling personal information responsibly.
                  </p>

                  <p>
                    This Privacy Policy explains how we collect, use, disclose, retain, and protect personal information when you:
                  </p>

                  <ul>
                    <li>
                      Visit our website
                    </li>

                    <li>
                      Contact us
                    </li>

                    <li>
                      Request a quote
                    </li>

                    <li>
                      Submit an inquiry
                    </li>

                    <li>
                      Become a client
                    </li>

                    <li>
                      Communicate with us
                    </li>

                    <li>
                      Purchase services from us
                    </li>

                    <li>
                      Otherwise interact with Sanova Web Solutions
                    </li>

                  </ul>
                  <p>
                    By using our website or providing personal information to us, you acknowledge the practices described in this Privacy Policy.
                  </p>
                </section>

                <section id='data-collected'>
                  <h3>1. Information We Collect</h3>

                  <p>
                    The information we collect depends on how you interact with Sanova Web Solutions.
                  </p>
                  <p>
                    We aim to collect only the information reasonably necessary to operate our business, communicate with prospective and existing clients, provide our services, and maintain our website.
                  </p>

                  <h3>Information You Provide to Us</h3>

                  <p>
                    You may provide personal information when you contact us, submit a website form, request a quote, become a client, or communicate with us.
                  </p>
                  <p>
                    This information may include:
                  </p>

                  <ul>
                    <li>
                      First and last name
                    </li>
                    <li>Email address</li>
                    <li>Telephone number</li>
                    <li>Business name</li>
                    <li>Business website</li>
                    <li>Company information</li>
                    <li>Project requirements</li>
                    <li>Budget information</li>
                    <li>Messages and correspondence</li>
                    <li>Website content</li>
                    <li>Billing information</li>
                    <li>Invoice information</li>
                    <li>Files, images, logos, or documents you provide</li>
                    <li>Other information you voluntarily provide</li>
                  </ul>

                  <p>
                    Please avoid submitting sensitive personal information unless it is necessary for us to provide the service you are requesting.
                  </p>

                  <h3>2. Contact and Inquiry Forms</h3>

                  <p>When you submit a contact, project inquiry, quote request, or other form through our website, we may collect the information entered into that form.</p>

                  <p>For example, a project inquiry may request information such as:</p>

                  <ul>
                    <li>
                      Your name
                    </li>
                    <li>
                      Email address
                    </li>
                    <li>
                      Phone number
                    </li>
                    <li>
                      Business information
                    </li>
                    <li>
                      Details about your project
                    </li>
                    <li>
                      A message describing what you need
                    </li>
                  </ul>

                  <p>
                    We use this information to:
                  </p>

                  <ul>
                    <li>
                      Respond to your inquiry
                    </li>
                    <li>
                      Determine whether we can assist with your project
                    </li>
                    <li>
                      Prepare estimates or proposals
                    </li>
                    <li>
                      Communicate about our services
                    </li>
                    <li>
                      Schedule consultations
                    </li>
                    <li>
                      Maintain records of prospective client communications
                    </li>
                  </ul>

                  <p>
                    Submitting an inquiry does not automatically subscribe you to marketing communications.
                  </p>

                  <h3>3. Client Information</h3>

                  <p>
                    If you become a Sanova Web Solutions client, we may collect additional information necessary to manage and complete your project.
                  </p>

                  <p>
                    This may include:
                  </p>

                  <ul>
                    <li>
                      Contact information
                    </li>
                    <li>
                      Business information
                    </li>
                    <li>
                      Project requirements
                    </li>
                    <li>
                      Contracts and agreements
                    </li>
                    <li>
                      Proposals
                    </li>
                    <li>
                      Invoice and payment records
                    </li>
                    <li>
                      Project communications
                    </li>
                    <li>
                      Domain information
                    </li>
                    <li>
                      Website account information
                    </li>
                    <li>
                      Content and digital assets
                    </li>
                    <li>
                      Technical information
                    </li>
                    <li>
                      Access credentials provided for project purposes
                    </li>
                  </ul>

                  <p>
                    We use this information to provide the services you have requested and manage our business relationship with you.
                  </p>

                  <h3>4. Information Collected Automatically</h3>

                  <p>
                    When you visit our website, certain technical information may be collected automatically by our website, hosting provider, analytics services, or other technology providers.
                  </p>

                  <p>
                    This information may include:
                  </p>

                  <ul>
                    <li>
                      IP address
                    </li>
                    <li>
                      Browser type
                    </li>
                    <li>
                      Device type
                    </li>
                    <li>
                      Operating system
                    </li>
                    <li>
                      Approximate geographic location
                    </li>
                    <li>
                      Referring website
                    </li>
                    <li>
                      Pages visited
                    </li>
                    <li>
                      Date and time of visits
                    </li>
                    <li>
                      Time spent on pages
                    </li>
                    <li>
                      Website interactions
                    </li>
                    <li>
                      Screen or device characteristics
                    </li>
                    <li>
                      Technical error information
                    </li>
                  </ul>


                  <p>
                    This information helps us understand how our website is being used and allows us to improve its performance, security, content, and user experience.
                  </p>

                </section>

                <section id='data-use'>

                  <h2>How We Use Information</h2>

                  <h3>5. Purposes for Collecting Personal Information</h3>

                  <p>
                    Sanova Web Solutions may use personal information for purposes including:
                  </p>

                  <ul>
                    <li>
                      Responding to inquiries
                    </li>

                    <li>
                      Providing quotes and proposals
                    </li>

                    <li>
                      Communicating with prospective clients
                    </li>
                    <li>
                      Providing website design and development services
                    </li>
                    <li>
                      Managing client projects
                    </li>
                    <li>
                      Processing and maintaining payment records
                    </li>
                    <li>
                      Providing customer support
                    </li>
                    <li>
                      Managing contracts and agreements
                    </li>
                    <li>
                      Delivering completed projects
                    </li>
                    <li>
                      Maintaining client relationships
                    </li>
                    <li>
                      Improving our website
                    </li>
                    <li>
                      Measuring website performance
                    </li>
                    <li>
                      Understanding how visitors use our website
                    </li>
                    <li>
                      Preventing fraud, abuse, and security incidents
                    </li>
                    <li>
                      Maintaining business and accounting records
                    </li>
                    <li>
                      Complying with legal obligations
                    </li>
                    <li>
                      Establishing, exercising, or defending legal rights
                    </li>
                  </ul>

                  <p>
                    We will not knowingly use personal information for an unrelated purpose without appropriate authorization or another lawful basis.
                  </p>

                  <h3>6. Consent</h3>

                  <p>Where consent is required, we seek to obtain meaningful consent before or at the time personal information is collected.</p>

                  <p>Consent may be express or implied depending on:</p>

                  <ul>
                    <li>The circumstances</li>

                    <li>The sensitivity of the information</li>

                    <li>The reason the information is being collected</li>

                    <li>Your reasonable expectations</li>
                  </ul>

                  <p>For example, when you submit a contact form asking us to contact you about a website project, you are providing information for the purpose of allowing us to respond to your inquiry.</p>

                  <p>Where required, you may withdraw your consent to certain uses of personal information, subject to legal, contractual, or operational restrictions.</p>

                </section>

                <section id='cookies'>
                  <h2>Cookies & Analytics</h2>

                  <h3>7. Cookies and Similar Technologies</h3>

                  <p>
                    Our website may use cookies or similar technologies.
                  </p>

                  <p>Cookies are small pieces of information stored by your browser or device that can help websites function properly, remember preferences, measure usage, or understand visitor behaviour.</p>

                  <p>We may use cookies for purposes such as:</p>

                  <h2>Data Transfers</h2>

                  <ul>
                    <li>Website functionality</li>

                    <li>Security</li>

                    <li>Performance</li>

                    <li>Analytics</li>

                    <li>Remembering preferences</li>

                    <li>Understanding visitor behaviour</li>
                  </ul>

                  <p>Some cookies may be placed by third-party services integrated into our website.</p>

                  <h3>8. Essential Cookies</h3>

                  <p>Some cookies or similar technologies may be necessary for the website to function properly.</p>

                  <p>These technologies may support things such as:</p>

                  <ul>
                    <li>Security</li>

                    <li>Form functionality</li>

                    <li>Session management</li>

                    <li>Website preferences</li>

                    <li>Fraud prevention</li>

                    <li>Technical website operations</li>
                  </ul>

                  <p>Disabling essential technologies may affect certain website functionality.</p>

                  <h3>9. Analytics</h3>

                  <p>We may use website analytics services to better understand how visitors interact with Sanova's website.</p>

                  <p>Analytics information may help us understand:</p>

                  <ul>
                    <li>Which pages are visited</li>

                    <li>How visitors reach our website</li>

                    <li>Which devices and browsers are used</li>

                    <li>How visitors navigate between pages</li>

                    <li>How long visitors remain on the website</li>

                    <li>General geographic information</li>

                    <li>Website performance</li>
                  </ul>

                  <p>We use this information to improve our website and understand which content is useful to visitors.</p>

                  <p>Where Google Analytics or another third-party analytics service is enabled, information collected by that provider is also subject to its own privacy policies and terms.</p>

                  <h3>10. Managing Cookies</h3>

                  <p>Most browsers allow you to control or disable cookies through your browser settings.</p>

                  <p>Depending on the technologies used on our website, disabling certain cookies may affect website functionality.</p>

                  <p>You may also be provided with cookie or consent controls directly on our website where required or appropriate.</p>
                </section>

                <section id='share'>
                  <h2>How We Share Information</h2>

                  <h3>11. We Do Not Sell Personal Information</h3>

                  <p>Sanova Web Solutions does not sell or rent personal information to third parties.</p>

                  <p>We may disclose information to service providers or other parties where necessary to operate our business, provide our services, comply with legal obligations, or protect legitimate interests.</p>

                  <h3>12. Service Providers</h3>

                  <p>We may use third-party service providers to operate our business and website.</p>

                  <p>These providers may process information on our behalf when necessary to provide their services.</p>

                  <p>Examples may include providers of:</p>

                  <ul>
                    <li>Website hosting</li>

                    <li>Cloud infrastructure</li>

                    <li>Email delivery</li>

                    <li>Analytics</li>

                    <li>Payment processing</li>

                    <li>Domain services</li>

                    <li>Accounting</li>

                    <li>Business communications</li>

                    <li>Forms</li>

                    <li>Databases</li>

                    <li>File storage</li>

                    <li>Development tools</li>

                    <li>Security services</li>
                  </ul>

                  <p>We seek to use reputable providers appropriate for the services being performed.</p>

                  <h3>13. Website Hosting</h3>

                  <p>Sanova's website and client websites may use modern cloud hosting infrastructure, including services such as Vercel.</p>

                  <p>Hosting providers may process technical information necessary to deliver websites, maintain security, diagnose problems, and operate their infrastructure.</p>

                  <p>Information processed by hosting providers is also subject to the applicable provider's privacy practices and terms.</p>

                  <h3>14. Email Services</h3>

                  <p>We may use third-party email delivery services to send transactional or business-related emails.</p>

                  <p>For example, information submitted through a website inquiry form may be processed through an email service so that your inquiry can be delivered to Sanova.</p>

                  <p>These providers may temporarily process information such as:</p>

                  <ul>
                    <li>Your name</li>

                    <li>Email address</li>

                    <li>Message contents</li>

                    <li>Delivery information</li>

                    <li>Technical email information</li>
                  </ul>

                  <p>We may use services such as Resend for website-generated email communications.</p>

                  <h3>15. Payment Providers</h3>

                  <p>Payments may be processed through third-party payment providers.</p>

                  <p>When you make a payment, payment information may be collected directly by the payment provider rather than stored by Sanova.</p>

                  <p>Depending on the payment method, the provider may collect information such as:</p>

                  <ul>
                    <li>Name</li>

                    <li>Billing information</li>

                    <li>Payment card information</li>

                    <li>Transaction information</li>

                    <li>Email address</li>

                    <li>Fraud-prevention information</li>
                  </ul>

                  <p>Payment providers process this information under their own terms and privacy policies.</p>

                  <p>Sanova generally does not need to store complete payment card numbers.</p>

                  <h3>16. Legal Disclosures</h3>

                  <p>We may disclose personal information where reasonably necessary or legally required to:</p>

                  <ul>
                    <li>Comply with applicable law</li>

                    <li>Respond to court order</li>

                    <li>Respond to lawful government requests</li>

                    <li>Enforce agreements</li>

                    <li>Protect Sanova's legal rights</li>

                    <li>Investigate suspected fraud</li>

                    <li>Protect the security of our systems</li>

                    <li>Protect the safety or rights of another person</li>

                    <li>Establish, exercise, or defend legal claims</li>
                  </ul>

                  <p>We will only disclose information in these circumstances where permitted or required by law.</p>

                  <h3>17. Business Transactions</h3>

                  <p>If Sanova Web Solutions is involved in a merger, acquisition, financing, restructuring, sale of assets, or transfer of the business, personal information may be transferred as part of that transaction where permitted by law.</p>

                  <p>Any party receiving such information would be expected to handle it appropriately and subject to applicable privacy requirements.</p>
                </section>

                <section id='security'>
                  <h2>Data Storage & Security</h2>

                  <h3>18. Where Information May Be Stored</h3>

                  <p>
                    Sanova uses third-party technology and cloud service providers to operate its business.å
                  </p>

                  <p>As a result, personal information may be processed or stored on servers located:</p>

                  <ul>
                    <li>In Canada</li>

                    <li>In the United States</li>

                    <li>In other countries where our service providers operate</li>
                  </ul>

                  <p>When information is processed outside Canada, it may be subject to the laws of the jurisdiction where it is processed.</p>

                  <p>Sanova takes reasonable steps to select service providers appropriate for the information and services involved.</p>

                  <h3>19. Security</h3>

                  <p>We take reasonable administrative, technical, and organizational measures to protect personal information against risks such as:</p>

                  <ul>
                    <li>Unauthorized access</li>

                    <li>Loss</li>

                    <li>Theft</li>

                    <li>Misuse</li>

                    <li>Unauthorized disclosure</li>

                    <li>Alteration</li>

                    <li>Destruction</li>
                  </ul>

                  <p>Depending on the information involved, safeguards may include:</p>

                  <ul>
                    <li>Secure hosting</li>

                    <li>Encryption</li>

                    <li>HTTPS</li>

                    <li>Password protection</li>

                    <li>Access controls</li>

                    <li>Multi-factor authentication where available</li>

                    <li>Secure third-party providers</li>

                    <li>Limited access to client information</li>

                    <li>Secure development practices</li>
                  </ul>

                  <p>However, no internet transmission or electronic storage system can be guaranteed to be completely secure.</p>

                  <h3>20. Account Credentials</h3>

                  <p>Clients may occasionally provide temporary access to accounts required for website development.</p>

                  <p>Examples may include:</p>

                  <ul>
                    <li>Domain accounts</li>

                    <li>Hosting accounts</li>

                    <li>Analytics accounts</li>

                    <li>Email platforms</li>

                    <li>CRM systems</li>

                    <li>Booking systems</li>

                    <li>Website platforms</li>
                  </ul>

                  <p>We use those credentials only as reasonably necessary to provide the requested services.</p>

                  <p>Clients should use secure passwords and enable multi-factor authentication whenever available.</p>

                  <p>Where possible, we recommend granting separate user or collaborator access rather than sharing primary account passwords.</p>

                  <p>Clients may revoke Sanova's access once the project no longer requires it.</p>
                </section>

                <section id='retention'>
                  <h2>Data Retention</h2>

                  <h3>21. How Long We Keep Personal Information</h3>
                  <p>
                    We retain personal information only for as long as reasonably necessary for the purposes for which it was collected or as required for legitimate business, contractual, tax, accounting, dispute-resolution, security, or legal purposes.
                  </p>

                  <p>Different types of information may be retained for different periods.</p>

                  <p>For example, we may retain:</p>

                  <ul>
                    <li>Project records</li>

                    <li>Contracts</li>

                    <li>Proposals</li>

                    <li>Invoices</li>

                    <li>Payment records</li>

                    <li>Business correspondance</li>

                    <li>Client project information</li>
                  </ul>

                  <p>for a reasonable period after a project is completed.</p>

                  <p>Information that is no longer reasonably required will be deleted, anonymized, or securely disposed of where appropriate.</p>

                  <h3>22. Unsuccessful Project Inquiries</h3>

                  <p>If you contact Sanova but do not become a client, we may retain your inquiry and related correspondence for a reasonable period for:</p>

                  <ul>
                    <li>Follow-up</li>

                    <li>Business records</li>

                    <li>Preventing duplicate inquiries</li>

                    <li>Responding if you contact us again</li>

                    <li>Resolving disputes</li>
                  </ul>

                  <p>You may contact us if you have questions about information retained in connection with an inquiry.</p>
                </section>

                <section id='marketing'>
                  <h2>Marketing Communications</h2>

                  <h3>23. Marketing Emails</h3>

                  <p>Submitting a contact form or requesting a quote does not automatically mean you have subscribed to promotional email marketing.</p>

                  <p>If Sanova sends commercial marketing communications, we will do so in accordance with applicable requirements.</p>

                  <p>Where required, marketing emails will include a method for recipients to unsubscribe.</p>


                  <h3>24. Unsubscribing</h3>

                  <p>If you receive promotional communications from Sanova and no longer wish to receive them, you may use the unsubscribe option provided in the message or contact us directly.</p>

                  <p>Unsubscribing from marketing messages does not necessarily prevent us from sending transactional or business communications that are required to manage an active inquiry, contract, invoice, or client project.</p>
                </section>

                <section id='privacy-rights'>

                  <h2>Your Privacy Rights</h2>

                  <h3>25. Accessing Your Personal Information</h3>

                  <p>Subject to applicable law, you may request information about the personal information Sanova holds about you.</p>

                  <p>You may also ask for access to personal information under our control.</p>

                  <p>Before providing information, we may need to verify your identity.</p>

                  <p>Certain information may be withheld where permitted or required by law.</p>

                  <h3>26. Correcting Your Information</h3>

                  <p>If you believe personal information we maintain about you is inaccurate or incomplete, you may contact us and request that it be corrected.</p>

                  <p>We may request information necessary to verify the correction.</p>

                  <h3>27. Withdrawing Consent</h3>

                  <p>Where we rely on your consent, you may request to withdraw that consent, subject to applicable legal, contractual, or operational restrictions.</p>

                  <p>Depending on the information and service involved, withdrawing consent may affect our ability to provide certain services.</p>

                  <h3>28. Requesting Deletion</h3>

                  <p>You may contact us to request deletion of personal information we hold about you.</p>

                  <p>We will assess requests in accordance with applicable legal obligations and legitimate business requirements.</p>

                  <p>We may need to retain certain information for purposes such as:</p>

                  <ul>
                    <li>Accounting</li>

                    <li>Tax records</li>

                    <li>Contracts</li>

                    <li>Legal obligations</li>

                    <li>Dispute resolution</li>

                    <li>Fraud prevention</li>

                    <li>Establishing or defending legal rights</li>
                  </ul>

                  <p>Where information must be retained, we will limit its continued use to appropriate purposes.</p>
                </section>

                <section id='children'>
                  <h2>Children's Privacy</h2>

                  <h3>29. Children's Information</h3>

                  <p>Sanova Web Solutions provides professional website services to businesses and is not designed or directed toward children.</p>

                  <p>We do not knowingly seek to collect personal information directly from children through our website for the purpose of providing our business services.</p>

                  <p>If you believe a child has provided personal information to us inappropriately, please contact us so we can review the situation.</p>
                </section>

                <section id='external'>
                  <h2>External Websites</h2>

                  <h3>30. Links to Third-Party Websites</h3>

                  <p>Our website may contain links to third-party websites or services.</p>

                  <p>Sanova does not control the privacy practices, content, or security of external websites.</p>

                  <p>Visiting a third-party website is subject to that organization's own terms and privacy policies.</p>

                  <p>We encourage users to review the privacy policies of external services before providing personal information.</p>
                </section>

                <section id='client'>
                  <h2>Client Websites</h2>

                  <h3>31. Websites We Build For Clients</h3>

                  <p>Sanova Web Solutions builds websites for other businesses.</p>

                  <p>After a client website has been completed and handed over, the client is generally responsible for the privacy practices of their own website.</p>

                  <p>A client's use of:</p>

                  <ul>
                    <li>
                      Contact forms
                    </li>

                    <li>Analytics</li>

                    <li>Cookies</li>

                    <li>Customer accounts</li>

                    <li>E-commerce</li>

                    <li>Marketing systems</li>

                    <li>User data</li>

                    <li>Other website functionality</li>
                  </ul>

                  <p>may require that client to maintain its own privacy policy and privacy practices.</p>

                  <p>Sanova's Privacy Policy does not automatically apply to websites owned by our clients.</p>

                  <h3>32. Personal Information Processed on Behalf of Clients</h3>

                  <p>During website development or support, Sanova may occasionally have access to personal information controlled by a client.</p>

                  <p>Where this occurs, we will use that information only as reasonably necessary to perform the requested services or as otherwise permitted by the applicable agreement and law.</p>

                  <p>The client remains responsible for ensuring that it has appropriate authority to collect and provide access to that information.</p>
                </section>

                <section id='incidents'>
                  <h2>Privacy Incidents</h2>

                  <h3>33. Data Breaches</h3>

                  <p>Despite reasonable safeguards, privacy or security incidents can occur.</p>

                  <p>If Sanova becomes aware of a breach involving personal information under our control, we will assess the incident and take reasonable steps to:</p>
                  
                  <ul>
                    <li>Contain the incident</li>

                    <li>Investigate what happened</li>

                    <li>Reduce potential harm</li>

                    <li>Secure affected systems</li>

                    <li>Determine whether notification or reporting olbigations apply</li>
                  </ul>

                  <p>Where required by applicable law, affected individuals and relevant authorities will be notified.</p>
                </section>

                <section id='changes'>
                  <h2>Changes to This Privacy Policy</h2>

                  <h3>34. Policy Updates</h3>

                  <p>Sanova Web Solutions may update this Privacy Policy from time to time as:</p>

                  <ul>
                    <li>Our services change</li>

                    <li>Our website changes</li>

                    <li>Technology changes</li>

                    <li>Service providers change</li>

                    <li>Our business practices evolve</li>

                    <li>Legal or regulatory requirements change</li>
                  </ul>

                  <p>The effective date at the top of this page indicates when this Privacy Policy was most recently updated.</p>

                  <p>Material changes may also be communicated through our website where appropriate.</p>
                </section>

                <section id='contact'>
                  <h2>Contact Us</h2>

                  <h3>35. Privacy Questions and Requests</h3>

                  <p>If you have questions about this Privacy Policy, how your personal information is handled, or would like to make an access, correction, deletion, consent, or privacy-related request, please contact:</p>

                  <p><strong>Sanova Web Solutions</strong></p>
                  <p>Hamilton, Ontario, Canada</p>
                  <p><strong>Email:</strong> sanovasoftwareinc@gmail.com</p>

                  <p>Please include enough information for us to understand and respond to your request.</p>

                  <p>We may need to verify your identity before providing access to or making changes to personal information.</p>

                  <h3>36. Privacy Complaints</h3>

                  <p>If you have a concern about how Sanova Web Solutions has handled your personal information, please contact us first so that we have an opportunity to investigate and respond.</p>

                  <p>We take privacy concerns seriously and will make reasonable efforts to address legitimate concerns.</p>

                  <p>Where applicable, individuals may also have the right to contact the appropriate Canadian privacy regulator regarding unresolved privacy concerns.</p>
                </section>

                <section id='governing'>
                  <h2>Governing Privacy Requirements</h2>

                  <p>Sanova Web Solutions operates from Ontario, Canada and handles personal information in accordance with applicable Canadian privacy requirements.</p>

                  <p>This Privacy Policy is intended to describe our general privacy practices and does not limit any rights or obligations that may apply under applicable law.</p>
                </section>
              </div>
            </div>
          </article>
        </div>
      </MaxWidthWrapper >
    </main >
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