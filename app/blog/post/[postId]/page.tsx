import { cache } from 'react';
import { Sidebar } from './sidebar';
import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Markdown from '@/components/Markdown';
import { Metadata } from 'next';
import { formatDate } from '@/lib/utils';

interface PageProps {
  params: Promise<{ postId: string }>;
}

const getPost = cache(async (postId: string) => {
  const post = await prisma.post.findUnique({
    where: { slug: postId },
  });

  if (!post) notFound();

  return post;
});

export async function generateStaticParams() {
  const posts = await prisma.post.findMany();
  return posts
    .filter((post: { slug?: string }) => post.slug) // Ensure valid slugs
    .map((post: { slug: string }) => ({ params: { postId: post.slug } }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = await getPost((await params).postId);

  return {
    title: `${post.title} | Sanova Solutions`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const post = await getPost((await params).postId);
  return (
    <main className='lg:pb-24'>
      <header className="relative h-[460px] w-full bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/background.png')] bg-cover bg-center bg-no-repeat bg-blend-darken xl:h-[537px]">
        <div className='absolute left-0 top-0 h-full w-full bg-black bg-opacity-50'></div>
        <div className='absolute left-1/2 top-20 mx-auto w-full max-w-screen-xl -translate-x-1/2 px-4 xl:top-1/2 xl:-translate-y-1/2 xl:px-0'>
          <h1 className='mb-4 max-w-4xl text-2xl font-extrabold leading-none text-white sm:text-3xl lg:text-4xl'>
            {post.title}
          </h1>
          <p className='text-lg font-normal text-gray-300'>
            {post.title2 ? post.title2 : null}
          </p>
        </div>
      </header>

      <div className='relative z-20 -m-36 mx-4 flex max-w-screen-xl justify-between rounded bg-white p-6 dark:bg-gray-800 xl:-m-32 xl:mx-auto xl:p-9 '>
        <article className='format format-sm format-blue w-full max-w-none dark:format-invert sm:format-base lg:format-lg xl:w-[828px]'>
          <div className='flex flex-col justify-between lg:flex-row lg:items-center'>
            <div className='mb-2 flex items-center space-x-3 text-base text-gray-500 dark:text-gray-400 lg:mb-0'>
              <span>
                By{' '}
                <a
                  href='#'
                  className='font-semibold text-gray-900 no-underline hover:underline dark:text-white'
                >
                  Sanova Solutions Team
                </a>
              </span>
              <span className='h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-400'></span>
              <span>
                <time
                  className='font-normal text-gray-500 dark:text-gray-400'
                  dateTime='2022-08-03'
                >
                  {formatDate(post.createdAt)}
                  {/* August 3, 2022, 2:20am EDT */}
                </time>
              </span>
            </div>
            <aside aria-label='Share social media'>
              <div className='not-format'>
                <div className='flex gap-x-1'>
                  {/* Social share buttons */}
                  {/* ... (implement social share buttons) */}
                </div>
              </div>
            </aside>
          </div>

          {/* Article content */}
          <div className='w-full grow space-y-5 min-h-[320px] py-6'>
            <Markdown>{post.content}</Markdown>
          </div>

          {/* <CommentSection /> */}
        </article>

        <Sidebar />
      </div>

      {/* <RelatedArticles />
      <NewsletterSignup /> */}
    </main>
  );
}
