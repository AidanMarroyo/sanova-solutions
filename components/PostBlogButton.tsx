'use client';

import React from 'react';
import { Button } from './ui/button';
import { useRouter } from 'next/router';

const PostBlogButton = () => {
  const router = useRouter();
  return <Button onClick={() => router.push('/admin')}>Post Blog</Button>;
};

export default PostBlogButton;
