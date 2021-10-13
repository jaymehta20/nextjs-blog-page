import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <script type="text/javascript" src="/js/plugins.min.js" />
        <script type="text/javascript" src="/js/functions.js" />
      </Head>

      <div className="wrap">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
