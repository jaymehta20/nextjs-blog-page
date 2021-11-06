import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  const { thumbnail, title, desc, date, slug } = blog.fields;

  return (
    <article>
      <Link href={"/" + slug}>
        <a>
          <div className="article-image">
            <div className="icon-arrow"></div>
            <Image
              src={"https:" + thumbnail.fields.file.url}
              width={thumbnail.fields.file.details.image.width}
              height={thumbnail.fields.file.details.image.height}
              alt={title}
            />
          </div>
          <div className="article-text">
            <h4 className="title">{title}</h4>
            <p>{desc}</p>
            <span className="time">{date}</span>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default BlogCard;
