import { createClient } from "contentful";
import Head from "next/head";
import BlogCard from "../components/BlogCard";
import { animate, motion } from "framer-motion";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      blogs: res.items,
    },
    revalidate: 1,
  };
}
const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 1,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
  exit: {
    y: -60,
    opacity: 0,
  },
};
const Blog = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Blog | Codegrain</title>
      </Head>
      <motion.div exit="exit" initial="initial" animate="animate">
        <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
          <main id="journal">
            <div className="spacer">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <div className="page-intro mar-top-lg">
                      <h1 className="page-title">Blog</h1>
                      <p>
                        Sharing super ideas in simple, minimal & elegant way.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="articles-list mar-top-lg">
                  <div className="grids">
                    {blogs.map((blog) => (
                      <BlogCard key={blog.sys.id} blog={blog} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Blog;
