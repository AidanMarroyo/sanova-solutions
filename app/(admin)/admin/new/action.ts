'use server';

import { toSlug } from '@/lib/utils';
import { BlogPostSchema } from '@/lib/validation';
import { nanoid } from 'nanoid';
import prisma from '@/lib/prisma';
import { isAdmin } from '@/lib/utils';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export async function createBlogPosting(formData: FormData) {
  const user = await currentUser();

  if (!user || !isAdmin(user)) {
    throw new Error('Not Authorized');
  }

  const values = Object.fromEntries(formData.entries());

  const { title, title2, description, content } = BlogPostSchema.parse(values);

  const slug = `${toSlug(title)}-${nanoid(10)}`;

  await prisma.post.create({
    data: {
      slug,
      title: title.trim(),
      title2: title2?.trim(),
      description: description.trim(),
      content: content.trim(),
    },
  });

  redirect('/admin');
}
