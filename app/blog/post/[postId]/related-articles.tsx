import Image from 'next/image';

export function RelatedArticles() {
  const articles = [
    {
      title: 'Our first office',
      image:
        'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png',
      excerpt:
        'Over the past year, Volosoft has undergone many changes! After months of preparation.',
      readTime: '2 minutes',
    },
    // Add more related articles
  ];

  return (
    <aside aria-label='Related articles' className=' lg:py-24'>
      <div className='mx-auto max-w-screen-xl px-4'>
        <h2 className='mb-6 text-2xl font-bold text-white lg:mb-8'>
          Related articles
        </h2>
        <div className='grid gap-6 md:grid-cols-2 lg:gap-12'>
          {articles.map((article, index) => (
            <article key={index} className='flex flex-col xl:flex-row'>
              <a href='#' className='mb-2 xl:mb-0'>
                <Image
                  src={article.image}
                  alt=''
                  width={384}
                  height={240}
                  className='mr-5 max-w-sm'
                />
              </a>
              <div className='flex flex-col justify-center'>
                <h2 className='mb-2 text-xl font-bold leading-tight text-white'>
                  <a href='#'>{article.title}</a>
                </h2>
                <p className='mb-4 max-w-sm text-gray-100'>{article.excerpt}</p>
                <a
                  href='#'
                  className='inline-flex items-center font-medium  hover:underline text-primary-500'
                >
                  Read in {article.readTime}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}
