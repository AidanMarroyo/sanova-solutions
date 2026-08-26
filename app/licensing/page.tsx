import { Metadata } from 'next';
import { FileKey2, FileText, Scale, ShieldCheck } from 'lucide-react';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';


export const metadata: Metadata = {
  title: {
    absolute: 'Licensing Information | Sanova Web Solutions',
  },

  description:
    'Review Sanova Web Solutions licensing terms covering websites, software, digital services, intellectual property, usage rights, ownership, distribution, and permitted use.',

  keywords: [
    'Sanova Web Solutions licensing',
    'website licensing terms',
    'software licensing terms',
    'digital services licensing',
    'website ownership rights',
    'software usage rights',
    'website usage rights',
    'intellectual property terms',
    'digital product licensing',
    'website development licensing',
    'software distribution rights',
    'website ownership agreement',
    'Sanova Web Solutions terms',
  ],

  authors: [
    {
      name: 'Sanova Web Solutions',
    },
  ],

  creator: 'Sanova Web Solutions',
  publisher: 'Sanova Web Solutions',
  category: 'Legal Information',

  alternates: {
    canonical: '/licensing',
  },

  openGraph: {
    title: 'Licensing Information | Sanova Web Solutions',
    description:
      'Review licensing, ownership, intellectual property, usage rights, and distribution terms for websites, software, and digital services provided by Sanova Web Solutions.',
    url: '/licensing',
    siteName: 'Sanova Web Solutions',
    type: 'website',
    locale: 'en_CA',
  },

  twitter: {
    card: 'summary',
    title: 'Licensing Information | Sanova Web Solutions',
    description:
      'Licensing, ownership, intellectual property, usage rights, and distribution information for Sanova Web Solutions websites, software, and digital services.',
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
  { label: 'Client Ownership', href: '#client-ownership' },
  { label: 'Transfer of Ownership', href: '#transfer-of-ownership' },
  { label: 'Source Code', href: '#source-code' },
  { label: 'Sanova Pre-Existing Intellectual Property', href: '#sanova-pre-existing-intellectual-property' },
  { label: 'Licence to Use Sanova Components', href: '#licence-to-use-sanova-components' },
  { label: 'Open-Source Software', href: '#open-source-software' },
  { label: 'Third-Party Software', href: '#third-party-software' },
  { label: 'Third-Party Accounts', href: '#third-party-accounts' },
  { label: 'Premium Software and Paid Licences', href: '#premium-software-and-paid-licences' },
  { label: 'Stock Photography', href: '#stock-photography' },
  { label: 'Client-Provided Photography', href: '#client-provided-photography' },
  { label: 'Images Found Online', href: '#images-found-online' },
  { label: 'Icons and Illustrations', href: '#icons-and-illustrations' },
  { label: 'Fonts', href: '#fonts' },
  { label: 'Client Logos and Branding', href: '#client-logos-and-branding' },
  { label: 'Content Ownership', href: '#content-ownership' },
  { label: 'Client Responsibility for Content Rights', href: '#client-responsibility-for-content-rights' },
  { label: 'Trademarks', href: '#trademarks' },
  { label: 'Website Design Concepts', href: '#website-design-concepts' },
  { label: 'Unused Source Code', href: '#unused-source-code' },
  { label: 'Non-Exclusive Development Techniques', href: '#non-exclusive-development-techniques' },
  { label: 'Custom Functionality', href: '#custom-functionality' },
  { label: 'Databases and Client Data', href: '#databases-and-client-data' },
  { label: 'Website Accounts', href: '#website-accounts' },
  { label: 'Domain Names', href: '#domain-names' },
  { label: 'Hosting Platforms', href: '#hosting-platforms' },
  { label: 'APIs and External Integrations', href: '#apis-and-external-integrations' },
  { label: 'Payment Processing', href: '#payment-processing' },
  { label: 'Software-as-a-Service Platforms', href: '#software-as-a-service-platforms' },
  { label: 'Licence Changes', href: '#licence-changes' },
  { label: 'Licence Expiration', href: '#licence-expiration' },
  { label: 'Developer Access', href: '#developer-access' },
  { label: 'Resale of the Website', href: '#resale-of-the-website' },
  { label: 'Reselling Sanova Components', href: '#reselling-sanova-components' },
  { label: 'Portfolio Rights', href: '#portfolio-rights' },
  { label: 'Attribution', href: '#attribution' },
  { label: 'Confidential Projects', href: '#confidential-projects' },
  { label: 'Licence Compliance', href: '#licence-compliance' },
  { label: 'Unauthorized Use', href: '#unauthorized-use' },
  { label: 'Project-Specific Licensing Terms', href: '#project-specific-licensing-terms' },
  { label: 'Changes to Licensing Information', href: '#changes-to-licensing-information' },
  { label: 'Questions About Licensing', href: '#questions-about-licensing' },
  { label: 'Project Agreements', href: '#project-agreements' },
];

export default function LicensingTerms() {
  return (
    <main className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
      {/* Background atmosphere */}
      <div aria-hidden='true' className='pointer-events-none absolute inset-0'>
        <div className='absolute left-1/2 top-[-16rem] h-[42rem] w-[50rem] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[160px]' />
        <div className='absolute right-[-16rem] bottom-[10%] h-[32rem] w-[32rem] rounded-full bg-blue-600/[0.04] blur-[150px]' />
        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
      </div>

      <MaxWidthWrapper className='relative'>
        {/* Header */}
        <div className='mx-auto max-w-4xl text-center'>
          <div className='mb-5 flex items-center justify-center gap-3'>
            <span className='h-px w-8 bg-violet-400' />
            <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
              Legal &amp; licensing
            </span>
            <span className='h-px w-8 bg-violet-400' />
          </div>

          <h1 className='text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl'>
            Licensing terms
          </h1>

          <p className='mx-auto mt-5 text-sm font-medium uppercase tracking-[0.16em] text-violet-300/80'>
            Effective Date: August 24, 2026
          </p>

          <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
            This Licensing Information page explains how intellectual property, website code, third-party software, digital assets, and related materials are handled when Sanova Web Solutions designs and develops a website for a client.
          </p>
          <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
            Our goal is to make ownership and licensing as clear as possible.
          </p>
          <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
            Unless otherwise stated in a signed project agreement, the policies below apply to website projects completed by Sanova Web Solutions.
          </p>
          <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
            If there is a conflict between this page and a signed project agreement, the signed project agreement will govern.
          </p>

          <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
            <LegalBadge icon={FileKey2} label='Usage rights' />
            <LegalBadge icon={Scale} label='Clear terms' />
            <LegalBadge icon={ShieldCheck} label='Protected IP' />
          </div>
        </div>

        <div className='mx-auto mt-16 grid max-w-6xl gap-12 lg:mt-24 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 xl:gap-20'>
          {/* Contents */}
          <aside className='hidden lg:block'>
            <div className='sticky top-32'>
              <p className='mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25'>
                On this page
              </p>

              <nav className='max-h-[calc(100vh-11rem)] space-y-1 overflow-y-auto pr-2'>
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

          {/* Licensing policy */}
          <article className='min-w-0'>
            <div className='rounded-[2rem] border border-white/[0.08] bg-white/[0.025] px-6 py-8 shadow-2xl shadow-black/20 sm:px-8 sm:py-10 lg:px-12 lg:py-12'>
              <div className='mb-10 flex items-start gap-4 rounded-[1.25rem] border border-violet-400/15 bg-violet-400/[0.05] p-5'>
                <FileText className='mt-0.5 size-5 shrink-0 text-violet-300' />

                <p className='text-sm leading-7 text-white/45'>
                  These are Sanova Web Solutions&apos; general licensing and intellectual property terms. If this page conflicts with a signed project agreement, the signed project agreement governs.
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
                <section id='client-ownership'>
                  <h2>1. Client Ownership</h2>
                  <p>Once a website project has been completed and the full project balance has been paid, the client receives ownership of the completed website and the custom deliverables created specifically for that project, subject to any third-party or open-source licensing restrictions.</p>
                  <p>This may include:</p>
                  <ul>
                    <li>Custom website layouts</li>
                    <li>Custom page designs</li>
                    <li>Project-specific source code</li>
                    <li>Custom components created specifically for the project</li>
                    <li>Client-specific content structures</li>
                    <li>Custom graphics created specifically for the project</li>
                    <li>Project-specific functionality</li>
                    <li>Project files identified as client deliverables</li>
                  </ul>
                  <p>Sanova Web Solutions does not require clients to continue paying a subscription in order to retain ownership of a completed and fully paid website.</p>
                </section>

                <section id='transfer-of-ownership'>
                  <h2>2. Transfer of Ownership</h2>
                  <p>Ownership of custom project deliverables transfers only after all outstanding project invoices have been paid in full.</p>
                  <p>Until final payment has been received, all custom design, development work, source code, concepts, and project deliverables remain the property of Sanova Web Solutions unless otherwise stated in writing.</p>
                  <p>Sanova is not required to transfer:</p>
                  <ul>
                    <li>Source code</li>
                    <li>Repository ownership</li>
                    <li>Production access</li>
                    <li>Final design files</li>
                    <li>Hosting ownership</li>
                    <li>Project credentials</li>
                    <li>Other final deliverables</li>
                  </ul>
                  <p>until the project balance has been paid.</p>
                </section>

                <section id='source-code'>
                  <h2>3. Source Code</h2>
                  <p>Once the project has been completed and paid in full, Sanova Web Solutions can provide or transfer the source code associated with the completed website.</p>
                  <p>Depending on the project, this may be done through:</p>
                  <ul>
                    <li>A Git repository</li>
                    <li>GitHub</li>
                    <li>A client-controlled development account</li>
                    <li>A downloadable project archive</li>
                    <li>Another agreed development platform</li>
                  </ul>
                  <p>The client may use the completed project source code to operate, modify, maintain, or expand their website.</p>
                </section>

                <section id='sanova-pre-existing-intellectual-property'>
                  <h2>4. Sanova Pre-Existing Intellectual Property</h2>
                  <p>Website development often involves systems, components, tools, code, and processes that existed before a particular client project began.</p>
                  <p>Sanova Web Solutions retains ownership of its pre-existing intellectual property.</p>
                  <p>This may include:</p>
                  <ul>
                    <li>Internal development tools</li>
                    <li>Reusable components</li>
                    <li>Boilerplate code</li>
                    <li>Utility functions</li>
                    <li>Development libraries</li>
                    <li>Internal frameworks</li>
                    <li>Design systems</li>
                    <li>Generic layouts</li>
                    <li>Code patterns</li>
                    <li>Internal scripts</li>
                    <li>Workflows</li>
                    <li>Deployment processes</li>
                    <li>Documentation systems</li>
                    <li>Business processes</li>
                    <li>Internal templates</li>
                    <li>Know-how</li>
                    <li>Development techniques</li>
                  </ul>
                  <p>These resources may be reused across multiple projects.</p>
                  <p>The client does not obtain exclusive ownership of Sanova's general-purpose tools or intellectual property simply because those resources were used during development of the client's website.</p>
                </section>

                <section id='licence-to-use-sanova-components'>
                  <h2>5. Licence to Use Sanova Components</h2>
                  <p>Where Sanova-owned reusable code or components are included within a completed website, the client receives a licence to use those materials as part of the completed website.</p>
                  <p>Unless otherwise stated in writing, this licence allows the client to:</p>
                  <ul>
                    <li>Operate the website</li>
                    <li>Host the website</li>
                    <li>Modify the website</li>
                    <li>Hire another developer to modify the website</li>
                    <li>Move the website to another hosting provider</li>
                    <li>Continue using the website for their business</li>
                  </ul>
                  <p>The client may not claim exclusive ownership of Sanova's pre-existing reusable systems or prevent Sanova from using similar code, techniques, components, or functionality in other projects.</p>
                </section>

                <section id='open-source-software'>
                  <h2>6. Open-Source Software</h2>
                  <p>Sanova Web Solutions may use open-source software as part of website development.</p>
                  <p>This may include:</p>
                  <ul>
                    <li>Frameworks</li>
                    <li>Libraries</li>
                    <li>Packages</li>
                    <li>Development tools</li>
                    <li>UI components</li>
                    <li>Utilities</li>
                    <li>Build tools</li>
                    <li>Other open-source software</li>
                  </ul>
                  <p>Examples may include technologies such as React, Next.js, TypeScript packages, and other software commonly used in modern web development.</p>
                  <p>Open-source software remains subject to its original licence.</p>
                  <p>Sanova Web Solutions does not claim ownership of third-party open-source software.</p>
                  <p>Clients receiving a website that incorporates open-source software are also responsible for complying with any applicable open-source licence requirements.</p>
                </section>

                <section id='third-party-software'>
                  <h2>7. Third-Party Software</h2>
                  <p>Websites may rely on third-party products, platforms, or services.</p>
                  <p>Examples may include:</p>
                  <ul>
                    <li>Hosting platforms</li>
                    <li>Content management systems</li>
                    <li>Booking software</li>
                    <li>Payment processors</li>
                    <li>Ecommerce platforms</li>
                    <li>Email providers</li>
                    <li>CRM platforms</li>
                    <li>Analytics services</li>
                    <li>APIs</li>
                    <li>Chat services</li>
                    <li>Maps</li>
                    <li>Scheduling systems</li>
                    <li>Form services</li>
                    <li>Authentication providers</li>
                    <li>Database services</li>
                  </ul>
                  <p>These products are owned and controlled by their respective providers.</p>
                  <p>The client does not obtain ownership of third-party software simply because it is integrated into their website.</p>
                  <p>Use of these services is governed by the provider's own terms, conditions, pricing, and licence agreements.</p>
                </section>

                <section id='third-party-accounts'>
                  <h2>8. Third-Party Accounts</h2>
                  <p>Whenever practical, third-party services required for the operation of a client's website should be created under accounts owned or controlled by the client.</p>
                  <p>This may include accounts for:</p>
                  <ul>
                    <li>Vercel</li>
                    <li>Domain registrars</li>
                    <li>Analytics platforms</li>
                    <li>Email platforms</li>
                    <li>Payment processors</li>
                    <li>Booking platforms</li>
                    <li>Ecommerce systems</li>
                    <li>CRM software</li>
                    <li>Database providers</li>
                    <li>API providers</li>
                  </ul>
                  <p>This helps ensure that the client maintains control of their business systems after the website project is completed.</p>
                </section>

                <section id='premium-software-and-paid-licences'>
                  <h2>9. Premium Software and Paid Licences</h2>
                  <p>Some projects may require premium software, services, fonts, plugins, APIs, templates, stock assets, or other licensed materials.</p>
                  <p>Unless otherwise stated in the project proposal, these licence fees are separate from Sanova's website development fees.</p>
                  <p>Some licences may:</p>
                  <ul>
                    <li>Require annual renewal</li>
                    <li>Require monthly payment</li>
                    <li>Be limited to one website</li>
                    <li>Be non-transferable</li>
                    <li>Be tied to a specific account</li>
                    <li>Be subject to usage limits</li>
                    <li>Change in price over time</li>
                  </ul>
                  <p>Sanova will make reasonable efforts to explain known recurring licence requirements before the service is incorporated into the project.</p>
                </section>

                <section id='stock-photography'>
                  <h2>10. Stock Photography</h2>
                  <p>Sanova Web Solutions may use properly licensed stock photography when appropriate.</p>
                  <p>Stock photography remains the intellectual property of the original photographer or stock provider.</p>
                  <p>The client receives the right to use stock images according to the applicable licence.</p>
                  <p>A stock licence does not necessarily give the client exclusive ownership of the image.</p>
                  <p>The same image may legally be used by other businesses that obtain their own licence.</p>
                </section>

                <section id='client-provided-photography'>
                  <h2>11. Client-Provided Photography</h2>
                  <p>The client retains ownership of photographs they provide if they already own those photographs.</p>
                  <p>By providing photography to Sanova Web Solutions, the client confirms that they have the necessary rights or permission to use those images commercially.</p>
                  <p>Sanova is not responsible for copyright claims arising from materials supplied by the client without appropriate permission.</p>
                </section>

                <section id='images-found-online'>
                  <h2>12. Images Found Online</h2>
                  <p>Images found through Google Search, social media, another business's website, or other online sources are not automatically licensed for commercial use.</p>
                  <p>Sanova generally will not knowingly use copyrighted imagery without appropriate permission or licensing.</p>
                  <p>Images supplied as references may be used to guide the visual direction of a project, but they may need to be replaced with appropriately licensed alternatives.</p>
                </section>

                <section id='icons-and-illustrations'>
                  <h2>13. Icons and Illustrations</h2>
                  <p>Websites may include icons, illustrations, or other graphical elements supplied by third-party providers.</p>
                  <p>These assets remain subject to the provider's licence.</p>
                  <p>Depending on the licence, attribution or other conditions may apply.</p>
                  <p>Sanova will not claim ownership of third-party graphical assets.</p>
                </section>

                <section id='fonts'>
                  <h2>14. Fonts</h2>
                  <p>Websites may use:</p>
                  <ul>
                    <li>Open-source fonts</li>
                    <li>System fonts</li>
                    <li>Commercial fonts</li>
                    <li>Third-party hosted fonts</li>
                  </ul>
                  <p>Each font remains subject to its own licence.</p>
                  <p>If a project requires a paid commercial font, the client may be responsible for purchasing the appropriate web licence.</p>
                </section>

                <section id='client-logos-and-branding'>
                  <h2>15. Client Logos and Branding</h2>
                  <p>Clients retain ownership of logos, trademarks, brand names, colour systems, graphics, and other brand assets that they provide to Sanova Web Solutions.</p>
                  <p>By supplying these materials, the client confirms that they have the necessary rights to use them.</p>
                  <p>Sanova may use client branding solely as necessary to complete the project and as otherwise permitted under the project agreement.</p>
                </section>

                <section id='content-ownership'>
                  <h2>16. Content Ownership</h2>
                  <p>Clients retain ownership of original written content they provide.</p>
                  <p>This may include:</p>
                  <ul>
                    <li>Service descriptions</li>
                    <li>Business information</li>
                    <li>Team biographies</li>
                    <li>Policies</li>
                    <li>Blog content</li>
                    <li>Testimonials</li>
                    <li>Product descriptions</li>
                    <li>Company history</li>
                    <li>Other original written material</li>
                  </ul>
                  <p>If Sanova writes original website content specifically for the client as a paid deliverable, ownership of that custom content transfers to the client after full payment unless otherwise stated in writing.</p>
                </section>

                <section id='client-responsibility-for-content-rights'>
                  <h2>17. Client Responsibility for Content Rights</h2>
                  <p>Clients are responsible for ensuring that they have permission to use all materials they provide.</p>
                  <p>This includes:</p>
                  <ul>
                    <li>Text</li>
                    <li>Images</li>
                    <li>Videos</li>
                    <li>Logos</li>
                    <li>Music</li>
                    <li>Documents</li>
                    <li>Graphics</li>
                    <li>Product photography</li>
                    <li>Testimonials</li>
                    <li>Brand assets</li>
                    <li>Data</li>
                  </ul>
                  <p>By providing materials to Sanova, the client represents that their use does not knowingly infringe the rights of another person or organization.</p>
                </section>

                <section id='trademarks'>
                  <h2>18. Trademarks</h2>
                  <p>Sanova Web Solutions does not transfer ownership of any third-party trademark, brand name, logo, product name, or other protected mark.</p>
                  <p>Clients are responsible for ensuring that they have the right to use any trademarks or protected brand assets included on their website.</p>
                </section>

                <section id='website-design-concepts'>
                  <h2>19. Website Design Concepts</h2>
                  <p>Drafts, unused design concepts, rejected concepts, experiments, mockups, and other work not included in the final approved deliverables remain the property of Sanova Web Solutions unless otherwise agreed in writing.</p>
                  <p>Payment for a completed website does not automatically transfer ownership of every draft or concept created during the design process.</p>
                </section>

                <section id='unused-source-code'>
                  <h2>20. Unused Source Code</h2>
                  <p>Source code created during experimentation, testing, prototyping, or internal development that is not included in the final website is not automatically transferred to the client.</p>
                  <p>Only the final agreed project deliverables are included in the standard ownership transfer.</p>
                </section>

                <section id='non-exclusive-development-techniques'>
                  <h2>21. Non-Exclusive Development Techniques</h2>
                  <p>Clients acknowledge that websites often use common development patterns.</p>
                  <p>Sanova Web Solutions may create similar:</p>
                  <ul>
                    <li>Navigation systems</li>
                    <li>Contact forms</li>
                    <li>Layout structures</li>
                    <li>Components</li>
                    <li>Animations</li>
                    <li>User interface patterns</li>
                    <li>Development approaches</li>
                    <li>Technical solutions</li>
                  </ul>
                  <p>for other clients.</p>
                  <p>The client receives ownership of their completed project-specific deliverables but does not receive exclusive rights to general web development techniques, functionality, patterns, or ideas.</p>
                </section>

                <section id='custom-functionality'>
                  <h2>22. Custom Functionality</h2>
                  <p>Where Sanova develops custom functionality specifically for a client and that functionality is included as a paid deliverable, ownership of the project-specific implementation transfers after full payment.</p>
                  <p>However, Sanova retains the right to reuse general programming concepts, reusable logic, utilities, approaches, and non-client-specific components developed during the project.</p>
                </section>

                <section id='databases-and-client-data'>
                  <h2>23. Databases and Client Data</h2>
                  <p>The client owns their business and customer data.</p>
                  <p>This may include:</p>
                  <ul>
                    <li>Customer records</li>
                    <li>Form submissions</li>
                    <li>Leads</li>
                    <li>Account information</li>
                    <li>Product information</li>
                    <li>Internal business records</li>
                    <li>Uploaded content</li>
                    <li>Other client-generated information</li>
                  </ul>
                  <p>Third-party database platforms remain subject to the terms of their respective providers.</p>
                </section>

                <section id='website-accounts'>
                  <h2>24. Website Accounts</h2>
                  <p>Accounts created specifically for the client's ongoing operation of the website should generally be transferred to or maintained under the client's control.</p>
                  <p>The client is responsible for:</p>
                  <ul>
                    <li>Keeping login credentials secure</li>
                    <li>Maintaining account access</li>
                    <li>Paying third-party fees</li>
                    <li>Renewing required subscriptions</li>
                    <li>Updating billing information</li>
                    <li>Maintaining recovery information</li>
                  </ul>
                  <p>Sanova is not responsible for loss of access caused by client account mismanagement after project handoff.</p>
                </section>

                <section id='domain-names'>
                  <h2>25. Domain Names</h2>
                  <p>The client should own their domain name.</p>
                  <p>Sanova does not claim ownership of client domain names.</p>
                  <p>If Sanova assists with domain registration, the domain should whenever practical be registered using client-controlled account information.</p>
                  <p>Domain names remain subject to the policies and registration requirements of the applicable domain registrar and registry.</p>
                </section>

                <section id='hosting-platforms'>
                  <h2>26. Hosting Platforms</h2>
                  <p>Hosting software and infrastructure remain the property of the hosting provider.</p>
                  <p>For example, if a website is deployed through Vercel, the client owns their website but does not own Vercel's platform, infrastructure, or proprietary software.</p>
                  <p>The client is responsible for complying with the hosting provider's terms and acceptable-use policies.</p>
                </section>

                <section id='apis-and-external-integrations'>
                  <h2>27. APIs and External Integrations</h2>
                  <p>Websites may connect to third-party APIs or external platforms.</p>
                  <p>Use of those integrations remains subject to the provider's:</p>
                  <ul>
                    <li>API terms</li>
                    <li>Usage limits</li>
                    <li>Pricing</li>
                    <li>Rate limits</li>
                    <li>Licensing conditions</li>
                    <li>Availability</li>
                    <li>Privacy requirements</li>
                  </ul>
                  <p>Sanova cannot grant broader rights to an API or external platform than the third-party provider allows.</p>
                </section>

                <section id='payment-processing'>
                  <h2>28. Payment Processing</h2>
                  <p>Where a website uses a third-party payment processor, the payment platform remains owned and operated by the third-party provider.</p>
                  <p>Examples may include:</p>
                  <ul>
                    <li>Stripe</li>
                    <li>Square</li>
                    <li>PayPal</li>
                    <li>Shopify Payments</li>
                    <li>Other payment services</li>
                  </ul>
                  <p>The client is responsible for establishing and maintaining their own merchant or payment-processing account where required.</p>
                </section>

                <section id='software-as-a-service-platforms'>
                  <h2>29. Software-as-a-Service Platforms</h2>
                  <p>Some functionality may rely on Software-as-a-Service platforms.</p>
                  <p>Examples may include:</p>
                  <ul>
                    <li>Booking systems</li>
                    <li>Email marketing platforms</li>
                    <li>CRM tools</li>
                    <li>Ecommerce systems</li>
                    <li>Analytics tools</li>
                    <li>Customer support systems</li>
                    <li>Scheduling platforms</li>
                  </ul>
                  <p>The client receives access to these services under the provider's terms but does not obtain ownership of the software itself.</p>
                </section>

                <section id='licence-changes'>
                  <h2>30. Licence Changes</h2>
                  <p>Third-party providers may change their licence terms, pricing, functionality, or availability.</p>
                  <p>Sanova Web Solutions does not control these changes.</p>
                  <p>If a third-party licensing change affects the operation of a client's website, Sanova may assist with updating or replacing the affected service.</p>
                  <p>Additional development required because of third-party licensing changes may be quoted separately.</p>
                </section>

                <section id='licence-expiration'>
                  <h2>31. Licence Expiration</h2>
                  <p>Some paid licences must be renewed periodically.</p>
                  <p>If a required licence expires, functionality may:</p>
                  <ul>
                    <li>Stop working</li>
                    <li>Become limited</li>
                    <li>Lose access to updates</li>
                    <li>Lose support</li>
                    <li>Display errors</li>
                    <li>Require replacement</li>
                  </ul>
                  <p>Unless Sanova has agreed in writing to manage an ongoing licence, the client is responsible for maintaining licence renewals after handoff.</p>
                </section>

                <section id='developer-access'>
                  <h2>32. Developer Access</h2>
                  <p>Clients may allow another developer or agency to access and modify their completed website after ownership has transferred.</p>
                  <p>Sanova does not require clients to obtain permission before hiring another qualified developer.</p>
                  <p>Sanova is not responsible for issues introduced by modifications made by third parties after handoff.</p>
                </section>

                <section id='resale-of-the-website'>
                  <h2>33. Resale of the Website</h2>
                  <p>A client may generally continue using the website as part of their business and may transfer the completed website if the business itself is sold, subject to any third-party licensing restrictions.</p>
                  <p>Third-party assets, software, licences, subscriptions, and accounts may not always be transferable.</p>
                  <p>Clients should review the applicable provider's terms before transferring licensed services to another party.</p>
                </section>

                <section id='reselling-sanova-components'>
                  <h2>34. Reselling Sanova Components</h2>
                  <p>Client ownership of a completed website does not grant the right to separately extract, package, license, resell, or commercially distribute Sanova's reusable internal components, development tools, boilerplate, or other pre-existing intellectual property as a standalone product.</p>
                  <p>The licence to those materials is intended to allow normal operation and development of the client's website.</p>
                </section>

                <section id='portfolio-rights'>
                  <h2>35. Portfolio Rights</h2>
                  <p>Unless otherwise agreed in writing, Sanova Web Solutions may display completed websites as examples of our work.</p>
                  <p>This may include:</p>
                  <ul>
                    <li>Screenshots</li>
                    <li>Website links</li>
                    <li>Client business names</li>
                    <li>Client logos</li>
                    <li>Project descriptions</li>
                    <li>General descriptions of services performed</li>
                  </ul>
                  <p>Sanova may display this information through:</p>
                  <ul>
                    <li>Our website</li>
                    <li>Portfolio pages</li>
                    <li>Social media</li>
                    <li>Proposals</li>
                    <li>Marketing materials</li>
                    <li>Case studies</li>
                  </ul>
                  <p>Clients requiring confidentiality should discuss this before the project begins.</p>
                </section>

                <section id='attribution'>
                  <h2>36. Attribution</h2>
                  <p>Unless specifically included in the signed project agreement, clients are not required to display a visible "Designed by Sanova Web Solutions" credit on their website.</p>
                  <p>Sanova may request permission to include a discreet credit or link, but the requirement will be discussed before launch if applicable.</p>
                </section>

                <section id='confidential-projects'>
                  <h2>37. Confidential Projects</h2>
                  <p>Certain clients may require their project to remain confidential.</p>
                  <p>If confidentiality is required, the client should notify Sanova before the project begins.</p>
                  <p>Where agreed in writing, Sanova may waive portfolio or attribution rights for that specific project.</p>
                </section>

                <section id='licence-compliance'>
                  <h2>38. Licence Compliance</h2>
                  <p>Clients are responsible for continuing to comply with the licences associated with any third-party materials used in their website after project handoff.</p>
                  <p>Sanova will make reasonable efforts to use properly licensed materials during development but cannot control how clients or other developers later modify or use those assets.</p>
                </section>

                <section id='unauthorized-use'>
                  <h2>39. Unauthorized Use</h2>
                  <p>Sanova Web Solutions reserves all rights to its proprietary materials that are not expressly transferred or licensed to the client.</p>
                  <p>Unauthorized reproduction, resale, redistribution, sublicensing, or commercial exploitation of Sanova's internal proprietary materials may violate intellectual property rights.</p>
                </section>

                <section id='project-specific-licensing-terms'>
                  <h2>40. Project-Specific Licensing Terms</h2>
                  <p>Some website projects may involve unique licensing requirements.</p>
                  <p>For example:</p>
                  <ul>
                    <li>Custom software</li>
                    <li>White-label development</li>
                    <li>Enterprise software</li>
                    <li>Exclusive designs</li>
                    <li>Licensed datasets</li>
                    <li>Commercial APIs</li>
                    <li>Proprietary integrations</li>
                    <li>Specialized software components</li>
                  </ul>
                  <p>Any project-specific licensing terms should be outlined in the project's proposal or signed agreement.</p>
                </section>

                <section id='changes-to-licensing-information'>
                  <h2>41. Changes to Licensing Information</h2>
                  <p>Sanova Web Solutions may update this Licensing Information page as our services, technology, or business practices change.</p>
                  <p>Updates to this public page do not automatically change the licensing terms of an existing signed project agreement.</p>
                  <p>The effective date shown at the top indicates the current version of this page.</p>
                </section>

                <section id='questions-about-licensing'>
                  <h2>42. Questions About Licensing</h2>
                  <p>If you have questions about ownership, source code, third-party licences, website assets, or intellectual property associated with your project, please contact Sanova Web Solutions before approving your proposal.</p>
                  <p>We want clients to clearly understand what they own, what they are licensing, and what third-party services may remain subject to separate terms.</p>
                </section>

                <section id='project-agreements'>
                  <h2>Project Agreements</h2>
                  <p>This page provides general information about how Sanova Web Solutions handles website licensing and intellectual property.</p>
                  <p>Your individual proposal and signed project agreement may contain additional or different licensing terms based on the requirements of your project.</p>
                  <p><strong>If this Licensing Information page conflicts with your signed project agreement, the signed project agreement will govern.</strong></p>
                </section>

              </div>
            </div>
          </article>
        </div>

        {/* Legal note */}
        <div className='mx-auto mt-14 max-w-5xl rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02] px-6 py-7 sm:px-8 lg:mt-16'>
          <div className='flex items-start gap-4'>
            <div className='flex size-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/[0.06] text-violet-300'>
              <Scale className='size-[18px]' strokeWidth={1.8} />
            </div>

            <div>
              <p className='text-sm font-medium text-white'>
                Questions about licensing?
              </p>

              <p className='mt-2 max-w-3xl text-sm leading-7 text-white/35'>
                If you are unsure how these terms apply to a specific website,
                software project, deliverable, or usage scenario, contact Sanova
                Web Solutions before using or distributing the applicable work.
              </p>
            </div>
          </div>
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
      <Icon className='size-3.5 text-violet-300' strokeWidth={1.8} />
      {label}
    </div>
  );
}
