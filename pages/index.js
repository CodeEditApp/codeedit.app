import HomePage from '@/components/pages/home';

export default function Home(props) {
  return (
    <HomePage versionNumber={props.versionNumber} />
  );
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/CodeEditApp/CodeEdit/releases/latest');
  const data = await res.json();

  return {
    props: {
      versionNumber: data.tag_name,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
}
