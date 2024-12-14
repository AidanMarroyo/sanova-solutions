import Link from 'next/link';

export default function NotFound() {
  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <img
            alt=''
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg'
            className='mx-auto mb-4'
          />
          <h1 className='mb-4 text-2xl font-extrabold text-primary-500'>
            404 Not Found
          </h1>
          <p className='mb-10 text-3xl font-bold tracking-tight text-white md:text-4xl'>
            Whoops! That page doesn’t exist.
          </p>
          <p className='mb-4 text-white'>
            Here are some helpful links instead:
          </p>
          <ul className='flex items-center justify-center space-x-4 text-white'>
            <li>
              <Link href='/' className='underline hover:hover:text-white'>
                Home
              </Link>
            </li>

            <li>
              <Link
                href='/contact-us'
                className='underline hover:hover:text-white'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
