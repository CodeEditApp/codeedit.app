import { Section } from '@/components/common/layout';
import styled from 'styled-components';

import ArticleHeader from './ArticleHeader';
import ShareSheet from './ShareSheet';
import AboutAuthor from './AboutAuthor';
import Markdown from '@/components/common/Markdown';

const Article = styled.article`
  overflow: hidden;
  padding: 64px 0;

  .component {
    margin-left: auto;
    margin-right: auto;
    max-width: 980px;
  }

  .component-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 653px;

    @media only screen and (max-width: 1068px) {
      max-width: 576px;
    }
  }

  @media only screen and (max-width: 734px) {
    .pagebody + .sharesheet,
    .about-author,
    .article-header {
      margin-left: auto;
      margin-right: auto;
      width: 87.5%;
    }
  }
`;

const BlogPost = ({ frontmatter, markdownBody, siteTitle, author }) => {
  return (
    <Section gutter={false}>
      <Article>
        <ArticleHeader frontmatter={frontmatter} author={author} />
        <Markdown className="pagebody component">{markdownBody}</Markdown>
        <ShareSheet />
        {author && <AboutAuthor author={author} />}
      </Article>
    </Section>
  );
};

export default BlogPost;
