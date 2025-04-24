import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import WordRotate from '@/components/ui/word-rotate';
import Link from 'next/link';

export default function TestHero() {
  return (
    <section className='bg-muted dark:bg-background'>
      <div className='grid py-8 px-4 mx-auto max-w-screen-2xl lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12'>
        {/* Left Text Block */}
        <div className='place-self-center mr-auto mb-10 lg:col-span-7 xl:col-span-8 xl:mb-0'>
          <p className='mb-3 max-w-2xl text-white md:text-lg lg:mb-4 lg:text-xl'>
            CUSTOM WEB SOLUTIONS, CUSTOM CODED
          </p>
          <h1 className='max-w-2xl text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-foreground'>
            WEB SOLUTIONS EMPOWERING BUSINESSES TO
          </h1>
          <WordRotate
            words={['SCALE', 'SUCCEED']}
            className='mb-4 max-w-2xl text-4xl font-extrabold  tracking-tight text-white md:text-6xl '
          />
          <p className='mb-6 max-w-2xl font-light text-muted-foreground lg:mb-8 md:text-lg lg:text-xl'>
            100% hand-coded websites, web applications, and custom web
            solutions. No page builders, No Wordpress, No bloatware.
          </p>
          <div className='flex w-fit items-center gap-5'>
            <Link href='/contact-us'>
              <Button className='[&>span]:items-center p' size='lg'>
                GET STARTED
                <svg
                  className='-mr-1 ml-2 h-5 w-5'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </Button>
            </Link>
            <Link href='/about-us'>
              <Button variant='secondary' size='lg'>
                SERVICES
              </Button>
            </Link>
          </div>

          {/* Stats */}

          <ul className='hidden xl:flex justify-between max-w-6xl mx-auto mt-14 pt-12 border-t border-border text-foreground gap-8'>
            {[
              { label1: 'Projects', label2: 'Launched', stat: '12+' },
              { label1: 'Client', label2: 'Satisfaction Rate', stat: '100%' },
              { label1: 'Avg. Site', label2: 'Load Time', stat: '1.2s' },
            ].map((item, idx) => (
              <li key={idx} className='flex items-start space-x-4'>
                <span className='text-4xl font-extrabold lg:text-5xl'>
                  {item.stat}
                </span>
                <div className='text-xl text-muted-foreground leading-tight'>
                  <div>{item.label1}</div>
                  <div>{item.label2}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Signup Form */}
        <Card className='w-full lg:w-auto lg:col-span-5 xl:col-span-4 p-6 sm:p-6 lg:p-8 shadow-md bg-background'>
          <CardContent className='flex flex-col'>
            <h2 className='text-xl font-semibold text-foreground mb-4'>
              Book a Free Discovery Call
            </h2>
            <p className='text-sm text-muted-foreground mb-4'>
              No pressure. Let’s talk about what your business needs online.
            </p>
            <div className='w-full rounded-md overflow-hidden border border-border shadow-sm'>
              <iframe
                src='https://calendly.com/sanovasoftwareinc/30min?back=1'
                width='100%'
                height='640'
                className='w-full'
                frameBorder='0'
                scrolling='no'
                allowTransparency
                title='Book a call with Sanova Software'
              ></iframe>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
