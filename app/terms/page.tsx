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
