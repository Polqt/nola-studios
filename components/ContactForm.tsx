'use client';

import { useState } from 'react';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: 'First name must be at least 2 characters long',
  }),
  lastName: z.string().min(2, {
    message: 'Last name must be at least 2 characters long',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  industry: z.string().optional(),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters long',
  }),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      industry: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    } catch (error) {}
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="first name *"
                    {...field}
                    className="bg-black text-white border-none h-12"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="last name *"
                    {...field}
                    className="bg-black text-white border-none h-12"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="email address *"
                  type="email"
                  {...field}
                  className="bg-black text-white placeholder:text-gray-400 border-none h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="phone number (optional)"
                  type="tel"
                  {...field}
                  className="bg-black text-white placeholder:text-gray-400 border-none h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="company name"
                  {...field}
                  className="bg-black text-white placeholder:text-gray-400 border-none h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="industry of company"
                  {...field}
                  className="bg-black text-white placeholder:text-gray-400 border-none h-12"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="message *"
                  {...field}
                  className="bg-black text-white placeholder:text-gray-400 border-none h-36 resize-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#FFDF1E] text-black hover:bg-[#FFDF1E]/90 font-medium py-3 px-6"
        >
          send <ChevronRight className="ml-1 h-5 w-5" />
        </Button>
      </form>
    </Form>
  );
}
