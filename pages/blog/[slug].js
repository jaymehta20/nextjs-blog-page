import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import Skeleton from "../../components/Skeleton";

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
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { blog: items[0] },
    revalidate: 1,
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
  },
};

const BlogDetails = ({ blog }) => {
  if (!blog) return <Skeleton />;
  const { featuredImage, title, date, desc, content } = blog.fields;
  console.log(blog);

  return (
    <>
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
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 ">
                  <div className="blog-detail-img">
                    {documentToReactComponents(content, renderOptions)}
                  </div>
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
