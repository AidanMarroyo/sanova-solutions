'use client';
import { BlogPostSchema, BlogPostValues } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { submitBlogPost } from './action';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useContext, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { storage } from '@/lib/firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { AuthContext } from '@/lib/context';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import SignOut from '@/components/SignOut';

export default function NewPostForm() {
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const form = useForm<BlogPostValues>({
    resolver: zodResolver(BlogPostSchema),
    defaultValues: {
      title: '',
      title2: '',
      description: '',
      content: '',
      createdAt: new Date().toISOString(),
    },
  });

  const { user } = useContext(AuthContext);
  if (!user) {
    return <div>Sign in to create a post</div>;
  }
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = form;

  async function onSubmit(data: z.infer<typeof BlogPostSchema>) {
    if (uploadedFile) {
      data.photo = uploadedFile;
    }

    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));

    const result = await submitBlogPost(formData);
    if (result && result.success) {
      form.reset();
      console.log('Post submitted!');
    }
  }

  const handleFileUpload = async (file: File | null) => {
    if (!file) return;

    const storageRef = ref(storage, `pictures/${title}-${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);

    setUploadedFile(downloadURL);
  };

  return (
    <MaxWidthWrapper>
      <SignOut />
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='mx-auto mb-16 grid max-w-screen-md grid-cols-1 gap-8 rounded-lg border   p-6 shadow-sm border-gray-700 backdrop-blur-[16px] backdrop-saturate-180 bg-[rgba(17,25,40,0.75)] sm:grid-cols-2 lg:mb-28'
        >
          <div className='grid grid-cols-1 gap-2'>
            <FormField
              control={control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='John'
                      {...field}
                      onChange={(e) => {
                        field.onChange(e); // Sync with react-hook-form
                        setTitle(e.target.value); // Update local state
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='grid grid-cols-1 gap-2'>
            <FormField
              control={control}
              name='content'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Enter markdown here'
                      {...field} // Connect react-hook-form
                      onChange={(e) => {
                        field.onChange(e); // Sync with react-hook-form
                        setContent(e.target.value); // Update local state
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='grid grid-cols-1 gap-2'>
            <FormField
              control={control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='description'
                      {...field} // Connect react-hook-form
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className='grid grid-cols-1 gap-2'>
            <FormField
              control={control}
              name='photo'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cover Image</FormLabel>
                  <FormControl>
                    <Input
                      type='file'
                      {...field}
                      onChange={(e) => {
                        field.onChange(e); // Sync with react-hook-form
                        handleFileUpload(
                          e.target.files ? e.target.files[0] : null
                        );
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='inline-flex w-full sm:w-fit [&>span]:px-5 [&>span]:py-3'
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </form>
      </Form>
      <div className='flex justify-center'>
        <div key={content} className='prose prose-invert '>
          <ReactMarkdown>
            {`# ${title}\n

            ${content}
              `}
          </ReactMarkdown>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
