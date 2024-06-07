import NextAuth from 'next-auth';
import { authOptions } from '@/app/lib/auth';

import GitHubProvider from 'next-auth/providers/github';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

export const runtime = 'nodejs' // Ensure this is not attempted to be exported as static
  