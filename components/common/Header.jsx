import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components'
import { ExternalLink } from "react-feather"
import Button from '@/components/common/Button';
import { Container } from '@/components/common/layout';
import { mediaQueries } from '@/styles/breakpoints';
import navigation from '@/data/navigation';

const Nav = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
  z-index: 9997;
  position: sticky;
  transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
  background-color: var(--material-background-color);
  backdrop-filter: var(--material-filters);
  box-shadow: 0 1px 0 0 var(--material-separator-color);
  * {
    box-sizing: content-box;
  }
`;
const Wrapper = styled.div`
`;
const HeaderContainer = styled(Container)`
  z-index: 2;
  display: flex;
  height: 52px;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h2`
  font-size: 21px;
  line-height: 1.14286;
  font-weight: 600;
  letter-spacing: .011em;
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  cursor: default;
  display: block;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  transition: color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
  color: var(--glyph-gray);
  a {
    display: inline-block;
    letter-spacing: inherit;
    line-height: inherit;
    margin: 0;
    text-decoration: none;
    white-space: nowrap;
    color: var(--glyph-gray);
    opacity: .92;
  }
`;
const Menu = styled.div`
  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  letter-spacing: -.01em;
  font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  display: flex;
  align-items: center;
  gap: 24px;
`;
const MenuTray = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  @media ${mediaQueries.sm} {
    display: none;
  }
`;
const MenuItems = styled.ul`
  @media only screen and (max-width: 767px) {
    opacity: 0;
    padding: 4px 24px 24px;
    transform: translate3d(0, -150px, 0);
    transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1) 0.5s,opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0.2s;
  }
`;
const MenuItem = styled.li`
    margin-left: 24px;
    float: left;
    list-style: none;
    display: flex;
    gap: 4px;
    align-items: center;
    a {
      color: var(--foreground-color);
      display: inline-block;
      line-height: 22px;
      white-space: nowrap;
      opacity: .88;
      &:hover {
        color: var(--glyph-blue);
      }
    }
    ${({ $current }) => $current ? `
      && a {
        color: var(--foreground-color) !important;
        opacity: 0.5;
      }
    ` : ``}
`;
const MenuLink = styled(Link)``;
const StyledExternalLink = styled(ExternalLink)`
  opacity: 0.5;
  margin-top: -2px;
`;
const MenuCtaAnchor = styled.a`
  display: none;
`;
const MenuCtaAnchorLabel = styled.span``;
const Actions = styled.div``;
const Action = styled.div``;

function Header() {
  const { asPath } = useRouter();

  return (
    <Nav role="navigation">
      <Wrapper>
        <HeaderContainer>
          <Title>
            <Link href="/">CodeEdit</Link>
          </Title>
          <Menu>
            <MenuCtaAnchor>
              <MenuCtaAnchorLabel>Open Menu</MenuCtaAnchorLabel>
            </MenuCtaAnchor>
            <MenuCtaAnchor>
              <MenuCtaAnchorLabel>Close Menu</MenuCtaAnchorLabel>
            </MenuCtaAnchor>
            <MenuTray>
              <MenuItems>
                {navigation.map(item => {
                  const isExternal = item.href.match(/(https?:\/\/[\w\d.-]+)/gi);

                  return (
                    <MenuItem key={item.href} $current={asPath === item.href} {...(isExternal ? { target: "_blank" } : {})}>
                      <MenuLink href={item.href}>
                        {item.label}
                      </MenuLink>
                      {isExternal && <StyledExternalLink size={11} />}
                    </MenuItem>
                  );
                })}
              </MenuItems>
            </MenuTray>
            <Actions>
              <Action>
                <label
                  htmlFor="codeeditnav-menustate"
                  className="codeeditnav-menucta"
                >
                  <span className="codeeditnav-menucta-chevron"></span>
                </label>
              </Action>
              <Action>
                <a>
                  <Button disabled compact>Download Coming Soon</Button>
                </a>
              </Action>
            </Actions>
          </Menu>
        </HeaderContainer>
      </Wrapper>
    </Nav>
  );
}

export default Header;
