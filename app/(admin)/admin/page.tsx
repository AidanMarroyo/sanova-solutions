import { SignedIn } from '@clerk/nextjs';

export default async function AdminPage() {
  return (
    <main className='m-auto my-10 max-w-5xl space-y-10 px-3'>
      <SignedIn>
        <h1 className='text-center'>Admin Dashboard</h1>
        <section className='flex flex-col gap-3'>
          <h2 className='text-lg font-bold'>Unapproved jobs:</h2>
        </section>
      </SignedIn>
    </main>
  );
}
