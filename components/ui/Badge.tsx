import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'outline' | 'neon' | 'glass';
  size?: 'sm' | 'md';
  className?: string;
  animated?: boolean;
}

const variants = {
  default: 'bg-violet-100 text-violet-700',
  gradient: [
    'bg-gradient-to-r from-violet-600 via-fuchsia-500 to-coral',
    'text-white font-semibold',
    'shadow-sm',
  ].join(' '),
  outline: [
    'bg-transparent',
    'border border-violet-400 text-violet-600',
  ].join(' '),
  neon: [
    'bg-transparent',
    'border border-violet-500 text-violet-400',
    'shadow-glow-sm',
  ].join(' '),
  glass: [
    'backdrop-blur-sm bg-white/60',
    'border border-white/40',
    'text-violet-700',
  ].join(' '),
};

const sizes = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3.5 py-1.5 text-sm',
};

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className,
  animated = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        'transition-all duration-200',
        variants[variant],
        sizes[size],
        animated && 'animate-pop-in',
        className
      )}
    >
      {children}
    </span>
  );
}
