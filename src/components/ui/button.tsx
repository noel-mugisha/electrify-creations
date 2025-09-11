import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-medium transition-normal",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-soft hover:shadow-medium transition-normal",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-normal",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-soft hover:shadow-medium transition-normal",
        ghost: "hover:bg-accent hover:text-accent-foreground transition-normal",
        link: "text-primary underline-offset-4 hover:underline transition-normal",
        // Enhanced Premium Variants
        hero: "bg-gradient-hero text-primary-foreground font-semibold shadow-gold hover:shadow-glow hover:scale-105 transition-bounce border-0",
        premium: "bg-gradient-gold text-primary-foreground font-semibold shadow-medium hover:shadow-gold hover:scale-105 transition-bounce",
        glass: "glass text-foreground hover:bg-card-glass/20 hover:shadow-medium transition-normal border-white/20",
        floating: "bg-primary text-primary-foreground shadow-large hover:shadow-glow hover:-translate-y-2 transition-bounce",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
