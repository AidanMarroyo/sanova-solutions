import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';

export function Intro() {
  return (
    <MaxWidthWrapper>
      <div className='text-center'>
        <div className='mt-4 flex flex-col items-center justify-center gap-4 sm:mt-5 sm:flex-row sm:gap-8'>
          <h1 className='text-7xl font-bold'>
            Building Success, One Business at a Time
          </h1>
        </div>
      </div>
      <div className='mx-auto mt-8 max-w-5xl lg:mt-16'>
        <img
          alt=''
          src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/computer-dark.png'
          className='w-full rounded-lg shadow-lg'
        />
      </div>
      <div className='mt-8 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-16'>
        <div>
          <div>
            <h3 className='text-2xl font-extrabold'>Your Partner in Growth</h3>
            <p className='mt-2 text-lg font-normal text-gray-100'>
              Sanova Solutions began with a mission: to empower entrepreneurs
              and businesses to achieve their full potential. With a passion for
              innovation and a commitment to excellence, we’ve helped clients
              turn ideas into thriving ventures. Based in Dundas, Ontario, we
              proudly serve businesses locally and globally.
            </p>
          </div>
          {/* <ul className='mt-8 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2'>
            <li className='flex items-center gap-2.5'>
              <GreenCheckIconSVG />
              <span className='text-base font-normal text-gray-100'>
                A/B Testing
              </span>
            </li>
            <li className='flex items-center gap-2.5'>
              <GreenCheckIconSVG />
              <span className='text-base font-normal text-gray-100'>
                Craft CMS development
              </span>
            </li>
            <li className='flex items-center gap-2.5'>
              <GreenCheckIconSVG />
              <span className='text-base font-normal text-gray-100'>
                UX/UI design
              </span>
            </li>
            <li className='flex items-center gap-2.5'>
              <GreenCheckIconSVG />
              <span className='text-base font-normal text-gray-100'>
                Copywriting
              </span>
            </li>
            <li className='flex items-center gap-2.5'>
              <GreenCheckIconSVG />
              <span className='text-base font-normal text-gray-100'>
                Brand development
              </span>
            </li>
            <li className='flex items-center gap-2.5'>
              <GreenCheckIconSVG />
              <span className='text-base font-normal text-gray-100'>
                Graphic design
              </span>
            </li>
            <li className='flex items-center gap-2.5'>
              <GreenCheckIconSVG />
              <span className='text-base font-normal text-gray-100'>
                Front-end development
              </span>
            </li>
            <li className='flex items-center gap-2.5'>
              <GreenCheckIconSVG />
              <span className='text-base font-normal text-gray-100'>SEO</span>
            </li>
          </ul> */}
        </div>
        <div className='space-y-8'>
          <div>
            <h3 className='text-2xl font-extrabold '>
              Driving Innovation, Inspiring Success
            </h3>
            <p className='mt-2 text-lg font-normal text-gray-100'>
              <span className='font-bold text-white'> Mission:</span> To deliver
              tailored solutions that help businesses start, scale, and excel.
            </p>

            <p className='font-bold text-white mt-2'>Values:</p>

            <ul className='mt-2 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2'>
              <li className='flex items-center gap-2.5'>
                <GreenCheckIconSVG />
                <p className='text-base text-sm font-normal text-gray-100'>
                  <span className='text-white font-semibold'>Innovation:</span>{' '}
                  We craft custom solutions that stand out.
                </p>
              </li>
              <li className='flex items-center gap-2.5'>
                <GreenCheckIconSVG />
                <p className='text-base text-sm font-normal text-gray-100'>
                  <span className='text-white font-semibold'>
                    Collaboration:
                  </span>{' '}
                  Your goals become our goals.
                </p>
              </li>
              <li className='flex items-center gap-2.5'>
                <GreenCheckIconSVG />
                <p className='text-base text-sm font-normal text-gray-100'>
                  <span className='text-white font-semibold'>Excellence</span>{' '}
                  We strive for quality in every detail.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

const GreenCheckIconSVG = () => (
  <svg
    className='h-5 w-5 text-green-500'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='currentColor'
  >
    <path
      fillRule='evenodd'
      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
      clipRule='evenodd'
    />
  </svg>
);
