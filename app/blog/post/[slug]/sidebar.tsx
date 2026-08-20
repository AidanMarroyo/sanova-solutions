import { BookOpen, Sparkles } from 'lucide-react';

import { RelatedArticles } from './related-articles';

export function Sidebar() {
  return (
    <aside
      className='hidden xl:block'
      aria-labelledby='sidebar-label'
    >
      <h2 id='sidebar-label' className='sr-only'>
        Article sidebar
      </h2>

      <div className='space-y-5'>
        {/* Related articles */}
        <div className='overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025]'>
          <div className='border-b border-white/[0.07] px-5 py-5'>
            <div className='flex items-center gap-3'>
              <div className='flex size-9 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/[0.06] text-violet-300'>
                <BookOpen
                  className='size-4'
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300'>
                  Keep reading
                </p>

                <h3 className='mt-0.5 text-base font-semibold text-white'>
                  Related insights
                </h3>
              </div>
            </div>
          </div>

          <div className='p-5'>
            <RelatedArticles />
          </div>
        </div>

        {/* Brand note */}
        <div className='relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] p-5'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute -right-16 -top-16 size-36 rounded-full bg-violet-500/[0.08] blur-[60px]'
          />

          <div className='relative'>
            <div className='flex items-center gap-2 text-violet-300'>
              <Sparkles className='size-3.5' />

              <span className='text-[10px] font-semibold uppercase tracking-[0.16em]'>
                Sanova
              </span>
            </div>

            <p className='mt-4 text-sm font-medium leading-6 text-white'>
              Better websites start with better decisions.
            </p>

            <p className='mt-2 text-xs leading-6 text-white/35'>
              We share practical insights on web design, SEO, performance, and
              digital growth for businesses building online.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}