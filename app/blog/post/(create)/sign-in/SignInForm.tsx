'use client';
import { MaxWidthWrapper } from '@/components/ MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignInForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginError, setloginError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/blog/post/create'); // Navigate to the home page
    } catch (error) {
      console.error('Error logging in:', error);
      if (error instanceof Error) {
        setloginError(error.message); // Access the message safely
      } else {
        setloginError('An unknown error occurred'); // Handle unexpected types
      }
    }
  };
  return (
    <MaxWidthWrapper>
      <div className='flex justify-center'>
        <Card className='w-[350px]'>
          <CardHeader></CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label>Email</Label>
                  <Input
                    placeholder='iloveaidan@aidan.com'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label>Password</Label>
                  <Input
                    placeholder='xxxxxxxx'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>
              <Button type='submit' className='mt-8'>
                Login
              </Button>
              {loginError && (
                <p className='text-red-500 text-sm'>{loginError}</p>
              )}
            </form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </MaxWidthWrapper>
  );
}
