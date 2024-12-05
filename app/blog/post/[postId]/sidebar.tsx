import { Button } from '@/components/ui/button';

export function Sidebar() {
  return (
    <aside className='hidden xl:block' aria-labelledby='sidebar-label'>
      <div className='sticky top-6 xl:w-[336px]'>
        <h3 id='sidebar-label' className='sr-only'>
          Sidebar
        </h3>
        <div className='mb-8'>
          <h4 className='mb-2 text-sm font-bold uppercase text-white'>
            Flowbite News morning headlines
          </h4>
          <p className='mb-4 text-sm text-gray-400'>
            Get all the stories you need-to-know from the most powerful name in
            news delivered first thing every morning to your inbox
          </p>
          <Button className='w-full'>Subscribe</Button>
        </div>
        <div className='mb-12'>
          <h4 className='mb-4 text-sm font-bold uppercase text-white'>
            Latest news
          </h4>
          {/* Add latest news items here */}
        </div>
        <div>{/* Add advertisement placeholder here */}</div>
      </div>
    </aside>
  );
}
