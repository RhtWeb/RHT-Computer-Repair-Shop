import { File, HomeIcon, UsersRound } from "lucide-react";
import NavButton from "./NavButton";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

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
          <NavButton href="/customers" label="Customers" icon={UsersRound} />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}