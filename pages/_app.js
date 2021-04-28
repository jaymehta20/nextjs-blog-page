import "../styles/style.css";
import "../styles/bootstrap-grid.min.css";
import "../styles/prism.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
