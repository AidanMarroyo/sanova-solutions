import { privacyContent } from '@/lib/constants';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sanova Web Solutions',
  description:
    'Read about how Sanova Web Solutions protects your data and respects your privacy when using our services.',
};

const page = () => {
  return (
    <section className='pt-8 pb-16 lg:pt-16 lg:pb-24  antialiased'>
      <div className='flex justify-between px-4 mx-auto max-w-screen-xl '>
        <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-invert'>
          <header className='mb-4 lg:mb-6 not-format'>
            <h1 className='text-center mb-4 text-3xl font-extrabold leading-tight  lg:mb-6 lg:text-4xl text-white'>
              {privacyContent.title}
            </h1>
          </header>

          <p className='my-4 text-lg'>{privacyContent.termsContent1}</p>

          <section className='space-y-6'>
            <h2 className='text-2xl font-semibold'>
              {privacyContent.termsTitle2}
            </h2>
            <p className='my-4'>{privacyContent.termsContent2}</p>

            <h2 className='text-2xl font-semibold'>
              {privacyContent.termsTitle3}
            </h2>
            <p className='my-4'>{privacyContent.termsContent3}</p>

            <h2 className='text-2xl font-semibold'>
              {privacyContent.termsTitle4}
            </h2>
            <p className='my-4'>{privacyContent.termsContent4}</p>

            <ul className='list-disc pl-6 space-y-2'>
              <li>
                <strong>{privacyContent.list1}</strong>
              </li>
              <li>
                <strong>{privacyContent.list2}</strong>
              </li>
            </ul>

            <h2 className='text-2xl font-semibold'>
              {privacyContent.termsTitle5}
            </h2>
            <p className='my-4'>{privacyContent.termsContent5}</p>
            <p className='my-4'>{privacyContent.termsContent6}</p>
            <p className='my-4'>{privacyContent.termsContent7}</p>
            <p className='my-4'>{privacyContent.termsContent8}</p>

            <h2 className='text-2xl font-semibold'>
              {privacyContent.termsTitle9}
            </h2>
            <p className='my-4'>{privacyContent.termsContent9}</p>
            <p className='my-4'>{privacyContent.termsContent10}</p>
            <p className='my-4'>{privacyContent.termsContent11}</p>

            <h2 className='text-2xl font-semibold'>
              {privacyContent.termsTitle12}
            </h2>
            <p className='my-4'>{privacyContent.termsContent12}</p>

            <h2 className='text-2xl font-semibold'>
              {privacyContent.termsTitle13}
            </h2>
            <p className='my-4'>{privacyContent.termsContent13}</p>
            <p className='my-4'>{privacyContent.termsContent14}</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                <strong>{privacyContent.list3}</strong>
              </li>
              <li>
                <strong>{privacyContent.list4}</strong>
              </li>
              <li>
                <strong>{privacyContent.list5}</strong>
              </li>
            </ul>
            <p className='my-4'>{privacyContent.termsContent15}</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                <strong>{privacyContent.list6}</strong>
              </li>
            </ul>
            <p className='my-4'>{privacyContent.termsContent16}</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                <strong>
                  {privacyContent.list7}
                  <Link href='/support'>
                    <span className='text-blue-500 underline'>here</span>
                  </Link>
                </strong>
              </li>
            </ul>

            <h2 className='text-2xl font-semibold'>
              {privacyContent.termsTitle17}
            </h2>
            <p className='my-4'>{privacyContent.termsContent17}</p>
            <p className='my-4'>{privacyContent.termsContent18}</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                <strong>{privacyContent.list8}</strong>
              </li>
            </ul>
            <p className='my-4'>{privacyContent.termsContent19}</p>

            <h2 className='text-2xl font-semibold'>
              {privacyContent.termsTitle20}
            </h2>
            <p className='my-4'>{privacyContent.termsContent20}</p>
            <p className='my-4'>{privacyContent.termsContent21}</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                <strong>{privacyContent.list9}</strong>
              </li>
              <li>
                <strong>{privacyContent.list10}</strong>
              </li>
            </ul>
            <p className='my-4'>{privacyContent.termsContent22}</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                <strong>{privacyContent.list11}</strong>
              </li>
              <li>
                <strong>{privacyContent.list12}</strong>
              </li>
              <li>
                <strong>{privacyContent.list13}</strong>
              </li>
              <li>
                <strong>{privacyContent.list14}</strong>
              </li>
              <li>
                <strong>{privacyContent.list15}</strong>
              </li>
              <li>
                <strong>{privacyContent.list16}</strong>
              </li>
            </ul>
            <p className='my-4'>{privacyContent.termsContent23}</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li>
                <strong>{privacyContent.list17}</strong>
              </li>
            </ul>
            <p className='my-4'>{privacyContent.termsContent24}</p>
          </section>
        </article>
      </div>
    </section>
  );
};

export default page;
