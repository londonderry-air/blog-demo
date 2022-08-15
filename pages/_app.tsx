import "../styles/globals.css";
import "../styles/markdown.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { MainLayout } from "../components/layouts/main";
import { PortfolioHead } from "../components/molucules/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <PortfolioHead />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </RecoilRoot>
  );
}
export default MyApp;
