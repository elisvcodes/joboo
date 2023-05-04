import type { AppProps } from "next/app";
import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-inter: ${inter.style.fontFamily};
          }
        `}
      </style>

      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}
