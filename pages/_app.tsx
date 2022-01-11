import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { GOOGLE_ANALYTICS_ID } from "../src/config";
import "../styles/globals.scss";

function useGoogleAnalyticsTrackPageview(): void {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
      window.gtag("config", GOOGLE_ANALYTICS_ID);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
}

function MyApp({ Component, pageProps }: AppProps) {
  useGoogleAnalyticsTrackPageview();

  return (
    <>
      <Head>
        <title>OffsetMe</title>
        <meta
          name="description"
          content="Use your network to build something climate positive"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
