import { getCustomerSearchResults } from "@/lib/queries/getCustomerSearchResults";
import CustomerSearch from "./CustomerSearch";
import CustomerTable from "./CustomerTable";

export const metadata = {
    title: "Customer Search",
}

export default async function Customers({ searchParams }: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}){

  const {searchText} = await searchParams;

  if(!searchText) return <CustomerSearch />

  const results = await getCustomerSearchResults(searchText);

  return(
    <>
    <CustomerSearch />
      { results.length ? <CustomerTable data={results} /> : (
        <p>No results found</p>
      ) }
    </>
  )
}