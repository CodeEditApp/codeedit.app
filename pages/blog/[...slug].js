import { useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import glob from 'glob';
import { Section } from '@/components/common/layout';
import Typography from '@/components/common/Typography';
import styled from 'styled-components';
import XSvg from '@/assets/x-icon.svg';
import GitHubSvg from '@/assets/github-icon.svg';
import FacebookSvg from '@/assets/facebook-icon.svg';
import { Globe, Link, Mail } from 'react-feather';
import remarkGfm from 'remark-gfm';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import oneDark from '@/data/syntax-dark';
import oneLight from '@/data/syntax-light';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import { useSite } from '@/components/common/Site';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);

const Article = styled.article`
  overflow: hidden;
  padding: 44px 0;

  .component {
    margin-top: 44px;
    margin-bottom: 44px;
    margin-left: auto;
    margin-right: auto;
    max-width: 980px;
  }

  .component-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 653px;
  }

  .category.component {
    margin-top: 0;
    margin-bottom: 20px;
  }

  .category-eyebrow__category,
  .category-eyebrow__date {
    display: block;
  }

  .category-eyebrow {
    font-size: 12px;
    line-height: 1.33337;
    font-weight: 700;
    letter-spacing: -0.01em;
    font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
      'Arial', sans-serif;
  }

  .category-eyebrow__date {
    margin-top: 4px;
  }

  .category-eyebrow__date {
    font-size: 14px;
    line-height: 1.28577;
    font-weight: 600;
    letter-spacing: -0.016em;
    font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
      'Arial', sans-serif;
  }

  .pagetitle.component {
    margin-top: 0;
    margin-bottom: 0;
  }

  .pagetitle .hero-headline {
    font-size: 48px;
    line-height: 1.08349;
    font-weight: 700;
    letter-spacing: -0.003em;
    font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
      'Arial', sans-serif;
  }

  .article-subhead {
    font-size: 24px;
    line-height: 1.16667;
    font-weight: 500;
    letter-spacing: 0.009em;
    font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
      'Arial', sans-serif;
    margin-top: 20px;
    margin-bottom: 0;
  }

  .author.component {
    margin-top: 20px;
    margin-bottom: 0;
  }

  .author-content {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .author-image {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  .author-text {
    font-size: 14px;
    line-height: 1.28577;
    font-weight: 600;
    letter-spacing: -0.016em;
    font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
      'Arial', sans-serif;
  }

  .sharesheet.component {
    margin-top: 32px;
    margin-bottom: 40px;
  }

  .sharesheet-options {
    display: inline-flex;
    justify-content: flex-start;
    /* color: #6e6e73; */
    height: 71px;
  }

  .sharesheet.component .sharesheet-options,
  .headersplitview .sharesheet-options {
    height: 42px;
    overflow: visible;
  }

  .sharesheet .social-option {
    position: relative;
    z-index: 2;
    list-style: none;
    opacity: 1;
    display: block;
    opacity: 0.5;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.25, 1) 0ms;
    &:hover {
      opacity: 1;
    }
  }

  .sharesheet-options .social-option {
    margin-top: 12px;
  }

  .sharesheet .social-option:first-child .social-icon {
    margin-left: -8px;
  }

  button {
    background: none;
    border: 0;
    box-sizing: content-box;
    color: inherit;
    cursor: pointer;
    font: inherit;
    line-height: inherit;
    overflow: visible;
    vertical-align: inherit;
  }

  .sharesheet .social-option .social-icon {
    font-size: 24px;
    line-height: 24px;
    width: 24px;
    height: 24px;
    padding: 6px;
    margin-top: -6px;
    margin-bottom: -6px;
    svg {
      width: 18px;
      height: 18px;
    }
  }

  .sharesheet .social-option:first-child .social-icon {
    margin-left: -8px;
  }

  .sharesheet-options .social-option:first-child .social-icon {
    margin-left: -8px;
  }

  .sharesheet .sharesheet-options-open,
  .sharesheet .sharesheet-options-close {
    line-height: 1em;
    padding: 0;
  }

  .sharesheet-options-close,
  .sharesheet-options-open {
    display: none;
  }

  .sharesheet-link-container {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    overflow: hidden;
  }

  .sharesheet-link-container {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    opacity: 0.01;
    background-color: #f5f5f7;
    white-space: normal;
    text-align: left;
    top: 100%;
    z-index: -1;
  }

  .about-author {
    .component-content {
      border-top: 1px solid var(--separator-color);
      padding-top: 52px;
      .author-container {
        display: flex;
        gap: 22px;
        margin-top: 28px;
      }
      img.author-image {
        width: 96px;
        height: 96px;
        border-radius: 50%;
      }
      .author-info {
        font-size: 14px;
        line-height: 1.42859;
        font-weight: 500;
        letter-spacing: -0.016em;
        font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
          'Helvetica', 'Arial', sans-serif;
        box-sizing: border-box;
        word-wrap: break-word;
        display: inline-block;
        vertical-align: top;
      }
      .author-info-title {
        font-size: 19px;
        line-height: 1.21053;
        font-weight: 700;
        letter-spacing: 0.012em;
        font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',
          'Helvetica', 'Arial', sans-serif;
        margin-bottom: 3px;
      }
      .author-info-name {
        margin-bottom: 3px;
      }
      .author-info-location {
        margin-top: -2px;
        margin-bottom: 3px;
        opacity: 0.65;
      }
      .author-info-bio {
        margin-bottom: 3px;
      }
      .author-social {
        margin-top: 12px;
        .author-social-link {
          margin-right: 16px;
          svg {
            width: 16px;
            height: 16px;
          }
        }
      }
    }
  }

  .pagebody {
    p {
      font-size: 19px;
      line-height: 1.4211;
      font-weight: 400;
      letter-spacing: 0.012em;
      font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',
        'Helvetica', 'Arial', sans-serif;
      margin-bottom: 1.4211em;

      &:not(:has(img)) {
        margin-left: auto;
        margin-right: auto;
        width: 653px;
      }
    }

    img {
      display: block;
      /* max-width: 100%; */
      max-width: 653px;
      margin: 44px auto;

      &.wide {
        width: 100%;
        max-width: 100%;
      }

      &.full-width {
        width: 100vw;
        max-width: 100vw;
        left: 50%;
        position: relative;
        transform: translateX(-50%);
      }
    }

    pre {
      width: 653px;
      margin: 44px auto;
      font-size: 15px;
      line-height: 25px;
      font-weight: 400;
      .codeStyle {
        border-radius: 15px;
        .linenumber {
          font-style: normal !important;
          font-size: 85%;
        }
      }
    }

    & :not(.codeStyle) > code {
      background: var(--fill-gray-quaternary);
      padding: 0.2em 0.4em;
      margin: 0;
      border-radius: 0.25em;
      white-space: break-spaces;
      font-size: 90%;
    }
    & :not(.codeStyle):not(td) > code {
      font-size: 90%;
    }

    table {
      width: 653px;
      margin: 44px auto;
      border-spacing: 0;
      th,
      td {
        padding: 0.75em 0;
        border-bottom: 1px solid var(--separator-secondary-color);
      }
      th {
        border-bottom: 1.5px solid var(--label-tertiary-color);
      }
    }

    figure {
      margin-top: 44px;
      margin-bottom: 44px;

      img {
        margin-top: 0;
        margin-bottom: 0;
      }

      figcaption {
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        color: #6e6e73;
        margin: 16px auto 0;
        font-size: 12px;
        line-height: 1.33337;
        font-weight: 600;
        letter-spacing: -0.01em;
        font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
          'Helvetica', 'Arial', sans-serif;
        width: 653px;
        &.centered {
          display: block;
          text-align: center;
        }
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      width: 656px;
      margin: 1.25em auto 20px auto;
    }

    hr {
      width: 656px;
      margin: 44px auto 44px auto;
      display: block;
      border: 0;
      border-top: 1px solid var(--separator-color);
    }

    h1 {
      font-size: 48px;
    }

    h2 {
      font-size: 32px;
    }

    h3 {
      font-size: 24px;
    }

    h4 {
      font-size: 19px;
    }

    /* ul, ol {
      font-size: 19px;
      width: 656px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1.4211em;
      list-style-position: inside;
      display: table;
      & > li {
        display: table-row;
        &:before {
          content: "•";
          display: table-cell;
          padding-bottom: 0.5em;
          padding-right: 0.5em;
          width: 0;
          text-align: right;
        }
      }
    }

    ol {
      counter-reset: foo;
      display: table;
      & > li {
        counter-increment: foo;
        &:before {
            content: counter(foo) ".";

        }
      }
    } */

    ul,
    ol {
      padding-left: 2em;
      box-sizing: border-box;
      font-size: 19px;
      width: 656px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1.4211em;
      li {
        margin-top: 0.5em;
        & > ul,
        & > ol {
          margin-bottom: 0;
        }
      }
    }

    blockquote {
      width: 656px;
      margin-left: auto;
      margin-right: auto;
      padding-left: calc(1em + 4px);
      box-sizing: border-box;
      font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',
        'Helvetica', 'Arial', sans-serif;
      position: relative;

      & p {
        width: 100%;
      }

      &:not(.wide):not(.full-width) {
        font-size: 19px;
        line-height: 1.4211;
        font-weight: 400;
        letter-spacing: 0.012em;
        font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',
          'Helvetica', 'Arial', sans-serif;
        margin-bottom: 1.4211em;
        color: var(--label-tertiary-color);
        &:before {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          top: 0.25em;
          bottom: 0.25em;
          border-left: 4px solid var(--separator-color);
        }
      }

      &.wide,
      &.full-width {
        text-align: center;
        text-wrap: balance;
        font-size: 40px;
        margin-top: 72px;
        margin-bottom: 72px;
        line-height: 1.1;
        font-weight: 700;
        letter-spacing: 0em;

        &:not(:has(p)):before,
        &:not(:has(p)):after,
        & p:first-child:before,
        & p:last-child:after {
          display: inline-block;
          width: 2em;
        }

        &:not(:has(p)):before,
        & p:first-child:before {
          margin-left: -2em;
          text-align: right;
          /* visibility: hidden; */
          content: '“';
        }

        &:not(:has(p)):after,
        & p:last-child:after {
          margin-right: -2em;
          text-align: left;
          /* visibility: hidden; */
          content: '”';
        }
      }

      &.wide {
        width: 100%;
      }

      &.full-width {
        width: 100vw;
        left: 50%;
        position: relative;
        transform: translateX(-50%);
        padding: 2em 1em;
        background: var(--background-secondary-color);
        box-sizing: border-box;
      }
    }
  }

  @media only screen and (max-width: 1068px) {
    .pagebody {
      &,
      p,
      li,
      th,
      td,
      & blockquote:not(.wide):not(.full-width) {
        font-size: 17px;
        line-height: 1.47059;
        font-weight: 400;
        letter-spacing: -0.022em;
        font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
          'Helvetica', 'Arial', sans-serif;
      }
      th,
      td {
        font-size: 15px;
      }
      pre {
        font-size: 13px;
      }
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
    .pagebody {
      p:not(:has(img)),
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      ul,
      ol,
      table,
      figure figcaption,
      pre,
      hr,
      & blockquote:not(.wide):not(.full-width) {
        margin-left: auto;
        margin-right: auto;
        width: 87.5%;
      }
      img:not(.full-width) {
        margin-left: auto;
        margin-right: auto;
        max-width: 87.5%;
      }
    }
  }
`;

