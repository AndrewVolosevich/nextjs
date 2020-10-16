import Head from "next/head";
import "../../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
