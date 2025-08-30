import { Button } from "@/components/ui/button";
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-black bg-[url('/home-img.jpg')] bg-cover bg-center">

      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">

        <div className="flex flex-col gap-6 p-12 rounded-xl border-amber-50 bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-bold"><Link href={"/home"}>RHT&apos;s Computer<br />Repair Shop</Link></h1>
          <address>
            Lower Parele<br />
            Mumbai, MH 484125
          </address>
          <p>
            Open Daily: 9am to 5pm
          </p>
          <Link href="tel:9999777755" className="hover:underline">
            99997-77755
          </Link>
          <Button><Link href={"/home"}>Click Me</Link></Button>
          <p className="text-sm">UserName:- admin <br /> password:- password123456</p>
        </div>

      </main>

    </div>
  );
}