/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function CommentSection() {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Michael Gough',
      avatar: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      date: 'Feb. 8, 2022',
      content:
        'Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.',
      likes: 11,
    },
    // Add more comments as needed
  ]);

  return (
    <section className='not-format'>
      <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-lg font-bold text-white lg:text-2xl'>
          Discussion ({comments.length})
        </h2>
        <Button variant='outline'>Subscribe</Button>
      </div>

      <form className='mb-6'>
        <Textarea
          id='comment'
          placeholder='Write a comment...'
          rows={6}
          className='mb-4'
        />
        <Button type='submit'>Post comment</Button>
      </form>

      {comments.map((comment) => (
        <article key={comment.id} className='mb-6 rounded-lg  p-6 text-base '>
          <footer className='mb-2 flex items-center justify-between'>
            <div className='flex items-center'>
              <Avatar className='mr-3'>
                <AvatarImage src={comment.avatar} alt={comment.author} />
                <AvatarFallback>{comment.author[0]}</AvatarFallback>
              </Avatar>
              <p className='mr-3 text-sm text-white'>
                {comment.author}
                <time className='mx-3 text-sm font-normal text-gray-400'>
                  {comment.date}
                </time>
              </p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' size='sm'>
                  <span className='sr-only'>Comment settings</span>
                  <svg
                    className='h-5 w-5'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Remove</DropdownMenuItem>
                <DropdownMenuItem>Report</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </footer>
          <p className='text-gray-400'>{comment.content}</p>
          <div className='mt-4 flex items-center space-x-4'>
            <Button variant='ghost' size='sm'>
              <svg
                className='mr-1 h-3.5 w-3.5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 18'
              >
                <path d='M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z' />
              </svg>
              Reply
            </Button>
          </div>
        </article>
      ))}
    </section>
  );
}
