import { FaStopwatch, FaWpforms } from 'react-icons/fa';
import {
  MdDataThresholding,
  MdOutlineContactSupport,
  MdOutlineDeveloperMode,
  MdOutlinePayment,
  MdOutlineSearch,
} from 'react-icons/md';
import { TbApi, TbSeo } from 'react-icons/tb';
import { CgWebsite } from 'react-icons/cg';
import { BsShop } from 'react-icons/bs';

export const services = {
  'custom-applications': {
    name: 'Custom Applications',
    title: 'Custom Applications Designed for Your Unique Business Needs',
    description:
      'Empower your business with tailor-made software solutions crafted to solve your unique challenges. At Sanova Web Solutions, we specialize in developing custom applications that optimize workflows, enhance productivity, and drive growth.',
    title2: 'Why Choose Custom Applications from Sanova Web Solutions',
    list: [
      'Tailored to your specific business requirements',
      'Scalable solutions that grow with you',
      'User-friendly interfaces designed for optimal user experience',
    ],
    ctaTitle: 'Let’s Build Something Extraordinary',
    ctaDescription:
      'Ready to transform your business with a custom application? Let’s bring your vision to life.',
    ctaButton: 'Get a Free Consultation',
    title3: "What's included in Our Custom Application Services?",
    features: [
      {
        id: 1,
        title: 'Comprehensive needs analysis and consultation',
        icon: MdDataThresholding,
      },
      {
        id: 2,
        title: 'Full-stack development for web and mobile platforms',
        icon: MdOutlineDeveloperMode,
      },
      {
        id: 3,
        title: 'Advanced integrations (e.g., APIs, third-party tools',
        icon: TbApi,
      },
      {
        id: 4,
        title: 'Dedicated post-launch support and maintenance',
        icon: MdOutlineContactSupport,
      },
    ],
  },
  'website-services': {
    name: 'Website Services',
    title: 'Web Design & Development Services | Sanova Web Solutions',
    description:
      'At Sanova Web Solutions, we take a unique approach to web design and development. Instead of relying on WordPress or page builders, we custom code every website from the ground up. This allows us to create tailored designs with zero unnecessary bloat, ensuring your site is fast, secure, and high-performing.',
    header: 'Professional Web Design & Development Services',
    secondary: 'Expertly Built Websites Without Compromise',
    content: [
      {
        id: 1,
        heading: 'Expertly Built Websites Without Compromise',
        subheading: '',
        text: 'At Sanova Web Solutions, we take a distinct approach to web design. Instead of relying on page builders or platforms like WordPress, we develop every website from scratch. Our handcrafted code ensures each site is lightweight, highly optimized, and free from unnecessary clutter or bloat. The result? Websites that load at lightning speed, achieve top-tier Google PageSpeed Insights scores, and deliver unparalleled performance.',
        list: [{}],
      },
    ],
    list: [
      'Fully responsive designs for a seamless user experience on any device',
      'SEO-optimized to improve your search engine visibility',
      'Faster websites that lead to better user experiences, higher conversions, and improved ad performance.',
      'Unlimited edits to keep your site fresh and updated',
    ],
    ctaTitle: 'Let’s Build Your Online Presence',
    ctaDescription:
      'Ready to take your business to the next level? Contact us today to create a professional website that drives results.',
    ctaButton: 'START YOUR WEBSITE TODAY',
    title3: "What's included in Our Website Services?",
    features: [
      {
        id: 1,
        title: 'Custom website design tailored to your brand',
        icon: CgWebsite,
      },
      {
        id: 2,
        title: 'Fast-loading and secure websites',
        icon: FaStopwatch,
      },
      {
        id: 3,
        title:
          'Custom interactive elements. ie galleries, forms, and animations etc',
        icon: FaWpforms,
      },
      {
        id: 4,
        title:
          'Metadata, alt tags and sitemaps initialized to enhance your search visibility ',
        icon: TbSeo,
      },
    ],
  },
  ecommerce: {
    name: 'Ecommerce Solutions',
    title: 'Sell Smarter with Seamless Ecommerce Solutions',
    description:
      "Whether you're launching a new online store or optimizing an existing one, Sanova Web Solutions has you covered. Our e-commerce services provide scalable, secure, and user-friendly platforms designed to grow your business and simplify online selling.",
    title2: 'Why Choose Our E-Commerce Solutions?',
    list: [
      'Fully customizable platforms tailored to your brand',
      'Secure payment gateways and inventory management',
      'SEO-optimized for higher visibility in search results',
      'Analytics to track sales and customer behavior',
    ],
    ctaTitle: 'Start Selling Online Today',
    ctaDescription:
      'Let’s build a secure, scalable e-commerce platform that grows with your business. Contact us to get started.',
    ctaButton: 'Launch Your Store',
    title3: "What's included in Our E-Commerce Solutions?",
    features: [
      {
        id: 1,
        title: 'E-commerece store design and setup',
        icon: BsShop,
      },
      {
        id: 2,
        title: 'Integration of payment and shipping solutions',
        icon: MdOutlinePayment,
      },
      {
        id: 3,
        title: 'Enhanced UX with robust tools to quickly find products',
        icon: MdOutlineSearch,
      },
      {
        id: 4,
        title: 'Post-launch support and maintenance',
        icon: MdOutlineContactSupport,
      },
    ],
  },
};

export type ServiceName = keyof typeof services;

export const SecondaryNavLinks = [
  {
    id: 1,
    name: 'Sitemap',
    href: '/sitemap.xml',
  },
  { id: 2, name: 'Licensing', href: '/licensing' },
  { id: 3, name: 'Privacy Policy', href: '/privacy-policy' },
  { id: 4, name: 'Terms', href: '/terms' },
];

export const Terms = [
  {
    id: 1,
    title: 'Responsibility',
    description:
      'Sanova Web Solutions is committed to delivering requested services promptly and in accordance with the agreed-upon standards outlined in the contract.  Projects requiring work outside of normal business hours or exceeding standard turnaround times may incur additional charges. If work is paused after initiation, billing will reflect the completed work up to that point. While Sanova Web Solutions will work collaboratively with third-party entities engaged by the client, we are not responsible for their performance.',
  },
  {
    id: 2,
    title: 'Ownership',
    description:
      'Clients acknowledge that all files, web pages, graphics, and programming work, excluding materials provided by the client, remain the sole property of Sanova Web Solutions until all applicable fees are fully paid. Upon payment, ownership is transferred to the client. For programming work, such as custom scripts, shopping carts, and database programs, clients agree that they do not hold the rights to replicate, sell, or distribute these programs unless explicitly agreed upon. Programs created by Sanova Web Solutions are licensed for use exclusively on the client’s specified website unless additional permissions are purchased.',
  },
  {
    id: 3,
    title: 'Copyright',
    description:
      'All work produced by Sanova Web Solutions is subject to copyright protection. Clients are granted rights solely for the agreed-upon purposes, such as web publication. Unauthorized reproduction in print or other media without explicit permission may constitute copyright infringement. Full copyright ownership can be purchased if required. Clients affirm they have proper authorization or licenses for any materials provided and accept full responsibility for any copyright-related disputes. Sanova Web Solutions assumes no liability for verifying the legality of client-provided materials.',
  },
  {
    id: 4,
    title: 'Proofreading',
    description:
      "Sanova Web Solutions' liability for typographical, pricing, or similar errors is limited to correcting them upon timely notification during the proofreading and testing phase. Clients are responsible for reviewing all work to ensure (a) quality, (b) accuracy in size and content, (c) suitability for its intended use, and (d) compliance with copyright and other legal standards before publication.",
  },
  {
    id: 5,
    title: 'Offensive/Libelous Material',
    description:
      'Clients agree not to use Sanova Web Solutions’ services to publish material deemed defamatory, offensive, or libelous. Sanova Web Solutions disclaims liability for content hosted on or transmitted through our services. Clients bear full responsibility for the content of their websites and indemnify Sanova Web Solutions against any claims arising from defamatory or unlawful material. Sanova Web Solutions does not monitor client data for content compliance.',
  },
  {
    id: 6,
    title: 'Loss of Earnings',
    description:
      'Sanova Web Solutions is not liable for any loss of business resulting from service failures, including but not limited to losses in revenue, profits, or indirect damages. If a service fails, compensation will be limited to a pro-rata refund of payments made for the affected service. Sanova Web Solutions also disclaims liability for fraudulent or improper use of data stored on its systems.',
  },
  {
    id: 7,
    title: 'Portfolio',
    description:
      'To maintain portfolio credibility, Sanova Web Solutions reserves the right to include a small logo on client websites, linking back to our website. We may also feature client projects in our portfolio and marketing materials unless otherwise agreed upon.',
  },
  {
    id: 8,
    title: 'Hosting Contracts',
    description:
      'Sanova Web Solutions invoices domain name and hosting contracts annually. Transfers of domain names or hosting to other providers will be facilitated provided the account is paid in full and an authorized request is submitted. Clients wishing not to renew domain or hosting services must notify us at least 30 days before the renewal date to avoid charges. Domain names are automatically renewed upon expiration unless notified otherwise.',
  },
  {
    id: 9,
    title: 'Payment',
    description:
      'Sanova Web Solutions may require an advance deposit of up to 50% of estimated project fees before work begins. Final payment must be made before the website is launched. Payments are due upon receipt of the invoice. Non-payment may result in the removal of website content or suspension of hosting services without notice.',
  },
  {
    id: 10,
    title: 'Email Disclosure',
    description:
      'Emails from Sanova Web Solutions may contain confidential or privileged information. They are intended solely for the recipient. If you receive an email in error, please notify the sender promptly and delete it. Unauthorized use, disclosure, or reliance on email content is prohibited. The opinions expressed in emails are those of the author and do not necessarily reflect the views of Sanova Web Solutions.',
  },
];

