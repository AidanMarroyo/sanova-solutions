'use client';

import { useContext } from 'react';
import NewPostForm from './NewPostForm';
import { AuthContext } from '@/lib/context';
import { redirect } from 'next/navigation';

export default function CreatePostPage() {
  const authContext = useContext(AuthContext);
  if (!authContext?.user) {
    return redirect('/blog/post/sign-in');
  }
  return (
    <div>
      <NewPostForm />
    </div>
  );
}
