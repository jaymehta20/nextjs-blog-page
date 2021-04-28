import Link from "next/link";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <script type="text/javascript" src="/js/plugins.min.js"></script>
        <script type="text/javascript" src="/js/functions.js"></script>
      </Head>

      <div className="wrap">
        <header>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <a className="logo smooth-leave" href="/"></a>
                <nav>
                  <ul>
                    <li>
                      <Link className="smooth-leave" href="/">
                        <a className="smooth-leave">About</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className="smooth-leave">Services</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className="smooth-leave">Work</a>
                      </Link>
                    </li>
                    <li>
                      <Link className="smooth-leave" href="/">
                        <a className="smooth-leave">Blog</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a className="smooth-leave">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <span className="nav-toggle">Menu</span>
              </div>
            </div>
          </div>
        </header>
        {children}
        <footer className="mar-top-lg">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-3 col-sm-12">
                <a className="logo smooth-leave" href="./index.html"></a>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="footer-contacts">
                  <div className="wrap">
                    <div className="address">
                      <p>
                        City
                        <br />
                        State, Country
                      </p>
                    </div>
                    <a className="email" href="mailto:codegrain@gmail.com">
                      fake@gmail.com
                    </a>
                    <br />
                    <a className="phone" href="tel:+919022332201">
                      +91 111-222-6969
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 col-sm-12">
                <div className="social-links">
                  <ul>
                    <li>
                      <a target="_blank" rel="noreferrer" href="#">
                        ig
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="#">
                        tw
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="#">
                        Bē
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer" href="#">
                        yt
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
