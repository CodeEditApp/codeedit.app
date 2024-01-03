import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Section, SectionDivider, Stack } from '@/components/common/layout';
import Typography from '@/components/common/Typography';
import Markdown from '@/components/common/Markdown';
import Button from '@/components/common/Button';
import Tile from '@/components/common/Tile';

const HeroSection = styled(Section)`
  text-align: center;
`;
const HeroIntro = styled(Typography)`
  width: 75%;
  margin: 0 auto;
  margin-top: 20px;
`;

function formatDate(fullDate) {
  const date = new Date(fullDate);
  return date.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function WhatsNewPage({ releases }) {
  useEffect(() => {
    console.log(releases);
  }, [releases]);
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
      {releases.map((release) => (
        <React.Fragment key={release.id}>
          <Section contained gutterTop gutterBottom>
            <Stack direction="horizontal" gap align="start">
              <Tile style={{ position: 'sticky', top: 96 }}>
                <Stack>
                  <Typography variant="eyebrow-super">
                    {release.name}
                  </Typography>
                  <Typography variant="body">
                    {formatDate(release.published_at)}
                  </Typography>
                  <Button>Download</Button>
                </Stack>
              </Tile>

              <Markdown>{release.body}</Markdown>
            </Stack>
          </Section>
          <SectionDivider contained />
        </React.Fragment>
      ))}
    </div>
  );
}
