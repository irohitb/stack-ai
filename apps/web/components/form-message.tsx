export type Message =
  | { success: string }
  | { error: string }
  | { message: string };

export interface Props {
  message: Message;
}
export function FormMessage({ message }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full max-w-md text-sm">
      {"success" in message && (
        <div className="text-success">{message.success}</div>
      )}
      {"error" in message && (
        <div className="text-destructive">{message.error}</div>
      )}
      {"message" in message && (
        <div className="text-primary">{message.message}</div>
      )}
    </div>
  );
}
