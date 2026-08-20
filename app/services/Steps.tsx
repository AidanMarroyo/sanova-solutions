<<<<<<< HEAD
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
=======
import { MaxWidthWrapper } from "@/components/ MaxWidthWrapper";

>>>>>>> main

export function Steps({
  heading,
  content,
}: {
  heading: string;
<<<<<<< HEAD
  content: { id: number; contentTitle: string; content: string }[];
}) {
  return (
    <MaxWidthWrapper>
      <div className='text-center'>
        <h2 className='mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl'>
          {heading}
        </h2>
      </div>
      <div
        className='mx-auto mt-8 max-w-3xl space-y-5 rounded-lg border 
       p-5 border-gray-700 backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)]'
      >
        {content.map((item) => (
          <div key={item.id} className='border-b pb-5 border-gray-700'>
            <h3 className='text-lg font-semibold text-white'>
              {item.contentTitle}
            </h3>
            <p className='mt-1 text-base font-normal text-white'>
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
=======
  content: {
    id: number;
    contentTitle: string;
    content: string;
  }[];
}) {
  return (
    <section className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
      {/* Atmosphere */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute left-[-16rem] top-[20%] h-[32rem] w-[32rem] rounded-full bg-violet-600/[0.05] blur-[150px]' />

        <div className='absolute right-[-14rem] bottom-[5%] h-[28rem] w-[28rem] rounded-full bg-blue-600/[0.04] blur-[150px]' />

        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
      </div>

      <MaxWidthWrapper className='relative'>
        {/* Heading */}
        <div className='mx-auto max-w-3xl text-center'>
          <div className='mb-5 flex items-center justify-center gap-3'>
            <span className='h-px w-8 bg-violet-400' />

            <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
              Why it matters
            </span>

            <span className='h-px w-8 bg-violet-400' />
          </div>

          <h2 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl'>
            {heading}
          </h2>
        </div>

        {/* Steps */}
        <div className='mx-auto mt-14 max-w-5xl lg:mt-20'>
          <div className='relative'>
            {/* Vertical connector */}
            <div
              aria-hidden='true'
              className='absolute bottom-8 left-7 top-8 hidden w-px bg-gradient-to-b from-violet-400/30 via-white/10 to-transparent sm:block'
            />

            <div className='space-y-4'>
              {content.map((item, index) => (
                <article
                  key={item.id}
                  className='group relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:border-white/[0.14] hover:bg-white/[0.04] sm:pl-20 sm:pr-8 sm:py-8'
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden='true'
                    className='pointer-events-none absolute -right-20 -top-20 size-44 rounded-full bg-violet-500/[0.06] blur-[70px] opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                  />

                  {/* Number */}
                  <div className='relative mb-5 flex sm:absolute sm:left-5 sm:top-8 sm:mb-0'>
                    <div className='flex size-11 items-center justify-center rounded-xl border border-violet-400/15 bg-[#080808] text-xs font-semibold tracking-[0.14em] text-violet-300 shadow-lg shadow-black/30'>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className='relative'>
                    <h3 className='text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl'>
                      {item.contentTitle.replace(/^\d+\.\s*/, '')}
                    </h3>

                    <p className='mt-3 max-w-4xl text-sm leading-7 text-white/40 sm:text-base'>
                      {item.content}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
>>>>>>> main
