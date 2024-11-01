import React from "react";
import { cn } from "../../utils";
import { cva, type VariantProps } from "class-variance-authority";

const headingVariants = cva("", {
  variants: {
    variant: {
      default: "text-primary",
      secondary: "text-secondary",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      sm: "text-[16px] font-semibold tracking-tight",
      default: "text-[18px] font-semibold tracking-tight first:mt-0",
      lg: "text-[22px] font-extrabold tracking-tight lg:text-[24px] first:mt-0",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface HeadingProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
    VariantProps<typeof headingVariants> {}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ variant, size, className, ...props }, ref) => {
    return (
      <h1
        className={cn(headingVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
