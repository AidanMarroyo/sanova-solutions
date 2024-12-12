import { Ri24HoursLine } from 'react-icons/ri';
import { FaStopwatch, FaWpforms } from 'react-icons/fa';
import {
  MdBusinessCenter,
  MdDataThresholding,
  MdOutlineContactSupport,
  MdOutlineDashboardCustomize,
  MdOutlineDeveloperMode,
  MdOutlineEdit,
  MdOutlineHighQuality,
  MdOutlinePayment,
  MdOutlineSearch,
} from 'react-icons/md';
import { TbApi, TbSeo } from 'react-icons/tb';
import { CgWebsite } from 'react-icons/cg';
import { BsShop } from 'react-icons/bs';
import { GiStoneCrafting } from 'react-icons/gi';
import { GoGoal } from 'react-icons/go';

export const services = {
  'custom-applications': {
    name: 'Custom Applications',
    title: 'Custom Applications Designed for Your Unique Business Needs',
    description:
      'Empower your business with tailor-made software solutions crafted to solve your unique challenges. At Sanova Solutions, we specialize in developing custom applications that optimize workflows, enhance productivity, and drive growth.',
    title2: 'Why Choose Custom Applications from Sanova Solutions',
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
    title: 'Professional Web Design & Development Services',
    description:
      'At Sanova Web Solutions, we take a unique approach to web design and development. Instead of relying on WordPress or page builders, we custom code every website from the ground up. This allows us to create tailored designs with zero unnecessary bloat, ensuring your site is fast, secure, and high-performing.',
    title2: 'Why Choose Our Web Design & Development Services?',
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
      "Whether you're launching a new online store or optimizing an existing one, Sanova Solutions has you covered. Our e-commerce services provide scalable, secure, and user-friendly platforms designed to grow your business and simplify online selling.",
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

export const NavLinks = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'About Us', href: '/about-us' },
  { id: 3, name: 'Services', href: '/services' },
  { id: 4, name: 'Portfolio', href: '/portfolio' },
  { id: 5, name: 'Blog', href: '/blog' },
  { id: 6, name: 'Contact Us', href: '/contact-us' },
];

export const SecondaryNavLinks = [
  {
    id: 1,
    name: 'Sitemap',
    href: '/sitemap',
  },
  { id: 2, name: 'Legal', href: '/legal' },
  { id: 3, name: 'Privacy Policy', href: '/privacy-policy' },
  { id: 4, name: 'Terms', href: '/terms' },
];

export const HomeFeatures = {
  id: 1,
  title: 'Why Choose Sanova Solutions?',
  description:
    'Our clients choose Sanova Solutions for innovative, reliable, and tailored services.',
  features: [
    {
      id: 1,
      title: 'Custom-Tailored Solutions',
      description: 'Unique strategies designed to meet your business needs.',
      icon: MdOutlineDashboardCustomize,
    },
    {
      id: 2,
      title: '24-Hour Support, 5 Days a Week',
      description: 'Fast and reliable assistance when you need it most.',
      icon: Ri24HoursLine,
    },
    {
      id: 3,
      title: 'Hosting and Unlimited Edits',
      description:
        'Stress-free website management with ongoing updates and maintenance.',
      icon: MdOutlineEdit,
    },
    {
      id: 4,
      title: 'Proven Results',
      description: 'Transparent, data-driven outcomes you can trust.',
      icon: MdDataThresholding,
    },
  ],
};

export const AboutusFeatures = {
  id: 1,
  title: 'Driving Innovation, Inspiring Success',
  description:
    'Mission: To deliver tailored solutions that help businesses start, scale and excel',
  features: [
    {
      id: 1,
      title: 'Innovation',
      description: 'We craft custom solutions that stand out',
      icon: GiStoneCrafting,
    },
    {
      id: 2,
      title: 'Collaboration',
      description: 'Your goals become our goals',
      icon: GoGoal,
    },
    {
      id: 3,
      title: 'Excellence',
      description: 'We strive for quality in every detail',
      icon: MdOutlineHighQuality,
    },
    {
      id: 4,
      title: 'Adaptability',
      description:
        'We embrace change, staying agile to meet evolving business needs and emerging opportunities',
      icon: MdBusinessCenter,
    },
  ],
};

