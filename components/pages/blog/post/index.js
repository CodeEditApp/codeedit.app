import { Section } from '@/components/common/layout';
import styled from 'styled-components';

import ArticleHeader from './ArticleHeader';
import ShareSheet from './ShareSheet';
import AboutAuthor from './AboutAuthor';
import Markdown from '@/components/common/Markdown';

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
        gap: 1.1579em;
        margin-top: 1.4211em;
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

    *:not(pre):not(.codeblock) > code {
      background: var(--fill-gray-quaternary);
      padding: 0.2em 0.4em;
      margin: 0;
      border-radius: 0.25em;
      white-space: break-spaces;
      font-size: 85%;
    }

    pre {
      width: 653px;
      margin: 28px auto;
      font-size: 15px;
      line-height: 25px;
      font-weight: 400;

      & > code {
        display: block;
        color: var(--color-syntax-plain-text);
        background: var(--color-syntax-background);
        font-family: 'SF Mono', SFMono-Regular, ui-monospace, Menlo, monospace;
        direction: ltr;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        line-height: 1.666;
        tab-size: 4;
        hyphens: none;
        padding: 0.5333em 0.9333em;
        margin: 0.5em 0px;
        overflow: auto;
        border-radius: 15px;
      }

      & > .codeblock {
        border-radius: 15px;
      }
    }

    p,
    li,
    th,
    td,
    code,
    figcaption {
      & > a {
        &:hover {
          text-decoration: underline;
        }
      }
    }

    table {
      width: 653px;
      margin: 44px auto;
      border-spacing: 0;
      th,
      td {
        padding: 0.75em 0;
        border-bottom: 1px solid var(--separator-secondary-color);
        font-size: 17px;
        line-height: 25px;
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

    blockquote:not(.alert) {
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

      p,
      blockquote {
        margin-bottom: 0.7895em;
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
          top: 0.125em;
          bottom: 0.125em;
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

    blockquote.alert {
      width: 656px;
      margin: 28px auto;
      
      break-inside: avoid;
      border-radius: var(--aside-border-radius, 15px);
      border-style: var(--aside-border-style, solid);
      border-width: var(--aside-border-width, 1px 1px 1px 1px);
      padding: 0.9411764706rem;
      box-sizing: border-box;
      text-align: start;
      p {
        margin-top: 0.4em;
        margin-bottom: 0;
        width: auto;

        &:first-child {
          margin: 0;
        }
        &.alert-label {
          font-size: 1rem;
          line-height: 1.5294417647;
          font-weight: 600;
          letter-spacing: -.021em;
        }
      }
      &.note {
        background-color: var(--color-alert-note-background);
        border-color: var(--color-alert-note-border);
        box-shadow:
          0 0 1px 0 var(--color-alert-note-border) inset,
          0 0 1px 0 var(--color-alert-note-border);
        p.alert-label {
          color: var(--color-alert-note);
        }
      }
      &.tip {
        background-color: var(--color-alert-tip-background);
        border-color: var(--color-alert-tip-border);
        box-shadow:
          0 0 1px 0 var(--color-alert-tip-border) inset,
          0 0 1px 0 var(--color-alert-tip-border);
        p.alert-label {
          color: var(--color-alert-tip);
        }
      }
      &.important {
        background-color: var(--color-alert-important-background);
        border-color: var(--color-alert-important-border);
        box-shadow:
          0 0 1px 0 var(--color-alert-important-border) inset,
          0 0 1px 0 var(--color-alert-important-border);
        p.alert-label {
          color: var(--color-alert-important);
        }
      }
      &.warning {
        background-color: var(--color-alert-warning-background);
        border-color: var(--color-alert-warning-border);
        box-shadow:
          0 0 1px 0 var(--color-alert-warning-border) inset,
          0 0 1px 0 var(--color-alert-warning-border);
        p.alert-label {
          color: var(--color-alert-warning);
        }
      }
      &.caution {
        background-color: var(--color-alert-caution-background);
        border-color: var(--color-alert-caution-border);
        box-shadow:
          0 0 1px 0 var(--color-alert-caution-border) inset,
          0 0 1px 0 var(--color-alert-caution-border);
        p.alert-label {
          color: var(--color-alert-caution);
        }
      }
      }
    }

    section.footnotes {
      ol {
        padding: 0;
        list-style-position: inside;
      }
      li::marker,
      li p {
        font-size: 0.7895em;
        width: auto;
        margin: 0;
        display: inline-block;
      }
      li::marker {
        float: left;
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

const BlogPost = ({ frontmatter, markdownBody, siteTitle, author }) => {
  return (
    <Section gutter={false}>
      <Article>
        <ArticleHeader frontmatter={frontmatter} author={author} />

        <div className="pagebody component">
          <Markdown>{markdownBody}</Markdown>
        </div>

        <ShareSheet />
        {author && <AboutAuthor author={author} />}
      </Article>
    </Section>
  );
};

export default BlogPost;
