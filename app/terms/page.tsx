import { Metadata } from 'next';
import {
  FileText,
  Scale,
  ShieldCheck,
  ScrollText,
} from 'lucide-react';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';



export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Review the terms governing use of Sanova Web Solutions websites, services, software, intellectual property, and related offerings.',

  alternates: {
    canonical: '/terms',
  },
};

const sections = [
  { number: '01', label: 'Our Services', href: '#services' },
  { number: '02', label: 'Intellectual Property', href: '#intellectual-property' },
  { number: '03', label: 'User Representations', href: '#representations' },
  { number: '04', label: 'Prohibited Activities', href: '#prohibited' },
  { number: '05', label: 'User Content', href: '#user-content' },
  { number: '06', label: 'Contribution License', href: '#contribution-license' },
  { number: '07', label: 'Third-Party Content', href: '#third-party' },
  { number: '09', label: 'Privacy Policy', href: '#privacy' },
  { number: '10', label: 'Term & Termination', href: '#termination' },
  { number: '11', label: 'Modifications', href: '#modifications' },
  { number: '12', label: 'Governing Law', href: '#governing-law' },
  { number: '13', label: 'Dispute Resolution', href: '#disputes' },
  { number: '14', label: 'Corrections', href: '#corrections' },
  { number: '15', label: 'Disclaimer', href: '#disclaimer' },
  { number: '16', label: 'Liability', href: '#liability' },
  { number: '18', label: 'User Data', href: '#user-data' },
  { number: '19', label: 'Electronic Communications', href: '#electronic' },
  { number: '20', label: 'California Users', href: '#california' },
  { number: '21', label: 'Miscellaneous', href: '#miscellaneous' },
];