export const Terms = [
  {
    id: 1,
    title: 'Responsibility',
    description:
      'Sanova Solutions is committed to delivering requested services promptly and in accordance with the agreed-upon standards outlined in the contract.  Projects requiring work outside of normal business hours or exceeding standard turnaround times may incur additional charges. If work is paused after initiation, billing will reflect the completed work up to that point. While Sanova Solutions will work collaboratively with third-party entities engaged by the client, we are not responsible for their performance.',
  },
  {
    id: 2,
    title: 'Ownership',
    description:
      'Clients acknowledge that all files, web pages, graphics, and programming work, excluding materials provided by the client, remain the sole property of Sanova Solutions until all applicable fees are fully paid. Upon payment, ownership is transferred to the client. For programming work, such as custom scripts, shopping carts, and database programs, clients agree that they do not hold the rights to replicate, sell, or distribute these programs unless explicitly agreed upon. Programs created by Sanova Solutions are licensed for use exclusively on the client’s specified website unless additional permissions are purchased.',
  },
  {
    id: 3,
    title: 'Copyright',
    description:
      'All work produced by Sanova Solutions is subject to copyright protection. Clients are granted rights solely for the agreed-upon purposes, such as web publication. Unauthorized reproduction in print or other media without explicit permission may constitute copyright infringement. Full copyright ownership can be purchased if required. Clients affirm they have proper authorization or licenses for any materials provided and accept full responsibility for any copyright-related disputes. Sanova Solutions assumes no liability for verifying the legality of client-provided materials.',
  },
  {
    id: 4,
    title: 'Proofreading',
    description:
      "Sanova Solutions' liability for typographical, pricing, or similar errors is limited to correcting them upon timely notification during the proofreading and testing phase. Clients are responsible for reviewing all work to ensure (a) quality, (b) accuracy in size and content, (c) suitability for its intended use, and (d) compliance with copyright and other legal standards before publication.",
  },
  {
    id: 5,
    title: 'Offensive/Libelous Material',
    description:
      'Clients agree not to use Sanova Solutions’ services to publish material deemed defamatory, offensive, or libelous. Sanova Solutions disclaims liability for content hosted on or transmitted through our services. Clients bear full responsibility for the content of their websites and indemnify Sanova Solutions against any claims arising from defamatory or unlawful material. Sanova Solutions does not monitor client data for content compliance.',
  },
  {
    id: 6,
    title: 'Loss of Earnings',
    description:
      'Sanova Solutions is not liable for any loss of business resulting from service failures, including but not limited to losses in revenue, profits, or indirect damages. If a service fails, compensation will be limited to a pro-rata refund of payments made for the affected service. Sanova Solutions also disclaims liability for fraudulent or improper use of data stored on its systems.',
  },
  {
    id: 7,
    title: 'Portfolio',
    description:
      'To maintain portfolio credibility, Sanova Solutions reserves the right to include a small logo on client websites, linking back to our website. We may also feature client projects in our portfolio and marketing materials unless otherwise agreed upon.',
  },
  {
    id: 8,
    title: 'Hosting Contracts',
    description:
      'Sanova Solutions invoices domain name and hosting contracts annually. Transfers of domain names or hosting to other providers will be facilitated provided the account is paid in full and an authorized request is submitted. Clients wishing not to renew domain or hosting services must notify us at least 30 days before the renewal date to avoid charges. Domain names are automatically renewed upon expiration unless notified otherwise.',
  },
  {
    id: 9,
    title: 'Payment',
    description:
      'Sanova Solutions may require an advance deposit of up to 50% of estimated project fees before work begins. Final payment must be made before the website is launched. Payments are due upon receipt of the invoice. Non-payment may result in the removal of website content or suspension of hosting services without notice.',
  },
  {
    id: 10,
    title: 'Email Disclosure',
    description:
      'Emails from Sanova Solutions may contain confidential or privileged information. They are intended solely for the recipient. If you receive an email in error, please notify the sender promptly and delete it. Unauthorized use, disclosure, or reliance on email content is prohibited. The opinions expressed in emails are those of the author and do not necessarily reflect the views of Sanova Solutions.',
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

export const FAQ = [
  {
    id: 1,
    title: 'How long will the creation of my website take?',
    description:
      'The timeline of a website design project is typically influenced by the client. If you have a specific deadline, we will endeavor to accommodate it. One of the most frequent causes of delay in completing a new website is the wait for content (such as text or images) from the client. Our aim is to typically complete projects within a 4-6 week timeframe.',
  },
  {
    id: 2,
    title: 'Will we need to have a face-to-face meeting to begin the project?',
    description:
      'While we strive to meet with our clients whenever feasible, it may not always be possible. In such cases, website projects are typically managed through communication via email and telephone. We utilize a secure testing server to showcase suggested website designs for your review and feedback. This approach allows for regular communication, ensuring that you receive the desired outcome from the Sanova Solutions team.',
  },
  {
    id: 3,
    title: 'Do you provide any additional services?',
    description:
      'We provide comprehensive support for all websites we design and remain readily available to assist you with any issues or enhancements you may require. Our services include website maintenance, web hosting, SEO, and domain registration. Rest assured, Sanova Solutions has all your needs covered.',
  },
  {
    id: 4,
    title: 'Do I need a database for my website?',
    description:
      'The necessity for a database in your website design will be determined by the volume of information you intend to display. If you have numerous products or services, incorporating a database may prove beneficial. We will thoroughly discuss this aspect with you, and if a database is recommended, we will provide a detailed explanation of its functionality and associated costs.',
  },
  {
    id: 5,
    title: 'How do I update my website?',
    description:
      'There are various methods available for updating websites, and the choice of method and functionality to be integrated into your website design is entirely at your discretion, taking into account your budget constraints. We are happy to offer guidance on the most suitable method to meet your needs.',
  },
  {
    id: 6,
    title: 'What is Managed Hosting?',
    description:
      'Our team will handle the setup, configuration, and ongoing maintenance of your website, including domain registration/administration, website backups, security enhancements, server monitoring, uptime tracking, and website installation. Our hosting packages are available through subscriptions.',
  },
  {
    id: 7,
    title: 'Does my hosting subscription include 24/7 tech support?',
    description:
      'As the account administrator, only Sanova Solutions has access to server technical support. In the event of any technical issues, simply contact us via email or phone to report the problem, and we will make every effort to resolve it promptly.',
  },
  {
    id: 8,
    title: 'Can you build e-commerce platforms?',
    description:
      'Absolutely. We utilize Secure Servers (SSL) equipped with the latest encryption techniques, guaranteeing that your customers can make purchases on your website with confidence, knowing that their information is secure and protected.',
  },
  {
    id: 9,
    title: 'How much will a website cost?',
    description:
      "The pricing for a website can vary based on its complexity and specific requirements. For instance, a 3-page basic website consisting of a homepage, about page, and contact page starts at $1,500+HST. Feel free to reach out to us, and we'll gladly discuss your website design needs with you and provide a customized quotation tailored to your unique requirements.",
  },
  {
    id: 10,
    title: 'How many pages can I have on my website?',
    description:
      'As many as you like. From a search engines point a view – the more the better!',
  },
];

export const licensingTerms = [
  {
    section: 'Licensing Model',
    details: [
      {
        title: 'Ownership of Code',
        description:
          'All code, scripts, and related assets developed by Sanova Solutions remain the intellectual property of Sanova Solutions unless explicitly agreed otherwise in a separate purchase agreement.',
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
          'Upon payment of the agreed purchase price, Sanova Solutions will transfer exclusive ownership rights to the client, relinquishing all claims to the code.',
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
          'Licensed code may not be shared, distributed, sold, or sublicensed by the client without prior written consent from Sanova Solutions.',
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
          'Upon termination, Sanova Solutions will offer assistance to transition services or data, as applicable.',
      },
    ],
  },
  {
    section: 'Custom Solutions and Modifications',
    details: [
      {
        title: 'Authorized Modifications',
        description:
          'Modifications to licensed code must be performed by or authorized by Sanova Solutions to maintain compatibility and avoid potential issues.',
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
          'All custom software and services provided by Sanova Solutions are protected under copyright and intellectual property laws.',
      },
      {
        title: 'Prohibited Actions',
        description:
          'Clients are prohibited from reverse-engineering, decompiling, or disassembling the licensed code.',
      },
    ],
  },
];
