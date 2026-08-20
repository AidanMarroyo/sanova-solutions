import { firestore } from '@/lib/firebase';
import { ontarioCities } from '@/lib/locations';
import { toSlug } from '@/lib/utils';
import { collection, getDocs, query } from 'firebase/firestore';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

  const ref = collection(firestore, 'posts');
  const postsQuery = query(ref);

  const querySnapshot = await getDocs(postsQuery);
  const posts = querySnapshot.docs.map((doc) => doc.data().data);

  const postEntries: MetadataRoute.Sitemap = posts.map(({ title }) => {
    const slug = toSlug(title);

    return {
      url: `${baseUrl}/blog/post/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    };
  });

  const locationEntries: MetadataRoute.Sitemap = ontarioCities.map(
    (city) => ({
      url: `${baseUrl}/locations/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }),
  );

  const webDesignEntries: MetadataRoute.Sitemap = ontarioCities.map(
    (city) => ({
      url: `${baseUrl}/services/web-design/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    }),
  );

  const seoEntries: MetadataRoute.Sitemap = ontarioCities.map((city) => ({
    url: `${baseUrl}/services/seo/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const ecommerceEntries: MetadataRoute.Sitemap = ontarioCities.map(
    (city) => ({
      url: `${baseUrl}/services/ecommerce/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    }),
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/licensing`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },

    // Main service pages
    {
      url: `${baseUrl}/services/seo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/web-design`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ecommerce`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Ontario locations hub
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Dynamic pages
    ...locationEntries,
    ...webDesignEntries,
    ...seoEntries,
    ...ecommerceEntries,

    // Blog posts
    ...postEntries,
  ];
}