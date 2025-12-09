import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(console.error);
  }, [id]);

  if (!product) {
    return <div>로딩 중...</div>;
  }

  return (
    <main>
      <h1>{product.name}</h1>
      <img width={300} height={300} src={product.imgUrl} alt={product.name} />
    </main>
  );
}
