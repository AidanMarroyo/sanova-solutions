import { Metadata } from 'next';
import React from 'react';
import Blog from './Blog';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';
export const dynamic = 'force-dynamic'; // always fetch new data

export const metadata: Metadata = {
  title: 'Business Tips & Insights | Sanova Web Solutions Blog',
  description:
    'Stay updated with expert tips, trends, and strategies to start, scale, and market your business effectively.',
};

export default async function BlogPage() {
  const ref = collection(firestore, 'posts');
  const postsQuery = query(ref, limit(6));

  const querySnapshot = await getDocs(postsQuery);
  const post = querySnapshot.docs.map((doc) => doc.data().data);

  return <Blog post={post} />;
}
