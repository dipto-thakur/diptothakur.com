import { cn } from '@/lib/utils';
import React from 'react';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: "sm" | "md" | "lg" | "icon";
    asChild?: boolean;
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          `
          group
          relative
          inline-flex
          items-center
          justify-center
          gap-2
          overflow-hidden
          rounded-xl
          font-medium
          tracking-[-0.01em]
          transition-all
          duration-200
          ease-out

          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-zinc-900
          focus-visible:ring-offset-2
          dark:focus-visible:ring-zinc-100
          dark:focus-visible:ring-offset-zinc-950

          disabled:pointer-events-none
          disabled:opacity-50
          disabled:shadow-none
          `,
          {
            /* Primary */
            'bg-zinc-900 text-zinc-50 shadow-sm hover:bg-zinc-800 hover:shadow-md dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200':
              variant === 'primary',

            /* Secondary */
            'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700':
              variant === 'secondary',

            /* Ghost */
            'bg-transparent text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800':
              variant === 'ghost',

            /* Outline */
            'border border-zinc-200 bg-white text-zinc-900 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-transparent dark:text-zinc-50 dark:hover:border-zinc-600 dark:hover:bg-zinc-800':
              variant === 'outline',

            /* Sizes */
            'h-10 w-10 p-0': size === 'icon',
            
            'h-8 px-3 text-sm': size === 'sm',

            'h-10 px-4 text-sm': size === 'md',

            'h-11 px-6 text-[15px]': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {/* Shimmer */}
        {(variant === 'primary' ||
          variant === 'secondary') && (
          <span
            aria-hidden
            className="
              pointer-events-none
              absolute
              inset-0
              overflow-hidden
              rounded-[inherit]
            "
          >
            <span
              className="
                absolute
                inset-y-0
                -left-1/3
                w-1/3
                -skew-x-12
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
                opacity-0
                transition-all
                duration-700
                group-hover:left-[130%]
                group-hover:opacity-100
                dark:via-white/5
              "
            />
          </span>
        )}

        <span className="relative z-10">
          {children}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';