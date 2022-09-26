
import Image from 'next/image';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import Typography from '@/components/common/Typography';
import { Row, Column, Section, Stack } from '@/components/common/layout';
import HeroImage from '../HeroImage';
import Button from '../../../common/Button';

const ProductIconWrap = styled.div`
  width: 128px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroSection = () => {
  return (
    <Parallax
      style={{ overflow: 'visible' }}
      renderLayer={(percentage) => {
        return (
          <Section contained gutterTop>
            <Row align="center" style={{ position: 'relative', zIndex: 1 }}>
              <Column width={{ md: 12, lg: 8 }}>
                <Stack gap={2} align="center">
                  <ProductIconWrap>
                    <Image
                      width={128}
                      height={128}
                      src="/product-icon.png"
                      alt="CodeEdit product icon"
                    />
                  </ProductIconWrap>
                  <Typography variant="headline" as="h1">
                    CodeEdit
                  </Typography>
                  <Typography variant="intro">
                    A code editor built by the community, for the community, written
                    entirely and unapologetically for macOS. Open-source, free
                    forever.
                  </Typography>
                  <Typography variant="body" color="tertiary" gutterBottom>
                    Features include syntax highlighting, code completion, project
                    find and replace, snippets, terminal, task running, debugging,
                    git integration, code review, extensions, and more.
                  </Typography>
                  <Button>Download Preview</Button>
                  <Typography variant="body-reduced" color="tertiary">v0.0.1 | macOS 13+</Typography>
                </Stack>
              </Column>
            </Row>
            <Row align="center">
              <Column>
                <HeroImage percentage={percentage} />
              </Column>
            </Row>
          </Section>
        )
      }}
    />
  );
}

export default HeroSection;
