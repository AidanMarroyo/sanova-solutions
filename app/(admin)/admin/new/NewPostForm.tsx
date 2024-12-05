'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { BlogPostSchema, BlogPostValues } from '@/lib/validation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';

import { Label } from '@/components/ui/label';

import { draftToMarkdown } from 'markdown-draft-js';

import { Button } from '@/components/ui/button';
import RichTextEditor from '@/components/RichTextEditor';
import { Textarea } from '@/components/ui/textarea';
import { createBlogPosting } from './action';

export default function NewPostForm() {
  const form = useForm<BlogPostValues>({
    resolver: zodResolver(BlogPostSchema),
  });

  const { handleSubmit, setFocus } = form;

  async function onSubmit(values: BlogPostValues) {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    try {
      createBlogPosting(formData);
    } catch (error) {
      console.log(error);
      alert('Something went wrong, please try again');
    }
  }
  return (
    <main className='m-auto my-10 max-w-3xl space-y-10'>
      <div className='space-y-5 text-center'>
        <h1>Find your perfect developer</h1>
        <p className='text-muted-foreground'>
          Get your job posting seen by thousands of job seekers.
        </p>
      </div>
      <div className='space-y-6 rounded-lg border p-4'>
        <div>
          <h2 className='font-semibold'>Job Details</h2>
          <p className='text-muted-foreground'>
            Provide a job description and details
          </p>
        </div>
        <Form {...form}>
          <form
            className='space-y-4 '
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              control={control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input placeholder='e.g. Frontend Developer' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name='title2'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sub Heading</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Metatag Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name='content'
              render={({ field }) => (
                <FormItem>
                  <Label onClick={() => setFocus('content')}>Content</Label>
                  <FormControl>
                    <RichTextEditor
                      onChange={(draft) =>
                        field.onChange(draftToMarkdown(draft))
                      }
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </div>
    </main>
  );
}