export default function TermsPage() {
  return (
    <main className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
      {/* Background */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute left-1/2 top-[-18rem] h-[44rem] w-[54rem] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[170px]' />

        <div className='absolute right-[-18rem] top-[45%] h-[34rem] w-[34rem] rounded-full bg-blue-600/[0.04] blur-[150px]' />

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
            Terms of Service
          </h1>

          <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
            These terms explain the rules, rights, responsibilities, and legal
            conditions that apply when using Sanova Web Solutions and our
            related services.
          </p>

          <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
            <LegalBadge icon={ScrollText} label='Service terms' />
            <LegalBadge icon={Scale} label='Ontario governed' />
            <LegalBadge icon={ShieldCheck} label='Rights protected' />
          </div>
        </div>

        {/* Document layout */}
        <div className='mx-auto mt-16 grid max-w-7xl gap-12 lg:mt-24 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16 xl:gap-20'>
          {/* Sidebar TOC */}
          <aside className='hidden lg:block'>
            <div className='sticky top-32 max-h-[calc(100vh-10rem)] overflow-y-auto pr-2'>
              <p className='mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25'>
                Contents
              </p>

              <nav className='space-y-1'>
                {sections.map((section) => (
                  <a
                    key={section.href}
                    href={section.href}
                    className='group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-white/35 transition-all hover:bg-white/[0.04] hover:text-white'
                  >
                    <span className='w-6 shrink-0 text-[10px] font-semibold tracking-[0.12em] text-violet-300/50 group-hover:text-violet-300'>
                      {section.number}
                    </span>

                    {section.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Legal document */}
          <article className='min-w-0'>
            <div className='rounded-[2rem] border border-white/[0.08] bg-white/[0.025] px-6 py-8 shadow-2xl shadow-black/20 sm:px-8 sm:py-10 lg:px-12 lg:py-12'>
              {/* Agreement notice */}
              <div className='mb-12 rounded-[1.5rem] border border-violet-400/15 bg-violet-400/[0.05] p-5 sm:p-6'>
                <div className='flex gap-4'>
                  <FileText className='mt-0.5 size-5 shrink-0 text-violet-300' />

                  <div>
                    <p className='text-sm font-semibold text-white'>
                      Agreement to our legal terms
                    </p>

                    <p className='mt-2 text-sm leading-7 text-white/45'>
                      By accessing or using Sanova Web Solutions, you acknowledge
                      that you have read, understood, and agreed to these Terms
                      of Service.
                    </p>
                  </div>
                </div>
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

                  prose-h2:mt-16
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
                {/* INTRODUCTION */}
                <section>
                  <p>
                    Welcome to Sanova Web Solutions (“Company,” “we,” “us,” or
                    “our”), a business registered in Ontario, Canada.
                  </p>

                  <p>
                    We operate sanovawebsolutions.com along with related
                    services, applications, and products that link to or
                    reference these Terms of Service (collectively, the
                    “Services”).
                  </p>

                  <p>
                    These Terms form a binding agreement between you and Sanova
                    Web Solutions regarding your use of the Services.
                  </p>

                  <p>
                    If you do not agree with these Terms, you should discontinue
                    use of the Services.
                  </p>

                  <p>
                    Supplemental policies posted through the Services may be
                    incorporated by reference. We may update these Terms from
                    time to time, and updated terms take effect when posted.
                  </p>

                  <p>
                    Our Services are intended for users who are at least 18 years
                    old.
                  </p>
                </section>

                <LegalSection
                  id='services'
                  number='01'
                  title='Our Services'
                >
                  <p>
                    The Services and information provided are not intended for
                    distribution or use in jurisdictions where doing so would
                    violate applicable laws or impose additional registration
                    requirements on us.
                  </p>

                  <p>
                    Users accessing the Services from other jurisdictions are
                    responsible for complying with local laws.
                  </p>

                  <p>
                    The Services are not specifically designed to satisfy
                    specialized regulatory frameworks such as HIPAA, FISMA, or
                    GLBA unless expressly agreed otherwise.
                  </p>
                </LegalSection>

                <LegalSection
                  id='intellectual-property'
                  number='02'
                  title='Intellectual Property Rights'
                >
                  <h3>Our Intellectual Property</h3>

                  <p>
                    Sanova Web Solutions owns or is licensed to use intellectual
                    property associated with our Services, including source code,
                    databases, software, functionality, designs, text, images,
                    graphics, trademarks, service marks, and logos.
                  </p>

                  <p>
                    Unless otherwise permitted in writing, this material is
                    provided for personal or internal business use and may not be
                    commercially reproduced, distributed, or exploited.
                  </p>

                  <h3>Your Use of Our Services</h3>

                  <p>
                    Subject to these Terms, you are granted a limited,
                    non-exclusive, non-transferable, and revocable license to:
                  </p>

                  <ul>
                    <li>Access the Services.</li>
                    <li>
                      Download or print portions of Content for personal or
                      internal business purposes.
                    </li>
                  </ul>

                  <h3>Your Submissions</h3>

                  <p>
                    Suggestions, feedback, or other information voluntarily
                    submitted to us may be used by Sanova Web Solutions for
                    business and service-improvement purposes, subject to
                    applicable law.
                  </p>
                </LegalSection>

                <LegalSection
                  id='representations'
                  number='03'
                  title='User Representations'
                >
                  <p>By using our Services, you represent that:</p>

                  <ol>
                    <li>
                      You have the legal capacity to enter into these Terms.
                    </li>
                    <li>You meet applicable age requirements.</li>
                    <li>
                      You will not access the Services using unauthorized means.
                    </li>
                    <li>You will not use the Services unlawfully.</li>
                    <li>
                      Your use complies with applicable laws and regulations.
                    </li>
                  </ol>
                </LegalSection>

                <LegalSection
                  id='prohibited'
                  number='04'
                  title='Prohibited Activities'
                >
                  <p>You agree not to:</p>

                  <ol>
                    <li>
                      Exploit the Services for unauthorized commercial purposes.
                    </li>
                    <li>Circumvent Service security controls.</li>
                    <li>
                      Engage in unauthorized scraping, hacking, or disruptive
                      activity.
                    </li>
                    <li>Upload malicious or harmful material.</li>
                    <li>
                      Copy or modify protected software or Content without
                      permission.
                    </li>
                  </ol>
                </LegalSection>

                <LegalSection
                  id='user-content'
                  number='05'
                  title='User-Generated Content'
                >
                  <p>
                    Our Services do not currently provide public user-generated
                    content functionality. If that changes, additional terms may
                    apply.
                  </p>
                </LegalSection>

                <LegalSection
                  id='contribution-license'
                  number='06'
                  title='Contribution License'
                >
                  <p>
                    Information and Personal Data you provide may be accessed,
                    stored, processed, and used in accordance with our Privacy
                    Policy and your applicable choices.
                  </p>

                  <p>
                    By voluntarily submitting feedback regarding the Services,
                    you permit us to use that feedback for legitimate business
                    purposes without compensation.
                  </p>
                </LegalSection>

                <LegalSection
                  id='third-party'
                  number='07'
                  title='Third-Party Websites and Content'
                >
                  <p>
                    The Services may include links to third-party websites or
                    third-party content. We do not control those websites and
                    are not responsible for their content, accuracy, privacy
                    practices, terms, products, or services.
                  </p>

                  <p>
                    Accessing third-party services is at your own discretion and
                    risk. You should review their applicable terms and privacy
                    policies before interacting with them.
                  </p>
                </LegalSection>

                <LegalSection
                  id='privacy'
                  number='09'
                  title='Privacy Policy'
                >
                  <p>
                    Our Privacy Policy explains how Personal Data may be
                    collected, used, stored, and disclosed in connection with
                    the Services.
                  </p>

                  <p>
                    You should review the Privacy Policy available at{' '}
                    <a href='/privacy-policy'>
                      sanovawebsolutions.com/privacy-policy
                    </a>
                    .
                  </p>
                </LegalSection>

                <LegalSection
                  id='termination'
                  number='10'
                  title='Term and Termination'
                >
                  <p>
                    These Terms remain in effect while you use the Services.
                  </p>

                  <p>
                    To the fullest extent permitted by law, we may restrict,
                    suspend, or terminate access where we reasonably believe
                    these Terms, applicable laws, or Service security have been
                    violated.
                  </p>
                </LegalSection>

                <LegalSection
                  id='modifications'
                  number='11'
                  title='Modifications and Interruptions'
                >
                  <p>
                    We may change, suspend, or discontinue parts of the Services
                    from time to time.
                  </p>

                  <p>
                    Service availability cannot be guaranteed at all times and
                    may be affected by maintenance, technical failures, updates,
                    or circumstances outside our reasonable control.
                  </p>
                </LegalSection>

                <LegalSection
                  id='governing-law'
                  number='12'
                  title='Governing Law'
                >
                  <p>
                    These Terms and your use of the Services are governed by the
                    laws of the Province of Ontario and applicable federal laws
                    of Canada, without regard to conflict-of-law principles.
                  </p>
                </LegalSection>

                <LegalSection
                  id='disputes'
                  number='13'
                  title='Dispute Resolution'
                >
                  <p>
                    Subject to applicable law, disputes arising from these Terms
                    or the Services will be addressed through courts located in
                    Ontario, Canada.
                  </p>
                </LegalSection>

                <LegalSection
                  id='corrections'
                  number='14'
                  title='Corrections'
                >
                  <p>
                    Information presented through the Services may occasionally
                    contain typographical errors, inaccuracies, or omissions.
                    We may correct or update such information when appropriate.
                  </p>
                </LegalSection>

                <LegalSection
                  id='disclaimer'
                  number='15'
                  title='Disclaimer'
                >
                  <p>
                    To the fullest extent permitted by applicable law, the
                    Services are provided on an “as-is” and “as-available”
                    basis.
                  </p>

                  <p>
                    We do not guarantee uninterrupted availability, complete
                    accuracy, or that the Services will meet every individual
                    requirement.
                  </p>
                </LegalSection>

                <LegalSection
                  id='liability'
                  number='16'
                  title='Limitations of Liability'
                >
                  <p>
                    To the fullest extent permitted by applicable law, Sanova
                    Web Solutions and its directors, employees, contractors, and
                    agents will not be liable for indirect, incidental,
                    consequential, exemplary, special, or punitive damages
                    arising from use of the Services.
                  </p>
                </LegalSection>

                <LegalSection
                  id='user-data'
                  number='18'
                  title='User Data'
                >
                  <p>
                    We may maintain certain data transmitted through the Services
                    for operational, performance, security, and service-management
                    purposes.
                  </p>

                  <p>
                    Users remain responsible for maintaining appropriate copies
                    or backups of information they provide where necessary.
                  </p>
                </LegalSection>

                <LegalSection
                  id='electronic'
                  number='19'
                  title='Electronic Communications, Transactions, and Signatures'
                >
                  <p>
                    By using our Services, sending emails, or completing online
                    forms, you consent to electronic communications relating to
                    your interactions with Sanova Web Solutions.
                  </p>

                  <p>
                    Where legally permitted, electronic notices, agreements,
                    records, and signatures may satisfy applicable writing or
                    signature requirements.
                  </p>
                </LegalSection>

                <LegalSection
                  id='california'
                  number='20'
                  title='California Users and Residents'
                >
                  <p>
                    California residents may have additional consumer rights
                    under applicable state law and may contact the appropriate
                    state consumer-protection authorities where applicable.
                  </p>
                </LegalSection>

                <LegalSection
                  id='miscellaneous'
                  number='21'
                  title='Miscellaneous'
                >
                  <p>
                    These Terms, together with incorporated policies, represent
                    the agreement governing use of the Services.
                  </p>

                  <p>
                    If any provision is found unenforceable, the remaining
                    provisions will continue in effect to the extent permitted
                    by law.
                  </p>

                  <p>
                    Nothing in these Terms creates an agency, partnership, joint
                    venture, or employment relationship between you and Sanova
                    Web Solutions.
                  </p>
                </LegalSection>
              </div>
            </div>
          </article>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}

function LegalSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id}>
      <div className='not-prose mt-16 flex items-center gap-4 border-t border-white/[0.08] pt-10'>
        <span className='text-xs font-semibold tracking-[0.16em] text-violet-300'>
          {number}
        </span>

        <span className='h-px flex-1 bg-white/[0.08]' />
      </div>

      <h2>{title}</h2>

      {children}
    </section>
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