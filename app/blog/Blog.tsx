'use client';

import { firestore } from '@/lib/firebase';
import {
  collection,
  collectionGroup,
  getDocs,
  limit,
  query,
  startAfter,
  Timestamp,
} from 'firebase/firestore';
import Link from 'next/link';
import { useState } from 'react';

interface Post {
  createdAt: number | Timestamp;
  title: string;
  content: string;
  description: string;
  photo: string;
  slug: string;
}

interface BlogProps {
  post: Post[];
}

export default function Blog({ post }: BlogProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>(post);
  const [postsEnd, setPostsEnd] = useState<boolean>(false);

  const getMorePosts = async () => {
    setLoading(true);
    const last = posts[posts.length - 1];

    const cursor =
      typeof last.createdAt === 'number'
        ? Timestamp.fromMillis(last.createdAt)
        : last.createdAt;

    const ref = collectionGroup(firestore, 'posts');
    const postsQuery = query(ref, startAfter(cursor), limit(6));

    const newPosts = (await getDocs(postsQuery)).docs.map(
      (doc) => doc.data() as Post
    );

    setPosts(posts.concat(newPosts));
    setLoading(false);

    if (newPosts.length < 6) {
      setPostsEnd(true);
    }
  };

  console.log(posts[0].slug);
  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-white lg:text-4xl'>
            Our Blog
          </h2>
          <p className='mb-8 text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16'>
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <div className='mb-16 grid gap-8 lg:grid-cols-3 lg:divide-x lg:divide-gray-200 dark:lg:divide-gray-700'>
          <Link href={`/blog/post/${posts[0].slug}`}>
            <article>
              <img alt='' src={posts[0].photo} className='mb-5 rounded-lg' />

              <h2 className='my-2 text-2xl font-bold tracking-tight text-white'>
                <a href='#'>{posts[0].title}</a>
              </h2>
              <p className='mb-4 text-white'>
                {posts[0].description.slice(0, 160)}...
              </p>
              <a
                href='#'
                className='inline-flex items-center font-medium hover:underline text-white'
              >
                Read more
                <svg
                  className='ml-2 h-4 w-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </article>
          </Link>
          <div className='space-y-8 lg:pl-8'>
            <article>
              <h2 className='mb-2 text-2xl font-bold tracking-tight text-white'>
                <a href='#'>How to quickly deploy a static website</a>
              </h2>
              <p className='mb-4 text-gray-500 dark:text-gray-400'>
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
              <a
                href='#'
                className='inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500'
              >
                Read more
                <svg
                  className='ml-2 h-4 w-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </article>
            <article>
              <h2 className='mb-2 text-2xl font-bold tracking-tight text-white'>
                <a href='#'>
                  What is SEO? Search Engine Optimization Explained
                </a>
              </h2>
              <p className='mb-4 text-gray-500 dark:text-gray-400'>
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
              <a
                href='#'
                className='inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500'
              >
                Read more
                <svg
                  className='ml-2 h-4 w-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </article>
            <article>
              <h2 className='mb-2 text-2xl font-bold tracking-tight text-white'>
                <a href='#'>
                  Spotify's Car Thing available to all premium users
                </a>
              </h2>
              <p className='mb-4 text-gray-500 dark:text-gray-400'>
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
              <a
                href='#'
                className='inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500'
              >
                Read more
                <svg
                  className='ml-2 h-4 w-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </article>
          </div>
          <div className='space-y-8 lg:pl-8'>
            <article>
              <h2 className='mb-2 text-2xl font-bold tracking-tight text-white'>
                <a href='#'>How to Rank Higher on Google (6 Easy Steps)</a>
              </h2>
              <p className='mb-4 text-gray-500 dark:text-gray-400'>
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
              <a
                href='#'
                className='inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500'
              >
                Read more
                <svg
                  className='ml-2 h-4 w-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </article>
            <article>
              <h2 className='mb-2 text-2xl font-bold tracking-tight text-white'>
                <a href='#'>
                  12 SEO Best Practices That Everyone Should Follow
                </a>
              </h2>
              <p className='mb-4 text-gray-500 dark:text-gray-400'>
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
              <a
                href='#'
                className='inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500'
              >
                Read more
                <svg
                  className='ml-2 h-4 w-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </article>
            <article>
              <h2 className='mb-2 text-2xl font-bold tracking-tight text-white'>
                <a href='#'>How to schedule your Tweets to send later</a>
              </h2>
              <p className='mb-4 text-gray-500 dark:text-gray-400'>
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
              <a
                href='#'
                className='inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-500'
              >
                Read more
                <svg
                  className='ml-2 h-4 w-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
