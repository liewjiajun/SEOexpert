import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient-border' | 'neon';
  hover?: boolean;
  animated?: boolean;
}

const variants = {
  default: [
    'bg-white/80 backdrop-blur-sm',
    'border border-white/50',
    'shadow-card',
  ].join(' '),
  glass: [
    'backdrop-blur-glass bg-white/60',
    'border border-white/30',
    'shadow-glass',
  ].join(' '),
  'gradient-border': [
    'relative bg-white/90 backdrop-blur-sm',
    // Gradient border using pseudo-element
    'before:absolute before:inset-0 before:-z-10',
    'before:p-[1.5px] before:rounded-[20px]',
    'before:bg-gradient-to-br before:from-violet-500 before:via-fuchsia-500 before:to-coral',
    'before:-m-[1.5px]',
  ].join(' '),
  neon: [
    'bg-ink/90 backdrop-blur-sm',
    'border border-violet-500/30',
    'shadow-glow-sm',
  ].join(' '),
};

export function Card({
  children,
  className,
  variant = 'default',
  hover = false,
  animated = false,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-card p-6 md:p-8',
        variants[variant],
        hover && [
          'transition-all duration-300 ease-out',
          'hover:-translate-y-2 hover:shadow-card-hover',
          'hover:border-violet-200',
        ],
        animated && 'animate-fade-in-up',
        className
      )}
    >
      {children}
    </div>
  );
}
