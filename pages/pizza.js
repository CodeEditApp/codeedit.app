import matter from 'gray-matter';
import BlogPost from '@/components/pages/blog/post';

export async function getStaticProps() {
  const content = await import('@/data/pizza.md');
  const data = await matter(content.default);
  
  return {
    props: {
      frontmatter: {
        ...data.data,
        date: new Date().toISOString(),
      },
      markdownBody: data.content,
    }
  };
}

export default function Pizza({ frontmatter, markdownBody }) {
  return <BlogPost frontmatter={frontmatter} markdownBody={markdownBody} />;
}
