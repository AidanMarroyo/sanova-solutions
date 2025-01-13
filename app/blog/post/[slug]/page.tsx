import { Metadata } from 'next';
import { cache } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { CTA } from '@/components/CTA';

import { formatDate } from '@/lib/utils';
import { Sidebar } from './sidebar';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const getPost = cache(async ({ slug }: { slug: string }) => {
  console.log(`Fetching post with slug: ${slug}`);
  const postRef = doc(firestore, 'posts', slug);
  const postSnap = await getDoc(postRef);
  if (!postSnap.exists()) {
    console.error(`Post not found for slug: ${slug}`);
    notFound();
  }
  console.log(`Fetched post:`, postSnap.data());
  return postSnap.data();
});

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost({ slug });

  if (!post) {
    notFound();
  }

  return {
    title: `${post.title} | Sanova Web Solutions`,
    description: post.description,
    openGraph: {
      images: [
        {
          url: post.photo,
        },
      ],
    },
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost({ slug });

  if (!post) {
    notFound();
  }

  return (
    <main className='lg:pb-24 mb-32'>
      <header
        className={`relative h-[460px] w-full bg-cover bg-center bg-no-repeat bg-blend-darken xl:h-[537px]`}
        style={{
          backgroundImage: `url('${
            post.photo ||
            'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/background.png'
          }')`,
        }}
      >
        <div className='absolute left-0 top-0 h-full w-full bg-black bg-opacity-50'></div>
        <div className='absolute left-1/2 top-20 mx-auto w-full max-w-screen-xl -translate-x-1/2 px-4 xl:top-1/2 xl:-translate-y-1/2 xl:px-0'>
          <h1 className='mb-4 max-w-4xl text-2xl font-extrabold leading-none text-white sm:text-3xl lg:text-4xl'>
            {post.title}
          </h1>
          <p className='text-lg font-normal text-gray-300'>
            {post.title2 ?? null}
          </p>
        </div>
      </header>

      <div className='relative z-20 -m-36 mx-4 flex max-w-screen-xl justify-between rounded-xl p-6 backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] xl:-m-32 xl:mx-auto xl:p-9 '>
        <article className='format w-full max-w-none format-invert sm:format-base lg:format-lg xl:w-[828px]'>
          <div className='flex flex-col justify-between lg:flex-row lg:items-center'>
            <div className='mb-2 flex items-center space-x-3 text-base text-white lg:mb-0'>
              <span>
                By{' '}
                <a
                  href='#'
                  className='font-semibold no-underline hover:underline text-white'
                >
                  Sanova Web Solutions Team
                </a>
              </span>
              <span className='h-2 w-2 rounded-full bg-gray-400'></span>
              <span>
                <time
                  className='font-normal text-white'
                  dateTime={post.createdAt?.toDate().toISOString()}
                >
                  {formatDate(post.createdAt)}
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
          <div className='w-full grow space-y-5 min-h-[320px] pt-6 prose prose-invert max-w-none text-white'>
            <ReactMarkdown>{post.content}</ReactMarkdown>
            <CTA
              cta='CONTACT US TODAY'
              description=''
              title='Ready to take your online presence to the next level?'
            />
          </div>
        </article>

        <Sidebar />
      </div>

      {/* <NewsletterSignup /> */}
    </main>
  );
}
