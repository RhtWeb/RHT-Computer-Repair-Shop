import Header from "@/components/Header"

export default async function RSLayout({
  children,
}: {
  children : React.ReactNode
}){
  return (
    <div className="container w-5/6 m-auto">
      <Header />
      <div className="px-4">
        {children}
      </div>
    </div>
  )
}