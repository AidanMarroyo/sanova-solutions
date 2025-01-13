import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { firestore } from '@/lib/firebase';
import { formatDate } from '@/lib/utils';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';

export default async function Blog() {
  const ref = collection(firestore, 'posts');
  const postsQuery = query(ref, limit(3));

  const querySnapshot = await getDocs(postsQuery);
  const posts = querySnapshot.docs.map((doc) => doc.data().data);
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
