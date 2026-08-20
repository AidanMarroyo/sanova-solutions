import Link from 'next/link';
<<<<<<< HEAD
import { MaxWidthWrapper } from './ MaxWidthWrapper';
import { Button } from './ui/button';
=======
import { ArrowRight, Sparkles } from 'lucide-react';
import { MaxWidthWrapper } from './ MaxWidthWrapper';


>>>>>>> main

export function CTA({
  title,
  description,
  cta,
}: {
  title: string;
  description: string;
  cta: string;
}) {
  return (
<<<<<<< HEAD
    <MaxWidthWrapper>
      <div className='mt-8 mx-auto flex max-w-screen-sm flex-col items-center text-center mb-20 lg:mb-16'>
        <h2 className='mb-4 text-4xl font-extrabold leading-tight tracking-tight'>
          {title.toLocaleUpperCase()}
        </h2>
        <p className='mb-6 md:text-lg'>{description ? description : null}</p>
        <Link href='/contact-us'>
          <Button type='button' color='info' className='w-fit'>
            {cta.toUpperCase()}
          </Button>
        </Link>
      </div>
    </MaxWidthWrapper>
  );
}
=======
    <section className='relative overflow-hidden py-20 sm:py-24 lg:py-28'>
      <MaxWidthWrapper>
        <div className='relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] px-6 py-12 text-center shadow-2xl shadow-black/20 sm:px-10 sm:py-16 lg:px-16 lg:py-20'>
          {/* atmosphere */}
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-0'
          >
            <div className='absolute left-1/2 top-[-16rem] h-[34rem] w-[42rem] -translate-x-1/2 rounded-full bg-violet-600/[0.12] blur-[130px]' />

            <div className='absolute bottom-[-14rem] right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-blue-600/[0.08] blur-[130px]' />

            <div className='absolute inset-x-20 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent' />
          </div>

          <div className='relative mx-auto max-w-3xl'>
            {/* eyebrow */}
            <div className='mb-6 flex items-center justify-center gap-2'>
              <Sparkles className='size-3.5 text-violet-300' />

              <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                Let&apos;s build something better
              </span>
            </div>

            <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl'>
              {title}
            </h2>

            {description && (
              <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
                {description}
              </p>
            )}

            <div className='mt-9'>
              <Link
                href='/contact-us'
                className='group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-2xl hover:shadow-violet-500/10'
              >
                {cta}

                <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
>>>>>>> main
