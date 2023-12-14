import { writeFileSync } from 'fs';

import { globby } from 'globby';
import prettier from 'prettier';

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'pages/*.tsx',
    'pages/*.jsx',
    'pages/*.js',
    'data/**/*.mdx',
    'data/**/*.md',
    '!data/*.mdx',
    '!pages/_*.tsx',
    '!pages/_*.js',
    '!pages/_*.jsx',
    '!pages/api',
    '!pages/404.tsx',
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace('pages', '')
              .replace('data', '')
              .replace('.tsx', '')
              .replace('.ts', '')
              .replace('.jsx', '')
              .replace('.js', '')
              .replace('.md', '')
              .replace('.mdx', '');
            const route = path === '/index' ? '' : path;
            return `
              <url>
                  <loc>${`https://codeedit.app${route}`}</loc>
              </url>
            `;
          })
          .join('')}
    </urlset>
    `;

  // const formatted = prettier.format(sitemap, {
  //   ...prettierConfig,
  //   parser: 'html',
  // });

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', sitemap);
}

generate();
