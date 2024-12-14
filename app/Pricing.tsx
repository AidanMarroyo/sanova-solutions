import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Pricing() {
  return (
    <MaxWidthWrapper>
      <div className='mx-auto mb-8 max-w-screen-md text-center lg:mb-12'>
        <p className='mb-5 text-white sm:text-xl'>OUR PRICING</p>
        <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-white'>
          Pricing Plans For Every Budget
        </h2>
      </div>
      <div className='space-y-8 sm:gap-6 lg:grid lg:grid-cols-3 lg:space-y-0 xl:gap-10'>
        <div className='flex flex-col rounded-lg border  backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] p-6 text-center  shadow border-gray-600  text-white xl:p-8'>
          <h3 className='text-2xl font-semibold'>LUMP SUM</h3>
          <div className='my-6 flex justify-center flex-col items-center'>
            <span className='mr-2 text-5xl font-extrabold'>$2800</span>
            <span className='text-white'>+25/month for Hosting</span>
          </div>
          <ul className='mb-8 space-y-4 text-left'>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Design And Development</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>+$25/month Hosting</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>+$100 fee Per Page after 5</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>+$50/month Unlimited Edits Add-on</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>+$250 To Add A Blog</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-red-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
              <span>24/7 Support</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-red-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Lifetime Updates</span>
            </li>
          </ul>
          <Link href='/contact-us'>
            <Button>GET STARTED</Button>
          </Link>
        </div>

        <div className=' flex  flex-col rounded-lg border  p-6 text-center  shadow border-[#D4AF37] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] text-white xl:p-8'>
          <div className='mb-2'>
            <span className='rounded bg-[#D4AF37] px-3 py-1 text-sm text-black font-semibold'>
              MOST POPULAR
            </span>
          </div>
          <h3 className='text-2xl font-semibold'>MONTHLY</h3>
          <div className='my-4 flex items-baseline justify-center'>
            <span className='mr-2 text-5xl font-extrabold'>$200</span>
            <span className='text-white'>/month</span>
          </div>
          <ul className='mb-8 space-y-4 text-left'>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Design And Development</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Includes Hosting</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>$100 fee Per Page After 5</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>+$250 To Add A Blog</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Unlimited Edits</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>24/7 Support</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Lifetime Updates</span>
            </li>
          </ul>
          <Link href='/contact-us'>
            <Button>GET STARTED</Button>
          </Link>
        </div>
        <div className='flex flex-col rounded-lg border p-6 text-center  shadow border-gray-600 backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] text-white xl:p-8'>
          <h3 className='text-2xl font-semibold'>ECOMMERCE</h3>
          <div className='my-8 flex items-baseline justify-center'>
            <span className='mr-2 text-5xl font-extrabold'>$7k</span>
            <span className='text-white'>Starting</span>
          </div>
          <ul className='mb-8 space-y-4 text-left'>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Custom Wix Studio Store</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Configure Any and All Apps</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Integrated Shipping</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Wix Studio Tutorial Walkthrough</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-green-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
              <span>Fully Editable in Wix Studio CMS</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-red-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
              <span>24/7 Support</span>
            </li>
            <li className='flex items-center space-x-3'>
              <svg
                className='h-5 w-5 shrink-0 text-red-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
              <span>+$50/month Unlimited Edits</span>
            </li>
          </ul>
          <Link href='/contact-us'>
            <Button>GET STARTED</Button>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
