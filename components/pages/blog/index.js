import { Section } from '@/components/common/layout';
import Typography from '@/components/common/Typography';
import Link from 'next/link';

export default function BlogPage({ posts }) {
  // console.log(posts);
  return (
    <Section contained gutterY>
      <Typography variant="headline">Blog</Typography>
      <ul>
        {posts.map((post) => (
          <li key={post.date + post.slug}>
            <Link href={post.url}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
