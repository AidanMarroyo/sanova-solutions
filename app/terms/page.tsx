import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { Terms } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Sanova Solutions',
  description:
    "Review the terms and conditions governing the use of Sanova Solutions' services. Understand your rights and responsibilities when working with us.",
};
export default function TermsPage() {
  return (
    <MaxWidthWrapper className='antialiased'>
      <div className='flex justify-between '>
        <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-invert'>
          <header className='mb-4 lg:mb-6 not-format'>
            <h1 className='text-center mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl text-white'>
              Terms of Service
            </h1>
          </header>
          {Terms.map((term, index) => (
            <div key={index}>
              <h1 className='text-3xl font-semibold py-4'>{term.title}</h1>

              <p className='lead my-4'>{term.description}</p>
            </div>
          ))}
        </article>
      </div>
    </MaxWidthWrapper>
  );
}
