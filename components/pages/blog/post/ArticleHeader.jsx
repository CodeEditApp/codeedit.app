import Image from "next/image";
import ShareSheet from "./ShareSheet";

function formatDate(fullDate) {
  const date = new Date(fullDate);
  return date.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

const ArticleHeader = ({ frontmatter, author }) => {
  return (
    <div className="article-header">
      <div className="category component">
        <div className="component-content">
          <div className="category-eyebrow">
            <span className="category-eyebrow__category category_update">
              UPDATE
            </span>
            <span className="category-eyebrow__date">
              {formatDate(frontmatter.date)}
            </span>
          </div>
        </div>
      </div>
      <div className="pagetitle component">
        <div className="component-content">
          <h1 className="hero-headline">
            {frontmatter.headline ?? frontmatter.title}
          </h1>
        </div>
      </div>
      <div className="article-subhead component">
        <div className="component-content">{frontmatter.subhead}</div>
      </div>
      <div className="author component">
        <div className="component-content">
          <div className="author-content">
            <Image
              width="24"
              height="24"
              className="author-image"
              src={author.avatar_url}
              alt={`${author.name} user image`}
            />
            <span className="author-text">{author.name}</span>
          </div>
        </div>
      </div>
      <ShareSheet />
    </div>
  );
};

export default ArticleHeader;
