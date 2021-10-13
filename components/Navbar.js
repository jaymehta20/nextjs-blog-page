import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <a className="logo" href="/"></a>
            <nav>
              <ul>
                <li>
                  <Link href="/">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Work</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <span className="nav-toggle">Menu</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
