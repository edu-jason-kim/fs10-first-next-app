import SearchForm from "@/components/SearchForm";
import ProductList from "@/components/ProductList";
import axios from "@/lib/axios";
import Link from "next/link";
import Head from "next/head";

// SSG
// export async function getStaticProps() {
//   const response = await axios.get("/products"); // 9개
//   const products = response.data.results;
//   const time = new Date().toISOString();

//   return {
//     props: { products, time },
//     // ISR (revalidtae 시간을 주면 끝)
//     revalidate: 60 * 60 * 24,
//   };
// }

// SSR
export async function getServerSideProps() {
  const response = await axios.get("/products"); // 9개
  const products = response.data.results;
  const time = new Date().toISOString();

  return {
    props: { products, time },
  };
}

export default function Home({ products, time }) {
  return (
    <>
      <Head>
        <title>Codeitmall</title>
      </Head>

      <main>
        <h1>Codeit Mall</h1>
        <p>{time}</p>
        <Link href="/settings">설정</Link>
        <SearchForm />
        <ProductList products={products} />
      </main>
    </>
  );
}
