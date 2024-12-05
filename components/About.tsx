import { MaxWidthWrapper } from './ MaxWidthWrapper';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface AboutProps {
  title: string;
  description: string;
  features: Feature[];
}

const About = ({ title, description, features }: AboutProps): JSX.Element => {
  return (
    <MaxWidthWrapper>
      <div className='mx-auto max-w-3xl text-center'>
        <h2 className='text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl'>
          {title}
        </h2>
        <p className='mt-4 text-base font-normal sm:text-xl'>{description}</p>
      </div>
      <div className='mt-8 p-4 sm:p-12 lg:mt-16'>
        <div className='grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2'>
          {features.map((feature) => (
            <div
              key={feature.id}
              className='flex flex-col items-start gap-4 sm:flex-row sm:gap-5'
            >
              <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-full backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] lg:h-24 lg:w-24'>
                <feature.icon className='h-10 w-10' />
              </div>
              <div>
                <h3 className='text-xl font-bold sm:text-2xl'>
                  {feature.title}
                </h3>
                <p className='mt-2 text-base font-normal sm:text-lg text-gray-400'>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default About;
