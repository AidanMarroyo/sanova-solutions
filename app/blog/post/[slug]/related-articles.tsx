import { firestore } from '@/lib/firebase';
import { toSlug } from '@/lib/utils';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';

export async function RelatedArticles() {
  const ref = collection(firestore, 'posts');
  const postsQuery = query(ref, limit(3));

  const querySnapshot = await getDocs(postsQuery);
  const posts = querySnapshot.docs.map((doc) => doc.data().data);

  if (posts.length === 0) {
    console.log('No related articles found.');
    return (
      <aside aria-label='Related articles' className='lg:py-24'>
        <div className='mx-auto max-w-screen-xl px-4'>
          <h2 className='mb-6 text-2xl font-bold text-white lg:mb-8'>
            Latest articles
          </h2>
          <p className='text-white'>No related articles found.</p>
        </div>
      </aside>
    );
  }

  return (
    <aside aria-label='Related articles'>
      <div className='mx-auto max-w-screen-xl px-4'>
        <h2 className='mb-6 text-2xl font-bold text-white lg:mb-8'>
          Latest articles
        </h2>
        <div className='flex  flex-col gap-6 lg:gap-12'>
          {posts.map((article) => (
            <article key={article.title} className='flex flex-col'>
              <Link
                href={`/blog/post/${toSlug(article.title)}`}
                className='mb-2 xl:mb-0'
              >
                <Image
                  src={article.photo}
                  alt=''
                  width={184}
                  height={140}
                  className='mr-5 max-w-sm'
                />
              </Link>
              <div className='flex flex-col justify-center'>
                <h2 className='mb-2 text-xl font-bold leading-tight text-white'>
                  <a href='#'>{article.title}</a>
                </h2>
                <p className='mb-4 max-w-sm text-white'>
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}