export const privacyContent = {
  title: 'Privacy Policy',
  termsContent1: `This privacy policy has been created to address the concerns of individuals regarding the use of their 'Personally Identifiable Information' (PII) online. PII, as defined in US privacy law and information security, refers to information that can be utilized on its own or in conjunction with other data to identify, contact, or locate a specific individual, or to identify an individual within a particular context. We encourage you to carefully review our privacy policy to gain a thorough understanding of how we collect, use, protect, or manage your Personally Identifiable Information in accordance with our website.`,
  termsTitle2: `What information is collected?`,
  termsContent2:
    'When placing an order or registering on our website, you may be prompted to provide your name, email address, or other relevant information to enhance your experience with us.',
  termsTitle3: 'When is your information collected?',
  termsContent3:
    'We gather information from you when you complete a form or input data on our website.',
  termsTitle4: 'How your information is used',
  termsContent4:
    'We may utilize the information we gather from you when you register, make a purchase, subscribe to our newsletter, participate in a survey or marketing communication, browse the website, or utilize certain other site features in the following manners:',
  list1: 'To ask for ratings and reviews of services or products',
  list2: 'To email newsletters and promotions',
  termsTitle5: 'How your information is protected',
  termsContent5:
    'We do not conduct vulnerability scanning and/or scanning to PCI standards. Instead, we employ regular Malware Scanning',
  termsContent6:
    'Your personal information is safeguarded behind secured networks and is accessible only to a limited number of individuals with special access rights to such systems. These individuals are obligated to maintain the confidentiality of the information. Additionally, any sensitive/credit information you provide is encrypted using Secure Socket Layer (SSL) technology.',
  termsContent7:
    'We implement various security measures to ensure the safety of your personal information when you enter, submit, or access it.',
  termsContent8: `All transactions are handled through a gateway provider and are not stored or processed on our servers.`,
  termsTitle9: `What 'cookies' are used?`,
  termsContent9: 'We do not utilize cookies for tracking purposes.',
  termsContent10: `You have the option to enable your computer to notify you each time a cookie is being sent, or you can opt to disable all cookies through your browser settings. The method for modifying your cookies may vary slightly depending on your browser. Refer to your browser's Help Menu to learn the appropriate procedure.`,
  termsContent11:
    'If you choose to disable cookies, some features that enhance your site experience may be disabled and may not function properly. However, you will still be able to place orders.',
  termsTitle12: 'Third-party disclosure',
  termsContent12:
    'We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information.',
  termsTitle13: 'California Online Privacy Protection Act',
  termsContent13:
    'CalOPPA is the first state law in the nation mandating commercial websites and online services to disclose a privacy policy. This law extends its jurisdiction beyond California, obligating any individual or company in the United States (and potentially worldwide) operating websites that collect Personally Identifiable Information from California consumers to prominently display a privacy policy on their website. This policy must specify the information collected and the entities with whom it is shared.',
  termsContent14: 'In compliance with CalOPPA, we adhere to the following:',
  list3: 'Users can browse our site anonymously.',
  list4:
    'Upon creation, our privacy policy will be linked on our homepage or, at a minimum, on the first significant page upon entering our website.',
  list5: `Our Privacy Policy link will be easily accessible and labeled 'Privacy.`,
  termsContent15: 'You will be notified of any changes to our Privacy Policy:',
  list6: 'On our Privacy Policy Page',
  termsContent16: 'You have the ability to update your personal information:',
  list7: 'By contact us ',
  termsTitle17: 'Fair Information Practices',
  termsContent17:
    'The Fair Information Practices Principles are fundamental to privacy law in the United States and have significantly influenced the development of data protection regulations worldwide. Comprehending these principles and their proper implementation is crucial for compliance with various privacy laws safeguarding personal information.',
  termsContent18:
    'To align with the Fair Information Practices, we commit to the following responsive actions in the event of a data breach:',
  list8:
    'Users will be promptly notified via an in-site notification within 7 business days',
  termsContent19:
    'Additionally, we uphold the Individual Redress Principle, which grants individuals the right to pursue enforceable rights against data collectors and processors who violate the law. This principle ensures that individuals not only possess enforceable rights against data users but also have access to courts or government agencies to address non-compliance by data processors.',
  termsTitle20: 'CAN SPAM Act',
  termsContent20:
    'The CAN-SPAM Act is legislation that governs commercial email, establishing guidelines for commercial messages, granting recipients the right to opt out of receiving such emails, and outlining severe penalties for violations.',
  termsContent21: 'We collect your email address to:',
  list9:
    'Send information, respond to inquiries, and/or fulfill other requests or questions.',
  list10: 'Send newsletters & promotions',
  termsContent22: 'To comply with CAN-SPAM, we commit to the following:',
  list11: 'Not use false or misleading subjects or email addresses.',
  list12: 'Clearly indicate that the message is an advertisement.',
  list13: 'Include the physical address of our business or site headquarters.',
  list14:
    'Monitor third-party email marketing services for compliance, if utilized.',
  list15: 'Honor opt-out/unsubscribe requests promptly.',
  list16: 'Provide a visible unsubscribe link at the bottom of each email.',
  termsContent23:
    'If you wish to unsubscribe from future emails at any time, you can email us by:',
  list17: 'Following the instructions provided at the bottom of each email.',
  termsContent24: '...and we will promptly remove you from ALL correspondence.',
};

