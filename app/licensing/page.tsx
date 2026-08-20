<<<<<<< HEAD
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
=======

>>>>>>> main
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
<<<<<<< HEAD
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { licensingTerms } from '@/lib/constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Licensing Information | Sanova Web Solutions',
  description:
    'Explore the licensing details for the software and services provided by Sanova Web Solutions. Learn about the terms for use, distribution, and intellectual property.',
=======
import { licensingTerms } from '@/lib/constants';
import { Metadata } from 'next';
import {
  FileKey2,
  Scale,
  ShieldCheck,
} from 'lucide-react';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';

export const metadata: Metadata = {
  title: 'Licensing Information',
  description:
    'Review licensing terms for software, websites, services, use rights, distribution, and intellectual property provided by Sanova Web Solutions.',

  alternates: {
    canonical: '/licensing',
  },
>>>>>>> main
};

export default function LicensingTerms() {
  return (
<<<<<<< HEAD
    <MaxWidthWrapper>
      <h1 className='text-3xl font-bold mb-6 py-8 text-center'>
        Licensing Terms
      </h1>
      <Accordion type='single' collapsible className='w-full'>
        {licensingTerms.map((term, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className='text-2xl font-semibold'>
              {term.section}
            </AccordionTrigger>
            <AccordionContent>
              {term.details.map((detail, detailIndex) => (
                <Card
                  key={detailIndex}
                  className='mb-4 border backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)]'
                >
                  <CardHeader>
                    <CardTitle>{detail.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{detail.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </MaxWidthWrapper>
  );
}
=======
    <main className='relative overflow-hidden py-20 sm:py-24 lg:py-32'>
      {/* Background atmosphere */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute left-1/2 top-[-16rem] h-[42rem] w-[50rem] -translate-x-1/2 rounded-full bg-violet-600/[0.07] blur-[160px]' />

        <div className='absolute right-[-16rem] bottom-[10%] h-[32rem] w-[32rem] rounded-full bg-blue-600/[0.04] blur-[150px]' />

        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
      </div>

      <MaxWidthWrapper className='relative'>
        {/* Header */}
        <div className='mx-auto max-w-4xl text-center'>
          <div className='mb-5 flex items-center justify-center gap-3'>
            <span className='h-px w-8 bg-violet-400' />

            <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
              Legal & licensing
            </span>

            <span className='h-px w-8 bg-violet-400' />
          </div>

          <h1 className='text-5xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl'>
            Licensing terms
          </h1>

          <p className='mx-auto mt-6 max-w-2xl text-base leading-8 text-white/45 sm:text-lg'>
            Review how Sanova Web Solutions handles software use, ownership,
            licensing rights, distribution, and intellectual property.
          </p>

          <div className='mt-8 flex flex-wrap items-center justify-center gap-3'>
            <LegalBadge
              icon={FileKey2}
              label='Usage rights'
            />

            <LegalBadge
              icon={Scale}
              label='Clear terms'
            />

            <LegalBadge
              icon={ShieldCheck}
              label='Protected IP'
            />
          </div>
        </div>

        {/* Licensing accordion */}
        <div className='mx-auto mt-16 max-w-5xl lg:mt-24'>
          <Accordion
            type='single'
            collapsible
            className='space-y-4'
          >
            {licensingTerms.map((term, index) => (
              <AccordionItem
                key={term.section}
                value={`item-${index}`}
                className='overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] px-0 transition-all duration-300 data-[state=open]:border-white/[0.14] data-[state=open]:bg-white/[0.04]'
              >
                <AccordionTrigger className='group px-6 py-6 text-left hover:no-underline sm:px-8 sm:py-7'>
                  <div className='flex items-center gap-4'>
                    <div className='flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-300 transition-colors group-hover:border-violet-400/20 group-hover:bg-violet-400/[0.07]'>
                      <FileKey2
                        className='size-[18px]'
                        strokeWidth={1.8}
                      />
                    </div>

                    <div>
                      <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-white/20'>
                        Section 0{index + 1}
                      </p>

                      <h2 className='mt-1 text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl'>
                        {term.section}
                      </h2>
                    </div>
                  </div>
                </AccordionTrigger>

                <AccordionContent className='px-6 pb-7 pt-0 sm:px-8 sm:pb-8'>
                  <div className='border-t border-white/[0.07] pt-6 sm:ml-[60px]'>
                    <div className='space-y-8'>
                      {term.details.map((detail, detailIndex) => (
                        <div
                          key={`${detail.title}-${detailIndex}`}
                          className='relative'
                        >
                          <h3 className='text-base font-semibold text-white sm:text-lg'>
                            {detail.title}
                          </h3>

                          <p className='mt-2 max-w-3xl text-sm leading-7 text-white/40 sm:text-base'>
                            {detail.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Legal note */}
        <div className='mx-auto mt-14 max-w-5xl rounded-[1.75rem] border border-white/[0.08] bg-white/[0.02] px-6 py-7 sm:px-8 lg:mt-16'>
          <div className='flex items-start gap-4'>
            <div className='flex size-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/[0.06] text-violet-300'>
              <Scale
                className='size-[18px]'
                strokeWidth={1.8}
              />
            </div>

            <div>
              <p className='text-sm font-medium text-white'>
                Questions about licensing?
              </p>

              <p className='mt-2 max-w-3xl text-sm leading-7 text-white/35'>
                If you are unsure how these terms apply to a specific website,
                software project, deliverable, or usage scenario, contact Sanova
                Web Solutions before using or distributing the applicable work.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}

function LegalBadge({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className='flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 text-xs text-white/40'>
      <Icon
        className='size-3.5 text-violet-300'
        strokeWidth={1.8}
      />

      {label}
    </div>
  );
}
>>>>>>> main
