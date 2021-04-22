import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="wrap">
        <main className="custom-pad">
          <div className="container">
            <div className="mar-top-lg">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="mar-bot-xs">
                    <div className="page-content-image">
                      <img
                        src="../public/img/blog/blog-1-cover.jpg"
                        alt="Error"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 offset-lg-1 col-md-10">
                  <div className="page-content">
                    <h1>404!</h1>
                    <p className="lead">Seems like you are lost.</p>
                    <h2>
                      Lets get you <Link href="/">
                        <a>Home</a>
                      </Link>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotFound;
