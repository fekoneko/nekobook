import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import mongoClientPromise from '../mongodb/mongoClientPromise';
import User from '@/models/User';
import mongoosePromise from '../mongoose/mongoosePromise';

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(mongoClientPromise),
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'myew@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) throw new Error('No credentials provided');

        await mongoosePromise;
        const user = await User.findOne({ email: credentials.email });
        if (!user) throw new Error('User not found');

        const isMatch = await bcrypt.compare(credentials.password, user.password);
        if (!isMatch) throw new Error('Email or password is incorrect');

        return user;
      },
    }),
  ],
  pages: {
    signOut: '/signin',
    newUser: '/user',
    error: '/signin',
  },
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.user = {
          _id: user._id,
          email: user.email,
          name: user.name,
        };
      }
      return token;
    },
    session: async ({ session, token }: any) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
