import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mar-top-lg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-3 col-sm-12">
            <Link href="/">
              <a className="logo"></a>
            </Link>
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
  );
};

export default Footer;
