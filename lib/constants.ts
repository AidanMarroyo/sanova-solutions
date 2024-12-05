import { Ri24HoursLine } from 'react-icons/ri';
import { Results } from './../node_modules/sucrase/node_modules/glob/dist/commonjs/glob.d';
import {
  MdDataThresholding,
  MdOutlineDashboardCustomize,
  MdOutlineEdit,
} from 'react-icons/md';
export const services = {
  'custom-applications': {
    name: 'Custom Applications',
    title: 'Custom Applications Designed for Your Unique Business Needs',
    description:
      'Empower your business with tailor-made software solutions crafted to solve your unique challenges. At Sanova Solutions, we specialize in developing custom applications that optimize workflows, enhance productivity, and drive growth.',
    title2: 'What’s Included in Our Custom Application Services?',
    list: [
      'Comprehensive needs analysis and consultation',
      'Full-stack development for web and mobile platforms',
      'User-friendly interfaces designed for optimal user experience',
      'Custom features and functionality tailored to your business',
      'Scalable architecture that grows with your business',
      'Ongoing support and maintenance to keep your application running smoothly',
      'Advanced integrations (e.g., APIs, third-party tools)',
    ],
    ctaTitle: 'Let’s Build Something Extraordinary',
    ctaDescription:
      'Ready to transform your business with a custom application? Let’s bring your vision to life.',
    ctaButton: 'Get a Free Consultation',
  },
  'website-services': {
    name: 'Website Services',
    title: 'Professional Websites That Make an Impact',
    description:
      'Your website is often the first impression of your business. At Sanova Solutions, we design responsive, user-friendly, and SEO-optimized websites that help you stand out, engage visitors, and convert leads into loyal customers.',
    title2: 'Why Choose Our Website Services?',
    list: [
      'Fully responsive designs for a seamless user experience on any device',
      'SEO-optimized to improve your search engine visibility',
      'Hosting and maintenance included for hassle-free management',
      'Unlimited edits to keep your site fresh and updated',
    ],
    ctaTitle: 'Let’s Build Your Online Presence',
    ctaDescription:
      'Ready to take your business to the next level? Contact us today to create a professional website that drives results.',
    ctaButton: 'Start Your Website Today',
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

export const HomeAbout = {
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
