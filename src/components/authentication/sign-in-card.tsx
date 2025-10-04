import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function SignInCard({ children }: { children: React.ReactNode }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Welcome back! Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">{children}</CardContent>
      <CardFooter className="flex justify-center">
        <span className="text-muted-foreground text-sm">
          Don&apos;t have an account?{' '}
          <a href={'/sign-up'} className="text-primary underline hover:opacity-80">
            Sign up
          </a>
        </span>
      </CardFooter>
    </Card>
  );
}
