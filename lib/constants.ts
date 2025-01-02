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
        description:
          'All code, scripts, and related assets developed by Sanova Web Solutions remain the intellectual property of Sanova Web Solutions unless explicitly agreed otherwise in a separate purchase agreement.',
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
        title: 'How long does the subscription last?',
        description:
          'Our subscription plan has a 12-month minimum commitment and becomes month-to-month afterward. You can cancel anytime once the 12 months are complete. Please note, if you cancel, you do not keep the website, as this ensures we can continue offering affordable solutions without being taken advantage of.',
      },
      {
        title:
          'What happens if I cancel after the 12 month minimum and want to come back?',
        description:
          'No problem! You’ll simply need to sign a new 12-month contract to resume services.',
      },
      {
        title: 'What happens if I cancel before the 12 months is over?',
        description:
          'If you cancel before completing the 12-month term, you’ll owe the remaining balance of the full website cost ($3,800), minus any payments already made. At Sanova Web Solutions, we prioritize long-term partnerships with our clients, and we appreciate clients who share this commitment.',
      },
      {
        title: 'How do you handle late payments?',
        description:
          'Each invoice includes a 7-day grace period for payment. If a payment isn’t received within 7 days, a $25 late fee will be applied. If multiple invoices go unpaid for months and there is no communication, we reserve the right to cancel the contract. In such cases, the client will be responsible for paying the full price of the website. We understand that unexpected situations can arise and are always open to discussing flexible solutions. However, if there’s no response or communication, we must take precautions to protect our time and efforts.',
      },
      {
        title: 'What payment methods do you accept?',
        description:
          'We send email invoices via Square, where you can securely add your payment information. Subscriptions require a credit card or debit card. For lump sum projects, we accept ACH bank transfers to minimize processing fees. We do not accept checks or money orders.',
      },
      {
        title: 'Is the $100 per additional page fee a one-time charge?',
        description:
          'Yes! The $100 per additional page fee is a one-time charge, not monthly. For example, if you need 3 extra pages, it’s $300 total—not $300 per month.',
      },
      {
        title: 'Do you offer refunds?',
        description:
          'If we cannot deliver a design you’re 100% happy with and you decide not to move forward, we’ll refund any payments made up to that point. However, once we proceed to the development stage, refunds are not provided. At that point, all refunds will be at our sole discretion..',
      },
    ],
  },
  {
    section: 'PLANS',
    details: [
      {
        title:
          'On subscriptions, once I’m done with the 12-month minimum, do I continue paying?',
        description:
          'Yes, subscriptions are indefinite. After the 12-month minimum, you’ll continue paying the monthly fee. It generally takes us 2-3 years to recoup what we would have earned selling a lump-sum site. Ideally, we aim for long-term partnerships—5+ years—where clients see the ongoing value of our services. By then, the website will likely generate far more value than the monthly cost, essentially paying for itself.',
      },
      {
        title: 'Can I buy out of my subscription after the 12-month minimum?',
        description:
          'No, we do not offer a buyout option. Subscriptions are structured for long-term value and financial sustainability. If clients were to buy out early, it would disrupt the model, which relies on reliable, recurring income. This allows us to spend more time supporting and improving clients’ websites, while focusing less on constant sales and more on delivering exceptional service. We prioritize quality and consistency in our client relationships, and this model helps us maintain that standard.',
      },
      {
        title: 'Can I add unlimited edits and support to the lump sum package?',
        description:
          'Yes! We offer an unlimited edits and support add-on for $50/month with a 12-month minimum commitment. This service cannot be turned on and off month-to-month. If canceled, you’ll need to sign a new 12-month commitment to reinstate it.',
      },
      {
        title: 'Do you offer e-commerce sites under the subscription plan?',
        description:
          'No, we do not. E-commerce sites require significantly more work and higher setup costs, which we can’t accommodate under the $200/month subscription plan.',
      },
      {
        title: 'If I cancel a subscription, do I keep my domain?',
        description: 'Yes! You always own your domain',
      },
    ],
  },
  {
    section: 'SEO',
    details: [
      {
        title: 'What are your rates for SEO?',
        description:
          'Our SEO services are tailored to the specific scope of work and goals for your business. The more aggressive and competitive the strategy, the higher the cost. Base package starts at $500/month. Pricing increases based on your desired level of work, including content, backlinks, and overall strategy. We’re happy to provide a detailed proposal after learning more about your specific goals and industry competition.',
      },
      {
        title: 'Does SEO actually work?',
        description:
          'Yes, it absolutely works! Good SEO is a proven long-term strategy, especially in competitive markets where businesses fight to rank on the first page of Google. SEO is not a quick fix—it’s an investment that requires 6-12 months to see substantial results. In competitive industries, success means consistently outperforming companies with dozens of optimized pages, hundreds of backlinks, and long-term authority. We focus on quality strategies, not gimmicks. When done right, SEO pays for itself through sustainable, organic leads.',
      },
      {
        title: 'Can you get me to the front page in less than a month?',
        description:
          'No. While it’s tempting to believe promises from spam emails claiming “#1 rankings in 30 days,” the reality is SEO success takes time, especially in competitive markets. Google’s algorithms prioritize trust and authority, which are built gradually through consistent content and optimization. If your market is less competitive, you may see improvement in a few months. But for most businesses, patience and persistence are key.',
      },
      {
        title: 'What do you do for SEO exactly?',
        description:
          'Our SEO expert focuses on high-quality content as the cornerstone of a successful SEO strategy. Our SEO specialist creates content that speaks to your audience, answers their questions, and showcases your authority. Our SEO specialists ensure your content, headings, and structure are optimized for search engines and users. All while Addressing load times, accessibility, meta tags, and other factors that affect rankings. Google’s algorithms increasingly prioritize valuable, well-written content. We focus on delivering quality over SEO “tricks”, helping both search engines and your audience recognize your business as an authority.',
      },
      {
        title: 'How long does SEO take to see results?',
        description:
          'SEO is a long-term investment. While immediate results are rare, you can expect to see measurable improvements within 6-12 months. Established competitors may have spent 10+ years building trust with Google. A new or under-optimized site needs time to build authority and prove its value to search engines. Think of SEO as building a reputation. We’re helping you earn Google’s trust so you can steadily climb to the top and stay there. Over time, you’ll see consistent, organic traffic that delivers long-term ROI.',
      },
    ],
  },
  {
    section: 'WEBSITES',
    details: [
      {
        title: 'How long does the process take from start to finish?',
        description:
          "On average, a website takes 2-4 weeks to complete. This timeline depends on the client's responsiveness to content and image requests, our team’s availability for design and development. In some cases, we can deliver in as little as 2 weeks, but 3-4 weeks is more typical.",
      },
      {
        title: 'Do I keep my website if I cancel the subscription?',
        description:
          'No, you do not keep the website itself. If we allowed that, everyone could cancel and we’d go out of business! However, you do keep your domain (ownership is always yours)and any assets, such as logos or images, that you’ve provided or purchased.',
      },
      {
        title: 'Do you own your domain?',
        description:
          'Yes! You own your domain outright. If we purchased the domain on your behalf, we will transfer it to you when you cancel the subscription.',
      },
      {
        title: 'Do you use WordPress or website builders?',
        description:
          'No. All our websites are created using custom, hand-written code. We don’t use builders or templates like WordPress, Wix, or Squarespace.',
      },
      {
        title: 'How do we request edits for our site?',
        description:
          'To request edits, simply: 1. Send an email to sanovasoftwareinc@gmail.com. 2. Your request will enter our ticketing system. 3. Our team will review, complete, and mark it as resolved. We make the process smooth, fast, and easy to keep your website running seamlessly.',
      },
    ],
  },
];
