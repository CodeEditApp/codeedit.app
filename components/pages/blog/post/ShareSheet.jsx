import { useRef } from "react";
import XSvg from '@/assets/x-icon.svg';
import FacebookSvg from '@/assets/facebook-icon.svg';
import { Link, Mail } from 'react-feather';

const ShareSheet = () => {
  const shareLinkInputRef = useRef();
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
    navigator.clipboard.writeText(window.location.href).then(
      function (data) {
        console.log('Copying to clipboard was successful!', data);
      },
      function (err) {
        console.log('Could not copy text: ', err);
      }
    );
  }

  return (
    <div className="sharesheet component">
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
                    `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
                  )
                }
              >
                <FacebookSvg />
              </button>
            </li>
            <li className="social-option">
              <button
                className="icon icon-twitter social-icon"
                title="Share via Twitter"
                aria-label="Share this article via Twitter (opens in new window)"
                onClick={() =>
                  window.open(
                    `https://x.com/intent/tweet?url=${window.location.href}`
                  )
                }
              >
                <XSvg />
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
                value={
                  typeof window !== 'undefined' ? window.location.href : ''
                }
                tabindex="-1"
                readonly=""
                aria-hidden="true"
                disabled="disabled"
              />
              <button
                className="icon icon-close sharesheet-link-close"
                title="close"
                aria-label="close link"
                tabindex="-1"
                aria-hidden="true"
                role="button"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareSheet;
