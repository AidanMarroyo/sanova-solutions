import { CommentSection } from './comment-section';
import { NewsletterSignup } from './newsletter-signup';
import { RelatedArticles } from './related-articles';
import { Sidebar } from './sidebar';

export default function BlogPost() {
  return (
    <main className='lg:pb-24'>
      <header className="relative h-[460px] w-full bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/background.png')] bg-cover bg-center bg-no-repeat bg-blend-darken xl:h-[537px]">
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='absolute left-1/2 top-20 mx-auto w-full max-w-screen-xl -translate-x-1/2 px-4 xl:top-1/2 xl:-translate-y-1/2 xl:px-0'>
          <span className='mb-4 block text-gray-300'>
            Published in{' '}
            <a href='#' className='font-semibold text-white hover:underline'>
              World News
            </a>
          </span>
          <h1 className='mb-4 max-w-4xl text-2xl font-extrabold leading-none text-white sm:text-3xl lg:text-4xl'>
            Flowbite Blocks Tutorial - Learn how to get started with custom
            sections using the Flowbite Blocks
          </h1>
          <p className='text-lg font-normal text-gray-300'>
            Before going digital, you might scribbling down some ideas in a
            sketchbook.
          </p>
        </div>
      </header>

      <div className='relative z-20 -m-36 mx-4 flex max-w-screen-xl justify-between rounded bg-white p-6 dark:bg-gray-800 xl:-m-32 xl:mx-auto xl:p-9'>
        <article className='format format-sm format-blue w-full max-w-none dark:format-invert sm:format-base lg:format-lg xl:w-[828px]'>
          <div className='flex flex-col justify-between lg:flex-row lg:items-center'>
            <div className='mb-2 flex items-center space-x-3 text-base text-gray-500 dark:text-gray-400 lg:mb-0'>
              <span>
                By{' '}
                <a
                  href='#'
                  className='font-semibold text-gray-900 no-underline hover:underline dark:text-white'
                >
                  Jese Leos
                </a>
              </span>
              <span className='h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-400'></span>
              <span>
                <time
                  className='font-normal text-gray-500 dark:text-gray-400'
                  dateTime='2022-08-03'
                >
                  August 3, 2022, 2:20am EDT
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
          {/* ... (implement article content) */}

          <CommentSection />
        </article>

        <Sidebar />
      </div>

      <RelatedArticles />
      <NewsletterSignup />
    </main>
  );
}
