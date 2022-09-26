import styled from 'styled-components';
import { Section } from '@/components/common/layout';
import Typography from '@/components/common/Typography';

const HeroSection = styled(Section)`
  text-align: center;
`;
const HeroIntro = styled(Typography)`
  width: 75%;
  margin: 0 auto;
  margin-top: 20px;
`;

export default function WhatsNewPage() {
  return (
    <div>
      <HeroSection contained gutterY>
        <Typography variant="headline" as="h1">
          What’s included in CodeEdit
        </Typography>
        <HeroIntro variant="intro">
          Learn about the key features available in CodeEdit, the code editor
          for building anything in any language. For detailed information on
          updates in the latest released versions, including each beta release,
          visit the <a>CodeEdit Release Notes</a>.
        </HeroIntro>
      </HeroSection>
      <Section contained gutterBottom>
        <Typography variant="headline-reduced">CodeEdit 1.0</Typography>
      </Section>
    </div>
  );
}
