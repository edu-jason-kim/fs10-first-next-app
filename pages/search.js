import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import axios from "@/lib/axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`/products?q=${q}`)
      .then((res) => setProducts(res.data.results))
      .catch(console.error);
  }, [q]);

  return (
    <>
      <Head>
        <title>{q} 검색 결과 - Codeitmall</title>
      </Head>

      <main>
        <h1>검색결과 페이지: {q}</h1>
        <SearchForm />
        <ProductList products={products} />
      </main>
    </>
  );
}
