<<<<<<< HEAD
'use client';
import { Timestamp } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Post {
  createdAt: number | Timestamp;
=======

import { ArrowRight, CalendarDays } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


import { formatDate } from '@/lib/utils';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';

interface Post {
  createdAt: number;
>>>>>>> main
  title: string;
  content: string;
  description: string;
  photo: string;
  slug: string;
}

interface BlogProps {
  post: Post[];
}

<<<<<<< HEAD
export default function Blog({ post }: BlogProps) {
  const [posts, setPosts] = useState<Post[]>(post);

  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-white lg:text-4xl'>
            Sanova Web Solutions Blog
          </h2>
          <p className='mb-8 text-white sm:text-xl lg:mb-16'>
            Your go-to resource for strategies, innovations, and actionable
            insights to empower your business journey.
          </p>
        </div>
        <div className='mb-16 grid gap-8 lg:grid-cols-3 lg:divide-x lg:divide-gray-700'>
          <article>
            <Image
              width={389}
              height={389}
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
            {posts.slice(1, 4).map((post, index) => (
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
          <div className='space-y-8 lg:pl-8'>
            {posts.slice(4, 7).map((post, index) => (
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
=======
function truncate(text: string, length = 160) {
  if (text.length <= length) return text;

  return `${text.slice(0, length).trim()}...`;
}

export default function Blog({ post: posts }: BlogProps) {
  const [featuredPost, ...remainingPosts] = posts;

  return (
    <section className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
      {/* Background atmosphere */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute left-1/2 top-[-18rem] h-[42rem] w-[50rem] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[160px]' />

        <div className='absolute right-[-16rem] top-[40%] h-[32rem] w-[32rem] rounded-full bg-blue-600/[0.05] blur-[150px]' />

        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
      </div>

      <MaxWidthWrapper className='relative'>
        {/* Header */}
        <div className='mx-auto max-w-3xl text-center'>
          <div className='mb-5 flex items-center justify-center gap-3'>
            <span className='h-px w-8 bg-violet-400' />

            <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
              Sanova insights
            </span>

            <span className='h-px w-8 bg-violet-400' />
          </div>

          <h1 className='text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl'>
            Ideas for building
            <span className='block text-white/45'>
              a stronger business online.
            </span>
          </h1>

          <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
            Practical insights on web design, SEO, ecommerce, performance, and
            digital strategy for businesses that want to grow online.
          </p>
        </div>

        {/* Empty state */}
        {!featuredPost && (
          <div className='mx-auto mt-16 max-w-2xl rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] px-6 py-12 text-center'>
            <p className='text-lg font-medium text-white'>
              No articles published yet.
            </p>

            <p className='mt-2 text-sm text-white/40'>
              Check back soon for new insights from Sanova.
            </p>
          </div>
        )}

        {featuredPost && (
          <>
            {/* Featured article */}
            <article className='group mt-16 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] lg:mt-24'>
              <Link
                href={`/blog/post/${featuredPost.slug}`}
                className='grid lg:grid-cols-[1.15fr_0.85fr]'
              >
                <div className='relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[520px]'>
                  <Image
                    fill
                    priority
                    src={featuredPost.photo}
                    alt={featuredPost.title}
                    className='object-cover transition-transform duration-700 group-hover:scale-[1.025]'
                    sizes='(max-width: 1024px) 100vw, 60vw'
                  />

                  <div className='absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/15' />
                </div>

                <div className='flex flex-col justify-center p-7 sm:p-10 lg:p-12 xl:p-14'>
                  <div className='flex items-center gap-3'>
                    <span className='rounded-full border border-violet-400/15 bg-violet-400/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300'>
                      Featured
                    </span>

                    <span className='flex items-center gap-1.5 text-xs text-white/30'>
                      <CalendarDays className='size-3.5' />
                      {formatDate(featuredPost.createdAt)}
                    </span>
                  </div>

                  <h2 className='mt-6 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl xl:text-5xl'>
                    {featuredPost.title}
                  </h2>

                  <p className='mt-5 text-sm leading-7 text-white/40 sm:text-base'>
                    {truncate(featuredPost.description, 220)}
                  </p>

                  <div className='mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors group-hover:text-violet-300'>
                    Read featured article

                    <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
                  </div>
                </div>
              </Link>
            </article>

            {/* Remaining posts */}
            {remainingPosts.length > 0 && (
              <div className='mt-16 lg:mt-24'>
                <div className='mb-8 flex items-end justify-between gap-6'>
                  <div>
                    <p className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                      Latest articles
                    </p>

                    <h2 className='mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl'>
                      More from Sanova
                    </h2>
                  </div>
                </div>

                <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
                  {remainingPosts.map((post) => (
                    <article
                      key={post.slug}
                      className='group overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04]'
                    >
                      <Link
                        href={`/blog/post/${post.slug}`}
                        className='flex h-full flex-col'
                      >
                        <div className='relative aspect-[16/10] overflow-hidden'>
                          <Image
                            fill
                            src={post.photo}
                            alt={post.title}
                            className='object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                            sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                          />

                          <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent' />
                        </div>

                        <div className='flex flex-1 flex-col p-6 sm:p-7'>
                          <div className='flex items-center gap-2 text-xs text-white/30'>
                            <CalendarDays className='size-3.5' />
                            {formatDate(post.createdAt)}
                          </div>

                          <h3 className='mt-4 text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl'>
                            {post.title}
                          </h3>

                          <p className='mt-4 text-sm leading-7 text-white/40'>
                            {truncate(post.description)}
                          </p>

                          <div className='mt-auto pt-7'>
                            <div className='flex items-center justify-between border-t border-white/[0.07] pt-5'>
                              <span className='text-xs text-white/30'>
                                Sanova Web Solutions
                              </span>

                              <span className='flex items-center gap-1.5 text-sm font-medium text-white/50 transition-colors group-hover:text-violet-300'>
                                Read article

                                <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </MaxWidthWrapper>
    </section>
  );
}
>>>>>>> main
