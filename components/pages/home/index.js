import Ribbon from '@/components/common/Ribbon';
import { SectionDivider } from '@/components/common/layout';

import HeroSection from './sections/HeroSection';
import SocialSection from './sections/SocialSection';
import IntroFeaturesSection from './sections/IntroFeaturesSection';
import WhyUsSection from './sections/WhyUsSection';
import MoreFeaturesSection from './sections/MoreFeaturesSection';
import FeaturesSection from './sections/FeaturesSection';
import CtaSection from './sections/CtaSection';

export default function HomePage() {
  return (
    <div>
      <Ribbon
        onClick={() => {
          window.open('https://github.com/CodeEditApp/CodeEdit');
        }}
      >
        CodeEdit is currently in development. Check out the roadmap.
      </Ribbon>
      <HeroSection />
      <IntroFeaturesSection />
      <WhyUsSection />
      <FeaturesSection />
      <MoreFeaturesSection />
      <SectionDivider contained />
      <SocialSection />
      <CtaSection />
    </div>
  );
}
