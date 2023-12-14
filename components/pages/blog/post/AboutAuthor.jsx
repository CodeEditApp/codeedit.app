import Image from 'next/image';
import XSvg from '@/assets/x-icon.svg';
import GitHubSvg from '@/assets/github-icon.svg';
import { Globe } from 'react-feather';

const AboutAuthor = ({ author }) => {
  if (!author) return;

  console.log({author})

  return (
    <div className="about-author component">
      <div className="component-content">
        <h2 className="about-author-headline">About the Author</h2>
        <div className="author-container">
          <Image
            className="author-image"
            width="128"
            height="128"
            src={author.avatar_url}
            alt={`${author.name} user image`}
          />
          <div className="author-info">
            <p className="author-info-title">{author.name}</p>
            <p className="author-info-text">{author.location}</p>
            <p className="author-info-text">{author.bio}</p>
            <div className="author-social">
              <a
                className="author-social-link"
                href={author.blog}
                target="_blank"
              >
                <Globe />
              </a>
              <a
                className="author-social-link"
                href={`https://github.com/${author.login}`}
                target="_blank"
              >
                <GitHubSvg />
              </a>
              <a
                className="author-social-link"
                href={`https://x.com/${author.twitter_username}`}
                target="_blank"
              >
                <XSvg />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor
