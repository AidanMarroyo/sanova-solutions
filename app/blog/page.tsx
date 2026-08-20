import { Metadata } from 'next';
<<<<<<< HEAD
import React from 'react';
import Blog from './Blog';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';
export const dynamic = 'force-dynamic'; // always fetch new data

export const metadata: Metadata = {
  title: 'Business Tips & Insights | Sanova Web Solutions Blog',
  description:
    'Stay updated with expert tips, trends, and strategies to start, scale, and market your business effectively.',
=======
import {
  collection,
  getDocs,
  limit,
  query,
} from 'firebase/firestore';

import Blog from './Blog';

import {
  firestore,
  postToJSON,
} from '@/lib/firebase';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Web Design, SEO & Business Insights',
  description:
    'Explore practical web design, SEO, ecommerce, and digital growth insights from Sanova Web Solutions to help your business compete and grow online.',
>>>>>>> main
};

export default async function BlogPage() {
  const ref = collection(firestore, 'posts');
<<<<<<< HEAD
  const postsQuery = query(ref, limit(6));

  const querySnapshot = await getDocs(postsQuery);
  const post = querySnapshot.docs.map((doc) => doc.data().data);

  return <Blog post={post} />;
}
=======

  const postsQuery = query(ref, limit(6));

  const querySnapshot = await getDocs(postsQuery);

  const posts = querySnapshot.docs.map((doc) => {
    const documentData = doc.data();

    /*
     * Your posts appear to be nested inside `data`,
     * so serialize that data manually.
     */
    const post = documentData.data;

    return {
      ...post,
      createdAt: post?.createdAt?.toMillis?.() ?? post?.createdAt ?? 0,
      updatedAt: post?.updatedAt?.toMillis?.() ?? post?.updatedAt ?? 0,
    };
  });

  return <Blog post={posts} />;
}
>>>>>>> main
