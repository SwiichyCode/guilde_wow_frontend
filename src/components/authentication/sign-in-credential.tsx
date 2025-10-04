'use client';

import { InputForm } from '@/components/common/input-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { authClient } from '@/lib/auth-client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

const formSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  password: z.string().min(1, { message: 'Password is required.' }),
});

export type SignInFormValues = z.infer<typeof formSchema>;

export default function SignInCredential() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<SignInFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: SignInFormValues) => {
    startTransition(async () => {
      await authClient.signIn.email(values);
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <InputForm
          name="email"
          label="Email"
          type="email"
          control={form.control}
          placeholder="Enter your email"
          showError={false}
        />
        <InputForm
          name="password"
          label="Password"
          type="password"
          control={form.control}
          placeholder="Enter your password"
          showError={false}
        />
        <Button type="submit" className="mt-6 w-full" disabled={isPending}>
          {isPending ? <Loader2 className="animate-spin" /> : 'Continue'}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card text-muted-foreground px-2">or</span>
        </div>
      </div>
    </Form>
  );
}
