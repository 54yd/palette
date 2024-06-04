'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const LoginPage = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center bg-gray-300" id="login">
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



