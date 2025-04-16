import { useRef } from "react";
import XSvg from '@/assets/x-icon.svg';
import BlueSkySvg from '@/assets/bluesky-icon.svg';
import FacebookSvg from '@/assets/facebook-icon.svg';
import { Link, Mail } from 'react-feather';
import styled from "styled-components";

const ShareSheetWrap = styled.div`
  &.component {
    margin-top: 32px;
    margin-bottom: 40px;
  }

  button {
    background: none;
    border: 0;
    box-sizing: content-box;
    color: inherit;
    cursor: pointer;
    font: inherit;
    line-height: inherit;
    overflow: visible;
    vertical-align: inherit;
  }

  .sharesheet-options {
    display: inline-flex;
    justify-content: flex-start;
    height: 71px;
  }

  .sharesheet-options,
  .headersplitview .sharesheet-options {
    height: 42px;
    overflow: visible;
  }

   .social-option {
    position: relative;
    z-index: 2;
    list-style: none;
    opacity: 1;
    display: block;
    opacity: 0.5;
    transition: opacity 0.3s cubic-bezier(0.4, 0, 0.25, 1) 0ms;
    &:hover {
      opacity: 1;
    }
  }

  .sharesheet-options .social-option {
    margin-top: 12px;
  }

   .social-option:first-child .social-icon {
    margin-left: -8px;
  }

   .social-option .social-icon {
    font-size: 24px;
    line-height: 24px;
    width: 24px;
    height: 24px;
    padding: 6px;
    margin-top: -6px;
    margin-bottom: -6px;
    svg {
      width: 18px;
      height: 18px;
    }
  }

  .social-option:first-child .social-icon {
    margin-left: -8px;
  }

  .sharesheet-options .social-option:first-child .social-icon {
    margin-left: -8px;
  }

  .sharesheet-options-open,
  .sharesheet-options-close {
    line-height: 1em;
    padding: 0;
  }

  .sharesheet-options-close,
  .sharesheet-options-open {
    display: none;
  }

  .sharesheet-link-container {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
    overflow: hidden;
  }

  .sharesheet-link-container {
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    opacity: 0.01;
    background-color: #f5f5f7;
    white-space: normal;
    text-align: left;
    top: 100%;
    z-index: -1;
  }
`;

const ShareSheet = () => {
  const shareLinkInputRef = useRef();

  const sanitizeUrl = (url) => {
    if (!url) return '';
    try {
      const urlObj = new URL(url);
      return encodeURIComponent(urlObj.toString());
    } catch (e) {
      console.error('Error sanitizing URL:', e);
      return '';
    }
  };

  const shareViaMail = () => {
    var subject = 'CodeEdit Blog Post';
    var body = window.location.href;
    var uri = 'mailto:?subject=';
    uri += encodeURIComponent(subject);
    uri += '&body=';
    uri += encodeURIComponent(body);
    window.open(uri);
  };

  function shareViaLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(
      function () {
        console.log('Copying to clipboard was successful!');
      },
      function (err) {
        console.error('Could not copy text: ', err);
      }
    );
  }

  return (
    <ShareSheetWrap className="sharesheet component">
      <div className="component-content">
        <div className="sharesheet-content tooltip-wrapper">
          <ul className="sharesheet-options">
            <li className="social-option">
              <button
                className="icon icon-facebook social-icon"
                title="Share via Facebook"
                aria-label="Share this article via Facebook (opens in new window)"
                onClick={() =>
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${sanitizeUrl(window.location.href)}`
                  )
                }
              >
                <FacebookSvg />
              </button>
            </li>
            <li className="social-option">
              <button
                className="icon icon-x social-icon"
                title="Share via X"
                aria-label="Share this article via X (opens in new window)"
                onClick={() =>
                  window.open(
                    `https://x.com/intent/tweet?url=${sanitizeUrl(window.location.href)}`
                  )
                }
              >
                <XSvg />
              </button>
            </li>
            <li className="social-option">
              <button
                className="icon icon-bluesky social-icon"
                title="Share via BlueSky"
                aria-label="Share this article via BlueSky (opens in new window)"
                onClick={() =>
                  window.open(
                    `https://bsky.app/intent/compose?text=${sanitizeUrl(window.location.href)}`
                  )
                }
              >
                <BlueSkySvg />
              </button>
            </li>
            <li className="social-option">
              <button
                className="icon icon-mail social-icon"
                title="Share via mail"
                aria-label="Share this article via Mail (opens in new window)"
                onClick={shareViaMail}
              >
                <Mail />
              </button>
            </li>
            <li className="social-option">
              <button
                className="icon icon-link social-icon"
                title="Share via link"
                aria-label="Share via link"
                onClick={shareViaLink}
              >
                <Link />
              </button>
            </li>
          </ul>
          <div className="sharesheet-link-container" aria-hidden="true">
            <div className="sharesheet-link-content">
              <input
                ref={shareLinkInputRef}
                className="link-text"
                value={typeof window !== 'undefined' ? window.location.href : ''}
                tabIndex="-1"
                readOnly
                aria-hidden="true"
                disabled
              />
              <button
                className="icon icon-close sharesheet-link-close"
                title="close"
                aria-label="close link"
                tabIndex="-1"
                aria-hidden="true"
                role="button"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </ShareSheetWrap>
  );
};

export default ShareSheet;
