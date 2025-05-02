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
    null | 'name' | 'email' | 'phone' | 'subject' | 'message'
  >(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
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

  const formFields = [
    { name: 'name', placeholder: 'your name', type: 'text', required: true },
    {
      name: 'email',
      placeholder: 'email address',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      placeholder: 'phone (optional)',
      type: 'tel',
      required: false,
    },
    { name: 'subject', placeholder: 'subject', type: 'text', required: true },
  ];

  return (
    <>
      <div className="flex items-center space-x-4 mb-8">
        <div className="h-8 w-1 bg-[#FFDF1E]" />
        <span className="text-[#FFDF1E] font-bold text-2xl lowercase">
          say hello
        </span>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(() => onSubmit())}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 gap-6">
            {formFields.map(field => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name as 'name' | 'email' | 'phone' | 'subject'}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormControl>
                      <motion.div
                        variants={inputVariants}
                        animate={focusedField === field.name ? 'focus' : 'blur'}
                      >
                        <Input
                          placeholder={field.placeholder}
                          type={field.type}
                          {...formField}
                          className="border-0 border-b border-white/20 h-12 bg-transparent rounded-none focus:ring-0 focus:border-[#FFDF1E] transition-all text-white placeholder:text-neutral-500"
                          onFocus={() =>
                            setFocusedField(
                              field.name as
                                | 'name'
                                | 'email'
                                | 'phone'
                                | 'subject',
                            )
                          }
                          onBlur={() => setFocusedField(null)}
                        />
                      </motion.div>
                    </FormControl>
                    <FormMessage className="text-[#FFDF1E]" />
                  </FormItem>
                )}
              />
            ))}

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
                        className="border-0 border-b border-white/20 bg-transparent h-32 rounded-none focus:ring-0 focus:border-[#FFDF1E] transition-all resize-none text-white placeholder:text-neutral-500"
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                      />
                    </motion.div>
                  </FormControl>
                  <FormMessage className="text-[#FFDF1E]" />
                </FormItem>
              )}
            />
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10"
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#FFDF1E] text-neutral-900 hover:bg-[#FFDF1E]/90 font-medium py-3 px-8 rounded-full transition-all relative overflow-hidden group"
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
              <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
            </Button>
          </motion.div>
        </form>
      </Form>
    </>
  );
}
