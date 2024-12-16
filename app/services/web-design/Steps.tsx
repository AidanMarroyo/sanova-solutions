import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';

export function Steps() {
  return (
    <MaxWidthWrapper>
      <div className='text-center'>
        <h2 className='mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl'>
          WHY OUR APPROACH MAKES A DIFFERENCE
        </h2>
      </div>
      <div
        className='mx-auto mt-8 max-w-3xl space-y-5 rounded-lg border 
       p-5 border-gray-700 backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)]'
      >
        <div className='border-b pb-5 border-gray-700'>
          <h3 className='text-lg font-semibold text-white'>
            1. Faster Websites for Better Results
          </h3>
          <p className='mt-1 text-base font-normal text-white'>
            A slow-loading website can cost you leads and conversions. In
            today’s competitive landscape, businesses need websites that engage
            users instantly. Studies show that if your site takes longer than
            three seconds to load, nearly half of visitors will leave. Our
            custom-coded sites load in under one second, ensuring you retain
            traffic and convert visitors into customers.
          </p>
        </div>
        <div className='border-b border-gray-200 pb-5 dark:border-gray-700'>
          <h3 className='text-lg font-semibold text-white'>
            2. Enhanced Ad Performance
          </h3>
          <p className='mt-1 text-base font-normal text-white'>
            Faster websites also make your Google Ads campaigns more effective.
            Sites with faster load times improve ad quality scores, leading to
            lower cost-per-click (CPC) rates and better ROI on your ad spend.
          </p>
        </div>
        <div className='border-b border-gray-200 pb-5 dark:border-gray-700'>
          <h3 className='text-lg font-semibold text-white'>
            3. Better Search Engine Rankings
          </h3>
          <p className='mt-1 text-base font-normal text-white'>
            Google rewards fast websites with higher rankings. A combination of
            superior load times and an optimized user experience boosts your
            visibility in search results. Plus, our sites are designed to excel
            in Google’s Core Web Vitals, helping you gain an edge over
            competitors.
          </p>
        </div>
        <div className='border-b border-gray-200 pb-5 dark:border-gray-700'>
          <h3 className='text-lg font-semibold text-white'>
            4. Improved Google Business Profile Visibility
          </h3>
          <p className='mt-1 text-base font-normal text-white'>
            A high-performing website supports your Google Business Profile by
            contributing to better map rankings and local visibility. When
            paired with glowing reviews, optimized images, and a complete
            profile, your online presence becomes a powerful lead-generation
            tool.
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
