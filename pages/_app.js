import "../styles/style.css";
import "../styles/animsition.min.css";
import "../styles/bootstrap-grid.min.css";
import "../styles/prism.css";
import Layout from "../components/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script type="text/javascript" src="/js/plugins.min.js"></script>
        <script type="text/javascript" src="/js/functions.js"></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
