import Layout from "../components/Layout";
import "../styles/bootstrap-grid.min.css";
import "../styles/prism.css";
import "../styles/style.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Blog | Codegrain</title>
        <meta
          content="We strategically design beautiful brands, websites, and digital products that actually work."
          property="og:description"
        ></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
