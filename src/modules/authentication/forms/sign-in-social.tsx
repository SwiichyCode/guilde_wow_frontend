'use client';

import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';

export type SignInSocialProps = {
  providers: ('discord' | 'github')[];
};

export type SignInSocialButtonProps = SignInSocialProps & {
  provider: 'discord' | 'github';
};

export const SignInSocialButton = ({ provider }: SignInSocialButtonProps) => {
  return (
    <>
      <Button variant="outline" className="w-full" onClick={() => authClient.signIn.social({ provider })}>
        Continue with {provider}
      </Button>
    </>
  );
};

export default function SignInSocial({ providers }: SignInSocialProps) {
  return (
    <>
      {providers.map(provider => (
        <SignInSocialButton key={provider} provider={provider} providers={providers} />
      ))}
    </>
  );
}
