import { Section } from '@/components/common/layout';
import styled from 'styled-components';

import ArticleHeader from './ArticleHeader';
import ShareSheet from './ShareSheet';
import AboutAuthor from './AboutAuthor';
import Markdown from '@/components/common/Markdown';
import Head from 'next/head';

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
      <Head>
        <title>
          {frontmatter.title ?? frontmatter.headline} | {siteTitle} Blog
        </title>
        <meta
          name="description"
          content={frontmatter.description ?? frontmatter.subhead}
        />
        <meta
          property="og:title"
          content={`${
            frontmatter.title ?? frontmatter.headline
          } | ${siteTitle} Blog`}
        />
        <meta
          property="og:description"
          content={frontmatter.description ?? frontmatter.subhead}
        />
        {!!frontmatter.draft && (
          <meta name="robots" content="noindex,nofollow" />
        )}
      </Head>
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
