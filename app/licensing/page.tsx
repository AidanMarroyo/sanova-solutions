import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
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
  title: 'Licensing Information | Sanova Solutions',
  description:
    'Explore the licensing details for the software and services provided by Sanova Solutions. Learn about the terms for use, distribution, and intellectual property.',
};

export default function LicensingTerms() {
  return (
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
