import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-dark shadow-cultural hover:shadow-vibrant hover:scale-105",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-cultural",
        outline: "border-2 border-primary text-primary bg-background hover:bg-primary hover:text-primary-foreground shadow-cultural",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-dark shadow-cultural hover:shadow-vibrant hover:scale-105",
        ghost: "hover:bg-primary/10 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-primary text-white font-semibold shadow-vibrant hover:shadow-glow hover:scale-105 transform transition-all",
        cultural: "bg-gradient-cultural text-white font-semibold shadow-cultural hover:shadow-vibrant hover:scale-105",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-cultural hover:shadow-vibrant",
        success: "bg-success text-white hover:bg-success/90 shadow-cultural",
        warning: "bg-warning text-white hover:bg-warning/90 shadow-cultural",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
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
