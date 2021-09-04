import Layout from "../components/Layout";
import "../styles/bootstrap-grid.min.css";
import "../styles/prism.css";
import "../styles/style.css";

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
