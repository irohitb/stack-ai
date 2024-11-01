"use client";
import * as React from "react";
import { Button } from "../components/ui/button";
import { type ComponentProps } from "react";
import { Spinner } from "../components/ui/spinner";
//@ts-expect-error
import { useFormStatus } from "react-dom";

type Props = ComponentProps<typeof Button> & {
  pendingText?: string;
  loading?: boolean;
};

export function SubmitButton({
  children,
  pendingText = "Submitting...",
  loading,
  ...props
}: Props) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" aria-disabled={pending} {...props} disabled={loading}>
      {pending ? <Spinner variant="default" /> : children}
    </Button>
  );
}