export const licensingTerms = [
  {
    section: 'Licensing Model',
    details: [
      {
        title: 'Ownership of Code',
        description:[
          'All code, scripts, and related assets developed by Sanova Web Solutions remain the intellectual property of Sanova Web Solutions unless explicitly agreed otherwise in a separate purchase agreement.',]
      },
      {
        title: 'License to Use',
        description:
          'Clients are granted a non-exclusive, non-transferable license to use the delivered software, applications, or services for the duration of their contract.',
      },
      {
        title: 'Term Commitment',
        description:
          'Licensing agreements are structured as 12-month contracts, renewable on an annual basis. These contracts ensure continued access to updates, maintenance, and support.',
      },
    ],
  },
  {
    section: 'Monthly Licensing Fees',
    details: [
      {
        title: 'Billing',
        description:
          'Licensing fees are billed monthly and include access to the licensed software or services, along with associated support and maintenance.',
      },
      {
        title: 'Late Payments',
        description:
          'Failure to remit payments on time may result in suspension of services and access to the licensed products.',
      },
    ],
  },
  {
    section: 'Request for Ownership',
    details: [
      {
        title: 'Purchase Agreement',
        description:
          'A separate agreement outlining the terms and pricing for the full transfer of ownership will be drafted.',
      },
      {
        title: 'Exclusive Rights',
        description:
          'Upon payment of the agreed purchase price, Sanova Web Solutions will transfer exclusive ownership rights to the client, relinquishing all claims to the code.',
      },
    ],
  },
  {
    section: 'Benefits of Licensing',
    details: [
      {
        title: 'Cost-Effective',
        description:
          'Licensing allows clients to leverage high-quality solutions at a fraction of the cost of exclusive ownership.',
      },
      {
        title: 'Ongoing Support',
        description:
          'Licensed products include updates, bug fixes, and technical support throughout the contract term.',
      },
      {
        title: 'Flexibility',
        description:
          'Clients can opt to renew the license, terminate the agreement, or negotiate ownership at the end of the term.',
      },
    ],
  },
  {
    section: 'Limitations',
    details: [
      {
        title: 'Distribution Restrictions',
        description:
          'Licensed code may not be shared, distributed, sold, or sublicensed by the client without prior written consent from Sanova Web Solutions.',
      },
      {
        title: 'Project-Specific Use',
        description:
          'The use of licensed code is restricted to the specific project and purpose outlined in the contract.',
      },
    ],
  },
  {
    section: 'Termination',
    details: [
      {
        title: 'License Expiration',
        description:
          "In the event of contract termination or non-renewal, the client's license to use the code will expire. Continued use of the code or associated services beyond the term without a valid license is prohibited.",
      },
      {
        title: 'Transition Assistance',
        description:
          'Upon termination, Sanova Web Solutions will offer assistance to transition services or data, as applicable.',
      },
    ],
  },
  {
    section: 'Custom Solutions and Modifications',
    details: [
      {
        title: 'Authorized Modifications',
        description:
          'Modifications to licensed code must be performed by or authorized by Sanova Web Solutions to maintain compatibility and avoid potential issues.',
      },
      {
        title: 'Unauthorized Modifications',
        description:
          'Unauthorized modifications may void support and maintenance services provided under the licensing agreement.',
      },
    ],
  },
  {
    section: 'Confidentiality and Intellectual Property',
    details: [
      {
        title: 'Copyright Protection',
        description:
          'All custom software and services provided by Sanova Web Solutions are protected under copyright and intellectual property laws.',
      },
      {
        title: 'Prohibited Actions',
        description:
          'Clients are prohibited from reverse-engineering, decompiling, or disassembling the licensed code.',
      },
    ],
  },
];

