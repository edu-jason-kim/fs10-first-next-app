import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setProducts(res.data.results))
      .catch(console.error);
  }, []);

  return (
    <main>
      <h1>Codeit Mall</h1>
      <SearchForm />
      <ProductList products={products} />
    </main>
  );
}
