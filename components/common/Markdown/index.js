import { useMemo } from 'react';
import { visit } from 'unist-util-visit';
// or
// import "remark-github-alerts/styles/github-colors-dark-media.css"
import 'remark-github-alerts/styles/github-base.css';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import remarkGithubAlerts from 'remark-github-alerts';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx';
import swift from 'react-syntax-highlighter/dist/cjs/languages/prism/swift';

import { useSite } from '@/components/common/Site';
import oneDark from '@/data/syntax-dark';
import oneLight from '@/data/syntax-light';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('js', javascript);
SyntaxHighlighter.registerLanguage('jsx', jsx);
SyntaxHighlighter.registerLanguage('swift', swift);

const alertPlugin = () => {
  const alertTypes = [
    { id: 'note', label: 'Note', code: '[!NOTE]' },
    { id: 'tip', label: 'Tip', code: '[!TIP]' },
    { id: 'important', label: 'Important', code: '[!IMPORTANT]' },
    { id: 'warning', label: 'Warning', code: '[!WARNING]' },
    { id: 'caution', label: 'Caution', code: '[!CAUTION]' },
  ];

  return (tree) => {
    visit(tree, 'blockquote', (node) => {
      // Check if the first child of the blockquote is a paragraph containing '[!NOTE]'
      const firstChild = node.children[0];
      alertTypes.forEach((alertType) => {
        console.log(alertType);
        if (
          firstChild.type === 'paragraph' &&
          firstChild.children[0].value.startsWith(alertType.code)
        ) {
          // Remove the alertType.code marker
          firstChild.children[0].value = firstChild.children[0].value.replace(
            alertType.code,
            ''
          );
          console.log(firstChild.children[0].value);
          if (firstChild.children[0].value == '') {
            firstChild.children.shift();
          }

          if (firstChild.children[0]?.type === 'break') {
            firstChild.children.shift();
          }

          // Add a new paragraph at the top with 'Note'
          node.children.unshift({
            type: 'paragraph',
            children: [{ type: 'text', value: alertType.label }],
            data: { hProperties: { className: 'alert-label' } },
          });

          // Add class to blockquote
          node.data = { hProperties: { className: `alert ${alertType.id}` } };
        }
      });
    });
  };
};

const Markdown = ({ children, md }) => {
  const { colorScheme } = useSite();
  const syntaxTheme = useMemo(
    () => (colorScheme === 'dark' ? oneDark : oneLight),
    [colorScheme]
  );

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
          className="codeblock"
          wrapLines={hasMeta}
          useInlineStyles
          lineProps={applyHighlights}
        >
          {props.children}
        </SyntaxHighlighter>
      ) : (
        <code
          className={`${inline ? 'codeblock' : 'inline'} ${
            className ?? ''
          }`.trim()}
          {...props}
        />
      );
    },
  };

  return (
    <ReactMarkdown
      components={MarkdownComponents}
      remarkPlugins={[remarkGfm, alertPlugin]}
      rehypePlugins={[rehypeRaw]}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
