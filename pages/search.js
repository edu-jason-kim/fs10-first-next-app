import SearchForm from "@/components/SearchForm";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <main>
      <h1>검색결과 페이지: {q}</h1>
      <SearchForm />
    </main>
  );
}
