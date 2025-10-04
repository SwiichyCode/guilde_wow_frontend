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
      {/* <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card text-muted-foreground px-2">or</span>
        </div>
      </div> */}

      {providers.map(provider => (
        <SignInSocialButton key={provider} provider={provider} providers={providers} />
      ))}
    </>
  );
}
