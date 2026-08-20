'use client';

import { useContext, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ReactMarkdown from 'react-markdown';
import {
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage';
import {
  Eye,
  ImageIcon,
  Loader2,
  Save,
  Sparkles,
  UploadCloud,
} from 'lucide-react';

import { BlogPostSchema, BlogPostValues } from '@/lib/validation';
import { storage } from '@/lib/firebase';
import { AuthContext } from '@/lib/context';


import SignOut from '@/components/SignOut';
import { Button } from '@/components/ui/button';
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

import { submitBlogPost } from './action';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';

export default function NewPostForm() {
  const authContext = useContext(AuthContext);

  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

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

  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { isSubmitting },
  } = form;

  const title = watch('title');
  const title2 = watch('title2');
  const description = watch('description');
  const content = watch('content');

  const readingTime = useMemo(() => {
    const words = content?.trim().split(/\s+/).filter(Boolean).length ?? 0;

    return Math.max(1, Math.ceil(words / 225));
  }, [content]);

  if (!authContext?.user) {
    return (
      <main className='flex min-h-[60vh] items-center justify-center px-4'>
        <div className='rounded-[1.5rem] border border-white/[0.08] bg-white/[0.025] px-8 py-10 text-center'>
          <p className='text-sm font-medium text-white'>
            Sign in to create a post.
          </p>
        </div>
      </main>
    );
  }

  async function onSubmit(data: z.infer<typeof BlogPostSchema>) {
    const payload = {
      ...data,
      photo: uploadedFile ?? data.photo,
    };

    const formData = new FormData();

    Object.entries(payload).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    const result = await submitBlogPost(formData);

    if (result?.success) {
      reset({
        title: '',
        title2: '',
        description: '',
        content: '',
        createdAt: new Date().toISOString(),
      });

      setUploadedFile(null);
    }
  }

  async function handleFileUpload(file: File | null) {
    if (!file) return;

    try {
      setIsUploading(true);

      const safeTitle =
        title
          ?.trim()
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '') || 'blog-post';

      const storageRef = ref(
        storage,
        `pictures/${safeTitle}-${Date.now()}-${file.name}`
      );

      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);

      setUploadedFile(downloadURL);
    } catch (error) {
      console.error('Image upload failed:', error);
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <main className='relative overflow-hidden py-16 sm:py-20 lg:py-24'>
      {/* Background */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
      >
        <div className='absolute left-1/3 top-[-12rem] h-[36rem] w-[36rem] rounded-full bg-violet-600/[0.07] blur-[150px]' />

        <div className='absolute right-[-12rem] top-[35%] h-[30rem] w-[30rem] rounded-full bg-blue-600/[0.04] blur-[140px]' />

        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent' />
      </div>

      <MaxWidthWrapper className='relative'>
        {/* Header */}
        <div className='mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-14'>
          <div>
            <div className='mb-4 flex items-center gap-3'>
              <span className='h-px w-8 bg-violet-400' />

              <span className='text-xs font-semibold uppercase tracking-[0.18em] text-violet-300'>
                Sanova publishing
              </span>
            </div>

            <h1 className='text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl'>
              Create a new article.
            </h1>

            <p className='mt-4 max-w-xl text-sm leading-7 text-white/40 sm:text-base'>
              Write in Markdown, upload a cover image, and preview the article
              before publishing.
            </p>
          </div>

          <SignOut />
        </div>

        <Form {...form}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='grid items-start gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]'
          >
            {/* Editor */}
            <div className='overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] shadow-2xl shadow-black/20'>
              <div className='border-b border-white/[0.07] px-6 py-5 sm:px-8'>
                <div className='flex items-center gap-3'>
                  <div className='flex size-9 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-400/[0.06] text-violet-300'>
                    <Sparkles className='size-4' />
                  </div>

                  <div>
                    <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300'>
                      Editor
                    </p>

                    <h2 className='mt-0.5 text-base font-semibold text-white'>
                      Article details
                    </h2>
                  </div>
                </div>
              </div>

              <div className='space-y-7 p-6 sm:p-8'>
                <FormField
                  control={control}
                  name='title'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='text-sm font-medium text-white/65'>
                        Article title
                      </FormLabel>

                      <FormControl>
                        <Input
                          placeholder='How a faster website can help your business'
                          className='h-12 rounded-xl border-white/[0.09] bg-white/[0.03] px-4 text-white placeholder:text-white/20 focus-visible:border-violet-400/40 focus-visible:ring-violet-400/10'
                          {...field}
                        />
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
                      <FormLabel className='text-sm font-medium text-white/65'>
                        Secondary title
                        <span className='ml-2 text-xs font-normal text-white/25'>
                          Optional
                        </span>
                      </FormLabel>

                      <FormControl>
                        <Input
                          placeholder='A practical guide for business owners'
                          className='h-12 rounded-xl border-white/[0.09] bg-white/[0.03] px-4 text-white placeholder:text-white/20 focus-visible:border-violet-400/40 focus-visible:ring-violet-400/10'
                          {...field}
                        />
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
                      <div className='flex items-end justify-between gap-4'>
                        <FormLabel className='text-sm font-medium text-white/65'>
                          Description
                        </FormLabel>

                        <span className='text-[10px] text-white/20'>
                          Search + social summary
                        </span>
                      </div>

                      <FormControl>
                        <Textarea
                          placeholder='A short summary describing what readers will learn...'
                          className='min-h-28 resize-none rounded-xl border-white/[0.09] bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/20 focus-visible:border-violet-400/40 focus-visible:ring-violet-400/10'
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Cover image */}
                <FormField
                  control={control}
                  name='photo'
                  render={() => (
                    <FormItem>
                      <FormLabel className='text-sm font-medium text-white/65'>
                        Cover image
                      </FormLabel>

                      <FormControl>
                        <label className='group relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[1.25rem] border border-dashed border-white/[0.12] bg-white/[0.02] px-6 py-8 text-center transition-colors hover:border-violet-400/30 hover:bg-violet-400/[0.03]'>
                          <input
                            type='file'
                            accept='image/*'
                            className='sr-only'
                            disabled={isUploading}
                            onChange={(e) =>
                              handleFileUpload(
                                e.target.files?.[0] ?? null
                              )
                            }
                          />

                          {isUploading ? (
                            <>
                              <Loader2 className='size-6 animate-spin text-violet-300' />

                              <p className='mt-3 text-sm font-medium text-white/60'>
                                Uploading image...
                              </p>
                            </>
                          ) : uploadedFile ? (
                            <>
                              <ImageIcon className='size-6 text-violet-300' />

                              <p className='mt-3 text-sm font-medium text-white'>
                                Cover image uploaded
                              </p>

                              <p className='mt-1 text-xs text-white/30'>
                                Click to replace
                              </p>
                            </>
                          ) : (
                            <>
                              <UploadCloud className='size-6 text-white/35 transition-colors group-hover:text-violet-300' />

                              <p className='mt-3 text-sm font-medium text-white/60'>
                                Upload a cover image
                              </p>

                              <p className='mt-1 text-xs text-white/25'>
                                PNG, JPG, WEBP
                              </p>
                            </>
                          )}
                        </label>
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
                      <div className='flex items-end justify-between gap-4'>
                        <FormLabel className='text-sm font-medium text-white/65'>
                          Article content
                        </FormLabel>

                        <span className='text-[10px] text-white/20'>
                          Markdown supported
                        </span>
                      </div>

                      <FormControl>
                        <Textarea
                          placeholder={`## Start writing...

Write your article using Markdown.

### Example heading

You can use **bold text**, lists, links, and more.`}
                          className='min-h-[500px] resize-y rounded-xl border-white/[0.09] bg-[#080808] px-4 py-4 font-mono text-sm leading-7 text-white/70 placeholder:text-white/15 focus-visible:border-violet-400/40 focus-visible:ring-violet-400/10'
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className='flex flex-col gap-4 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center sm:justify-between'>
                  <div className='text-xs text-white/25'>
                    Approx. {readingTime} min read
                  </div>

                  <Button
                    type='submit'
                    disabled={isSubmitting || isUploading}
                    className='group h-12 rounded-xl bg-white px-6 text-sm font-semibold text-black transition-all hover:bg-white/90 disabled:opacity-50'
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className='mr-2 size-4 animate-spin' />
                        Publishing...
                      </>
                    ) : (
                      <>
                        <Save className='mr-2 size-4' />
                        Publish article
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className='xl:sticky xl:top-28'>
              <div className='overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] shadow-2xl shadow-black/20'>
                <div className='flex items-center justify-between border-b border-white/[0.07] px-6 py-5 sm:px-8'>
                  <div className='flex items-center gap-3'>
                    <div className='flex size-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-violet-300'>
                      <Eye className='size-4' />
                    </div>

                    <div>
                      <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300'>
                        Live preview
                      </p>

                      <h2 className='mt-0.5 text-base font-semibold text-white'>
                        Article preview
                      </h2>
                    </div>
                  </div>

                  <span className='rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1 text-[10px] text-white/25'>
                    {readingTime} min read
                  </span>
                </div>

                {uploadedFile && (
                  <div className='aspect-[16/8] overflow-hidden border-b border-white/[0.07]'>
                    <img
                      src={uploadedFile}
                      alt=''
                      className='h-full w-full object-cover'
                    />
                  </div>
                )}

                <article className='px-6 py-8 sm:px-10 sm:py-10'>
                  <div className='mb-8 border-b border-white/[0.07] pb-8'>
                    <p className='text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300'>
                      Sanova Insights
                    </p>

                    <h1 className='mt-4 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl'>
                      {title || 'Your article title'}
                    </h1>

                    {title2 && (
                      <p className='mt-2 text-xl tracking-[-0.025em] text-white/40'>
                        {title2}
                      </p>
                    )}

                    <p className='mt-5 text-sm leading-7 text-white/40'>
                      {description ||
                        'Your article description will appear here.'}
                    </p>
                  </div>

                  {content ? (
                    <div
                      className='
                        prose
                        prose-invert
                        max-w-none

                        prose-headings:font-semibold
                        prose-headings:tracking-[-0.03em]
                        prose-headings:text-white

                        prose-p:leading-8
                        prose-p:text-white/50

                        prose-li:text-white/50

                        prose-strong:text-white/80

                        prose-a:text-violet-300
                      '
                    >
                      <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                  ) : (
                    <div className='rounded-[1.25rem] border border-dashed border-white/[0.08] px-6 py-12 text-center'>
                      <p className='text-sm text-white/25'>
                        Start writing to preview your article.
                      </p>
                    </div>
                  )}
                </article>
              </div>
            </div>
          </form>
        </Form>
      </MaxWidthWrapper>
    </main>
  );
}