import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-ink">{label}</label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-3 bg-surface border border-border rounded-button',
            'text-ink placeholder:text-muted',
            'focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent',
            'transition-colors duration-200',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
