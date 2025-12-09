import Header from "@/components/Header";
import { ThemeProvider } from "@/lib/ThemeContext";
// Global css는 _app.js에서만 호출 가능
import "@/styles/globals.css";
import "@/styles/typo.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
