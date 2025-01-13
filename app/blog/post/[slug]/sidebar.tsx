// import { Button } from '@/components/ui/button';
import { RelatedArticles } from './related-articles';

export function Sidebar() {
  return (
    <aside className='hidden xl:block' aria-labelledby='sidebar-label'>
      <div className='sticky top-6 xl:w-[336px]'>
        <h3 id='sidebar-label' className='sr-only'>
          Sidebar
        </h3>
        {/* <div>
          <h4 className='mb-2 text-sm font-bold uppercase text-white'>
            Flowbite News morning headlines
          </h4>
          <p className='mb-4 text-sm text-white'>
            Get all the stories you need-to-know from the most powerful name in
            news delivered first thing every morning to your inbox
          </p>
          <Button className='w-full'>Subscribe</Button>
        </div> */}
        <div>
          <RelatedArticles />
        </div>
        <div>{/* Add advertisement placeholder here */}</div>
      </div>
    </aside>
  );
}
