import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';

export function Steps({
  heading,
  content,
}: {
  heading: string;
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
