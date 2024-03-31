import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (<Provider store={store}>
    <Head>
      <title>Loofytech</title>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <meta name="google-site-verification" content="xdzlUk8gY5v47STF8YEX48lxXd-bowOi7ww9buHMAaY" />
    </Head>
    <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-0K0K6FHSZV" id="g-manager" />
    <Script strategy="lazyOnload" id="g-manager-datalayer">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0K0K6FHSZV', {
          page_path: window.location.pathname,
        });
      `}
    </Script>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </Provider>);
}
