<<<<<<< HEAD
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Sanova Web Solutions',
  description:
    "Review the terms and conditions governing the use of Sanova Web Solutions' services. Understand your rights and responsibilities when working with us.",
};
export default function TermsPage() {
  return (
    <MaxWidthWrapper className='antialiased'>
      <div className='flex justify-between '>
        <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-invert'>
          <header className='mb-4 lg:mb-6 not-format'>
            <h1 className='text-center mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-white'>
              Terms of Service
            </h1>
          </header>

          <div>
            <h2 className='text-2xl font-semibold py-4'>
              AGREEMENT TO OUR LEGAL TERMS
            </h2>
            <p className='lead mb-4'>
              Welcome to Sanova Web Solutions (“Company,” “we,” “us,” “our”), a
              business registered in Ontario, Canada,{' '}
            </p>

            <p className='my-4'>
              We operate the website https://sanovawebsolutions.com (the “Site”)
              along with related services, applications, and products that link
              to or reference these terms (“Legal Terms”) (collectively, the
              “Services”).
            </p>
            <p className='my-4'>
              For any questions or concerns, you can reach us by phone at [Your
              Contact Number], email at [Your Contact Email], or mail at [Your
              Business Address Here].
            </p>
            <p className='my-4'>
              These Legal Terms form a binding agreement between you (“you” or
              “user”) and Sanova Web Solutions regarding your use of the
              Services. By accessing or using our Services, you acknowledge that
              you have read, understood, and agreed to these Legal Terms. IF YOU
              DO NOT AGREE WITH THESE TERMS, YOU ARE PROHIBITED FROM USING THE
              SERVICES AND SHOULD DISCONTINUE IMMEDIATELY.
            </p>
            <p className='my-4'>
              Supplemental terms or policies that may be posted on the Services
              from time to time are incorporated into these Legal Terms by
              reference. We reserve the right to modify or update these Legal
              Terms at our sole discretion. Changes will be noted by updating
              the “Last updated” date, and your continued use of the Services
              after such changes constitutes your acceptance of the updated
              terms. Please review these Legal Terms regularly.
            </p>
            <p className='my-4'>
              Our Services are intended for users who are at least 18 years old.
              If you are under 18, you may not access or register for our
              Services.
            </p>
            <p className='my-4'>
              We encourage you to keep a copy of these Legal Terms for your
              records.
            </p>

            <p className='my-4'>TABLE OF CONTENTS</p>
            <ol className='list-decimal pl-6 space-y-2'>
              <li>OUR SERVICES</li>
              <li>INTELLECTUAL PROPERTY RIGHTS</li>
              <li>USER REPRESENTATIONS</li>
              <li>PROHIBITED ACTIVITIES</li>
              <li>USER GENERATED CONTRIBUTIONS</li>
              <li>CONTRIBUTION LICENSE</li>
              <li>THIRD-PARTY WEBSITES AND CONTENT</li>
              <li>SERVICES MANAGEMENT</li>
              <li>PRIVACY POLICY</li>
              <li>TERM AND TERMINATION</li>
              <li>MODIFICATIONS AND INTERRUPTIONS</li>
              <li>GOVERNING LAW</li>
              <li>DISPUTE RESOLUTION</li>
              <li>CORRECTIONS</li>
              <li>DISCLAIMER</li>
              <li>LIMITATIONS OF LIABILITY</li>
              <li>INDEMNIFICATION</li>
              <li>USER DATA</li>
              <li>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</li>
              <li>CALIFORNIA USERS AND RESIDENTS</li>
              <li>MISCELLANEOUS</li>
              <li>CONTACT US</li>
            </ol>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>1. OUR SERVICES</h2>
            <p className='my-4'>
              The Services and information provided are not intended for
              distribution or use in jurisdictions where such actions would
              violate laws or regulations or impose registration requirements on
              us. Users accessing the Services from such locations do so at
              their own risk and are responsible for compliance with local laws.
            </p>
            <p className='my-4'>
              The Services are not designed to meet specific industry
              regulations such as HIPAA, FISMA, or GLBA. If your activities
              require compliance with these or similar laws, you may not use our
              Services.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>
              2. INTELLECTUAL PROPERTY RIGHTS
            </h2>
            <h3 className='text-lg font-semibold my-4'>
              Our Intellectual Property
            </h3>
            <p className='my-4'>
              Sanova Web Solutions owns or is licensed to use all intellectual
              property associated with our Services, including but not limited
              to source code, databases, functionality, software, designs, text,
              images, and graphics (collectively, “Content”) and trademarks,
              service marks, and logos (“Marks”). These are protected under
              copyright, trademark, and other intellectual property laws
              worldwide.
            </p>
            <p className='my-4'>
              The Content and Marks are provided “AS IS” for your personal or
              internal business use only. Any other use, including commercial
              exploitation, reproduction, or distribution, requires our explicit
              written consent.
            </p>

            <h3 className='text-lg font-semibold my-4'>
              Your Use of Our Services
            </h3>

            <p className='mb-4'>
              You are granted a limited, non-exclusive, non-transferable, and
              revocable license to:
            </p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>Access the Services; and</li>
              <li>
                Download or print portions of the Content for personal or
                internal business purposes.
              </li>
            </ul>
            <p className='my-4'>
              Unauthorized use of our Content or Marks is prohibited. If you
              wish to use our Services or Content for purposes beyond those
              permitted, please contact us at [Your Contact Email].
            </p>

            <h3 className='text-lg font-semibold my-4'>Your Submissions</h3>
            <p className='my-4'>
              Any suggestions, feedback, or other information you submit to us
              (“Submissions”) become our property, and we may use them for any
              purpose without acknowledgment or compensation to you. By
              submitting content, you confirm that you have the necessary rights
              to do so and that your submission does not violate any laws or
              third-party rights.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>
              3. USER REPRESENTATIONS
            </h2>
            <p className='my-4'>By using our Services, you represent that:</p>
            <ol className='list-decimal pl-6 space-y-2'>
              <li>
                You have the legal capacity to enter into these Legal Terms.
              </li>
              <li>You are not a minor in your jurisdiction.</li>
              <li>
                You will not access the Services using automated or unauthorized
                means.
              </li>
              <li>You will not use the Services for unlawful purposes.</li>
              <li>Your use complies with applicable laws and regulations.</li>
            </ol>
            <p className='my-4'>
              Providing false or misleading information may result in
              termination of your access to the Services.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>
              4. PROHIBITED ACTIVITIES
            </h2>
            <p className='my-4'>You agree not to:</p>
            <ol className='list-decimal pl-6 space-y-2'>
              <li>
                Exploit the Services for unauthorized commercial purposes.
              </li>
              <li>Circumvent security measures of the Services.</li>
              <li>
                Engage in data scraping, hacking, or other disruptive
                activities.
              </li>
              <li>Upload harmful or malicious content.</li>
              <li>
                Copy or modify our software or Content without permission.
              </li>
            </ol>
            <p className='my-4'>
              Any violation of these rules may result in suspension or
              termination of your access.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>
              5. USER-GENERATED CONTENT
            </h2>
            <p className='my-4'>
              Our Services do not currently permit users to submit or post
              content. Should this change, additional terms will apply.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>
              6. Contribution License
            </h2>
            <p className='my-4'>
              You and the Services agree that we may access, store, process, and
              use any information and personal data that you provide following
              the terms of the Privacy Policy and your choices (including
              settings).
            </p>
            <p className='my-4'>
              By submitting suggestions or other feedback regarding the
              Services, you agree that we can use and share such feedback for
              any purpose without compensation to you.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>
              7. Third-Party Websites and Content
            </h2>
            <p className='my-4'>
              The Services may contain (or you may be sent via the Site) links
              to other websites (&apos;Third-Party Websites&apos;) as well as
              articles, photographs, text, graphics, pictures, designs, music,
              sound, video, information, applications, software, and other
              content or items belonging to or originating from third parties
              (&apos;Third-Party Content&apos;). Such Third-Party Websites and
              Third-Party Content are not investigated, monitored, or checked
              for accuracy, appropriateness, or completeness by us, and we are
              not responsible for any Third-Party Websites accessed through the
              Services or any Third-Party Content posted on, available through,
              or installed from the Services, including the content, accuracy,
              offensiveness, opinions, reliability, privacy practices, or other
              policies of or contained in the Third-Party Websites or the
              Third-Party Content. Inclusion of, linking to, or permitting the
              use or installation of any Third-Party Websites or any Third-Party
              Content does not imply approval or endorsement thereof by us.
            </p>
            <p className='my-4'>
              If you decide to leave the Services and access the Third-Party
              Websites or to use or install any Third-Party Content, you do so
              at your own risk, and you should be aware these Legal Terms no
              longer govern. You should review the applicable terms and
              policies, including privacy and data gathering practices, of any
              website to which you navigate from the Services or relating to any
              applications you use or install from the Services. Any purchases
              you make through Third-Party Websites will be through other
              websites and from other companies, and we take no responsibility
              whatsoever in relation to such purchases, which are exclusively
              between you and the applicable third party. You agree and
              acknowledge that we do not endorse the products or services
              offered on Third-Party Websites, and you shall hold us blameless
              from any harm caused by your purchase of such products or
              services. Additionally, you shall hold us blameless from any
              losses sustained by you or harm caused to you relating to or
              resulting in any way from any Third-Party Content or any contact
              with Third-Party Websites.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>9. Privacy Policy</h2>
            <p className='my-4'>
              We care about data privacy and security. Please review our Privacy
              Policy: https://sanovawebsolutions.com/privacy-policy. By using
              the Services, you agree to be bound by our Privacy Policy, which
              is incorporated into these Legal Terms. Please be advised the
              Services are hosted in the United States. If you access the
              Services from any other region of the world with laws or other
              requirements governing personal data collection, use, or
              disclosure that differ from applicable laws in the United States,
              then through your continued use of the Services, you are
              transferring your data to the United States, and you expressly
              consent to have your data transferred to and processed in the
              United States.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>
              10. Term and Termination
            </h2>
            <p className='my-4'>
              These Legal Terms shall remain in full force and effect while you
              use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE
              LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
              WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE
              SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON
              FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR
              BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN
              THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY
              TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY
              CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT
              WARNING, IN OUR SOLE DISCRETION.
            </p>
            <p className='my-4'>
              If we terminate or suspend your account for any reason, you are
              prohibited from registering and creating a new account under your
              name, a fake or borrowed name, or the name of any third party,
              even if you may be acting on behalf of the third party. In
              addition to terminating or suspending your account, we reserve the
              right to take appropriate legal action, including without
              limitation pursuing civil, criminal, and injunctive redress.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>
              11. Modifications and Interruptions
            </h2>
            <p className='my-4'>
              We reserve the right to change, modify, or remove the contents of
              the Services at any time or for any reason at our sole discretion
              without notice. However, we have no obligation to update any
              information on our Services. We will not be liable to you or any
              third party for any modification, price change, suspension, or
              discontinuance of the Services.
            </p>
            <p className='my-4'>
              We cannot guarantee the Services will be available at all times.
              We may experience hardware, software, or other problems or need to
              perform maintenance related to the Services, resulting in
              interruptions, delays, or errors. We reserve the right to change,
              revise, update, suspend, discontinue, or otherwise modify the
              Services at any time or for any reason without notice to you. You
              agree that we have no liability whatsoever for any loss, damage,
              or inconvenience caused by your inability to access or use the
              Services during any downtime or discontinuance of the Services.
              Nothing in these Legal Terms will be construed to obligate us to
              maintain and support the Services or to supply any corrections,
              updates, or releases in connection therewith.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>12. Governing Law</h2>
            <p className='my-4'>
              These Legal Terms and your use of the Services are governed by and
              construed in accordance with the laws of the Province of Ontario
              and the federal laws of Canada applicable therein, without regard
              to its conflict of law principles.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>
              13. Dispute Resolution
            </h2>
            <p className='my-4'>
              Any legal action of whatever nature brought by either you or us
              (collectively, the &apos;Parties&apos; and individually, a
              &apos;Party&apos;) shall be commenced or prosecuted in the courts
              located in the Province of Ontario, and the Parties hereby consent
              to, and waive all defenses of lack of personal jurisdiction and
              forum non conveniens with respect to venue and jurisdiction in
              such courts. Application of the United Nations Convention on
              Contracts for the International Sale of Goods is excluded from
              these Legal Terms. In no event shall any claim, action, or
              proceeding brought by either Party related in any way to the
              Services be commenced more than one (1) year after the cause of
              action arose.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>14. Corrections</h2>
            <p className='my-4'>
              There may be information on the Services that contains
              typographical errors, inaccuracies, or omissions, including
              descriptions, pricing, availability, and various other
              information. We reserve the right to correct any errors,
              inaccuracies, or omissions and to change or update the information
              on the Services at any time, without prior notice.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>15. Disclaimer</h2>
            <p className='my-4'>
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
              AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
              THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
              EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
              THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT
              THE ACCURACY OR COMPLETENESS OF THE SERVICES&apos; CONTENT OR THE
              CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE
              SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY
              (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS,
              (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
              RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY
              UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND
              ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED
              THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR
              FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE
              LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY
              THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND
              MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A
              RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE
              MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE,
              GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE
              ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY
              HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED
              IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO
              OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION
              BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
              AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR
              IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
              CAUTION WHERE APPROPRIATE.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>
              16. Limitations of Liability
            </h2>
            <p className='my-4'>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
              OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
              HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>18. User Data</h2>
            <p className='my-4'>
              We will maintain certain data that you transmit to the Services
              for the purpose of managing the performance of the Services, as
              well as data relating to your use of the Services. Although we
              perform regular routine backups of data, you are solely
              responsible for all data that you transmit or that relates to any
              activity you have undertaken using the Services. You agree that we
              shall have no liability to you for any loss or corruption of any
              such data, and you hereby waive any right of action against us
              arising from any such loss or corruption of such data.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>
              19. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
            </h2>
            <p className='my-4'>
              By using Sanova Web Solutions’ services, sending emails, or
              completing online forms, you consent to engage in electronic
              communications. You agree that all agreements, notices,
              disclosures, and other communications we provide
              electronically—via email or through our platform—satisfy any legal
              requirements that such communications be in writing. You
              explicitly agree to the use of electronic signatures, contracts,
              orders, and other records, along with electronic delivery of
              notices, policies, and transaction records. Furthermore, you waive
              any rights or requirements under local laws mandating original
              signatures, non-electronic record delivery, or non-electronic
              payment methods.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>
              20. CALIFORNIA USERS AND RESIDENTS
            </h2>
            <p className='my-4'>
              If you are a California resident and a concern or complaint
              regarding our services is not resolved to your satisfaction, you
              may reach out to the Complaint Assistance Unit of the Division of
              Consumer Services within the California Department of Consumer
              Affairs. You can contact them by mail at 1625 North Market Blvd.,
              Suite N 112, Sacramento, California 95834, or via phone at (800)
              952-5210 or (916) 445-1254.
            </p>
          </div>

          <div>
            <h2 className='text-2xl font-semibold py-4'>21. MISCELLANEOUS</h2>
            <p className='my-4'>
              These Terms of Service, along with any policies or operational
              guidelines we post on our platform, constitute the complete
              agreement between you and Sanova Web Solutions. Failure by us to
              enforce any part of these terms does not waive our right to
              enforce them in the future. These terms are governed to the
              fullest extent allowed by law.
            </p>
            <p className='my-4'>
              We reserve the right to transfer our rights and responsibilities
              under these terms to another party at any time. We are not liable
              for any delays, losses, or damages arising from circumstances
              beyond our reasonable control.
            </p>
            <p className='my-4'>
              If any provision in these Terms of Service is deemed unlawful,
              void, or unenforceable, it will not affect the validity of the
              remaining provisions, which will remain enforceable and in effect.
              No agency, partnership, joint venture, or employment relationship
              is created between you and Sanova Web Solutions by these terms.
              You agree not to contest these terms based on their electronic
              format or lack of physical signatures.
            </p>
          </div>
        </article>
      </div>
    </MaxWidthWrapper>
  );
}
=======
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
>>>>>>> main
