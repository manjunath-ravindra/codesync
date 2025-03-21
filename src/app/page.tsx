import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="m-10">
      <p>Home Page</p>
      <SignInButton>
        <Button>Login</Button>
      </SignInButton>
    </div>
  );
}
