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
