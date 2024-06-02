import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const LoginPage = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {!session ? (
        <button onClick={() => signIn('github')} className="btn-primary">
          Sign in with GitHub
        </button>
      ) : (
        <button onClick={() => signOut()} className="btn-secondary">
          Sign out
        </button>
      )}
    </div>
  );
};

export default LoginPage;

