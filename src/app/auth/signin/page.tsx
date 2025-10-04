import SignInCard from '@/components/authentication/sign-in-card';
import { SignInForm } from '@/components/authentication/sign-in-form';

export default function SignInPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <SignInCard>
        <SignInForm strategy={['social', 'credential']} />
      </SignInCard>
    </div>
  );
}
