'use client';

import SignInCredential from '@/components/authentication/sign-in-credential';
import SignInSocial from '@/components/authentication/sign-in-social';

export function SignInForm({ strategy }: { strategy?: ('social' | 'credential')[] }) {
  return (
    <>
      {strategy?.includes('credential') && <SignInCredential />}
      {strategy?.includes('social') && <SignInSocial providers={['discord', 'github']} />}
    </>
  );
}
