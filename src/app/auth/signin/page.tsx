import SignInForm from '@/modules/authentication/forms/sign-in-form';
import SignInCard from '@/modules/authentication/ui/sign-in-card';

export default function SignInPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <SignInCard>
        <SignInForm strategy={['social', 'credential']} />
      </SignInCard>
    </div>
  );
}
