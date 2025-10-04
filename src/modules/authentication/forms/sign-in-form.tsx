'use client';

import SignInCredential from '@/modules/authentication/forms/sign-in-credential';
import SignInSocial from '@/modules/authentication/forms/sign-in-social';

export default function SignInForm({ strategy }: { strategy?: ('social' | 'credential')[] }) {
  return (
    <>
      {strategy?.includes('credential') && <SignInCredential />}
      {strategy?.includes('social') && <SignInSocial providers={['discord', 'github']} />}
    </>
  );
}
