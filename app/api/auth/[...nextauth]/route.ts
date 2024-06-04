import NextAuth from 'next-auth';
import { authOptions } from '@/app/lib/auth';

import GitHubProvider from 'next-auth/providers/github';

console.log('GITHUB_CLIENT_ID:', process.env.GITHUB_CLIENT_ID);
console.log('GITHUB_CLIENT_SECRET:', process.env.GITHUB_CLIENT_SECRET);


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };