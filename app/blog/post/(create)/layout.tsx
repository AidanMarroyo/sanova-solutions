'use client';

import { AuthContext } from '@/lib/context';
import { useUserData } from '@/lib/hooks';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userData = useUserData();
  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
}
