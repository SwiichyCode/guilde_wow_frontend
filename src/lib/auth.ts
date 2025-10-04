import { prisma } from '@/lib/prisma';
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'sqlite',
  }),
  socialProviders: {
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    },
  },
});
