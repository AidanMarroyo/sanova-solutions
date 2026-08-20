<<<<<<< HEAD
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
=======

import { ArrowRight, CalendarDays } from 'lucide-react';
>>>>>>> main
import { firestore } from '@/lib/firebase';
import { formatDate } from '@/lib/utils';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';
<<<<<<< HEAD
=======
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
>>>>>>> main

export default async function Blog() {
  const ref = collection(firestore, 'posts');
  const postsQuery = query(ref, limit(3));

  const querySnapshot = await getDocs(postsQuery);
  const posts = querySnapshot.docs.map((doc) => doc.data().data);
<<<<<<< HEAD
  return (
    <MaxWidthWrapper>
      <div>
        <div className='mx-auto mb-8 max-w-screen-sm text-center lg:mb-16'>
          <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-white'>
            INSIGHTS TO GROW YOUR BUSINESS
          </h2>
          <p className='text-white sm:text-xl'>
            Explore expert advice, industry trends, and practical tips for
            scaling your business with web services, SEO services, and
            e-commerce solutions.
          </p>
        </div>
        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post, index) => (
            <Card key={index} title={post.title}>
              <Link href={`/blog/post/${post.slug}`}>
                <CardHeader>
                  <Image
                    width={339}
                    height={339}
                    className='rounded-lg'
                    src={post.photo}
                    alt={post.title}
                  />

                  <CardTitle className='pt-4 text-2xl font-bold tracking-tight text-white'>
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className='text-white'>
                  {post.description}
                </CardContent>

                <CardFooter className='flex items-center space-x-4'>
                  <div className='font-medium text-white'>
                    <div>Sanova Web Soutions Team</div>
                    <div className='text-sm font-normal text-white'>
                      {formatDate(post.createdAt)}
                    </div>
                  </div>
                </CardFooter>
              </Link>
            </Card>
          ))}
        </div>
      </div>
      <div className='py-8 mt-16 text-center'>
        <Link href='/blog'>
          <Button>
            VIEW MORE
            <svg
              aria-hidden='true'
              className='-mr-1 ml-2 h-5 w-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </Button>
        </Link>
      </div>
    </MaxWidthWrapper>
  );
}
=======

  return (
    <section className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute right-[-16rem] top-[10%] h-[32rem] w-[32rem] rounded-full bg-violet-600/[0.06] blur-[150px]' />

        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
      </div>

      <MaxWidthWrapper className='relative'>
        {/* Heading */}
        <div className='mx-auto max-w-3xl text-center'>
          <div className='mb-5 flex items-center justify-center gap-3'>
            <span className='h-px w-8 bg-violet-400' />

            <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
              Insights
            </span>

            <span className='h-px w-8 bg-violet-400' />
          </div>

          <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl'>
            Ideas to help your
            <span className='block text-white/45'>
              business grow online.
            </span>
          </h2>

          <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
            Practical insights on websites, SEO, ecommerce, digital strategy,
            and the decisions that help businesses build a stronger online
            presence.
          </p>
        </div>

        {/* Articles */}
        <div className='mt-14 grid gap-5 md:grid-cols-2 lg:mt-20 lg:grid-cols-3'>
          {posts.map((post, index) => (
            <article
              key={post.slug ?? index}
              className='group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-white/[0.025] transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.14] hover:bg-white/[0.04]'
            >
              <Link
                href={`/blog/post/${post.slug}`}
                className='flex h-full flex-col'
              >
                {/* Image */}
                <div className='relative aspect-[16/10] overflow-hidden'>
                  <Image
                    fill
                    src={post.photo}
                    alt={post.title}
                    className='object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  />

                  <div className='absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent' />

                  <div className='absolute left-4 top-4 rounded-full border border-white/[0.12] bg-black/50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70 backdrop-blur-md'>
                    Sanova Insights
                  </div>
                </div>

                {/* Content */}
                <div className='flex flex-1 flex-col p-6 sm:p-7'>
                  <div className='flex items-center gap-2 text-xs text-white/30'>
                    <CalendarDays className='size-3.5' />
                    {formatDate(post.createdAt)}
                  </div>

                  <h3 className='mt-4 text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl'>
                    {post.title}
                  </h3>

                  <p className='mt-4 line-clamp-3 text-sm leading-7 text-white/40 sm:text-base'>
                    {post.description}
                  </p>

                  <div className='mt-auto pt-7'>
                    <div className='flex items-center justify-between border-t border-white/[0.07] pt-5'>
                      <span className='text-xs font-medium text-white/35'>
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

        {/* View all */}
        <div className='mt-12 flex justify-center lg:mt-14'>
          <Link
            href='/blog'
            className='group inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/[0.10] bg-white/[0.025] px-6 text-sm font-medium text-white/65 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white'
          >
            View all insights

            <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
          </Link>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
>>>>>>> main
