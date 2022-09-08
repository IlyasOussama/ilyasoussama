// src/pages/_app.tsx
import { ThemeProvider } from "next-themes";

import type { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";
import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default MyApp;
