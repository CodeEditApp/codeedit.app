import matter from 'gray-matter';
import glob from 'glob';

export { default } from '@/components/pages/blog';

const getDate = (str) => new Date(str).toISOString();

export async function getStaticProps() {
  const config = await import(`../../data/config.json`);

  const paths = glob.sync('data/blog/**/*.md');

  console.log(paths);

  let posts = await Promise.all(
    paths.map(async (path) => {
      // Remove "data" from beginning of string and ".md" from end for URL
      const url = path.slice(4, -3);
      // retrieving the Markdown file associated to the slug
      // and reading its data
      const content = await import(`../../${path}`);
      const frontmatter = matter(content.default)?.data;

      const res = await fetch(
        `https://api.github.com/users/${frontmatter.author}`
      );
      const author = await res.json();

      const pathComponents = path.split('/');
      const slug = pathComponents[pathComponents.length - 1];

      return {
        ...frontmatter,
        date: getDate(frontmatter.date),
        slug,
        url,
        path,
        author,
      };
    })
  );

  posts = posts.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

  return {
    props: {
      siteTitle: config.title,
      posts,
    },
  };
}
