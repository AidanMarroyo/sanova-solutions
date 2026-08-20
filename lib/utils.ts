import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';

<<<<<<< HEAD
export function formatDate(isoString: string): string {
  const date = new Date(isoString);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
=======
export function formatDate(date: string | number | Date) {
  return new Date(date).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
>>>>>>> main
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toSlug(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
}
