'use client';

import { useState } from 'react';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters long',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(2, {
    message: 'Subject must be at least 2 characters long',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters long',
  }),
});

const inputVariants = {
  focus: { scale: 1.02, transition: { duration: 0.2 } },
  blur: { scale: 1, transition: { duration: 0.2 } },
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<
    null | 'name' | 'email' | 'phone' | 'company' | 'subject' | 'message'
  >(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit() {
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast.success('Message sent successfully!', {
        description: 'We will get back to you as soon as possible.',
      });

      form.reset();
    } catch (error) {
      toast.error('Something went wrong.', {
        description: 'Your message was not sent. Please try again.',
      });
      console.log(`Error: `, error);
    }

    setIsSubmitting(false);
  }

  return (
    <>
      <h2 className="text-3xl font-bold mb-8">say hello</h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(() => onSubmit())}
          className="space-y-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <motion.div
                    variants={inputVariants}
                    animate={focusedField === 'name' ? 'focus' : 'blur'}
                  >
                    <Input
                      placeholder="your name"
                      {...field}
                      className="border border-neutral-300 h-12 bg-transparent rounded-lg focus:ring-[#FFDF1E] focus:border-[#FFDF1E] transition-all"
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </motion.div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <motion.div
                      variants={inputVariants}
                      animate={focusedField === 'email' ? 'focus' : 'blur'}
                    >
                      <Input
                        placeholder="email address"
                        type="email"
                        {...field}
                        className="border border-neutral-300 h-12 bg-transparent rounded-lg focus:ring-[#FFDF1E] focus:border-[#FFDF1E] transition-all"
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </motion.div>
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
                    <motion.div
                      variants={inputVariants}
                      animate={focusedField === 'phone' ? 'focus' : 'blur'}
                    >
                      <Input
                        placeholder="phone (optional)"
                        type="tel"
                        {...field}
                        className="border border-neutral-300 h-12 bg-transparent rounded-lg focus:ring-[#FFDF1E] focus:border-[#FFDF1E] transition-all"
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <motion.div
                      variants={inputVariants}
                      animate={focusedField === 'company' ? 'focus' : 'blur'}
                    >
                      <Input
                        placeholder="company (optional)"
                        {...field}
                        className="border border-neutral-300 h-12 bg-transparent rounded-lg focus:ring-[#FFDF1E] focus:border-[#FFDF1E] transition-all"
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <motion.div
                      variants={inputVariants}
                      animate={focusedField === 'subject' ? 'focus' : 'blur'}
                    >
                      <Input
                        placeholder="subject"
                        {...field}
                        className="border border-neutral-300 h-12 bg-transparent rounded-lg focus:ring-[#FFDF1E] focus:border-[#FFDF1E] transition-all"
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <motion.div
                    variants={inputVariants}
                    animate={focusedField === 'message' ? 'focus' : 'blur'}
                  >
                    <Textarea
                      placeholder="your message"
                      {...field}
                      className="border border-neutral-300 bg-transparent h-40 rounded-lg focus:ring-[#FFDF1E] focus:border-[#FFDF1E] transition-all resize-none"
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                    />
                  </motion.div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-black text-white hover:bg-neutral-800 font-medium py-4 px-8 rounded-lg w-full md:w-auto transition-all relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    sending...
                  </>
                ) : (
                  <>
                    send message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-[#FFDF1E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
            </Button>
          </motion.div>
        </form>
      </Form>
    </>
  );
}
