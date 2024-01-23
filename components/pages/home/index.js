import Ribbon from '@/components/common/Ribbon';
import { SectionDivider } from '@/components/common/layout';

import HeroSection from './sections/HeroSection';
import SocialSection from '../../common/SocialSection';
import IntroFeaturesSection from './sections/IntroFeaturesSection';
import WhyUsSection from './sections/WhyUsSection';
import MoreFeaturesSection from './sections/MoreFeaturesSection';
import FeaturesSection from './sections/FeaturesSection';
import CtaSection from './sections/CtaSection';

import SampleStorySection from './sections/SampleStorySection';
import links from '@/data/links';
import Head from 'next/head';

export default function HomePage({ versionNumber }) {
  return (
    <>
      <Head>
        <meta
          property="og:description"
          content="A lightweight, natively built editor. Open source. Free forever."
        ></meta>
        <meta
          property="og:title"
          content="CodeEdit – A native code editor for macOS"
        ></meta>
        <meta
          property="og:image"
          content="https://www.codeedit.app/social-preview.jpg"
        ></meta>
        <meta
          property="og:description"
          content="A lightweight, natively built editor. Open source. Free forever."
        ></meta>
        <meta property="og:url" content="https://www.codeedit.app"></meta>
      </Head>
      <Ribbon onClick={() => window.open(links.githubProject)}>
        CodeEdit is currently in development. Check out the roadmap.
      </Ribbon>
      <HeroSection versionNumber={versionNumber} />
      <IntroFeaturesSection />
      {/* <SampleStorySection /> */}
      {/* <SampleStorySection /> */}
      {/* <WhyUsSection />
      <FeaturesSection />
      <MoreFeaturesSection />
      <SectionDivider contained /> */}
      {/* <SocialSection /> */}
      {/* <CtaSection /> */}
    </>
  );
}
