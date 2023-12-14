import matter from 'gray-matter';
import glob from 'glob';

export { default } from '@/components/pages/blog/post';

export async function getStaticProps(context) {
  const { slug } = context.params;
  const config = await import(`../../data/config.json`);

  // retrieving the Markdown file associated to the slug
  // and reading its data
  const content = await import(`../../data/blog/${slug.join('/')}.md`);
  const data = matter(content.default);

  const res = await fetch(`https://api.github.com/users/${data.data.author}`);
  const author = await res.json();

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
  const paths = postSlugs.map((slugArray) => ({ params: { slug: slugArray } }));

  return {
    paths,
    fallback: false,
  };
}
