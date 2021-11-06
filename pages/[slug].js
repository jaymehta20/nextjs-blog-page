import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { createClient } from "contentful";
import Head from "next/head";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Skeleton from "../components/Skeleton";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blog",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  return {
    props: { blog: items[0] },
    revalidate: 864000,
  };
};

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
        return (
          <iframe
            src={node.data.target.fields.embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            scrolling="no"
            title={node.data.target.fields.title}
            allowFullScreen={true}
          />
        );
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return (
        <img
          src={`https://${node.data.target.fields.file.url}`}
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          alt={node.data.target.fields.description}
        />
      );
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      // if (
      //   node.content.length === 1 &&
      //   node.content[0].marks.find((x) => x.type === "code")
      // )
      if (node.content[0].marks.length) {
        return <pre className="language-html">{children}</pre>;
      }
      return <p>{children}</p>;
    },

    renderMark: {
      [MARKS.CODE]: (text) => {
        return (
          <SyntaxHighlighter
            language="html"
            style={tomorrow}
            showLineNumbers
            showInlineLineNumbers
          >
            {text}
          </SyntaxHighlighter>
        );
      },
    },
  },
};

const BlogDetails = ({ blog }) => {
  if (!blog) return <Skeleton />;
  const { title, date, desc, content, nextBlogLink } = blog.fields;

  return (
    <>
      <Head>
        <title>{title}</title>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js"
          integrity="sha512-YBk7HhgDZvBxmtOfUdvX0z8IH2d10Hp3aEygaMNhtF8fSOvBZ16D/1bXZTJV6ndk/L/DlXxYStP8jrF77v2MIg=="
          crossOrigin="anonymous"
        ></script>
      </Head>

      <main id="journal">
        <div className="spacer">
          <article className="single">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                  <div className="mar-top-lg">
                    <span className="time">{date}</span>
                    <h2 className="article-title">{title}</h2>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                  {documentToReactComponents(content, renderOptions)}
                </div>
              </div>
            </div>
            <div className="next-article">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-12">
                  <p>Next Article</p>
                  <h2>
                    <a>{documentToReactComponents(nextBlogLink)}</a>
                  </h2>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default BlogDetails;
