'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { SERVICES } from '@/lib/constants';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-medium mb-2">Message sent!</h3>
        <p className="text-ink-secondary">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <Input
          label="Name"
          name="name"
          placeholder="Your name"
          required
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="you@company.com"
          required
        />
      </div>

      <Input
        label="Company (optional)"
        name="company"
        placeholder="Your company name"
      />

      <div className="space-y-2">
        <label className="block text-sm font-medium text-ink">
          Service interest
        </label>
        <select
          name="service"
          className="w-full px-4 py-3 bg-surface border border-border rounded-button text-ink focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
        >
          <option value="">Select a service...</option>
          {SERVICES.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <Textarea
        label="Message"
        name="message"
        placeholder="Tell us about your project and goals..."
        required
      />

      {/* Honeypot field for spam prevention */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <Button type="submit" size="lg" fullWidth disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send message'}
      </Button>

      <p className="text-sm text-muted text-center">
        We typically respond within 24 hours.
      </p>
    </form>
  );
}
