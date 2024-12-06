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
