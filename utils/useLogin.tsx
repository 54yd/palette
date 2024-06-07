import { signIn, signOut, useSession } from 'next-auth/react';

const useLogin = () => {
  const { data: session } = useSession();

  const signInGithub = () => signIn('github');
  const signOutSession = () => signOut();

  const handleLogin = () => {
    if (session) {
      signOutSession();
    } else {
      signInGithub();
    }
  };

  return { session, handleLogin };
};

export default useLogin;