function reformatDate(fullDate) {
  const date = new Date(fullDate);
  return date.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogTemplate({
  frontmatter,
  markdownBody,
  siteTitle,
  author,
}) {
  const { colorScheme } = useSite();
  const syntaxTheme = useMemo(
    () => (colorScheme === 'dark' ? oneDark : oneLight),
    [colorScheme]
  );

  useEffect(() => {
    console.log(colorScheme);
  }, [colorScheme]);

  const MarkdownComponents = {
    code({ node, inline, className, ...props }) {
      const hasLang = /language-(\w+)/.exec(className || '');
      const hasMeta = node?.data?.meta;

      const applyHighlights = (applyHighlights) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/;
          const metadata = node.data.meta?.replace(/\s/g, '');
          const strlineNumbers = RE?.test(metadata)
            ? RE?.exec(metadata)[1]
            : '0';
          const highlightLines = rangeParser(strlineNumbers);
          const highlight = highlightLines;
          const data = highlight.includes(applyHighlights) ? 'highlight' : null;
          return { data };
        } else {
          return {};
        }
      };

      return hasLang ? (
        <SyntaxHighlighter
          style={syntaxTheme}
          language={hasLang[1]}
          PreTag="div"
          className="codeStyle"
          // showLineNumbers
          wrapLines={hasMeta}
          useInlineStyles
          lineProps={applyHighlights}
        >
          {props.children}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props} />
      );
    },
  };

  return (
    <Section gutter={false}>
      <Article>
        <ArticleHeader frontmatter={frontmatter} author={author} />

        <div className="pagebody component">
          <ReactMarkdown
            components={MarkdownComponents}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {markdownBody}
          </ReactMarkdown>
        </div>

        <ShareSheet />

        <AboutAuthor author={author} />
      </Article>
    </Section>
  );
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
              {reformatDate(frontmatter.date)}
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

