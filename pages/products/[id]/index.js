import axios from "@/lib/axios";
import Image from "next/image";

// HTML 정적 생성할 경로를 반환
export async function getStaticPaths() {
  const response = await axios.get("/products"); // 9개 응답 -> 9개 만큼만 HTML을 생성
  const products = response.data.results;

  // 우리가 생성할 페이지 경로들
  const paths = products.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths,
    // false: 지정되지 않은 경로는 404 반환
    // true: 지정되지 않은 경로는 최초 요청시 생성 (로딩 상태표시 필요)
    // 'blocking': 지정되지 않은 경로는 최초 요청 시 SSR처럼 생성 (로딩 상태 없음)
    fallback: false,
  };
}

// 1~9까지 실행하면서 HTML 생성을 위한 데이터 수집
export async function getStaticProps({ params }) {
  const response = await axios.get(`/products/${params.id}`);
  const product = response.data;
  return { props: { product } };
}

// 1~9 product 만큼 HTML 생성
export default function ProductDetail({ product }) {
  return (
    <main>
      <h1>{product.name}</h1>
      <Image width={300} height={300} src={product.imgUrl} alt={product.name} />
    </main>
  );
}
