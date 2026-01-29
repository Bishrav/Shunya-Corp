'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setStatus('loading');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setStatus('success');
            reset();
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass p-8 rounded-2xl w-full max-w-lg mx-auto"
        >
            <h2 className="text-3xl font-display mb-6 text-center neon-text-cyan">Get In Touch</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                    <input
                        {...register('name')}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-shunya-cyan transition-colors"
                        placeholder="Shunya"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                    <input
                        {...register('email')}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-shunya-cyan transition-colors"
                        placeholder="shunya@gmail.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                    <textarea
                        {...register('message')}
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-shunya-cyan transition-colors"
                        placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 bg-shunya-cyan/10 border border-shunya-cyan text-shunya-cyan font-bold rounded-lg hover:bg-shunya-cyan hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                    <p className="text-green-400 text-center">Message sent successfully!</p>
                )}
                {status === 'error' && (
                    <p className="text-red-400 text-center">Something went wrong. Please try again.</p>
                )}
            </form>
        </motion.div>
    );
}
