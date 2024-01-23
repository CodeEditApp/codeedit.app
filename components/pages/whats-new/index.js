import React from 'react';
import styled from 'styled-components';
import { Section } from '@/components/common/layout';
import Typography from '@/components/common/Typography';
import Button from '@/components/common/Button';
import { Menu, MenuItem } from '@/components/common/Menu';
import { ChevronDown } from 'react-feather';
import { useRouter } from 'next/router';
import Release from './Release';
import Head from 'next/head';

const HeroSection = styled(Section)`
  text-align: center;
`;
const HeroIntro = styled(Typography)`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
`;
const HighlightedText = styled.span`
  position: relative;
  -webkit-text-fill-color: #0000;
  background: linear-gradient(120deg, #a972ff, #2997ff 50%, #43b9b9);
  -webkit-background-clip: text;
  background-clip: text;
  color: #2997ff;
  [data-color-scheme='dark'] & {
    text-shadow: 0 0 0.75em #2997ff;
  }
`;

export default function WhatsNewPage({ releases }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>What&apos;s New | CodeEdit</title>
        <meta
          property="description"
          content="The CodeEdit blog is the source for news about CodeEdit. Read project news, get updates, and read about community progress."
        ></meta>
        <meta property="og:title" content="What's New | CodeEdit"></meta>
        <meta
          property="og:description"
          content="The CodeEdit blog is the source for news about CodeEdit. Read project news, get updates, and read about community progress."
        ></meta>
        <meta property="og:url" content="https://www.codeedit.app/blog"></meta>
        <meta
          property="og:description"
          content="A lightweight, natively built editor. Open source. Free forever."
        ></meta>
        <meta
          property="og:image"
          content="https://www.codeedit.app/social-preview.jpg"
        ></meta>
      </Head>
      <HeroSection contained gutterY={12}>
        <Typography variant="headline-elevated" as="h1">
          What’s <HighlightedText>New</HighlightedText>
        </Typography>
        <HeroIntro variant="intro-elevated" gutter>
          Learn about the latest features available for CodeEdit. For detailed
          information on updates in the latest released versions, visit the{' '}
          <a href="https://www.github.com/CodeEditApp/CodeEdit/releases">
            CodeEdit Release Notes
          </a>
          .
        </HeroIntro>
        <Menu
          placement="bottom"
          trigger={() => (
            <Button>
              Jump to version
              <ChevronDown />
            </Button>
          )}
        >
          {releases.map((release) => (
            <MenuItem
              key={`jump-to-${release.id}`}
              onClick={() => {
                router.replace(`#${release.name}`);
              }}
            >
              {release.name}
            </MenuItem>
          ))}
        </Menu>
      </HeroSection>
      {releases.map((release, i) => (
        <Release release={release} latest={i === 0} key={release.id} />
      ))}
    </>
  );
}
