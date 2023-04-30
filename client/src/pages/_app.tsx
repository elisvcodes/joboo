import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
