import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  Section,
  SectionDivider,
  Grid,
  GridItem,
  Row,
  Column,
  Stack,
  Container,
} from '@/components/common/layout';
import Typography from '@/components/common/Typography';
import Markdown from '@/components/common/Markdown';
import Button from '@/components/common/Button';
import IconButton from '@/components/common/IconButton';
import Tile, { TileViolator } from '@/components/common/Tile';
import { Menu, MenuItem, MenuDivider } from '@/components/common/Menu';
import { ChevronDown, Link, Mail, Share } from 'react-feather';
import XSvg from '@/assets/x-icon.svg';
import FacebookSvg from '@/assets/facebook-icon.svg';
import { Router, useRouter } from 'next/router';

const HeroSection = styled(Section)`
  text-align: center;
`;
const HeroIntro = styled(Typography)`
  width: 75%;
  margin-left: auto;
  margin-right: auto;
`;
const ReleaseTile = styled(Tile)`
  border-radius: 18px;
  & > div {
    padding: 30px;
  }
`;
const ReleaseNameLink = styled.a`
  color: inherit;
  position: relative;
  &:after {
    content: '\\00a0#';
    font-weight: 400;
    opacity: 0;
  }
  &:hover {
    opacity: 0.75;
    &:after {
      opacity: 0.33;
    }
  }
`;

const StyledMarkdown = styled(Markdown)`
  img {
    width: 100%;
  }
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

function formatDate(fullDate) {
  const date = new Date(fullDate);
  return date.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(
    function (data) {
      console.log('Copying to clipboard was successful!', data);
    },
    function (err) {
      console.log('Could not copy text: ', err);
    }
  );
}

const sendInEmail = (name, url) => {
  var subject = `CodeEdit Release ${name}`;
  var body = url;
  var uri = 'mailto:?subject=';
  uri += encodeURIComponent(subject);
  uri += '&body=';
  uri += encodeURIComponent(body);
  window.open(uri);
};

export default function WhatsNewPage({ releases }) {
  const router = useRouter();
  return (
    <div>
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
      {releases.map((release, i) => {
        const appAsset = release.assets?.filter((asset) =>
          /^CodeEdit.*\.dmg$/.test(asset.name)
        )?.[0];

        let releaseUrl = '';

        if (typeof window !== 'undefined') {
          releaseUrl = `${window.location.href.split('#')[0]}#${release.name}`;
        }

        return (
          <React.Fragment key={release.id}>
            <SectionDivider contained />
            <Section contained gutterTop gutterBottom id={release.name}>
              <Row gap={5}>
                <Column width={{ sm: 12, lg: 4 }}>
                  <Stack gap={2} style={{ position: 'sticky', top: 96 }}>
                    <ReleaseTile>
                      <Stack gap>
                        <Stack align="start" gap={1}>
                          {i === 0 && <TileViolator>Latest</TileViolator>}
                          <Typography variant="eyebrow-super" as="h3">
                            <ReleaseNameLink href={`#${release.name}`}>
                              {release.name}
                            </ReleaseNameLink>
                          </Typography>
                          <Typography
                            as="span"
                            variant="body-reduced"
                            color="tertiary"
                          >
                            Released on {formatDate(release.published_at)}
                          </Typography>
                        </Stack>
                        <Stack
                          direction="horizontal"
                          align="center"
                          distribute="space-between"
                          style={{ width: '100%' }}
                        >
                          {appAsset && (
                            <Button href={appAsset.browser_download_url}>
                              Download
                            </Button>
                          )}
                          <Menu
                            trigger={() => (
                              <IconButton>
                                <Share />
                              </IconButton>
                            )}
                          >
                            <MenuItem
                              icon={Link}
                              onClick={() => {
                                copyToClipboard(releaseUrl);
                              }}
                            >
                              Copy Link
                            </MenuItem>
                            <MenuDivider />
                            <MenuItem
                              icon={FacebookSvg}
                              onClick={() =>
                                window.open(
                                  `https://www.facebook.com/sharer/sharer.php?u=${releaseUrl}`
                                )
                              }
                            >
                              Share on Facebook
                            </MenuItem>
                            <MenuItem
                              icon={XSvg}
                              onClick={() =>
                                window.open(
                                  `https://x.com/intent/tweet?url=${releaseUrl}`
                                )
                              }
                            >
                              Post on X
                            </MenuItem>
                            <MenuItem
                              icon={Mail}
                              onClick={() =>
                                sendInEmail(release.name, releaseUrl)
                              }
                            >
                              Send in Email
                            </MenuItem>
                          </Menu>
                        </Stack>
                      </Stack>
                    </ReleaseTile>
                    <Typography
                      variant="caption"
                      color="tertiary"
                      style={{ margin: '0 30px' }}
                    >
                      Requires macOS Ventura (13.0) or newer
                    </Typography>
                  </Stack>
                </Column>
                <Column width={{ sm: 12, lg: 8 }}>
                  <StyledMarkdown>{release.body}</StyledMarkdown>
                </Column>
              </Row>
            </Section>
          </React.Fragment>
        );
      })}
    </div>
  );
}
