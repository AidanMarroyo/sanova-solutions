import { Metadata } from 'next';
import { cache } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
  ArrowLeft,
  CalendarDays,
  Clock3,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { firestore } from '@/lib/firebase';
import { CTA } from '@/components/CTA';

import { formatDate } from '@/lib/utils';
import { Sidebar } from './sidebar';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const getPost = cache(async ({ slug }: { slug: string }) => {
  const postRef = doc(firestore, 'posts', slug);
  const postSnap = await getDoc(postRef);

  if (!postSnap.exists()) {
    notFound();
  }

  return postSnap.data();
});

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost({ slug });

  if (!post?.data) {
    notFound();
  }

  const title = post.data.title;
  const description = post.data.description;
  const image = post.data.photo;

  return {
    title,

    description,

    alternates: {
      canonical: `/blog/post/${slug}`,
    },

    openGraph: {
      type: 'article',
      title,
      description,
      url: `/blog/post/${slug}`,
      images: image
        ? [
            {
              url: image,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

function getReadingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 220));

  return `${minutes} min read`;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost({ slug });

  if (!post?.data) {
    notFound();
  }

  const article = post.data;

  const createdAt =
    typeof article.createdAt?.toMillis === 'function'
      ? article.createdAt.toMillis()
      : article.createdAt;

  const readingTime = getReadingTime(article.content ?? '');

  return (
    <main className='relative overflow-hidden pb-24 lg:pb-32'>
      {/* Global article atmosphere */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute left-1/2 top-[-16rem] h-[42rem] w-[50rem] -translate-x-1/2 rounded-full bg-violet-600/[0.08] blur-[160px]' />

        <div className='absolute right-[-16rem] top-[45%] h-[32rem] w-[32rem] rounded-full bg-blue-600/[0.05] blur-[150px]' />
      </div>

      {/* Hero */}
      <section className='relative'>
        <MaxWidthWrapper className='relative'>
          <div className='pb-12 pt-12 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20'>
            <Link
              href='/blog'
              className='group inline-flex items-center gap-2 text-sm font-medium text-white/40 transition-colors hover:text-white'
            >
              <ArrowLeft className='size-4 transition-transform duration-200 group-hover:-translate-x-1' />
              Back to insights
            </Link>

            <div className='mt-10 max-w-5xl'>
              <div className='mb-5 flex items-center gap-3'>
                <span className='h-px w-8 bg-violet-400' />

                <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                  Sanova insights
                </span>
              </div>

              <h1 className='text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl'>
                {article.title}
              </h1>

              {article.title2 && (
                <p className='mt-6 max-w-3xl text-base leading-8 text-white/45 sm:text-lg lg:text-xl'>
                  {article.title2}
                </p>
              )}

              <div className='mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/35'>
                <span>
                  By{' '}
                  <span className='font-medium text-white/60'>
                    Sanova Web Solutions
                  </span>
                </span>

                <span className='hidden size-1 rounded-full bg-white/20 sm:block' />

                <span className='flex items-center gap-2'>
                  <CalendarDays className='size-4' />

                  <time
                    dateTime={
                      createdAt
                        ? new Date(createdAt).toISOString()
                        : undefined
                    }
                  >
                    {createdAt ? formatDate(createdAt) : 'Published article'}
                  </time>
                </span>

                <span className='hidden size-1 rounded-full bg-white/20 sm:block' />

                <span className='flex items-center gap-2'>
                  <Clock3 className='size-4' />
                  {readingTime}
                </span>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        {/* Feature image */}
        {article.photo && (
          <MaxWidthWrapper>
            <div className='relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.45)] sm:p-3'>
              <div className='relative aspect-[16/7] overflow-hidden rounded-[1.5rem]'>
                <Image
                  fill
                  priority
                  src={article.photo}
                  alt={article.title}
                  className='object-cover'
                  sizes='(max-width: 1200px) 100vw, 1400px'
                />

                <div className='absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent' />
              </div>
            </div>
          </MaxWidthWrapper>
        )}
      </section>

      {/* Article layout */}
      <MaxWidthWrapper className='relative'>
        <div className='mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 xl:gap-20'>
          {/* Main article */}
          <article className='min-w-0'>
            <div
              className='
                prose
                prose-invert
                prose-lg
                max-w-none

                prose-headings:scroll-mt-32
                prose-headings:font-semibold
                prose-headings:tracking-[-0.035em]
                prose-headings:text-white

                prose-h2:mt-14
                prose-h2:text-3xl
                prose-h3:mt-10
                prose-h3:text-2xl

                prose-p:leading-8
                prose-p:text-white/50

                prose-strong:font-semibold
                prose-strong:text-white

                prose-a:text-violet-300
                prose-a:no-underline
                hover:prose-a:text-violet-200
                hover:prose-a:underline

                prose-li:leading-8
                prose-li:text-white/50

                prose-blockquote:border-violet-400/40
                prose-blockquote:text-white/60

                prose-hr:border-white/[0.08]

                prose-code:rounded-md
                prose-code:bg-white/[0.06]
                prose-code:px-1.5
                prose-code:py-0.5
                prose-code:text-violet-200

                prose-pre:border
                prose-pre:border-white/[0.08]
                prose-pre:bg-[#0a0a0a]

                prose-img:rounded-2xl
                prose-img:border
                prose-img:border-white/[0.08]
              '
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {article.content}
              </ReactMarkdown>
            </div>

            {/* Article end */}
            <div className='mt-16 border-t border-white/[0.08] pt-8'>
              <div className='rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] px-6 py-6 sm:px-8'>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-violet-300'>
                  Written by
                </p>

                <h2 className='mt-2 text-xl font-semibold text-white'>
                  Sanova Web Solutions
                </h2>

                <p className='mt-3 max-w-2xl text-sm leading-7 text-white/40'>
                  We share practical insights on websites, SEO, ecommerce,
                  performance, and digital growth to help businesses make better
                  decisions online.
                </p>
              </div>
            </div>

            <CTA
              cta='Start your project'
              description='Tell us what you’re trying to build and we’ll help you figure out the right approach.'
              title='Ready to improve your online presence?'
            />
          </article>

          {/* Sidebar */}
          <aside className='hidden lg:block'>
            <div className='sticky top-32'>
              <Sidebar />
            </div>
          </aside>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}