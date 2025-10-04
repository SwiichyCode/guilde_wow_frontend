import { auth } from '@/lib/auth';
import SignedInWrapper from '@/modules/authentication/guards/signed-in-wrapper';
import { SignOutButton } from '@/modules/authentication/ui/sign-out-button';
import { headers } from 'next/headers';

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <SignedInWrapper>
      <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
        <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
          <h1>Hello {session?.user.name ?? 'World'}!</h1>

          <SignOutButton />
        </main>
      </div>
    </SignedInWrapper>
  );
}
