import { Button } from "@/components/ui/button";
import {LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function LoginPage(){
  return(
    <main className="flex flex-col items-center h-dvh justify-center">
      <h1 className="text-center text-4xl font-bold mb-3">Repair Shop</h1>
      <Button asChild>
        <LoginLink>Sign in</LoginLink>
      </Button>
      {/* <RegisterLink>Sign up</RegisterLink> */}
    </main>
  )
}
