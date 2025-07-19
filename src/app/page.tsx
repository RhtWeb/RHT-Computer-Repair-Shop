import Link from "next/link"

export default function Home() {
  return (
    <div className="h-dvh flex justify-center bg-[url('/home-img.jpg')] bg-cover">
      
      <main className="flex flex-col text-center w-1/2 bg-primary text-white m-auto p-10 gap-6">
        <h1 className="text-4xl font-bold">RHT&apos;s Computer<br />Repair Shop</h1>
          <address>
            420 Civil Line, Indira Nagar<br />
            Lucknow, UP 290001
          </address>
          <p>
            Open Daily: 9am to 5pm
          </p>
          <Link href="tel:9999999999" className="hover:underline">
            99999-99999
          </Link>
      </main>
    </div>
  );
}
