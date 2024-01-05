import links from '@/data/links';

const navigation = [
  {
    href: '/',
    label: 'Overview',
  },
  {
    href: '/whats-new',
    label: 'What’s New',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  // {
  //   href: '/resources',
  //   label: 'Resources',
  // },
  // {
  //   href: '/developer',
  //   label: 'Developer',
  // },
  // {
  //   href: '/extensions',
  //   label: 'Extensions',
  // },
  {
    href: links.githubRepo,
    label: 'GitHub',
  },
];

export default navigation;
