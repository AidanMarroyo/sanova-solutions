'use client';

import { auth } from '@/lib/firebase';
import { redirect } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //   const [user] = useAuthState(auth);

  //   if (!user) {
  //     redirect('/blog');
  //   }
  return <div>{children}</div>;
}
