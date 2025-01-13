import { AuthContext } from '@/lib/context';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';
import { Button } from './ui/button';

const SignOut = () => {
  const { user } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) {
    return null; // Don't display the sign out button if the user is not logged in
  }

  return <Button onClick={handleSignOut}>Sign Out</Button>;
};

export default SignOut;
