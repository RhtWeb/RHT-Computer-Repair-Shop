import { File, HomeIcon, LogOut, UsersRound } from "lucide-react";
import NavButton from "./NavButton";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button"
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { NavButtonDropMenu } from "./NavButtonDropMenu";

export default function Header(){
  return(
    <header>
      <div className="flex justify-between border-b-2">
        <div className="flex">
          <NavButton href="/home" label="home" icon={HomeIcon} />

          <Link href={"/home"}>
            <h1 className="hidden sm:block py-1">Computer Repair Shop</h1>
          </Link>
        </div>
        <div>
          <NavButton href="/tickets" label="Tickets" icon={File} />
          
          <NavButtonDropMenu
              icon={UsersRound}
              label="Customers Menu"
              choices={[
                  { title: "Search Customers", href: "/customers" },
                  { title: "New Customer", href: "/customers/form" }
              ]}
          />

          <ModeToggle />

          <Button variant={"ghost"} size={"icon"} aria-label="LogOut" title="LogOut" className="rounded-full" asChild>
            <LogoutLink>
              <LogOut />
            </LogoutLink>
          </Button>
        </div>
      </div>
    </header>
  )
}