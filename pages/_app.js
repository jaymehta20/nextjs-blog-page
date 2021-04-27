import "../styles/style.css";
import "../styles/animsition.min.css";
import "../styles/bootstrap-grid.min.css";
import "../styles/prism.css";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