export const faq = [
  {
    section: 'PRICING & PAYMENTS',
    details: [
      {
        title: 'How much does a website cost?',
        description: [
          'Every website is different, so pricing depends on the size, design requirements, functionality, and overall scope of the project.',
          'Sanova Web Solutions offers professional website projects starting at $1,995. Larger websites, advanced functionality, integrations, ecommerce features, or more complex design requirements may increase the project price.',
          'Before any work begins, you’ll receive a detailed proposal outlining exactly what’s included and the total cost of your project.']
      },
      {
        title:
          'Do you charge monthly for websites?',
        description: [
          'No. Our standard websites are sold as one-time projects, not subscriptions.',
          'Once your project has been completed and paid in full, the website is yours. You are not required to continue paying Sanova Web Solutions every month to keep your website.',
          'There may still be ongoing third-party expenses associated with operating a website, such as:',
          '- Domain registration', '- Hosting', '- Email Services', '- Premium software or integrations', '- Third-party platforms or APIs', 'Whenever possible, these services will be set up under accounts owned by you or your business so you maintain control over them.', 'Any expected recurring costs will be discussed with you before your website launches.']
      },
      {
        title: 'Why is a deposit required?',
        description: [
          'Your deposit officially reserves your project and allows us to dedicate time and resources to your website.', 'Website projects involve work before development even begins, including research, planning, project setup, content organization, design, and technical preparation.', 'Because this time is specifically reserved for your business, we require the initial deposit before work begins.', 'Your deposit is applied directly toward the total cost of your website—it is not an additional fee.', 'For example, if your website costs $3,500 and you pay a 50% deposit of $1,750, your remaining balance would be $1,750.'
        ]
      },
      {
        title: 'Is the deposit refundable?',
        description: [
          'Once work on your project has begun, the deposit is generally non-refundable.', 'The deposit covers time reserved for your project as well as work completed during the planning, design, and development process.', 'If Sanova Web Solutions is unable to begin or complete your project for reasons within our control, any applicable refund will be handled according to the terms of your project agreement.', 'We encourage clients to review their proposal carefully and ask any questions before approving the project and submitting their deposit.'
        ]
      },
      {
        title: 'When is the final payment due?',
        description: [
          'The final balance is due once your website has been completed and you’ve had an opportunity to review the finished project and request any remaining revisions included within your agreed scope.', 'The website must be paid in full before it is:', '- Published to its final production environment', '- Connected to the client’s live domain', 'Transferred to client-owned accounts', 'Handed over with final source code or project access', 'We don’t expect you to make your final payment before seeing the website we’ve built. You’ll be able to review the project before the remaining balance becomes due.'
        ]
      },
      {
        title: 'What payment methods do you accept?',
        description: [
          'We accept secure electronic payments through the payment options provided on your invoice.', 'Depending on the project, available payment methods may include:', '- Credit Cards', '- Debit Cards', '- Electronic bank payments', '- Bank transfers', 'For larger projects, we may recommend a bank transfer to reduce payment-processing costs.', 'Available payment methods and instructions will be clearly provided with your invoice.', 'We do not accept cash, cheques, or money orders unless specifically arranged in advance.'
        ]
      },
      {
        title: 'Are there any hidden fees?',
        description: [
          'No.', 'Before your project begins, you’ll receive a proposal clearly outlining your website’s scope and price.', 'Your proposal will identify things such as:', '- Total project price', '- Number of included pages', '- Included functionality and features', '- Included revision rounds', '- Payment schedule', 'Optional services or add-ons', 'Known third-party expenses', 'If you request additional work that falls outside the original project scope, we’ll explain what is involved and provide the additional cost before completing the work.', 'You will never receive an unexpected development charge for additional work you didn’t approve'
        ]
      },
      {
        title: 'Can the price change after the project begins?',
        description: [
          'Your agreed project price will not change simply because the project takes us longer than expected.', 'If we quote you a price for an agreed scope of work, that is the price you can expect to pay.', 'The project price may only change if you request something that materially changes or expands the original scope.', 'Examples may include:', '- Adding additional pages', '- Adding new functionality', '- Adding e-commerce capabilities', '- Adding booking or scheduling systems', '- dding custom forms or workflows', '- Adding third-party integrations', '- Adding membership or account functionality', '- Significantly changing an already approved design', '- Expanding the project beyond the requirements originally agreed upon', 'If something you request would result in an additional charge, we’ll explain the cost and get your approval before proceeding.', 'Small refinements that fall within your included revision rounds won’t suddenly increase your project price.'
        ]
      },
    ],
  },
  {
    section: 'Website Ownership',
    details: [
      {
        title:
          'Will I own my website?',
        description: [
          'Yes.', 'Once your project has been completed and paid in full, you own the finished website and the custom deliverables created specifically for your business.', 'Sanova Web Solutions does not require you to remain on a monthly subscription or continue working with us in order to keep your website.', 'You are free to manage it yourself, hire us for future changes, or work with another developer.', 'Any third-party software, licensed assets, frameworks, plugins, services, or integrations remain subject to their own licensing terms.'
        ],
      },
      {
        title: 'Do I own my domain name?',
        description: [
          'Yes.', 'Your domain name should always be registered under an account owned and controlled by you or your business.', 'If you don’t already have a domain, we can help you choose, purchase, connect, and configure one, but we recommend that the registration remains in your name.', 'This ensures that you maintain full control of your business’s domain regardless of who manages your website in the future.', 'You will also be responsible for renewing your domain registration and keeping your domain account information up to date.'
        ],
      },
      {
        title: 'Do I receive the website source code?',
        description: [
          'Yes.', 'Once your project has been paid in full, the source code for your website can be transferred to a repository or account controlled by you.', 'This gives you access to the code used to operate and maintain your website.', 'Sanova Web Solutions may retain ownership of any pre-existing or reusable development resources used during the project, such as:', '- Internal tools', '- Reusable components', '- Boilerplate code', '- Libraries', '- Development utilities', '- Frameworks', '- Processes and workflows', 'This does not prevent you from owning, operating, modifying, or transferring your completed website.', 'Any open-source or third-party software included in the project remains governed by its respective licence.'
        ],
      },
      {
        title: 'Can another developer work on my website later?',
        description: [
          'Absolutely.', 'We do not build websites with the intention of locking clients into Sanova Web Solutions.', 'Once your project has been completed, paid in full, and handed over, you are free to hire another developer or agency to make changes, maintain the website, or continue development.', 'Because you can receive access to the website source code, hosting environment, and domain accounts, another qualified developer should be able to work on the project without requiring permission from Sanova.', 'If you choose to work with us again in the future, we’re always happy to help with additional pages, redesigns, new features, integrations, or other website improvements.'
        ],
      },
    ],
  },
  {
    section: 'Hosting & Domains',
    details: [
      {
        title: 'Who hosts my website?',
        description: [
          'Sanova Web Solutions primarily builds and deploys websites using modern hosting platforms such as Vercel.', 'Whenever possible, your live website will be hosted within an account owned or controlled by you or your business. This gives you direct access to your hosting environment and helps ensure that your website is not dependent on Sanova Web Solutions remaining involved.', 'If your project requires a different hosting provider, platform, or server setup, we’ll discuss that with you before development begins.'
        ],
      },
      {
        title: 'Is hosting included in the website price?',
        description: [
          'Initial deployment and hosting setup are included as part of your website project.', 'However, any ongoing hosting fees charged by a third-party provider are separate from the website development price unless your proposal specifically states otherwise.', 'Many standard business websites can operate with minimal hosting costs, while websites with higher traffic, advanced functionality, databases, large amounts of media, or third-party services may require a paid hosting plan.', 'If we expect your website to have ongoing hosting costs, we’ll explain them before launch so you know exactly what to expect.'
        ],
      },
      {
        title: 'Do I need to already have a domain?',
        description: [
          'No.', 'If you don’t already own a domain, we can help you choose and set one up for your business.', 'Whenever possible, your domain should be purchased and registered through an account owned by you or your business. This ensures that you remain in control of your domain regardless of who manages your website in the future.', 'Domain registration fees are separate from the website development price unless specifically included in your proposal.'
        ],
      },
      {
        title: 'Can you connect a domain I already own?',
        description: [
          'Yes.', 'If you already own a domain, we can connect it to your new website as part of the launch process.', 'Depending on your domain provider, we may need temporary access to your account or ask you to update certain DNS settings with our guidance.', 'We will not transfer ownership of your domain to Sanova Web Solutions unless there is a specific reason to do so and you have approved it.'
        ],
      },
      {
        title: 'What happens to my old website?',
        description: [
          'That depends on your current setup and what you’d like to keep.', 'In most cases, your new Sanova website can replace your existing website while keeping the same domain name.', 'If your old website contains content, images, blog posts, forms, analytics, or other information you want to preserve, let us know before the project begins so we can include the appropriate migration or content transfer work in your project scope.', 'We may also recommend keeping a backup of your existing website before launch.', 'Once the new website is ready and approved, we’ll update the necessary domain or hosting settings so visitors are directed to the new website instead of the old one.'
        ]
      },
    ],
  },
  {
    section: 'Design & Development',
    details: [
      {
        title: 'Are your websites custom designed?',
        description: [
          "Yes.", 'Every Sanova Web Solutions website is designed around the individual business, its brand, services, audience, goals, and overall style.', "We do not believe a business website should feel like a generic layout with a different logo placed on top.", "Your website's structure, page layouts, visual direction, calls to action, content flow, and user experience are tailored to your business and the purpose of the website.", "We may use proven design patterns and reusable development components where they make sense, but the final website is customized to fit your brand rather than forcing your business into a pre-made design."
        ]
      },
      {
        title: 'Do you use templates?',
        description: [
          'We do not rely on pre-built website templates as the finished solution for our clients.', "Our websites are designed and developed to suit the specific business and project requirements.", "We may use reusable code, components, frameworks, libraries, and internal development systems to improve efficiency and maintain quality, but these are development tools rather than off-the-shelf website templates.", "The goal is to create a website that feels unique to your business while still using reliable, modern development practices behind the scenes."
        ],
      },
      {
        title: 'Will my website work on mobile devices?',
        description: [
          'Yes.', "Every website we build is designed to be responsive and work across modern screen sizes, including:", "- Mobile phones", "- Tablets", "- Laptops", "- Desktop computers", "Mobile usability is considered throughout the design and development process rather than being treated as an afterthought.", "We also test layouts, navigation, text sizing, buttons, images, forms, and other important website elements to make sure the experience remains clear and easy to use on smaller screens."
        ],
      },
      {
        title: 'Can I show you websites that I like?',
        description: [
          'Absolutely.', "Sharing examples is one of the best ways to help us understand the direction you have in mind.", "You can send us websites you like for reasons such as:", "- Layout", "- Colours", "- Typography", "- Animations", "- Navigation", "- Photography", '- Page structure', '- Overall style', '- Specific sections of features', 'We use those examples as inspiration and direction, not as something to directly copy.', 'The goal is to understand what you like and then create a website that fits your own business, brand, and audience.'
        ],
      },
      {
        title: 'What technology do you use to build websites?',
        description: [
          'Sanova Web Solutions primarily builds modern, custom-coded websites using technologies such as Next.js, React, TypeScript, and Vercel.', "The exact technology used may vary depending on the needs of the project.", "Our development approach focuses on:", "- Fast performance", '- Responsive design', '- Clean, maintainable code', '- Search-engine-friendly structure', '- Modern security practices', '- Reliable deployment', '- Scalability', '- Accessibility', 'Long-term maintainability', 'We choose technology based on what makes sense for the website rather than forcing every project into the same platform.', "If your project requires a content management system, database, third-party integration, ecommerce platform, or another specialized service, we'll recommend the appropriate solution before development begins."
        ]
      },
    ],
  },
  {
    section: 'Pages & Content',
    details: [
      {
        title: 'How many pages are included?',
        description: [
          'The number of pages included depends on the website package or custom proposal you choose.', "A standard business website may include pages such as:", '- Home', '- About', '- Services', '- Individual service pages', '- Portfolio or Projects', '- FAQ', '- Contact', '- Blog', '- Locations', '- Privacy Policy', '- Terms of Service', 'Your proposal will clearly state how many pages are included in your project before work begins.', "If you're unsure how many pages you need, we'll help recommend a structure based on your business, services, and goals."]
      },
      {
        title: 'Can I add more pages?',
        description: [
          'Yes.', 'Additional pages can be added during the project or after your website has launched.', "If the additional pages are outside the original project scope, we'll provide a separate quote before completing the work.", "The cost of an additional page depends on the amount of design, content, and functionality required. A simple informational page may cost less than a highly customized landing page, service page, or page requiring additional development."]
      },
      {
        title: 'Is an additional page fee monthly?',
        description: [
          'No.', 'Additional page fees are one-time development charges, not recurring monthly fees.', "For example, if you request three additional pages during development, you would pay the agreed one-time cost for those pages. You would not continue paying that amount every month.", "Any ongoing third-party costs associated with a page or feature, if applicable, will be explained separately."]
      },
      {
        title: 'Who provides the website content?',
        description: [
          'You know your business best, so we ask clients to provide the core information we need about their company, services, products, team, policies, and other business-specific details.', "You do not need to provide perfectly written website copy.", "We can help organize, refine, and structure the information you provide so that it reads clearly and works effectively within the website design.", "Depending on your project, we may ask you to provide information such as:", '- Business overview', '- Service descriptions', '- Contact information', '- Areas you serve', '- Team information', '- Frequently asked questions', '- Testimonials', '- Pricing information', '- Calls to actions', '- Policies or legal information', "If your project requires extensive copywriting, research, or content creation beyond the agreed scope, those services may be quoted separately."]
      },
      {
        title: 'Do I need to provide my own photos?',
        description: ['Not necessarily.', "If you have high-quality photos of your business, team, products, completed work, office, vehicles, or other relevant subjects, we strongly encourage you to provide them. Authentic photography can make a website feel much more personal and trustworthy.", "If you don't have suitable images, we can help source appropriate licensed stock photography or recommend other visual options.", "Depending on the project, we may also use:", '- Stock photography', '- Icons', '- Illustrations', '- Brand graphics', '- Product imagery', '- Custom visual elements', 'Any paid image licensing or third-party asset costs will be discussed with you before purchase.']
      },
      {
        title: 'Can you use images I find on Google?',
        description: [
          'Usually, no.', "Images appearing in Google Search are not automatically free to use. Most images are owned by the photographer, business, publisher, or another copyright holder.", "Using an image without the proper rights or licence can create copyright issues for your business.", "For your website, we will generally use images that:", "- You own", '- You have permission to use', '- Have been properly licensed', '- Come from reputable stock image providers', '- Are available under a license that allows commercial use', "If you find an image online that you really like, you're welcome to send it to us as a visual reference. We can then look for a suitable licensed alternative or use it as inspiration for the direction of your website."
        ]
      }
    ]
  },
  {
    section: 'Revisions',
    details: [
      {
        title: 'How many revisions are included?',
        description: [
          'The number of revision rounds included depends on your website package or custom proposal.', "A revision round is an opportunity to review the work we've completed and provide a clear, consolidated list of changes you'd like us to make.", "Your proposal will specify exactly how many revision rounds are included before the project begins.", "To keep the project moving efficiently, we recommend gathering all feedback for each revision round before sending it to us rather than submitting changes one at a time."
        ]
      },
      {
        title: 'What counts as a revision?',
        description: [
          "A revision is a reasonable change to work that has already been designed or developed within the agreed project scope.", "Typical revisions may include:", '- Updating text', '- Replacing images', ' - Adjusting colours', '- Changing button text', '- Refining spacing', '- Adjusting font sizes', '- Rearranging smaller page sections', '- Updating icons', '- Refining calls to action', '- Making minor layout adjustments', '- Correcting content or formatting', "Revisions are intended to refine and improve the agreed design, not replace the original project direction with an entirely different concept."
        ]
      },
      {
        title: 'What isn\'t considered a normal revision?',
        description: [
          'Requests that significantly expand or change the original project scope are not considered standard revisions.', 'Examples may include:', '- Adding new pages', '- Completely redesiging an approved page', '- Changing the overall design direction', '- Adding e-commerce functionality', '- Adding booking or scheduling systems', '- Adding customer accounts or memberships', '- Creating custom dashboards', '- Adding new third-party integrations', '- Adding complex forms or workflows', '- Requesting major functionality that was not part of the original proposal', 'If a request falls outside the agreed scope, we\'ll let you know before completing the work and provide a separate quote if additional development is required.', 'You will never be charged for additional work without being informed first.'
        ]
      },
      {
        title: "What happens if I want to completely change the design after approving it?",
        description: [
          'We understand that ideas can evolve during a project.', 'However, once a design direction has been reviewed and approved, we begin development based on that approval.', 'If you later decide that you want to significantly change the overall layout, visual direction, page structure, or design concept, the additional work may fall outside your included revision rounds and require a separate quote.', 'Small refinements are expected and are part of the normal revision process. A complete redesign after approval may require additional design and development time.', 'If this happens, we\'ll review the requested changes with you, explain what additional work is involved, and provide any additional cost before proceeding.'
        ]
      }
    ]
  },
  {
    section: 'Project Process & Timeline',
    details: [
      {
        title: 'What is your website development process?',
        description: [
          '1. Initial consultation: We learn about your business, goals, audience, services, and what you need from your new website.', '2. Proposal and project scope: We outline the recommended website structure, included features, pricing, timeline, and payment schedule.', '3. Deposit and onboarding: Once the proposal is approved and the initial deposit is received, your project is officially scheduled.', '4. Content and asset collection: We gather the information, branding, images, service details, and other materials needed for your website.', '5. Design: We create the visual direction and page layouts based on your business and project requirements', '6. Design review and approval: You\'ll review the design and provide feedback through your included revision rounds.', '7. Development: Once the design direction is approved, we build the website and implement the agreed functionality', '8. Testing and quality assurance: We test the website across different screen sizes and review important functionality, forms, links, performance, and overall usability', '9. Final revisions: You\'ll have an opportunity to review the completed website and request any remaining changes included within the project scope.', '10. Final payment and launch: Once the website is approved and the remaining balance is paid, we deploy the final website and connect your domain.', '11. Handoff: Where applicable, we provide access to your website, hosting environment, source code, and other relevant project accounts.'
        ]
      },
      {
        title: 'How long does it take to build a website?',
        description: [
          'Most standard business websites take approximately 2 to 6 weeks from the time we have everything required to begin.', 'Smaller websites may be completed sooner, while larger or more customized projects can take longer.', 'The timeline depends on factors such as:', '- Number of pages', '- Design complexity', '- Custom functionality', '- Integrations', '- Amount of content', '- Revision rounds', '- How quickly feedback is provided', '- How quickly required materials are supplied', 'We\'ll provide an estimated timeline as part of your project proposal.'
        ]
      },
      {
        title: 'What can delay my website?',
        description: [
          'The most common project delays happen when we are waiting for information, feedback, or approvals.', 'Examples include:', '- Delayed delivery of website content', '- Missing images or branding assets', '- Delayed design approvals', '- Slow responses to revision requests', '- Significant changes to the original project scope', '- New features being added during development', '- Delays receiving access to domains or third-party accounts', '- Issues involving third-party services or integrations', 'We will do our best to keep your project moving efficiently, but timely communications from both sides is important.', 'If we\'re waiting on required materials or approval from you, the project timeline may need to be adjusted.'
        ]
      },
      {
        title: 'Can you guarantee a specific launch date?',
        description: [
          'We can work toward a specific launch date when one is agreed upon before the project begins, but certain deadlines may depend on timely client participation.', 'For example, staying on schedule may require you to provide:', '- Content', '- Images', ' - Account access', '- Feedback', '- Design approvals', '- Revision requests', '- Required payments', 'on or before agreed deadlines.', 'If you have an important launch date, event, campaign, grand opening, or other deadline, please let us know during the intitial consultation so we can determine whether the timeline is realistic before accepting the project.', 'Unless a launch date is specifically guaranteed in your signed project agreement, estimated completion dates should be considered project targets rather than absolute guarantees.'
        ]
      },
      {
        title: 'Do you offer rush projects?',
        description: [
          'Rush projects may be available depending on our current workload and the size of the website.', 'A rush project requires your website to be prioritized and completed within a shorter timeframe than our normal development schedule, so an additional rush fee may apply.', 'Rush availability depends on:', '- Project size', '- Required features', '- Requested deadline', '- Our current project schedule', '- How quickly you can provide content and approvals', 'If you need a website completed quickly, let us know before approving the project so we can confirm availability and any additional cost.'
        ]
      },
      {
        title: 'What do you need from me to get started?',
        description: [
          'You don\'t need to have everything perfectly organized before contacting us.', 'Once your project begins, we\'ll guide you through the information and materials we need.', 'Depending on your website, this may include:', '- Business name', '- Logo and branding', '- Brand colours', '- Business description', '- Service or product information', '- Contact information', '- Business hours', '- Service areas', '- Team information', '- Photos', '- Testimonials', '- Social media links', '- Existing website information', '- Domain access', '- Examples of websites you like', '- Any specific features or functionality you need', 'The more information you can provide about your business and goals, the easier it is for us to create a website that accurately represents your company.']
      },
      {
        title: 'What if you don\'t know exactly what I want?',
        description: [
          'That\'s completely fine.', 'You do not need to come to us with a finished design, sitemap, or detailed technical plan.', 'Part of our job is helping you determine what makes sense for your business.', 'During the planning process, we\'ll discuss things such as:', '- What your business does', '- Who your customers are', '- What actions you want visitors to take', '- Your most important services', '- What makes your business different', '- Websites and styles you like', '- What isn\'t working with your current website', '- Features you may need', '- Your overall goals for the new website', 'From there, we\'ll recommend an appropriate website structure and design direction.', 'You bring the knowledge of your business-we\'ll turn it into an effective website.'
        ]
      }
    ]
  },
  {
    section: 'Features & Integrations',
    details: [
      {
        title: 'Can you build contact forms?',
        description: [
          'Yes.',
          'We can build custom contact forms tailored to the type of inquiries your business receives.', 'Depending on your project, forms may include fields for things such as:', '- Name', '- Email', '- Phone number', '- Service requested', '- Project details', '- Budget', '- Preferred contact method', '- File uploads', '- Custom questions', 'Form submissions can be sent directly to your email and, where appropriate, connected to other systems such as a CRM, email platform, or database.', 'We also build forms with validation and spam-prevention measures to help reduce unwanted submissions.', 'More advanced forms involving conditional questions, document uploads, automated workflows, or third-party integrations may require additional development.'
        ]
      },
      {
        title: 'Can you integrate booking or scheduling?',
        description: [
          'Yes.',
          'If your business uses appointments, consultations, reservations, or service bookings, we can integrate supported scheduling platforms directly into your website.',
          'This may include services such as:',
          '- Calendly',
          '- Acuity Scheduling',
          '- Square Appointments',
          '- Microsoft Bookings',
          '- Other supported scheduling platforms', 'Depending on the service, we may embed the booking experience directly into your website or connect visitors to a dedicated booking flow.', 'If you require a completely custom booking system rather than an existing scheduling platform, we\'ll review the requirements and provide a separate quote based on the complexity involved.'
        ]
      },
      {
        title: 'Can you integrate my CRM or other software?',
        description: [
          'In many cases, yes.',
          'We can integrate supported third-party platforms when they provide the necessary API, webhook, embed, or other integration options.',
          'Depending on your existing systems, this may include:', '- Customer relationship management systems', '- Email marketing platforms', '- Scheduling software', '- Payment providers', '- Accounting platforms', '- Analytics tools', '- Live chat services', '- Review platforms', '- Customer support systems', '- Automation platforms', '- Internal business tools', 'The complexity of integrations can vary significantly.', 'Simple integrations may be included within your website project, while custom API development, automation workflows, or complex data synchronization may require an additional quote.', 'We\'ll review the software you\'re currently using and explain what\'s possible before any additional development begins.']
      },
      {
        title: 'Do you build e-commerce websites?',
        description: [
          'Yes, depending on the scope of the project.',
          'We can build e-commerce websites for businesses that need to sell products or services online.',
          'E-commerce projects may include features such as:', '- Product pages', '- Shopping carts', '- Secure checkout', '- Online payments', '- Product categories', '- Inventory management', '- Customer accounts', '- Discount codes', '- Shipping options', '- Tax configuration', '- Order notifications', 'E-commerce analytics', 'Because online stores typically require significantly more development and configuration than a standard business website, e-commerce projects are quoted separately.', 'The final price depends on factors such as the number of products, required functionality, payment systems, shipping requirements, integrations, and e-commerce platform being used.']
      },
      {
        title: 'Can you add new functionality later?',
        description: [
          'Absolutely.',
          'Your website does not need to include every feature your business may ever need on day one.',
          'One of the advantages of a custom-developed website is that it can often be expanded as your business grows.', 'Future additions might include:', '- New pages', '- New service sections', '- Booking systems', '- Customer portals', '- Payment functionality', '- Advanced forms', '- Blogs or content systems', '- CRM integrations', '- Interactive calculators', '- Location pages', '- Search functionality', '- New third-party integrations', 'If you want to expand your website after launch, simply, contact us with what you\'d like to add.', 'We\'ll review the request and provide a separate quote for the additional development.']
      },
      {
        title: 'Do you build web applications?',
         description: [
          'Sanova Web Solutions can develop custom web-based functionality and selected web application projects, but our primary focus is currently on professional business websites.', 'A web application typically goes beyond a traditional website and may involve features such as:', '- User accounts', '- Secure login systems', '- Customer or employee', '- Dashboards','- Databases', '- User roles and permissions', '- Online payments','- Internal business tools', '- reporting systems', '- Automated workflows', '- Complex third-party integrations','If your website requires a smaller amount of custom functionality, we may be able to incorporate it directly into your website project.', 'Larger software platforms or full custom web applications require significantly more planning and development and will be reviewed and quoted separately based on their scope.', 'If you\'re unsure whether you need a website or a web application, tell us what you\'re trying to accomplish and we\'ll recommend the most appropriate approach.'
         ]
      },
      
    ]
  },
  {
    section: 'SEO & Performance',
    details: [
      {
        title: 'Is SEO included?',
        description: [
          'Yes, every Sanova Web Solutions website is built with a strong technical and on-page SEO foundation.', 'Depending on the project, this may include:', '- SEO-friendly page structure','- Page titles and meta descriptions', '- Semantic HTML', '- Proper heading structure', '- Mobile optimization', '- Image optimization', '- Sitemap configuration', '- Robots configuration', '- Search engine indexing setup', '- Google Search Console setup', '- Analytics setup', '- Structured data where appropriate', '- Internal linking', '- Performance optimization', '- Clean, search-engine-friendly URLs', 'Our goal is to make sure your website is technically prepared to be discovered and understood by search engines.', 'However, ongoing SEO work such as content creation, backlink building, competitive keyword targeting, local SEO campaigns, and long-term ranking strategies are separate services unless specifically included in your proposal.'
        ]
      },
      {
        title: 'Can you guarantee that I\'ll rank #1 on Google?',
        description: [
          'No.', 'No reputable web developer or SEO provider can guarantee a specific position in Google search results.', 'Search rankings are influenced by many factors, including:', '- Competition', '- Search intent', '- Website authority', '- Domain history', '- Content quality','- Backlinks', '- Business location', '- Google Business Profile performance', '- User behaviour', '- Industry competitiveness', '- Search algorithm updates','- Ongoing SEO efforts', 'What we can do is build your website using modern SEO best practices and give it a strong technical foundation for organic search.', 'For businesses operating in competitive markets, additional SEO work may be required after launch to improve visibility over time.'
        ]
      },
      {
        title: 'Will my website be fast?',
        description: [
          'Performance is a major part of how we design and develop websites.',
          'We build with speed and efficiency in mind and take steps to reduce unnecessary code, optimize assets, and improve loading performance across modern devices.', 'Depending on the project, this may include:', '- Optimized images','- Modern image formats', '- Efficient code', '- Lazy loading', '- Optimized fonts', '- Reduced unnecessary scripts', '- Fast modern hosting', '- Server-side rendering or static generation where appripriate', '- Performance-focused development practices', 'Actual website speed can also be affected by factors outside our control, such as:', '- Third-party scripts', '- Advertising platforms', '- Embedded videos', '- Tracking software', '- External APIs', 'Large media files', '- Third-party widgets','Hosting usage or service outages', 'We aim to deliver websites that perform well, but exact performance scores can vary based on the content and third-party services used on the site.'
        ]
      },
      {
        title: 'Will Google automatically find my new website?',
        description: [
          'Google can discover new websites naturally over time, but we don\'t simply launch your website and hope that happens.', 
          'As part of the launch process, we can configure the technical elements that help search engines discover and understand your website.', 'Depending on your project, this may include:', '- Creating an XML sitemap', '- Configuring robots directives', '- Connecting Google Search Console', '- Submitting your sitemap', '- Ensuring important pages are indexable','- Checking for accidental indexing restrictions', '- Setting up proper page metadata', 'These steps help Google discover your website, but Google ultimately decides when and whether individual pages are indexed.', '- A website being indexed also does not automatically mean it will immediately rank highly for competitive searches.'
        ]
      },
      {
        title: 'Will my website be optimized for mobile search?',
        description: [
          'Yes.',
          'Every Sanova website is built using responsive design so it works properly across mobile phones, tablets, laptops, and desktop computers.', 'Mobile performance is especially important because many potential customers will discover and visit your business from their phones.', 'We consider factors such as:', '- Mobile-friendly layouts', '- Responsive navigation','- Readable text sizes', '- Tap-friendly buttons', '- Proper spacing', '- Fast mobile loading', '- Responsive images', '- Form usability','- Mobile page structure','- Core performance considerations', 'We also build with modern search engine best practices in mind so your mobile experience supports, rather than hurts, your website\'s overall search performance.'
        ]
      }
    ]
  },
  {
    section: 'After Launch',
    details: [
      {
        title: 'What happens after my website launches?',
        description: [
          'Once your website has been reviewed, approved, and paid in full, we complete the final launch process and make the site publicly available on your domain.', 'Depending on your project, launch may include:', '- Connecting your domain', '- Deploying the production website', '- Verifying important links and forms', '- Checking mobile responsiveness', '- Confirming analytics and tracking', '- Verifying sitemap and indexing settings', '- Completing final performance checks', '- Providing access to relevant website accounts', 'Transferring source code or repository access where applicable', 'After launch, your website is yours to operate and manage.', 'We also provide a limited post-launch support period for issues directly related to the website we built.' 
        ]
      }, 
      {
        title: 'Is support included after launch?',
        description: [ 
          'Yes.', 'Standard website projects include 30 days of post-launch support for issues directly related to the original website development.', 'This period is intended to make sure the website is functioning as expected after going live.', 'Post-launch support may include assistance with:', '- Bugs related to the original development', '- Broken functionality', '- Form issues', '- Display problems', '- Responsive layout issues', '- Incorrect links', '- Minor technical issues caused by the launch process', 'Post-launch support does not include ongoing website changes, new pages, new features, redesign requests, or additional functionality that was not part of the original project scope.', 'Those requests can still be completed, but they may require a separate quote.'
        ]
      },
      {
        title: 'What if I discover a bug after launch?',
        description: [ 'If you discover a genuine bug related to the website we built, contact us and let us know what is happening.', 'During the included post-launch support period, we will review and correct development issues that fall within the original project scope.', 'Examples may include:', '- A form isn\'t submitting correctly', 'A button or link that isn\'t working', 'A layout displaying incorrectly on a supported device', 'Functionality not behaving as originally agreed', 'A development issue introduced during the launch process', 'Issues caused by third-party services, changes made by another developer, unsupported modifications, expired accounts, external platform changes, or new requirements may fall outside the original project scope.', 'If additional work is required, we\'ll explain the situation before any billable work begins.']
      },
      {
        title: 'Can I hire you for changes later?', 
        description: [
          'Absolutely.','You do not need an ongoing contract with Sanova Web Solutions to request future work.', 'If you want to update or expand your website later, simply contact us and let us know what you need.', 'Future work may include:', '- New pages', '- New website sections', '- Content updates', '- Design changes', '- New forms', '- Booking integrations', '- E-commerce functionality', '- New service areas', '- Blog functionality', '- Third-party integrations','- Custom features','- Larger website expansions','We\'ll review the request and provide a quote based on the amount of design and development required.', 'This allows you to pay for website work when you actually need it rather than maintaining a required monthly subscription.'
        ]
      },
      {
        title: 'Do I need a maintenance plan?',
        description: [
          'No.', 'Sanova Web Solutions does not require you to purchase an ongoing maintenance plan in order to keep your website.', 'Once your project has been completed and paid in full, the website belongs to you.', 'Depending on how your website is built, some ongoing maintenance may still be beneficial over time. This could include software updates, dependency updates, content changes, monitoring, or adjustments caused by changes to third-party services.', 'If you need help in the future, you can hire Sanova on an as-needed basis.', 'You are also free to maintain the website yourself or work with another qualified developer.'
        ]
      },
      {
        title: 'What happens if I don\'t need Sanova anymore?',
        description: [
          'Nothing changes about your ownership of the website.', 'Once your website has been completed, paid in full, and handed over, you are not required to continue working with Sanova Web Solutions.', 'There are:', '- No cancellation fees','- No required monthly subscription', '- No long-term maintenance contract', '- No website ownership penalties for leaving', 'You can continue operating the website yourself or hire another developer or agency whenever you choose.', 'We want clients to continue working with Sanova because they\'re happy with our work, not because they\'re locked into our services.'
        ]
      }
    ]
  },
  {
    section: 'Existing Websites',
    details:
    [
      {
        title: 'Can you redesign my existing website?',
        description: [
          'Yes.','If your current website feels outdated, difficult to use, slow, poorly structured, or no longer represents your business properly, we can redesign it.', 'Depending on the condition of your current website, we may either improve the existing site or recommend rebuilding it from the ground up using a more modern development approach.', 'A redesign can include improvements to:', '- Layout and visual design', '- Mobile responsiveness', '- Navigation', '- Page structure', '- Calls to action', '- Website speed', '- SEO foundations', '- Forms and functionality', '- Content organization', '- Overall user experience', 'We\'ll review your existing website and recommend the approach that makes the most sense for your business.'
        ]
      },
      {
        title: 'Can you make changes to a website someone else built?',
        description: [
          'Possibly.',
          'Before making changes to an existing website, we\'ll need to review how it was built, where it is hosted, and whether we can safely work within the current setup.', 'Some websites are straightforward to update, while others may use outdated software, poorly structured code, unsupported plugins, proprietary builders, or systems that make modifications difficult or risky.', 'After reviewing the website, we\'ll let you know whether we can work with the existing setup or whether rebuilding certain parts would be a better option.', 'We won\'t make major changes to an unfamiliar website without first understanding how the current system works.'
        ]
      },
      {
        title: 'Can you move my website from Wix, Squarespace, WordPress, or another platform?',
        description: [
          'Yes.', 'In many cases, we can rebuild your existing website using our preferred development approach while keeping the content, branding, domain, and overall information you want to preserve.', 'Because platforms such as Wix, Squarespace, and WordPress work differently from custom-coded websites, we generally do not simply transfer the existing code directly.', 'Instead, we may rebuild the website using modern technologies while recreating or improving the parts of the current website you want to keep.', 'This can also be a good opportunity to improve:', '- Design', '- Performance', '- Mobile experience', '- SEO structure', '- Navigation', '- Accessibility', '- Page organization', '- Overall website quality', 'We\'ll review your current platform and explain what can be migrated or reused before the project begins.'
        ]
      },
      {
        title: 'Can I keep my existing domain?', 
        description: [
          'Yes.', 'Changing your website does not usually require changing your domain name.', 'If you already own a domain that represents your business, we can connect it to your new website as part of the launch process.', 'Your domain should remain registered under an account owned by you or your business.', 'If your existing website also uses business email addresses connected to the domain, we\'ll take care when updating the domain settings so we don\'t unnecessarily disrupt your email service.'
        ]
      },
      {
        title: 'Can you reuse content from my existing website?',
        description: [
          'Yes.', 'If your existing website contains content you\'d like to keep, we can reuse or adapt it for the new website.', 'This may include:', '- Business information', '- Service descriptions', '- About content', '- Team information', '- Testimonials', '- Frequently asked questions', '- Blog content', '- Contact information', '- Images you own', '- Product or service details', 'We may recommend rewriting, reorganizing, shortening, or expanding some content if it will improve clarity, design, user experience, or SEO.', 'If your old website contains a large amount of content that needs to be manually migrated, reformatted, or rebuilt, additional content migration fees may apply. Any additional cost will be discussed before the work begins.'
        ]
      }
    ]
  },
  {
    section: 'Working With Sanova', 
    details: [
      {
        title: 'Who will I be working with?',
        description: [
          'We work with businesses across a wide range of industries.', 'Sanova websites are especially well suited for:', '- Local service businesses', '- Contractors and trades', '- Professional services', '- Security companies', '- Real estate businesses', '- Consultants', '- Healthcare and wellness businesses', '- Restaurants and hospitality businesses', '- Retail businesses', '- Startups', '- Small and growing comapnies', 'You do not need a to fit into a specific industry to work with us.', 'If your business needs a professional website that clearly explains what you do, builds trust, and helps potential customers take action, we can likely help.'
        ]
      }, 
      {
        title: 'Do I need to be located near you?', 
        description: [
          'No.', 'Sanova Web Solutions can work with businesses remotely, so you do not need to be located nearby.', 'Consultations, project communication, design reviews, approvals, payments, and website handoff can all be completed online.', 'This allows us to work with businesses throughout Ontario, across Canada, and beyond.', 'If an in-person meeting makes sense for a local project, availability can be discussed separately.'
        ]
      },
      {
        title: 'How do we communicate during the project?',
        description: [
          'We keep communication straightforward and organized.', 'Depending on the project, communication may take place through:', '- Email', '- Phone calls', '- Video meetings', '- Shared project documents', '- Online design or website reviews', 'We’ll let you know when feedback, content, approvals, or account access are required to keep the project moving.', 'To avoid confusion and missed requests, we recommend keeping important project feedback and approvals in writing whenever possible.', 'Clear and timely communication from both sides helps us keep your website on schedule.'
        ]
      },
      {
        title: 'How do I get started?',
        description: [
          'Getting started is simple.',
          'Contact Sanova Web Solutions and tell us a little about your business, your current website if you have one, and what you’re looking to accomplish.', 'From there, we\'ll:', '1. Review your project', '2. Discuss your goals and requirements', '3. Recommend an appropriate website scope', '4. Provide a proposal with pricing and project details', '5. Collect the initial deposit', '6. Begin the design and development process', 'You do not need to have everything figured out before contacting us.', 'If you only know that your business needs a better website, that’s enough to start the conversation.'
        ]
      }
    ]
  },
  {
    section: 'Policies',
    details: [
      {
        title: 'What happens if I stop responding during the project?',
        description: [
          'We understand that things come up and communication can occasionally be delayed.', 'However, website projects depend on timely feedback, approvals, content, and access from both sides.', 'If we are waiting on you for an extended period and cannot continue the project, we may place the project on hold.', 'If a project remains inactive for a prolonged period, it may need to be rescheduled based on our current availability before work can continue.', 'Any payments already made remain subject to the terms of your project agreement and are not automatically refundable because of client inactivity.', 'If you know you will be unavailable for a period of time, just let us know. We are happy to work with you where reasonable, but clear communication helps avoid unnecessary delays.'
        ]
      },
      {
        title: 'What happens if the project is delayed because I haven\'t provided content?',
        description: [
          'Your estimated project timeline depends on receiving the information and materials we need to complete your website.', 'This may include:', '- Written content', '- Service information', 'Images', 'Logos and branding', 'Testimonials', 'Contact information', 'Account access', 'Domain access', 'Design feedback', 'Approvals', 'If required materials are delayed, your original completion date may also need to be adjusted.', 'We may continue working on other parts of the project where possible, but we cannot guarantee the original timeline if we are waiting on information required from you.', 'If a significant delay causes your project to fall outside its original development window, we may need to reschedule the remaining work based on our current project availability.',
        ]
      },
      {
        title: 'Can Sanova display my website in its portfolio?', 
        description: ['Yes, unless otherwise agreed in writing.', 'We may showcase completed projects in our portfolio, website, social media, proposals, marketing materials, or other examples of our work.', 'This may include:', '- Screenshots of the website', 'Links to the live website', 'Your business name and logo', 'A brief project description', 'General information about the work completed', 'We will not intentionally publish confidential business information, private customer data, internal systems, login credentials, or other sensitive information as part of a portfolio showcase.', 'If your project needs to remain confidential or you do not want it publicly displayed, please let us know before the project begins so this can be addressed in your project agreement.']
      }, 
      {
        title: 'Are third-party fees included?',
        description: [
          'Not unless they are specifically listed as included in your proposal.', 'Some websites may require third-party products or services that are billed separately from Sanova\'s design and development fees.', 'Examples may include:', '- Domain registration', '- Paid hosting plans', '- Premium fonts', '- Stock photography', 'Premium software', '- Email services', '- Booking platforms', '- Payment processors', '- E-commerce platforms', 'APIs', 'CRM software', 'Analytics or marketing tools', 'Third-party plugins or integrations', 'Whenever possible, these services will be purchased through accounts owned by you or your business.', 'If a project requires a paid third-party service, we will let you know before committing you to that expense.'
        ]
      },
      {
        title: 'What happens if a third-party service stops working?',
        description: [
          'Some websites rely on services that Sanova does not own or control.', 'Examples include hosting providers, payment processors, booking systems, email platforms, APIs, social networks, analytics services, and other third-party software.', 'We cannot guarantee the ongoing availability, pricing, functionality, or compatibility of external services.', 'A third-party provider may:', '- Change its API', '- Change its pricing', '- Discontinue a feature', '- Experience downtime', '- Change its terms', '- Require an account upgrade', 'Introduces breaking changes', '- Discontinue its service entirely', 'If a third-party change affects your website, Sanova can help investigate the issue and recommend a solution.', 'If additional development is required to restore, replace, or modify functionality because of a third-party change, that work may be quoted separately.'
        ]
      },
      {
        title: 'Which terms apply to my individual project?', 
        description: ['Your individual project proposal and signed service agreement contain the specific terms that apply to your website.', 'These may include:', '- Project scope', '- Website price', '- Payment schedule', '- Included pages', '- Included functionality', '- Revision limits', '- Project timeline', '- Client repsonsibilities', '- Ownership and intellectual property','- Cancellation terms', '- Third-party services', '- Post-launch support', '- Additional work', '- Other project-specific conditions', 'This FAQ provides general information about how Sanova Web Solutions typically operates, but it does not replace your individual agreement.', 'If there is ever a conflict between this FAQ and the terms contained in your signed project agreement, the signed project agreement will govern.']
      }
    ]
  }

];
