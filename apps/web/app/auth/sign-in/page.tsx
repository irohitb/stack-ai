import { signInAction } from "@/utils/api/auth";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  SubmitButton,
} from "@stackai/ui";
import { FormMessage, Message } from "@/components/form-message";
import { LockIcon, UserIcon } from "lucide-react";

export interface Props {
  searchParams: Promise<Message>;
}
export default async function SignInCard({ searchParams }: Props) {
  const searchMessage = await searchParams;

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Card className="w-full max-w-md mx-auto ">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Sign In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormMessage message={searchMessage} />
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="id" className="sr-only">
                ID
              </Label>
              <div className="relative">
                <UserIcon
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <Input
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <div className="relative">
                <LockIcon
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  size={18}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Your password"
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <CardFooter>
              <SubmitButton
                className="w-full"
                pendingText="Signing In..."
                formAction={signInAction}
              >
                Sign in
              </SubmitButton>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
