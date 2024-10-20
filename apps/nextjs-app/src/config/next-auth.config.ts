import type { NextAuthOptions } from 'next-auth';
import { default as CredentialsProvider } from 'next-auth/providers/credentials';
import { createHttpUnauthorized } from '@/lib/auth/error';
import { getServerRuntimeEnv } from './server-runtime-env.config.mjs';

const serverRuntimeEnv = getServerRuntimeEnv();
const oneDayInSeconds = 86_400;

/**
 * @todo Remove this once oauth is ready
 */
const getStaticAllowedDemoAdminUser = (email: string, password: string) => {
  const enableDemoAdminUser = serverRuntimeEnv.AUTH_ENABLE_DEMO_ADMIN_USER;

  if (
    enableDemoAdminUser &&
    email === 'admin@example.com' &&
    password === 'demo123'
  ) {
    return {
      id: '1',
      name: 'admin',
      email,
      role: 'admin',
      image: undefined,
    };
  }
  return null;
};

// @todo move this out

export const nextAuthConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign-in form (e.g. "Sign in with...")
      name: 'Credentials',
      // The credentials are used to generate a suitable form on the sign-in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'me@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, _req) {
        if (!credentials) {
          throw createHttpUnauthorized('Credentials not provided');
        }

        const { email, password } = credentials ?? {};
        // @todo remove this when oauth provider is in place.
        const staticAllowedDemoAdminUser = getStaticAllowedDemoAdminUser(
          email,
          password
        );
        if (staticAllowedDemoAdminUser) return staticAllowedDemoAdminUser;

        throw createHttpUnauthorized('Invalid credentials');
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: oneDayInSeconds * 30,
    updateAge: oneDayInSeconds, // 24 hours
  },
  /**
   session: {
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: 'jwt',
    maxAge: oneDayInSeconds * 30,
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  }, */
  jwt: {
    // The maximum age of the NextAuth.js issued JWT in seconds.
    // Defaults to `session.maxAge`.
    maxAge: oneDayInSeconds * 30,
    // You can define your own encode/decode functions for signing and encryption
    // async encode() {},
    // async decode() {},
  },
  callbacks: {
    /*
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    */
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    // async session({ session, token, user }) {
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
        },
      };
    },
    async jwt({ token, user, trigger }) {
      if (trigger === 'signUp') {
        // See examples: https://github.com/nextauthjs/next-auth/issues/7658#issuecomment-1565248630
      }
      if (user) {
        token.role = user.role;
      }
      return token;
    },
  },
  pages: {
    signIn: '/auth/login',
    /*
     signOut: '/auth/signout',
     error: '/auth/error', // Error code passed in query string as ?error=
     verifyRequest: '/auth/verify-request', // (used for check email message)
     newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
    */
  },
};
