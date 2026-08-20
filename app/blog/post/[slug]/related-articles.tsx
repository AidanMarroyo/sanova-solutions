import { firestore } from '@/lib/firebase';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export async function RelatedArticles() {
  const ref = collection(firestore, 'posts');
  const postsQuery = query(ref, limit(3));

  const querySnapshot = await getDocs(postsQuery);
  const posts = querySnapshot.docs.map((doc) => doc.data().data);

  if (posts.length === 0) {
    return (
      <div className='rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-5 text-center'>
        <p className='text-sm font-medium text-white'>
          No related articles yet.
        </p>

        <p className='mt-1 text-xs leading-5 text-white/35'>
          Check back soon for more insights from Sanova.
        </p>
      </div>
    );
  }

  return (
    <div className='space-y-5'>
      {posts.map((article, index) => (
        <article
          key={article.slug ?? article.title}
          className='group'
        >
          <Link
            href={`/blog/post/${article.slug}`}
            className='block'
          >
            <div className='relative aspect-[16/9] overflow-hidden rounded-xl border border-white/[0.07]'>
              <Image
                fill
                src={article.photo}
                alt={article.title}
                className='object-cover transition-transform duration-500 group-hover:scale-[1.035]'
                sizes='336px'
              />

              <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent' />
            </div>

            <div className='pt-4'>
              <div className='mb-2 flex items-center justify-between gap-3'>
                <span className='text-[10px] font-semibold uppercase tracking-[0.14em] text-violet-300'>
                  Insight 0{index + 1}
                </span>

                <ArrowRight className='size-3.5 -translate-x-1 text-white/20 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-violet-300' />
              </div>

              <h3 className='text-sm font-semibold leading-6 text-white transition-colors group-hover:text-violet-200'>
                {article.title}
              </h3>

              <p className='mt-2 line-clamp-2 text-xs leading-5 text-white/35'>
                {article.description}
              </p>
            </div>
          </Link>

          {index !== posts.length - 1 && (
            <div className='mt-5 h-px bg-white/[0.07]' />
          )}
        </article>
      ))}
    </div>
  );
}