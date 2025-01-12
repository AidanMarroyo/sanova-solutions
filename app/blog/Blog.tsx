'use client';
import { Timestamp } from 'firebase/firestore';
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
  const [posts, setPosts] = useState<Post[]>(post);

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
          <article>
            <img
              alt={posts[0].title}
              src={posts[0].photo}
              className='mb-5 rounded-lg'
              title={posts[0].title}
            />

            <h2 className='my-2 text-2xl font-bold tracking-tight text-white'>
              {posts[0].title}
            </h2>
            <p className='mb-4 text-white'>
              {posts[0].description.slice(0, 160)}...
            </p>
            <Link
              className='inline-flex items-center font-medium hover:underline text-white'
              href={`/blog/post/${posts[0].slug}`}
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
            </Link>
          </article>

          <div className='space-y-8 lg:pl-8'>
            {posts.slice(1).map((post, index) => (
              <article key={index}>
                <h2 className='mb-2 text-2xl font-bold tracking-tight text-white'>
                  <a href='#'>{post.title}</a>
                </h2>
                <p className='mb-4 text-white'>
                  {post.description.slice(0, 160)}...
                </p>
                <Link
                  className='inline-flex items-center font-medium hover:underline text-white'
                  href={`/blog/post/${post.slug}`}
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
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
