import { cn } from "../../utils";
import "./../styles/spinner.css";
import { cva, type VariantProps } from "class-variance-authority";

export interface Props {
  size: "default" | "sm" | "md" | "lg";
  color: string;
}

const buttonVariants = cva(
  "border-2  border-b-transparent rounded-full inline-block box-borde",
  {
    variants: {
      variant: {
        default: "border-primary",
        secondary: "border-secondary",
      },
      size: {
        default: "w-6 h-6 border-2 ",
        sm: "w-4 h-4 border-1",
        lg: "w-8 h-8 border-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface SpinnerProps extends VariantProps<typeof buttonVariants> {
  className?: string;
}

export const Spinner = ({ size, variant, className }: SpinnerProps) => {
  return (
    <span
      className={cn("loader", buttonVariants({ variant, size, className }))}
    ></span>
  );
};