const AboutAuthor = ({ author }) => {
  if (!author) return;

  return (
    <div className="about-author component">
      <div className="component-content">
        <h2 className="about-author-headline">About the Author</h2>
        <div className="author-container">
          <Image
            className="author-image"
            width="128"
            height="128"
            src={author.avatar_url}
            alt={`${author.name} user image`}
          />
          <div className="author-info">
            <p className="author-info-title">{author.name}</p>
            <p className="author-info-text">{author.location}</p>
            <p className="author-info-text">{author.bio}</p>
            <div className="author-social">
              <a
                className="author-social-link"
                href={author.blog}
                target="_blank"
              >
                <Globe />
              </a>
              <a
                className="author-social-link"
                href={`https://github.com/${author.login}`}
                target="_blank"
              >
                <GitHubSvg />
              </a>
              <a
                className="author-social-link"
                href={`https://x.com/${author.twitter_username}`}
                target="_blank"
              >
                <XSvg />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShareSheet = () => {
  const shareLinkInputRef = useRef();
  const shareViaMail = () => {
    var subject = 'CodeEdit Blog Post';
    var body = window.location.href;
    var uri = 'mailto:?subject=';
    uri += encodeURIComponent(subject);
    uri += '&body=';
    uri += encodeURIComponent(body);
    window.open(uri);
  };

  function shareViaLink() {
    navigator.clipboard.writeText(window.location.href).then(
      function (data) {
        console.log('Copying to clipboard was successful!', data);
      },
      function (err) {
        console.log('Could not copy text: ', err);
      }
    );
  }

  return (
    <div className="sharesheet component">
      <div className="component-content">
        <div className="sharesheet-content tooltip-wrapper">
          <ul className="sharesheet-options">
            <li className="social-option">
              <button
                className="icon icon-facebook social-icon"
                title="Share via Facebook"
                aria-label="Share this article via Facebook (opens in new window)"
                onClick={() =>
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
                  )
                }
              >
                <FacebookSvg />
              </button>
            </li>
            <li className="social-option">
              <button
                className="icon icon-twitter social-icon"
                title="Share via Twitter"
                aria-label="Share this article via Twitter (opens in new window)"
                onClick={() =>
                  window.open(
                    `https://x.com/intent/tweet?url=${window.location.href}`
                  )
                }
              >
                <XSvg />
              </button>
            </li>
            <li className="social-option">
              <button
                className="icon icon-mail social-icon"
                title="Share via mail"
                aria-label="Share this article via Mail (opens in new window)"
                onClick={shareViaMail}
              >
                <Mail />
              </button>
            </li>
            <li className="social-option">
              <button
                className="icon icon-link social-icon"
                title="Share via link"
                aria-label="Share via link"
                onClick={shareViaLink}
              >
                <Link />
              </button>
            </li>
          </ul>
          <div className="sharesheet-link-container" aria-hidden="true">
            <div className="sharesheet-link-content">
              <input
                ref={shareLinkInputRef}
                className="link-text"
                value={
                  typeof window !== 'undefined' ? window.location.href : ''
                }
                tabindex="-1"
                readonly=""
                aria-hidden="true"
                disabled="disabled"
              />
              <button
                className="icon icon-close sharesheet-link-close"
                title="close"
                aria-label="close link"
                tabindex="-1"
                aria-hidden="true"
                role="button"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  // extracting the slug from the context
  const { slug } = context.params;

  const config = await import(`../../data/config.json`);

  // retrieving the Markdown file associated to the slug
  // and reading its data
  const content = await import(`../../data/blog/${slug.join('/')}.md`);
  const data = matter(content.default);

  const res = await fetch(`https://api.github.com/users/${data.data.author}`);
  const author = await res.json();
  console.log('author', data.data.author, author);

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
      author,
    },
  };
}

export async function getStaticPaths() {
  // getting all .md files from the blog directory, including subdirectories
  const posts = glob.sync('data/blog/**/*.md');
  // converting the file paths to nested slugs (e.g., ['2023', '04', 'my-test-post'])
  const postSlugs = posts.map((file) => {
    // Split the file path and remove the first 'data/blog' part and '.md' extension
    const pathParts = file.split('/').slice(2);
    // Remove the '.md' extension from the last part (post title)
    pathParts[pathParts.length - 1] = pathParts[pathParts.length - 1].replace(
      /\.md$/,
      ''
    );
    // Replace spaces with hyphens in each part
    return pathParts.map((part) => part.replace(/ /g, '-'));
  });
  // creating a path for each of the nested `slug` parameter
  const paths = postSlugs.map((slugArray) => {
    return { params: { slug: slugArray } };
  });

  return {
    paths,
    fallback: false,
  };
}
