import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setProducts(res.data.results))
      .catch(console.error);
  }, []);

  return (
    <>
      <Head>
        <title>Codeitmall</title>
      </Head>

      <main>
        <h1>Codeit Mall</h1>
        <Link href="/settings">설정</Link>
        <SearchForm />
        <ProductList products={products} />
      </main>
    </>
  );
}
