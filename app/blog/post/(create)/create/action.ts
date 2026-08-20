'use server';

import { doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { BlogPostSchema } from '@/lib/validation';
import { firestore } from '@/lib/firebase';
import { toSlug } from '@/lib/utils';

export async function submitBlogPost(formData: FormData) {
  // const user = getAuth().currentUser;
  // if (!user) {
  //   throw new Error('User is not authenticated');
  // }
  const title = formData.get('title') as string;
  const slug = toSlug(title);
  const ref = doc(firestore, 'posts', slug);
  const validatedFields = BlogPostSchema.safeParse({
    title: formData.get('title'),
    title2: formData.get('title2'),
    description: formData.get('description'),
    content: formData.get('content'),
    createdAt: formData.get('createdAt'),
    photo: formData.get('photo'),
    slug,
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  await setDoc(ref, validatedFields);
}
